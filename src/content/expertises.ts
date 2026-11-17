import type { Expertise } from "./types";

/** Données d'une bannière de la page /expertises. */
export type ExpertiseBannerData = Expertise & {
  /** Titre affiché sur la bannière, tel que dans la maquette (mis en capitales en CSS). */
  bannerTitle: string;
  /** Accroche affichée sur la bannière : une entrée par ligne de la maquette (capitales en CSS). */
  lines: string[];
  image: {
    src: string;
    alt: string;
    /** Point focal (object-position) pour les cadrages étroits (mobile, tablette). */
    position: string;
  };
  /** Nom court utilisé dans le libellé accessible : « En savoir plus sur … ». */
  label: string;
};

// Les slugs sont ceux des ancres du méga-menu (src/content/nav.ts) : ne pas les changer.
// « Exhumations » n'est pas dans la maquette de la page : le lien du menu est géré dans nav.ts.
//
// TODO(contenu) : les fautes de la maquette sont reproduites telles quelles (« OBSEQUE »,
// « ASSISTANCE ADMINISTRATIF », « CREMATION », « FUNERAIRE », double espace) ; textes des
// bannières Crémation et Assistance dupliqués d'autres bannières : à faire valider.
// TODO(images) : les visuels de public/expertises-*.webp sont recadrés depuis l'export de la
// maquette (≈ 1220 px de large, texte et bouton effacés) : à remplacer par les originaux.
export const expertises: ExpertiseBannerData[] = [
  {
    slug: "rapatriement-de-corps",
    title: "Rapatriement de corps",
    summary: "Rapatriement à l’international.",
    bannerTitle: "Rapatriement",
    label: "le rapatriement de corps",
    lines: [
      "Perdre un proche à l’étranger est déjà douloureux…",
      "Ne laissez pas la logistique vous accabler.",
    ],
    image: {
      src: "/expertises-rapatriement.webp",
      alt: "Avion le long d’une passerelle d’embarquement, au coucher du soleil",
      position: "40% 50%",
    },
  },
  {
    slug: "organisation-obseques",
    title: "L’organisation d’obsèques",
    summary: "Prise en charge complète de la cérémonie.",
    bannerTitle: "Organisation d’obseque",
    label: "l’organisation d’obsèques",
    lines: ["Organiser un dernier hommage", "qui reflète la vie et les valeurs", "de vos proches."],
    image: {
      src: "/expertises-organisation.webp",
      alt: "Assemblée recueillie, vue de dos, lors d’une cérémonie d’obsèques",
      position: "55% 50%",
    },
  },
  {
    slug: "cremation",
    title: "La Crémation",
    summary: "Accompagnement pour la crémation.",
    bannerTitle: "La cremation",
    label: "la crémation",
    lines: [
      "Perdre un proche à l’étranger est déjà douloureux…",
      "Ne laissez pas la logistique vous accabler.",
    ],
    image: {
      src: "/expertises-cremation.webp",
      alt: "Urne funéraire nacrée posée sur un bouquet de fleurs, devant un feuillage flou",
      position: "78% 50%",
    },
  },
  {
    slug: "documents-administratifs",
    title: "Assistance pour les documents administratif",
    summary: "Aide aux démarches administratives.",
    bannerTitle: "Assistance administratif",
    label: "l’assistance administrative",
    lines: ["Organiser un dernier hommage", "qui reflète la vie et les valeurs", "de vos proches."],
    image: {
      src: "/expertises-assistance.webp",
      alt: "Pile de dossiers administratifs devant des classeurs",
      position: "70% 50%",
    },
  },
  {
    slug: "logistique-transport",
    title: "Logistique - Transport",
    summary: "Transport et logistique funéraire.",
    bannerTitle: "Logistique et transport",
    label: "la logistique et le transport",
    lines: ["Des véhicules  funeraire pour", "accompagner en toute discrétion."],
    image: {
      src: "/expertises-logistique.webp",
      alt: "Deux véhicules funéraires côte à côte : un Mercedes noir et un SUV blanc",
      position: "50% 50%",
    },
  },
];
