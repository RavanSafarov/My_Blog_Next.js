export default function BlogLayout({children}: {children: React.ReactNode}) {
  return (
    <>
      <h1 className="text-4xl font-bold text-center">Блог</h1>
      {children}
    </>
  );
}