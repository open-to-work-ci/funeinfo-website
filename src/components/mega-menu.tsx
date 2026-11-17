"use client";

/**
 * Panneau de méga-menu desktop (2 colonnes, pleine largeur, aligné sur le
 * conteneur 1320 px). Contenu issu de `src/content/nav.ts`.
 */
import type { MegaMenu } from "@/content/nav";
import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

export default function MegaPanel({
  menu,
  onNavigate,
}: {
  menu: MegaMenu;
  onNavigate: () => void;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      id={`mega-${menu.id}`}
      initial={reduce ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={reduce ? { opacity: 0, transition: { duration: 0 } } : { opacity: 0 }}
      transition={{ duration: reduce ? 0 : 0.15, ease: "linear" }}
      className="absolute left-0 top-full w-full border-t border-line bg-surface text-navy shadow-xl"
    >
      <div className="container-wide grid grid-cols-[28rem_1fr] gap-fi-40 py-fi-24">
        <div>
          <div className="flex items-center gap-2">
            <Image src="/logo-funinfo-pink.svg" alt="" width={28} height={28} aria-hidden="true" />
            <p className="font-poppins text-body font-bold uppercase text-brand">{menu.heading}</p>
          </div>
          <p className="mt-fi-16 max-w-[26rem] pl-9 text-small">
            <strong className="font-poppins font-bold">{menu.lead}</strong>
            {menu.body}
          </p>
        </div>
        <div>
          <p className="font-poppins text-body font-bold uppercase text-brand">{menu.linksTitle}</p>
          <ul className="mt-2">
            {menu.links.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  onClick={onNavigate}
                  className="block py-1.5 font-poppins text-small font-semibold text-navy transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
