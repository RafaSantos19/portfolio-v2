import type { Locale } from "@/i18n/config";
import type { Project } from "../types";
import { ProjectCard } from "./project-card";
import styles from "./projects.module.css";

export function ProjectGrid({ projects, locale }: { projects: Project[]; locale: Locale }) {
  return (
    <div className={styles.grid}>
      {projects.map((project) => <div key={project.id} className={project.featured ? styles.wide : undefined}>
        <ProjectCard project={project} locale={locale} featured={project.featured} />
      </div>)}
    </div>
  );
}
