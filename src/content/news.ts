import type { NewsItem } from "./types";

export const NEWS_PATH = "/actualites";

// TODO(content) : textes complets (`body`) et dates (`date`, ISO) des articles à fournir ; en attendant,
// la page détail affiche l’extrait. Photos recadrées depuis la maquette (≈ 190 px de large, basse
// résolution) : à remplacer par les originaux (zip annoncé par le client).
const items: NewsItem[] = [
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

/** Actualités, de la plus récente à la plus ancienne (ordre du tableau) ; `href` dérivé du slug. */
export const news: NewsItem[] = items.map((n) => ({ ...n, href: `${NEWS_PATH}/${n.slug}` }));

export const getNews = (slug: string) => news.find((n) => n.slug === slug);

/** « 2025-09-29 » → « 29/09/2025 » (même format que le site de référence). */
export function formatNewsDate(iso: string): string {
  const [y, m, d] = iso.split("-");
  return `${d}/${m}/${y}`;
}
