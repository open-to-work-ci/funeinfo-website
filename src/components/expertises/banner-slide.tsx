"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

/**
 * Fait glisser une bannière depuis le côté `from` (opposé à son bloc magenta) à l'entrée
 * dans l'écran. Sans animation si `prefers-reduced-motion`.
 * Usage : `<BannerSlide from="right"><article>…</article></BannerSlide>`
 */
export default function BannerSlide({
  from,
  children,
}: {
  from: "left" | "right";
  children: ReactNode;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div>{children}</div>;
  return (
    <motion.div
      initial={{ opacity: 0, x: from === "right" ? "7%" : "-7%" }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
