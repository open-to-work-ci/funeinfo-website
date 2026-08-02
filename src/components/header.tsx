"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  "Notre groupe",
  "Nos engagements",
  "Nos expertises",
  "Collectivités & partenaires",
  "Carrières",
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-brand text-white shadow-lg">
      <div className="container-wide">
        <div className="flex items-center justify-between p-3">
          <Link
            href="/"
            className="lg:hidden font-sans text-lg font-semibold"
            aria-label="Accueil"
          >
            <Image
              src="/logo-header.svg"
              alt="Logo"
              width={25}
              className="w-auto h-auto"
              height={25}
            />
          </Link>
          <nav className="flex-1 hidden lg:block font-inter text-[19px] leading-5">
            <ul className="flex justify-center gap-8 xl:gap-10 items-center">
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
              {navItems.map((item) => (
                <li key={item}>
                  <a href="#" className="uppercase whitespace-nowrap">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <button
            className="lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            aria-expanded={open}
          >
            {open ? <X className="size-7" /> : <Menu className="size-7" />}
          </button>
        </div>
        {open && (
          <nav className="lg:hidden pb-5 font-inter text-[17px] leading-5">
            <ul className="flex flex-col gap-4">
              {navItems.map((item) => (
                <li key={item}>
                  <a href="#" className="uppercase">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
