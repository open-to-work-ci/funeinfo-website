import { partners } from "@/content/home";
import clsx from "clsx";
import Image from "next/image";

function Logos({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul
      className={clsx(
        "flex shrink-0 items-center gap-fi-40 pr-fi-40 motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:gap-fi-24 motion-reduce:pr-0",
        hidden && "motion-reduce:hidden",
      )}
      aria-label={hidden ? undefined : "Nos partenaires"}
      aria-hidden={hidden || undefined}
    >
      {partners.map((p) => (
        <li key={p.name} className="flex h-[7.2em] shrink-0 items-center">
          {p.logo ? (
            <Image
              src={p.logo.src}
              alt={hidden ? "" : p.name}
              width={p.logo.width}
              height={p.logo.height}
              sizes="200px"
              style={{ height: `${p.logo.displayHeight}em` }}
              className="w-auto max-w-none object-contain"
            />
          ) : (
            // Logo officiel non téléchargeable : nom en texte (aucun logo inventé).
            <span className="whitespace-nowrap font-poppins text-body font-semibold text-ink-secondary">
              {p.name}
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}

/**
 * Bande de logos partenaires en défilement continu (CSS pur). Pause au survol /
 * focus ; statique (liste centrée) avec prefers-reduced-motion. La seconde copie
 * assure la boucle infinie et est masquée aux lecteurs d'écran.
 */
export default function PartnersMarquee() {
  return (
    <section
      aria-label="Partenaires"
      className="overflow-hidden bg-surface py-fi-16 text-[clamp(0.55rem,0.35rem+0.65vw,1rem)]"
    >
      <div className="group flex w-max animate-marquee pl-[3.5vw] hover:[animation-play-state:paused] focus-within:[animation-play-state:paused] motion-reduce:w-auto motion-reduce:animate-none motion-reduce:pl-0">
        <Logos />
        <Logos hidden />
      </div>
    </section>
  );
}
