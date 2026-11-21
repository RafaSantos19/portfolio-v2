import type { HomeContent } from "./types";

export const home: HomeContent = {
  introduction: "Olá, eu sou Rafael.",
  headline: "Construo produtos web",
  headlineMuted: "e sistemas internos.",
  summary: "Desenvolvedor Full Stack atuando de requisitos e arquitetura até implementação.",
  processTitle: "Como eu trabalho",
  processDescription: "Do problema à produção, com clareza em cada etapa.",
  process: [
    { title: "Requisitos", detail: "escopo · restrições" },
    { title: "Arquitetura", detail: "dados · limites" },
    { title: "Backend", detail: "APIs · serviços" },
    { title: "Frontend", detail: "UI · componentes" },
    { title: "Entrega", detail: "deploy · evolução" },
  ],
  workTitle: "Projetos selecionados",
  capabilitiesTitle: "Como posso ajudar",
  capabilities: [
    { title: "Aplicações web", description: "Produtos digitais construídos em torno de necessidades reais." },
    { title: "Ferramentas e sistemas internos", description: "Sistemas que apoiam equipes, processos e operações." },
    { title: "Frontend e design systems", description: "Interfaces consistentes e arquitetura de componentes." },
    { title: "Integrações e automação", description: "Conexão entre serviços e redução de trabalho manual." },
  ],
  writingTitle: "Textos recentes",
  contactTitle: "Tem um problema",
  contactTitleMuted: "que vale resolver?",
  contactDescription: "Aberto a projetos selecionados, colaborações e desafios técnicos interessantes.",
};
