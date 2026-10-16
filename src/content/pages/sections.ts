import type { Locale } from "@/i18n/config";

type SectionContent = {
  eyebrow: string;
  title: string;
  description: string;
  backLabel: string;
};

const sections = {
  pt: {
    work: {
      eyebrow: "Trabalho",
      title: "Projetos selecionados",
      description: "Estudos de caso serão publicados aqui, com contexto, decisões e resultados.",
      backLabel: "Voltar ao início",
    },
    writing: {
      eyebrow: "Escrita",
      title: "Ideias em desenvolvimento",
      description: "Artigos sobre desenvolvimento, arquitetura e produto serão publicados aqui.",
      backLabel: "Voltar ao início",
    },
    about: {
      eyebrow: "Sobre",
      title: "Do problema à entrega.",
      description: "Minha trajetória passa por suporte, infraestrutura, automação e desenvolvimento de sistemas web. Trabalho conectando necessidades, decisões técnicas e implementação.",
      backLabel: "Voltar ao início",
    },
  },
  en: {
    work: {
      eyebrow: "Work",
      title: "Selected work",
      description: "Case studies will be published here, with context, decisions and outcomes.",
      backLabel: "Back to home",
    },
    writing: {
      eyebrow: "Writing",
      title: "Ideas in progress",
      description: "Articles on development, architecture and product will be published here.",
      backLabel: "Back to home",
    },
    about: {
      eyebrow: "About",
      title: "From problem to delivery.",
      description: "My path spans support, infrastructure, automation and web systems development. I connect requirements, technical decisions and implementation.",
      backLabel: "Back to home",
    },
  },
} satisfies Record<Locale, Record<"work" | "writing" | "about", SectionContent>>;

export function getSectionContent(locale: Locale, section: "work" | "writing" | "about") {
  return sections[locale][section];
}
