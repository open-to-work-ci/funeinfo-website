import VerticalSeparator from "@/components/vertical-separator";
import { Dot, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div>
      <Header />
      d
      <Groupe />
      <Footer />
    </div>
  );
}

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

// #071E2E
// #bd9d7b

const Header = () => {
  return (
    <header className="bg-brand text-white py-5">
      <div className="flex items-center gap-4 justify-between">
        <Link href="/" className="font-sans text-lg font-semibold">
          Groupe OGF
        </Link>
        <nav>
          <ul className="flex justify-between">
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
    </header>
  );
};

const Groupe = () => {
  const groups: {
    logo: string;
    keyword: string;
    name: string;
    description: string;
  }[] = [
    {
      logo: "Rectangle 2.png",
      keyword: "CONCEVOIR",
      name: "POFCI PFGA",
      description: "des réponses sur mesure pour tous",
    },
    {
      logo: "Rectangle 3.png",
      keyword: "engagé",
      name: "GLOBAL'YS",
      description: "au service d'une mussion d'intérêt général",
    },
    {
      logo: "Rectangle 4.png",
      keyword: "donner",
      name: "KANI",
      description: "du sens et développer les talents",
    },
    {
      logo: "Rectangle 4.png",
      keyword: "donner",
      name: "KANI",
      description: "du sens et développer les talents",
    },
  ];
  return (
    <div className="bg-brand py-14">
      <div className="container-wide ">
        <div className="flex gap-x-4 items-end mb-14">
          <div className="flex items-start">
            <Image
              src={"/min-logo-white.svg"}
              alt="Logo"
              width={50}
              height={10}
            />
          </div>
          <div className="text-white text-[25px] font-bold uppercase  leading-7.5">
            FUNE INFO AFRICA , C’est un ensemble de filiales , des franchises
          </div>
        </div>
        <div className="flex gap-x-3 px-16">
          {groups.map((group) => (
            <div key={group.name} className="space-y-6 ">
              <div className="">
                <Image
                  src={"/" + group.logo}
                  style={{ objectFit: "cover" }}
                  alt="Logo"
                  width={900}
                  height={10}
                />
              </div>
              <div className="uppercase ">
                <span className="text-[#941E81] text-[25px] font-bold  leading-[32.5px]">
                  {group.keyword}
                </span>{" "}
                <span className="text-white text-[20px] font-medium  leading-6.5">
                  {group.description}
                </span>
              </div>
              <div className="">
                <Link
                  href="#"
                  className="rounded-sm  px-4.75 py-4.25 border border-white text-white text-[11px] font-medium  leading-[16.5px]"
                >
                  EN SAVOIR PLUS
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};





const LastPost = () => {
  return <div className=''>
    
  </div>
}