import { notFound } from "next/navigation";
import { articles } from "@/data/articles";
import { Suspense } from "react";
import RelatedArticles from "@/components/RelatedArticles";
import TagBadge from "@/components/TagBadge";
import ReadingNowWidget from "@/components/ReadingNowWidget";
import CommentForm from "@/components/CommentForm";
import { getComments } from "@/actions/comment-action";
export async function generateStaticParams() {
    return articles.map((article) => ({
        slug: article.slug,
    }));
}

export default async function ArticlePage({ params, }: { params: Promise<{ slug: string }>; }) {
    const { slug } = await params;
    const random = Math.floor(Math.random() * 70) + 1;
    const article = articles.find((article) => article.slug === slug);
    const comments = await getComments();
    if (!article) {
        notFound();
    }
    return (
        <main  className="flex min-h-screen items-center justify-center bg-zinc-100 p-6 text-black dark:bg-zinc-950 dark:text-white">
            <article className="w-full max-w-3xl rounded-xl bg-white p-10 shadow-lg dark:bg-zinc-900">
                <img src={`https://i.pravatar.cc/150?img=${random}`} />
                <h1 className="mb-3 text-4xl font-bold">
                    {article.title}
                </h1>
                <p className="mb-8 text-zinc-600 dark:text-zinc-400">
                    Это страница статьи.
                </p>

                <div>
                    <h2 className="mb-3 text-lg font-semibold text-black dark:text-white">
                        Теги:
                    </h2>
                    <div className="flex flex-wrap gap-2">
                        {article.tags.map((tag) => (
                            <TagBadge key={tag} tag={tag} />
                        ))}
                    </div>
                </div>
                <div className="mt-8">
                    <CommentForm />
                    <div className="mt-8 space-y-3">
                        <h2 className="text-xl font-bold">
                            Комментарии:
                        </h2>
                        {comments.map((comment, key) => (
                            <div key={key} className="rounded border border-zinc-300 p-3 dark:border-zinc-700">
                                <p className="font-bold">
                                    {comment.author}
                                </p>
                                <p>
                                    {comment.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
                <Suspense fallback={<p>Загрузка похожих статей...</p>}>
                    <ReadingNowWidget slug={slug}>
                        <RelatedArticles
                            currentSlug={article.slug}
                            tags={article.tags}
                        />
                    </ReadingNowWidget>
                </Suspense>
            </article>
        </main>
    );
}