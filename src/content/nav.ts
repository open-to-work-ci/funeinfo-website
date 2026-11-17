import { expertises } from "./expertises";

/** Données uniques de la navigation (header desktop, méga-menus, menu mobile). */
export type NavLink = { label: string; href: string };

export type MegaMenu = {
  id: string;
  /** Titre magenta de la colonne gauche (casse de la maquette). */
  heading: string;
  /** Début du texte affiché en gras. */
  lead: string;
  /** Suite du texte, en normal. */
  body: string;
  /** Titre magenta de la colonne droite. */
  linksTitle: string;
  links: NavLink[];
};

export type NavItem = { label: string; href: string; mega?: MegaMenu };

export const navItems: NavItem[] = [
  {
    label: "Notre groupe",
    href: "/groupe",
    mega: {
      id: "groupe",
      heading: "A PROPOS DE FUNE INFO AFRICA",
      lead: "FUNE INFO AFRICA",
      body: " vise l’innovation en continu, à apporter des prestations de qualité ainsi que des solutions adaptées aux besoins des familles",
      linksTitle: "NOTRE GROUPE",
      links: [
        { label: "Qui sommes nous ?", href: "/groupe" },
        { label: "Nos engagements", href: "/groupe#engagements" },
        { label: "Notre Réseaux", href: "/groupe#reseau" },
      ],
    },
  },
  {
    label: "Nos expertises",
    href: "/expertises",
    mega: {
      id: "expertises",
      heading: "A PROPOS DE NOS EXPERTISES",
      lead: "FUNE INFO AFRICA s’engage à offrir un accompagnement humain,",
      body: " professionnel et personnalisé, en facilitant les démarches funéraires et l’organisation des obsèques, afin de permettre aux familles de traverser ces moments avec plus de sérénité.",
      linksTitle: "NOS EXPERTISES",
      links: expertises.map((e) => ({
        label: e.title,
        href: `/expertises#${e.slug}`,
      })),
    },
  },
  { label: "Carrières", href: "/carrieres" },
];
