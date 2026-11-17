import type { Job } from "./types";

// TODO: adresse RH à confirmer (maquette : « rh@fune.africa », ailleurs : domaine « @fune.info »).
export const HR_EMAIL = "rh@fune.africa";

export const mailtoHr = (subject: string) =>
  `mailto:${HR_EMAIL}?subject=${encodeURIComponent(subject)}`;

// TODO: contenu (missions, diplôme, durée et lieu, profil) à fournir pour les 4 offres
// autres que « Informaticien de gestion ». Sections omises = non affichées.
export const jobs: Job[] = [
  {
    slug: "informaticien-de-gestion",
    category: "Informatique",
    title: "Informaticien de gestion",
    missions: [
      "Appui à l’inventaire et au suivi du parc informatique (matériel et logiciels)",
      "Assistance de niveau 1 aux utilisateurs des agences et des régies",
      "Saisie, fiabilisation et mise à jour des bases de données et tableaux de bord",
      "Appui à la digitalisation des procédures et fichiers de suivi",
      "Participation aux sessions de formation informatique du personnel",
    ],
    diploma: "BTS, Licence ou Maîtrise en informatique de gestion, obtenu depuis moins de 3 ans.",
    // TODO: libellé maquetté « 3 mois , abidjan - marcory » corrigé (espace, casse) : à valider.
    durationAndLocation: "3 mois, Abidjan - Marcory",
    profile: "Bonne maîtrise d’Excel, rigueur, sens du service, discrétion.",
  },
  { slug: "assistant-rh", category: "Ressources humaines", title: "Assistant RH" },
  { slug: "logisticien", category: "Transport et logistique", title: "Logisticien" },
  { slug: "commercial", category: "Commercial", title: "Commercial(e)" },
  { slug: "electriciens", category: "Électrique", title: "Électriciens" },
];

export const getJob = (slug: string) => jobs.find((j) => j.slug === slug);
