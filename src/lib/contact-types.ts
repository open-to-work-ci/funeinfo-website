export type ContactState = {
  status: "idle" | "success" | "error";
  message: string;
  /** Erreurs par champ (clé = nom du champ). */
  errors: Partial<Record<"name" | "email" | "subject" | "message" | "consent", string>>;
  /** Valeurs à conserver dans le formulaire en cas d'erreur. */
  values: { name: string; email: string; subject: string; message: string };
};

export const CONTACT_INITIAL_STATE: ContactState = {
  status: "idle",
  message: "",
  errors: {},
  values: { name: "", email: "", subject: "", message: "" },
};

// TODO(copy) : sujets à valider avec le client (maquette : liste déroulante « Sujet »).
export const CONTACT_SUBJECTS = [
  "Organisation d’obsèques",
  "Rapatriement de corps",
  "Demande de devis",
  "Articles funéraires",
  "Autre demande",
] as const;

export const CONTACT_MESSAGES = {
  name: "Veuillez indiquer votre nom.",
  email: "Veuillez saisir une adresse e-mail valide.",
  subject: "Veuillez choisir un sujet.",
  message: "Votre message doit contenir au moins 10 caractères.",
  consent: "Veuillez accepter la politique de confidentialité pour envoyer votre message.",
  success: "Merci ! Votre message a bien été envoyé. Nous vous répondons au plus vite.",
  unavailable: "L’envoi est momentanément indisponible. Écrivez-nous à contact@fune.info ou appelez l’agence de votre pays (coordonnées ci-contre).",
  rateLimited: "Trop de tentatives. Veuillez réessayer dans quelques minutes.",
} as const;

export const CONTACT_LIMITS = { name: 120, message: 4000 } as const;
