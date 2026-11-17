import Image from "next/image";
import Button from "@/components/ui/button";
import { HR_EMAIL, mailtoHr } from "@/content/jobs";

/** Bloc « REJOIGNEZ-NOUS » : photo de groupe + panneau violet qui s'étend jusqu'au bord droit. */
export default function JoinUsBanner() {
  return (
    <section
      aria-labelledby="join-us-title"
      className="flex flex-col md:flex-row md:items-center md:pl-[max(1.5rem,calc((100%-1320px)/2+1.5rem))]"
    >
      {/* TODO: photo de groupe d'origine à fournir : recadrée provisoirement depuis la maquette. */}
      <Image
        src="/carrieres-rejoignez-nous.jpg"
        alt="Photo de groupe des équipes Fune Info Africa dans le jardin du siège"
        width={549}
        height={328}
        sizes="(min-width: 768px) 549px, 100vw"
        className="h-auto w-full md:w-[34%] md:max-w-[34.3rem] md:shrink-0"
      />
      <div className="flex flex-1 flex-col items-start gap-fi-16 bg-join px-fi-16 py-fi-40 text-surface md:my-fi-16 md:self-stretch md:justify-center md:px-fi-24 md:py-fi-24 lg:px-fi-40">
        <h2
          id="join-us-title"
          className="font-poppins text-section font-bold uppercase tracking-wide md:text-page lg:text-[2.75rem] lg:leading-[3.25rem]"
        >
          Rejoignez-nous
        </h2>
        <p className="font-sans text-body font-medium">Offres d’emplois</p>
        <Button href={mailtoHr("Candidature spontanée")} variant="white" className="mt-fi-16 !normal-case">
          {HR_EMAIL}
        </Button>
      </div>
    </section>
  );
}
