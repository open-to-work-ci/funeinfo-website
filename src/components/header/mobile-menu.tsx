"use client";

import { navItems } from "@/content/nav";
import clsx from "clsx";
import { ChevronRight } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion, type Variants } from "motion/react";
import Link from "next/link";
import { EternityLink, FiatIftaLink } from "./external-links";
import MobileSubMenu from "./mobile-sub-menu";

const ease = [0.22, 1, 0.36, 1] as const;
const row =
  "flex w-full items-center justify-between py-4 font-poppins text-nav font-bold uppercase text-brand " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand";

/**
 * Panneau mobile (< 1024 px) : glisse depuis le haut, entrées en cascade ;
 * les rubriques à sous-menu ouvrent un second niveau avec « Retour ».
 */
export default function MobileMenu({
  open,
  subIndex,
  onSub,
  isActive,
  onNavigate,
}: {
  open: boolean;
  subIndex: number | null;
  onSub: (index: number | null) => void;
  isActive: (href: string) => boolean;
  onNavigate: () => void;
}) {
  const reduce = useReducedMotion();
  const panel: Variants = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: "-4%" },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduce ? 0 : 0.3,
        ease,
        staggerChildren: reduce ? 0 : 0.06,
        delayChildren: reduce ? 0 : 0.08,
      },
    },
  };
  const item: Variants = {
    hidden: reduce ? { opacity: 1 } : { opacity: 0, y: 14 },
    show: { opacity: 1, y: 0, transition: { duration: reduce ? 0 : 0.35, ease } },
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          id="mobile-menu"
          variants={panel}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="fixed inset-x-0 bottom-0 top-header overflow-hidden bg-surface nav:hidden"
        >
          <div className="h-full overflow-y-auto">
            <nav aria-label="Navigation mobile" className="px-fi-16 pb-fi-40 pt-fi-16">
              <ul className="flex flex-col">
                {navItems.map((navItem, index) => (
                  <motion.li key={navItem.label} variants={item} className="border-b border-line">
                    {navItem.mega ? (
                      <button
                        type="button"
                        onClick={() => onSub(index)}
                        aria-expanded={subIndex === index}
                        aria-haspopup="true"
                        className={clsx(row, "text-left")}
                      >
                        {navItem.label}
                        <ChevronRight className="size-5 shrink-0" aria-hidden="true" />
                      </button>
                    ) : (
                      <Link
                        href={navItem.href}
                        onClick={onNavigate}
                        aria-current={isActive(navItem.href) ? "page" : undefined}
                        className={row}
                      >
                        {navItem.label}
                      </Link>
                    )}
                  </motion.li>
                ))}
                <motion.li variants={item} className="border-b border-line">
                  <EternityLink className="py-4" />
                </motion.li>
                <motion.li variants={item} className="pt-fi-24">
                  <FiatIftaLink className="inline-block" />
                </motion.li>
              </ul>
            </nav>
          </div>

          <AnimatePresence>
            {subIndex !== null && navItems[subIndex].mega && (
              <MobileSubMenu
                item={navItems[subIndex]}
                onBack={() => onSub(null)}
                onNavigate={onNavigate}
              />
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
