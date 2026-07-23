"use client";

import { useState, type CSSProperties, type PointerEvent } from "react";
import styles from "./Stack.module.css";
import { SectionCta } from "../SectionCta";

const technologies = [
  "React", "TypeScript", "JavaScript", "Next.js", "Vite", "React Router",
  "Redux Toolkit", "React Query", "React Hook Form", "Zod", "Zustand",
  "Material UI", "Ant Design", "shadcn/ui", "Tailwind CSS", "CSS Modules",
  "SCSS Modules", "AI agents", "axios", "JWT", "WebSocket"
];

export function Stack() {
  const [cursor, setCursor] = useState({ x: 50, y: 50 });

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    setCursor({
      x: ((event.clientX - bounds.left) / bounds.width) * 100,
      y: ((event.clientY - bounds.top) / bounds.height) * 100
    });
  };

  return (
    <section className={styles.section} id="stack">
      <div className={styles.heading}>
        <p className="eyebrow">Стек</p>
        <h2>Инструменты, которые помогают собирать рабочие интерфейсы.</h2>
      </div>
      <div
        className={styles.constellation}
        aria-label="Технологический стек"
        onPointerMove={handlePointerMove}
        onPointerLeave={() => setCursor({ x: 50, y: 50 })}
        style={
          {
            "--cursor-x": `${cursor.x}%`,
            "--cursor-y": `${cursor.y}%`
          } as CSSProperties
        }
      >
        <div className={styles.cursorGlow} aria-hidden="true" />
        <div className={styles.core}>Frontend<br />stack</div>
        {technologies.map((technology, index) => (
          <span className={styles.badge} key={technology} data-index={index}>
            {technology}
          </span>
        ))}
      </div>
      <SectionCta />
    </section>
  );
}
