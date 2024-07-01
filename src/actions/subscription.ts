"use server"
import { subscriptionSchema } from "@/lib/schema";
import { prisma } from "@/lib/db";

export const subscribe = async (
  prevState: { message: string },
  formData: FormData
): Promise<any> => {
  const parse = subscriptionSchema.safeParse({
    email: formData.get("email"),
  });
  if (!parse.success) {
    return { message: "Error validating email, try again" };
  }
  const data = parse.data;
  try {
    await prisma.subscribe.create({
      data: {
        email: data.email,
      },
    });
    return { message: "Subscribed successfully" };
  } catch (error) {}
};
