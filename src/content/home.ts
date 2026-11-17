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
