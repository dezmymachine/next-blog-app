import { feature } from "@/definitions/types";
import Image from "next/image";

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
            height: "40dvh",
          }}
          className="object-cover"
        />
      </div>
      <div className="px-5">
        <h1>{title}</h1>
        <p>{createdAt.substring(0, 10)}</p>
        <p>{content}</p>
      </div>
    </div>
  );
}
