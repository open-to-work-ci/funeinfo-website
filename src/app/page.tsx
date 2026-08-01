import { Dot } from "lucide-react";
import React from "react";

export default function page() {
  return (
    <div>
      <Footer />
    </div>
  );
}

const Footer = () => {
  return (
    <footer className="bg-[#071E2E] text-white p-4 flex flex-col gap-2">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, rerum
      dolores nulla velit sit dolorum! Alias mollitia cupiditate ad, officiis
      vel har um fugiat minima iusto? Velit commodi iusto in quasi!
      <div className="">
        <div className="text-center text-sm text-gray-500 sm:text-left">
          © Copyright 2025 - Groupe OGF
        </div>
        <div className="flex">
          Mentions légales
          <Dot className="text-[#bd9d7b]" />
          Accessibilité : non conforme
        </div>
      </div>
    </footer>
  );
};

// #071E2E
// #bd9d7b
