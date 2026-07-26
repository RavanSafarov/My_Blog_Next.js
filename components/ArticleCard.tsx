import Link from "next/link";
import LikeArticleButton from "./LikeArticleButton";

export default function ArticleCard({ slug, title }: { slug: string, title: string }) {
    return (
        <Link href={`/blog/${slug}`}>
            <div className="rounded-lg border border-zinc-200 p-5 shadow-sm transition hover:shadow-md dark:border-zinc-700">
                <h2 className="mb-2 text-2xl font-semibold">
                    {title}
                </h2>

                <p className="text-zinc-600 dark:text-zinc-400">
                    Это временная статья-заглушка.
                </p>

                <LikeArticleButton />
            </div>
        </Link>
    )
}