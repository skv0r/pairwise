import Image from "next/image";
import styles from "./FeatureCard.module.css";

type FeatureCardProps = Readonly<{
    title: string;
    description: string;
    image: string;
    imageAlt: string;
}>;

export default function FeatureCard({
    title,
    description,
    image,
    imageAlt,
}: FeatureCardProps) {
    return (
        <article className={styles.card}>
            <div className={styles.card__media}>
                <Image
                    src={image}
                    alt={imageAlt}
                    fill
                    className={styles.card__image}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>
            <div className={styles.card__body}>
                <h3 className={styles.card__title}>{title}</h3>
                <p className={styles.card__text}>{description}</p>
            </div>
        </article>
    );
}
