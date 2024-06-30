import { feature } from "@/definitions/types";
import Image from "next/image";
import CommentForm from "./comment-form";

export default function BlogPage({
  id,
  title,
  image,
  content,
  createdAt,
}: feature) {
  return (
    <div className="min-h-screen">
      <div className="">
        <Image
          src={image}
          alt={title}
          width={1500}
          height={500}
          sizes="100vw"
          style={{
            maxWidth: "100%",
            height: "50dvh",
          }}
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-8">
        <h1 className="text-xl sm:text-2xl font-bold mt-2">{title}</h1>
        <p className="text-sm text-zinc-600">{createdAt.substring(0, 10)}</p>
        <p className="leading-8">{content}</p>
      </div>
      <CommentForm/>
    </div>
  );
}
