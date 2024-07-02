import Image from "next/image";
import Link from "next/link";
import { FeaturedBlog } from "@/definitions/types";

export default function FeaturedCard({ title, image, id }: FeaturedBlog) {
  return (
    <div
      className="flex flex-col items-center justify-center overflow-hidden"
      style={{ height: "70dvh" }}
    >
      <div className="">
        <Image
          src={image || ""}
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
      <div
        className="h-full w-full bg-black opacity-70 absolute"
        style={{ height: "50dvh" }}
      ></div>
      <div className="absolute text-center text-white mx-auto max-w-[700px] text-xl px-5 sm:p-0">
        <Link href={`/articles/${id}`}>
          <p className="sm:text-2xl font-bold hover:text-orange-500">{title}</p>
        </Link>
      </div>
    </div>
  );
}
