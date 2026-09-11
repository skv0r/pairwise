"use client"

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const ScrollToTop = () => {
    const pathname = usePathname();

    useEffect(()=> {
        window.scrollTo(0,0);

        const mainElement = document.querySelector("main");
        if (mainElement) {
            mainElement.scrollTop = 0;
        }
    }, [pathname])
    
    return null
}

export default ScrollToTop;