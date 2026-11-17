"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

/**
 * Montée ligne par ligne depuis un masque, même rendu que `TextLines` (ui/motion) mais
 * déclenchée au montage : le `whileInView` de `TextLines` ne se déclenche jamais ici, car
 * l'observateur voit la ligne (décalée de 110 %) rognée par son propre masque `overflow-hidden`.
 * Sans animation si prefers-reduced-motion.
 */
export default function HeroLines({
  lines,
  className,
  delay = 0,
}: {
  lines: ReactNode[];
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <span className={className}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden">
          <motion.span
            className="block"
            initial={reduce ? false : { y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease, delay: delay + i * 0.12 }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
