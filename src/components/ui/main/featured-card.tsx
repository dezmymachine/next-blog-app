import Image from "next/image";
import { feature } from "@/definitions/types";

export default function FeaturedCard({ title, image, createdAt }: feature) {
  return (
    <div className="flex flex-col items-center justify-center overflow-hidden">
      <Image
        src={image}
        alt={title}
        width={1500}
        height={500}
        sizes="100vw"
        style={{
          maxWidth: "100%",
          height: "70dvh",
        }}
        className="object-cover"
      />
      <div
        className="h-full w-full bg-black opacity-70 absolute"
        style={{ height: "70dvh" }}
      ></div>
      <div className="absolute text-center text-white mx-auto max-w-[700px] text-xl px-5 sm:p-0">
        <p>{title}</p>
        <button className="border-2 p-2 mt-5 border-orange-300 w-44 rounded-lg">
          Read
        </button>
      </div>
    </div>
  );
}
