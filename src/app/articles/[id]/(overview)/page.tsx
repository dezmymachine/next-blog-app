import { prisma } from "@/lib/db";
import BlogPage from "@/components/ui/main/blog-page";

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const post = await prisma.post.findUnique({
    where: {
      id: params.id,
    },
  });
  return (
    <main className="mt-16">
      {post && (
        <BlogPage
          key={id}
          image={`${post.image}`}
          title={post.title}
          content={post.content}
          createdAt={`${post.createdAt}`}
        />
      )}
    </main>
  );
}
