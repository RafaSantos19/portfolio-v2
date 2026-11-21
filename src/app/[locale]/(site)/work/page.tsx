import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageIntro } from "@/components/shared/page-intro";
import { getCollectionContent } from "@/content/pages/collections";
import { getProjects, getProjectArchive } from "@/content/projects";
import { ProjectCollection } from "@/features/projects/components/project-collection";
import { ProjectArchive } from "@/features/projects/components/project-archive";
import { isLocale } from "@/i18n/config";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const content = getCollectionContent(locale, "work");
  return { title: `${content.title} ${content.titleMuted}`, description: content.description };
}

export default async function WorkPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return (
    <>
      <PageIntro {...getCollectionContent(locale, "work")} />
      <ProjectCollection projects={getProjects(locale)} locale={locale} />
      <ProjectArchive entries={getProjectArchive(locale)} locale={locale} />
    </>
  );
}
