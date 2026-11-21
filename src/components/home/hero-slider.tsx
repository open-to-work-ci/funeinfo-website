"use client";

import { countries } from "@/content/countries";
import { heroCountries, heroIntro } from "@/content/home";
import clsx from "clsx";
import { useReducedMotion } from "motion/react";
import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import HeroControls from "./hero-controls";
import HeroCountryCard from "./hero-country-card";
import HeroCountryInfo from "./hero-country-info";
import HeroCountrySlide from "./hero-country-slide";
import HeroGuideLine from "./hero-guide-line";
import HeroIntroSlide from "./hero-intro-slide";
import HeroPanel from "./hero-panel";

/** Slides pays : données de `countries.ts` + habillage (ville, couleur) de `home.ts`. */
const slides = heroCountries.flatMap((s) => {
  const country = countries.find((c) => c.id === s.countryId);
  return country ? [{ ...s, country }] : [];
});
const total = slides.length + 1;

/** Tenue d'une slide et durée de la transition (ralentie à la demande du client : 0,9 s). */
const HOLD_MS = 3500;
const TRANSITION_MS = 900;
/** Glissement horizontal minimal (px) pour changer de slide au doigt (mobile : pas de flèches). */
const SWIPE_PX = 40;
/** Déplacement maximal (px) du contenu qui suit le doigt. */
const SWIPE_MAX_PX = 80;

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
export default function HeroSlider({ map }: { map: ReactNode }) {
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [inView, setInView] = useState(false);
  const rootRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const paused = hovered || focused;

  // Sens du dernier changement (1 : suivant, -1 : précédent) et compteur de changements :
  // les balayages entrent par le bas en avant, par le haut en arrière ; seq = 0 : rien n'a bougé.
  const [nav, setNav] = useState({ dir: 1, seq: 0 });
  const next = useCallback(() => {
    setNav((n) => ({ dir: 1, seq: n.seq + 1 }));
    setActive((a) => (a + 1) % total);
  }, []);
  const prev = useCallback(() => {
    setNav((n) => ({ dir: -1, seq: n.seq + 1 }));
    setActive((a) => (a - 1 + total) % total);
  }, []);
  const enter = nav.dir === 1 ? "up" : "down";

  // Autoplay en boucle ; après un changement, la tenue démarre à la fin de la transition.
  useEffect(() => {
    if (reduce || paused) return;
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

  // Glissement au doigt (flèches masquées sur mobile) : événements pointeur + `touch-action: pan-y`
  // (le navigateur garde le défilement vertical et nous laisse le geste horizontal). Pendant le
  // geste, textes et cartes suivent le doigt ; au relâchement, au-delà du seuil on change de slide.
  const gesture = useRef<{ x: number; y: number; horizontal: boolean | null } | null>(null);
  const [dragX, setDragX] = useState(0);
  const onPointerDown = (e: React.PointerEvent) => {
    if (e.pointerType !== "touch") return;
    gesture.current = { x: e.clientX, y: e.clientY, horizontal: null };
  };
  const onPointerMove = (e: React.PointerEvent) => {
    const g = gesture.current;
    if (!g) return;
    const dx = e.clientX - g.x;
    const dy = e.clientY - g.y;
    if (g.horizontal === null && Math.hypot(dx, dy) > 8) g.horizontal = Math.abs(dx) > Math.abs(dy);
    if (g.horizontal) setDragX(Math.max(-SWIPE_MAX_PX, Math.min(SWIPE_MAX_PX, dx * 0.5)));
  };
  const endGesture = (e: React.PointerEvent, cancelled = false) => {
    const g = gesture.current;
    gesture.current = null;
    setDragX(0);
    if (!g || cancelled || !g.horizontal) return;
    const dx = e.clientX - g.x;
    if (Math.abs(dx) < SWIPE_PX) return;
    if (dx < 0) next();
    else prev();
  };
  const dragStyle = dragX ? { transform: `translateX(${dragX}px)`, transition: "none" } : undefined;

  return (
    <section
      ref={rootRef}
      aria-roledescription="carrousel"
      aria-label="Présentation du réseau Fune Info Africa"
      className="relative flex min-h-[max(28rem,calc(100svh-var(--spacing-header)))] touch-pan-y flex-col overflow-hidden bg-sea text-surface lg:block"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={(e) => endGesture(e)}
      onPointerCancel={(e) => endGesture(e, true)}
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

      <HeroIntroSlide
        slide={heroIntro}
        active={active === 0}
        label={`1 sur ${total}`}
        map={map}
        enter={nav.seq > 0 ? enter : undefined}
      />

      {/* Zone haute : photo de fond + infos (desktop : calques posés sur tout le hero). */}
      <div className="relative flex-1 pb-[calc(24%+1.5rem)] md:pb-[calc(20%+1.5rem)] lg:contents">
        {slides.map((s, i) => (
          <HeroCountrySlide key={s.countryId} country={s.country} active={i === activeCountry} enter={enter} />
        ))}
        <HeroGuideLine visible={active > 0} seq={nav.seq} />
        <div
          style={dragStyle}
          aria-live={paused ? "polite" : "off"}
          className="relative z-10 grid px-[8%] pt-10 lg:absolute lg:inset-y-0 lg:left-[10.6%] lg:w-[40%] lg:content-center lg:p-0"
        >
          {slides.map((s, i) => (
            <HeroCountryInfo
              key={s.countryId}
              country={s.country}
              city={s.city}
              active={i === activeCountry}
              enter={enter}
              label={`${i + 2} sur ${total}`}
            />
          ))}
        </div>
      </div>

      {/* Cartes : défilé latéral, à cheval sur la jonction photo / panneau. */}
      <div className="relative h-0 lg:contents">
        <div
          style={dragStyle}
          className={clsx(
            "pointer-events-none absolute left-[8%] top-0 z-30 aspect-[1.3] w-[62%] [--card-exit:calc(10vw+100%)] lg:[--card-exit:calc(72vw+50%)] -translate-y-1/2 transition-opacity duration-700 motion-reduce:transition-none md:w-[52%] lg:left-[70.35%] lg:top-[27%] lg:w-[min(34%,calc((100svh-var(--spacing-header))*0.61))] lg:-translate-x-1/2 lg:translate-y-0",
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
          onPrev={prev}
          onNext={next}
          className="relative px-[8%] lg:absolute lg:bottom-[clamp(1.5rem,17.3%,14rem)] lg:left-[55%] lg:p-0"
        />
      </div>
    </section>
  );
}
