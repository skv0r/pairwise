import Link from "next/link";
import styles from "./Header.module.css"


const Header = () => {
    return (
        <header className={styles.header}>
            <Link href="/"><img src=""
                alt="logo"
                           /></Link>
            <nav>
                <Link href="/"/>
            </nav>
            <button>Тема</button>
        </header>
    )
}

export default Header;