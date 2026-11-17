/**
 * Style de chaque pays des cartes du monde (hero et section « réseau »).
 *
 * Chaque pays est un tracé SVG indépendant (voir `WORLD_PATHS` dans `world-map.ts` :
 * `id` = code ISO 3166-1 numérique, `name` = nom anglais). Pour modifier UN pays,
 * ajoutez son `id` ci-dessous avec les classes Tailwind voulues : elles REMPLACENT
 * les classes par défaut du pays (pensez donc à y remettre le `fill-…`).
 *
 * Exemples (France = "250", Côte d'Ivoire = "384") :
 *   hero: { "250": "fill-brand", "384": "fill-map-hero-network opacity-60" }
 *
 * Chaque tracé porte aussi `id="<carte>-country-<id>"`, `data-country`, `data-name` et
 * `data-network` : on peut donc le cibler en CSS ou en JS (survol, animation…).
 */
export type MapVariant = "hero" | "light";

/** Classes par défaut : pays du réseau (`network`) et autres (`land`). */
export const MAP_BASE_STYLES: Record<MapVariant, { land: string; network: string }> = {
  hero: { land: "fill-map-hero-land", network: "fill-map-hero-network" },
  light: { land: "fill-map-land", network: "fill-brand" },
};

/** Pays de la base du réseau (Côte d'Ivoire) : bordure plus épaisse sur la carte (maquette). */
export const BASE_COUNTRY_ID = "384";

/** Surcharges par pays, clé = `id` du pays (chaîne, ex. "250"). */
export const COUNTRY_STYLES: Record<MapVariant, Record<string, string>> = {
  hero: {},
  light: {
    // Côte d'Ivoire : même fond que le réseau, bordure blanche épaisse (dessinée par-dessus ses voisins)
    [BASE_COUNTRY_ID]: "fill-brand stroke-surface [stroke-width:1.5] [stroke-linejoin:round]",
  },
};
