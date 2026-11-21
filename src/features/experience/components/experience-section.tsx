import { getAboutContent } from "@/content/pages/about";
import { PageContainer } from "@/components/layout/page-container";
import { PreviewNotice } from "@/components/shared/preview-notice";
import { SectionHeading } from "@/components/shared/section-heading";
import type { Locale } from "@/i18n/config";
import { ExperienceTabs } from "./experience-tabs";
import styles from "./experience.module.css";

export function ExperienceSection({ locale }: { locale: Locale }) {
  const content = getAboutContent(locale);
  return (
    <PageContainer className={styles.section}>
      <section aria-labelledby="experience-title">
        <SectionHeading title={content.experienceTitle} id="experience-title" />
        <ExperienceTabs label={content.experienceTitle} tabs={[
          { id: "work", label: content.workLabel, content: <>
            <PreviewNotice>{content.experienceNote}</PreviewNotice>
            <ol className={styles.list}>{content.experience.map((entry) => <li key={entry.id}>
              <span className={styles.period}>{entry.period}</span>
              <div><h3>{entry.organization}</h3><p>{entry.role}</p></div>
              <p>{entry.description}</p>
            </li>)}</ol>
          </> },
          { id: "education", label: content.educationLabel, content: <p className={styles.empty}>{content.educationEmpty}</p> },
        ]} />
      </section>
    </PageContainer>
  );
}
