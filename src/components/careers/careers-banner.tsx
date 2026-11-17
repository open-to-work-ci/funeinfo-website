import Image from "next/image";
import { Parallax } from "@/components/ui/motion";
import BannerTitle from "./banner-title";

/**
 * Bannière photo « CARRIÈRES » (maquette : ≈ 1903 × 380 px, soit 5:1, titre Arial blanc à gauche).
 * Hauteur pilotée par `aspect-ratio` : plus haute sur mobile/tablette pour garder le titre lisible.
 * Photo en parallaxe légère, titre qui monte depuis un masque (`BannerTitle`).
 * `asHeading` : titre en <h1> (page liste) ; sinon <p> décoratif (page détail, dont le <h1> est le poste).
 */
export default function CareersBanner({ asHeading = false }: { asHeading?: boolean }) {
  const Title = asHeading ? "h1" : "p";
  return (
    <div className="relative aspect-[2.2/1] max-h-[60svh] w-full overflow-hidden bg-navy md:aspect-[3.4/1] lg:aspect-[5/1]">
      {/* Légère sur-extension verticale (1,4 % ≈ 5 px à 1905 px) pour absorber le décalage du parallaxe. */}
      <Parallax className="absolute inset-x-0 -inset-y-[1.4%]" distance={5}>
        <div className="relative h-full">
          {/* TODO: photo d'origine (équipe devant la bannière) à fournir : recadrée depuis la maquette,
              titre « CARRIÈRES » retouché (inpainting) ; le titre réel est superposé en HTML. */}
          <Image
            src="/carrieres-banniere.webp"
            alt="L’équipe Fune Info Africa devant la bannière « L’assistance funéraire qui soulage !! »"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[35%_center] md:object-[45%_center] lg:object-center"
          />
        </div>
      </Parallax>
      <div className="absolute inset-0 bg-linear-to-r from-navy/20 to-transparent to-45%" aria-hidden />
      <Title className="absolute left-[clamp(1rem,1.7vw,2.5rem)] top-[calc(clamp(1rem,3.15vw,3.75rem)_-_0.2em)] font-arial text-banner font-bold uppercase text-surface">
        <BannerTitle>Carrières</BannerTitle>
      </Title>
    </div>
  );
}
