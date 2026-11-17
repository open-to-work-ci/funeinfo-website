"use server";

import { headers } from "next/headers";
import { isValidEmail } from "@/lib/email";
import { NEWSLETTER_MESSAGES, type NewsletterState } from "@/lib/newsletter-types";

/** Nom du champ piège (honeypot) : invisible pour les humains, rempli par les robots. */
const HONEYPOT_FIELD = "website";

/** Limitation de débit : 5 tentatives / 10 min / IP (mémoire du process, best effort). */
const WINDOW_MS = 10 * 60 * 1000;
const MAX_ATTEMPTS = 5;
const attempts = new Map<string, number[]>();

function isRateLimited(key: string): boolean {
  const now = Date.now();
  const recent = (attempts.get(key) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  attempts.set(key, recent);
  // Évite la croissance illimitée de la table.
  if (attempts.size > 5000) {
    for (const [k, v] of attempts) {
      if (v.every((t) => now - t >= WINDOW_MS)) attempts.delete(k);
    }
  }
  return recent.length > MAX_ATTEMPTS;
}

/**
 * Enregistre l'adresse auprès du service de newsletter.
 * TODO: service non choisi (Mailchimp, Brevo, Resend, base interne…). Branchement à faire ici ;
 * lever une erreur si le service est indisponible. En attendant, l'inscription est seulement journalisée.
 */
async function subscribeToProvider(email: string): Promise<void> {
  console.info("[newsletter] TODO provider non configuré, inscription non transmise :", email);
}

export async function subscribeToNewsletter(
  _prev: NewsletterState,
  formData: FormData,
): Promise<NewsletterState> {
  const email = String(formData.get("email") ?? "").trim();

  // Honeypot : on répond « succès » pour ne rien révéler au robot.
  if (String(formData.get(HONEYPOT_FIELD) ?? "") !== "") {
    return { status: "success", message: NEWSLETTER_MESSAGES.success, email: "" };
  }

  if (!isValidEmail(email)) {
    return { status: "error", message: NEWSLETTER_MESSAGES.invalid, email };
  }

  const h = await headers();
  const ip = h.get("x-forwarded-for")?.split(",")[0]?.trim() || h.get("x-real-ip") || "unknown";
  if (isRateLimited(ip)) {
    return { status: "error", message: NEWSLETTER_MESSAGES.rateLimited, email };
  }

  try {
    await subscribeToProvider(email);
  } catch {
    return { status: "error", message: NEWSLETTER_MESSAGES.unavailable, email };
  }
  return { status: "success", message: NEWSLETTER_MESSAGES.success, email: "" };
}
