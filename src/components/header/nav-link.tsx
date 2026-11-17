import clsx from "clsx";
import type { ReactNode } from "react";

/**
 * Style commun des entrées de navigation desktop (Poppins bold uppercase).
 * Le soulignement se « dessine » de gauche à droite au survol / focus
 * (transition désactivée en prefers-reduced-motion). La page active ne
 * reçoit qu'un soulignement très discret (+ `aria-current` côté appelant).
 */
export const navLinkClass =
  "group/nav relative flex items-center font-poppins text-nav font-bold uppercase whitespace-nowrap " +
  "transition-colors duration-150 motion-reduce:transition-none " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-4";

export function NavLabel({
  children,
  active = false,
}: {
  children: ReactNode;
  active?: boolean;
}) {
  return (
    <span className="relative py-1">
      {children}
      <span
        aria-hidden="true"
        className={clsx(
          "absolute inset-x-0 -bottom-0.5 h-0.5 origin-left bg-current transition-transform duration-300 ease-out motion-reduce:transition-none",
          "scale-x-0 group-hover/nav:scale-x-100 group-focus-visible/nav:scale-x-100 group-aria-expanded/nav:scale-x-100",
          active && "scale-x-100 opacity-25 group-hover/nav:opacity-100",
        )}
      />
    </span>
  );
}
