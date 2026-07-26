// ISR
// Я выбрал ISR, потому что статьи обновляются нечасто.
// Страница генерируется заранее, поэтому загружается быстро.
// Благодаря revalidate = 30 она автоматически пересоздаётся примерно раз в 30 секунд, если данные изменились.
import ArticleCard from "@/components/ArticleCard";
import { articles } from "@/data/articles";

export const revalidate = 30;

export default function Home() {
  const lastUpdate = new Date().toLocaleString();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background text-foreground">
      <main className="grid w-full max-w-3xl gap-6 rounded-xl bg-white p-10 shadow-lg dark:bg-zinc-900">
        <h1 className="text-center text-4xl font-bold">
          My Home Work
        </h1>
        <div className="text-center">
          <p>Последнее обновление: {lastUpdate}</p>
        </div>
        {articles.map((article) => (
          <ArticleCard
            key={article.slug}
            slug={article.slug}
            title={article.title}
          />
        ))}
      </main>
    </div>
  );
}