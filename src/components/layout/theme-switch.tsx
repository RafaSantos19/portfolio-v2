"use client";

import { useSyncExternalStore } from "react";
import { getDefaultTheme, getTheme, setAppearance, subscribeAppearance } from "@/lib/appearance";
import styles from "./switches.module.css";

export function ThemeSwitch({ label, darkLabel, lightLabel }: { label: string; darkLabel: string; lightLabel: string }) {
  const theme = useSyncExternalStore(subscribeAppearance, getTheme, getDefaultTheme);
  return (
    <button className={styles.switch} type="button" onClick={() => setAppearance("theme", theme === "dark" ? "light" : "dark")}
      aria-label={label} aria-pressed={theme === "light"}>
      <span aria-hidden="true">◐</span>
      <span className={styles.darkLabel}>{darkLabel}</span><span className={styles.lightLabel}>{lightLabel}</span>
    </button>
  );
}
