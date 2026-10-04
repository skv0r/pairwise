import Image from "next/image";
import Link from "next/link";
import { SpotType } from "../../data/spots";
import SkillTags from "../SkillTags/SkillTags";
import styles from "./SpotCard.module.css";

type SpotCardProps = Readonly<{
    spot: SpotType;
}>;

const SpotCard = ({ spot }: SpotCardProps) => {
    return (
        <article className={styles.card}>
            <div className={styles.card__media}>
                <Image
                    src={spot.image}
                    alt={spot.name}
                    fill
                    className={styles.card__image}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>
            <div className={styles.card__body}>
                <h2 className={styles.card__title}>{spot.name}</h2>
                <p className={styles.card__text}>{spot.description}</p>
            </div>
            <div className={styles.card__footer}>
                <div className={styles.card__skills}>
                    <SkillTags skills={spot.stack} />
                </div>
                <Link
                    href={`/catalog/${spot.id}`}
                    className={styles.card__link}
                >
                    Перейти к площадке
                </Link>
            </div>
        </article>
    );
};

export default SpotCard;
