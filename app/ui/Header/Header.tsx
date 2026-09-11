import Link from "next/link";
import styles from "./Header.module.css"
import logo from "../../../public/logo.svg"
import sun from "../../../public/sun.svg"
import Image from "next/image"
import Button from "../Button/Button";


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
            <nav className={styles.navigation}>
                <Link
                    href="/"
                    className={styles.navigation__item}
                >Главная
                </Link>
                <Link
                    href="/catalog"
                    className={styles.navigation__item}
                >Каталог
                </Link>
                <Link
                    href="/map"
                    className={styles.navigation__item}
                >Карта
                </Link>
                <Link
                    href="/saved"
                    className={styles.navigation__item}
                >Избранное
                </Link>
                <Link 
                    href="/about"
                    className={styles.navigation__item}
                >О нас
                </Link>
            </nav>
            <div className={styles.header__buttons}>
                <Image 
                    src={sun}
                    className={styles.header__switcher}
                    alt="Логотип" 
                    width={20}
                    height={20}
                />
                <Button className={styles.header__button}>Вход</Button>
            </div>
        </header>
    )
}

export default Header;