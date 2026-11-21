import type { ContentImage, Publication } from "@/content/types";

export const projectCategories = ["professional", "personal", "freelance"] as const;
export type ProjectCategory = (typeof projectCategories)[number];

export type Project = Publication & {
  id: string;
  category: ProjectCategory;
  title: string;
  description: string;
  role: string;
  stack: string[];
  featured: boolean;
  image?: ContentImage;
};

export type ProjectArchiveEntry = { id: string; title: string; description: string };
