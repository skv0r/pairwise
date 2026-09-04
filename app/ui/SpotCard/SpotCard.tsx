import Link from "next/link";
import { SpotType } from "../../data/spots";
import styles from "./SpotCard.module.css";

type SpotCardProps = Readonly<{
    spot: SpotType;
}>;

const SpotCard = ({ spot }: SpotCardProps) => {
    return (
        <article className={styles.card}>
            <div className={styles.card__body}>
                <h2 className={styles.card__title}>{spot.name}</h2>
                <p className={styles.card__text}>{spot.description}</p>
                <p className={styles.card__stack}>
                    Stack на площадке: {spot.stack.join(" ")}
                </p>
            </div>
            <Link href={`/catalog/${spot.id}`}
                className={styles.card__link}
            >
                Перейти к площадке
            </Link>
        </article>
    );
};

export default SpotCard;
