export type CountryImage = {
  src: string;
  /** Texte alternatif descriptif, ex. « Agence de Conakry — salle d’accueil ». */
  alt: string;
};

export type Country = {
  /** Identifiant utilisé dans l’URL : `?pays=congo`. */
  id: string;
  label: string;
  address: string;
  email: string;
  /** Numéros affichés tels quels ; le lien `tel:` est dérivé (format international). */
  phones: string[];
  images: CountryImage[];
};

export const DEFAULT_COUNTRY_ID = "cote-d-ivoire";

// TODO(client) : relecture des coordonnées avant mise en ligne.
// TODO(assets) : les images ci-dessous sont des recadrages provisoires extraits des
// maquettes Figma (docs/design/screenshots) ; à remplacer par les photos d’origine.
// Congo, France, Guinée : galerie complète à fournir (1 seule image pour l’instant).
export const countries: Country[] = [
  {
    id: "cote-d-ivoire",
    label: "Côte d’Ivoire",
    address: "Abidjan, Bvd FHB carrefour Camp Commando",
    email: "abidjan@fune.info",
    phones: ["+225 07 00 64 75 61", "+225 07 06 06 06 77"],
    images: [
      { src: "/reseau/cote-d-ivoire-facade.webp", alt: "Agence d’Abidjan — façade Pompes Funèbres de France" },
      { src: "/reseau/cote-d-ivoire-salon-1.webp", alt: "Agence d’Abidjan — coin salon avec fauteuils et tables basses" },
      { src: "/reseau/cote-d-ivoire-salon-2.webp", alt: "Agence d’Abidjan — salle d’accueil et espace d’attente" },
      { src: "/reseau/cote-d-ivoire-couloir.webp", alt: "Agence d’Abidjan — couloir vitré et affiche" },
      { src: "/reseau/cote-d-ivoire-accueil.webp", alt: "Agence d’Abidjan — salon d’accueil avec canapé vert" },
    ],
  },
  {
    id: "congo",
    label: "Congo",
    address: "N° 08, rue Orsy, Poto-Poto, la gare.",
    email: "brazzaville@fune.info",
    phones: ["+242 06 542 16 33", "+242 06 752 06 06"],
    images: [{ src: "/reseau/congo-bureau.webp", alt: "Agence de Brazzaville — bureau de réception" }],
  },
  {
    id: "france",
    label: "France",
    address: "38 avenue de Verdun 94200 Ivry-sur-Seine",
    email: "ivry@fune.info",
    phones: ["+33 9 62 41 92 78", "+33 6 89 13 57 38"],
    images: [{ src: "/reseau/france-facade.webp", alt: "Agence d’Ivry-sur-Seine — façade avec vitrines Obsèques et Marbrerie" }],
  },
  {
    id: "guinee",
    label: "Guinée",
    address: "Conakry, Minière, en face du supermarché Coccinelle.",
    email: "conakry@fune.info",
    phones: ["+224 610 64 21 23", "+224 614 61 61 94"],
    images: [{ src: "/reseau/guinee-accueil.webp", alt: "Agence de Conakry — salle d’accueil" }],
  },
];
