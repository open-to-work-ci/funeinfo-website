"use client";

import { useActionState } from "react";
import { subscribeToNewsletter } from "@/app/actions/newsletter";
import Button from "@/components/ui/button";
import { FOOTER } from "@/content/footer";
import { isValidEmail } from "@/lib/email";
import {
  NEWSLETTER_INITIAL_STATE,
  NEWSLETTER_MESSAGES,
  type NewsletterState,
} from "@/lib/newsletter-types";

/** Validation côté client, puis délégation à la Server Action (qui revalide côté serveur). */
async function submit(prev: NewsletterState, formData: FormData): Promise<NewsletterState> {
  const email = String(formData.get("email") ?? "").trim();
  if (!isValidEmail(email)) {
    return { status: "error", message: NEWSLETTER_MESSAGES.invalid, email };
  }
  try {
    return await subscribeToNewsletter(prev, formData);
  } catch {
    return { status: "error", message: NEWSLETTER_MESSAGES.unavailable, email };
  }
}

export default function NewsletterForm() {
  const [state, action, pending] = useActionState(submit, NEWSLETTER_INITIAL_STATE);
  const { newsletter } = FOOTER;
  const invalid = state.status === "error";

  return (
    <form action={action} noValidate className="flex flex-col items-start gap-3">
      <label htmlFor="newsletter-email" className="sr-only">
        {newsletter.emailLabel}
      </label>
      <input
        id="newsletter-email"
        name="email"
        type="email"
        autoComplete="email"
        required
        defaultValue={state.email}
        aria-invalid={invalid}
        aria-describedby="newsletter-status"
        className="h-10 w-full max-w-[13.5rem] rounded-sm border border-brand bg-surface px-3 text-small text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-surface focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
      />
      {/* Champ piège anti-spam : masqué, hors tabulation, ignoré des lecteurs d'écran. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="newsletter-website">Ne pas remplir</label>
        <input id="newsletter-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <Button
        type="submit"
        variant="white"
        disabled={pending}
        aria-busy={pending}
        className="px-5 py-2.5 text-kicker normal-case! focus-visible:ring-offset-navy"
      >
        {pending ? newsletter.submitting : newsletter.submit}
      </Button>
      <p
        id="newsletter-status"
        aria-live="polite"
        className={`min-h-4 text-kicker ${invalid ? "text-danger-soft" : "text-surface"}`}
      >
        {state.message}
      </p>
    </form>
  );
}
