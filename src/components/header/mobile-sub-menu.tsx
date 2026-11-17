"use client";

import type { NavItem } from "@/content/nav";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

const ease = [0.22, 1, 0.36, 1] as const;

/** Second niveau du menu mobile (contenu du méga-menu) avec bouton « Retour ». */
export default function MobileSubMenu({
  item,
  onBack,
  onNavigate,
}: {
  item: NavItem;
  onBack: () => void;
  onNavigate: () => void;
}) {
  const reduce = useReducedMotion();
  const mega = item.mega!;
  return (
    <motion.div
      initial={reduce ? { opacity: 0 } : { opacity: 0, x: "30%" }}
      animate={{ opacity: 1, x: 0 }}
      exit={reduce ? { opacity: 0 } : { opacity: 0, x: "30%" }}
      transition={{ duration: reduce ? 0 : 0.3, ease }}
      className="absolute inset-0 overflow-y-auto bg-surface text-navy"
    >
      <button
        type="button"
        onClick={onBack}
        className="flex w-full items-stretch border-b border-line text-kicker font-medium uppercase text-navy-alt focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand"
      >
        <span className="flex w-12 shrink-0 items-center pl-4">
          <ChevronLeft className="size-4" aria-hidden="true" />
        </span>
        <span className="flex flex-1 items-center border-l border-line py-4 pl-4">Retour</span>
      </button>

      <div className="px-4 pb-12">
        <div className="pt-6">
          <div className="flex items-center gap-2">
            <Image
              src="/logo-header-gradient.svg"
              alt=""
              width={300}
              height={180}
              aria-hidden="true"
              sizes="3rem"
              className="h-7 w-auto"
            />
            <p className="font-poppins text-body font-bold uppercase text-brand">{mega.heading}</p>
          </div>
          <p className="mt-3 text-small text-navy">
            <strong className="font-poppins font-bold">{mega.lead}</strong>
            {mega.body}
          </p>
        </div>
        <p className="mt-8 font-poppins text-body font-bold uppercase text-brand">
          {mega.linksTitle}
        </p>
        <ul className="mt-2">
          {mega.links.map((link, i) => (
            <motion.li
              key={link.label}
              initial={reduce ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease, delay: reduce ? 0 : 0.12 + i * 0.05 }}
            >
              <Link
                href={link.href}
                onClick={onNavigate}
                className="flex items-center justify-between border-b border-line-strong py-4 font-poppins text-small font-semibold text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand"
              >
                {link.label}
                <ChevronRight className="size-4 shrink-0 text-brand" aria-hidden="true" />
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
