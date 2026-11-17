"use client";

import { motion, useReducedMotion } from "motion/react";

/**
 * Fond violet du bloc « Rejoignez-nous » : se déploie en scaleX depuis la gauche
 * à l'entrée dans l'écran (rendu statique si prefers-reduced-motion).
 */
export default function JoinUsPanel({ className }: { className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      aria-hidden
      className={className}
      style={{ originX: 0 }}
      initial={reduce ? false : { scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    />
  );
}
