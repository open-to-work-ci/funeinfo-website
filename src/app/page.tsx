import GroupeSlider, { TitleSection } from "@/components/groupe-slider";
import Header from "@/components/header";
import LastPost from "@/components/post-sliders";
import Reveal from "@/components/reveal";
import VerticalSeparator from "@/components/vertical-separator";
import { Dot, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="">
      <Header />
      <Hero />
      <main className="relative">
        <StateContent />
        <Banners />
        <LastPost />
        <div
          className="absolute  top-24 lg:-right-1/2  overflow-hidden h-[1300px]   w-full  pointer-events-none"
          aria-hidden="true"
        >
          <Image
            src="/icone.png"
            className="opacity-10"
            alt=""
            aria-hidden="true"
            fill
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "20% -10%" }}
          />
        </div>
      </main>
      <GroupeSlider />
      <Footer />
    </div>
  );
}

const Hero = () => {
  return (
    <div>
      <div className="relative h-[clamp(30rem,calc(100svh_-_var(--spacing-header)),56.25rem)] w-full">
        <Image
          src="/hero.jpg"
          alt="Cérémonie d'obsèques organisée par Fune Info Africa"
          className="z-10"
          fill
          preload
          sizes="100vw"
          style={{ objectPosition: "0% 40%", objectFit: "cover" }}
        />
        <div className="w-full relative z-40 h-full flex flex-col px-5 sm:px-8 md:px-12 lg:px-30 py-6 sm:py-10 justify-between gap-6 sm:gap-10 lg:gap-0 ">
          <div className="space-y-5">
            <Reveal delay={0.2}>
              <div>
                <Image
                  src="/logo-funinfo.svg"
                  alt="Fune Info Africa"
                  width={280}
                  height={30}
                  className="w-[clamp(11rem,18vw,17.5rem)]"
                />
              </div>
            </Reveal>
            <Reveal delay={0.35}>
              <div className="tracking-[0.05em] font-inter text-white">
                <div className="text-[clamp(1.5rem,1.36rem_+_0.67vw,1.6875rem)] font-medium leading-[87%]">
                  L’excellence funéraire au service de la dignité humaine.
                </div>
                <h1 className="text-[clamp(2.125rem,1.1rem_+_5.11vw,4.375rem)] leading-[105%] md:leading-[87%] font-bold">
                  un dernier hommage, <br className="hidden sm:block" /> un accompagnement sincère.
                </h1>
              </div>
            </Reveal>
          </div>
          <div className="flex justify-end">
            <Reveal delay={0.6}>
              <div className="space-y-2">
                <div className="">
                  <div className="text-white font-sans leading-10 font-bold text-[22px] md:text-[28px]">
                    <div>Vous avez</div>
                    <div>une question ?</div>
                  </div>
                  <div className="text-white font-sans leading-5 text-xl md:text-2xl">
                    Contactez-nous
                  </div>
                </div>
                <div className="text-white flex">
                  {/* Contact me  */}
                  <a
                    href="tel:9933"
                    aria-label="Appeler le 9933, 24h/24 et 7j/7"
                    className="flex font-bold relative p-1.5 gap-3 rounded-xl bg-[#652681] shadow-[inset_0_0_0_1px_#ffffff1a]"
                  >
                    <div className="">
                      <div className="text-[32px] md:text-[42px] leading-10.5 pl-10">
                        9933
                      </div>
                    </div>
                    <div>
                      <VerticalSeparator className="h-full" color="#fff" />
                    </div>
                    <div className="text-[12px] flex flex-col justify-between h-full">
                      <div>24H /24</div>
                      <div>7J / 7</div>
                    </div>
                    <div className="border rounded-full absolute h-full top-0 -left-3 px-3.5 bg-[#652681] border-white flex items-center justify-between">
                      <span>
                        <Phone fill="currentColor" strokeWidth={0} />
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
        <div className="z-20 pointer-events-none absolute top-0 h-full w-full shadow-[inset_0_300px_300px_-40px_rgba(0,0,0,0.5)]"></div>
      </div>
    </div>
  );
};
const Banners = () => {
  return (
    <section className="my-10 px-3  space-y-16">
      <Reveal direction="right">
        <div className="container-wide shadow-[40px_40px_0_-20px_#0B273A]">
          <div className=" min-h-72 relative p-5 md:p-8">
            <Image
              src="/banner-obseques.webp"
              alt="Cérémonie d’obsèques organisée avec dignité par Fune Info Africa"
              fill
              sizes="(max-width: 1300px) 100vw, 1300px"
              className="z-10 brightness-75"
              style={{ objectPosition: "0% 12%", objectFit: "cover" }}
            />
            <div className="z-20 relative flex w-full h-full justify-between flex-col">
              <div className="">
                <h2 className="text-white text-[30px] font-bold leading-7.5 uppercase">
                  Organisation d’OBSEQUES
                </h2>
                <div className="text-white text-[20px] font-normal leading-6 uppercase">
                  organiser un dernier hommage <br /> Qui reflète la vie et les
                  valeurs <br />
                  de vos proches.
                </div>
              </div>
              <div className="text-end">
                <Link
                  href="/contact"
                  className=" bg-[#C075AE] uppercase p-4 rounded-md text-white text-[11px] font-medium leading-4 "
                >
                  En savoir plus
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal direction="left">
        <div className="container-wide shadow-[-40px_40px_0_-20px_#0B273A]">
          <div className="min-h-72 relative p-5 md:p-8">
            <Image
              src="/banner-rapatriement.webp"
              alt="Rapatriement de corps à l’international par Fune Info Africa"
              fill
              sizes="(max-width: 1300px) 100vw, 1300px"
              className="z-10"
              style={{ objectPosition: "center", objectFit: "cover" }}
            />
            <div className="z-20 relative flex w-full h-full justify-between flex-col">
              <div className="">
                <h2 className="text-white text-[30px] font-bold leading-7.5 uppercase">
                  RAPATRIEMENT
                </h2>
                <div className="text-white text-[20px] font-normal leading-6 uppercase">
                  Perdre un proche à l’étranger est déjà douloureux... <br />
                  ne laissez pas la logistique vous accabler.
                </div>
              </div>
              <div className="text-end">
                <Link
                  href="/contact"
                  className=" bg-[#C075AE] uppercase p-4 rounded-md text-white text-[11px] font-medium leading-4 "
                >
                  En savoir plus
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal direction="none">
        <div className="container-wide shadow-[-40px_40px_0_-20px_#0B273A]">
          <div className="min-h-72 relative p-5 md:p-8">
            <Image
              src="/banner-rapatriement-2.webp"
              alt="Rapatriement de corps à l’international par Fune Info Africa"
              fill
              sizes="(max-width: 1300px) 100vw, 1300px"
              className="z-10 brightness-50"
              style={{ objectPosition: "center", objectFit: "cover" }}
            />
            <div className="z-20 relative flex w-full h-full justify-between flex-col">
              <div className="">
                <h2 className="text-white text-[30px] font-bold leading-7.5 uppercase">
                  RAPATRIEMENT
                </h2>
                <div className="text-white text-[20px] font-normal leading-6 uppercase">
                  Perdre un proche à l’étranger est déjà douloureux... <br />
                  ne laissez pas la logistique vous accabler.
                </div>
              </div>
              <div className="text-end">
                <Link
                  href="/contact"
                  className=" bg-[#C075AE] uppercase p-4 rounded-md text-white text-[11px] font-medium leading-4 "
                >
                  En savoir plus
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#071E2E] text-white bg-contain bg-center">
      <div className=" bg-no-repeat lg:bg-[url(/footer-fond.png)] container-wide space-y-14 py-10 md:py-14 ">
        <Reveal direction="up">
          <div className="flex flex-col items-center lg:flex-row gap-10 lg:gap-0">
            <div className="flex flex-col items-center lg:flex-row gap-8">
              <div>
                <Image
                  src="/logo-footer.png"
                  alt="Fune Info Africa"
                  width={159}
                  height={50}
                  className=" w-auto h-auto"
                />
              </div>
              <div className="space-y-4 flex flex-col items-center lg:items-start">
                <div className="text-[16px] font-bold  leading-4 uppercase">
                  siège social
                </div>
                <div className="text-[13px] font-light  leading-3.25">
                  6 rue du général audran | 92400 Courbevoie
                </div>
                <div className="text-gold text-[13px] font-bold  leading-3.25">
                  01 55 26 54 00
                </div>
              </div>
            </div>
            <VerticalSeparator
              className="mx-12 hidden lg:block"
              color="#3e4e5a"
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
              color="#3e4e5a"
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
        <div className="w-full text-[12px] font-light leading-4.5 flex flex-col  items-center  lg:flex-row lg:justify-between gap-10">
          <div className="">© Copyright 2025 - Groupe OGF</div>
          <div className="flex ">
            Mentions légales
            <Dot className="text-gold" />
            Accessibilité : non conforme
          </div>
        </div>
      </div>
    </footer>
  );
};

