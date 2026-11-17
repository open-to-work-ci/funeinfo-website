"use client";

import { motion, useReducedMotion } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

/**
 * Texte ligne à ligne : chaque ligne monte depuis un masque, en cascade, quand le bloc entre
 * dans l'écran. Même effet que `TextLines` (ui/motion) mais le déclencheur est le bloc
 * visible (et non la ligne masquée, que l'IntersectionObserver ne voit jamais). Statique si
 * `prefers-reduced-motion`.
 * Usage : `<RevealLines lines={["Première ligne", "Seconde ligne"]} delay={0.2} />`
 */
export default function RevealLines({ lines, delay = 0 }: { lines: string[]; delay?: number }) {
  const reduce = useReducedMotion();
  if (reduce) {
    return (
      <span>
        {lines.map((line, i) => (
          <span key={i} className="block">
            {line}
          </span>
        ))}
      </span>
    );
  }
  return (
    <motion.span
      className="block"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ staggerChildren: 0.12, delayChildren: delay }}
    >
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden">
          <motion.span
            className="block"
            variants={{
              hidden: { y: "110%" },
              show: { y: 0, transition: { duration: 0.8, ease } },
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
