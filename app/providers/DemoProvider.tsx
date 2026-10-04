"use client";

import {
    createContext,
    useMemo,
    useState,
    type ReactNode,
} from "react";

export type DemoUser = {
    name: string;
    email: string;
};

export type DemoAuthContextValue = {
    user: DemoUser | null;
    login: (email: string) => void;
    register: (name: string, email: string) => void;
    logout: () => void;
};

export const DemoAuthContext = createContext<DemoAuthContextValue | null>(null);

type DemoAuthProviderProps = Readonly<{
    children: ReactNode;
}>;

const DemoAuthProvider = ({ children }: DemoAuthProviderProps) => {
    const [user, setUser] = useState<DemoUser | null>(null);

    const value = useMemo<DemoAuthContextValue>(
        () => ({
            user,
            login(email: string) {
                const localPart = email.split("@")[0]?.trim();
                setUser({
                    name: localPart || "Пользователь",
                    email,
                });
            },
            register(name: string, email: string) {
                setUser({ name, email });
            },
            logout() {
                setUser(null);
            },
        }),
        [user],
    );

    return (
        <DemoAuthContext.Provider value={value}>
            {children}
        </DemoAuthContext.Provider>
    );
};

export default DemoAuthProvider;
