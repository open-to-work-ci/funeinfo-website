export type Country = {
  slug: string;
  name: string;
  location: string;
  mail: string;
  contact: string;
};

export type Expertise = { slug: string; title: string; summary: string };

export type Job = {
  slug: string;
  category: string;
  title: string;
  /** Sections optionnelles : une section absente n'est pas affichée. */
  missions?: string[];
  diploma?: string;
  durationAndLocation?: string;
  profile?: string;
};

export type NewsItem = {
  slug: string;
  tag: string;
  title: string;
  excerpt: string;
  image: { src: string; alt: string };
  /** Date de publication (ISO « 2025-09-29 »), affichée si connue : ne jamais en inventer. */
  date?: string;
  /** Paragraphes de l'article (page détail). Absent : l'extrait sert de texte provisoire. */
  body?: string[];
  /** Page détail : dérivée du slug (`/actualites/<slug>`) par `news.ts`. */
  href?: string;
};
