import Link from "next/link";
import Image from "next/image";
import AppNav from "../AppNav/AppNav";
import styles from "./Header.module.css";
import logo from "../../../public/logo.svg";
import sun from "../../../public/sun.svg";

const Header = () => {
    return (
        <header className={styles.header}>
            <Link
                href="/"
                className={styles.header__logoLink}
            >
                <Image
                    src={logo}
                    alt="Логотип"
                    width={90}
                    height={30}
                />
            </Link>
            <AppNav />
            <div className={styles.header__buttons}>
                <Image
                    src={sun}
                    className={styles.header__switcher}
                    alt="Переключатель темы"
                    width={20}
                    height={20}
                />
                <Link
                    href="/auth/login"
                    className={styles.header__button}
                >
                    Вход
                </Link>
            </div>
        </header>
    );
};

export default Header;
