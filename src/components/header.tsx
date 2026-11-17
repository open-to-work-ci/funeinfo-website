"use client";

/**
 * Header global : logo, navigation principale, ETERNITY et logo FIAT-IFTA.
 * Desktop (≥1024 px) : barre blanche avec méga-menus au survol / focus.
 * Mobile : burger + panneau plein écran à deux niveaux (fermeture à `Échap`
 * ou à la navigation, scroll du body bloqué).
 */
import { ETERNITY_URL, FIAT_IFTA_URL } from "@/content/links";
import clsx from "clsx";
import { ChevronLeft, ChevronRight, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type MegaMenu = {
  heading: string;
  subtitle: string;
  content: string;
  links: { label: string; href: string }[];
};

type NavItem = { label: string; href: string; mega?: MegaMenu };

const navItems: NavItem[] = [
  {
    label: "Notre groupe",
    href: "/groupe",
    mega: {
      heading: "À propos de Fune Info Africa",
      subtitle: "Notre mission d’opérateur de services funéraires :",
      content:
        "apporter des réponses personnalisées et un service exemplaire à nos clients et à nos partenaires.",
      links: [
        { label: "Missions", href: "/groupe" },
        { label: "Engagements", href: "/groupe" },
      ],
    },
  },
  {
    label: "Nos expertises",
    href: "/expertises",
    mega: {
      heading: "Nos expertises",
      subtitle: "Acteur référent des services funéraires,",
      content:
        "Fune Info Africa mobilise ses agences, sa flotte et ses équipes partout en Côte d’Ivoire pour organiser un dernier hommage à la hauteur de chaque famille.",
      links: [
        { label: "Organisation d’obsèques", href: "/expertises" },
        { label: "Rapatriement de corps", href: "/expertises" },
      ],
    },
  },
  { label: "Carrières", href: "/carrieres" },
];

const linkStyle =
  "font-poppins text-nav font-bold uppercase whitespace-nowrap transition-colors duration-150 " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  // Rubrique dans laquelle on est descendu sur mobile (null = liste principale)
  const [mobileIndex, setMobileIndex] = useState<number | null>(null);

  const close = () => {
    setOpen(false);
    setMobileIndex(null);
    setActiveIndex(null);
  };

  // Échap ferme les menus
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // Bloque le scroll du body quand le menu mobile est ouvert
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-50 border-b border-line bg-surface"
    >
      <div className="flex h-header items-center justify-between px-fi-16 nav:px-fi-40 2xl:px-32">
        <Link
          href="/"
          aria-label="Accueil"
          onClick={close}
          className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
        >
          <Image
            src="/logo-header-color.svg"
            alt="Fune Info Africa"
            width={87}
            height={53}
            priority
            className="h-[53px] w-auto nav:h-[85px]"
          />
        </Link>

        <nav
          aria-label="Navigation principale"
          className="hidden h-full nav:block"
        >
          <ul className="flex h-full items-stretch gap-fi-40 2xl:gap-fi-64">
            {navItems.map((item, index) => (
              <li
                key={item.label}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
                onFocus={() => setActiveIndex(index)}
                onBlur={(e) => {
                  if (!e.currentTarget.contains(e.relatedTarget as Node | null))
                    setActiveIndex(null);
                }}
                className="flex items-stretch"
              >
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  aria-haspopup={item.mega ? "true" : undefined}
                  aria-expanded={item.mega ? activeIndex === index : undefined}
                  className={clsx(
                    linkStyle,
                    "relative flex items-center text-brand hover:text-brand-deep",
                    isActive(item.href) &&
                      "after:absolute after:inset-x-0 after:bottom-0 after:h-1 after:bg-brand",
                  )}
                >
                  {item.label}
                </Link>

                <AnimatePresence>
                  {item.mega && activeIndex === index && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.25, ease: "linear" }}
                      className="absolute left-0 top-full w-full bg-surface text-ink shadow-xl"
                    >
                      <div className="container-wide grid grid-cols-3 gap-10 py-10">
                        <div className="relative col-span-1 pl-[43px]">
                          <Image
                            src="/logo-funinfo-pink.svg"
                            alt=""
                            width={35}
                            height={35}
                            aria-hidden="true"
                            className="absolute left-0 top-0"
                          />
                          <p className="mb-[0.4rem] pt-4 text-[18px] font-bold uppercase leading-[27px] text-navy-alt">
                            {item.mega.heading}
                          </p>
                          <p className="text-[16px] font-medium text-gold">
                            {item.mega.subtitle}
                          </p>
                          <p className="text-[13px] leading-5 text-ink">
                            {item.mega.content}
                          </p>
                        </div>
                        <div className="col-span-2 grid grid-cols-2 gap-x-10">
                          <ul className="pt-5">
                            <li>
                              <Link
                                href={item.href}
                                onClick={close}
                                className="block py-2 text-base font-bold uppercase text-navy-alt transition-colors duration-150 hover:text-gold"
                              >
                                {item.label}
                              </Link>
                            </li>
                            {item.mega.links.map((link) => (
                              <li key={link.label}>
                                <Link
                                  href={link.href}
                                  onClick={close}
                                  className="group relative flex items-center py-2 text-sm font-normal text-navy-alt transition-colors duration-150 hover:text-gold"
                                >
                                  <span
                                    aria-hidden="true"
                                    className="absolute left-0 top-1/2 h-px w-0 -translate-y-1/2 bg-gold transition-[width] duration-[400ms] ease-out group-hover:w-[15px]"
                                  />
                                  <span className="inline-block transition-transform duration-[400ms] ease-out group-hover:translate-x-[15px]">
                                    {link.label}
                                  </span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            ))}

            <li
              aria-hidden="true"
              className="-ml-fi-16 my-auto h-6 w-px bg-eternity/40 2xl:-ml-fi-24"
            />
            <li className="-ml-fi-16 flex items-center 2xl:-ml-fi-24">
              <a
                href={ETERNITY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={clsx(linkStyle, "text-eternity hover:opacity-80")}
              >
                Eternity
              </a>
            </li>
            <li className="flex items-center">
              <a
                href={FIAT_IFTA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
              >
                <Image
                  src="/logo-fiat-ifta.svg"
                  alt="FIAT-IFTA, The World Organisation of Funeral Operatives"
                  width={130}
                  height={68}
                  className="h-[68px] w-auto"
                />
              </a>
            </li>
          </ul>
        </nav>

        <button
          type="button"
          className="text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand nav:hidden"
          onClick={() => {
            setOpen((v) => !v);
            setMobileIndex(null);
          }}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <X className="size-7" /> : <Menu className="size-7" />}
        </button>
      </div>

      {open && (
        <div
          id="mobile-menu"
          className="absolute left-0 top-header h-[calc(100dvh-var(--spacing-header))] w-full overflow-y-auto bg-surface nav:hidden"
        >
          <nav aria-label="Navigation mobile" className="px-fi-16 pb-fi-40 pt-fi-16">
            <ul className="flex flex-col">
              {navItems.map((item, index) => (
                <li key={item.label} className="border-b border-line">
                  {item.mega ? (
                    <button
                      type="button"
                      onClick={() => setMobileIndex(index)}
                      aria-expanded={mobileIndex === index}
                      className={clsx(
                        linkStyle,
                        "flex w-full items-center justify-between py-4 text-left text-brand",
                      )}
                    >
                      {item.label}
                      <ChevronRight className="size-5 shrink-0" />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={close}
                      aria-current={isActive(item.href) ? "page" : undefined}
                      className={clsx(
                        linkStyle,
                        "flex w-full items-center justify-between py-4 text-brand",
                      )}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
              <li className="border-b border-line">
                <a
                  href={ETERNITY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={clsx(linkStyle, "block py-4 text-eternity")}
                >
                  Eternity
                </a>
              </li>
              <li className="pt-fi-24">
                <a
                  href={FIAT_IFTA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Image
                    src="/logo-fiat-ifta.svg"
                    alt="FIAT-IFTA, The World Organisation of Funeral Operatives"
                    width={130}
                    height={68}
                    className="h-[68px] w-auto"
                  />
                </a>
              </li>
            </ul>
          </nav>

          <AnimatePresence>
            {mobileIndex !== null && navItems[mobileIndex].mega && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: "linear" }}
                className="absolute inset-0 overflow-y-auto bg-surface text-ink"
              >
                <button
                  type="button"
                  onClick={() => setMobileIndex(null)}
                  className="flex w-full items-stretch border-b border-line text-[11px] font-medium uppercase text-navy-alt"
                >
                  <span className="flex w-12 shrink-0 items-center pl-4">
                    <ChevronLeft className="size-4" />
                  </span>
                  <span className="flex flex-1 items-center border-l border-line py-4 pl-4">
                    Retour
                  </span>
                </button>
                <MobileSub item={navItems[mobileIndex]} onNavigate={close} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </motion.header>
  );
}

function MobileSub({
  item,
  onNavigate,
}: {
  item: NavItem;
  onNavigate: () => void;
}) {
  const mega = item.mega!;
  return (
    <div className="px-4 pb-12">
      <div className="relative pl-[43px] pt-6">
        <Image
          src="/logo-funinfo-pink.svg"
          alt=""
          width={35}
          height={35}
          aria-hidden="true"
          className="absolute left-0 top-6"
        />
        <p className="mb-[0.4rem] pt-4 text-[18px] font-bold uppercase leading-[27px] text-navy-alt">
          {mega.heading}
        </p>
        <p className="text-[16px] font-medium text-gold">{mega.subtitle}</p>
        <p className="text-[13px] leading-5 text-ink">{mega.content}</p>
      </div>
      <ul className="mt-8">
        {[{ label: item.label, href: item.href }, ...mega.links].map(
          (link, i) => (
            <li key={`${link.label}-${i}`}>
              <Link
                href={link.href}
                onClick={onNavigate}
                className={clsx(
                  "flex items-center justify-between border-b border-line-strong py-4 text-sm text-navy-alt",
                  i === 0 && "font-bold uppercase",
                )}
              >
                {link.label}
                <ChevronRight className="size-4 shrink-0 text-gold" />
              </Link>
            </li>
          ),
        )}
      </ul>
    </div>
  );
}
