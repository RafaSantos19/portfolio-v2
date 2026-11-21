import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Script from "next/script";
import { siteConfig } from "@/config/site";
import { getHomeContent } from "@/content/pages/home";
import { isLocale } from "@/i18n/config";
import { appearanceScript } from "@/lib/appearance";
import { mono, sans } from "@/styles/fonts";
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
    <html lang={locale === "pt" ? "pt-BR" : "en"} className={`${sans.variable} ${mono.variable}`} data-theme="dark" data-palette="unix" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body>
        <Script id="portfolio-appearance" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: appearanceScript }} />
        {children}
      </body>
    </html>
  );
}
