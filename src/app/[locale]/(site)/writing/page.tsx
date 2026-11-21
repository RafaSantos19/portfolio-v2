import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageIntro } from "@/components/shared/page-intro";
import { getCollectionContent } from "@/content/pages/collections";
import { getArticles } from "@/content/writing";
import { ArticleCollection } from "@/features/writing/components/article-collection";
import { isLocale } from "@/i18n/config";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const content = getCollectionContent(locale, "writing");
  return { title: `${content.title} ${content.titleMuted}`, description: content.description };
}

export default async function WritingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <><PageIntro {...getCollectionContent(locale, "writing")} /><ArticleCollection articles={getArticles(locale)} locale={locale} /></>;
}
