"use client";

import { usePathname } from "next/navigation";
import type { Locale } from "@/i18n/config";
import styles from "./switches.module.css";

export function LanguageSwitch({ locale, label }: { locale: Locale; label: string }) {
  const pathname = usePathname();
  const nextLocale = locale === "pt" ? "en" : "pt";
  const suffix = pathname.replace(/^\/(pt|en)(?=\/|$)/, "");

  // A document navigation initializes the new language and root scripts together.
  return <a className={styles.switch} href={`/${nextLocale}${suffix}`} hrefLang={nextLocale === "pt" ? "pt-BR" : "en"} lang={nextLocale} aria-label={label}>{nextLocale.toUpperCase()}</a>;
}
