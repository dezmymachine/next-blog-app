import BlogCard from "./blog-card";
import Link from "next/link";
import { Blog } from "@/definitions/types";
import { prisma } from "../../../lib/db";
export default async function BlogGrid() {
  const posts: Blog[] = await prisma.post.findMany();
  return (
    <article className="">
      <div className="flex justify-between items-center px-5">
        <p className="font-bold text-xl">Trending posts</p>
        <Link href="/articles" className="text-orange-500 font-bold">
          View more &gt;&gt;
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-y-10  lg:grid-cols-3">
        {posts.map((post: Blog) => (
          <div className="p-5" key={post.id}>
            <BlogCard
              title={post.title}
              image={`${post.image}`}
              content={post.content}
              createdAt={`${post.createdAt}`}
              id={`${post.id}`}
            />
          </div>
        ))}
      </div>
    </article>
  );
}