const StateContent = () => {
  return (
    <section className="my-20 p-3">
      <div className="container-wide space-y-4">
        <Reveal>
          <TitleSection
            defaultype={true}
            first={{
              content: "FUNE INFO AFRICA ",
              className:
                "text-[#8A1E80] text-[25px] font-extrabold uppercase leading-7.5",
            }}
            last={{
              content: ", L’APRES DES MAINTENANT",
              className:
                "text-[#C075AE] text-[25px] font-extrabold uppercase leading-7.5",
            }}
          />
        </Reveal>
        <Reveal delay={0.15}>
          <div className="text-ink">
            <div className="font-medium leading-6">
              La qualité de notre travail se définit par la constance,
              l’intégrité et le respect de chaque famille que nous servons.
            </div>
            <div className="font-medium leading-6">
              Nous savons que la confiance est essentielle dans les moments
              difficiles, c’est pourquoi chaque interaction est menée avec
              professionnalisme, discrétion et une réelle bienveillance.
            </div>
            <div className="font-medium leading-6">
              Notre approche repose sur des principes clairs plutôt que sur des
              routines rigides.
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.25}>
          <div className="flex flex-col lg:space-y-0  space-y-6 items-center lg:flex-row justify-between gap-x-5">
            <div className="flex gap-x-5 justify-between items-center">
              <Stat value="+30">
                Agences <br /> en Cote d’Ivoire...
              </Stat>
              <Stat value="01">
                Agence <br />à Paris{" "}
              </Stat>
              <Stat value="01">
                Agence <br />à Brazzaville{" "}
              </Stat>
            </div>

            <VerticalSeparator
              orientation="vertical"
              className="hidden lg:block"
              color="#642681"
              dotted
            />
            <VerticalSeparator
              orientation="horizontal"
              stretch={false}
              className="lg:hidden w-40"
              color="#642681"
              dotted
            />
            <div className="flex flex-col lg:flex-row space-y-5 lg:space-y-0   flex-1 justify-between items-center">
              <Stat value="+40">Véhicules</Stat>
              <Stat value="+100">
                Organisations d’Obsèques <br />
                de 2023 à Aujourd’hui
              </Stat>
              <Stat value="+100">
                Rapatriements <br />
                de corps de 2023 à Aujourd’hui
              </Stat>
              <Stat value="+100">
                Articles funéraires dans <br />
                notre boutique en ligne
              </Stat>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

const Stat = ({
  value,
  children,
}: {
  children: React.ReactNode;
  value: string;
}) => {
  return (
    <div className="flex flex-col items-center">
      <div className="text-[70px] font-bold leading-17.5 text-[#C075AE]">
        {value}
      </div>
      <div className="text-[14px] text-center font-medium leading-3.5 text-[#8A1E80]">
        {children}
      </div>
    </div>
  );
};
