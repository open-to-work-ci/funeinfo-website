import CtaBanner from "@/components/home/cta-banner";
import HeroSlider from "@/components/home/hero-slider";
import Intro from "@/components/home/intro";
import NewsSection from "@/components/home/news-section";
import PartnersMarquee from "@/components/home/partners-marquee";
import Stats from "@/components/home/stats";
import Tagline from "@/components/home/tagline";
import WorldMap from "@/components/home/world-map";
import { cta } from "@/content/home";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <Intro />
      <Stats />
      <WorldMap />
      <Tagline />
      <CtaBanner {...cta} />
      <NewsSection />
      <PartnersMarquee />
    </>
  );
}
