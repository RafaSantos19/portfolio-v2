"use client";

import styles from "./controls.module.css";

export type FilterOption = { id: string; label: string; count?: number };

export function FilterChips({ label, options, selected, onChange, controls }: {
  label: string;
  options: FilterOption[];
  selected: string;
  onChange: (id: string) => void;
  controls: string;
}) {
  return (
    <div className={styles.filters} role="group" aria-label={label}>
      {options.map((option) => (
        <button key={option.id} type="button" className={styles.chip}
          aria-pressed={selected === option.id} aria-controls={controls} onClick={() => onChange(option.id)}>
          {option.label}{option.count !== undefined && <span className={styles.count}> · {option.count.toString().padStart(2, "0")}</span>}
        </button>
      ))}
    </div>
  );
}
