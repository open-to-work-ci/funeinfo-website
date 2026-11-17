import Button from "@/components/ui/button";

/**
 * Bouton « EN SAVOIR PLUS » rectangulaire mauve de la maquette ; au survol, le texte se
 * décale et une flèche glisse depuis la droite.
 * Usage : `<BannerCta href="/…" label="le rapatriement de corps" />`
 */
export default function BannerCta({ href, label }: { href: string; label: string }) {
  return (
    <Button
      href={href}
      variant="soft"
      shape="rect"
      aria-label={`En savoir plus sur ${label}`}
      className="group/cta relative px-5! py-[1.125rem]! font-sans! text-caption! font-medium!"
    >
      <span className="transition-transform duration-300 ease-out group-hover/cta:-translate-x-2 group-focus-visible/cta:-translate-x-2 motion-reduce:transition-none motion-reduce:group-hover/cta:translate-x-0 motion-reduce:group-focus-visible/cta:translate-x-0">
        En savoir plus
      </span>
      <svg
        aria-hidden="true"
        viewBox="0 0 16 16"
        className="absolute right-2 size-3 -translate-x-3 opacity-0 transition-all duration-300 ease-out group-hover/cta:translate-x-0 group-hover/cta:opacity-100 group-focus-visible/cta:translate-x-0 group-focus-visible/cta:opacity-100 motion-reduce:transition-none"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 8h11M9 4l4 4-4 4" />
      </svg>
    </Button>
  );
}
