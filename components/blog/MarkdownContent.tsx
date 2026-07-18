function renderInline(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-semibold text-ink">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}

export default function MarkdownContent({ content }: { content: string }) {
  const blocks = content.trim().split(/\n\n+/);

  return (
    <div className="flex flex-col gap-5">
      {blocks.map((block, i) => {
        if (block.startsWith("## ")) {
          return (
            <h2 key={i} className="font-display text-[22px] sm:text-[26px] font-semibold text-ink tracking-tight mt-6 first:mt-0">
              {block.slice(3)}
            </h2>
          );
        }

        const lines = block.split("\n");

        if (lines.every((l) => /^\d+\.\s/.test(l))) {
          return (
            <ol key={i} className="flex flex-col gap-3 pl-5 list-decimal">
              {lines.map((l, j) => (
                <li key={j} className="text-[16px] leading-relaxed text-ink-soft pl-1">
                  {renderInline(l.replace(/^\d+\.\s/, ""))}
                </li>
              ))}
            </ol>
          );
        }

        if (lines.every((l) => l.startsWith("- "))) {
          return (
            <ul key={i} className="flex flex-col gap-3 pl-5 list-disc">
              {lines.map((l, j) => (
                <li key={j} className="text-[16px] leading-relaxed text-ink-soft pl-1">
                  {renderInline(l.slice(2))}
                </li>
              ))}
            </ul>
          );
        }

        return (
          <p key={i} className="text-[16px] leading-relaxed text-ink-soft">
            {renderInline(block)}
          </p>
        );
      })}
    </div>
  );
}
