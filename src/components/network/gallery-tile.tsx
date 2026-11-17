"use client";

import clsx from "clsx";
import Image from "next/image";
import { motion, type Variants } from "motion/react";
import { ImageReveal } from "@/components/ui/motion";
import type { CountryImage } from "@/content/countries";

/**
 * Vignette de galerie : cadre arrondi (`className` porte rayon + aspect-ratio),
 * image `next/image` en `fill` dévoilée par `ImageReveal`. Reprend les variantes
 * `hidden/show/exit` du panneau parent pour l'apparition en cascade au changement d'onglet.
 * Usage : `<GalleryTile image={img} className="aspect-[4/3] rounded-tl-blob" sizes="…" />`
 */
export const tileVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, transition: { duration: 0.15 } },
};

export default function GalleryTile({
  image,
  className,
  sizes,
  priority,
}: {
  image: CountryImage;
  className: string;
  sizes: string;
  priority?: boolean;
}) {
  return (
    <motion.div variants={tileVariants} className={clsx("relative overflow-hidden bg-card", className)}>
      <ImageReveal className="absolute inset-0">
        <Image src={image.src} alt={image.alt} fill sizes={sizes} priority={priority} className="object-cover" />
      </ImageReveal>
    </motion.div>
  );
}
