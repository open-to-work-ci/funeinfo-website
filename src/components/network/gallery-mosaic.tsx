import clsx from "clsx";
import type { CountryImage } from "@/content/countries";
import GalleryTile from "./gallery-tile";

/**
 * Galerie en mosaïque (maquette 1170 px ; 35/65 + écart 18 px : rangées de même hauteur) : 1re image pleine largeur, puis grille
 * 2 colonnes (35/65) de hauteurs inégales. Les proportions viennent d'`aspect-ratio`
 * (rapports mesurés sur la maquette) : aucune hauteur fixe. Chaque position a ses
 * coins arrondis asymétriques. 1 colonne sous 768 px.
 * - 1 image seule (Congo, France, Guinée) : bandeau 2,86:1 aux coins haut-gauche/bas-droit.
 * - 5 images (Côte d'Ivoire) : bandeau 2,5:1 puis cycle de 4 vignettes.
 * `GalleryGhost` rend la même grille sans image (invisible) pour réserver la hauteur.
 * Usage : `<GalleryMosaic images={country.images} />`
 */
const single = "rounded-tl-blob rounded-br-blob aspect-[5/3] md:col-span-2 md:aspect-[1164/407]";
const hero = "rounded-tl-blob rounded-br-blob aspect-[5/3] md:col-span-2 md:mb-5 md:aspect-[1164/464]";
// Cycle de 4 images après la 1re : rangée courte (petit/large) puis rangée haute (petit/large)
const cycle = [
  "rounded-tl-blob aspect-[4/3] md:aspect-[350/314]",
  "rounded-tr-blob-md aspect-[4/3] md:aspect-[650/314]",
  "rounded-tl-blob aspect-[4/3] md:aspect-[350/570]",
  "rounded-tr-blob aspect-[4/3] md:aspect-[650/570]",
];

const gridClass = "grid gap-4 md:grid-cols-[35fr_65fr] md:gap-x-[1.125rem] md:gap-y-[0.5625rem]";

/** Classes de chaque emplacement selon le nombre d'images. */
function slots(count: number): string[] {
  if (count <= 0) return [];
  if (count === 1) return [single];
  return [hero, ...Array.from({ length: count - 1 }, (_, i) => cycle[i % 4])];
}

/** `priorityFirst` : charge la 1re image en priorité (candidate LCP : onglet par défaut seulement). */
export default function GalleryMosaic({
  images,
  priorityFirst = false,
}: {
  images: CountryImage[];
  priorityFirst?: boolean;
}) {
  const layout = slots(images.length);
  if (layout.length === 0) return null;
  return (
    <div className={gridClass}>
      {images.map((image, i) => (
        <GalleryTile
          key={image.src}
          image={image}
          className={layout[i]}
          priority={priorityFirst && i === 0}
          sizes={
            i === 0
              ? "(min-width: 1218px) 1170px, (min-width: 768px) calc(100vw - 3rem), calc(100vw - 2rem)"
              : "(min-width: 1218px) 760px, (min-width: 768px) 65vw, calc(100vw - 2rem)"
          }
        />
      ))}
    </div>
  );
}

/** Même grille, sans contenu, invisible : réserve la hauteur de la plus grande galerie. */
export function GalleryGhost({ count }: { count: number }) {
  return (
    <div aria-hidden className={clsx(gridClass, "invisible")}>
      {slots(count).map((cls, i) => (
        <div key={i} className={cls} />
      ))}
    </div>
  );
}
