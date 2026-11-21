import { PageContainer } from "@/components/layout/page-container";
import { ButtonLink } from "@/components/ui/button-link";
import { siteConfig } from "@/config/site";
import { getHomeContent } from "@/content/pages/home";
import type { Locale } from "@/i18n/config";
import { getMessages } from "@/i18n/messages";
import { SocialLinks } from "./social-links";
import styles from "./contact-cta.module.css";

export function ContactCta({ locale }: { locale: Locale }) {
  const content = getHomeContent(locale);
  const messages = getMessages(locale);
  return (
    <PageContainer className={styles.container}>
      <section className={styles.contact} id="contact" aria-labelledby="contact-title">
        <h2 id="contact-title">{content.contactTitle} <span>{content.contactTitleMuted}</span></h2>
        <div><p>{content.contactDescription}</p>
          {siteConfig.social.email ? <ButtonLink href={`mailto:${siteConfig.social.email}`}>{messages.ui.contact}</ButtonLink> : <p className={styles.pending}>{messages.ui.contactPending}</p>}
          <SocialLinks label={messages.ui.socialNavigation} />
        </div>
      </section>
    </PageContainer>
  );
}
