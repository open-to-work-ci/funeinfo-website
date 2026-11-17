/** Contenu de la page d'accueil (maquette `page-accueil.png`). */

export type HeroIntro = {
  /** Lignes en gras (titre) puis lignes en graisse légère, chacune sur sa propre ligne. */
  strong: string[];
  light: string[];
  subtitle: string;
};

/** Slide 1 du hero : carte du monde + titre (maquette `page-accueil.png`). */
export const heroIntro: HeroIntro = {
  strong: ["Un réseau", "international"],
  light: ["au service", "des familles …"],
  subtitle: "L'excellence funéraire au service de la dignité humaine.",
};

export type HeroCountrySlide = {
  /** `id` du pays dans `countries.ts` (téléphones, adresse et photo de la carte viennent de là). */
  countryId: string;
  /** Ville affichée avant le pays (« Abidjan , Côte d'Ivoire »). */
  city: string;
  /** Classe Tailwind du panneau de couleur unie (tokens `--color-hero-*` de globals.css). */
  panelClass: string;
};

// Slides 2 à 5 : les 4 pays, dans l'ordre de la vidéo de la maquette.
// TODO(assets) : photos de fond des 4 pays à fournir (drapeau + pont d'Abidjan, tour Eiffel,
// pont de Brazzaville au crépuscule, lettres « Guinée » de Conakry). En attendant, le fond est
// la photo d'agence agrandie, floutée et assombrie (voir `hero-country-slide.tsx`).
export const heroCountries: HeroCountrySlide[] = [
  { countryId: "cote-d-ivoire", city: "Abidjan", panelClass: "bg-hero-abidjan" },
  { countryId: "france", city: "Paris", panelClass: "bg-hero-paris" },
  { countryId: "congo", city: "Brazzaville", panelClass: "bg-hero-brazzaville" },
  { countryId: "guinee", city: "Conakry", panelClass: "bg-hero-conakry" },
];

export const intro = {
  title: "FUNE INFO AFRICA",
  titleTail: ", L'APRES DES MAINTENANT",
  paragraphs: [
    "La qualité de notre travail se définit par la constance, l'intégrité et le respect de chaque famille que nous servons. Nous savons que la confiance est essentielle dans les moments difficiles, c'est pourquoi chaque interaction est menée avec professionnalisme, discrétion et une réelle bienveillance.",
    "Notre approche repose sur des principes clairs plutôt que sur des routines rigides.",
  ],
};

export type Stat = { value: number; prefix?: string; digits?: number; label: string };

// TODO(à valider) : les « 01 » d'agences suivent la maquette mais sont provisoires (layout.tsx annonce
// « plus de 30 agences en Côte d'Ivoire »). « Agence au Guinée » reprend la maquette : à corriger en
// « en Guinée » si validé. Le « \n » force le retour à la ligne de la maquette.
export const stats: Stat[] = [
  { value: 1, digits: 2, label: "Agence\nen Côte d'Ivoire…" },
  { value: 1, digits: 2, label: "Agence\nen France" },
  { value: 1, digits: 2, label: "Agence\nau Congo-B" },
  { value: 1, digits: 2, label: "Agence\nau Guinée" },
  { value: 600, prefix: "+", label: "Organisations d'Obsèques\nde 2020 à Aujourd'hui" },
  { value: 100, prefix: "+", label: "Rapatriements de corps\nde 2023 à Aujourd'hui" },
  { value: 100, prefix: "+", label: "Articles funéraires dans\nnotre boutique en ligne" },
];

export const tagline = {
  title: "D'ici vers l'ailleurs.\nDe l'ailleurs vers chez vous.",
  text: "Notre couverture internationale n'est pas une promesse : elle repose sur des rapatriements effectivement réalisés et un réseau de partenaires mobilisés selon le pays de départ et de destination.",
};

// TODO: photo « deux mains qui se tiennent » recadrée depuis la maquette (263 px de large, basse
// résolution) : à remplacer par l'export d'origine.
// TODO(à valider) : destination du bouton. `/contact` n'existe pas encore : mailto en attendant.
export const cta = {
  title: "Une question, une urgence, ou besoin d'information ?",
  subtitle: "Parlons-en simplement, à votre rythme.",
  label: "Échanger avec nous",
  href: "mailto:Contact@fune.info",
  image: { src: "/accueil/mains.webp", alt: "Deux mains qui se tiennent" },
};

/**
 * Partenaires (ordre de la maquette). `logo` absent = logo officiel non téléchargeable : le nom est
 * affiché en texte (aucun logo inventé). `displayHeight` en em (relatif à la taille de police de la bande, fluide), comme la maquette).
 * Sources des fichiers : voir la PR (sites officiels / annuaire des membres FIAT-IFTA).
 */
export type Partner = {
  name: string;
  logo?: { src: string; width: number; height: number; displayHeight: number };
};

export const partners: Partner[] = [
  { name: "POFCI" },
  { name: "PFGA" },
  { name: "Global'ys en Afrique" },
  { name: "PFMP" },
  {
    name: "AfterCare World",
    logo: { src: "/logos/partners/aftercare-world.webp", width: 357, height: 119, displayHeight: 2.75 },
  },
  { name: "OGF", logo: { src: "/logos/partners/ogf.webp", width: 203, height: 87, displayHeight: 2.4 } },
  {
    name: "Pompes Funèbres de France",
    logo: { src: "/logos/partners/pompes-funebres-de-france.webp", width: 193, height: 204, displayHeight: 6.2 },
  },
  {
    name: "Magnus Poirier",
    logo: { src: "/logos/partners/magnus-poirier.webp", width: 264, height: 320, displayHeight: 7.2 },
  },
  { name: "CMPF", logo: { src: "/logos/partners/cmpf.webp", width: 300, height: 300, displayHeight: 6 } },
  { name: "Anubis" },
  { name: "NFE" },
  { name: "Oltre Casa Funeraria" },
];
