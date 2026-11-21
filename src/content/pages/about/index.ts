import type { Locale } from "@/i18n/config";

export type ExperienceEntry = { id: string; period: string; organization: string; role: string; description: string };
type AboutContent = {
  eyebrow: string; title: string; titleMuted: string; paragraphs: string[];
  principlesTitle: string; principles: { title: string; description: string }[];
  experienceTitle: string; workLabel: string; educationLabel: string; educationEmpty: string;
  experienceNote: string; experience: ExperienceEntry[];
  nowTitle: string; now: { label: string; value: string }[];
};

const content = {
  pt: {
    eyebrow: "Sobre", title: "Eu me importo com o produto,", titleMuted: "do problema à entrega.",
    paragraphs: [
      "Sou Rafael Santos, desenvolvedor Full Stack em São Paulo. Minha trajetória passa por suporte, infraestrutura, automação e desenvolvimento de sistemas web.",
      "Trabalho conectando requisitos, arquitetura e implementação. Entender o processo e as pessoas que vão usar um sistema faz parte de construir uma solução útil.",
    ],
    principlesTitle: "Como eu trabalho",
    principles: [
      { title: "Começar pelo problema", description: "Mapear o processo, o contexto e as restrições antes de escolher a stack." },
      { title: "Manter os sistemas legíveis", description: "Arquitetura clara, nomes que fazem sentido e responsabilidades bem definidas." },
      { title: "Entregar e refinar", description: "Construir incrementos funcionais e melhorar a partir do uso real." },
    ],
    experienceTitle: "Experiência", workLabel: "Trabalho", educationLabel: "Formação",
    educationEmpty: "Informações sobre formação serão adicionadas após revisão.",
    experienceNote: "Informações de experiência em revisão. Descrições e datas serão atualizadas.",
    experience: [
      { id: "pmsp", period: "2026 — Atual", organization: "PMSP", role: "Estagiário em Desenvolvimento Full Stack", description: "Detalhes sobre responsabilidades, projetos e contribuições em preparação." },
      { id: "transuniao", period: "2024 — 2025", organization: "TransUnião", role: "Assistente de TI", description: "Detalhes sobre a atuação em tecnologia e suporte em preparação." },
    ],
    nowTitle: "Neste momento",
    now: [
      { label: "Localização", value: "São Paulo, Brasil" },
      { label: "Construindo", value: "Portfolio V2" },
      { label: "Interesses", value: "Arquitetura de software, sistemas web e produto" },
      { label: "Disponibilidade", value: "Projetos freelance selecionados" },
    ],
  },
  en: {
    eyebrow: "About", title: "I care about the product,", titleMuted: "from problem to delivery.",
    paragraphs: [
      "I'm Rafael Santos, a Full Stack Developer based in São Paulo. My path spans support, infrastructure, automation and web systems development.",
      "I connect requirements, architecture and implementation. Understanding the process and the people who will use a system is part of building a useful solution.",
    ],
    principlesTitle: "How I work",
    principles: [
      { title: "Start from the problem", description: "Map the process, context and constraints before choosing the stack." },
      { title: "Keep systems legible", description: "Clear architecture, meaningful names and well-defined responsibilities." },
      { title: "Ship, then refine", description: "Deliver working increments and improve with real use." },
    ],
    experienceTitle: "Experience", workLabel: "Work", educationLabel: "Education",
    educationEmpty: "Education details will be added after review.",
    experienceNote: "Experience details are under review. Descriptions and dates will be updated.",
    experience: [
      { id: "pmsp", period: "2026 — Present", organization: "PMSP", role: "Full Stack Developer Intern", description: "Responsibilities, projects and contributions are being prepared." },
      { id: "transuniao", period: "2024 — 2025", organization: "TransUnião", role: "IT Assistant", description: "Details about the technology and support role are being prepared." },
    ],
    nowTitle: "Right now",
    now: [
      { label: "Based in", value: "São Paulo, Brazil" },
      { label: "Building", value: "Portfolio V2" },
      { label: "Interests", value: "Software architecture, web systems and product" },
      { label: "Open to", value: "Selected freelance projects" },
    ],
  },
} satisfies Record<Locale, AboutContent>;

export function getAboutContent(locale: Locale): AboutContent { return content[locale]; }
