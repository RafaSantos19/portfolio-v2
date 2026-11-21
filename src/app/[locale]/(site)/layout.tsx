import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ContactCta } from "@/components/shared/contact-cta";
import { isLocale } from "@/i18n/config";

export default async function SiteLayout({ children, params }: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <>
      <SiteHeader locale={locale} />
      <main id="main" tabIndex={-1}>
        {children}
        <ContactCta locale={locale} />
      </main>
      <SiteFooter locale={locale} />
    </>
  );
}
