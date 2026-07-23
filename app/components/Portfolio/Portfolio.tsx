import Image from "next/image";
import styles from "./Portfolio.module.css";
import { SectionCta } from "../SectionCta";

const projects = [
  {
    title: "GONKA AI Dashboard",
    type: "Технический дашборд",
    description:
      "Дашборд без готового макета: метрики, таблица нод, детальная информация о ноде, светлая и тёмная темы.",
    technologies: ["shadcn/ui"],
    images: [
      ["/projects/gonka-dark.jpg", "GONKA AI — информация об эпохе в тёмной теме"],
      ["/projects/gonka-light.jpg", "GONKA AI — информация об эпохе в светлой теме"]
    ]
  },
  {
    title: "GNK.club",
    type: "Лендинг",
    description:
      "Адаптивный лендинг по готовому макету с фокусом на точное соответствие дизайну и производительность.",
    technologies: ["Next.js", "Tailwind CSS"],
    images: [
      ["/projects/gnk-landing-1.jpg", "GNK.club — главный экран лендинга"],
      ["/projects/gnk-landing-2.jpg", "GNK.club — контентная секция лендинга"]
    ]
  },
  {
    title: "Smartway",
    type: "Сервис дедупликации отелей",
    description:
      "Интерфейс загрузки CSV и отображения результатов группировки: статистика файла, список найденных групп и детальная информация по каждой группе.",
    technologies: [
      "Material UI", "MUI X Charts", "React Hook Form", "Zod", "React Query", "Motion"
    ],
    link: "https://github.com/VladFomin17/smartway-front",
    images: [
      ["/projects/smartway-upload.jpg", "Smartway — форма загрузки CSV-файла"],
      ["/projects/smartway-file.jpg", "Smartway — информация о загруженном файле"],
      ["/projects/smartway-group.jpg", "Smartway — информация по группе отелей"]
    ]
  },
  {
    title: "Piligrim",
    type: "Административная панель",
    description:
      "Административная панель логистической компании по макетам Figma. Переиспользуемые компоненты для таблиц, форм и внутренних страниц.",
    technologies: [],
    images: [
      ["/projects/piligrim-orders.jpg", "Piligrim — список заказов"],
      ["/projects/piligrim-order.jpg", "Piligrim — детальная страница заказа"]
    ]
  },
  {
    title: "Litsil",
    type: "Управление производством",
    description:
      "Административная панель для производственных задач, пользователей и номенклатуры, спроектированная с учётом взаимодействия с мобильным приложением на React Native.",
    technologies: ["React Native"],
    images: [
      ["/projects/litsil-tasks.jpg", "Litsil — конструктор производственных задач"],
      ["/projects/litsil-config.jpg", "Litsil — конфигурация интеграции с 1С"]
    ]
  },
  {
    title: "Crosstrade",
    type: "Административная панель",
    description:
      "Интерфейс мониторинга автоматического матчинга заявок покупателей и продавцов на бирже: списки заявок, история статусов и таблицы контрагентов.",
    technologies: ["Ant Design", "Zustand"],
    images: [
      ["/projects/crosstrade-buyers.jpg", "Crosstrade — таблица покупателей"],
      ["/projects/crosstrade-login.jpg", "Crosstrade — экран входа"]
    ]
  }
] as const;

export function Portfolio() {
  return (
    <section className={styles.section} id="portfolio">
      <div className={styles.heading}>
        <p className="eyebrow">Избранные работы</p>
        <h2>Несколько интерфейсов, собранных вокруг реальных задач.</h2>
      </div>
      <div className={styles.carousel} aria-label="Галерея проектов">
        {projects.map((project, index) => (
          <article className={styles.project} key={project.title}>
            <div className={styles.copy}>
              <span className={styles.number}>{String(index + 1).padStart(2, "0")}</span>
              <p className={styles.type}>{project.type}</p>
              <h3>{project.title}</h3>
              <p className={styles.description}>{project.description}</p>
              <ul className={styles.tags} aria-label="Технологии">
                {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
              </ul>
              {"link" in project && (
                <a className={styles.link} href={project.link} target="_blank" rel="noreferrer">
                  Репозиторий проекта <span aria-hidden="true">↗</span>
                </a>
              )}
            </div>
            <div className={styles.gallery} aria-label={`Скриншоты ${project.title}`}>
              {project.images.map(([src, alt], imageIndex) => (
                <figure className={styles.frame} data-image={imageIndex} key={src}>
                  <Image
                    src={src}
                    alt={alt}
                    fill
                    sizes="(max-width: 760px) 78vw, 42vw"
                    priority={index === 0 && imageIndex === 0}
                  />
                </figure>
              ))}
            </div>
          </article>
        ))}
      </div>
      <SectionCta />
    </section>
  );
}
