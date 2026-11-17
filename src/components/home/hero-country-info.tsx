import type { Country } from "@/content/countries";
import clsx from "clsx";
import { MapPin } from "lucide-react";

const tel = (phone: string) => `tel:+${phone.replace(/\D/g, "")}`;

/**
 * Bloc d'infos d'une slide pays (Inter) : épingle + « Ville , Pays », puis Contact et
 * Localisation en petit texte blanc. Données issues de `countries.ts` (source unique).
 * Les slides sont empilées dans la même cellule de grille : la plus haute fixe la hauteur.
 */
export default function HeroCountryInfo({
  country,
  city,
  active,
  label,
}: {
  country: Country;
  city: string;
  active: boolean;
  /** Libellé accessible de la slide (« 2 sur 5 »). */
  label: string;
}) {
  return (
    <div
      role="group"
      aria-roledescription="slide"
      aria-label={label}
      inert={!active}
      className={clsx(
        "col-start-1 row-start-1 font-inter text-hero-info font-normal transition-[opacity,transform] ease-hero motion-reduce:transition-none",
        active ? "translate-y-0 opacity-100 delay-300 duration-700" : "translate-y-4 opacity-0 duration-300",
      )}
    >
      <h2 className="flex items-center gap-[0.6em] font-medium">
        <MapPin className="size-[1.15em] shrink-0" aria-hidden="true" />
        <span>
          {city} , {country.label}
        </span>
      </h2>
      <dl className="mt-[1.3em]">
        <div>
          <dt className="inline">Contact : </dt>
          <dd className="inline">
            {country.phones.map((p, i) => (
              <span key={p}>
                {i > 0 && " / "}
                <a href={tel(p)} className="whitespace-nowrap hover:underline focus-visible:underline">
                  {p}
                </a>
              </span>
            ))}
          </dd>
        </div>
        <div>
          <dt className="inline">Localisation : </dt>
          <dd className="inline">{country.address}</dd>
        </div>
      </dl>
    </div>
  );
}
