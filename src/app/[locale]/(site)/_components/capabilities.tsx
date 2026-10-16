import type { HomeContent } from "@/content/pages/home/types";
import styles from "./home-sections.module.css";

export function Capabilities({ title, items }: { title: string; items: HomeContent["capabilities"] }) {
  return (
    <section className={styles.section}>
      <div className={styles.sectionHeading}><h2>{title}</h2></div>
      <ol className={styles.capabilities}>
        {items.map((item, index) => (
          <li key={item.title}>
            <span className={styles.number}>{String(index + 1).padStart(2, "0")}</span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
