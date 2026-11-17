/** Pages légales : liens du pied de page et rubriques à rédiger (contenu provisoire). */

export type LegalLink = { id: string; label: string; href: string };

export const LEGAL_LINKS: LegalLink[] = [
  { id: "mentions-legales", label: "Mentions légales", href: "/mentions-legales" },
  { id: "politique-de-confidentialite", label: "Politique de confidentialité", href: "/politique-de-confidentialite" },
];

export type LegalPage = {
  title: string;
  /** Rubriques attendues, pour guider la rédaction (aucune information juridique n'est inventée). */
  topics: string[];
};

export const LEGAL_PLACEHOLDER = {
  heading: "Contenu à rédiger",
  intro:
    "Cette page est provisoire. Le texte juridique doit être fourni et validé par le client ; les rubriques ci-dessous indiquent les informations attendues.",
  topicsLabel: "Rubriques attendues",
} as const;

export const LEGAL_PAGES = {
  mentions: {
    title: "Mentions légales",
    topics: [
      "Éditeur du site (dénomination, forme juridique, siège, immatriculation)",
      "Directeur de la publication",
      "Hébergeur du site (nom, adresse, contact)",
      "Contact (adresse postale, e-mail, téléphone)",
      "Propriété intellectuelle (textes, logos, images)",
      "Crédits (conception, photographies)",
      "Responsabilité et liens externes",
    ],
  },
  privacy: {
    title: "Politique de confidentialité",
    topics: [
      "Responsable du traitement et contact",
      "Données collectées (newsletter, candidatures, contact)",
      "Finalités et bases légales des traitements",
      "Durée de conservation",
      "Destinataires et sous-traitants",
      "Transferts de données hors de leur pays de collecte",
      "Droits des personnes (accès, rectification, suppression, opposition) et exercice",
      "Cookies et traceurs",
      "Mises à jour de la politique",
    ],
  },
} satisfies Record<string, LegalPage>;
