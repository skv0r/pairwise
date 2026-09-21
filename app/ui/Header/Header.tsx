import Link from "next/link";
import styles from "./Header.module.css"
import logo from "../../../public/logo.svg"
import sun from "../../../public/sun.svg"
import Image from "next/image"


const navItems = [
    { name: "Главная", route: "/" },
    { name: "Каталог", route: "/catalog" },
    { name: "Карта", route: "/map" },
    { name: "Избранное", route: "/saved" },
    { name: "О нас", route: "/about" },
];

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
                {navItems.map( (item) => { 
                return (
                    <Link
                        key={item.route} 
                        href={item.route}
                        className={styles.navigation__item}
                    >
                        {item.name}
                    </Link>
                )})}
            </nav>
            <div className={styles.header__buttons}>
                <Image 
                    src={sun}
                    className={styles.header__switcher}
                    alt="Логотип" 
                    width={20}
                    height={20}
                />
                <Link
                    href="/auth/login"
                    className={styles.header__button}
                >Вход
                </Link>
            </div>
        </header>
    )
}

export default Header;
