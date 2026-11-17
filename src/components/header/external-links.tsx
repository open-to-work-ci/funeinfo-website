import { ETERNITY_URL, FIAT_IFTA_URL } from "@/content/links";
import clsx from "clsx";
import Image from "next/image";
import { NavLabel, navLinkClass } from "./nav-link";

/** Lien externe « ETERNITY » (bleu, maquette #1084be). */
export function EternityLink({ className }: { className?: string }) {
  return (
    <a
      href={ETERNITY_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={clsx(navLinkClass, "text-eternity", className)}
    >
      <NavLabel>Eternity</NavLabel>
    </a>
  );
}

/** Logo FIAT-IFTA (lien externe). SVG redessiné : à remplacer par le fichier officiel. */
export function FiatIftaLink({
  className,
  imageClassName,
}: {
  className?: string;
  imageClassName?: string;
}) {
  return (
    <a
      href={FIAT_IFTA_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={clsx(
        "block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2",
        className,
      )}
    >
      <Image
        src="/logo-fiat-ifta.svg"
        alt="FIAT-IFTA, The World Organisation of Funeral Operatives"
        width={127}
        height={62}
        sizes="8rem"
        className={clsx("h-[3.9rem] w-auto", imageClassName)}
      />
    </a>
  );
}
