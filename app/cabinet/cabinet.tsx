"use client";

import Link from "next/link";
import { useDemoAuth } from "../providers/useDemoAuth";
import styles from "./cabinet.module.css";

const CabinetView = () => {
    const { user, logout } = useDemoAuth();

    if (!user) {
        return (
            <main className={`${styles.cabinet} container`}>
                <h1 className={styles.cabinet__title}>Личный кабинет</h1>
                <p className={styles.cabinet__text}>
                    Войдите или зарегистрируйтесь, чтобы открыть кабинет.
                </p>
                <div className={styles.cabinet__actions}>
                    <Link
                        href="/auth/login"
                        className={styles.cabinet__link}
                    >
                        Вход
                    </Link>
                    <Link
                        href="/auth/register"
                        className={styles.cabinet__link}
                    >
                        Регистрация
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <main className={`${styles.cabinet} container`}>
            <h1 className={styles.cabinet__title}>Личный кабинет</h1>
            <p className={styles.cabinet__text}>
                Здравствуйте, {user.name}
            </p>
            <p className={styles.cabinet__email}>{user.email}</p>
            <button
                type="button"
                className={styles.cabinet__logout}
                onClick={logout}
            >
                Выйти
            </button>
        </main>
    );
};

export default CabinetView;
