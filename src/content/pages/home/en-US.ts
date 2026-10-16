import type { HomeContent } from "./types";

export const home: HomeContent = {
  introduction: "Hey, I'm Rafael.",
  headline: "I build web products and internal systems.",
  summary: "Full Stack Developer working across requirements, architecture and implementation.",
  processTitle: "How I work",
  process: ["Requirements", "Architecture", "Backend", "Frontend", "Delivery"],
  workTitle: "Selected work",
  workEmpty: "Case studies will be published here.",
  experienceTitle: "Experience",
  experienceEmpty: "My professional experience will be detailed here.",
  capabilitiesTitle: "What I can help with",
  capabilities: [
    { title: "Web applications", description: "Digital products built around real requirements." },
    { title: "Internal tools & systems", description: "Systems that support teams, processes and operations." },
    { title: "Frontend & design systems", description: "Consistent interfaces and component architecture." },
    { title: "Integrations & automation", description: "Connecting services and reducing manual work." },
  ],
  writingTitle: "Recent writing",
  writingEmpty: "Articles and technical notes will be published here.",
  contactTitle: "Have a problem worth solving?",
  contactDescription: "Open to selected projects, collaborations and interesting technical challenges.",
};
