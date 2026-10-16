import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SectionPage } from "@/components/shared/section-page";
import { getSectionContent } from "@/content/pages/sections";
import { isLocale } from "@/i18n/config";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return { title: getSectionContent(locale, "work").title };
}

export default async function WorkPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <SectionPage locale={locale} {...getSectionContent(locale, "work")} />;
}
