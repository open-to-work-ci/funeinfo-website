import { partners } from "@/content/home";
import clsx from "clsx";
import Image from "next/image";

function Logos({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul
      className={clsx(
        "flex shrink-0 items-center gap-fi-64 pr-fi-64 motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:gap-fi-40 motion-reduce:pr-0",
        hidden && "motion-reduce:hidden",
      )}
      aria-label={hidden ? undefined : "Nos partenaires"}
      aria-hidden={hidden || undefined}
    >
      {partners.map((p) => (
        <li key={p.name} className="flex h-14 shrink-0 items-center">
          <Image
            src={p.src}
            alt={hidden ? "" : p.name}
            width={p.width}
            height={56}
            className="h-14 w-auto max-w-none object-contain"
          />
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
    <section aria-label="Partenaires" className="overflow-hidden bg-surface py-fi-24">
      <div className="group flex w-max animate-marquee hover:[animation-play-state:paused] focus-within:[animation-play-state:paused] motion-reduce:w-auto motion-reduce:animate-none">
        <Logos />
        <Logos hidden />
      </div>
    </section>
  );
}
