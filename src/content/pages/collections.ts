import type { Locale } from "@/i18n/config";
import type { PageIntroContent } from "./types";

const content = {
  pt: {
    work: { eyebrow: "Projetos", title: "Estudos de caso,", titleMuted: "além das telas.", description: "Produtos e sistemas internos, com espaço para o problema, as decisões e o resultado." },
    writing: { eyebrow: "Textos", title: "Notas sobre construir software,", titleMuted: "em público.", description: "Arquitetura, engenharia e produto a partir de problemas e decisões de projetos." },
  },
  en: {
    work: { eyebrow: "Work", title: "Case studies,", titleMuted: "beyond screenshots.", description: "Products and internal systems, with room for the problem, the decisions and the result." },
    writing: { eyebrow: "Writing", title: "Notes on building software,", titleMuted: "in public.", description: "Architecture, engineering and product through project problems and decisions." },
  },
} satisfies Record<Locale, Record<"work" | "writing", PageIntroContent>>;

export function getCollectionContent(locale: Locale, section: "work" | "writing") { return content[locale][section]; }
