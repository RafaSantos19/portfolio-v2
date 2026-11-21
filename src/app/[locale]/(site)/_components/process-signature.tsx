import { PageContainer } from "@/components/layout/page-container";
import type { HomeContent } from "@/content/pages/home/types";
import styles from "./home-sections.module.css";

export function ProcessSignature({ title, description, steps }: { title: string; description: string; steps: HomeContent["process"] }) {
  return (
    <PageContainer>
      <section className={styles.processSection} aria-labelledby="process-title">
        <div><h2 id="process-title" className={styles.eyebrow}>{title}</h2><p className={styles.processDescription}>{description}</p></div>
        <ol className={styles.process} tabIndex={0} aria-label={title}>
          {steps.map((step) => <li key={step.title}><span className={styles.dot} aria-hidden="true" /><h3>{step.title}</h3><p>{step.detail}</p></li>)}
        </ol>
      </section>
    </PageContainer>
  );
}
