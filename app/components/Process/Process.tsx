import styles from "./Process.module.css";
import { SectionCta } from "../SectionCta";

const steps = [
  ["Понять задачу", "Цель пользователя и бизнес-логика продукта."],
  ["Собрать структуру", "Сценарии, страницы, навигация и расположение элементов."],
  ["Реализовать", "Подходящие компоненты и последовательный интерфейс."],
  ["Уточнить", "Анализ результата, обратная связь и доработка."]
];

export function Process() {
  return (
    <section className={styles.section} id="process">
      <div className={styles.heading}>
        <p className="eyebrow">Процесс</p>
        <h2>Понятный путь от задачи до результата.</h2>
      </div>
      <ol className={styles.steps}>
        {steps.map(([title, text], index) => (
          <li key={title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          </li>
        ))}
      </ol>
      <SectionCta />
    </section>
  );
}
