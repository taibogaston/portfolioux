import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import InfiniteScroller from "@/components/InfiniteScroller";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen text-foreground relative">
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <About />
          <InfiniteScroller />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}