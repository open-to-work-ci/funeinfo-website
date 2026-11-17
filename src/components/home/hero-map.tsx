import clsx from "clsx";
import Image from "next/image";

/**
 * Fond du hero : carte du monde (réseau en prune, reste en gris) posée en bas à
 * gauche. Léger zoom avant/arrière à chaque changement de slide (transition CSS,
 * coupée si prefers-reduced-motion). Sur mobile, la carte déborde pour rester lisible.
 */
export default function HeroMap({ zoomed }: { zoomed: boolean }) {
  return (
    <div
      className="pointer-events-none absolute bottom-[8%] left-1/2 aspect-[1000/526] w-[190%] -translate-x-1/2 md:bottom-[3.5%] md:left-[7.2%] md:w-[84.6%] md:translate-x-0"
      aria-hidden="true"
    >
      <div
        className={clsx(
          "relative size-full origin-center transition-transform duration-[2200ms] ease-out motion-reduce:transition-none",
          zoomed ? "scale-[1.06]" : "scale-100",
        )}
      >
        <Image src="/map-hero.svg" alt="" fill preload sizes="100vw" className="object-contain" />
      </div>
    </div>
  );
}
