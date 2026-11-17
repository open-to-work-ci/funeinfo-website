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
}: {
  kicker?: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="bg-navy py-fi-40 text-surface md:py-fi-64">
      <Reveal className="container-wide space-y-4">
        {kicker && <Kicker>{kicker}</Kicker>}
        <h1 className="font-poppins text-section font-bold md:text-page md:leading-[3rem]">
          {title}
        </h1>
        {children && <div className="max-w-3xl">{children}</div>}
      </Reveal>
    </div>
  );
}
