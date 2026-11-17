"use client";

import { useInView, useReducedMotion } from "motion/react";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type PointerEvent,
  type ReactNode,
} from "react";

/** Infos affichées dans la bulle d'un pays du réseau (données préparées côté serveur). */
export type MapInfo = { name: string; base?: boolean; address?: string; phones?: string[] };

type Active = { id: string; x: number; y: number; below: boolean };

const CARD_HALF_WIDTH = 150;
const targetOf = (el: EventTarget | null) =>
  el instanceof Element ? el.closest<SVGElement>('[data-network="true"]') : null;

/**
 * Enveloppe interactive de la carte du réseau (le SVG arrive en `children`, rendu côté serveur) :
 * - bulle d'info au survol, au focus clavier (Tab) et au tap sur mobile ; Échap ou tap ailleurs la ferme ;
 * - nom du pays survolé affiché dans la carte (les autres noms restent masqués) ;
 * - apparition en vague : `data-wave` « pending » → « run » quand la carte entre dans l'écran
 *   (animations CSS dans globals.css, coupées avec prefers-reduced-motion).
 */
export default function MapInteractive({
  children,
  infos,
}: {
  children: ReactNode;
  infos: Record<string, MapInfo>;
}) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<Active | null>(null);
  const reduce = useReducedMotion();
  const inView = useInView(rootRef, { once: true, amount: 0.35 });

  useLayoutEffect(() => {
    const el = rootRef.current;
    if (el && !reduce) el.dataset.wave = "pending";
  }, [reduce]);
  useEffect(() => {
    const el = rootRef.current;
    if (el && !reduce && inView) el.dataset.wave = "run";
  }, [inView, reduce]);

  const show = useCallback((el: SVGElement, point?: { x: number; y: number }) => {
    const root = rootRef.current;
    const id = el.dataset.country;
    if (!root || !id) return;
    const rr = root.getBoundingClientRect();
    const r = el.getBoundingClientRect();
    const px = point ? point.x : r.left + r.width / 2;
    const py = point ? point.y : r.top;
    const x = Math.min(Math.max(px - rr.left, CARD_HALF_WIDTH), Math.max(rr.width - CARD_HALF_WIDTH, CARD_HALF_WIDTH));
    const y = py - rr.top;
    setActive((a) => (a?.id === id ? a : { id, x, y, below: y < 150 }));
  }, []);
  const hide = useCallback(() => setActive(null), []);

  // Nom du pays actif visible dans la carte (les autres restent masqués).
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    root.querySelectorAll("[data-label-for][data-visible]").forEach((e) => e.removeAttribute("data-visible"));
    if (active) root.querySelector(`[data-label-for="${active.id}"]`)?.setAttribute("data-visible", "true");
  }, [active]);

  // Échap et tap / clic hors de la carte ferment la bulle.
  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && hide();
    const onDown = (e: globalThis.PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) hide();
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onDown);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onDown);
    };
  }, [active, hide]);

  const onPointerMove = (e: PointerEvent) => {
    if (e.pointerType === "touch") return;
    const el = targetOf(e.target);
    if (el) show(el, { x: e.clientX, y: e.clientY });
    else hide();
  };
  const onPointerDown = (e: PointerEvent) => {
    if (e.pointerType !== "touch") return;
    const el = targetOf(e.target);
    if (!el) return hide();
    if (active?.id === el.dataset.country) hide();
    else show(el, { x: e.clientX, y: e.clientY });
  };

  const info = active ? infos[active.id] : undefined;

  return (
    <div
      ref={rootRef}
      data-map-interactive
      className="relative"
      onPointerMove={onPointerMove}
      onPointerDown={onPointerDown}
      onPointerLeave={hide}
      onFocus={(e) => {
        const el = targetOf(e.target);
        if (el) show(el);
      }}
      onBlur={hide}
    >
      {children}
      {active && info && (
        <div
          role="status"
          className="pointer-events-none absolute z-10 w-[min(18.75rem,92%)]"
          style={{
            left: active.x,
            top: active.y,
            transform: `translate(-50%, ${active.below ? "14px" : "calc(-100% - 14px)"})`,
          }}
        >
          <div className="animate-map-card rounded-md bg-surface p-4 shadow-xl ring-1 ring-black/5 motion-reduce:animate-none">
            <p className="flex items-center gap-2 font-poppins text-small font-bold text-brand">
              {info.name}
              {info.base && (
                <span className="rounded-pill bg-brand px-2 py-0.5 text-caption font-bold uppercase text-surface">
                  Siège
                </span>
              )}
            </p>
            {info.address ? (
              <>
                <p className="mt-1.5 font-inter text-meta text-navy">{info.address}</p>
                {info.phones && info.phones.length > 0 && (
                  <p className="mt-1 font-inter text-meta text-ink-muted">{info.phones.join(" / ")}</p>
                )}
              </>
            ) : (
              <p className="mt-1.5 font-inter text-meta text-ink-muted">Pays couvert par le réseau</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
