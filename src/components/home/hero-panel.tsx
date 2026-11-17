import type { HeroCountrySlide } from "@/content/home";
import clsx from "clsx";

/**
 * Panneau de couleur unie (~1/3 droit du hero ; bande basse sur mobile). Il glisse depuis
 * la droite quand on quitte la slide 1, puis la couleur change en fondu d'un pays à l'autre.
 */
export default function HeroPanel({
  slides,
  active,
}: {
  slides: HeroCountrySlide[];
  /** Index de la slide pays active, ou -1 pour la slide d'introduction. */
  active: number;
}) {
  return (
    <div
      aria-hidden="true"
      className={clsx(
        "absolute inset-0 transition-[transform,opacity] duration-700 ease-hero motion-reduce:transition-none lg:inset-y-0 lg:left-auto lg:right-0 lg:w-[35%]",
        active >= 0 ? "translate-x-0 opacity-100" : "opacity-0 lg:translate-x-[60%]",
      )}
    >
      {slides.map((s, i) => (
        <div
          key={s.countryId}
          className={clsx(
            "absolute inset-0 transition-opacity duration-700 ease-hero motion-reduce:transition-none",
            s.panelClass,
            i === active ? "opacity-100" : "opacity-0",
          )}
        />
      ))}
    </div>
  );
}
