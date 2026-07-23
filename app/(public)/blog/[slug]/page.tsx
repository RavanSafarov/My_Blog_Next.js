import { notFound } from "next/navigation";
import { articles } from "@/app/data/articles";
import { Suspense } from "react";
import RelatedArticles from "@/app/components/RelatedArticles";
import TagBadge from "@/app/components/TagBadge";
export async function generateStaticParams() {
    return articles.map((article) => ({
        slug: article.slug,
    }));
}

export default async function ArticlePage({ params, }: { params: Promise<{ slug: string }>; }) {
    const { slug } = await params;
    const random = Math.floor(Math.random() * 70) + 1;
    const article = articles.find((article) => article.slug === slug);
    if (!article) {
        notFound();
    }
    return (
        <main className="flex min-h-screen items-center justify-center bg-background text-foreground p-6">
            <article className="w-full max-w-3xl rounded-xl bg-white p-10 shadow-lg dark:bg-zinc-900">
                <img src={`https://i.pravatar.cc/150?img=${random}`} />
                <h1 className="mb-3 text-4xl font-bold">
                    {article.title}
                </h1>

                <p className="mb-8 text-zinc-600 dark:text-zinc-400">
                    Это страница статьи.
                </p>

                <div>
                    <h2 className="mb-3 text-lg font-semibold">
                        Теги:
                    </h2>

                    <div className="flex flex-wrap gap-2">
                        {article.tags.map((tag) => (
                            <TagBadge key={tag} tag={tag}/>
                        ))}
                    </div>
                </div>
                <Suspense fallback={<p>Загрузка похожих статей...</p>}>
                    <RelatedArticles currentSlug={article.slug} tags={article.tags} />
                </Suspense>
            </article>
        </main>
    );
}