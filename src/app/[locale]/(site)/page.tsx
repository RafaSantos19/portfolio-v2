import { notFound } from "next/navigation";
import { siteConfig } from "@/config/site";
import { getHomeContent } from "@/content/pages/home";
import { isLocale, localePath } from "@/i18n/config";
import { getMessages } from "@/i18n/messages";
import { Hero } from "./_components/hero";
import { ProcessSignature } from "./_components/process-signature";
import { ContentPreview } from "./_components/content-preview";
import { Capabilities } from "./_components/capabilities";
import { ContactCta } from "./_components/contact-cta";
import styles from "./page.module.css";

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const content = getHomeContent(locale);
  const messages = getMessages(locale);

  return (
    <main id="main" className={styles.main}>
      <Hero content={content} locale={locale} seeWork={messages.ui.seeWork} />
      <ProcessSignature title={content.processTitle} steps={content.process} />
      <ContentPreview title={content.workTitle} empty={content.workEmpty} href={localePath(locale, "/work")} linkLabel={messages.ui.viewAll} />
      <ContentPreview title={content.experienceTitle} empty={content.experienceEmpty} />
      <Capabilities title={content.capabilitiesTitle} items={content.capabilities} />
      <ContentPreview title={content.writingTitle} empty={content.writingEmpty} href={localePath(locale, "/writing")} linkLabel={messages.ui.viewAll} />
      <ContactCta title={content.contactTitle} description={content.contactDescription} email={siteConfig.social.email} label={messages.ui.contact} />
    </main>
  );
}
