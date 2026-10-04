import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { spots } from "../../data/spots";
import SkillTags from "../../ui/SkillTags/SkillTags";
import styles from "../SpotPage.module.css";

const SpotPage = async ({
    params,
}: {
    params: Promise<{ id: string }>;
}) => {
    const { id: idParam } = await params;
    const id = Number(idParam);

    if (Number.isNaN(id)) {
        notFound();
    }

    const spot = spots.find((item) => item.id === id);

    if (!spot) {
        notFound();
    }

    const createdLabel = spot.createdAt.toLocaleDateString("ru-RU", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    return (
        <main className={styles.spot}>
            <Link
                href="/catalog"
                className={styles.spot__back}
            >
                ← К каталогу
            </Link>
            <article className={styles.spot__card}>
                <div className={styles.spot__media}>
                    <Image
                        src={spot.image}
                        alt={spot.name}
                        fill
                        priority
                        className={styles.spot__image}
                        sizes="(max-width: 768px) 100vw, 48rem"
                    />
                </div>
                <div className={styles.spot__body}>
                    <h1 className={styles.spot__title}>{spot.name}</h1>
                    <p className={styles.spot__description}>{spot.description}</p>
                    <dl className={styles.spot__meta}>
                        <div className={styles.spot__metaRow}>
                            <dt className={styles.spot__metaTerm}>Город</dt>
                            <dd className={styles.spot__metaValue}>{spot.city}</dd>
                        </div>
                        <div className={styles.spot__metaRow}>
                            <dt className={styles.spot__metaTerm}>Адрес</dt>
                            <dd className={styles.spot__metaValue}>{spot.adress}</dd>
                        </div>
                        <div className={styles.spot__metaRow}>
                            <dt className={styles.spot__metaTerm}>В базе с</dt>
                            <dd className={styles.spot__metaValue}>{createdLabel}</dd>
                        </div>
                    </dl>
                    <div className={styles.spot__skills}>
                        <h2 className={styles.spot__skillsTitle}>Стек на площадке</h2>
                        <SkillTags skills={spot.stack} />
                    </div>
                </div>
            </article>
        </main>
    );
};

export default SpotPage;
