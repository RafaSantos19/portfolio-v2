import type { Locale } from "@/i18n/config";
import type { Project, ProjectArchiveEntry } from "@/features/projects/types";

// Wireframe previews, not published case studies. Replace with verified content.
const metadata = [
  { id: "cms-platform", category: "professional", stack: ["Next.js", "Payload CMS", "PostgreSQL"], featured: true },
  { id: "personal-project", category: "personal", stack: ["NestJS", "React"], featured: false },
  { id: "freelance-project", category: "freelance", stack: ["Node.js", "Docker"], featured: false },
  { id: "frontend-project", category: "professional", stack: ["React", "Design System"], featured: false },
] as const;

const translations = {
  pt: {
    "cms-platform": { title: "CMS Platform", description: "Espaço reservado para o contexto, as decisões e os resultados de uma plataforma de conteúdo.", role: "Full Stack" },
    "personal-project": { title: "Projeto pessoal", description: "Um espaço para explorar um problema, desenvolver uma solução e compartilhar o aprendizado.", role: "Full Stack" },
    "freelance-project": { title: "Projeto freelance", description: "O problema, as restrições e a entrega serão apresentados neste estudo de caso.", role: "Full Stack" },
    "frontend-project": { title: "Interfaces e componentes", description: "Uma prévia do espaço dedicado a interfaces, componentes e consistência visual.", role: "Frontend" },
  },
  en: {
    "cms-platform": { title: "CMS Platform", description: "A place for the context, decisions and outcomes behind a content platform.", role: "Full Stack" },
    "personal-project": { title: "Personal project", description: "A space to explore a problem, build a solution and share what was learned.", role: "Full Stack" },
    "freelance-project": { title: "Freelance project", description: "The problem, constraints and delivery will be documented in this case study.", role: "Full Stack" },
    "frontend-project": { title: "Interfaces & components", description: "A preview of the space for interfaces, components and visual consistency.", role: "Frontend" },
  },
} satisfies Record<Locale, Record<(typeof metadata)[number]["id"], { title: string; description: string; role: string }>>;

export function getProjects(locale: Locale): Project[] {
  return metadata.map((item) => ({ ...item, ...translations[locale][item.id], stack: [...item.stack], status: "draft" }));
}

const archive = {
  pt: [
    { id: "automation", title: "Ferramenta de automação", description: "Automação de processos · Node.js" },
    { id: "components", title: "Biblioteca de componentes", description: "Design system · React" },
    { id: "dashboard", title: "Dashboard interno", description: "Administração · PostgreSQL" },
  ],
  en: [
    { id: "automation", title: "Automation tool", description: "Workflow automation · Node.js" },
    { id: "components", title: "Component library", description: "Design system · React" },
    { id: "dashboard", title: "Internal dashboard", description: "Admin · PostgreSQL" },
  ],
} satisfies Record<Locale, ProjectArchiveEntry[]>;

export function getProjectArchive(locale: Locale) { return archive[locale]; }
