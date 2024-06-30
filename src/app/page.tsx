import BlogGrid from "@/components/ui/main/blog-grid";
import Featured from "@/components/ui/main/featured";
import NewsLetter from "@/components/ui/main/newsletter";
import Container from "@/components/ui/main/container";
export default function Home() {
  return (
    <>
      <main className="">
        <Featured />
        <Container>
          <BlogGrid />
          <NewsLetter />
        </Container>
      </main>
    </>
  );
}
