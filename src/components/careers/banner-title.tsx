"use client";

import { motion, useReducedMotion } from "motion/react";

/**
 * Texte du titre de bannière : monte depuis un masque au chargement (équivalent de `TextLines`,
 * mais déclenché au montage : `TextLines` repose sur `whileInView` et son élément, translaté hors de
 * son masque `overflow-hidden`, n'est jamais « visible » pour l'IntersectionObserver).
 * Statique si prefers-reduced-motion.
 */
export default function BannerTitle({ children }: { children: string }) {
  const reduce = useReducedMotion();
  return (
    <span className="block overflow-hidden">
      {/* pt : laisse de la place à l'accent de « È » dans le masque. */}
      <motion.span
        className="block pt-[0.2em]"
        initial={reduce ? false : { y: "110%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      >
        {children}
      </motion.span>
    </span>
  );
}
