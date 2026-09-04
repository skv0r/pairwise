import Link from "next/link";
import styles from "./page.module.css";

const About = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__track}
            aria-hidden="true"
        >
          {Array.from({ length: 6 }, (_, index) => (
            <span key={index}
                className={styles.header__text}
            >
              Платформа для поиска коворкинг-зон и единомышленников
            </span>
          ))}
        </div>
      </header>
      <main className={`${styles.main} container`}>
        <section className={styles.idea}>
          <h1 className={styles.idea__title}>PairWise</h1>
          <section className={styles.idea__block}>
            <h2 className={styles.idea__subtitle}>Цель разработки</h2>
            <p className={styles.idea__paragraph}>
              Создать веб-приложение для поиска коворкинг-зон, где можно встретить единомышленников, разобрать тренды и рабочие задачи. Подбор мест идёт по общим интересам, стеку посетителей и проектам.
            </p>
          </section>
          <section className={styles.idea__block}>
            <h2 className={styles.idea__subtitle}>Будущий результат</h2>
            <p className={styles.idea__paragraph}>
              К завершению курса PairWise будет законченным приложением: каталог зон, карточка места, карта, избранное и личный кабинет. Пользователь сможет найти площадку по стеку и интересам, открыть её на карте и сохранить для следующих встреч.
            </p>
          </section>
          <section className={styles.idea__block}>
            <h2 className={styles.idea__subtitle}>Основная предметная сущность</h2>
            <p className={styles.idea__paragraph}>
              Коворкинг-зона: конкретная площадка, куда можно прийти на очную встречу с единомышленниками. У каждой зоны есть описание, стек и интересы сообщества, позже — адрес, фото и точка на карте; каталог, карточка места и избранное строятся вокруг этого объекта.
            </p>
          </section>
          <section className={styles.idea__block}>
            <h2 className={styles.idea__subtitle}>Предполагаемые разделы приложения</h2>
            <ul className={styles.idea__list}>
              <li className={styles.idea__item}>главная страница;</li>
              <li className={styles.idea__item}>каталог коворкинг-зон;</li>
              <li className={styles.idea__item}>страница отдельной зоны;</li>
              <li className={styles.idea__item}>галерея и карта;</li>
              <li className={styles.idea__item}>личный кабинет;</li>
              <li className={styles.idea__item}>вход и регистрация;</li>
              <li className={styles.idea__item}>о проекте.</li>
            </ul>
          </section>
          <section className={styles.idea__block}>
            <h2 className={styles.idea__subtitle}>Предполагаемые функции</h2>
            <ul className={styles.idea__list}>
              <li className={styles.idea__item}>
                Каталог площадок с фильтрами: часто встречающийся стек, место работы, область работы.
              </li>
              <li className={styles.idea__item}>
                Сохранение избранных точек для следующих встреч. Список посещённых точек с личным отзывом.
              </li>
              <li className={styles.idea__item}>
                Разделение на несколько уровней пользователей: обычный пользователь, подтверждённый пользователь с расширенными возможностями, администратор.
              </li>
              <li className={styles.idea__item}>
                Планирование посещения места с другими пользователями в определённый день и время.
              </li>
            </ul>
          </section>
          <nav className={styles.idea__nav}>
            <Link href="/"
                className={styles.idea__link}
            >
              Вернуться на главную страницу
            </Link>
          </nav>
        </section>
      </main> 
    </>
  );
};

export default About;
