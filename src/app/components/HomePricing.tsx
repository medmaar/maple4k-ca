"use client";
import { useState } from "react";
import Link from "next/link";

const allPrices: Record<number, [number, number, number, number]> = {
  1:  [9,   29,  39,  49],
  2:  [18,  50,  69,  89],
  3:  [27,  75,  105, 135],
  4:  [36,  99,  140, 180],
  5:  [45,  120, 175, 225],
  6:  [54,  144, 210, 270],
  7:  [63,  168, 245, 315],
  8:  [72,  192, 280, 360],
  9:  [81,  216, 315, 405],
  10: [90,  240, 350, 450],
};

const planDefs = [
  { name: "1 Month",   badge: null,          slug: "1-month"   },
  { name: "3 Months",  badge: null,          slug: "3-months"  },
  { name: "6 Months",  badge: "Popular",     slug: "6-months"  },
  { name: "12 Months", badge: "Best Value",  slug: "12-months" },
];

const planFeatures = [
  "25,000+ Live Channels",
  "120,000+ Movies & Series",
  "4K Ultra HD Quality",
  "NHL · TSN · Sportsnet · CTV",
  "PPV Events Included",
  "EPG & Catch-Up TV",
  "All Devices Supported",
  "24/7 Canadian Support",
];

function getHref(n: number, slug: string): string {
  if (n === 1) return `/pricing/${slug}`;
  const multiSlug = slug === "12-months" ? "1-year" : slug;
  return `/pricing/${n}-devices/${multiSlug}`;
}

export default function HomePricing() {
  const [selected, setSelected] = useState(1);
  const prices = allPrices[selected];

  return (
    <section style={{ padding: "80px 16px", background: "#0a0a0a" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Header */}
        <p style={{ textAlign: "center", color: "#E53935", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>
          Transparent Pricing
        </p>
        <h2 style={{ textAlign: "center", fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 900, marginBottom: 12, color: "#fff" }}>
          Maple4K Subscription Plans
        </h2>
        <div style={{ textAlign: "center", marginBottom: 20 }}>
          <span style={{ display: "inline-block", background: "#E53935", color: "#fff", fontSize: 13, fontWeight: 700, padding: "5px 18px", borderRadius: 999 }}>
            50% OFF Today!
          </span>
        </div>
        <p style={{ textAlign: "center", color: "#6b7280", marginBottom: 36, fontSize: 15 }}>
          All plans include 25,000+ channels, 4K streaming, and 24/7 Canadian support. Pay via Interac e-Transfer.
        </p>

        {/* Connection selector */}
        <div
          style={{
            overflowX: "auto",
            WebkitOverflowScrolling: "touch" as React.CSSProperties["WebkitOverflowScrolling"],
            display: "flex",
            gap: 10,
            marginBottom: 40,
            paddingBottom: 6,
            scrollbarWidth: "none" as React.CSSProperties["scrollbarWidth"],
            justifyContent: "center",
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
                  padding: "9px 18px",
                  borderRadius: 999,
                  border: active ? "none" : "1.5px solid rgba(229,57,53,0.35)",
                  background: active ? "#E53935" : "transparent",
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: 13,
                  cursor: "pointer",
                  opacity: active ? 1 : 0.4,
                  transition: "all .18s",
                  whiteSpace: "nowrap",
                }}
              >
                {n} Connection{n > 1 ? "s" : ""}
              </button>
            );
          })}
        </div>

        {/* Plan cards — same design as before, now dynamic */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20 }}>
          {planDefs.map((plan, i) => (
            <div
              key={plan.name}
              style={{
                background: plan.badge === "Best Value" ? "rgba(229,57,53,0.08)" : "rgba(255,255,255,0.03)",
                border: plan.badge === "Best Value" ? "1.5px solid rgba(229,57,53,0.5)" : "1px solid rgba(255,255,255,0.08)",
                borderRadius: 20,
                padding: "32px 24px",
                position: "relative",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {plan.badge && (
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
                    padding: "4px 14px",
                    borderRadius: 999,
                    whiteSpace: "nowrap",
                  }}
                >
                  {plan.badge}
                </span>
              )}
              <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 8, color: "#fff" }}>{plan.name}</div>
              <div style={{ fontSize: 36, fontWeight: 900, color: "#E53935", marginBottom: 20 }}>${prices[i]}</div>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px", flex: 1 }}>
                {planFeatures.map((f) => (
                  <li key={f} style={{ fontSize: 13, color: "#9ca3af", marginBottom: 6, display: "flex", alignItems: "center", gap: 6, textAlign: "left" }}>
                    <span style={{ color: "#E53935", fontWeight: 700, flexShrink: 0 }}>✓</span> {f}
                  </li>
                ))}
              </ul>
              <Link
                href={getHref(selected, plan.slug)}
                style={{
                  display: "block",
                  background: plan.badge === "Best Value" ? "#E53935" : "rgba(229,57,53,0.15)",
                  color: plan.badge === "Best Value" ? "#fff" : "#E53935",
                  fontWeight: 700,
                  fontSize: 14,
                  padding: "12px 20px",
                  borderRadius: 12,
                  textDecoration: "none",
                  border: plan.badge === "Best Value" ? "none" : "1px solid rgba(229,57,53,0.3)",
                  textAlign: "center",
                }}
              >
                Get Started →
              </Link>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 32 }}>
          <Link href="/pricing" style={{ color: "#E53935", fontWeight: 600, fontSize: 14, textDecoration: "none" }}>
            View full pricing details →
          </Link>
        </div>
      </div>
    </section>
  );
}
