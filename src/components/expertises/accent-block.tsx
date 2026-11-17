"use client";

import clsx from "clsx";
import { motion, useReducedMotion } from "motion/react";

/**
 * Bloc magenta qui dépasse derrière une bannière (maquette : ≈ 95 % de la largeur,
 * débordant de ≈ 1,5 % sous la photo). Il se « dessine » depuis son coin (`scaleX`).
 * `side` = côté où il dépasse ; la bannière arrive du côté opposé.
 * Usage : `<AccentBlock side="left" />` dans un parent `relative`.
 */
export default function AccentBlock({ side }: { side: "left" | "right" }) {
  const reduce = useReducedMotion();
  const className = clsx(
    "absolute bottom-0 top-[14%] w-[94%] bg-brand lg:top-[19%] lg:w-[95.5%]",
    side === "left" ? "left-0" : "right-0",
  );
  if (reduce) return <div aria-hidden="true" className={className} />;
  return (
    <motion.div
      aria-hidden="true"
      className={className}
      style={{ transformOrigin: side }}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
    />
  );
}
