import Link from "next/link";
import { LEGAL_LINKS } from "@/content/legal";

/** Liens légaux de la ligne basse, discrets (même taille que le copyright). */
export default function FooterLegal() {
  return (
    <nav aria-label="Informations légales">
      <ul className="flex flex-col gap-x-6 gap-y-1 sm:flex-row sm:flex-wrap">
        {LEGAL_LINKS.map((l) => (
          <li key={l.id}>
            <Link
              href={l.href}
              className="rounded-sm underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-surface focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
