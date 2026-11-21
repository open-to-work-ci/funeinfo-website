"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import Image from "next/image";
import { ExternalLink, Mail, MapPin, Phone } from "lucide-react";
import { MotionConfig } from "motion/react";
import CountryTab from "@/components/network/country-tab";
import { countries, DEFAULT_COUNTRY_ID } from "@/content/countries";
import { heroCountries } from "@/content/home";
import ContactForm from "./contact-form";

const tel = (phone: string) => `tel:+${phone.replace(/\D/g, "")}`;
const cityOf = (id: string) => heroCountries.find((c) => c.countryId === id)?.city ?? "";

const card = "rounded-lg bg-surface p-6 shadow-sm md:p-8";
const accent = "mb-4 block h-1 w-12 rounded-pill bg-brand";

/**
 * Corps de la page Contact : onglets pays (Côte d'Ivoire par défaut), formulaire, carte
 * « Nos coordonnées » du pays choisi et carte « Localisation » (lien Google Maps).
 * TODO(assets) : carte (image) de la localisation et photo du siège à fournir ; en attendant,
 * photo d'agence du pays et lien Google Maps.
 */
export default function ContactContent() {
  const [activeId, setActiveId] = useState(DEFAULT_COUNTRY_ID);
  const refs = useRef<Record<string, HTMLButtonElement | null>>({});
  const active = countries.find((c) => c.id === activeId) ?? countries[0];
  const city = cityOf(active.id);
  const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${city} ${active.address}`)}`;

  function onKeyDown(e: KeyboardEvent, index: number) {
    const last = countries.length - 1;
    const next =
      e.key === "ArrowRight" ? (index + 1) % countries.length
      : e.key === "ArrowLeft" ? (index + last) % countries.length
      : e.key === "Home" ? 0
      : e.key === "End" ? last
      : null;
    if (next === null) return;
    e.preventDefault();
    const id = countries[next].id;
    setActiveId(id);
    refs.current[id]?.focus();
  }

  return (
    <MotionConfig reducedMotion="user">
      <div role="tablist" aria-label="Pays" className="flex flex-wrap gap-3">
        {countries.map((c, i) => (
          <CountryTab
            key={c.id}
            ref={(el) => {
              refs.current[c.id] = el;
            }}
            id={c.id}
            label={c.label}
            selected={c.id === active.id}
            onSelect={() => setActiveId(c.id)}
            onKeyDown={(e) => onKeyDown(e, i)}
          />
        ))}
      </div>

      <div
        role="tabpanel"
        id={`panel-${active.id}`}
        aria-labelledby={`tab-${active.id}`}
        className="mt-fi-24 grid gap-6 md:mt-fi-40 lg:grid-cols-[2fr_1fr]"
      >
        <section className={card} aria-labelledby="contact-form-title">
          <span className={accent} aria-hidden="true" />
          <h2 id="contact-form-title" className="font-sans text-section font-bold text-navy">
            Écrivez-nous
          </h2>
          <p className="mb-6 mt-2 max-w-[42rem] text-body text-ink-secondary">
            Une question, un devis, une urgence ? Remplissez le formulaire : l’agence de {active.label} vous
            répond au plus vite.
          </p>
          <ContactForm country={active.label} />
        </section>

        <aside className={`${card} flex flex-col overflow-hidden p-0 md:p-0`} aria-labelledby="contact-details-title">
          <div className="relative aspect-[322/241] w-full">
            <Image
              src={active.images[0].src}
              alt={active.images[0].alt}
              fill
              sizes="(min-width: 1024px) 33vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-1 flex-col gap-5 p-6 md:p-8">
            <div>
              <span className={accent} aria-hidden="true" />
              <h2 id="contact-details-title" className="font-sans text-news-title font-bold text-navy">
                Nos coordonnées
              </h2>
            </div>
            <dl className="flex flex-col gap-5 text-small leading-[1.5] text-ink">
              <div className="flex gap-4">
                <dt className="grid size-10 shrink-0 place-items-center rounded-pill bg-brand-soft text-brand">
                  <MapPin className="size-5" aria-hidden="true" />
                  <span className="sr-only">Adresse</span>
                </dt>
                <dd>
                  <span className="block font-bold">{city}, {active.label}</span>
                  {active.address}
                </dd>
              </div>
              <div className="flex gap-4">
                <dt className="grid size-10 shrink-0 place-items-center rounded-pill bg-brand-soft text-brand">
                  <Phone className="size-5" aria-hidden="true" />
                  <span className="sr-only">Téléphone</span>
                </dt>
                <dd>
                  <span className="block font-bold">Téléphone</span>
                  {active.phones.map((p) => (
                    <a key={p} href={tel(p)} className="block whitespace-nowrap hover:underline">
                      {p}
                    </a>
                  ))}
                </dd>
              </div>
              <div className="flex gap-4">
                <dt className="grid size-10 shrink-0 place-items-center rounded-pill bg-brand-soft text-brand">
                  <Mail className="size-5" aria-hidden="true" />
                  <span className="sr-only">E-mail</span>
                </dt>
                <dd>
                  <span className="block font-bold">E-mail</span>
                  <a href={`mailto:${active.email}`} className="break-all hover:underline">
                    {active.email}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </aside>
      </div>

      <section
        className={`${card} mt-6 flex flex-col items-start justify-between gap-5 md:flex-row md:items-center`}
        aria-labelledby="contact-location-title"
      >
        <div>
          <span className={accent} aria-hidden="true" />
          <h2 id="contact-location-title" className="flex items-center gap-2 font-sans text-news-title font-bold text-navy">
            <MapPin className="size-6 text-brand" aria-hidden="true" />
            Fune Info {active.label}
          </h2>
          <p className="mt-2 text-body text-ink-secondary">
            {city} — {active.address}
          </p>
        </div>
        <a
          href={mapsHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-pill bg-brand px-6 py-3 font-poppins text-small font-bold uppercase text-surface transition-colors hover:bg-brand-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2"
        >
          Ouvrir dans Google Maps
          <ExternalLink className="size-4" aria-hidden="true" />
          <span className="sr-only">(nouvel onglet)</span>
        </a>
      </section>
    </MotionConfig>
  );
}
