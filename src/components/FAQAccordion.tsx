import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { cn } from "../utils/cn";

export function FAQAccordion({ items }: { items: { question: string; answer: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="border-t border-boss-ink/15">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.question} data-reveal className="border-b border-boss-ink/15">
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="flex w-full items-center gap-4 py-5 text-left transition-colors hover:text-boss-olive"
            >
              <span className="grid h-5 w-5 shrink-0 place-items-center text-boss-olive">
                {isOpen ? <Minus size={15} /> : <Plus size={15} />}
              </span>
              <span className="font-body text-[14px] font-semibold text-boss-ink sm:text-[15px]">
                {item.question}
              </span>
            </button>
            <div className={cn("grid transition-all duration-500 ease-out", isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0")}>
              <div className="overflow-hidden">
                <p className="body-copy max-w-[780px] pb-5 pl-9 text-[13px]">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
