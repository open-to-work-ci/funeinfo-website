"use client";

import { countries } from "@/content/countries";
import { heroCountries, heroIntro } from "@/content/home";
import clsx from "clsx";
import { useReducedMotion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import HeroControls from "./hero-controls";
import HeroCountryCard from "./hero-country-card";
import HeroCountryInfo from "./hero-country-info";
import HeroCountrySlide from "./hero-country-slide";
import HeroIntroSlide from "./hero-intro-slide";
import HeroPanel from "./hero-panel";

/** Slides pays : données de `countries.ts` + habillage (ville, couleur) de `home.ts`. */
const slides = heroCountries.flatMap((s) => {
  const country = countries.find((c) => c.id === s.countryId);
  return country ? [{ ...s, country }] : [];
});
const total = slides.length + 1;

/** Durées mesurées sur la vidéo de la maquette (voir PR) : tenue 2 s + transition 0,7 s. */
const HOLD_MS = 2000;
const TRANSITION_MS = 700;

const isEditable = (el: EventTarget | null) =>
  el instanceof HTMLElement && (el.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(el.tagName));

/**
 * Hero de l'accueil à la hauteur de l'écran (moins le header) : slide 1 (carte du monde)
 * puis les 4 pays (photo de fond, panneau de couleur, carte qui glisse avec parallaxe).
 * Défilement automatique jusqu'à la dernière slide, en pause au survol / focus clavier,
 * désactivé si prefers-reduced-motion. Flèches gauche/droite et boutons pour naviguer.
 * Desktop (lg) : photo à gauche, panneau à droite, carte à cheval. Mobile / tablette :
 * photo + infos en haut, panneau en bas, carte à cheval sur la jonction.
 */
export default function HeroSlider() {
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [inView, setInView] = useState(false);
  const rootRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const paused = hovered || focused;

  const next = useCallback(() => setActive((a) => (a + 1) % total), []);
  const prev = useCallback(() => setActive((a) => (a - 1 + total) % total), []);

  // Autoplay : s'arrête sur la dernière slide (comme la vidéo) ; après un changement,
  // la tenue démarre à la fin de la transition.
  useEffect(() => {
    if (reduce || paused || active === total - 1) return;
    const id = window.setTimeout(next, HOLD_MS + (active > 0 ? TRANSITION_MS : 0));
    return () => window.clearTimeout(id);
  }, [active, paused, reduce, next]);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting));
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Flèches du clavier (seulement quand le hero est à l'écran).
  useEffect(() => {
    if (!inView) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey || isEditable(e.target)) return;
      if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [inView, next, prev]);

  const activeCountry = active - 1;

  return (
    <section
      ref={rootRef}
      aria-roledescription="carrousel"
      aria-label="Présentation du réseau Fune Info Africa"
      className="relative flex min-h-[max(28rem,calc(100svh-var(--spacing-header)))] flex-col overflow-hidden bg-sea text-surface lg:block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={(e) => {
        if (e.target.matches(":focus-visible")) setFocused(true);
      }}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setFocused(false);
      }}
    >
      <h1 className="sr-only">
        Fune Info Africa : un réseau international au service des familles
      </h1>

      <HeroIntroSlide slide={heroIntro} active={active === 0} label={`1 sur ${total}`} />

      {/* Zone haute : photo de fond + infos (desktop : calques posés sur tout le hero). */}
      <div className="relative flex-1 pb-[calc(24%+1.5rem)] md:pb-[calc(20%+1.5rem)] lg:contents">
        {slides.map((s, i) => (
          <HeroCountrySlide key={s.countryId} country={s.country} active={i === activeCountry} />
        ))}
        <span
          className={clsx(
            "pointer-events-none absolute inset-y-0 left-[11.5%] hidden w-[0.0625rem] bg-surface/30 transition-opacity duration-700 motion-reduce:transition-none lg:block",
            active > 0 ? "opacity-100" : "opacity-0",
          )}
          aria-hidden="true"
        />
        <div
          aria-live={paused ? "polite" : "off"}
          className="relative z-10 grid px-[8%] pt-10 lg:absolute lg:inset-y-0 lg:left-[10.6%] lg:w-[40%] lg:content-center lg:p-0"
        >
          {slides.map((s, i) => (
            <HeroCountryInfo
              key={s.countryId}
              country={s.country}
              city={s.city}
              active={i === activeCountry}
              label={`${i + 2} sur ${total}`}
            />
          ))}
        </div>
      </div>

      {/* Cartes : défilé latéral, à cheval sur la jonction photo / panneau. */}
      <div className="relative h-0 lg:contents">
        <div
          className={clsx(
            "pointer-events-none absolute left-[8%] top-0 z-30 aspect-[1.3] w-[62%] -translate-y-1/2 transition-opacity duration-700 motion-reduce:transition-none md:w-[52%] lg:left-[70.35%] lg:top-[27%] lg:w-[min(34%,calc((100svh-var(--spacing-header))*0.61))] lg:-translate-x-1/2 lg:translate-y-0",
            active === 0 && "max-lg:opacity-0",
          )}
        >
          {slides.map((s, i) => (
            <HeroCountryCard key={s.countryId} image={s.country.images[0]} offset={i + 1 - active} />
          ))}
        </div>
      </div>

      {/* Zone basse : panneau de couleur + boutons et compteur. */}
      <div className="relative pb-8 pt-[calc(24%+1.5rem)] md:pt-[calc(20%+1.5rem)] lg:contents">
        <HeroPanel slides={heroCountries} active={activeCountry} />
        <HeroControls
          active={active}
          total={total}
          onPrev={prev}
          onNext={next}
          className="relative px-[8%] lg:absolute lg:bottom-[clamp(1.5rem,17.3%,14rem)] lg:left-[55%] lg:p-0"
        />
      </div>
    </section>
  );
}
