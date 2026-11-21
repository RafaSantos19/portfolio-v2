"use client";

import { useSyncExternalStore } from "react";
import { getDefaultPalette, getPalette, isPalette, setAppearance, subscribeAppearance } from "@/lib/appearance";
import styles from "./switches.module.css";

export function PaletteSwitch({ label, options }: {
  label: string;
  options: Record<"classic" | "editorial" | "unix", string>;
}) {
  const palette = useSyncExternalStore(subscribeAppearance, getPalette, getDefaultPalette);
  return (
    <label className={styles.selectWrap}>
      <span className={styles.srOnly}>{label}</span>
      <select className={styles.select} value={palette} onChange={(event) => {
        if (isPalette(event.target.value)) setAppearance("palette", event.target.value);
      }}>
        {Object.entries(options).map(([value, text]) => <option key={value} value={value}>{text}</option>)}
      </select>
      <span className={styles.chevron} aria-hidden="true">⌄</span>
    </label>
  );
}
