import Image from "next/image";
import Button from "../ui/button";
import { ImageReveal } from "../ui/motion";
import Reveal from "../ui/reveal";

/**
 * Bandeau d'appel à l'action bleu nuit : texte + bouton à gauche, photo à droite qui se
 * dévoile à l'entrée dans l'écran (empilés sur mobile, photo en tête, bouton pleine largeur).
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
      <div className="container-wide w-auto! grid md:grid-cols-[3fr_2fr]">
        <Reveal className="order-2 flex flex-col items-stretch justify-center gap-fi-16 py-fi-40 md:order-1 md:items-start md:py-fi-64">
          <h2 className="max-w-[40rem] font-sans text-cta-title font-bold leading-[1.05]">
            {title}
          </h2>
          <p className="mt-1 text-cta-sub text-line-strong md:mt-3">
            {subtitle}
          </p>
          <Button
            href={href}
            className="mt-fi-16 normal-case! md:mt-fi-24 md:self-start md:text-label md:font-semibold!"
          >
            {label}
          </Button>
        </Reveal>
        <div className="order-1 -mx-4 overflow-hidden md:order-2 md:mx-0">
          <ImageReveal className="relative aspect-[263/222] overflow-hidden">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 1320px) 528px, (min-width: 768px) 40vw, 100vw"
              className="object-cover"
            />
          </ImageReveal>
        </div>
      </div>
    </section>
  );
}
