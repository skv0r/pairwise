import Link from "next/link";
import FeatureCard from "./ui/FeatureCard/FeatureCard";
import styles from "./page.module.css";
import Image from "next/image"
import logo from "../public/logo.svg"
import Header from "./ui/Header/Header";


export default function Home() {
    return (
        <>
            <main className={`${styles.main} container`}>   
                <h1 className={styles.page__title}>
                    <Image 
                        src={logo}
                        alt="Логотип" 
                        width={300}
                        height={100}
                    />
                </h1>
                <p className={styles.page__lead}>
                    Приложение решает проблему поиска коворкинг-зон для совместных встреч с единомышленниками, разбора трендов, рабочих проблем. Подбор мест идёт на основе общих интересов, стека посетителей и проектов.
                </p>
                <section
                    className={styles.page__section}
                    aria-labelledby="audience-title"
                >
                    <h2
                        className={styles.page__subtitle}
                        id="audience-title"
                    >
                        Целевая аудитория
                    </h2>
                    <p className={styles.page__text}>
                        Разработчики, фаундеры и люди из IT-сферы, которым нужны очные встречи по делу.
                    </p>
                </section>
                <section
                    className={styles.page__section}
                    aria-labelledby="features-title"
                >
                    <h2
                        className={styles.page__subtitle}
                        id="features-title"
                    >
                        Основные функции
                    </h2>
                    <div className={styles.page__features}>
                        <FeatureCard
                            title="Каталог площадок"
                            description="Просмотр коворкинг-зон с фильтрами: часто встречающийся стек, место работы, область работы."
                        />
                        <FeatureCard
                            title="Избранное и отзывы"
                            description="Сохранение площадок для следующих встреч и список посещённых точек с личным отзывом."
                        />
                        <FeatureCard
                            title="Совместные визиты"
                            description="Планирование посещения места с другими пользователями в определённый день и время."
                        />
                    </div>
                </section>
                <Link
                    href="/about"
                    className={styles.page__link}
                >
                    О нас
                </Link>

            </main>
        </>
    );
}
