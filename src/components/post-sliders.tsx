"use client";
import type { CSSProperties } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import Image from "next/image";
import Link from "next/link";
import { TitleSection } from "./groupe-slider";
import Reveal from "./reveal";

const groups = [
  {
    cover: "/post/post-1.webp",
    keyword: "CONCEVOIR",
    name: "POFCI PFGA",
    description: "des réponses sur mesure pour tous",
    title: "Rencontre FUNE INFO - OGF",
    date: "02/07/2026",
  },
  {
    cover: "/post/post-2.webp",
    keyword: "engagé",
    name: "GLOBAL'YS",
    description: "au service d'une mission d'intérêt général",
    title: "Comment bien préparer un rapatriement de corps",
    date: "02/07/2026",
  },
  {
    cover: "/post/post-3.webp",
    keyword: "donner",
    name: "KAcNI",
    description: "du sens et développer les talents",
    title: "Nos agences s’engagent pour un accompagnement de proximité",
    date: "02/07/2026",
  },
  {
    cover: "/post/post-4.webp",
    keyword: "donner",
    name: "KANI",
    description: "du sens et développer les talents",
    title: "Cinq conseils pour organiser des obsèques sereinement",
    date: "02/07/2026",
  },
];
const LastPost = () => {
  return (
    <div className=" py-14 px-3">
      <div className="container-wide">
        <Reveal>
          <TitleSection
            defaultype={true}
            first={{
              content: "DERNIÈRES ",
              className:
                "text-[#8A1E80] text-[25px] font-extrabold uppercase leading-7.5",
            }}
            last={{
              content: "PUBLICATIONS SOCIAL MEDIA",
              className:
                "text-[#C075AE] text-[25px] font-extrabold uppercase leading-7.5",
            }}
          />
        </Reveal>
        <div className="px-4 md:px-16">
          <Swiper
            modules={[FreeMode, Scrollbar]}
            slidesPerView="auto"
            spaceBetween={30}
            freeMode
            scrollbar={{ draggable: true }}
            style={
              {
                "--swiper-scrollbar-bg-color": "rgba(255, 255, 255, 0.3)",
                "--swiper-scrollbar-drag-bg-color": "#C075AE",
                "--swiper-scrollbar-size": "6px",
              } as CSSProperties
            }
          >
            {groups.map((group) => (
              <SwiperSlide key={group.name} className="w-auto! pb-6 h-auto!">
                <div className="space-y-3">
                  <Image
                    src={group.cover}
                    className="object-cover"
                    alt={group.title}
                    width={300}
                    height={100}
                  />
                  <div className="flex items-center">
                    <div className="text-red-700">ARTICLE</div>
                    <div className="text-[13px] leading-4.75">
                      - {group.date} -{" "}
                    </div>
                    <div className="text-[11px] leading-4">
                      5 min de lectures
                    </div>
                  </div>
                  <h3 className="text-[14px] text-ink font-medium leading-5.25">
                    {group.title}
                  </h3>
                  <Link href={"#"} className=" p-3 uppercase text-[14px] text-[#0B273A] font-medium leading-5.25">
                    Lire l’article
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default LastPost;
