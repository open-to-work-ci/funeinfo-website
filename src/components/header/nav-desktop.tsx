"use client";

import MegaPanel from "@/components/mega-menu";
import { navItems } from "@/content/nav";
import { AnimatePresence } from "motion/react";
import Link from "next/link";
import { EternityLink, FiatIftaLink } from "./external-links";
import { NavLabel, navLinkClass } from "./nav-link";

/** Navigation desktop (≥ 1024 px) : liens, méga-menus au survol/focus, Eternity et FIAT-IFTA. */
export default function NavDesktop({
  activeIndex,
  isActive,
  onOpen,
  onScheduleClose,
  onCloseNow,
  onNavigate,
}: {
  activeIndex: number | null;
  isActive: (href: string) => boolean;
  onOpen: (index: number) => void;
  onScheduleClose: () => void;
  onCloseNow: () => void;
  onNavigate: () => void;
}) {
  const color = "text-brand hover:text-brand-deep";
  return (
    <nav aria-label="Navigation principale" className="hidden h-full nav:block">
      <ul className="flex h-full items-stretch">
        {navItems.map((item, index) => (
          <li
            key={item.label}
            onMouseEnter={() => item.mega && onOpen(index)}
            onMouseLeave={onScheduleClose}
            onBlur={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget as Node | null)) onCloseNow();
            }}
            className="flex items-stretch not-first:ml-nav"
          >
            {item.mega ? (
              <button
                type="button"
                aria-expanded={activeIndex === index}
                aria-controls={`mega-${item.mega.id}`}
                aria-current={isActive(item.href) ? "page" : undefined}
                onClick={() => (activeIndex === index ? onCloseNow() : onOpen(index))}
                className={`${navLinkClass} ${color}`}
              >
                <NavLabel active={isActive(item.href)}>{item.label}</NavLabel>
              </button>
            ) : (
              <Link
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`${navLinkClass} ${color}`}
              >
                <NavLabel active={isActive(item.href)}>{item.label}</NavLabel>
              </Link>
            )}

            <AnimatePresence>
              {item.mega && activeIndex === index && (
                <div onMouseEnter={() => onOpen(index)}>
                  <MegaPanel menu={item.mega} onNavigate={onNavigate} />
                </div>
              )}
            </AnimatePresence>
          </li>
        ))}

        {/* Filet + Eternity (maquette : ≈ 25 px de part et d'autre du filet) */}
        <li aria-hidden="true" className="my-auto ml-6 h-4 w-px bg-eternity/50" />
        <li className="ml-6 flex items-stretch">
          <EternityLink />
        </li>
        <li className="ml-[clamp(1.5rem,2.1vw,2.4rem)] flex items-center">
          <FiatIftaLink />
        </li>
      </ul>
    </nav>
  );
}
