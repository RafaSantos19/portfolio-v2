import Link from "next/link";
import type { ComponentProps } from "react";
import styles from "./controls.module.css";

type ButtonLinkProps = ComponentProps<typeof Link> & { variant?: "primary" | "outline" | "accent" };

export function ButtonLink({ variant = "primary", className = "", ...props }: ButtonLinkProps) {
  return <Link className={`${styles.button} ${styles[variant]} ${className}`} {...props} />;
}
