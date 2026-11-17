import Image from "next/image";
import Button from "@/components/ui/button";
import { ImageReveal } from "@/components/ui/motion";
import { HR_EMAIL, mailtoHr } from "@/content/jobs";
import JoinUsPanel from "./join-us-panel";

/**
 * Bloc « REJOIGNEZ-NOUS » (maquette : photo ≈ 550 × 330 px à gauche chevauchant un panneau violet de
 * 300 px de haut qui s'étend jusqu'au bord droit de l'écran).
 * Desktop/tablette : grille [marge | photo | texte], panneau violet en calque derrière.
 * Mobile : photo pleine largeur qui chevauche le haut du panneau violet (empilé).
 * Les mesures verticales du calque sont en % / cqw : elles suivent la taille de la photo (5:3).
 */
export default function JoinUsBanner() {
  return (
    <section aria-labelledby="join-us-title" className="overflow-x-clip">
      <div className="container-narrow">
        <div className="relative @container md:grid md:grid-cols-[2.1%_47%_1fr]">
          <JoinUsPanel className="absolute -inset-x-4 bottom-0 top-[calc(60cqw_-_3rem)] bg-join md:inset-x-auto md:bottom-[4.5%] md:left-[49.1%] md:right-[calc(50%_-_50vw)] md:top-[4.5%]" />

          <ImageReveal className="relative aspect-[5/3] md:col-start-2">
            {/* TODO: photo de groupe d'origine à fournir : recadrée depuis la maquette. */}
            <Image
              src="/carrieres-rejoignez-nous.webp"
              alt="Photo de groupe des équipes Fune Info Africa dans le jardin du siège"
              fill
              sizes="(min-width: 1280px) 550px, (min-width: 768px) 47vw, 100vw"
              className="object-cover"
            />
          </ImageReveal>

          <div className="relative flex flex-col items-start justify-center px-fi-16 pb-fi-40 pt-fi-24 text-surface md:col-start-3 md:px-6 md:py-fi-24">
            <h2 id="join-us-title" className="font-arial text-cta-title font-bold uppercase tracking-[0.04em] [-webkit-text-stroke:0.02em]">
              Rejoignez-nous
            </h2>
            <p className="mt-[0.2rem] font-arial text-cta-sub font-bold">Offres d’emplois</p>
            <Button
              href={mailtoHr("Candidature spontanée")}
              variant="white"
              shape="rect"
              className="mt-[1.9rem] border border-brand !px-[1.3rem] !py-[0.6rem] !font-arial !text-base !leading-5 !font-normal !normal-case"
            >
              {HR_EMAIL}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
