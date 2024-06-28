"use server";
import { z } from "zod";
import { verify } from "@node-rs/argon2";
import { prisma } from "@/lib/db";
import { cookies } from "next/headers";
import { lucia } from "@/lib/lucia";
import { redirect } from "next/navigation";
import { hash } from "argon2";
import { validateRequest } from "@/lib/validate";
import { generateIdFromEntropySize } from "lucia";

export async function signup(
  prevState: { message: string },
  formData: FormData
): Promise<any> {
  //zod schema
  const signUpSchema = z.object({
    name: z.string().optional(),
    email: z.string().email(),
    password: z.string().min(8),
  });

  //parse data for validation
  const parse = signUpSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!parse.success) {
    return {
      error: "Invalid data",
    };
  }
  const data = parse.data;

  //check if email is already used
  try {
    const existingUser = await prisma.user.findUnique({
      where: {
        email: data.email,
      },
    });

    if (existingUser) {
      return {
        error: "Email already in use",
      };
    }

    const passwordHash = await hash(data.password, {
      // recommended minimum parametersd
      memoryCost: 19456,
      timeCost: 2,
      parallelism: 1,
    });
    const userId = generateIdFromEntropySize(10); // 16 characters long

    //create user
    const user = await prisma.user.create({
      data: {
        id: userId,
        name: data.name,
        email: data.email,
        password: passwordHash,
      },
    });
    const session = await lucia.createSession(user.id, {});
    const sessionCookie = lucia.createSessionCookie(session.id);
    cookies().set(
      sessionCookie.name,
      sessionCookie.value,
      sessionCookie.attributes
    );
    console.log(`signed up ${user.email}`);
  } catch (error) {
    return {
      error: "Something went wrong,try again",
    };
  }
  return redirect("/login");
}

export const signIn = async (
  prevState: { message: string },
  formData: FormData
): Promise<any> => {
  const signInSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
  });
  const parse = signInSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });
  if (!parse.success) {
    return { error: "Invalid Credentials!" };
  }
  const data = parse.data;
  const user = await prisma.user.findUnique({
    where: {
      email: data.email,
    },
  });
  if (!user || !user.password) {
    return { error: "Invalid Credentials!" };
  }
  const passwordMatch = await verify(user.password, data.password, {
    memoryCost: 19456,
    timeCost: 2,
    parallelism: 1,
  });
  if (!passwordMatch) {
    return { error: "Invalid Credentials!" };
  }
  // successfully login
  const session = await lucia.createSession(user.id, {});
  const sessionCookie = lucia.createSessionCookie(session.id);
  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes
  );
  return redirect("/dashboard");
};

//logout
export const logout = async (): Promise<any> => {
  const { session } = await validateRequest();
  if (!session) {
    return {
      error: "Unauthorized",
    };
  }

  await lucia.invalidateSession(session.id);

  const sessionCookie = lucia.createBlankSessionCookie();
  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes
  );
  return redirect("/login");
};
