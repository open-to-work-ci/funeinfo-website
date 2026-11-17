import type { ReactNode } from "react";
import type { Country } from "@/content/countries";

const tel = (phone: string) => `tel:+${phone.replace(/\D/g, "")}`;

/**
 * Bloc d'infos d'une agence : Localisation / Mail / Contact.
 * Libellés Inter 700, valeurs Inter 400 (gris), comme la maquette.
 * Usage : `<CountryInfo country={country} />`
 */
export default function CountryInfo({ country }: { country: Country }) {
  return (
    <dl className="font-inter text-meta leading-[1.125rem] font-normal text-ink-muted">
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
  );
}

function Row({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div>
      <dt className="inline font-bold">{label} : </dt>
      <dd className="inline">{children}</dd>
    </div>
  );
}
