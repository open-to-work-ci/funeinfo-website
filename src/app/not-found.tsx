import Button from "@/components/ui/button";
import Kicker from "@/components/ui/kicker";
import Reveal from "@/components/ui/reveal";
import type { Metadata } from "next";

// Les pages 404 ne doivent pas être indexées.
export const metadata: Metadata = {
  title: "Page introuvable",
  robots: { index: false, follow: false },
};

/** 404 brandée (bandeau bleu nuit comme les en-têtes de page). */
export default function NotFound() {
  return (
    <div className="flex min-h-[60svh] items-center bg-navy py-fi-64 text-surface">
      <Reveal className="container-wide space-y-4">
        <Kicker>Erreur 404</Kicker>
        <h1 className="font-poppins text-section font-bold md:text-page md:leading-[3rem]">
          Page introuvable
        </h1>
        <p className="max-w-3xl text-lead">
          La page que vous recherchez n’existe pas ou a été déplacée. Vous pouvez revenir à
          l’accueil ou découvrir nos expertises.
        </p>
        <div className="flex flex-wrap gap-4 pt-fi-16">
          <Button href="/" variant="primary">
            Retour à l’accueil
          </Button>
          <Button href="/expertises" variant="white">
            Nos expertises
          </Button>
        </div>
      </Reveal>
    </div>
  );
}
