export const siteConfig = {
  name: "Rafael Santos",
  location: "São Paulo, Brazil",
  locales: ["pt", "en"] as const,
  defaultLocale: "pt" as const,
  // Keep unverified assets and contact details unset until real content is ready.
  portrait: null as { src: string; alt: string } | null,
  resume: null as string | null,
  stack: ["TypeScript", "React", "Next.js", "Node.js", "NestJS", "PostgreSQL", "Docker", "Payload CMS"],
  social: {
    github: null as string | null,
    linkedin: null as string | null,
    email: null as string | null,
  },
};
