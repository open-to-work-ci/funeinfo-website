import type { Expertise } from "./types";

/** Données d'une bannière de la page /expertises (le `title` sert aussi au méga-menu). */
export type ExpertiseBannerData = Expertise & {
  /** Titre affiché sur la bannière (casse naturelle, mis en capitales en CSS). */
  bannerTitle: string;
  /** Accroche affichée sur la bannière. */
  text: string;
  image: string;
  /** Nom court utilisé dans le libellé accessible : « En savoir plus sur … ». */
  label: string;
};

// TODO(contenu) : textes des bannières Crémation, Assistance administrative (dupliqués de la
// maquette) et Exhumations (rédigé par défaut) provisoires, à remplacer par les textes réels.
// TODO(images) : public/banner-cremation.webp et public/banner-assistance.webp sont des
// visuels provisoires (dégradés) ; public/banner-obseques.webp est réutilisé pour Exhumations.
export const expertises: ExpertiseBannerData[] = [
  {
    slug: "rapatriement-de-corps",
    title: "Rapatriement de corps",
    summary: "Rapatriement à l’international.",
    bannerTitle: "Rapatriement",
    label: "le rapatriement de corps",
    text: "Perdre un proche à l’étranger est déjà douloureux… Ne laissez pas la logistique vous accabler.",
    image: "/banner-rapatriement.webp",
  },
  {
    slug: "organisation-obseques",
    title: "L’organisation d’obsèques",
    summary: "Prise en charge complète de la cérémonie.",
    bannerTitle: "Organisation d’obsèques",
    label: "l’organisation d’obsèques",
    text: "Organiser un dernier hommage qui reflète la vie et les valeurs de vos proches.",
    image: "/banner-obseques.webp",
  },
  {
    slug: "cremation",
    title: "La Crémation",
    summary: "Accompagnement pour la crémation.",
    bannerTitle: "La crémation",
    label: "la crémation",
    text: "Perdre un proche à l’étranger est déjà douloureux… Ne laissez pas la logistique vous accabler.",
    image: "/banner-cremation.webp",
  },
  {
    slug: "documents-administratifs",
    title: "Assistance pour les documents administratif",
    summary: "Aide aux démarches administratives.",
    bannerTitle: "Assistance administrative",
    label: "l’assistance administrative",
    text: "Organiser un dernier hommage qui reflète la vie et les valeurs de vos proches.",
    image: "/banner-assistance.webp",
  },
  {
    slug: "exhumations",
    title: "Exhumations",
    summary: "Prise en charge des exhumations.",
    bannerTitle: "Exhumations",
    label: "les exhumations",
    text: "Une prise en charge respectueuse et encadrée de chaque démarche d’exhumation.",
    image: "/banner-obseques.webp",
  },
  {
    slug: "logistique-transport",
    title: "Logistique - Transport",
    summary: "Transport et logistique funéraire.",
    bannerTitle: "Logistique et transport",
    label: "la logistique et le transport",
    text: "Des véhicules funéraires pour accompagner en toute discrétion.",
    image: "/banner-vehicules.webp",
  },
];
