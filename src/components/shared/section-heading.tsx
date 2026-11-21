import Link from "next/link";
import type { ReactNode } from "react";
import styles from "./editorial.module.css";

export function SectionHeading({ title, id, aside, link }: {
  title: string;
  id?: string;
  aside?: ReactNode;
  link?: { href: string; label: string };
}) {
  return (
    <div className={styles.sectionHeading}>
      <h2 id={id}>{title}</h2>
      {link ? <Link className={styles.textLink} href={link.href}>{link.label}</Link> : aside && <span className={styles.meta}>{aside}</span>}
    </div>
  );
}
