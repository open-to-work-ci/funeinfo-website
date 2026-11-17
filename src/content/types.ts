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

export type NewsItem = { slug: string; title: string; date: string; href: string };
