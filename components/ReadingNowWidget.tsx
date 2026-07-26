"use client"
import { fetcher } from "@/utils/fetcher"
import useSWR from "swr"
export default function ReadingNowWidget({ slug }: { slug: string }) {
    const { data, error, isLoading } = useSWR(`/api/blog/${slug}/readers`, fetcher, {
        refreshInterval: 3000
    })
    if (error) {
        return <p>Не удалось загрузить количество читателей!!!</p>
    }
    
    if (isLoading) {
        return <p>Загрузка...</p>
    }
    return (
        <div>
            Сейчас читают: {data.count} человек
        </div>
    );
}