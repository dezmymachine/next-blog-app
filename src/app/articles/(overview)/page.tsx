import BlogCard from "@/components/ui/main/blog-card";
import { prisma } from "@/lib/db";
export default async function Page() {
  const posts = await prisma.post.findMany();
  return (
    <main className="mt-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
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
    </main>
  );
}
