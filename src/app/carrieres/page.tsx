import type { Metadata } from "next";
import Kicker from "@/components/ui/kicker";
import PageHero from "@/components/ui/page-hero";
import Section from "@/components/ui/section";
import { jobs } from "@/content/jobs";
import Link from "next/link";

export const metadata: Metadata = { title: "Carrières — Fune Info Africa" };

export default function Page() {
  return (
    <>
      <PageHero title="Carrières" />
      <Section>
        <Kicker wide>Offre - disponible</Kicker>
        <ul className="mt-fi-24 grid gap-fi-24 md:grid-cols-3">
          {jobs.map((j) => (
            <li key={j.slug}>
              <Link
                href={`/carrieres/${j.slug}`}
                className="block rounded-md bg-card p-fi-24 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy"
              >
                <Kicker>{j.department}</Kicker>
                <span className="font-poppins text-section font-bold">{j.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
