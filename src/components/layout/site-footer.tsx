import { siteConfig } from "@/config/site";
import styles from "./site-footer.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span>© {new Date().getFullYear()} {siteConfig.name}</span>
        <span>{siteConfig.location}</span>
        {(siteConfig.social.github || siteConfig.social.linkedin || siteConfig.social.email) && <div className={styles.links}>
          {siteConfig.social.github && <a href={siteConfig.social.github}>GitHub</a>}
          {siteConfig.social.linkedin && <a href={siteConfig.social.linkedin}>LinkedIn</a>}
          {siteConfig.social.email && <a href={`mailto:${siteConfig.social.email}`}>Email</a>}
        </div>}
      </div>
    </footer>
  );
}
