/**
 * Pied de page global (maquette : ≈ 284 px de haut à 1905 px).
 * Desktop : logo + réseaux | newsletter | contact séparés par des filets
 * verticaux ; tablette / mobile : blocs empilés séparés par des filets
 * horizontaux. Apparition en cascade (`Stagger`).
 */
import { Stagger, StaggerItem } from "@/components/ui/motion";
import { FOOTER } from "@/content/footer";
import FooterBrand from "./footer-brand";
import FooterContact from "./footer-contact";
import FooterLegal from "./footer-legal";
import FooterNewsletter from "./footer-newsletter";

const blockRule = "border-t border-ink-secondary pt-fi-24 lg:border-t-0 lg:pt-0";
const verticalRule = "hidden w-px shrink-0 self-start bg-ink-secondary lg:mt-1 lg:block";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy font-poppins text-surface">
      <Stagger className="container-wide py-fi-40 lg:pb-[3.9rem] lg:pt-[3.9rem]" gap={0.12}>
        <div className="grid gap-fi-24 md:grid-cols-2 lg:flex lg:items-start lg:gap-x-12">
          <StaggerItem className="md:col-span-2 lg:col-span-1">
            <FooterBrand />
          </StaggerItem>
          <div aria-hidden="true" className={`${verticalRule} h-[3.9rem]`} />
          <StaggerItem className={blockRule}>
            <FooterNewsletter />
          </StaggerItem>
          <div aria-hidden="true" className={`${verticalRule} h-[6.4rem]`} />
          <StaggerItem className={`${blockRule} md:pl-fi-24 md:border-l lg:border-l-0 lg:pl-0`}>
            <FooterContact />
          </StaggerItem>
        </div>

        <StaggerItem>
          <div className="mt-fi-40 flex flex-col gap-3 text-footer-copy font-light md:flex-row md:flex-wrap md:items-center md:justify-between md:gap-x-8 lg:mt-[2rem] lg:pl-[0.45rem]">
            <p>
              © Copyright {year} - {FOOTER.copyright}
            </p>
            <FooterLegal />
          </div>
        </StaggerItem>
      </Stagger>
    </footer>
  );
}
