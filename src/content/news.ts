import type { NewsItem } from "./types";

// TODO: extraits à compléter (version longue à fournir) ; photos recadrées depuis la maquette (≈ 190 px
// de large, basse résolution) : à remplacer par les originaux. `href` à renseigner quand la page
// Actualités existera : tant qu’il est absent, la carte n’est pas cliquable.
export const news: NewsItem[] = [
  {
    slug: "rencontre-ogf",
    tag: "Rencontre OGF - France",
    title: "Rencontre stratégique\nau siège d’OGF",
    excerpt: "Rencontre du réseau Pompes Funèbres de France au siège d’OGF…",
    image: { src: "/accueil/actualite-ogf.webp", alt: "Quatre personnes posent lors de la rencontre au siège d’OGF" },
  },
  {
    slug: "taneexpo-italie",
    tag: "Taneexpo - Italie",
    title: "FUNE INFO AFRICA à\nl’international.",
    excerpt: "Notre délégation s’est déplacée à Bologne les 7 au 9 mai derniers à l’occasion…",
    image: { src: "/accueil/actualite-taneexpo.webp", alt: "Délégation Fune Info Africa devant le stand du salon Taneexpo à Bologne" },
  },
  {
    slug: "atelier-equipe",
    tag: "Atelier équipe",
    title: "L’excellence au service\nde l’accompagnement.",
    excerpt: "Les équipes de FUNE INFO AFRICA se sont réunies pour un atelier…",
    image: { src: "/accueil/actualite-atelier.webp", alt: "Équipe Fune Info Africa réunie devant un bâtiment lors d’un atelier" },
  },
];
