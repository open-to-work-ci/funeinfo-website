"use client";

import { heroSlides } from "@/content/home";
import { useRef, useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import { A11y, Autoplay, EffectFade, Keyboard } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import HeroControls from "./hero-controls";
import HeroMap from "./hero-map";
import HeroNextPreview from "./hero-next-preview";
import HeroSlideText from "./hero-slide-text";
import "swiper/css";
import "swiper/css/effect-fade";

const total = heroSlides.length;

/**
 * Hero à la hauteur de l'écran (moins le header sticky) : carte du monde en fond,
 * 5 slides en fondu (boutons, flèches clavier, swipe), aperçu de la slide suivante
 * à droite. Défilement auto en pause au survol / focus, désactivé si
 * prefers-reduced-motion.
 */
export default function HeroSlider() {
  const [active, setActive] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section
      aria-roledescription="carrousel"
      aria-label="Présentation du réseau Fune Info Africa"
      className="relative min-h-[max(28rem,calc(100svh-var(--spacing-header)))] overflow-hidden bg-sea text-surface"
      onFocus={() => swiperRef.current?.autoplay?.pause()}
      onBlur={() => {
        if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          swiperRef.current?.autoplay?.resume();
        }
      }}
    >
      <HeroMap zoomed={active % 2 === 1} />

      <h1 className="sr-only">
        Fune Info Africa : un réseau international au service des familles
      </h1>

      <div className="absolute inset-0">
        <Swiper
          className="h-full!"
          modules={[A11y, Autoplay, EffectFade, Keyboard]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          speed={700}
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
            <SwiperSlide key={slide.strong.join(" ")} {...(i !== active ? { inert: true } : {})}>
              <div className="flex h-full flex-col items-start pl-6 pr-6 md:pl-[11.2vw] md:pr-[10vw]">
                <span className="w-0.5 flex-1 bg-surface/60" aria-hidden="true" />
                <div className="my-fi-24 pl-0.5 md:my-[1.6vw]">
                  <HeroSlideText slide={slide} active={i === active} />
                </div>
                <span className="w-0.5 flex-1 bg-surface/60" aria-hidden="true" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <HeroNextPreview slides={heroSlides} nextIndex={(active + 1) % total} />

      <HeroControls
        active={active}
        total={total}
        onPrev={() => swiperRef.current?.slidePrev()}
        onNext={() => swiperRef.current?.slideNext()}
      />
    </section>
  );
}
