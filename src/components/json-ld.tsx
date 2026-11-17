import { countries } from "@/content/countries";
import { FOOTER, SOCIAL_LINKS } from "@/content/footer";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";

/** Numéro affiché (« +225 07 00 64 75 61 ») → format international sans espaces. */
const toTel = (phone: string) => phone.replace(/[^\d+]/g, "");

/**
 * Données structurées schema.org (`Organization`) du site.
 * Uniquement des données présentes dans le repo ; TODO listés ci-dessous.
 * - `sameAs` : n'inclut que de vraies pages de réseaux (pas les accueils
 *   provisoires de `content/footer.ts`).
 * - TODO(client) : e-mail de contact à confirmer, horaires, numéro
 *   d'enregistrement, URL des réseaux sociaux.
 */
export default function JsonLd() {
  const sameAs = SOCIAL_LINKS.map((s) => s.href).filter((href) => new URL(href).pathname.length > 1);
  const hq = countries[0];

  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    logo: `${SITE_URL}/icon-512.png`,
    email: FOOTER.contact.email,
    ...(sameAs.length > 0 && { sameAs }),
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: FOOTER.contact.email,
        ...(hq && { telephone: toTel(hq.phones[0]) }),
        availableLanguage: ["fr"],
      },
    ],
    location: countries.map((c) => ({
      "@type": "Place",
      name: `${SITE_NAME} — ${c.label}`,
      address: { "@type": "PostalAddress", streetAddress: c.address, addressCountry: c.label },
      email: c.email,
      telephone: c.phones.map(toTel),
    })),
  };

  return (
    <script
      type="application/ld+json"
      // `<` échappé pour éviter toute fermeture prématurée de la balise <script>.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
