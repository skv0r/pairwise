import Button from "../Button/Button";
import Input from "../Input/Input";
import styles from "./RegisterMenu.module.css";


const RegisterMenu = () => {
    return (
        <div className={styles.register}>
            <h1 className={styles.register__title}>Регистрация</h1>
            <form className={styles.register__form}>
                <Input variant="text"
                    className={styles.register__form__item}
                    label="Имя"
                    required
                />
                <Input variant="text"
                    className={styles.register__form__item}
                    label="Фамилия"
                    required
                />
                <Input variant="date"
                    className={styles.register__form__item}
                    label="Дата рождения"
                    required
                />
                <Input variant="password"
                    className={styles.register__form__item}
                    label="Пароль"
                    required
                />
                <Input variant="password"
                    className={styles.register__form__item}
                    label="Повторите пароль"
                    required
                />
                <Input variant="checkbox"
                    className={styles.register__form__item}
                    label="Даю разрешение на обработку персональных данных"
                    required
                />
                <div className={styles.register__form__submit}>
                    <Button type="submit">Зарегистрироваться</Button>
                </div>
            </form>
        </div>
    )

    
}

export default RegisterMenu;