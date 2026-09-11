import Button from "../Button/Button";
import Input from "../Input/Input";
import styles from "./LoginMenu.module.css"

const LoginMenu = () => {
    return (
        <div className={styles.login}>
            <h1 className={styles.login__title}>Вход</h1>
            <form className={styles.login__form}>
                <div className={styles.login__block}>
                    <Input
                        variant="text"
                        className={styles.login__item}
                        label="Логин"
                        required
                    />
                    <Input
                        variant="password"
                        className={styles.login__item}
                        label="Пароль"
                        required
                    />
                    <Input
                        variant="checkbox"
                        className={styles.login__item}
                        label="Запомнить логин и пароль"
                        required
                    />
                </div>
                <div className={styles.login__submit}>
                    <Button type="submit">Войти в аккаунт</Button>
                </div>
            </form>
        </div>
    )
}

export default LoginMenu;