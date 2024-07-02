import Link from "next/link";
import React from "react";
import { prisma } from "@/lib/db";

type Post = {
  id: string;
  title: string;
};
export default async function page() {
  const posts: Post[] = await prisma.post.findMany();
  return (
    <div className="min-h-screen py-20 px-10">
      <h3 className="">All Posts</h3>
      {posts &&
        posts.map((post: Post, index: number) => (
          <div key={post.id} className="flex items-center gap-x-2">
            <p>{index + 1}</p>
            <p className="font-bold">{post.title}</p>
          </div>
        ))}
      <div className="mt-4">
        <Link href="/admin/create" className="text-white bg-orange-500 p-2">
          Create Post
        </Link>
      </div>
    </div>
  );
}
