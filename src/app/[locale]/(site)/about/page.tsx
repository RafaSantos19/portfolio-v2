import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageContainer } from "@/components/layout/page-container";
import { MediaFrame } from "@/components/shared/media-frame";
import { PrincipleList } from "@/components/shared/principle-list";
import { SectionHeading } from "@/components/shared/section-heading";
import { siteConfig } from "@/config/site";
import { getAboutContent } from "@/content/pages/about";
import { ExperienceSection } from "@/features/experience/components/experience-section";
import { isLocale } from "@/i18n/config";
import { getMessages } from "@/i18n/messages";
import styles from "./about.module.css";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const content = getAboutContent(locale);
  return { title: content.eyebrow, description: content.paragraphs[0] };
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const content = getAboutContent(locale);
  const messages = getMessages(locale);
  return (
    <>
      <PageContainer>
        <header className={styles.hero}>
          <div className={styles.portrait}><MediaFrame portrait label={messages.ui.portraitPending} image={siteConfig.portrait} /><p className={styles.eyebrow}>{messages.ui.location}</p></div>
          <div><p className={styles.eyebrow}>{content.eyebrow}</p><h1>{content.title} <span>{content.titleMuted}</span></h1>
            {content.paragraphs.map((paragraph) => <p key={paragraph} className={styles.paragraph}>{paragraph}</p>)}
          </div>
        </header>
      </PageContainer>
      <PageContainer className={styles.section}>
        <section aria-labelledby="principles-title"><SectionHeading title={content.principlesTitle} id="principles-title" /><PrincipleList items={content.principles} /></section>
      </PageContainer>
      <ExperienceSection locale={locale} />
      <PageContainer className={styles.section}>
        <section className={styles.now} aria-labelledby="now-title">
          <h2 id="now-title">{content.nowTitle}</h2>
          <dl>{content.now.map((item) => <div key={item.label}><dt>{item.label}</dt><dd>{item.value}</dd></div>)}</dl>
        </section>
      </PageContainer>
    </>
  );
}
