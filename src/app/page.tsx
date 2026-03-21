import Hero from "@/components/Hero";
import About from "@/components/About";
import InfiniteScroller from "@/components/InfiniteScroller";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex-1 w-full">
      <Hero />
      <About />
      <InfiniteScroller />
      <Projects />
      <Contact />
    </main>
  );
}