import Link from "next/link";
import styles from "./home-sections.module.css";

export function ContentPreview({ title, empty, href, linkLabel }: {
  title: string;
  empty: string;
  href?: string;
  linkLabel?: string;
}) {
  return (
    <section className={styles.section}>
      <div className={styles.sectionHeading}>
        <h2>{title}</h2>
        {href && linkLabel && <Link href={href}>{linkLabel} <span aria-hidden="true">↗</span></Link>}
      </div>
      <p className={styles.empty}>{empty}</p>
    </section>
  );
}
