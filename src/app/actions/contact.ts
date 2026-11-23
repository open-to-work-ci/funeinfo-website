"use server";

import { headers } from "next/headers";
import { isValidEmail } from "@/lib/email";
import {
  CONTACT_LIMITS,
  CONTACT_MESSAGES,
  CONTACT_SUBJECTS,
  type ContactState,
} from "@/lib/contact-types";

/** Champ piège (honeypot) : invisible pour les humains, rempli par les robots. */
const HONEYPOT_FIELD = "website";

/** Limitation de débit : 5 envois / 10 min / IP (mémoire du process, best effort). */
const WINDOW_MS = 10 * 60 * 1000;
const MAX_ATTEMPTS = 5;
const attempts = new Map<string, number[]>();

function isRateLimited(key: string): boolean {
  const now = Date.now();
  const recent = (attempts.get(key) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  attempts.set(key, recent);
  if (attempts.size > 5000) {
    for (const [k, v] of attempts) {
      if (v.every((t) => now - t >= WINDOW_MS)) attempts.delete(k);
    }
  }
  return recent.length > MAX_ATTEMPTS;
}

type Message = { name: string; email: string; subject: string; message: string; country: string };

/**
 * Transmet le message à l'équipe.
 * TODO: service d'envoi non choisi (Resend, Brevo, SMTP…) et destinataire à confirmer
 * (contact@fune.info ou e-mail de l'agence du pays choisi). Tant que rien n'est branché, la
 * fonction lève une erreur : le visiteur voit « service indisponible + contact direct » au lieu
 * d'un faux succès (le message ne serait pas transmis). Brancher le service ici puis retirer le `throw`.
 */
async function deliver(msg: Message): Promise<void> {
  void msg;
  throw new Error("Service d'envoi des messages de contact non configuré");
}

export async function sendContactMessage(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const get = (k: string) => String(formData.get(k) ?? "").trim();
  const values = { name: get("name"), email: get("email"), subject: get("subject"), message: get("message") };

  if (get(HONEYPOT_FIELD) !== "") {
    return { status: "success", message: CONTACT_MESSAGES.success, errors: {}, values: { name: "", email: "", subject: "", message: "" } };
  }

  const errors: ContactState["errors"] = {};
  if (!values.name || values.name.length > CONTACT_LIMITS.name) errors.name = CONTACT_MESSAGES.name;
  if (!isValidEmail(values.email)) errors.email = CONTACT_MESSAGES.email;
  if (!(CONTACT_SUBJECTS as readonly string[]).includes(values.subject)) errors.subject = CONTACT_MESSAGES.subject;
  if (values.message.length < 10 || values.message.length > CONTACT_LIMITS.message) errors.message = CONTACT_MESSAGES.message;
  if (formData.get("consent") !== "on") errors.consent = CONTACT_MESSAGES.consent;
  if (Object.keys(errors).length > 0) return { status: "error", message: "", errors, values };

  const h = await headers();
  const ip = h.get("x-forwarded-for")?.split(",")[0]?.trim() || h.get("x-real-ip") || "unknown";
  if (isRateLimited(ip)) return { status: "error", message: CONTACT_MESSAGES.rateLimited, errors: {}, values };

  try {
    await deliver({ ...values, country: get("pays") });
  } catch {
    return { status: "error", message: CONTACT_MESSAGES.unavailable, errors: {}, values };
  }
  return { status: "success", message: CONTACT_MESSAGES.success, errors: {}, values: { name: "", email: "", subject: "", message: "" } };
}
