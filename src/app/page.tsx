import CtaBanner from "@/components/home/cta-banner";
import HeroMapSvg from "@/components/home/hero-map-svg";
import HeroSlider from "@/components/home/hero-slider";
import Intro from "@/components/home/intro";
import NewsSection from "@/components/home/news-section";
import PartnersMarquee from "@/components/home/partners-marquee";
import Stats from "@/components/home/stats";
import Tagline from "@/components/home/tagline";
import WorldMap from "@/components/home/world-map";
import { cta } from "@/content/home";
import type { Metadata } from "next";

const description =
  "Fune Info Africa accompagne les familles avec excellence funéraire : organisation d’obsèques, rapatriement de corps à l’international et soutien discret dans les moments difficiles.";

// Pas de `title` : la page racine hérite du `title.default` du layout (le template ne s'applique pas au même segment).
export const metadata: Metadata = {
  description,
};

export default function Home() {
  return (
    <>
      <HeroSlider map={<HeroMapSvg />} />
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
