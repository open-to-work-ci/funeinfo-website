/** Données uniques de la navigation (header desktop, méga-menus, menu mobile). */
export type NavLink = { label: string; href: string };

export type MegaMenu = {
  id: string;
  /** Titre magenta de la colonne gauche (casse de la maquette). */
  heading: string;
  /** Début du texte affiché en gras (« \n » = retour à la ligne sur desktop). */
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
      body: " vise l’innovation en continu,\nà apporter des prestations de qualité ainsi\nque des solutions adaptées aux besoins des familles",
      linksTitle: "NOTRE GROUPE",
      links: [
        { label: "Qui sommes-nous ?", href: "/groupe" },
        { label: "Nos engagements", href: "/groupe#engagements" },
        { label: "Notre réseau", href: "/groupe#reseau" },
      ],
    },
  },
  {
    label: "Nos expertises",
    href: "/expertises",
    mega: {
      id: "expertises",
      heading: "A PROPOS DE NOS EXPERTISES",
      lead: "FUNE INFO AFRICA s’engage à offrir\nun accompagnement humain,",
      body: "\nprofessionnel et personnalisé, en facilitant\nles démarches funéraires et l’organisation des obsèques,\nafin de permettre aux familles de traverser ces moments\navec plus de sérénité.",
      linksTitle: "NOS EXPERTISES",
      // Liens explicites (maquette) : indépendants de content/expertises.ts.
      links: [
        { label: "Rapatriement de corps", href: "/expertises#rapatriement-de-corps" },
        { label: "L’organisation d’obsèques", href: "/expertises#organisation-obseques" },
        { label: "La crémation", href: "/expertises#cremation" },
        {
          label: "Assistance pour les documents administratifs",
          href: "/expertises#documents-administratifs",
        },
        { label: "Logistique - Transport", href: "/expertises#logistique-transport" },
      ],
    },
  },
  { label: "Carrières", href: "/carrieres" },
];
