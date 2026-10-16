import Link from "next/link";
import { navigation } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import type { Locale } from "@/i18n/config";
import { localePath } from "@/i18n/config";
import { getMessages } from "@/i18n/messages";
import { LanguageSwitch } from "./language-switch";
import { ThemeSwitch } from "./theme-switch";
import styles from "./site-header.module.css";

export function SiteHeader({ locale }: { locale: Locale }) {
  const messages = getMessages(locale);

  return (
    <>
      <a className={styles.skip} href="#main">{messages.ui.skipToContent}</a>
      <header className={styles.header}>
        <div className={styles.inner}>
          <Link className={styles.brand} href={localePath(locale)} aria-label={siteConfig.name}>
            Rafael<span>.</span>
          </Link>
          <nav className={styles.nav} aria-label={messages.ui.mainNavigation}>
            {navigation.map(({ id, href }) => (
              <Link key={id} href={localePath(locale, href)}>{messages.navigation[id]}</Link>
            ))}
          </nav>
          <div className={styles.actions}>
            {siteConfig.social.email && (
              <a className={styles.contact} href={`mailto:${siteConfig.social.email}`}>{messages.ui.contact}</a>
            )}
            <ThemeSwitch label={messages.ui.switchTheme} />
            <LanguageSwitch locale={locale} label={messages.ui.switchLanguage} />
          </div>
        </div>
      </header>
    </>
  );
}
