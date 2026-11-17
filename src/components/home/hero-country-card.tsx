import type { CountryImage } from "@/content/countries";
import clsx from "clsx";
import Image from "next/image";

/** Écart entre deux cartes, en % de la largeur d'une carte. */
const STEP = 105;

/**
 * Carte photo de la vitrine d'une agence. `offset` = position dans le défilé
 * (0 : carte active, 1 : aperçu à droite, -1 : sort par la gauche). La carte glisse
 * latéralement et sa photo se décale moins vite (parallaxe), même durée et même
 * courbe que le fondu des fonds.
 */
export default function HeroCountryCard({
  image,
  offset,
}: {
  image: CountryImage;
  offset: number;
}) {
  const shown = offset === 0 || offset === 1;
  return (
    <div
      aria-hidden={offset !== 0}
      className={clsx(
        "absolute inset-0 transition-[transform,opacity] duration-700 ease-hero motion-reduce:transition-none",
        shown ? "opacity-100" : "opacity-0",
      )}
      style={{ transform: `translateX(${offset * STEP}%)` }}
    >
      <div className="relative size-full overflow-hidden rounded-[clamp(0.75rem,1.4vw,1.75rem)] bg-navy shadow-2xl">
        <div
          className="absolute inset-y-0 -inset-x-[10%] transition-transform duration-700 ease-hero motion-reduce:transition-none"
          style={{ transform: `translateX(${offset * -7}%)` }}
        >
          <Image
            src={image.src}
            alt={offset === 0 ? image.alt : ""}
            fill
            sizes="(min-width: 1024px) 41vw, (min-width: 768px) 63vw, 75vw"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
