import clsx from "clsx";
import type { ReactNode } from "react";

/**
 * Section de /groupe : fond + conteneur éditorial 1170 px (`container-narrow`).
 * Usage : `<GroupSection id="reseau" className="pb-26">…</GroupSection>`
 * Le padding vertical est celui de la maquette (24 px haut/bas) ; `className` peut l'ajuster.
 */
export default function GroupSection({
  id,
  tone = "canvas",
  className,
  children,
}: {
  id?: string;
  tone?: "canvas" | "surface";
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={clsx("py-fi-24", tone === "canvas" ? "bg-canvas" : "bg-surface", className)}
    >
      <div className="container-narrow">{children}</div>
    </section>
  );
}
