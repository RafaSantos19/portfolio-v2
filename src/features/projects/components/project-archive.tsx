import { PageContainer } from "@/components/layout/page-container";
import { SectionHeading } from "@/components/shared/section-heading";
import type { Locale } from "@/i18n/config";
import { getMessages } from "@/i18n/messages";
import type { ProjectArchiveEntry } from "../types";
import styles from "./projects.module.css";

export function ProjectArchive({ entries, locale }: { entries: ProjectArchiveEntry[]; locale: Locale }) {
  const messages = getMessages(locale);
  return (
    <PageContainer className={styles.archive}>
      <section aria-labelledby="archive-title">
        <SectionHeading title={messages.ui.archive} id="archive-title" aside={messages.ui.archiveDescription} />
        <ul className={styles.archiveList}>
          {entries.map((entry) => <li key={entry.id}><span>{messages.ui.preview}</span><h3>{entry.title}</h3><p>{entry.description}</p></li>)}
        </ul>
      </section>
    </PageContainer>
  );
}
