import clsx from "clsx";
import type { ReactNode } from "react";

/**
 * Petit libellé uppercase magenta au-dessus d'un titre.
 * Usage : `<Kicker>Notre groupe</Kicker>` ou `<Kicker wide>Offre - disponible</Kicker>`
 * (`wide` = letter-spacing large).
 */
export default function Kicker({
  children,
  wide = false,
  className,
}: {
  children: ReactNode;
  wide?: boolean;
  className?: string;
}) {
  return (
    <p
      className={clsx(
        "font-poppins text-kicker font-bold uppercase text-brand",
        wide ? "tracking-[0.2em]" : "tracking-normal",
        className,
      )}
    >
      {children}
    </p>
  );
}
