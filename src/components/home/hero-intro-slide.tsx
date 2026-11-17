import type { HeroIntro } from "@/content/home";
import clsx from "clsx";
import type { ReactNode } from "react";
import HeroMap from "./hero-map";
import HeroSlideText from "./hero-slide-text";

/**
 * Slide 1 : carte du monde grisée + titre « Un réseau international… » entre deux filets.
 * Fondu enchaîné avec les slides pays ; la carte zoome légèrement en sortant.
 */
export default function HeroIntroSlide({
  slide,
  active,
  label,
  map,
}: {
  slide: HeroIntro;
  active: boolean;
  /** Libellé accessible de la slide (« 1 sur 5 »). */
  label: string;
  /** Carte du monde SVG (rendue côté serveur). */
  map: ReactNode;
}) {
  return (
    <div
      role="group"
      aria-roledescription="slide"
      aria-label={label}
      inert={!active}
      className={clsx(
        "absolute inset-0 z-20 transition-opacity duration-700 ease-hero motion-reduce:transition-none",
        active ? "opacity-100" : "pointer-events-none opacity-0",
      )}
    >
      <HeroMap zoomed={!active}>{map}</HeroMap>
      <div className="absolute inset-0 flex flex-col items-start pl-6 pr-6 md:pl-[11.2vw] md:pr-[10vw]">
        {/* Filets : écarts avec le titre mesurés sur la maquette (≈ 100 px au-dessus, ≈ 125 px
            en dessous à 1905 px) ; le filet du bas est ≈ 3× plus long que celui du haut. */}
        <span className="w-0.5 flex-1 bg-surface/60 md:flex-[26]" aria-hidden="true" />
        <div className="my-fi-24 pl-0.5 md:mb-[6.6vw] md:mt-[5.25vw]">
          <HeroSlideText slide={slide} active={active} />
        </div>
        <span className="w-0.5 flex-1 bg-surface/60 md:flex-[74]" aria-hidden="true" />
      </div>
    </div>
  );
}
