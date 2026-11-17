import clsx from "clsx";
import Image from "next/image";
import type { CountryImage } from "@/content/countries";

/**
 * Galerie en mosaïque : 1re image pleine largeur, puis grille 2 colonnes (35/65)
 * de hauteurs inégales. Chaque position a ses coins arrondis propres (formes
 * asymétriques de la maquette). 1 colonne sous 768 px ; liste vide = rien.
 * Usage : `<GalleryMosaic images={country.images} />`
 */
const hero = "rounded-tl-blob-sm rounded-br-blob aspect-[5/3] md:col-span-2 md:aspect-[811/323]";
// Cycle de 4 images après la 1re : rangée courte (petit/large) puis rangée haute (petit/large)
const cycle = [
  "rounded-tl-blob aspect-[4/3] md:aspect-[281/251]",
  "rounded-tl-blob rounded-tr-blob-sm aspect-[4/3] md:aspect-[517/251]",
  "rounded-tl-blob aspect-[4/3] md:aspect-[281/454]",
  "rounded-tl-blob rounded-tr-blob aspect-[4/3] md:aspect-[517/454]",
];

export default function GalleryMosaic({ images }: { images: CountryImage[] }) {
  if (images.length === 0) return null;
  const [first, ...rest] = images;
  return (
    <div className="grid gap-4 md:grid-cols-[35fr_65fr] md:gap-5">
      <Tile image={first} className={hero} priority sizes="(min-width: 1320px) 1272px, 100vw" />
      {rest.map((image, i) => (
        <Tile
          key={image.src}
          image={image}
          className={cycle[i % 4]}
          sizes="(min-width: 1320px) 800px, (min-width: 768px) 65vw, 100vw"
        />
      ))}
    </div>
  );
}

function Tile({
  image,
  className,
  sizes,
  priority,
}: {
  image: CountryImage;
  className: string;
  sizes: string;
  priority?: boolean;
}) {
  return (
    <div className={clsx("relative overflow-hidden bg-card", className)}>
      <Image src={image.src} alt={image.alt} fill sizes={sizes} priority={priority} className="object-cover" />
    </div>
  );
}
