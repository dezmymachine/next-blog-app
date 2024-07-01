import {
  BlogGridSkeleton,
  FeatureCardSkeleton,
} from "@/components/ui/main/skeletons";
import Container from "@/components/ui/main/container";
export default function Loading() {
  return (
    <>
    <FeatureCardSkeleton/>
      <Container>
        <BlogGridSkeleton />
      </Container>
    </>
  );
}
