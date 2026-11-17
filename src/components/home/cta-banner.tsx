import Image from "next/image";
import Button from "../ui/button";
import Reveal from "../ui/reveal";

/**
 * Bandeau d'appel à l'action bleu nuit : texte + bouton à gauche, image à droite
 * (empilés sur mobile, bouton pleine largeur).
 */
export default function CtaBanner({
  title,
  subtitle,
  label,
  href,
  image,
}: {
  title: string;
  subtitle: string;
  label: string;
  href: string;
  image: { src: string; alt: string };
}) {
  return (
    <section className="bg-navy text-surface">
      <div className="container-wide grid md:grid-cols-2">
        <Reveal className="flex flex-col items-stretch justify-center gap-fi-16 py-fi-40 md:items-start md:py-fi-64">
          <h2 className="max-w-md font-poppins text-section font-bold md:text-3xl md:leading-10">
            {title}
          </h2>
          <p className="text-small text-line-strong md:text-base">{subtitle}</p>
          <Button href={href} className="mt-fi-16 md:self-start">
            {label}
          </Button>
        </Reveal>
        <div className="relative -mx-4 min-h-56 md:mx-0 md:min-h-80">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(min-width: 1320px) 660px, (min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
