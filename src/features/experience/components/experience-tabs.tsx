"use client";

import { useId, useRef, useState, type ReactNode } from "react";
import styles from "./experience.module.css";

export function ExperienceTabs({ label, tabs }: { label: string; tabs: { id: string; label: string; content: ReactNode }[] }) {
  const [active, setActive] = useState(0);
  const prefix = useId();
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  return (
    <>
      <div className={styles.tabs} role="tablist" aria-label={label}>
        {tabs.map((tab, index) => <button key={tab.id} id={`${prefix}-${tab.id}-tab`} type="button" role="tab"
          ref={(node) => { refs.current[index] = node; }} tabIndex={active === index ? 0 : -1}
          aria-selected={active === index} aria-controls={`${prefix}-${tab.id}-panel`} onClick={() => setActive(index)}
          onKeyDown={(event) => {
            let next: number;
            if (event.key === "ArrowRight") next = (index + 1) % tabs.length;
            else if (event.key === "ArrowLeft") next = (index + tabs.length - 1) % tabs.length;
            else if (event.key === "Home") next = 0;
            else if (event.key === "End") next = tabs.length - 1;
            else return;
            event.preventDefault();
            setActive(next);
            refs.current[next]?.focus();
          }}>{tab.label}</button>)}
      </div>
      {tabs.map((tab, index) => <div key={tab.id} role="tabpanel" tabIndex={0} id={`${prefix}-${tab.id}-panel`}
        aria-labelledby={`${prefix}-${tab.id}-tab`} hidden={active !== index}>{tab.content}</div>)}
    </>
  );
}
