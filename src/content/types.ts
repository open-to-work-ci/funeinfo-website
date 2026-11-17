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
  department: string;
  title: string;
  description: string;
};

export type NewsItem = {
  slug: string;
  tag: string;
  title: string;
  excerpt: string;
  image: { src: string; alt: string };
  /** Page détail : absent tant que la page Actualités n'existe pas (carte non cliquable). */
  href?: string;
};
