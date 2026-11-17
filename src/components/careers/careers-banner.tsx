import Image from "next/image";

/**
 * Bannière photo pleine largeur « CARRIÈRES » avec calque sombre.
 * `asHeading` : rend le titre en <h1> (page liste) ; sinon simple <p> décoratif
 * (page détail, où le <h1> est l'intitulé du poste).
 */
export default function CareersBanner({ asHeading = false }: { asHeading?: boolean }) {
  const Title = asHeading ? "h1" : "p";
  return (
    <div className="relative h-48 w-full overflow-hidden bg-navy md:h-72 2xl:h-[23.625rem]">
      {/* TODO: photo d'origine (équipe devant la bannière) à fournir : recadrée provisoirement depuis la maquette. */}
      <Image
        src="/carrieres-banniere.jpg"
        alt="L’équipe Fune Info Africa devant la bannière « L’assistance funéraire qui soulage !! »"
        fill
        preload
        sizes="100vw"
        className="object-cover object-[70%_center] md:object-center"
      />
      <div className="absolute inset-0 bg-navy/40" aria-hidden />
      <Title className="absolute left-fi-16 top-fi-16 font-poppins text-section font-bold uppercase text-surface md:left-fi-40 md:top-fi-24 md:text-page">
        Carrières
      </Title>
    </div>
  );
}
