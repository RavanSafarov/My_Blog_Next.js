import { articles } from "@/app/data/articles";
import { notFound } from "next/navigation";
import Link from "next/link";
import TagBadge from "@/app/components/TagBadge";
export default async function TagPage({ params, }: { params: Promise<{ tag: string }>; }) {
    const { tag } = await params;
    const filteredArticles = articles.filter((article) => article.tags.includes(tag));
    if (filteredArticles.length === 0) {
        notFound()
    }
    return (
        <main className="flex min-h-screen items-center justify-center bg-background text-foreground p-6">
            <section className="w-full max-w-3xl rounded-xl bg-white p-10 shadow-lg dark:bg-zinc-900">
                <h1 className="mb-6 text-4xl font-bold">
                    Статьи по тегу: #{tag}
                </h1>

                <div className="grid gap-5 md:grid-cols-2">
                    {filteredArticles.map((article) => (
                        <Link
                            key={article.slug}
                            href={`/blog/${article.slug}`}
                            className="rounded-xl border border-zinc-200 p-5 transition hover:shadow-md dark:border-zinc-700"
                        >
                            <div className="flex gap-5">
                                <div>
                                    <h2 className="mb-2 text-2xl font-semibold">
                                        {article.title}
                                    </h2>

                                    <div className="flex flex-wrap gap-2">
                                        {article.tags.map((tag) => (
                                            <TagBadge key={tag} tag={tag}/>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </main>
    )
}