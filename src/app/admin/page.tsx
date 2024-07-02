import Link from "next/link";
import React from "react";
import { prisma } from "@/lib/db";
import { feature } from "@/definitions/types";

export default async function page() {
  const posts = await prisma.post.findMany();
  return (
    <div className="min-h-screen py-20 px-10">
      <h3 className="">All Posts</h3>
      {posts &&
        posts.map((post) => (
          <div key={post.id} className="flex items-center gap-x-2">
            <p className="font-bold">{post.title}</p>
          </div>
        ))}
      <div className="mt-4">
        <Link href="/admin/create" className="border border-orange-300 p-2">
          Create Post
        </Link>
      </div>
    </div>
  );
}
