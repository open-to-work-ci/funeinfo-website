/** Constantes globales du site (SEO, métadonnées, JSON-LD). */

export const SITE_NAME = "Fune Info Africa";

export const SITE_TAGLINE = "Organisation d’obsèques et rapatriement de corps";

export const SITE_DESCRIPTION =
  "Fune Info Africa accompagne les familles avec excellence funéraire : organisation d’obsèques, rapatriement de corps à l’international et soutien discret dans les moments difficiles, avec plus de 30 agences en Côte d’Ivoire ainsi qu’à Paris et Brazzaville.";

/**
 * URL publique du site (sans slash final), définie par `NEXT_PUBLIC_SITE_URL`.
 * TODO(client) : valeur par défaut provisoire (domaine déduit des adresses
 * e-mail @fune.info) ; à remplacer par le domaine de production réel.
 */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://fune.info").replace(/\/+$/, "");

/** Couleur de marque (barre d'adresse mobile, manifeste). */
export const THEME_COLOR = "#bb2282";

/**
 * Déploiement non-production (aperçus Vercel : `VERCEL_ENV` = preview/development) :
 * le site est alors entièrement non indexable (robots.txt + balise robots).
 */
export const IS_INDEXABLE = !process.env.VERCEL_ENV || process.env.VERCEL_ENV === "production";
