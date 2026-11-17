"use client";

import { Suspense, useRef, type KeyboardEvent } from "react";
import { MotionConfig } from "motion/react";
import { useSearchParams } from "next/navigation";
import { countries, DEFAULT_COUNTRY_ID } from "@/content/countries";
import CountryPanel from "./country-panel";
import CountryTab from "./country-tab";

/**
 * Onglets pays (WAI-ARIA Tabs) synchronisés avec l'URL : `/groupe?pays=congo`.
 * Flèches ←/→, Home/End ; Côte d'Ivoire par défaut. Animations : indicateur partagé,
 * panneau en fondu/glissement, galerie en cascade (désactivées en reduced-motion).
 * Usage : `<NetworkTabs />` (lit le tableau `countries` de `@/content/countries`).
 */
export default function NetworkTabs() {
  // useSearchParams impose une frontière Suspense ; le fallback rend l'onglet par défaut.
  return (
    <Suspense fallback={<Tabs activeId={DEFAULT_COUNTRY_ID} />}>
      <FromUrl />
    </Suspense>
  );
}

function FromUrl() {
  const param = useSearchParams().get("pays");
  const activeId = countries.some((c) => c.id === param) ? param! : DEFAULT_COUNTRY_ID;
  return <Tabs activeId={activeId} />;
}

function Tabs({ activeId }: { activeId: string }) {
  const refs = useRef<Record<string, HTMLButtonElement | null>>({});
  const active = countries.find((c) => c.id === activeId) ?? countries[0];

  function select(id: string) {
    // replaceState est synchronisé avec useSearchParams par Next.js (pas de rechargement).
    const url = new URL(window.location.href);
    if (id === DEFAULT_COUNTRY_ID) url.searchParams.delete("pays");
    else url.searchParams.set("pays", id);
    window.history.replaceState(null, "", url);
  }

  function onKeyDown(e: KeyboardEvent, index: number) {
    const last = countries.length - 1;
    const next =
      e.key === "ArrowRight"
        ? (index + 1) % countries.length
        : e.key === "ArrowLeft"
          ? (index + last) % countries.length
          : e.key === "Home"
            ? 0
            : e.key === "End"
              ? last
              : null;
    if (next === null) return;
    e.preventDefault();
    const id = countries[next].id;
    select(id);
    refs.current[id]?.focus();
  }

  return (
    <MotionConfig reducedMotion="user">
      <div role="tablist" aria-label="Pays du réseau" className="flex flex-wrap gap-3">
        {countries.map((c, i) => (
          <CountryTab
            key={c.id}
            ref={(el) => {
              refs.current[c.id] = el;
            }}
            id={c.id}
            label={c.label}
            selected={c.id === active.id}
            onSelect={() => select(c.id)}
            onKeyDown={(e) => onKeyDown(e, i)}
          />
        ))}
      </div>
      <CountryPanel country={active} />
    </MotionConfig>
  );
}
