// import NeatBackground from "../../ui/NeatBackground/NeatBackground";
import RegisterMenu from "../../ui/RegisterMenu/RegisterMenu";
import styles from "./Register.module.css";

const RegisterPage = () => {
    return (
        <main className={styles.register}>
            {/* <NeatBackground /> */}
            <div className={styles.register__content}>
                <RegisterMenu />
            </div>
        </main>
    );
};

export default RegisterPage;