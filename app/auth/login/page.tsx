import LoginMenu from "../../ui/LoginMenu/LoginMenu";
import styles from "./LoginPage.module.css"


const LoginPage = () => {
    return (
        <main className={styles.login}>
            <div className={styles.login__content}>
                <LoginMenu/>
            </div>
        </main>
    )
}

export default LoginPage;