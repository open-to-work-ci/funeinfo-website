/** Contenu du pied de page (liens sociaux, newsletter, contact). */

export type SocialLink = {
  id: "facebook" | "linkedin" | "instagram";
  /** Libellé accessible (aria-label). */
  label: string;
  href: string;
};

// TODO: URLs réelles à fournir par le client (valeurs provisoires = pages d'accueil des réseaux).
export const SOCIAL_LINKS: SocialLink[] = [
  { id: "facebook", label: "Facebook", href: "https://www.facebook.com/" },
  { id: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/" },
  { id: "instagram", label: "Instagram", href: "https://www.instagram.com/" },
];

export const FOOTER = {
  socialTitle: "Retrouvez nos actualités sur",
  newsletter: {
    title: "Abonnez vous à notre Newsletter...",
    emailLabel: "Adresse e-mail",
    submit: "S’enregistrer",
    submitting: "Envoi en cours…",
  },
  contact: {
    title: "Vous avez une question ?",
    cta: "Contactez-nous",
    // TODO: à confirmer (le footer utilise @fune.info, la page Carrières @fune.africa).
    email: "Contact@fune.info",
  },
  copyright: "FUNE INFO AFRICA",
} as const;
