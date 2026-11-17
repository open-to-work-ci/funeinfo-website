import clsx from "clsx";
import type { ReactNode } from "react";
import Reveal from "./reveal";

/**
 * Section de page : padding vertical standard + conteneur 1320 px.
 * Usage : `<Section tone="canvas"><h2>…</h2></Section>`
 * `tone` : canvas (défaut) | surface | news (rose pâle).
 */
const tones = {
  canvas: "bg-canvas",
  surface: "bg-surface",
  news: "bg-news",
} as const;

export default function Section({
  children,
  tone = "canvas",
  className,
  reveal = true,
}: {
  children: ReactNode;
  tone?: keyof typeof tones;
  className?: string;
  reveal?: boolean;
}) {
  return (
    <section className={clsx("py-fi-40 md:py-fi-64", tones[tone], className)}>
      <div className="container-wide">
        {reveal ? <Reveal>{children}</Reveal> : children}
      </div>
    </section>
  );
}
