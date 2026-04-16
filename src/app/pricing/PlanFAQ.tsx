"use client";
import { useState } from "react";

export interface FaqItem {
  q: string;
  a: string;
}

interface Props {
  items: FaqItem[];
}

export default function PlanFAQ({ items }: Props) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div
          key={i}
          className="rounded-2xl border overflow-hidden"
          style={{
            borderColor: open === i ? "rgba(121,201,197,0.5)" : "rgba(255,255,255,0.1)",
            background: open === i ? "rgba(121,201,197,0.08)" : "rgba(255,255,255,0.05)",
            transition: "border-color 0.2s, background 0.2s",
          }}
        >
          <button
            className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span className="font-semibold text-sm leading-snug" style={{ color: "#ffffff" }}>{item.q}</span>
            <span
              className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-lg font-bold"
              style={{
                color: "#ffffff",
                background: open === i ? "#F96E5B" : "rgba(255,255,255,0.12)",
                transform: open === i ? "rotate(45deg)" : "rotate(0deg)",
                transition: "transform 0.25s, background 0.2s",
              }}
            >
              +
            </span>
          </button>
          <div
            style={{
              maxHeight: open === i ? "400px" : "0",
              overflow: "hidden",
              transition: "max-height 0.3s ease",
            }}
          >
            <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 14, lineHeight: 1.7, padding: "0 20px 20px" }}>{item.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
