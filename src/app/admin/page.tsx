import Link from "next/link";
import React from "react";
import { prisma } from "@/lib/db";

export default async function page() {
  const posts = await prisma.post.findMany();
  return (
    <div>
      <h3>All Posts</h3>
      {posts &&
        posts.map((post, index) => (
          <div key={post.id} className="flex items-center gap-x-2">
            <p className="text-zinc-500">{index + 1}.</p>
            <p className="font-bold">{post.title}</p>
          </div>
        ))}
      <div className="mt-4">
        <Link href="/admin/create" className="border border-orange-300 p-2">
          Create Posts
        </Link>
      </div>
    </div>
  );
}
