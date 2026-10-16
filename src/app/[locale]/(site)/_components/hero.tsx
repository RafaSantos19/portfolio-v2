import Link from "next/link";
import type { HomeContent } from "@/content/pages/home/types";
import type { Locale } from "@/i18n/config";
import { localePath } from "@/i18n/config";
import { siteConfig } from "@/config/site";
import styles from "./home-sections.module.css";

export function Hero({ content, locale, seeWork }: { content: HomeContent; locale: Locale; seeWork: string }) {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <p className={styles.eyebrow}>{content.introduction}</p>
      <h1 id="hero-title">{content.headline}</h1>
      <p className={styles.summary}>{content.summary}</p>
      <Link className={styles.button} href={localePath(locale, "/work")}>{seeWork} <span aria-hidden="true">↗</span></Link>
      <p className={styles.location}>{siteConfig.location}</p>
    </section>
  );
}
