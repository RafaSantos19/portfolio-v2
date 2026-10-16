"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/i18n/config";
import styles from "./switches.module.css";

export function LanguageSwitch({ locale, label }: { locale: Locale; label: string }) {
  const pathname = usePathname();
  const nextLocale = locale === "pt" ? "en" : "pt";
  const suffix = pathname.replace(/^\/(pt|en)(?=\/|$)/, "");

  return <Link className={styles.switch} href={`/${nextLocale}${suffix}`} aria-label={label}>{nextLocale.toUpperCase()}</Link>;
}
