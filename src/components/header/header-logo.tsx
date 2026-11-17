import Image from "next/image";
import Link from "next/link";

/**
 * Logo Fune Info Africa (version dégradé multicolore, SVG).
 * Maquette desktop : ≈ 85 px de haut dans une barre de 117 px.
 */
export default function HeaderLogo({
  onNavigate,
  compact = false,
}: {
  onNavigate?: () => void;
  compact?: boolean;
}) {
  return (
    <Link
      href="/"
      aria-label="Fune Info Africa — Accueil"
      onClick={onNavigate}
      className="block shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
    >
      <Image
        src="/logo-header-gradient.svg"
        alt="Fune Info Africa"
        width={300}
        height={180}
        priority
        sizes="(min-width: 1024px) 9rem, 5.5rem"
        data-compact={compact}
        className="h-[3.3rem] w-auto transition-[height] duration-300 ease-out motion-reduce:transition-none nav:h-[clamp(4.25rem,4.45vw,5.3rem)] nav:data-[compact=true]:h-[clamp(3.5rem,3.4vw,4rem)]"
      />
    </Link>
  );
}
