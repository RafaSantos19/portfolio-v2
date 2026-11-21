import Link from "next/link";
import { MediaFrame } from "@/components/shared/media-frame";
import type { Locale } from "@/i18n/config";
import { getMessages } from "@/i18n/messages";
import type { Project } from "../types";
import styles from "./projects.module.css";

export function ProjectCard({ project, locale, featured = false }: { project: Project; locale: Locale; featured?: boolean }) {
  const messages = getMessages(locale);
  return (
    <article className={`${styles.card} ${featured ? styles.featured : ""}`}>
      <div className={styles.cardHeading}>
        <div>
          <p className={styles.category}>{messages.projectCategories[project.category]}</p>
          <h3>{project.status === "published" ? <Link href={project.href}>{project.title}</Link> : project.title}</h3>
        </div>
        <span className={styles.status}>{project.status === "published" ? messages.ui.caseStudy : messages.ui.preview}</span>
      </div>
      <MediaFrame label={messages.ui.projectImagePending} image={project.image} badge={project.stack.slice(0, 2).join(" · ")} />
      <div className={styles.details}>
        <p className={styles.description}>{project.description}</p>
        <dl className={styles.metadata}>
          <div><dt>{messages.ui.role}</dt><dd>{project.role}</dd></div>
          <div><dt>{messages.ui.context}</dt><dd>{messages.projectCategories[project.category]}</dd></div>
          <div><dt>{messages.ui.stackLabel}</dt><dd>{project.stack.join(" · ")}</dd></div>
        </dl>
      </div>
    </article>
  );
}
