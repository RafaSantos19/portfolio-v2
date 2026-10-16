import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { siteConfig } from "@/config/site";
import { getHomeContent } from "@/content/pages/home";
import { isLocale } from "@/i18n/config";
import "@/styles/globals.css";

export function generateStaticParams() {
  return siteConfig.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return {
    title: { default: siteConfig.name, template: `%s | ${siteConfig.name}` },
    description: getHomeContent(locale).summary,
  };
}

export default async function LocaleLayout({ children, params }: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <html lang={locale === "pt" ? "pt-BR" : "en"}>
      <body>{children}</body>
    </html>
  );
}
