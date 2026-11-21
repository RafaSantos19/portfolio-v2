import { notFound } from "next/navigation";
import { PageContainer } from "@/components/layout/page-container";
import { PreviewNotice } from "@/components/shared/preview-notice";
import { SectionHeading } from "@/components/shared/section-heading";
import { getHomeContent } from "@/content/pages/home";
import { getProjects } from "@/content/projects";
import { getArticles } from "@/content/writing";
import { ExperienceSection } from "@/features/experience/components/experience-section";
import { ProjectGrid } from "@/features/projects/components/project-grid";
import { ArticleList } from "@/features/writing/components/article-list";
import { isLocale, localePath } from "@/i18n/config";
import { getMessages } from "@/i18n/messages";
import { Hero } from "./_components/hero";
import { ProcessSignature } from "./_components/process-signature";
import { Capabilities } from "./_components/capabilities";
import styles from "./_components/home-sections.module.css";

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const content = getHomeContent(locale);
  const messages = getMessages(locale);
  const projects = getProjects(locale).slice(0, 3);
  const articles = getArticles(locale).slice(0, 2);
  return (
    <>
      <Hero content={content} locale={locale} />
      <ProcessSignature title={content.processTitle} description={content.processDescription} steps={content.process} />
      <section className={styles.work} aria-labelledby="work-title">
        <PageContainer>
          <SectionHeading title={content.workTitle} id="work-title" link={{ href: localePath(locale, "/work"), label: messages.ui.viewAll }} />
          {projects.some((project) => project.status === "draft") && <PreviewNotice>{messages.ui.previewNotice}</PreviewNotice>}
          <ProjectGrid projects={projects} locale={locale} />
        </PageContainer>
      </section>
      <ExperienceSection locale={locale} />
      <Capabilities title={content.capabilitiesTitle} items={content.capabilities} stackLabel={messages.ui.stack} />
      <PageContainer className={styles.section}>
        <section aria-labelledby="writing-title">
          <SectionHeading title={content.writingTitle} id="writing-title" link={{ href: localePath(locale, "/writing"), label: messages.ui.viewAll }} />
          <ArticleList articles={articles} locale={locale} />
        </section>
      </PageContainer>
    </>
  );
}
