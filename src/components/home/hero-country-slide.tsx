import type { Country } from "@/content/countries";
import clsx from "clsx";
import Image from "next/image";

/**
 * Fond d'une slide pays : photo assombrie sur les ~2/3 gauche du hero (toute la zone
 * haute sur mobile). La slide qui devient active balaie le volet à la verticale (entre par
 * le bas, ou par le haut au retour) par-dessus l'ancienne, qui reste dessous le temps du
 * balayage puis disparaît.
 *
 * TODO(assets) : photos de fond des 4 pays à fournir (drapeau + pont d'Abidjan, tour
 * Eiffel, pont de Brazzaville, lettres « Guinée »). Provisoire : photo d'agence
 * agrandie, floutée et très assombrie.
 */
export default function HeroCountrySlide({
  country,
  active,
  enter,
}: {
  country: Country;
  active: boolean;
  /** Sens d'entrée : « up » (suivant, par le bas) ou « down » (précédent, par le haut). */
  enter: "up" | "down";
}) {
  const image = country.images[0];
  return (
    <div
      aria-hidden="true"
      className={clsx(
        "absolute inset-y-0 left-0 w-full overflow-hidden bg-navy lg:w-[65%]",
        active
          ? clsx("z-[2] opacity-100 motion-reduce:animate-none", enter === "up" ? "animate-hero-wipe-up" : "animate-hero-wipe-down")
          : "z-0 opacity-0 transition-opacity delay-[450ms] duration-[1ms] motion-reduce:delay-0",
      )}
    >
      <div
        className={clsx(
          "absolute inset-0 transition-transform duration-[1400ms] ease-hero motion-reduce:transition-none",
          active ? "scale-100" : "scale-110",
        )}
      >
        <Image
          src={image.src}
          alt=""
          fill
          sizes="(min-width: 1024px) 30vw, 50vw"
          className="scale-125 object-cover blur-2xl"
        />
      </div>
      <div className="absolute inset-0 bg-black/65" />
    </div>
  );
}
