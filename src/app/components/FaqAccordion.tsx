"use client";
import { useState } from "react";

interface FaqItem { q: string; a: string; }
const DEFAULT_ITEMS: FaqItem[] = [];
export default function FaqAccordion({ items = DEFAULT_ITEMS }: { items?: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      {items.map((item, i) => (
        <div
          key={item.q}
          className="faq-item"
          style={{
            borderColor: open === i ? "rgba(232,4,31,0.4)" : undefined,
            background: open === i ? "rgba(232,4,31,0.04)" : undefined,
          }}
        >
          <button
            className="faq-trigger"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span>{item.q}</span>
            <svg
              className={`faq-icon ${open === i ? "open" : ""}`}
              width="18" height="18" viewBox="0 0 24 24" fill="none"
              stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
          <div className={`faq-content ${open === i ? "open" : ""}`}>
            <p className="faq-body">{item.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
