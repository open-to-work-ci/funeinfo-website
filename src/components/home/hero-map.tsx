"use client";

import clsx from "clsx";
import type { ReactNode } from "react";

/**
 * TAILLE ET POSITION DE LA CARTE (une seule ligne à régler) :
 * - mobile : carte débordante centrée, pour rester lisible ;
 * - desktop : la carte occupe toute la zone du hero (1 % de marge en haut et en bas) et
 *   s'ajuste (le SVG garde ses proportions) : elle est donc TOUJOURS entière, jamais
 *   rognée, et au maximum de la hauteur disponible. Pour l'agrandir davantage au prix
 *   d'un bas de carte rogné, remplacer `md:inset-y-[1%]` par `md:inset-y-[-6%]`.
 */
const MAP_BOX =
  "absolute bottom-[8%] left-1/2 aspect-[1000/551] w-[190%] -translate-x-1/2 md:inset-x-0 md:inset-y-[1%] md:aspect-auto md:w-auto md:translate-x-0";

/**
 * Fond du hero : conteneur de la carte du monde (le SVG, rendu côté serveur par
 * `HeroMapSvg`, arrive en `children`). Léger zoom avant/arrière à chaque changement de
 * slide (transition CSS, coupée si prefers-reduced-motion).
 */
export default function HeroMap({ zoomed, children }: { zoomed: boolean; children: ReactNode }) {
  return (
    <div className={MAP_BOX} aria-hidden="true">
      <div
        className={clsx(
          "relative size-full origin-center transition-transform duration-[2200ms] ease-out motion-reduce:transition-none",
          zoomed ? "scale-[1.06]" : "scale-100",
        )}
      >
        {children}
      </div>
    </div>
  );
}
