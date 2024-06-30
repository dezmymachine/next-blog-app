import { prisma } from "@/lib/db";
import FeaturedCard from "./featured-card";

let ID = process.env.FEATURED_ID;
export default async function Featured() {
  const featured = await prisma.post.findUnique({
    where: {
      id: `${ID}`,
    },
    select: {
      title: true,
      content: true,
      image: true,
      createdAt: true,
    },
  });

  return (
    <main>
      {featured && (
        <>
          <FeaturedCard
            title={featured?.title}
            content={featured?.content}
            image={`${featured?.image}`}
            createdAt={`${featured?.createdAt}`}
          />
        </>
      )}
    </main>
  );
}
