import styles from "./home-sections.module.css";

export function ProcessSignature({ title, steps }: { title: string; steps: string[] }) {
  return (
    <section className={styles.section} aria-labelledby="process-title">
      <h2 id="process-title" className={styles.eyebrow}>{title}</h2>
      <ol className={styles.process}>
        {steps.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, "0")}</span>{step}</li>)}
      </ol>
    </section>
  );
}
