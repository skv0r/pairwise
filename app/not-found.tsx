import Link from "next/link";
import styles from "./not-found.module.css"

export default function NotFound() {
    return (
        <main className={styles.notfound}>
            <p className={styles.notfound__text}>404 ха ха </p>
            <Link
                href="/"
                className={styles.notfound__return}
            >
                Вернуться на главную
            </Link>
        </main>
    );
}