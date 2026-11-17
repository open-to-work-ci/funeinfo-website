"use client";

import Button from "@/components/ui/button";
import Kicker from "@/components/ui/kicker";

/** Erreur globale (rendu) : message en français, nouvel essai ou retour à l'accueil. */
export default function GlobalError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div className="flex min-h-[60svh] items-center bg-navy py-fi-64 text-surface">
      <div className="container-wide space-y-4">
        <Kicker>Erreur</Kicker>
        <h1 className="font-poppins text-section font-bold md:text-page md:leading-[3rem]">
          Une erreur est survenue
        </h1>
        <p className="max-w-3xl text-lead">
          Nous n’avons pas pu afficher cette page. Réessayez ou revenez à l’accueil.
        </p>
        <div className="flex flex-wrap gap-4 pt-fi-16">
          <Button variant="primary" onClick={reset}>
            Réessayer
          </Button>
          <Button href="/" variant="white">
            Retour à l’accueil
          </Button>
        </div>
      </div>
    </div>
  );
}
