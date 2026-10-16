"use client";

import { useEffect } from "react";
import styles from "./switches.module.css";

export function ThemeSwitch({ label }: { label: string }) {
  useEffect(() => {
    const saved = window.localStorage.getItem("portfolio-theme");
    document.documentElement.dataset.theme = saved === "dark" ? "dark" : "light";
  }, []);

  function toggle() {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    window.localStorage.setItem("portfolio-theme", next);
  }

  return <button className={styles.switch} type="button" onClick={toggle} aria-label={label}>◐</button>;
}
