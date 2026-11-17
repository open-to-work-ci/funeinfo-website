"use client";

/**
 * Presets d'animation partagés (motion/react). Tous respectent
 * `prefers-reduced-motion` (rendu statique) et ne s'animent qu'une fois
 * à l'entrée dans l'écran.
 *
 * - `<Stagger>` + `<StaggerItem>` : apparition en cascade d'une liste/grille.
 * - `<ImageReveal>` : image qui se dévoile (léger zoom + fondu) à l'entrée.
 * - `<Parallax>` : décalage vertical lent d'un fond selon le scroll.
 * - `<HoverLift>` : carte qui se soulève au survol/focus.
 * - `<TextLines>` : titre dont chaque ligne monte depuis un masque.
 * Pour une apparition simple, utiliser `<Reveal>` ; pour un compteur,
 * `home/count-up.tsx`.
 */
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type Variants,
} from "motion/react";
import { useRef, type ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

const container = (gap: number, delay: number): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: gap, delayChildren: delay } },
});

const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

export function Stagger({
  children,
  className,
  gap = 0.1,
  delay = 0,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  gap?: number;
  delay?: number;
  as?: "div" | "ul" | "ol";
}) {
  const reduce = useReducedMotion();
  const Tag = motion[as];
  if (reduce) {
    const Static = as;
    return <Static className={className}>{children}</Static>;
  }
  return (
    <Tag
      className={className}
      variants={container(gap, delay)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
    >
      {children}
    </Tag>
  );
}

export function StaggerItem({
  children,
  className,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "li";
}) {
  const reduce = useReducedMotion();
  const Tag = motion[as];
  if (reduce) {
    const Static = as;
    return <Static className={className}>{children}</Static>;
  }
  return (
    <Tag className={className} variants={item}>
      {children}
    </Tag>
  );
}

export function ImageReveal({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 1.06 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, ease }}
    >
      {children}
    </motion.div>
  );
}

export function Parallax({
  children,
  className,
  distance = 60,
}: {
  children: ReactNode;
  className?: string;
  /** Décalage maximal en px (haut → bas du passage dans l'écran). */
  distance?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-distance, distance]);
  return (
    <div ref={ref} className={className}>
      <motion.div style={reduce ? undefined : { y }} className="h-full">
        {children}
      </motion.div>
    </div>
  );
}

export function HoverLift({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      whileHover={reduce ? undefined : { y: -6 }}
      whileFocus={reduce ? undefined : { y: -6 }}
      transition={{ duration: 0.25, ease }}
    >
      {children}
    </motion.div>
  );
}

export function TextLines({
  lines,
  className,
  lineClassName,
}: {
  lines: ReactNode[];
  className?: string;
  lineClassName?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <span className={className}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden">
          <motion.span
            className={`block ${lineClassName ?? ""}`}
            initial={reduce ? false : { y: "110%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease, delay: i * 0.12 }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
