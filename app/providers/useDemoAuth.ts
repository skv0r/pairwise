import { useContext } from "react";
import { DemoAuthContext } from "./DemoProvider";

export function useDemoAuth () {
    const ctx = useContext(DemoAuthContext)
    if (!ctx) throw new Error("useDemoAuth внутри провайдера")
    return ctx
}