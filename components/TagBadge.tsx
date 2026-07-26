export default function TagBadge({ tag }: { tag: string }) {
    return (
        <span
            className="rounded-full border border-zinc-300 px-3 py-1 text-sm dark:border-zinc-700"
        >
            #{tag}
        </span>
    )
}