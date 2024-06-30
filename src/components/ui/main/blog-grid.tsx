import BlogCard from "./blog-card";
import Link from "next/link";
import { prisma } from "../../../lib/db";
export default async function BlogGrid() {
  const posts = await prisma.post.findMany();
  return (
    <article className="p-5">
      <div className="flex justify-between px-5">
        <p className="font-semibold text-xl">Trending posts</p>
        <Link href="/articles" className="text-orange-500 text-xl underline underline-offset-2">View all</Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <div className="">
            <BlogCard
              key={post.id}
              title={post.title}
              image={`${post.image}`}
              content={post.content}
              createdAt={`${post.createdAt}`}
            />
          </div>
        ))}
      </div>
    </article>
  );
}
