"use server";
import { postSchema } from "@/lib/schema";
import cloudinary from "@/utils/cloudinary";
import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const createPost = async (
  prevState: { message: string },
  formData: FormData
): Promise<any> => {
  const parse = postSchema.safeParse({
    title: formData.get("title"),
    content: formData.get("content"),
    image: formData.get("image"),
  });

  if (!parse.success) {
    return { message: "Data validation failed" };
  }

  const data = parse.data;
  try {
    let imageUrl = "";
    if (data.image instanceof File) {
      const arrayBuffer = await data.image.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      const result = await new Promise((resolve, reject) => {
        cloudinary.uploader
          .upload_stream({ resource_type: "auto" }, (error, result) => {
            if (error) reject(error);
            else resolve(result);
          })
          .end(buffer);
      });
      imageUrl = (result as any).secure_url;
    }
    //add data to database
    await prisma.post.create({
      data: {
        title: data.title,
        content: data.content,
        image: imageUrl,
      },
    });
  } catch (error) {
    return { message: "Failed to create post" };
  }
  revalidatePath("/admin");
  redirect("/admin");
};
