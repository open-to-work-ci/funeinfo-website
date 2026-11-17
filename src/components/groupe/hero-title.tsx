"use client";

import { motion, useReducedMotion } from "motion/react";

/**
 * Titre h1 du hero : chaque ligne monte depuis un masque (même effet que `TextLines`).
 * Déclenché à l'`animate` (le hero est toujours à l'écran) : le `whileInView` de
 * `TextLines` ne se déclenche pas ici, car la ligne démarre hors de son propre masque
 * `overflow-hidden` et n'intersecte donc jamais le viewport (voir PR).
 * Désactivé avec `prefers-reduced-motion`.
 * Usage : `<HeroTitle lines={["L’assistance funéraire qui soulage …"]} />`
 */
export default function HeroTitle({ lines, className }: { lines: string[]; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <h1 className={className}>
      {lines.map((line, i) => (
        <span key={line} className="block overflow-hidden pb-[0.15em] -mb-[0.15em]">
          <motion.span
            className="block"
            initial={reduce ? false : { y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 + i * 0.12 }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </h1>
  );
}
