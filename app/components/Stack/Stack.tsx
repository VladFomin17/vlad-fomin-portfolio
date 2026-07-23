import styles from "./Stack.module.css";

const technologies = [
  "React", "TypeScript", "JavaScript", "Next.js", "Vite", "React Router",
  "Redux Toolkit", "React Query", "React Hook Form", "Zod", "Zustand",
  "Material UI", "Ant Design", "shadcn/ui", "Tailwind CSS", "CSS Modules",
  "SCSS Modules", "AI agents", "axios", "JWT", "WebSocket"
];

export function Stack() {
  return (
    <section className={styles.section} id="stack">
      <div className={styles.heading}>
        <p className="eyebrow">Стек</p>
        <h2>Инструменты, которые помогают собирать рабочие интерфейсы.</h2>
      </div>
      <div className={styles.constellation} aria-label="Технологический стек">
        <div className={styles.core}>Frontend<br />stack</div>
        {technologies.map((technology, index) => (
          <span className={styles.badge} key={technology} data-index={index}>
            {technology}
          </span>
        ))}
      </div>
    </section>
  );
}
