import styles from "./About.module.css";
import { SectionCta } from "../SectionCta";

export function About() {
  return (
    <section className={styles.section} id="about">
      <div>
        <p className="eyebrow">Обо мне</p>
        <h2>Начинаю не с компонентов, а с задачи пользователя.</h2>
      </div>
      <div className={styles.copy}>
        <p>
          Если готового макета нет, определяю основные сценарии, структуру
          страниц, навигацию и расположение элементов. После реализации
          анализирую результат, собираю обратную связь и дорабатываю интерфейс.
        </p>
        <p>
          Стараюсь делать интерфейсы простыми, последовательными и
          масштабируемыми, чтобы новый функционал можно было добавлять без
          полной переработки существующих экранов.
        </p>
        <SectionCta />
      </div>
    </section>
  );
}
