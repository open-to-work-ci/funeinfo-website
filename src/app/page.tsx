import Button from "@/components/ui/button";
import PageHero from "@/components/ui/page-hero";
import Section from "@/components/ui/section";

export default function Home() {
  return (
    <>
      <PageHero kicker="Fune Info Africa" title="L’assistance funéraire qui soulage …">
        <p>Accompagner les familles, de l’annonce du décès jusqu’à l’inhumation.</p>
      </PageHero>
      <Section>
        <Button href="/groupe">Notre groupe</Button>
      </Section>
    </>
  );
}
