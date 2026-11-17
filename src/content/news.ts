import type { NewsItem } from "./types";

// TODO: extraits à compléter (version longue à fournir) ; photos 2 et 3 provisoires (visuels sociaux
// existants). `href` à renseigner quand la page Actualités existera : tant qu'il est absent, la carte
// n'est pas cliquable.
export const news: NewsItem[] = [
  {
    slug: "rencontre-ogf",
    tag: "Rencontre OGF - France",
    title: "Rencontre stratégique au siège d'OGF",
    excerpt: "Rencontre du réseau Pompes Funèbres de France au siège d'OGF …",
    image: { src: "/post/post-1.webp", alt: "Trois membres de la délégation Fune Info Africa lors de la rencontre au siège d'OGF" },
  },
  {
    slug: "taneexpo-italie",
    tag: "Taneexpo - Italie",
    title: "FUNE INFO AFRICA à l'international.",
    excerpt: "Notre délégation s'est déplacée à Bologne les 7 au 9 mai derniers à l'occasion …",
    image: { src: "/post/post-2.webp", alt: "Espace funéraire fleuri présenté par Fune Info Africa au salon de Bologne" },
  },
  {
    slug: "atelier-equipe",
    tag: "Atelier équipe",
    title: "L'excellence au service de l'accompagnement.",
    excerpt: "Les équipes de FUNE INFO AFRICA se sont réunies pour un atelier…",
    image: { src: "/post/post-3.webp", alt: "Cérémonie funéraire sous chapiteau avec tapis rouge et fleurs" },
  },
];
