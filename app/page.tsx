// ISR
// Я выбрал ISR, потому что статьи обновляются нечасто.
// Страница генерируется заранее, поэтому загружается быстро.
// Благодаря revalidate = 30 она автоматически пересоздаётся примерно раз в 30 секунд, если данные изменились.
import LikeArticleButton from "@/components/LikeArticleButton";
export const revalidate = 30;
export default function Home() {
  const lastUpdate = new Date().toLocaleString();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background text-foreground">
      <main className="flex w-full max-w-3xl flex-col gap-6 rounded-xl bg-white p-10 shadow-lg dark:bg-zinc-900">
        <h1 className="text-center text-4xl font-bold">
          My Home Work
        </h1>
        <p>Последнее обновление: {lastUpdate}</p>
        <div className="rounded-lg border border-zinc-200 p-5 shadow-sm transition hover:shadow-md dark:border-zinc-700">
          <h2 className="mb-2 text-2xl font-semibold">
            Первая статья
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            Это временная статья-заглушка.
          </p>
          <LikeArticleButton />
        </div>

        <div className="rounded-lg border border-zinc-200 p-5 shadow-sm transition hover:shadow-md dark:border-zinc-700">
          <h2 className="mb-2 text-2xl font-semibold">
            Вторая статья
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            Это временная статья-заглушка.
          </p>
          <LikeArticleButton />
        </div>

        <div className="rounded-lg border border-zinc-200 p-5 shadow-sm transition hover:shadow-md dark:border-zinc-700">
          <h2 className="mb-2 text-2xl font-semibold">
            Третья статья
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            Это временная статья-заглушка.
          </p>
          <LikeArticleButton />
        </div>
      </main>
    </div>
  );
}