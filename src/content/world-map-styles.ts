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
  // Épaisseurs en unités de la carte (1 unité = 1,9 px à 1905 px de large) : 0,03 ≈ 0,06 px — simple filet
  // entre les pays du réseau (maquette) ; les pays gris gardent leur trait blanc (0,4 dans `WorldMap`).
  light: { land: "fill-map-land", network: "fill-brand [stroke-width:0.03]" },
};

/**
 * Pays du réseau qui ont une fiche d'agence (`countries.ts`) : code ISO numérique → `id` du pays.
 * Ces pays sont focalisables au clavier et leur bulle d'info affiche adresse et téléphones.
 */
export const MAP_INFO_SOURCES: Record<string, string> = {
  "384": "cote-d-ivoire",
  "250": "france",
  "178": "congo",
  "324": "guinee",
};

/** Pays de la base du réseau (Côte d'Ivoire) : bordure plus épaisse que les autres pays du réseau (maquette : 0,94 px contre 0,06 px). */
export const BASE_COUNTRY_ID = "384";

/** Surcharges par pays, clé = `id` du pays (chaîne, ex. "250"). */
export const COUNTRY_STYLES: Record<MapVariant, Record<string, string>> = {
  hero: {},
  light: {
    // Côte d'Ivoire : bordure blanche de 0,94 px à 1905 px (≈ 0,49 unité), dessinée par-dessus ses voisins
    [BASE_COUNTRY_ID]: "fill-brand stroke-surface [stroke-width:0.49] [stroke-linejoin:round]",
  },
};
