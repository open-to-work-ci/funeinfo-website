"use client";

import { useActionState, type ReactNode } from "react";
import Link from "next/link";
import { ChevronDown, Mail, MessageSquare, Send, User } from "lucide-react";
import { sendContactMessage } from "@/app/actions/contact";
import Button from "@/components/ui/button";
import { isValidEmail } from "@/lib/email";
import {
  CONTACT_INITIAL_STATE,
  CONTACT_LIMITS,
  CONTACT_MESSAGES,
  CONTACT_SUBJECTS,
  type ContactState,
} from "@/lib/contact-types";

/** Validation côté client, puis Server Action (qui revalide côté serveur). */
async function submit(prev: ContactState, formData: FormData): Promise<ContactState> {
  const get = (k: string) => String(formData.get(k) ?? "").trim();
  const values = { name: get("name"), email: get("email"), subject: get("subject"), message: get("message") };
  const errors: ContactState["errors"] = {};
  if (!values.name) errors.name = CONTACT_MESSAGES.name;
  if (!isValidEmail(values.email)) errors.email = CONTACT_MESSAGES.email;
  if (!values.subject) errors.subject = CONTACT_MESSAGES.subject;
  if (values.message.length < 10) errors.message = CONTACT_MESSAGES.message;
  if (formData.get("consent") !== "on") errors.consent = CONTACT_MESSAGES.consent;
  if (Object.keys(errors).length > 0) return { status: "error", message: "", errors, values };
  try {
    return await sendContactMessage(prev, formData);
  } catch {
    return { status: "error", message: CONTACT_MESSAGES.unavailable, errors: {}, values };
  }
}

const control =
  "w-full rounded-md border border-line-strong bg-surface py-3.5 pl-12 pr-4 font-inter text-body text-ink placeholder:text-ink-secondary " +
  "focus-visible:border-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 aria-invalid:border-brand";

function Field({
  id,
  label,
  icon,
  error,
  children,
}: {
  id: string;
  label: string;
  icon: ReactNode;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div className="relative">
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <span className="pointer-events-none absolute left-4 top-[1.05rem] text-brand" aria-hidden="true">
        {icon}
      </span>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-1 text-small text-brand">
          {error}
        </p>
      )}
    </div>
  );
}

/** Formulaire de contact : nom, e-mail, sujet, message, consentement + envoi. `country` = pays affiché (champ caché). */
export default function ContactForm({ country }: { country: string }) {
  const [state, action, pending] = useActionState(submit, CONTACT_INITIAL_STATE);
  const { errors, values } = state;
  const describe = (id: string, key: keyof ContactState["errors"]) => (errors[key] ? `${id}-error` : undefined);

  return (
    <form action={action} noValidate className="flex flex-col gap-4">
      <input type="hidden" name="pays" value={country} />
      <div className="grid gap-4 md:grid-cols-2">
        <Field id="contact-name" label="Nom" icon={<User className="size-5" />} error={errors.name}>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            maxLength={CONTACT_LIMITS.name}
            placeholder="Votre nom"
            defaultValue={values.name}
            aria-invalid={!!errors.name}
            aria-describedby={describe("contact-name", "name")}
            className={control}
          />
        </Field>
        <Field id="contact-email" label="E-mail" icon={<Mail className="size-5" />} error={errors.email}>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="Votre e-mail"
            defaultValue={values.email}
            aria-invalid={!!errors.email}
            aria-describedby={describe("contact-email", "email")}
            className={control}
          />
        </Field>
      </div>
      <Field id="contact-subject" label="Sujet" icon={<MessageSquare className="size-5" />} error={errors.subject}>
        <select
          id="contact-subject"
          name="subject"
          required
          defaultValue={values.subject}
          aria-invalid={!!errors.subject}
          aria-describedby={describe("contact-subject", "subject")}
          className={`${control} appearance-none pr-12`}
        >
          <option value="" disabled>
            Sujet de votre demande
          </option>
          {CONTACT_SUBJECTS.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        <ChevronDown className="pointer-events-none absolute right-4 top-[1.05rem] size-5 text-brand" aria-hidden="true" />
      </Field>
      <Field id="contact-message" label="Message" icon={<MessageSquare className="size-5" />} error={errors.message}>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={6}
          maxLength={CONTACT_LIMITS.message}
          placeholder="Votre message"
          defaultValue={values.message}
          aria-invalid={!!errors.message}
          aria-describedby={describe("contact-message", "message")}
          className={`${control} resize-y`}
        />
      </Field>
      {/* Champ piège anti-spam : masqué, hors tabulation, ignoré des lecteurs d'écran. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="contact-website">Ne pas remplir</label>
        <input id="contact-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <div>
        <label className="flex items-start gap-3 text-small leading-[1.5] text-ink">
          <input
            type="checkbox"
            name="consent"
            required
            aria-invalid={!!errors.consent}
            aria-describedby={describe("contact-consent", "consent")}
            className="mt-0.5 size-5 shrink-0 accent-[var(--color-brand)]"
          />
          <span>
            J’accepte que mes données soient utilisées pour répondre à ma demande, conformément à la{" "}
            <Link href="/politique-de-confidentialite" className="font-semibold text-brand underline underline-offset-2">
              politique de confidentialité
            </Link>
            .
          </span>
        </label>
        {errors.consent && (
          <p id="contact-consent-error" className="mt-1 text-small text-brand">
            {errors.consent}
          </p>
        )}
      </div>
      <div className="flex flex-col gap-3 md:flex-row md:items-center">
        <Button type="submit" disabled={pending} aria-busy={pending} className="gap-2 md:self-start">
          <Send className="size-4" aria-hidden="true" />
          {pending ? "Envoi en cours…" : "Envoyer le message"}
        </Button>
        <p
          aria-live="polite"
          className={`text-small ${state.status === "error" ? "text-brand" : "text-navy"}`}
        >
          {state.message}
        </p>
      </div>
    </form>
  );
}
