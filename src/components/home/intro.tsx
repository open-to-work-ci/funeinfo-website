import { intro } from "@/content/home";
import Image from "next/image";
import Reveal from "../ui/reveal";

/**
 * Bloc de présentation : fond quasi blanc (canvas) sur la page blanche, arrondi,
 * large de 1440 px au maximum. Le titre est précédé de l'icône plume.
 */
export default function Intro() {
  return (
    <section className="bg-surface px-4 pb-fi-24 pt-fi-24 md:px-6 md:pt-[2.6vw] md:pb-fi-24">
      <Reveal className="mx-auto max-w-[90rem] rounded-3xl bg-canvas px-fi-24 py-fi-24 md:px-fi-64 md:pt-3 md:pb-fi-40">
        <div className="flex items-center gap-3 md:gap-4">
          <Image
            src="/icone.webp"
            alt=""
            width={367}
            height={379}
            className="h-9 w-auto md:h-[2.6rem]"
          />
          <h2 className="font-sans text-intro-title font-extrabold uppercase text-plum">
            {intro.title}
            <span className="font-bold text-brand-soft"> {intro.titleTail}</span>
          </h2>
        </div>
        <div className="mt-fi-24 max-w-[75rem] space-y-[1.4em] text-intro-body leading-[1.26] text-ink">
          {intro.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
