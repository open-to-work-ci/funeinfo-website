import SocialIcon from "@/components/ui/social-icon";
import { FOOTER, SOCIAL_LINKS } from "@/content/footer";

/** Titre « Retrouvez nos actualités sur » + icônes des réseaux sociaux. */
export default function FooterSocial() {
  return (
    <div className="flex flex-col gap-[0.8rem]">
      <p className="font-poppins text-footer-title font-medium">{FOOTER.socialTitle}</p>
      <ul className="flex items-center">
        {SOCIAL_LINKS.map((s) => (
          <li key={s.id}>
            <a
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${s.label} (nouvel onglet)`}
              className="block rounded-sm transition-opacity hover:opacity-75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-surface focus-visible:ring-offset-2 focus-visible:ring-offset-navy motion-reduce:transition-none"
            >
              <SocialIcon id={s.id} className="size-[1.7rem]" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
