"use client";

import { useState } from "react";
import { PageContainer } from "@/components/layout/page-container";
import { PreviewNotice } from "@/components/shared/preview-notice";
import { FilterChips } from "@/components/ui/filter-chips";
import type { Locale } from "@/i18n/config";
import { getMessages } from "@/i18n/messages";
import { projectCategories, type Project } from "../types";
import { ProjectGrid } from "./project-grid";
import styles from "./projects.module.css";

export function ProjectCollection({ projects, locale }: { projects: Project[]; locale: Locale }) {
  const [selected, setSelected] = useState("all");
  const messages = getMessages(locale);
  const filtered = projects.filter((project) => selected === "all" || project.category === selected);
  const options = [
    { id: "all", label: messages.ui.all, count: projects.length },
    ...projectCategories.map((id) => ({ id, label: messages.projectCategories[id], count: projects.filter((project) => project.category === id).length })),
  ];
  return (
    <>
      <PageContainer className={styles.filters}>
        <FilterChips label={messages.ui.filterProjects} options={options} selected={selected} onChange={setSelected} controls="project-results" />
      </PageContainer>
      <section className={styles.band} aria-label={messages.navigation.work}>
        <PageContainer>
          {projects.some((project) => project.status === "draft") && <PreviewNotice>{messages.ui.previewNotice}</PreviewNotice>}
          <p className={styles.srOnly} role="status">{filtered.length} {messages.ui.resultCount}</p>
          <div id="project-results">
            {filtered.length ? <ProjectGrid projects={filtered} locale={locale} /> : <p>{messages.ui.noResults}</p>}
          </div>
        </PageContainer>
      </section>
    </>
  );
}
