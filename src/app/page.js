import About from "@/components/About";
import DubaiInspiration from "@/components/DubaiInspiration";
import FeaturedProperties from "@/components/FeaturedProperties";
import Hero from "@/components/HeroPage";
import Mission from "@/components/Mission";
import Stats from "@/components/Stats";
import Valuation from "@/components/Valuation";

export default function Home() {
  return (
    <>
      <Hero />
      <Mission />
      <Stats />
      <About />
      <FeaturedProperties />
      <DubaiInspiration />
      <Valuation />
    </>
  );
}
