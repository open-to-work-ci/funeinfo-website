/** Contenu de la page d'accueil (maquette `page-accueil.png`). */

export type HeroSlide = {
  strong: string;
  light: string;
  subtitle: string;
  image: { src: string; alt: string };
};

// TODO: seule la slide 1 est dessinée. Textes et visuels des slides 2 à 5 provisoires, à fournir.
export const heroSlides: HeroSlide[] = [
  {
    strong: "Un réseau international",
    light: "au service des familles …",
    subtitle: "L'excellence funéraire au service de la dignité humaine.",
    image: { src: "/hero.jpg", alt: "Cérémonie funéraire sous chapiteaux blancs et violets" },
  },
  {
    strong: "Organisation d'obsèques",
    light: "dans le respect de chaque famille …",
    subtitle: "Un accompagnement discret, de l'annonce du décès à l'inhumation.",
    image: { src: "/banner-obseques.webp", alt: "Cérémonie d'obsèques organisée par Fune Info Africa" },
  },
  {
    strong: "Rapatriement de corps",
    light: "d'ici vers l'ailleurs …",
    subtitle: "Un réseau de partenaires mobilisés selon le pays de départ et de destination.",
    image: { src: "/banner-rapatriement.webp", alt: "Rapatriement de corps à l'international" },
  },
  {
    strong: "Véhicules funéraires",
    light: "une logistique maîtrisée …",
    subtitle: "Des moyens adaptés pour chaque étape du transport.",
    image: { src: "/banner-vehicules.webp", alt: "Véhicules funéraires du réseau" },
  },
  {
    strong: "Une présence sur 4 pays",
    light: "pour vous accompagner …",
    subtitle: "Côte d'Ivoire, France, Congo et Guinée.",
    image: { src: "/post/post-3.webp", alt: "Salon funéraire aménagé par Fune Info Africa" },
  },
];

export const intro = {
  title: "FUNE INFO AFRICA , L'APRES DES MAINTENANT",
  paragraphs: [
    "La qualité de notre travail se définit par la constance, l'intégrité et le respect de chaque famille que nous servons. Nous savons que la confiance est essentielle dans les moments difficiles, c'est pourquoi chaque interaction est menée avec professionnalisme, discrétion et une réelle bienveillance.",
    "Notre approche repose sur des principes clairs plutôt que sur des routines rigides.",
  ],
};

export type Stat = { value: number; prefix?: string; digits?: number; label: string };

// TODO(à valider) : les « 01 » d'agences sont provisoires (layout.tsx annonce « plus de 30 agences en
// Côte d'Ivoire »). « Agence au Guinée » reprend la maquette : à corriger en « en Guinée » si validé.
export const stats: Stat[] = [
  { value: 1, digits: 2, label: "Agence en Côte d'Ivoire…" },
  { value: 1, digits: 2, label: "Agence en France" },
  { value: 1, digits: 2, label: "Agence au Congo-B" },
  { value: 1, digits: 2, label: "Agence au Guinée" },
  { value: 600, prefix: "+", label: "Organisations d'Obsèques de 2020 à Aujourd'hui" },
  { value: 100, prefix: "+", label: "Rapatriements de corps de 2023 à Aujourd'hui" },
  { value: 100, prefix: "+", label: "Articles funéraires dans notre boutique en ligne" },
];

export const tagline = {
  title: "D'ici vers l'ailleurs. De l'ailleurs vers chez vous.",
  text: "Notre couverture internationale n'est pas une promesse : elle repose sur des rapatriements effectivement réalisés et un réseau de partenaires mobilisés selon le pays de départ et de destination.",
};

// TODO: remplacer par la photo de « deux mains qui se tiennent » (non fournie ; visuel provisoire).
// TODO(à valider) : destination du bouton. `/contact` n'existe pas encore : mailto en attendant.
export const cta = {
  title: "Une question, une urgence, ou besoin d'information ?",
  subtitle: "Parlons-en simplement, à votre rythme.",
  label: "Échanger avec nous",
  href: "mailto:Contact@fune.info",
  image: { src: "/banner-obseques.webp", alt: "Deux mains qui se tiennent (visuel provisoire)" },
};

// TODO: logos provisoires (wordmarks texte). Fichiers sources et autorisation d'usage à fournir.
export const partners: { name: string; src: string; width: number }[] = [
  { name: "POFCI", src: "/logos/partners/pofci.svg", width: 120 },
  { name: "PFGA", src: "/logos/partners/pfga.svg", width: 120 },
  { name: "Global'ys en Afrique", src: "/logos/partners/globalys.svg", width: 159 },
  { name: "PFMP", src: "/logos/partners/pfmp.svg", width: 120 },
  { name: "AfterCare World", src: "/logos/partners/aftercare.svg", width: 159 },
  { name: "OGF", src: "/logos/partners/ogf.svg", width: 120 },
  { name: "Pompes Funèbres de France", src: "/logos/partners/pfdf.svg", width: 399 },
  { name: "Magnus Poirier", src: "/logos/partners/magnus-poirier.svg", width: 234 },
  { name: "CMPF", src: "/logos/partners/cmpf.svg", width: 120 },
  { name: "Anubis", src: "/logos/partners/anubis.svg", width: 120 },
  { name: "NFE", src: "/logos/partners/nfe.svg", width: 120 },
  { name: "Oltre Casa Funeraria", src: "/logos/partners/oltre.svg", width: 324 },
];
