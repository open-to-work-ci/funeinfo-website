import { tagline } from "@/content/home";
import Reveal from "../ui/reveal";

/** Phrase d'accroche sous la carte : titre à gauche, texte à droite (empilés en mobile). */
export default function Tagline() {
  return (
    <section className="bg-surface px-4 pb-fi-40 pt-fi-24 md:px-6 md:pb-[4.2vw] md:pt-fi-40">
      <Reveal className="mx-auto grid max-w-[75rem] items-center gap-fi-24 lg:grid-cols-[1.55fr_1fr] lg:gap-fi-40">
        <p className="whitespace-pre-line font-poppins text-tagline font-semibold leading-[1.25] text-ink">
          {tagline.title}
        </p>
        <p className="max-w-[30rem] font-poppins text-tagline-body leading-[1.35] text-ink">{tagline.text}</p>
      </Reveal>
    </section>
  );
}
