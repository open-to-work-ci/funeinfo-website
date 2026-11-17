"use client";

import { motion } from "motion/react";
import type { KeyboardEvent, Ref } from "react";

/**
 * Onglet pays (role="tab"). L'onglet actif porte un fond magenta partagé
 * (`layoutId`) qui glisse d'un onglet à l'autre ; rectangle très arrondi, Inter gras.
 * Usage : `<CountryTab id="congo" label="Congo" selected onSelect={…} onKeyDown={…} />`
 */
export default function CountryTab({
  id,
  label,
  selected,
  onSelect,
  onKeyDown,
  ref,
}: {
  id: string;
  label: string;
  selected: boolean;
  onSelect: () => void;
  onKeyDown: (e: KeyboardEvent<HTMLButtonElement>) => void;
  ref?: Ref<HTMLButtonElement>;
}) {
  return (
    <button
      ref={ref}
      id={`tab-${id}`}
      type="button"
      role="tab"
      aria-selected={selected}
      aria-controls={`panel-${id}`}
      tabIndex={selected ? 0 : -1}
      onClick={onSelect}
      onKeyDown={onKeyDown}
      className={
        "relative inline-flex items-center justify-center rounded-tab border border-brand px-5 py-4 font-inter text-label font-bold transition-colors duration-200 md:px-6 " +
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2 " +
        (selected ? "text-surface" : "text-brand hover:bg-brand/10")
      }
    >
      {selected && (
        <motion.span
          layoutId="country-tab-indicator"
          aria-hidden
          className="absolute -inset-px rounded-tab bg-brand"
          transition={{ type: "spring", stiffness: 420, damping: 36 }}
        />
      )}
      <span className="relative">{label}</span>
    </button>
  );
}
