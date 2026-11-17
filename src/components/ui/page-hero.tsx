import type { ReactNode } from "react";
import Kicker from "./kicker";
import Reveal from "./reveal";

/**
 * Bandeau bleu nuit d'en-tête de page : kicker + titre (h1) + paragraphe.
 * Usage : `<PageHero kicker="Notre groupe" title="L'assistance…">Texte</PageHero>`
 */
export default function PageHero({
  kicker,
  title,
  children,
  wide = false,
}: {
  kicker?: string;
  title: string;
  children?: ReactNode;
  /** Élargit le paragraphe (≈ 1150 px au lieu de 768 px). */
  wide?: boolean;
}) {
  return (
    <div className="bg-navy py-fi-40 text-surface md:py-fi-64">
      <Reveal className="container-wide space-y-4">
        {kicker && <Kicker>{kicker}</Kicker>}
        <h1 className="font-poppins text-section font-bold md:text-page md:leading-[3rem]">
          {title}
        </h1>
        {children && <div className={wide ? "max-w-6xl" : "max-w-3xl"}>{children}</div>}
      </Reveal>
    </div>
  );
}
