import Image from "next/image";
import styles from "./media-frame.module.css";

export function MediaFrame({ label, image, portrait = false, badge }: {
  label: string;
  image?: { src: string; alt: string } | null;
  portrait?: boolean;
  badge?: string;
}) {
  return (
    <div className={`${styles.frame} ${portrait ? styles.portrait : ""}`}>
      {image ? <Image src={image.src} alt={image.alt} fill sizes={portrait ? "(max-width: 800px) 85vw, 35vw" : "(max-width: 800px) 100vw, 75vw"} /> : (
        <div className={styles.placeholder}><span>{label}</span></div>
      )}
      {badge && <span className={styles.badge}>{badge}</span>}
    </div>
  );
}
