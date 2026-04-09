"use client";
import { useState } from "react";
import Link from "next/link";

const prices: Record<number, Record<string, number>> = {
  1:  { "1 Month": 9,   "3 Months": 29,  "6 Months": 39,  "1 Year": 49  },
  2:  { "1 Month": 18,  "3 Months": 50,  "6 Months": 69,  "1 Year": 89  },
  3:  { "1 Month": 27,  "3 Months": 75,  "6 Months": 105, "1 Year": 135 },
  4:  { "1 Month": 36,  "3 Months": 99,  "6 Months": 140, "1 Year": 180 },
  5:  { "1 Month": 45,  "3 Months": 120, "6 Months": 175, "1 Year": 225 },
  6:  { "1 Month": 54,  "3 Months": 144, "6 Months": 210, "1 Year": 270 },
  7:  { "1 Month": 63,  "3 Months": 168, "6 Months": 245, "1 Year": 315 },
  8:  { "1 Month": 72,  "3 Months": 192, "6 Months": 280, "1 Year": 360 },
  9:  { "1 Month": 81,  "3 Months": 216, "6 Months": 315, "1 Year": 405 },
  10: { "1 Month": 90,  "3 Months": 240, "6 Months": 350, "1 Year": 450 },
};

const durations = [
  { label: "1 Month",   slug: "1-month",  badge: null          },
  { label: "3 Months",  slug: "3-months", badge: null          },
  { label: "6 Months",  slug: "6-months", badge: "Most Popular" },
  { label: "1 Year",    slug: "1-year",   badge: "Best Value"  },
];

function href(n: number, slug: string): string {
  if (n === 1) {
    const map: Record<string, string> = {
      "1-month":  "/pricing/1-month",
      "3-months": "/pricing/3-months",
      "6-months": "/pricing/6-months",
      "1-year":   "/pricing/12-months",
    };
    return map[slug];
  }
  return `/pricing/${n}-devices/${slug}`;
}

export default function DeviceSelector() {
  const [selected, setSelected] = useState(1);
  const planPrices = prices[selected];

  return (
    <section
      style={{
        padding: "80px 16px",
        background: "#0d0d0d",
        borderTop: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Heading */}
        <p
          style={{
            textAlign: "center",
            color: "#E53935",
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: 12,
          }}
        >
          Multi-Device Plans
        </p>
        <h2
          style={{
            textAlign: "center",
            fontSize: "clamp(26px, 4vw, 38px)",
            fontWeight: 900,
            marginBottom: 8,
            color: "#fff",
          }}
        >
          How Many Devices Do You Need?
        </h2>
        <p
          style={{
            textAlign: "center",
            color: "#6b7280",
            marginBottom: 40,
            fontSize: 15,
          }}
        >
          Select your device count, then pick a plan.
        </p>

        {/* Device number buttons — horizontally scrollable */}
        <div
          style={{
            overflowX: "auto",
            WebkitOverflowScrolling: "touch",
            display: "flex",
            gap: 10,
            marginBottom: 12,
            paddingBottom: 4,
            scrollbarWidth: "none",
          }}
        >
          {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => {
            const active = n === selected;
            return (
              <button
                key={n}
                onClick={() => setSelected(n)}
                style={{
                  flexShrink: 0,
                  width: 52,
                  height: 52,
                  borderRadius: "50%",
                  border: active ? "none" : "1.5px solid rgba(229,57,53,0.35)",
                  background: active ? "#E53935" : "transparent",
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: 16,
                  cursor: "pointer",
                  opacity: active ? 1 : 0.4,
                  transition: "all .18s",
                }}
              >
                {n}
              </button>
            );
          })}
        </div>
        <p
          style={{
            textAlign: "center",
            color: "#9ca3af",
            fontSize: 13,
            marginBottom: 36,
          }}
        >
          {selected} Device{selected > 1 ? "s" : ""} selected
        </p>

        {/* Plan cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 18,
          }}
        >
          {durations.map(({ label, slug, badge }) => {
            const price = planPrices[label];
            const isPopular = label === "6 Months";
            return (
              <Link
                key={label}
                href={href(selected, slug)}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  background: isPopular ? "rgba(229,57,53,0.08)" : "rgba(255,255,255,0.03)",
                  border: isPopular ? "1.5px solid rgba(229,57,53,0.5)" : "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 18,
                  padding: "28px 22px",
                  textDecoration: "none",
                  color: "#fff",
                  position: "relative",
                  transition: "transform .15s",
                }}
              >
                {badge && (
                  <span
                    style={{
                      position: "absolute",
                      top: -12,
                      left: "50%",
                      transform: "translateX(-50%)",
                      background: "#E53935",
                      color: "#fff",
                      fontSize: 11,
                      fontWeight: 700,
                      padding: "3px 14px",
                      borderRadius: 999,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {badge}
                  </span>
                )}
                <p style={{ fontSize: 14, color: "#9ca3af", marginBottom: 6, fontWeight: 600 }}>
                  {label}
                </p>
                <p
                  style={{
                    fontSize: "clamp(2rem, 4vw, 2.4rem)",
                    fontWeight: 900,
                    color: "#E53935",
                    margin: "0 0 20px",
                  }}
                >
                  ${price}
                </p>
                <span
                  style={{
                    marginTop: "auto",
                    display: "block",
                    textAlign: "center",
                    padding: "10px 0",
                    borderRadius: 10,
                    background: isPopular ? "#E53935" : "rgba(229,57,53,0.15)",
                    color: isPopular ? "#fff" : "#E53935",
                    fontWeight: 700,
                    fontSize: 14,
                    border: isPopular ? "none" : "1px solid rgba(229,57,53,0.3)",
                  }}
                >
                  Order Now →
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
