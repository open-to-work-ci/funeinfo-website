export type NewsletterState = {
  status: "idle" | "success" | "error";
  message: string;
  /** Valeur à conserver dans le champ en cas d'erreur. */
  email: string;
};

export const NEWSLETTER_INITIAL_STATE: NewsletterState = {
  status: "idle",
  message: "",
  email: "",
};

export const NEWSLETTER_MESSAGES = {
  invalid: "Veuillez saisir une adresse e-mail valide.",
  success: "Merci ! Votre inscription à la newsletter est bien enregistrée.",
  unavailable: "Le service est momentanément indisponible. Veuillez réessayer plus tard.",
  rateLimited: "Trop de tentatives. Veuillez réessayer dans quelques minutes.",
} as const;
