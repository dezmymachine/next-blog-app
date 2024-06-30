import BlogGrid from "@/components/ui/main/blog-grid";
import Featured from "@/components/ui/main/featured";
import Footer from "@/components/ui/main/footer";
import NewsLetter from "@/components/ui/main/newsletter";


export default function Home() {
  return (
    <main className="">
      <Featured/>
      <BlogGrid/>
      <NewsLetter/>
      <Footer/>
    </main>
  );
}
