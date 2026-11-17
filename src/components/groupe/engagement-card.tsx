/**
 * Carte d'engagement : titre (h3, style kicker magenta) + texte.
 * Usage : `<EngagementCard title="Accueil" text="…" />`
 */
export default function EngagementCard({ title, text }: { title: string; text: string }) {
  return (
    <article className="h-full rounded-md border border-line bg-canvas p-fi-24">
      <h3 className="font-poppins text-kicker font-bold uppercase text-brand">{title}</h3>
      <p className="mt-3 text-small text-ink-secondary">{text}</p>
    </article>
  );
}
