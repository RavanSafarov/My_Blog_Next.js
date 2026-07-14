import { notFound } from "next/navigation";

const articles = [
    "first-article",
    "second-article",
    "third-article",
];

export async function generateStaticParams() {
    return articles.map((slug) => ({ slug }));
}

export default async function ArticlePage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    if (!articles.includes(slug)) {
        notFound();
    }

    return (
        <div>
            <h1>{slug}</h1>
            <p>Это страница статьи.</p>
        </div>
    );
}