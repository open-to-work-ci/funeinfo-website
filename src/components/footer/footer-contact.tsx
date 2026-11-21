import Link from "next/link";
import { FOOTER } from "@/content/footer";

/** Bloc contact : question, appel à l'action et e-mail. */
export default function FooterContact() {
  const { contact } = FOOTER;
  return (
    <div className="flex flex-col gap-[0.1rem] font-poppins lg:pt-[0.2rem]">
      <p className="text-body font-medium leading-tight">{contact.title}</p>
      <Link
        href="/contact"
        className="w-fit rounded-sm text-caption font-medium uppercase underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-surface focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
      >
        {contact.cta}
      </Link>
      <a
        href={`mailto:${contact.email}`}
        className="mt-[0.2rem] w-fit rounded-sm text-caption font-light underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-surface focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
      >
        {contact.email}
      </a>
    </div>
  );
}
