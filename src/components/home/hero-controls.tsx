import { ArrowLeft, ArrowRight } from "lucide-react";

const pad = (n: number) => String(n).padStart(2, "0");

const roundBtn =
  "grid size-[clamp(2.5rem,3.7vw,4.4rem)] place-items-center rounded-pill bg-surface/35 text-surface transition-colors hover:bg-surface/55 " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-surface focus-visible:ring-offset-2 focus-visible:ring-offset-sea";

/** Flèches précédent / suivant + compteur « 01 - 05 », sous le titre. */
export default function HeroControls({
  active,
  total,
  onPrev,
  onNext,
}: {
  active: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
}) {
  return (
    <div className="absolute bottom-[clamp(1.5rem,17.3%,14rem)] left-6 z-10 flex items-center gap-[1.4vw] md:left-[55%] md:gap-[1.2vw]">
      <button type="button" className={roundBtn} aria-label="Slide précédente" onClick={onPrev}>
        <ArrowLeft className="size-[45%]" aria-hidden="true" />
      </button>
      <button type="button" className={roundBtn} aria-label="Slide suivante" onClick={onNext}>
        <ArrowRight className="size-[45%]" aria-hidden="true" />
      </button>
      <p className="ml-[1.6vw] font-poppins text-hero-count font-semibold text-surface/85" aria-live="off">
        {pad(active + 1)} - {pad(total)}
      </p>
    </div>
  );
}
