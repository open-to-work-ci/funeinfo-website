import type { Metadata } from "next";
import ContactContent from "@/components/contact/contact-content";
import PageHero from "@/components/ui/page-hero";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez Fune Info Africa : formulaire, téléphone, e-mail et adresse de nos agences à Abidjan, Brazzaville, Paris et Conakry.",
  alternates: { canonical: "/contact" },
};

// TODO(copy) : textes du hero et du formulaire à relire avec la maquette (« Contact » : kicker, titre, description).
export default function Page() {
  return (
    <>
      <PageHero kicker="Contact" title="Échangeons ensemble">
        <p className="text-body">
          Une question, une urgence ou besoin d’information ? Écrivez-nous ou appelez l’agence la plus proche :
          nous vous répondons simplement, à votre rythme.
        </p>
      </PageHero>
      <div className="bg-canvas py-fi-40 md:py-fi-64">
        <div className="container-wide">
          <ContactContent />
        </div>
      </div>
    </>
  );
}
