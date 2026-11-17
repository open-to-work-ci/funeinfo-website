import { Dot } from "lucide-react";
import Image from "next/image";
import Reveal from "@/components/ui/reveal";
import VerticalSeparator from "@/components/vertical-separator";

/** Pied de page global (contenu provisoire, refonte dans l'issue footer). */
export default function Footer() {
  return (
    <footer className="bg-navy text-white bg-contain bg-center">
      <div className=" bg-no-repeat lg:bg-[url(/footer-fond.png)] container-wide space-y-14 py-10 md:py-14 ">
        <Reveal direction="up">
          <div className="flex flex-col items-center lg:flex-row gap-10 lg:gap-0">
            <div className="flex flex-col items-center lg:flex-row gap-8">
              <div>
                <Image
                  src="/logo-header.svg"
                  alt="Fune Info Africa"
                  width={9180}
                  height={50}
                  className=" w-auto h-auto"
                />
              </div>
              <div className="space-y-4 flex flex-col items-center lg:items-start">
                <div className="text-[16px] font-bold  leading-4 uppercase">
                  nous joindre
                </div>
                <div className="text-[13px] font-light  leading-3.25">
                  24h/24 et 7j/7, partout en Côte d’Ivoire
                </div>
                <a
                  href="tel:9930"
                  aria-label="Appeler le 9930, 24h/24 et 7j/7"
                  className="text-gold text-[13px] font-bold  leading-3.25"
                >
                  9930
                </a>
              </div>
            </div>
            <VerticalSeparator
              className="mx-12 hidden lg:block"
              color="var(--color-ink-secondary)"
            />
            <div className="space-y-4 flex flex-col items-center lg:items-start">
              <div className="text-[14px] font-medium  leading-3.5">
                Retrouvez nos actualités sur
              </div>
              <div className="">
                <Image
                  src="/logos/linkedin.svg"
                  alt="LinkedIn"
                  width={25}
                  className="w-auto h-auto"
                  height={25}
                />
              </div>
            </div>
            <VerticalSeparator
              className="mx-12 hidden lg:block"
              color="var(--color-ink-secondary)"
            />
            <div className="space-y-4.5 flex flex-col items-center lg:items-start">
              <div className="text-[18px] font-medium leading-6.75">
                Vous avez une question ?
              </div>
              <div className="text-[11px] font-medium leading-4 uppercase  underline-offset-8 underline-black underline-gold">
                CONTACTER-NOUS
              </div>
            </div>
          </div>
        </Reveal>
        <div className="w-full text-kicker font-light leading-4.5 flex flex-col  items-center  lg:flex-row lg:justify-between gap-10">
          <div className="">© Copyright 2025 - Fune Info Africa</div>
          <div className="flex ">
            Mentions légales
            <Dot className="text-gold" />
            Accessibilité : non conforme
          </div>
        </div>
      </div>
    </footer>
  );
}
