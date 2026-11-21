import { SocialLinks } from "@/components/shared/social-links";
import { siteConfig } from "@/config/site";
import type { Locale } from "@/i18n/config";
import { getMessages } from "@/i18n/messages";
import { PageContainer } from "./page-container";
import { ThemeSwitch } from "./theme-switch";
import { PaletteSwitch } from "./palette-switch";
import { LanguageSwitch } from "./language-switch";
import styles from "./site-footer.module.css";

export function SiteFooter({ locale }: { locale: Locale }) {
  const messages = getMessages(locale);
  return (
    <footer className={styles.footer}>
      <PageContainer className={styles.inner}>
        <span>© {new Date().getFullYear()} {siteConfig.name}</span>
        <span>{messages.ui.location}</span>
        <SocialLinks label={messages.ui.socialNavigation} />
        <div className={styles.controls}>
          <ThemeSwitch label={messages.ui.switchTheme} darkLabel={messages.ui.darkTheme} lightLabel={messages.ui.lightTheme} />
          <PaletteSwitch label={messages.ui.switchPalette} options={messages.palettes} />
          <LanguageSwitch locale={locale} label={messages.ui.switchLanguage} />
        </div>
      </PageContainer>
    </footer>
  );
}
