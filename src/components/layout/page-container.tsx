import type { ComponentPropsWithoutRef } from "react";
import styles from "./page-container.module.css";

export function PageContainer({ className = "", ...props }: ComponentPropsWithoutRef<"div">) {
  return <div className={`${styles.container} ${className}`} {...props} />;
}
