import type { HomeContent } from "./types";

export const home: HomeContent = {
  introduction: "Hey, I'm Rafael.",
  headline: "I build web products",
  headlineMuted: "and internal systems.",
  summary: "Full Stack Developer working across requirements, architecture and implementation.",
  processTitle: "How I work",
  processDescription: "From problem to production, with clarity at every step.",
  process: [
    { title: "Requirements", detail: "scope · constraints" },
    { title: "Architecture", detail: "data · boundaries" },
    { title: "Backend", detail: "APIs · services" },
    { title: "Frontend", detail: "UI · components" },
    { title: "Delivery", detail: "deploy · handoff" },
  ],
  workTitle: "Selected work",
  capabilitiesTitle: "What I can help with",
  capabilities: [
    { title: "Web applications", description: "Digital products built around real requirements." },
    { title: "Internal tools & systems", description: "Systems that support teams, processes and operations." },
    { title: "Frontend & design systems", description: "Consistent interfaces and component architecture." },
    { title: "Integrations & automation", description: "Connecting services and reducing manual work." },
  ],
  writingTitle: "Recent writing",
  contactTitle: "Have a problem",
  contactTitleMuted: "worth solving?",
  contactDescription: "Open to selected projects, collaborations and interesting technical challenges.",
};
