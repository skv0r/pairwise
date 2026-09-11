import { spots } from "../data/spots";
import SpotCard from "../ui/SpotCard/SpotCard";
import styles from "./SpotPage.module.css";

const CatalogPage = () => {
    return (
        <main className={styles.catalog}>
            <ul className={styles.catalog__list}>
                {spots.map((spot) => (
                    <li
                        key={spot.id}
                        className={styles.catalog__item}
                    >
                        <SpotCard spot={spot} />
                    </li>
                ))}
            </ul>
        </main>
    );
};

export default CatalogPage;
