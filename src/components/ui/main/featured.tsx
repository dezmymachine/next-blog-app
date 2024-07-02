import { prisma } from "@/lib/db";
import FeaturedCard from "./featured-card";
import { FeaturedBlog } from "@/definitions/types";
let ID = process.env.FEATURED_ID;
export default async function Featured() {
  const featured: FeaturedBlog | null = await prisma.post.findUnique({
    where: {
      id: `${ID}`,
    },
    select: {
      title: true,
      image: true,
      id: true,
    },
  });

  return (
    <main>
      {featured && (
        <>
          <FeaturedCard
            title={featured.title}
            image={featured.image}
            id={`${ID}`}
          />
        </>
      )}
    </main>
  );
}
