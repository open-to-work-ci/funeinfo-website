import clsx from "clsx";
import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

/**
 * Bouton pilule. Variantes :
 * - `primary` : fond magenta (CTA)
 * - `outline` : contour magenta (onglets) ; `active` = rempli
 * - `white`   : blanc, à poser sur fond violet
 * - `soft`    : mauve clair (« EN SAVOIR PLUS »)
 * Avec `href` → `<Link>`, sinon `<button>`.
 * Usage : `<Button href="/carrieres">Voir les offres</Button>`
 */
type Variant = "primary" | "outline" | "white" | "soft";

const base =
  "inline-flex items-center justify-center font-poppins transition-colors duration-150 motion-reduce:transition-none " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-navy " +
  "disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary: "bg-brand text-surface hover:bg-brand-deep",
  outline:
    "border border-brand bg-transparent text-brand hover:bg-brand hover:text-surface data-[active=true]:bg-brand data-[active=true]:text-surface",
  white: "bg-surface text-brand hover:bg-canvas focus-visible:ring-surface focus-visible:ring-offset-join",
  soft: "bg-brand-soft text-navy hover:bg-brand hover:text-surface",
};

/** Forme : pilule (défaut) ou rectangle aux coins peu arrondis (maquette : « EN SAVOIR PLUS », e-mail RH). */
type Shape = "pill" | "rect";
const shapes: Record<Shape, string> = { pill: "rounded-pill", rect: "rounded-sm" };

/** Taille : `md` (défaut, CTA de page) ou `sm` (formulaire du footer, texte minuscule 10 px). */
type Size = "md" | "sm";
const sizes: Record<Size, string> = {
  md: "px-6 py-3 text-small font-bold uppercase",
  sm: "h-[1.95rem] px-[0.85rem] text-[0.55rem] leading-4 font-semibold",
};

type Props = {
  variant?: Variant;
  shape?: Shape;
  size?: Size;
  active?: boolean;
  children: ReactNode;
  className?: string;
} & (
  | ({ href: string } & Omit<ComponentProps<typeof Link>, "href" | "className" | "children">)
  | ({ href?: undefined } & Omit<ComponentProps<"button">, "className" | "children">)
);

export default function Button({
  variant = "primary",
  shape = "pill",
  size = "md",
  active,
  children,
  className,
  ...rest
}: Props) {
  const classes = clsx(base, shapes[shape], sizes[size], variants[variant], className);
  if ("href" in rest && rest.href !== undefined) {
    return (
      <Link className={classes} data-active={active} {...rest}>
        {children}
      </Link>
    );
  }
  return (
    <button
      type="button"
      className={classes}
      data-active={active}
      {...(rest as ComponentProps<"button">)}
    >
      {children}
    </button>
  );
}
