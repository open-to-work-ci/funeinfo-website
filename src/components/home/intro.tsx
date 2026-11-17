import { intro } from "@/content/home";
import Image from "next/image";
import Reveal from "../ui/reveal";

/** Bloc de présentation sur fond très pâle (maquette : 1296 px de large). */
export default function Intro() {
  return (
    <div className="container-wide py-fi-40 md:pt-fi-64 md:pb-fi-40">
      <Reveal className="mx-auto max-w-[1296px] rounded-3xl bg-intro px-fi-24 py-fi-24 md:px-fi-64 md:py-fi-40">
        <div className="flex items-center gap-3">
          <Image src="/icone.png" alt="" width={32} height={33} className="h-8 w-auto" />
          <h2 className="font-poppins text-base font-bold uppercase text-brand md:text-body">
            {intro.title}
          </h2>
        </div>
        <div className="mt-fi-16 space-y-fi-16 text-small md:text-base">
          {intro.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </Reveal>
    </div>
  );
}
