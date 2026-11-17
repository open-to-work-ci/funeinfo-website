import NewsletterForm from "@/components/newsletter-form";
import { FOOTER } from "@/content/footer";

/** Bloc newsletter : titre + formulaire (client). */
export default function FooterNewsletter() {
  return (
    <div className="flex flex-col gap-[0.8rem]">
      <p className="-mt-[0.25rem] font-poppins text-footer-title font-medium">{FOOTER.newsletter.title}</p>
      <NewsletterForm />
    </div>
  );
}
