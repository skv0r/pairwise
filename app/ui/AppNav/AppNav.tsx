"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./AppNav.module.css";

const navItems = [
    { name: "Главная", route: "/" },
    { name: "Каталог", route: "/catalog" },
    { name: "Карта", route: "/map" },
    { name: "Избранное", route: "/saved" },
    { name: "О нас", route: "/about" },
] as const;

function isActiveRoute(pathname: string, route: string) {
    if (route === "/") {
        return pathname === "/";
    }

    return pathname === route || pathname.startsWith(`${route}/`);
}

const AppNav = () => {
    const pathname = usePathname();

    return (
        <nav
            className={styles.nav}
            aria-label="Основная навигация"
        >
            {navItems.map((item) => {
                const isActive = isActiveRoute(pathname, item.route);

                return (
                    <Link
                        key={item.route}
                        href={item.route}
                        className={styles.nav__link}
                        aria-current={isActive ? "page" : undefined}
                    >
                        {item.name}
                    </Link>
                );
            })}
        </nav>
    );
};

export default AppNav;
