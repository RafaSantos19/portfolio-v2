import { PageContainer } from "@/components/layout/page-container";
import type { PageIntroContent } from "@/content/pages/types";
import styles from "./editorial.module.css";

export function PageIntro({ eyebrow, title, titleMuted, description }: PageIntroContent) {
  return (
    <PageContainer className={styles.intro}>
      <header>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h1>{title} <span>{titleMuted}</span></h1>
        <p className={styles.lead}>{description}</p>
      </header>
    </PageContainer>
  );
}
