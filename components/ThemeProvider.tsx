"use client";

import { useEffect, useState } from "react";

export default function ThemeProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [theme, setTheme] = useState<"light" | "dark">("light");

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);

    return (
        <>
            <button
                onClick={toggleTheme}
                className="fixed right-5 top-5 rounded bg-zinc-200 px-4 py-2 dark:bg-zinc-800"
            >
                {theme === "light" ? "🌙 Темная" : "☀️ Светлая"}
            </button>

            {children}
        </>
    );
}