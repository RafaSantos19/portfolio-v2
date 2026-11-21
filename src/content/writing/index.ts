import type { Locale } from "@/i18n/config";
import type { Article, ArticleCategory } from "@/features/writing/types";

// These are editorial previews. Dates and reading times belong to finished articles.
const metadata = [
  { id: "reusable-cms", categories: ["architecture"] },
  { id: "business-processes", categories: ["engineering", "product"] },
  { id: "component-boundaries", categories: ["engineering"] },
  { id: "architecture-decisions", categories: ["architecture"] },
  { id: "requirements", categories: ["product"] },
  { id: "incremental-delivery", categories: ["engineering", "product"] },
] as const satisfies readonly { id: string; categories: readonly ArticleCategory[] }[];

const translations = {
  pt: {
    "reusable-cms": { title: "Construindo uma arquitetura de CMS reutilizável", description: "Uma pauta sobre limites, modelos de conteúdo e decisões que permitem evoluir uma plataforma." },
    "business-processes": { title: "Lições ao mapear processos de negócio", description: "Uma pauta sobre entender o trabalho das pessoas antes de propor uma solução técnica." },
    "component-boundaries": { title: "Onde começa e termina um componente", description: "Uma pauta sobre composição, responsabilidade e reutilização de interfaces." },
    "architecture-decisions": { title: "Documentar as decisões de arquitetura", description: "Uma pauta sobre contexto, alternativas e os motivos por trás de uma escolha." },
    "requirements": { title: "Do problema aos requisitos", description: "Uma pauta sobre transformar necessidades em um escopo que possa ser construído." },
    "incremental-delivery": { title: "Entregar em partes, aprender com o uso", description: "Uma pauta sobre entregas incrementais e melhorias orientadas por feedback." },
  },
  en: {
    "reusable-cms": { title: "Building a reusable CMS architecture", description: "A planned note on boundaries, content models and decisions that let a platform evolve." },
    "business-processes": { title: "Lessons from mapping business processes", description: "A planned note on understanding how people work before proposing a technical solution." },
    "component-boundaries": { title: "Where a component begins and ends", description: "A planned note on composition, responsibility and reusable interfaces." },
    "architecture-decisions": { title: "Documenting architecture decisions", description: "A planned note on context, alternatives and the reasons behind a choice." },
    "requirements": { title: "From problems to requirements", description: "A planned note on translating needs into a scope that can be built." },
    "incremental-delivery": { title: "Ship in increments, learn from use", description: "A planned note on incremental delivery and improvements informed by feedback." },
  },
} satisfies Record<Locale, Record<(typeof metadata)[number]["id"], { title: string; description: string }>>;

export function getArticles(locale: Locale): Article[] {
  return metadata.map((item) => ({ ...item, ...translations[locale][item.id], categories: [...item.categories], status: "draft" }));
}
