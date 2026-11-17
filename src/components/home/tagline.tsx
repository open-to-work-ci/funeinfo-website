import { tagline } from "@/content/home";
import Reveal from "../ui/reveal";

/** Phrase d'accroche sous la carte. */
export default function Tagline() {
  return (
    <div className="container-wide pb-fi-40 md:pb-fi-64">
      <Reveal className="mx-auto grid max-w-[1100px] items-center gap-fi-24 md:grid-cols-2 md:gap-fi-64">
        <p className="font-poppins text-2xl font-bold md:text-3xl md:leading-10">{tagline.title}</p>
        <p>{tagline.text}</p>
      </Reveal>
    </div>
  );
}
