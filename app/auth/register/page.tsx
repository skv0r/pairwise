import RegisterMenu from "../../ui/RegisterMenu/RegisterMenu";
import styles from "./Register.module.css";

const RegisterPage = () => {
    return (
        <main className={styles.register}>
            <div className={styles.register__content}>
                <RegisterMenu />
            </div>
        </main>
    );
};

export default RegisterPage;
