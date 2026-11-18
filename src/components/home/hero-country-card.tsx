import type { CountryImage } from "@/content/countries";
import clsx from "clsx";
import Image from "next/image";

/** Écart entre deux cartes, en % de la largeur d'une carte. */
const STEP = 105;

/** Nombre de positions du défilé (intro + 4 pays) : les écarts sont ramenés dans [-1, N-2]. */
const SLOTS = 5;

/**
 * Carte photo de la vitrine d'une agence. `offset` = position dans le défilé
 * (0 : carte active, 1 : aperçu à droite, -1 : sortie à gauche). La carte glisse
 * latéralement et sa photo se décale moins vite (parallaxe). En sortant, elle traverse
 * le volet gauche et quitte l'écran (`--card-exit`, défini par le conteneur) au lieu de
 * s'estomper ; les cartes lointaines attendent hors écran à droite.
 */
export default function HeroCountryCard({
  image,
  offset,
}: {
  image: CountryImage;
  offset: number;
}) {
  const pos = ((((offset + 1) % SLOTS) + SLOTS) % SLOTS) - 1;
  const shown = pos <= 1;
  const x = pos < 0 ? "calc(var(--card-exit) * -1)" : `${pos * STEP}%`;
  return (
    <div
      aria-hidden={pos !== 0}
      className={clsx(
        "absolute inset-0 transition-[transform,opacity] duration-[450ms] ease-hero motion-reduce:transition-none",
        shown ? "opacity-100" : "opacity-0",
      )}
      style={{ transform: `translateX(${x})` }}
    >
      <div className="relative size-full overflow-hidden rounded-[clamp(0.75rem,1.4vw,1.75rem)] bg-navy shadow-2xl">
        <div
          className="absolute inset-y-0 -inset-x-[10%] transition-transform duration-[450ms] ease-hero motion-reduce:transition-none"
          style={{ transform: `translateX(${Math.max(pos, -1) * -7}%)` }}
        >
          <Image
            src={image.src}
            alt={pos === 0 ? image.alt : ""}
            fill
            sizes="(min-width: 1024px) 41vw, (min-width: 768px) 63vw, 75vw"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
