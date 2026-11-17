import HeroSlider from "@/components/home/hero-slider";
import Intro from "@/components/home/intro";
import Stats from "@/components/home/stats";
import Tagline from "@/components/home/tagline";
import WorldMap from "@/components/home/world-map";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <Intro />
      <Stats />
      <WorldMap />
      <Tagline />
    </>
  );
}
