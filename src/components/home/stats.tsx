import { stats } from "@/content/home";
import clsx from "clsx";
import { Fragment } from "react";
import { Stagger, StaggerItem } from "../ui/motion";
import CountUp from "./count-up";

/** Nombre d'agences : première rangée de la maquette (4 + 3). */
const AGENCIES = 4;

/**
 * Chiffres clés : 4 agences puis 3 réalisations, centrés (retour à la ligne naturel
 * du conteneur) ; en cascade à l'entrée dans l'écran, compteurs animés de 0 à la valeur.
 */
export default function Stats() {
  return (
    <section
      className="bg-surface px-4 pb-fi-40 pt-fi-16 md:px-6 md:pb-[5.3vw] md:pt-0"
      aria-label="Chiffres clés"
    >
      <Stagger
        as="ul"
        className="mx-auto flex max-w-[62rem] flex-wrap justify-center gap-x-[3vw] gap-y-fi-24 md:gap-y-1"
      >
        {stats.map((s, i) => (
          <Fragment key={s.label}>
            {i === AGENCIES && (
              <li
                aria-hidden="true"
                className="hidden h-0 basis-full md:block"
              />
            )}
            <StaggerItem as="li" className="basis-[44%] text-center md:basis-auto">
              <p
                className={clsx(
                  "font-sans font-bold leading-none text-brand-soft",
                  s.prefix ? "text-stat-lg" : "text-stat-xl",
                )}
              >
                <CountUp value={s.value} prefix={s.prefix} digits={s.digits} />
              </p>
              <p className="mt-1 whitespace-pre-line font-sans text-stat-label font-medium leading-[1.3] text-plum md:mt-2">
                {s.label}
              </p>
            </StaggerItem>
          </Fragment>
        ))}
      </Stagger>
    </section>
  );
}
