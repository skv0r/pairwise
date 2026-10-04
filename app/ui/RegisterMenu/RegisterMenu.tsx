"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, type SubmitEventHandler } from "react";
import { useDemoAuth } from "../../providers/useDemoAuth";
import Button from "../Button/Button";
import Input from "../Input/Input";
import styles from "./RegisterMenu.module.css";

const RegisterMenu = () => {
    const router = useRouter();
    const { register } = useDemoAuth();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordRepeat, setPasswordRepeat] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const handleSubmit: SubmitEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        setPasswordError("");

        if (password !== passwordRepeat) {
            setPasswordError("Пароли не совпадают");
            return;
        }

        const name = `${firstName.trim()} ${lastName.trim()}`.trim();
        register(name, email.trim());
        router.push("/cabinet");
    };

    return (
        <div className={styles.register}>
            <h1 className={styles.register__title}>Регистрация</h1>
            <form
                className={styles.register__form}
                onSubmit={handleSubmit}
            >
                <div className={styles.register__block}>
                    <Input
                        id="register-email"
                        name="email"
                        variant="email"
                        className={styles.register__item}
                        label="Email"
                        placeholder="name@example.com"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        required
                    />
                    <Input
                        id="register-first-name"
                        name="firstName"
                        variant="text"
                        className={styles.register__item}
                        label="Имя"
                        value={firstName}
                        onChange={(event) => setFirstName(event.target.value)}
                        required
                    />
                    <Input
                        id="register-last-name"
                        name="lastName"
                        variant="text"
                        className={styles.register__item}
                        label="Фамилия"
                        value={lastName}
                        onChange={(event) => setLastName(event.target.value)}
                        required
                    />
                    <Input
                        id="register-birthday"
                        name="birthday"
                        variant="date"
                        className={styles.register__item}
                        label="Дата рождения"
                        required
                    />
                    <Input
                        id="register-password"
                        name="password"
                        variant="password"
                        className={styles.register__item}
                        label="Пароль"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        required
                    />
                    <Input
                        id="register-password-repeat"
                        name="passwordRepeat"
                        variant="password"
                        className={styles.register__item}
                        label="Повторите пароль"
                        value={passwordRepeat}
                        onChange={(event) => setPasswordRepeat(event.target.value)}
                        required
                    />
                    {passwordError && (
                        <p
                            className={styles.register__error}
                            role="alert"
                        >
                            {passwordError}
                        </p>
                    )}
                    <Input
                        id="register-consent"
                        name="consent"
                        variant="checkbox"
                        className={styles.register__item}
                        label="Даю разрешение на обработку персональных данных"
                        required
                    />
                </div>
                <div className={styles.register__submit}>
                    <Button type="submit">Зарегистрироваться</Button>
                </div>
                <Link
                    href="/auth/login"
                    className={styles.register__link}
                >
                    Вход в аккаунт
                </Link>
            </form>
        </div>
    );
};

export default RegisterMenu;
