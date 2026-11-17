import Image from "next/image";
import FooterSocial from "./footer-social";

/** Bloc de gauche : logo blanc + réseaux sociaux. */
export default function FooterBrand() {
  return (
    <div className="flex flex-col items-start gap-fi-24 sm:flex-row sm:gap-[clamp(1.5rem,2.7vw,3.2rem)]">
      <Image
        src="/logo-header.svg"
        alt="Fune Info Africa"
        width={87}
        height={53}
        sizes="8rem"
        className="h-[4.6rem] w-auto shrink-0 lg:ml-[1.6rem]"
      />
      <FooterSocial />
    </div>
  );
}
