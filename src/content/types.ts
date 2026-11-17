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

export type NewsItem = { slug: string; title: string; date: string; href: string };
