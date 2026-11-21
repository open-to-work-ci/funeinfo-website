import clsx from "clsx";
import { ArrowLeft, ArrowRight } from "lucide-react";

const roundBtn =
  "grid size-[clamp(2.5rem,3.7vw,4.4rem)] place-items-center rounded-pill bg-surface/35 text-surface transition-colors hover:bg-surface/55 " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-surface focus-visible:ring-offset-2 focus-visible:ring-offset-sea";

/** Flèches précédent / suivant (masquées sur mobile : défilement automatique + glissement au doigt). */
export default function HeroControls({
  onPrev,
  onNext,
  className,
}: {
  onPrev: () => void;
  onNext: () => void;
  /** Positionnement fourni par le slider (dans le flux sur mobile, absolu sur desktop). */
  className?: string;
}) {
  return (
    <div className={clsx("z-30 flex items-center gap-4 max-md:hidden md:gap-[1.2vw]", className)}>
      <button type="button" className={roundBtn} aria-label="Slide précédente" onClick={onPrev}>
        <ArrowLeft className="size-[45%]" aria-hidden="true" />
      </button>
      <button type="button" className={roundBtn} aria-label="Slide suivante" onClick={onNext}>
        <ArrowRight className="size-[45%]" aria-hidden="true" />
      </button>
    </div>
  );
}
