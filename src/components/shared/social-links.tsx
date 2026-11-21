import { siteConfig } from "@/config/site";
import styles from "./social-links.module.css";

export function SocialLinks({ label }: { label: string }) {
  const links = [
    { label: "GitHub", href: siteConfig.social.github },
    { label: "LinkedIn", href: siteConfig.social.linkedin },
    { label: "Email", href: siteConfig.social.email ? `mailto:${siteConfig.social.email}` : null },
  ].filter((link): link is { label: string; href: string } => link.href !== null);
  if (!links.length) return null;
  return <nav className={styles.links} aria-label={label}>{links.map((link) => <a key={link.label} href={link.href}>{link.label}</a>)}</nav>;
}
