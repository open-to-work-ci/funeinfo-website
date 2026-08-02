"use client";

import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import { clsx } from "clsx";

const groups = [
  {
    logo: "groupe-1.png",
    keyword: "CONCEVOIR",
    name: "POFCI PFGA",
    description: "des réponses sur mesure pour tous",
  },
  {
    logo: "groupe-2.png",
    keyword: "engagé",
    name: "GLOBAL'YS",
    description: "au service d'une mussion d'intérêt général",
  },
  {
    logo: "groupe-3.png",
    keyword: "donner",
    name: "KAcNI",
    description: "du sens et développer les talents",
  },
  {
    logo: "groupe-3.png",
    keyword: "donner",
    name: "KANI",
    description: "du sens et développer les talents",
  },
];

export default function GroupeSlider() {
  return (
    <div className="bg-brand relative py-14 overflow-hidden">
      <div className="container-wide">
        <TitleSection
          defaultype={false}
          first={{
            content: "FUNE INFO AFRICA, ",
            className: "text-white text-[25px] font-bold uppercase leading-7.5",
          }}
          last={{
            content: "C’est un ensemble de filiales , des franchises",
            className: "text-white text-[25px] font-bold uppercase leading-7.5",
          }}
        />
        <div className="px-16">
          <Swiper
            modules={[FreeMode, Scrollbar]}
            slidesPerView="auto"
            spaceBetween={20}
            freeMode
            scrollbar={{ draggable: true }}
            style={
              {
                "--swiper-scrollbar-bg-color": "rgba(255, 255, 255, 0.3)",
                "--swiper-scrollbar-drag-bg-color": "#ffffff",
                "--swiper-scrollbar-size": "6px",
              } as CSSProperties
            }
            className="px-16 pb-10"
          >
            {groups.map((group) => (
              <SwiperSlide key={group.name} className="w-100! pb-10 h-auto!">
                <div className="space-y-6">
                  <Image
                    src={"/" + group.logo}
                    className="object-cover"
                    alt="Logo"
                    width={900}
                    height={600}
                  />
                  <div className="uppercase">
                    <span className="text-[#941E81] text-[25px] font-bold leading-[32.5px]">
                      {group.keyword}
                    </span>{" "}
                    <span className="text-white text-[20px] font-medium leading-6.5">
                      {group.description}
                    </span>
                  </div>
                  <div className="my-4.25">
                    <Link
                      href="#"
                      className="rounded-sm px-4.75 py-4.25  border border-white text-white text-[11px] font-medium leading-[16.5px]"
                    >
                      EN SAVOIR PLUS
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="absolute top-0 lg:-right-1/2  overflow-hidden h-full   w-full  ">
        <Image
          src="/logo-funinfo-white.svg"
          alt="Logo"
          className="w"
          fill
          style={{ objectFit: "cover", objectPosition: "20% 20%", }}
        />
      </div>
    </div>
  );
}

interface TitleSectionProps {
  className?: string;
  defaultype: boolean;
  first: {
    content: string;
    className?: string;
  };
  last: {
    content: string;
    className?: string;
  };
}
export const TitleSection = ({
  className,
  defaultype = true,
  first,
  last,
}: TitleSectionProps) => {
  return (
    <div className={clsx(className, "flex gap-x-4 items-end mb-14 ")}>
      {defaultype ? (
        <Image src="/logo-funinfo-pink.svg" alt="Logo" width={50} height={10} />
      ) : (
        <Image src="/logo-funinfo-white.svg" alt="Logo" width={50} height={10} />
      )}
      <div className="">
        <span className={clsx(first.className)}>{first.content} </span>
        <span className={clsx(last.className)}>{last.content} </span>
      </div>
    </div>
  );
};
