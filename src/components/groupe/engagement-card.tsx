/**
 * Carte d'engagement : titre (h3 Inter gras, magenta, capitales) + texte gris.
 * Usage : `<EngagementCard title="Accueil" text="…" />`
 */
export default function EngagementCard({ title, text }: { title: string; text: string }) {
  return (
    <article className="h-full rounded-md border border-line-soft bg-surface py-6 pl-6 pr-4 lg:pr-0 min-[1440px]:pr-2">
      <h3 className="font-inter text-caption font-bold uppercase text-brand">{title}</h3>
      <p className="mt-2 font-inter text-meta text-ink-muted">{text}</p>
    </article>
  );
}
