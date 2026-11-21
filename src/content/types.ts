export type Publication =
  | { status: "draft"; href?: never }
  | { status: "published"; href: string };

export type ContentImage = { src: string; alt: string };
