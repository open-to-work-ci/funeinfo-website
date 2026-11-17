"use client";

import { Suspense, useRef, type KeyboardEvent, type ReactNode } from "react";
import { useSearchParams } from "next/navigation";
import Button from "@/components/ui/button";
import { countries, DEFAULT_COUNTRY_ID, type Country } from "@/content/countries";
import GalleryMosaic from "./gallery-mosaic";

/**
 * Onglets pays (WAI-ARIA Tabs) synchronisés avec l'URL : `/groupe?pays=congo`.
 * Flèches ←/→, Home/End ; Côte d'Ivoire par défaut.
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

const tel = (phone: string) => `tel:+${phone.replace(/\D/g, "")}`;

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
    <div>
      <div
        role="tablist"
        aria-label="Pays du réseau"
        className="-mx-4 flex gap-3 overflow-x-auto px-4 py-1 md:mx-0 md:flex-wrap md:overflow-visible md:px-0"
      >
        {countries.map((c, i) => {
          const selected = c.id === active.id;
          return (
            <Button
              key={c.id}
              ref={(el: HTMLButtonElement | null) => {
                refs.current[c.id] = el;
              }}
              id={`tab-${c.id}`}
              role="tab"
              variant="outline"
              active={selected}
              aria-selected={selected}
              aria-controls={`panel-${c.id}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => select(c.id)}
              onKeyDown={(e: KeyboardEvent) => onKeyDown(e, i)}
              className="shrink-0 !normal-case"
            >
              {c.label}
            </Button>
          );
        })}
      </div>
      <Panel country={active} />
    </div>
  );
}

function Panel({ country }: { country: Country }) {
  return (
    <div
      key={country.id}
      role="tabpanel"
      id={`panel-${country.id}`}
      aria-labelledby={`tab-${country.id}`}
      tabIndex={0}
      className="mt-fi-24 animate-fade-in focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-navy motion-reduce:animate-none"
    >
      <dl className="min-h-[4.5rem] space-y-0.5 text-small text-ink-secondary md:min-h-[3.75rem]">
        <Row label="Localisation">{country.address}</Row>
        <Row label="Mail">
          <a href={`mailto:${country.email}`} className="hover:text-brand hover:underline">
            {country.email}
          </a>
        </Row>
        <Row label="Contact">
          {country.phones.map((p, i) => (
            <span key={p}>
              {i > 0 && " / "}
              <a href={tel(p)} className="whitespace-nowrap hover:text-brand hover:underline">
                {p}
              </a>
            </span>
          ))}
        </Row>
      </dl>
      <div className="mt-fi-24">
        <GalleryMosaic images={country.images} />
      </div>
    </div>
  );
}

function Row({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div>
      <dt className="inline font-inter font-bold text-navy">{label} : </dt>
      <dd className="inline">{children}</dd>
    </div>
  );
}
