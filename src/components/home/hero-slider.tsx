"use client";

import { heroSlides } from "@/content/home";
import clsx from "clsx";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import { A11y, Autoplay, EffectFade, Keyboard } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";

const total = heroSlides.length;
const pad = (n: number) => String(n).padStart(2, "0");

const roundBtn =
  "grid size-10 place-items-center rounded-pill bg-surface/20 text-surface backdrop-blur-sm transition-colors hover:bg-surface/40 " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-surface focus-visible:ring-offset-2 focus-visible:ring-offset-navy";

/**
 * Hero plein écran : carte du monde grisée + calque sombre, slider de 5 slides
 * (boutons, flèches clavier, swipe), aperçu de la slide suivante à droite.
 * Défilement auto en pause au survol / focus, désactivé si prefers-reduced-motion.
 */
export default function HeroSlider() {
  const [active, setActive] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);
  const next = heroSlides[(active + 1) % total];

  return (
    <section
      aria-roledescription="carrousel"
      aria-label="Présentation du réseau Fune Info Africa"
      className="relative h-[calc(100svh-var(--spacing-header))] max-h-[60rem] min-h-[34rem] overflow-hidden bg-navy text-surface"
      onFocus={() => swiperRef.current?.autoplay?.pause()}
      onBlur={() => {
        if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          swiperRef.current?.autoplay?.resume();
        }
      }}
    >
      <Image
        src="/map-hero.svg"
        alt=""
        fill
        preload
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-scrim" aria-hidden="true" />

      <h1 className="sr-only">
        Fune Info Africa : un réseau international au service des familles
      </h1>

      <Swiper
        className="!h-full"
        modules={[A11y, Autoplay, EffectFade, Keyboard]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        keyboard={{ enabled: true, onlyInViewport: true }}
        autoplay={{ delay: 6000, disableOnInteraction: false, pauseOnMouseEnter: true }}
        a11y={{ slideLabelMessage: "Slide {{index}} sur {{slidesLength}}" }}
        onSwiper={(s) => {
          swiperRef.current = s;
          if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) s.autoplay.stop();
        }}
        onSlideChange={(s) => setActive(s.realIndex)}
      >
        {heroSlides.map((slide, i) => (
          <SwiperSlide key={slide.strong} {...(i !== active ? { inert: true } : {})}>
            <div className="container-wide flex h-full flex-col items-start pb-28 pt-fi-24 md:pb-32 md:pr-32 lg:pr-40">
              <span className="w-px flex-1 bg-surface/70" aria-hidden="true" />
              <div className="my-fi-24 ml-fi-24 md:ml-fi-40">
                <p className="font-poppins text-hero font-bold uppercase">{slide.strong}</p>
                <p className="mt-1 font-sans text-hero font-medium uppercase">{slide.light}</p>
                <p className="mt-fi-24 max-w-xl font-sans text-small font-extrabold md:text-base">
                  {slide.subtitle}
                </p>
              </div>
              <span className="w-px flex-1 bg-surface/70" aria-hidden="true" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Aperçu de la slide suivante, qui déborde à droite */}
      <div
        className="pointer-events-none absolute right-0 top-[22%] hidden h-[46%] w-24 overflow-hidden rounded-l-3xl shadow-2xl md:block lg:w-32"
        aria-hidden="true"
      >
        {heroSlides.map((s, i) => (
          <Image
            key={s.image.src}
            src={s.image.src}
            alt=""
            fill
            sizes="128px"
            className={clsx(
              "object-cover transition-opacity duration-500",
              s === next ? "opacity-100" : "opacity-0",
            )}
            {...(i === 1 ? { preload: true } : {})}
          />
        ))}
      </div>

      {/* Contrôles */}
      <div className="absolute inset-x-0 bottom-fi-24 z-10 md:bottom-fi-40">
        <div className="container-wide flex items-center gap-3 md:pl-[4.5rem]">
          <button
            type="button"
            className={roundBtn}
            aria-label="Slide précédente"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <ArrowLeft className="size-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            className={roundBtn}
            aria-label="Slide suivante"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <ArrowRight className="size-5" aria-hidden="true" />
          </button>
          <p className="ml-fi-16 font-poppins text-small font-bold" aria-live="off">
            {pad(active + 1)} - {pad(total)}
          </p>
        </div>
      </div>
    </section>
  );
}
