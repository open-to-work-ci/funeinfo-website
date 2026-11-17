import type { ReactNode } from "react";

/** En-tête d'offre : surtitre « OFFRE - DISPONIBLE » + titre (`h1` sur le détail, `h2` sur la liste). */
export default function OfferHeading({
  as: Heading = "h2",
  children,
}: {
  as?: "h1" | "h2";
  children: ReactNode;
}) {
  return (
    <header>
      <p className="font-sans text-job-label font-medium uppercase tracking-[0.12em] text-brand">
        Offre - disponible
      </p>
      <Heading className="mt-[0.8rem] font-sans text-offer font-bold">{children}</Heading>
    </header>
  );
}
