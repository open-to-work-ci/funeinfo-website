import GroupeSlider, { TitleSection } from "@/components/groupe-slider";
import LastPost from "@/components/post-sliders";
import VerticalSeparator from "@/components/vertical-separator";
import { Dot, Menu, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div>
      <Header />
      <Hero />
      {/* <StateContent /> */}
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
      <div className="relative  h-225 w-full">
        <Image
          src="/DSC09764 (3).JPG"
          alt="Logo"
          className="z-10"
          fill
          style={{ objectPosition: "0% 40%", objectFit: "cover" }}
        />
        <div className="w-full bg-amber-0 relative z-40 h-full flex flex-col px-30 py-10 justify-between ">
          <div className="space-y-5">
            <div>
              <Image
                src="/logo-funinfo.svg"
                alt="Logo"
                width={280}
                height={30}
              />
            </div>
            <div className="tracking-[5%] font-inter text-white">
              <div className="text-[27px] font-medium leading-[87%]">
                L’excellence funéraire au service de la dignité humaine.
              </div>
              <div className="text-[70px]  leading-[87%]  font-bold   ">
                un dernier hommage, <br /> un accompagnement sincère.
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="space-y-2">
              <div className="">
                <div className="text-white font-sans leading-10 font-bold text-[28px]">
                  <div>Vous avez</div>
                  <div>une question ?</div>
                </div>
                <div className="text-white font-sans leading-5 text-2xl">
                  Contactez-nous
                </div>
              </div>
              <div className="text-white flex  ">
                {/* Contact me  */}
                <div className="flex font-bold relative p-1.5 gap-3 rounded-xl bg-[#652681] shadow-[inset_0_0_0_1px_#ffffff1a]">
                  <div className="">
                    <div className="text-[42px] leading-10.5  pl-10">9933</div>
                  </div>
                  <div>
                    <VerticalSeparator className="h-full" color="#fff" />
                  </div>
                  <div className="text-[12px] flex flex-col   justify-between h-full  ">
                    <div>24H /24</div>
                    <div>7J / 7</div>
                  </div>
                  <div className="border rounded-full absolute h-full top-0 -left-3 px-3.5 bg-[#652681]   border-white flex items-center justify-between">
                    <span>
                      <Phone fill="currentColor" strokeWidth={0} />
                    </span>
                  </div>
                </div>
                {/* Icons */}
              </div>
            </div>
          </div>
        </div>
        <div className="z-20  absolute top-0 h-full justify-between w-full shadow-[inset_0_300px_300px_-40px_rgba(0,0,0,0.5)]"></div>
      </div>
    </div>
  );
};
const Banners = () => {
  return (
    <div className="my-10 space-y-16">
      <div className="container-wide shadow-[40px_40px_0_-20px_#0B273A]">
        <div className=" h-72 relative p-8">
          <Image
            src="/DSC07033.png"
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

      <div className="container-wide shadow-[-40px_40px_0_-20px_#0B273A]">
        <div className="h-72 relative p-8">
          <Image
            src="/D535030.png"
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
      <div className="container-wide shadow-[-40px_40px_0_-20px_#0B273A]">
        <div className="h-72 relative p-8">
          <Image
            src="/FORD 1.png"
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
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#071E2E] text-white bg-contain  bg-center">
      <div
        style={{ backgroundImage: "url(/footer-fond.09e10783.png)" }}
        className=" bg-no-repeat container-wide space-y-14 py-14 "
      >
        <div className="flex">
          <div className="flex gap-8">
            <div>
              <Image
                src="/logo-footer.png"
                alt="Logo"
                width={159}
                height={50}
                className="w-auto h-auto"
              />
            </div>
            <div className="space-y-4">
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
          <VerticalSeparator className="mx-12" color="#3e4e5a" />
          <div className="space-y-4">
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
          <VerticalSeparator className="mx-12" color="#3e4e5a" />
          <div className="space-y-4.5">
            <div className="text-[18px] font-medium leading-6.75">
              Vous avez une question ?
            </div>
            <div className="text-[11px] font-medium leading-4 uppercase  underline-offset-8 underline-black underline-gold">
              CONTACTER-NOUS
            </div>
          </div>
        </div>
        <div className="w-full text-[12px] font-light leading-4.5 flex justify-between">
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

const Header = () => {
  return (
    <header className="bg-brand text-white py-5">
      <div className="container-wide">
        <div className="">
          <nav className="font-inter  text-[19px] leading-5">
            <ul className="flex  justify-center gap-10 items-center">
              <li>
                <Link href="/" className="font-sans text-lg font-semibold">
                  <Image
                    src="/logo-header.svg"
                    alt="Logo"
                    width={25}
                    className="w-auto h-auto"
                    height={25}
                  />
                </Link>
              </li>
              {[
                "Notre groupe",
                "Nos engagements",
                "Nos expertises",
                "Collectivités & partenaires",
                "Carrières",
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="uppercase ">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <button className="md:hidden" aria-label="Menu">
            <Menu className="size-6" />
          </button>
        </div>
      </div>
    </header>
  );
};
/* a.expertise */


const StateContent = () => {
  return (
    <div className="my-20">
      <div className="container-wide">
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
        <div className="flex justify-between">
          <Stat value="+30">
            Agences <br /> en Cote d’Ivoire...
          </Stat>
          <Stat value="01">
            Agence <br />à Paris{" "}
          </Stat>
          <Stat value="01">
            Agence <br />à Brazzaville{" "}
          </Stat>
          <VerticalSeparator color="#642681" dotted />
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
