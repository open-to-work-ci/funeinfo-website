"use client";

import type { HeroIntro } from "@/content/home";
import { TextLines } from "@/components/ui/motion";

/**
 * Texte d'une slide : titre en 4 lignes (2 en gras, 2 en léger) + sous-titre.
 * La slide active monte ligne par ligne (`TextLines`, remonté à chaque activation) ;
 * les slides inactives restent statiques pour que le fondu sortant garde le texte.
 */
export default function HeroSlideText({ slide, active }: { slide: HeroIntro; active: boolean }) {
  const lines = [
    ...slide.strong.map((l) => (
      <span key={l} className="font-extrabold">
        {l}
      </span>
    )),
    ...slide.light.map((l) => {
      // « … » final en gras, comme la maquette
      const [text, dots] = l.split(" …");
      return (
        <span key={l} className="font-normal">
          {text}
          {dots !== undefined && <span className="font-extrabold"> …</span>}
        </span>
      );
    }),
  ];
  const sub = "mt-3 max-w-[44rem] font-poppins text-hero-sub font-bold leading-snug md:mt-fi-24";

  if (active) {
    return (
      <>
        <p className="font-poppins text-hero-title uppercase leading-[0.97]">
          <TextLines lines={lines} on="mount" />
        </p>
        <p className={sub}>
          <TextLines lines={[slide.subtitle]} on="mount" delay={0.5} />
        </p>
      </>
    );
  }
  return (
    <>
      <p className="font-poppins text-hero-title uppercase leading-[0.97]">
        {lines.map((line, i) => (
          <span key={i} className="block">
            {line}
          </span>
        ))}
      </p>
      <p className={sub}>{slide.subtitle}</p>
    </>
  );
}
