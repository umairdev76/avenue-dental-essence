import { Minus, Plus } from "lucide-react";
import { useState } from "react";

export function Faq({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-hairline border-y border-hairline">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <h3>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${i}`}
                className="flex w-full items-start justify-between gap-6 py-6 text-left transition-colors hover:text-teal"
              >
                <span className="font-display text-lg text-navy sm:text-xl">{item.q}</span>
                {isOpen ? (
                  <Minus className="mt-1 size-4 shrink-0 text-teal" aria-hidden="true" />
                ) : (
                  <Plus className="mt-1 size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
                )}
              </button>
            </h3>
            <div
              id={`faq-panel-${i}`}
              hidden={!isOpen}
              className="max-w-3xl pb-7 text-sm leading-relaxed text-muted-foreground"
            >
              {item.a}
            </div>
          </div>
        );
      })}
    </div>
  );
}
