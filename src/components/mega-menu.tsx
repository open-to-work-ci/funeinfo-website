"use client";

/**
 * Panneau de méga-menu desktop : pleine largeur sous la barre, contenu aligné
 * sur le conteneur 1320 px (colonne texte à gauche, liens à droite).
 * Animation : fondu + léger glissement vers le bas, contenu en cascade
 * (statique en prefers-reduced-motion). Contenu issu de `src/content/nav.ts`.
 */
import type { MegaMenu } from "@/content/nav";
import { motion, useReducedMotion, type Variants } from "motion/react";
import Image from "next/image";
import Link from "next/link";

const ease = [0.22, 1, 0.36, 1] as const;

function variants(reduce: boolean | null) {
  const panel: Variants = {
    hidden: reduce
      ? { opacity: 0, transition: { duration: 0 } }
      : { opacity: 0, y: -10, transition: { duration: 0.15, ease: "easeIn" } },
    show: {
      opacity: 1,
      y: 0,
      transition: reduce
        ? { duration: 0 }
        : { duration: 0.25, ease, when: "beforeChildren", staggerChildren: 0.05 },
    },
  };
  const child: Variants = {
    hidden: reduce ? { opacity: 1 } : { opacity: 0, y: 8 },
    show: { opacity: 1, y: 0, transition: { duration: reduce ? 0 : 0.3, ease } },
  };
  return { panel, child };
}

export default function MegaPanel({
  menu,
  onNavigate,
}: {
  menu: MegaMenu;
  onNavigate: () => void;
}) {
  const reduce = useReducedMotion();
  const { panel, child } = variants(reduce);
  return (
    <motion.div
      id={`mega-${menu.id}`}
      variants={panel}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="absolute left-0 top-full w-full border-t border-hairline bg-surface text-black shadow-[0_18px_30px_-18px_rgb(7_30_46/0.35)]"
    >
      <div className="container-wide grid grid-cols-[auto_1fr] gap-x-[clamp(3rem,5.2vw,6.25rem)] pb-fi-40 pt-[0.6rem]">
        <motion.div variants={child}>
          <div className="flex items-center gap-[0.3rem]">
            <Image
              src="/logo-header-gradient.svg"
              alt=""
              width={300}
              height={180}
              aria-hidden="true"
              sizes="2rem"
              className="h-[0.95rem] w-auto"
            />
            <p className="font-poppins text-mega-title font-bold uppercase text-brand">
              {menu.heading}
            </p>
          </div>
          <p className="mt-[0.6rem] whitespace-pre-line pl-[1.9rem] font-poppins text-mega-text font-normal text-black">
            <strong className="font-bold">{menu.lead}</strong>
            {menu.body}
          </p>
        </motion.div>

        <div>
          <motion.p
            variants={child}
            className="font-poppins text-mega-title font-bold uppercase text-brand"
          >
            {menu.linksTitle}
          </motion.p>
          <ul className="-mt-[0.25rem]">
            {menu.links.map((link) => (
              <motion.li key={link.label} variants={child}>
                <Link
                  href={link.href}
                  onClick={onNavigate}
                  className="block w-fit py-[0.28rem] font-poppins text-mega-text font-semibold text-black transition-colors duration-150 hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 motion-reduce:transition-none"
                >
                  {link.label}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
