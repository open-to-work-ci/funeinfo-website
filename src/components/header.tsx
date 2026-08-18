"use client";

import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  {
    label: "Notre groupe",
    subtitle: "Notre mission d’opérateur de services funéraires :",
    content:
      "apporter des réponses personnalisées et un service exemplaire à nos clients et à nos partenaires.",
    links: [
      "Qui sommes-nous",
      "Nos agences",
      "Notre histoire",
      "Notre gouvernance",
    ],
  },
  {
    label: "Nos expertises",
    subtitle: "Une expertise reconnue en Côte d’Ivoire :",
    content:
      "une flotte, des agences et des équipes mobilisables partout pour organiser un dernier hommage à la hauteur de chaque famille.",
    links: [
      "Organisation d’obsèques",
      "Rapatriement de corps",
      "Marbrerie & articles funéraires",
      "Contrats obsèques",
    ],
  },
  {
    label: "Carrières",
    subtitle: "Rejoignez nos équipes :",
    content:
      "une équipe engagée au service de la dignité humaine, partout où Fune Info Africa est présente.",
    links: ["Nos métiers", "Offres d’emploi", "Candidature spontanée"],
  },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-50 bg-brand text-white shadow-lg"
    >
      <div className="container-wide">
        <div className="flex h-header items-center justify-between px-3">
          <Link
            href="/"
            className="lg:hidden font-sans text-lg font-semibold"
            aria-label="Accueil"
          >
            <Image
              src="/logo-header.svg"
              alt="Logo"
              width={87}
              height={53}
              className="h-[53px] w-auto"
            />
          </Link>
          <nav className="flex-1 hidden lg:block h-header font-inter text-[17  px] leading-5">
            <ul className="flex h-full justify-center gap-8 xl:gap-10 items-stretch">
              <li className="flex items-center">
                <Link href="/" className="font-sans text-lg font-semibold">
                  <Image
                    src="/logo-header.svg"
                    alt="Logo"
                    width={87}
                    height={53}
                    className="h-[53px] w-auto"
                  />
                </Link>
              </li>
              {navItems.map((item, index) => (
                <li
                  key={item.label}
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(null)}
                  className="flex items-stretch"
                >
                  <a
                    href="#"
                    className="flex items-center px-3 h-full uppercase whitespace-nowrap transition-colors duration-150 hover:text-gold"
                  >
                    {item.label}
                  </a>

                  <AnimatePresence>
                    {activeIndex === index && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25, ease: "linear" }}
                        className="hidden lg:block absolute left-0 top-full w-full bg-white text-ink shadow-xl"
                      >
                        <div className="container-wide grid grid-cols-3 gap-10 py-10">
                          <div className="col-span-1 relative pl-[43px]">
                            <Image
                              src="/logo-funinfo-pink.svg"
                              alt=""
                              width={35}
                              height={35}
                              aria-hidden="true"
                              className="absolute left-0 top-0"
                            />
                            <p className="pt-4 mb-[0.4rem] text-[18px] font-bold uppercase leading-[27px] text-[#0B273A]">
                              {item.label}
                            </p>
                            <p className="text-[16px] font-medium text-gold">
                              {item.subtitle}
                            </p>
                            <p className="text-[13px] leading-5 text-ink">
                              {item.content}
                            </p>
                          </div>
                          <div className="col-span-2 grid grid-cols-2 gap-x-10">
                            <ul>
                              <li className="mb-2">
                                <a
                                  href="#"
                                  className="block text-base font-bold uppercase text-[#0B273A] transition-colors duration-150 hover:text-gold"
                                >
                                  {item.label}
                                </a>
                              </li>
                              {item.links.map((link) => (
                                <li key={link}>
                                  <a
                                    href="#"
                                    className="group relative flex items-center py-2 text-sm font-normal text-[#0B273A] transition-colors duration-150 hover:text-gold"
                                  >
                                    <span
                                      aria-hidden="true"
                                      className="absolute left-0 top-1/2 -translate-y-1/2 h-px w-0 bg-gold transition-[width] duration-[400ms] ease-out group-hover:w-[15px]"
                                    />
                                    <span className="inline-block transition-transform duration-[400ms] ease-out group-hover:translate-x-[15px]">
                                      {link}
                                    </span>
                                  </a>
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
            </ul>
          </nav>
          <button
            className="lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            aria-expanded={open}
          >
            {open ? <X className="size-7" /> : <Menu className="size-7" />}
          </button>
        </div>
        {open && (
          <nav className="lg:hidden pb-5 font-inter text-[17px] leading-5">
            <ul className="flex flex-col gap-4">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href="#"
                    className="uppercase transition-colors duration-150 hover:text-gold"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </motion.header>
  );
}
