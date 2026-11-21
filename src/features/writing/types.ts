import type { Publication } from "@/content/types";

export const articleCategories = ["architecture", "engineering", "product"] as const;
export type ArticleCategory = (typeof articleCategories)[number];

export type Article = {
  id: string;
  title: string;
  description: string;
  categories: ArticleCategory[];
} & (Publication & (
  | { status: "draft"; publishedAt?: never; readingMinutes?: never }
  | { status: "published"; publishedAt: string; readingMinutes: number }
));
