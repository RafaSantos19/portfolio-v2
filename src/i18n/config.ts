import { siteConfig } from "@/config/site";

export type Locale = (typeof siteConfig.locales)[number];

export function isLocale(value: string): value is Locale {
  return siteConfig.locales.some((locale) => locale === value);
}

export function localePath(locale: Locale, path = "") {
  return `/${locale}${path}`;
}
