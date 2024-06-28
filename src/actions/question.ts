"use server";
import { z } from "zod";
import { prisma } from "@/lib/db";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

//zod schema
const questionSchema = z.object({
  faq: z.string().min(1, { message: "Question must be filled" }),
});
export async function AddQuestion(
  prevState: { message: string },
  formData: FormData
): Promise<any> {
  //parse formdata
  const parse = questionSchema.safeParse({
    faq: formData.get("faq"),
  });
  if (!parse.success) {
    return { message: "Addition failed" };
  }

  const data = parse.data;

  //add faq to database
  await prisma.question.create({
    data: {
      faq: data.faq,
    },
  });
  revalidatePath("/dashboard");
}

export async function deleteQuestion(id: string) {
  //find and delete
  await prisma.question.delete({
    where: {
      id: `${id}`,
    },
  });
  console.log(`deleted ${id}`);
  revalidatePath("/admin");
}

export async function updateQuestion(id: string, formData: FormData) {
  //parse formdata
  const parse = questionSchema.safeParse({
    faq: formData.get("faq"),
  });
  if (!parse.success) {
    return { message: "Addition failed" };
  }

  const data = parse.data;

  //add updated faq to database
  await prisma.question.update({
    where: {
      id: `${id}`,
    },
    data: {
      faq: data.faq,
    },
  });
  console.log(`updated ${id}`);
  revalidatePath(`/admin/${id}/edit`);
  redirect("/admin");
}
