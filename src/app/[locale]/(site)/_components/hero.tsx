import { PageContainer } from "@/components/layout/page-container";
import { ButtonLink } from "@/components/ui/button-link";
import { MediaFrame } from "@/components/shared/media-frame";
import { SocialLinks } from "@/components/shared/social-links";
import type { HomeContent } from "@/content/pages/home/types";
import { localePath, type Locale } from "@/i18n/config";
import { getMessages } from "@/i18n/messages";
import { siteConfig } from "@/config/site";
import styles from "./home-sections.module.css";

export function Hero({ content, locale }: { content: HomeContent; locale: Locale }) {
  const messages = getMessages(locale);
  return (
    <PageContainer>
      <section className={styles.hero} aria-labelledby="hero-title">
        <div>
          <p className={styles.eyebrow}>{content.introduction}</p>
          <h1 id="hero-title">{content.headline} <span>{content.headlineMuted}</span></h1>
          <p className={styles.summary}>{content.summary}</p>
          <div className={styles.heroActions}>
            <ButtonLink href={localePath(locale, "/work")}>{messages.ui.seeWork}</ButtonLink>
            {siteConfig.resume && <ButtonLink variant="outline" href={siteConfig.resume}>{messages.ui.resume}</ButtonLink>}
          </div>
          <div className={styles.heroMeta}>
            <SocialLinks label={messages.ui.socialNavigation} />
            <p className={styles.availability}><span aria-hidden="true" />{messages.ui.available}</p>
            <p className={styles.location}>{messages.ui.location}</p>
          </div>
        </div>
        <div className={styles.portrait}>
          <MediaFrame portrait label={messages.ui.portraitPending} image={siteConfig.portrait} badge="</> full stack" />
          <p className={styles.caption}>23.55°S 46.63°W · São Paulo</p>
        </div>
      </section>
    </PageContainer>
  );
}
