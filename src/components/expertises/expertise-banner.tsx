import clsx from "clsx";
import Image from "next/image";
import Button from "@/components/ui/button";
import Reveal from "@/components/ui/reveal";

/**
 * Bannière d'une expertise : photo plein cadre, calque dégradé sombre côté texte
 * et bloc magenta qui dépasse derrière (en bas à gauche si `align="left"`, à droite sinon).
 * Usage : `<ExpertiseBanner id="cremation" title="La crémation" text="…" image="/x.webp" href="…" label="la crémation" align="left" />`
 */
export default function ExpertiseBanner({
  id,
  title,
  text,
  image,
  href,
  label,
  align,
  priority = false,
}: {
  id: string;
  title: string;
  text: string;
  image: string;
  href: string;
  /** Complète le libellé accessible : « En savoir plus sur {label} ». */
  label: string;
  align: "left" | "right";
  priority?: boolean;
}) {
  const left = align === "left";
  return (
    <Reveal direction="none">
      <article id={id} className="relative scroll-mt-6">
        <div
          aria-hidden="true"
          className={clsx(
            "absolute -bottom-3 top-6 bg-brand md:-bottom-6 md:top-10",
            left ? "-left-3 right-3 md:-left-6 md:right-6" : "-right-3 left-3 md:-right-6 md:left-6",
          )}
        />
        <div className="relative flex min-h-80 flex-col justify-between gap-fi-24 overflow-hidden bg-navy p-fi-24 text-surface md:min-h-64 md:p-fi-40 lg:min-h-72">
          <Image
            src={image}
            alt=""
            fill
            priority={priority}
            sizes="(min-width: 1320px) 1272px, (min-width: 768px) calc(100vw - 48px), calc(100vw - 32px)"
            className="object-cover"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-linear-to-b from-navy/90 via-navy/70 to-navy/40 md:bg-linear-to-r md:from-navy/90 md:via-navy/65 md:to-transparent"
          />
          <div className="relative max-w-xl space-y-2">
            <h2 className="font-poppins text-section font-bold uppercase md:text-page">{title}</h2>
            <p className="text-body font-medium uppercase">{text}</p>
          </div>
          <div className="relative flex justify-end">
            <Button href={href} variant="soft" aria-label={`En savoir plus sur ${label}`}>
              En savoir plus
            </Button>
          </div>
        </div>
      </article>
    </Reveal>
  );
}
