import en from "./messages/en-US.json";
import pt from "./messages/pt-BR.json";
import type { Locale } from "./config";

const messages = { pt, en } satisfies Record<Locale, typeof en>;

export function getMessages(locale: Locale) {
  return messages[locale];
}
