import type { Locale } from "@/i18n/config";
import { home as en } from "./en-US";
import { home as pt } from "./pt-BR";

export function getHomeContent(locale: Locale) {
  return { pt, en }[locale];
}
