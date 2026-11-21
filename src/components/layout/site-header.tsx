import Link from "next/link";
import { ButtonLink } from "@/components/ui/button-link";
import { siteConfig } from "@/config/site";
import { localePath, type Locale } from "@/i18n/config";
import { getMessages } from "@/i18n/messages";
import { LanguageSwitch } from "./language-switch";
import { ThemeSwitch } from "./theme-switch";
import { PaletteSwitch } from "./palette-switch";
import { NavigationLinks } from "./navigation-links";
import styles from "./site-header.module.css";

export function SiteHeader({ locale }: { locale: Locale }) {
  const messages = getMessages(locale);
  return (
    <>
      <a className={styles.skip} href="#main">{messages.ui.skipToContent}</a>
      <header className={styles.header}>
        <div className={styles.inner}>
          <Link className={styles.brand} href={localePath(locale)} aria-label={siteConfig.name}>Rafael<span>.</span></Link>
          <NavigationLinks locale={locale} label={messages.ui.mainNavigation} labels={messages.navigation} />
          <div className={styles.actions}>
            <div className={styles.appearance}>
              <ThemeSwitch label={messages.ui.switchTheme} darkLabel={messages.ui.darkTheme} lightLabel={messages.ui.lightTheme} />
              <div className={styles.palette}><PaletteSwitch label={messages.ui.switchPalette} options={messages.palettes} /></div>
              <LanguageSwitch locale={locale} label={messages.ui.switchLanguage} />
            </div>
            <ButtonLink variant="accent" className={styles.contact} href={siteConfig.social.email ? `mailto:${siteConfig.social.email}` : "#contact"}>{messages.ui.contact}</ButtonLink>
          </div>
        </div>
      </header>
    </>
  );
}
