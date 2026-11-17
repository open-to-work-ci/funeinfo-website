"use client";

import { AnimatePresence, motion, useReducedMotion, type Variants } from "motion/react";
import { countries, DEFAULT_COUNTRY_ID, type Country } from "@/content/countries";
import CountryInfo from "./country-info";
import GalleryMosaic, { GalleryGhost } from "./gallery-mosaic";

/**
 * Panneau d'un pays (role="tabpanel") : infos + galerie. Au changement d'onglet,
 * fondu/glissement (`AnimatePresence`) puis vignettes qui se recomposent en cascade.
 * La hauteur est réservée par une copie invisible du plus grand contenu (toutes les
 * infos empilées + la plus grande mosaïque) : aucun saut de hauteur entre onglets.
 * Tout est désactivé avec `prefers-reduced-motion`.
 * Usage : `<CountryPanel country={country} />`
 */
const maxImages = Math.max(...countries.map((c) => c.images.length));

const panel: Variants = {
  hidden: { opacity: 0, x: 24 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.08, delayChildren: 0.05 },
  },
  exit: { opacity: 0, x: -24, transition: { duration: 0.18, ease: "easeIn" } },
};

export default function CountryPanel({ country }: { country: Country }) {
  const reduce = useReducedMotion();
  return (
    <div className="mt-fi-24 grid">
      {/* Réserve de hauteur (invisible, hors accessibilité) */}
      <div aria-hidden className="invisible [grid-area:1/1]">
        <div className="grid">
          {countries.map((c) => (
            <div key={c.id} className="[grid-area:1/1]">
              <CountryInfo country={c} />
            </div>
          ))}
        </div>
        <div className="mt-4">
          <GalleryGhost count={maxImages} />
        </div>
      </div>

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={country.id}
          role="tabpanel"
          id={`panel-${country.id}`}
          aria-labelledby={`tab-${country.id}`}
          tabIndex={0}
          variants={reduce ? undefined : panel}
          initial={reduce ? false : "hidden"}
          animate={reduce ? undefined : "show"}
          exit={reduce ? undefined : "exit"}
          className="[grid-area:1/1] self-start focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-navy"
        >
          <CountryInfo country={country} />
          <div className="mt-4">
            <GalleryMosaic images={country.images} priorityFirst={country.id === DEFAULT_COUNTRY_ID} />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
