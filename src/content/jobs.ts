import type { Job } from "./types";

export const jobs: Job[] = [
  { slug: "informaticien-de-gestion", department: "Informatique", title: "Informaticien de gestion", description: "Offre à détailler." },
  { slug: "assistant-rh", department: "Ressources Humaines", title: "Assistant RH", description: "Offre à détailler." },
  { slug: "logisticien", department: "Transport et Logistique", title: "Logisticien", description: "Offre à détailler." },
  { slug: "commercial", department: "Commercial", title: "Commercial (e)", description: "Offre à détailler." },
  { slug: "electriciens", department: "Electrique", title: "Electriciens", description: "Offre à détailler." },
];

export const getJob = (slug: string) => jobs.find((j) => j.slug === slug);
