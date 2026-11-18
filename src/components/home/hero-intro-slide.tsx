import type { HeroIntro } from "@/content/home";
import clsx from "clsx";
import type { ReactNode } from "react";
import HeroMap from "./hero-map";
import HeroSlideText from "./hero-slide-text";

/**
 * Slide 1 : carte du monde grisée + titre « Un réseau international… » entre deux filets.
 * Quand on y revient, elle balaie le volet à la verticale comme les slides pays ; la carte
 * zoome légèrement en sortant. Les filets se redessinent à chaque affichage.
 */
export default function HeroIntroSlide({
  slide,
  active,
  label,
  map,
  enter,
}: {
  slide: HeroIntro;
  active: boolean;
  /** Libellé accessible de la slide (« 1 sur 5 »). */
  label: string;
  /** Carte du monde SVG (rendue côté serveur). */
  map: ReactNode;
  /** Sens d'entrée du balayage ; absent au premier affichage (pas d'animation). */
  enter?: "up" | "down";
}) {
  return (
    <div
      role="group"
      aria-roledescription="slide"
      aria-label={label}
      inert={!active}
      className={clsx(
        "absolute inset-0",
        active
          ? clsx(
              "z-20 opacity-100 motion-reduce:animate-none",
              enter === "up" && "animate-hero-wipe-up",
              enter === "down" && "animate-hero-wipe-down",
            )
          : "pointer-events-none z-0 opacity-0 transition-opacity delay-[450ms] duration-[1ms] motion-reduce:delay-0",
      )}
    >
      <HeroMap zoomed={!active}>{map}</HeroMap>
      <div className="absolute inset-0 flex flex-col items-start pl-6 pr-6 md:pl-[11.2vw] md:pr-[10vw]">
        {/* Filets : écarts avec le titre mesurés sur la maquette (≈ 100 px au-dessus, ≈ 125 px
            en dessous à 1905 px) ; le filet du bas est ≈ 3× plus long que celui du haut. */}
        <span
          key={`top-${active}`}
          className="w-0.5 flex-1 origin-top animate-hero-line bg-surface/60 motion-reduce:animate-none md:flex-[26]"
          aria-hidden="true"
        />
        <div className="my-fi-24 pl-0.5 md:mb-[6.6vw] md:mt-[5.25vw]">
          <HeroSlideText slide={slide} active={active} />
        </div>
        <span
          key={`bottom-${active}`}
          className="w-0.5 flex-1 origin-bottom animate-hero-line bg-surface/60 motion-reduce:animate-none md:flex-[74]"
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
