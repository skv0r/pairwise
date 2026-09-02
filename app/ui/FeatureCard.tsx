import styles from "./FeatureCard.module.css";

type FeatureCardProps = Readonly<{
    title: string;
    description: string;
}>;

export default function FeatureCard({ title, description }: FeatureCardProps) {
    return (
        <article className={styles.card}>
            <h3 className={styles.card__title}>{title}</h3>
            <p className={styles.card__text}>{description}</p>
        </article>
    );
}
