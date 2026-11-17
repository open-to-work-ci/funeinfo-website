"use client";

/**
 * Header global. Desktop (≥ 1024 px) : barre blanche de 117 px (maquette) avec
 * méga-menus au survol / focus ; elle se compacte et prend une ombre légère
 * dès qu'on scrolle. Mobile : burger + panneau à deux niveaux (Échap ou
 * navigation ferment, scroll du body bloqué).
 * La barre est en `fixed` ; un espaceur de `--spacing-header` réserve sa place
 * (le contenu ne saute donc pas quand la barre se compacte).
 */
import { Menu, X } from "lucide-react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import HeaderLogo from "./header-logo";
import MobileMenu from "./mobile-menu";
import NavDesktop from "./nav-desktop";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  // Rubrique dans laquelle on est descendu sur mobile (null = liste principale)
  const [mobileIndex, setMobileIndex] = useState<number | null>(null);
  const [compact, setCompact] = useState(false);

  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const barRef = useRef<HTMLElement>(null);

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (y) => setCompact(y > 24));

  const close = () => {
    setOpen(false);
    setMobileIndex(null);
    setActiveIndex(null);
  };
  const openMenu = (index: number) => {
    if (timer.current) clearTimeout(timer.current);
    setActiveIndex(index);
  };
  // Léger délai à la sortie de la souris pour éviter le clignotement
  const scheduleClose = () => {
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setActiveIndex(null), 150);
  };

  // Échap ferme les menus ; un clic extérieur ferme le panneau desktop
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        setMobileIndex(null);
        setActiveIndex(null);
      }
    };
    const onPointer = (e: PointerEvent) => {
      if (!barRef.current?.contains(e.target as Node)) setActiveIndex(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, []);

  // Bloque le scroll du body quand le menu mobile est ouvert
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <div className="h-header">
      <motion.header
        ref={barRef}
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        data-shadow={compact || open}
        className="fixed inset-x-0 top-0 z-50 border-b border-hairline bg-surface transition-shadow duration-300 data-[shadow=true]:shadow-[0_6px_20px_-10px_rgb(7_30_46/0.3)] motion-reduce:transition-none"
      >
        <div
          data-compact={compact}
          className="flex h-header items-center justify-between px-fi-16 transition-[height] duration-300 ease-out nav:pl-[clamp(1rem,6.6vw,8.3rem)] nav:pr-[clamp(1rem,2.4vw,2.9rem)] nav:data-[compact=true]:h-header-compact motion-reduce:transition-none"
        >
          <HeaderLogo onNavigate={close} compact={compact} />

          <NavDesktop
            activeIndex={activeIndex}
            isActive={isActive}
            onOpen={openMenu}
            onScheduleClose={scheduleClose}
            onCloseNow={() => setActiveIndex(null)}
            onNavigate={close}
          />

          <button
            type="button"
            className="-mr-2 p-2 text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand nav:hidden"
            onClick={() => {
              setOpen((v) => !v);
              setMobileIndex(null);
            }}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? (
              <X className="size-7" aria-hidden="true" />
            ) : (
              <Menu className="size-7" aria-hidden="true" />
            )}
          </button>
        </div>

        <MobileMenu
          open={open}
          subIndex={mobileIndex}
          onSub={setMobileIndex}
          isActive={isActive}
          onNavigate={close}
        />
      </motion.header>
    </div>
  );
}
