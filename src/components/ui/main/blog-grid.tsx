import BlogCard from "./blog-card";
import Link from "next/link";
import { prisma } from "../../../lib/db";
export default async function BlogGrid() {
  const posts = await prisma.post.findMany();
  return (
    <article className="">
      <div className="flex justify-center items-center gap-x-2  p-5">
        <p className="font-bold text-xl">Trending posts</p>
        <Link href="/articles" className="text-orange-500 font-bold">
          View more &gt;&gt;
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-y-10  lg:grid-cols-3">
        {posts.map((post) => (
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
