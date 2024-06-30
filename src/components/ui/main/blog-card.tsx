import React from "react";
import { feature } from "@/definitions/types";
import Image from "next/image";
import Link from "next/link";
export default function BlogCard({
  title,
  image,
  content,
  createdAt,
  id,
}: feature) {
  return (
    <div className=" flex flex-col max-w-[400px] gap-y-2">
      <div className="">
        <Image src={image} width={400} height={400} alt={title} />
      </div>

      <p className="text-sm text-zinc-600">{createdAt.substring(0, 10)}</p>
      <p className="font-bold sm:text-xl text-sm line-clamp-1">{title}</p>
      <p className="text-sm line-clamp-2 leading-5">
        {content.substring(0, 120)}
      </p>
      <Link
        href={`/articles/${id}`}
        className="font-semibold p-1 text-white mt-2 bg-orange-500 w-1/3  hover:bg-orange-300 hover:text-black text-center"
      >
        Read
      </Link>
    </div>
  );
}
