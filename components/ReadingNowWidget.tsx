"use client"

import { fetcher } from "@/utils/fetcher"
import useSWR from "swr"
import { useEffect, useState } from "react"

export default function ReadingNowWidget({ slug, children }: { slug: string, children: React.ReactNode }) {
    const { data, error, isLoading } = useSWR(`/api/blog/${slug}/readers`, fetcher, { refreshInterval: 3000 })

    const [show, setShow] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(true)
        }, 1000)

        return () => clearTimeout(timer)
    }, [])

    if (error) {
        return <p>Не удалось загрузить количество читателей!!!</p>
    }

    if (isLoading) {
        return <p>Загрузка...</p>
    }

    return (
        <div className={`transition-all duration-500 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}>
            <p>
                Сейчас читают: {data.count} человек
            </p>

            {children}
        </div>
    );
}