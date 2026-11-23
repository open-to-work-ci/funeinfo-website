import clsx from "clsx";

/**
 * Filet vertical des slides pays (desktop) : deux segments qui encadrent le bloc texte, avec
 * un trou de hauteur constante (≈ 30 % de la largeur, d'après la maquette) centré sur lui.
 * À chaque changement de slide (`seq`) les segments se redessinent en convergeant vers le texte.
 */
export default function HeroGuideLine({ visible, seq }: { visible: boolean; seq: number }) {
  const segment =
    "absolute inset-x-0 animate-hero-line bg-[#a3a3a3] motion-reduce:animate-none";
  return (
    <div
      aria-hidden="true"
      className={clsx(
        "pointer-events-none absolute inset-y-0 left-[11.5%] z-[3] hidden w-[0.0625rem] [--gap:min(30vw,62svh,36rem)] lg:block",
        "transition-opacity duration-[900ms] motion-reduce:transition-none",
        visible ? "opacity-100" : "opacity-0",
      )}
    >
      <span key={`t${seq}`} className={clsx(segment, "top-0 origin-top h-[calc(50%-var(--gap)/2+0.6rem)]")} />
      <span key={`b${seq}`} className={clsx(segment, "bottom-0 origin-bottom h-[calc(50%-var(--gap)/2-0.6rem)]")} />
    </div>
  );
}
