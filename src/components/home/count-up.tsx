"use client";

import { animate, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

/**
 * Compteur animé au scroll. La valeur finale reste lisible par les lecteurs
 * d'écran (la valeur animée est `aria-hidden`) ; sans animation si
 * `prefers-reduced-motion` ou sans JS.
 */
export default function CountUp({
  value,
  prefix = "",
  digits = 1,
}: {
  value: number;
  prefix?: string;
  digits?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();
  const [current, setCurrent] = useState(value);
  const format = (n: number) => `${prefix}${String(Math.round(n)).padStart(digits, "0")}`;

  useEffect(() => {
    if (reduce) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- amorce l'animation côté client uniquement
    setCurrent(0);
  }, [reduce]);

  useEffect(() => {
    if (!inView || reduce) return;
    const controls = animate(0, value, {
      duration: 3.4,
      ease: "easeOut",
      onUpdate: setCurrent,
    });
    return () => controls.stop();
  }, [inView, reduce, value]);

  return (
    <span ref={ref}>
      <span aria-hidden="true">{format(current)}</span>
      <span className="sr-only">{format(value)}</span>
    </span>
  );
}
