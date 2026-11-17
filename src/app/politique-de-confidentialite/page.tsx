import type { Metadata } from "next";
import LegalPage from "@/components/legal/legal-page";
import { LEGAL_PAGES } from "@/content/legal";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <LegalPage page={LEGAL_PAGES.privacy} />;
}
