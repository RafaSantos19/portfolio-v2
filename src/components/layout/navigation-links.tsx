"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/config/navigation";
import { localePath, type Locale } from "@/i18n/config";
import styles from "./site-header.module.css";

export function NavigationLinks({ locale, label, labels }: {
  locale: Locale;
  label: string;
  labels: Record<(typeof navigation)[number]["id"], string>;
}) {
  const pathname = usePathname();
  return (
    <nav className={styles.nav} aria-label={label}>
      {navigation.map(({ id, href }) => {
        const path = localePath(locale, href);
        const active = href ? pathname === path || pathname.startsWith(`${path}/`) : pathname === path;
        return <Link key={id} href={path} aria-current={active ? "page" : undefined}>{labels[id]}</Link>;
      })}
    </nav>
  );
}
