export default function NotFound() {
  return (
    <div className="rounded-xl bg-zinc-900 p-8 text-center shadow-xl">
      <h1 className="text-4xl font-bold text-white">Статья не найдена</h1>
      <p className="mt-3 text-zinc-400">Возможно, статья была удалена или ссылка неверная.</p>
    </div>
  );
}