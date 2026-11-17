import Image from "next/image";
import NewsletterForm from "@/components/newsletter-form";
import Reveal from "@/components/ui/reveal";
import SocialIcon from "@/components/ui/social-icon";
import VerticalSeparator from "@/components/vertical-separator";
import { FOOTER, SOCIAL_LINKS } from "@/content/footer";

const LINE = "var(--color-ink-secondary)";

/** Pied de page global : logo + réseaux, newsletter, contact, copyright. */
export default function Footer() {
  const year = new Date().getFullYear();
  const { newsletter, contact } = FOOTER;

  return (
    <footer className="bg-navy font-poppins text-surface">
      <div className="container-wide py-fi-40 md:py-fi-64">
        <Reveal direction="up">
          <div className="grid grid-cols-1 gap-fi-24 md:grid-cols-[1fr_auto_1fr] md:gap-x-fi-40 md:gap-y-fi-40 lg:grid-cols-[auto_auto_auto_auto_auto] lg:justify-start lg:gap-x-12">
            {/* 1. Logo + réseaux sociaux */}
            <div className="flex flex-col items-start gap-4 sm:flex-row sm:gap-8 md:col-span-3 lg:col-span-1">
              <Image
                src="/logo-header.svg"
                alt="Fune Info Africa"
                width={87}
                height={53}
                className="h-[4.5rem] w-auto shrink-0"
              />
              <div className="flex flex-col gap-4">
                <p className="text-label font-medium">{FOOTER.socialTitle}</p>
                <ul className="flex items-center gap-2">
                  {SOCIAL_LINKS.map((s) => (
                    <li key={s.id}>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={s.label}
                        className="block rounded-sm transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-surface focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
                      >
                        <SocialIcon id={s.id} className="size-7" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <VerticalSeparator orientation="horizontal" color={LINE} className="md:hidden" />
            <VerticalSeparator color={LINE} className="hidden lg:block" />

            {/* 2. Newsletter */}
            <div className="flex flex-col gap-3">
              <p className="text-label font-medium">{newsletter.title}</p>
              <NewsletterForm />
            </div>

            <VerticalSeparator orientation="horizontal" color={LINE} className="md:hidden" />
            <VerticalSeparator color={LINE} className="hidden md:block" />

            {/* 3. Contact */}
            <div className="flex flex-col gap-2">
              <p className="text-body font-medium">{contact.title}</p>
              <p className="text-caption font-medium uppercase">{contact.cta}</p>
              <a
                href={`mailto:${contact.email}`}
                className="w-fit rounded-sm text-caption font-light underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-surface focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
              >
                {contact.email}
              </a>
            </div>
          </div>
        </Reveal>

        <p className="mt-fi-40 text-label font-light md:mt-fi-64">
          © Copyright {year} - {FOOTER.copyright}
        </p>
      </div>
    </footer>
  );
}
