import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { localePath } from "@/i18n/config";
import styles from "./section-page.module.css";

export function SectionPage({ locale, eyebrow, title, description, backLabel }: {
  locale: Locale;
  eyebrow: string;
  title: string;
  description: string;
  backLabel: string;
}) {
  return (
    <main id="main" className={styles.main}>
      <p className={styles.eyebrow}>{eyebrow}</p>
      <h1>{title}</h1>
      <p className={styles.description}>{description}</p>
      <Link href={localePath(locale)}>{backLabel} <span aria-hidden="true">↗</span></Link>
    </main>
  );
}
