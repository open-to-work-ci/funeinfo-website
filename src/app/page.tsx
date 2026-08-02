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
    <div>
      <Header />
      <Hero />
      <StateContent />
      <Banners />
      <LastPost />
      <GroupeSlider />
      <Footer />
    </div>
  );
}

const Hero = () => {
  return (
    <div className=" mb-20">
      <div className="relative min-h-150 md:h-225 w-full">
        <Image
          src="/hero.jpg"
          alt="Logo"
          className="z-10"
          fill
          style={{ objectPosition: "0% 40%", objectFit: "cover" }}
        />
        <div className="w-full relative z-40 h-full flex flex-col px-5 sm:px-8 md:px-12 lg:px-30 py-10 justify-between gap-10 lg:gap-0 ">
          <div className="space-y-5">
            <Reveal delay={0.2}>
              <div>
                <Image
                  src="/logo-funinfo.svg"
                  alt="Logo"
                  width={280}
                  height={30}
                  className="w-52 md:w-auto"
                />
              </div>
            </Reveal>
            <Reveal delay={0.35}>
              <div className="tracking-[5%] font-inter text-white">
                <div className="text-[24px] md:text-[27px] font-medium leading-[87%]">
                  L’excellence funéraire au service de la dignité humaine.
                </div>
                <div className="text-[34px] sm:text-[46px] lg:text-[70px] leading-[105%] md:leading-[87%] font-bold">
                  un dernier hommage, <br /> un accompagnement sincère.
                </div>
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
                  <div className="flex font-bold relative p-1.5 gap-3 rounded-xl bg-[#652681] shadow-[inset_0_0_0_1px_#ffffff1a]">
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
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
        <div className="z-20  absolute top-0 h-full justify-between w-full shadow-[inset_0_300px_300px_-40px_rgba(0,0,0,0.5)]"></div>
      </div>
    </div>
  );
};
const Banners = () => {
  return (
    <div className="my-10 px-3 space-y-16">
      <Reveal direction="right">
        <div className="container-wide shadow-[40px_40px_0_-20px_#0B273A]">
          <div className=" h-72 relative p-8">
            <Image
              src="/banner-obseques.png"
              alt="Logo"
              fill
              className="z-10 brightness-75"
              style={{ objectPosition: "0% 12%", objectFit: "cover" }}
            />
            <div className="z-20 relative flex w-full h-full justify-between flex-col">
              <div className="">
                <div className="text-white text-[30px] font-bold leading-7.5 uppercase">
                  Organisation d'OBSEQUE
                </div>
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
          <div className="h-72 relative p-8">
            <Image
              src="/banner-rapatriement.png"
              alt="Logo"
              fill
              className="z-10"
              style={{ objectPosition: "center", objectFit: "cover" }}
            />
            <div className="z-20 relative flex w-full h-full justify-between flex-col">
              <div className="">
                <div className="text-white text-[30px] font-bold leading-7.5 uppercase">
                  RAPATRIEMENT
                </div>
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
          <div className="h-72 relative p-8">
            <Image
              src="/banner-rapatriement-2.png"
              alt="Logo"
              fill
              className="z-10 brightness-50"
              style={{ objectPosition: "center", objectFit: "cover" }}
            />
            <div className="z-20 relative flex w-full h-full justify-between flex-col">
              <div className="">
                <div className="text-white text-[30px] font-bold leading-7.5 uppercase">
                  RAPATRIEMENT
                </div>
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
    </div>
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
                alt="Logo"
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
                6 rue du général audran | 92400 Courbevoir
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
                alt="Logo"
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
    <div className="my-20 p-3">
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
              La qualité de notre travail se définit par la constance, l’intégrité
              et le respect de chaque famille que nous servons.
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
              Organisations d’Obsèquesde <br />
              de 2023 à Aujourd’hui
            </Stat>
            <Stat value="+100">
              Rapatriements <br />
              de corpsde 2023 à Aujourd’hui
            </Stat>
            <Stat value="+100">
              Articles funéraires dans <br />
              notre boutique en ligne
            </Stat>
          </div>
          </div>
        </Reveal>
      </div>
    </div>
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
