import Link from "next/link";
import { articles } from "../data/articles";
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
export default async function RelatedArticles({ currentSlug, tags, }: { currentSlug: string; tags: string[]; }) {
    await delay(2000);
    const relatedArticles = articles.filter((article) =>
        article.slug !== currentSlug &&
        article.tags.some((tag) => tags.includes(tag))
    );
    if (relatedArticles.length === 0) {
        return null;
    }
    return (
        <section className="mt-8 rounded-xl bg-zinc-950 p-6 shadow-xl">
            <h2 className="mb-4 text-2xl font-bold text-white">
                Похожие статьи
            </h2>

            <div className="flex flex-col gap-3">
                {relatedArticles.map((article) => (
                    <Link
                        key={article.slug}
                        href={`/blog/${article.slug}`}
                        className="rounded-lg border border-zinc-800 bg-zinc-900 p-4 text-zinc-100 transition-all duration-200 hover:border-zinc-600 hover:bg-zinc-800"
                    >
                        {article.title}
                    </Link>
                ))}
            </div>
        </section>
    );
}