import { subscriptionSchema } from "@/lib/schema";
import { prisma } from "@/lib/db";

export const subscribe = async (
  prevState: { message: string },
  formData: FormData
) => {
  const parse = subscriptionSchema.safeParse({
    email: formData.get("email"),
  });
  if(!parse.success){
    return{message:"Error validating email, try again"}
  }

  await prisma.subscribe.create({
    data: {
      email: parse.data.email,
    },
  });
  return { message: "Subscribed successfully" };
};
