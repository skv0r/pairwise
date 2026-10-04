"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, type SubmitEventHandler } from "react";
import { useDemoAuth } from "../../providers/useDemoAuth";
import Button from "../Button/Button";
import Input from "../Input/Input";
import styles from "./LoginMenu.module.css";

const LoginMenu = () => {
    const router = useRouter();
    const { login } = useDemoAuth();
    const [email, setEmail] = useState("");

    const handleSubmit: SubmitEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        login(email.trim());
        router.push("/cabinet");
    };

    return (
        <div className={styles.login}>
            <h1 className={styles.login__title}>Вход</h1>
            <form
                className={styles.login__form}
                onSubmit={handleSubmit}
            >
                <div className={styles.login__block}>
                    <Input
                        id="login-email"
                        name="email"
                        variant="email"
                        className={styles.login__item}
                        label="Email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        required
                    />
                    <Input
                        id="login-password"
                        name="password"
                        variant="password"
                        className={styles.login__item}
                        label="Пароль"
                        required
                    />
                    <Input
                        id="login-remember"
                        name="remember"
                        variant="checkbox"
                        className={styles.login__item}
                        label="Запомнить логин и пароль"
                    />
                </div>
                <div className={styles.login__submit}>
                    <Button type="submit">Войти в аккаунт</Button>
                </div>
                <Link
                    href="/auth/register"
                    className={styles.login__link}
                >
                    Регистрация
                </Link>
            </form>
        </div>
    );
};

export default LoginMenu;
