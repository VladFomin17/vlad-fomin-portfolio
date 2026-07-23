import styles from "./Services.module.css";

const services = [
  {
    number: "01",
    title: "Интерфейс без готового макета",
    text: "Разбор бизнес-логики, пользовательских сценариев и структуры страниц с последующей реализацией на подходящем UI-kit."
  },
  {
    number: "02",
    title: "Интерфейс по макету",
    text: "Разработка адаптивного интерфейса по Figma с вниманием к точности, переиспользуемым компонентам и производительности."
  },
  {
    number: "03",
    title: "Админ-панель или дашборд",
    text: "Таблицы, формы, графики, статусы и детальные страницы для работы со сложной технической или операционной информацией."
  }
];

export function Services() {
  return (
    <section className={styles.section} id="services">
      <div className={styles.heading}>
        <p className="eyebrow">Чем могу помочь</p>
        <h2>От бизнес-логики до рабочего интерфейса.</h2>
      </div>
      <div className={styles.grid}>
        {services.map((service) => (
          <article className={styles.card} key={service.number}>
            <span>{service.number}</span>
            <h3>{service.title}</h3>
            <p>{service.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
