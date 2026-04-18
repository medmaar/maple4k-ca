"use client";
import { useRef, useState } from "react";

const plans = [
  { devices: 1,  prices: { "1 Month": 9,   "3 Months": 29,  "6 Months": 39,  "1 Year": 49  } },
  { devices: 2,  prices: { "1 Month": 18,  "3 Months": 50,  "6 Months": 69,  "1 Year": 89  } },
  { devices: 3,  prices: { "1 Month": 27,  "3 Months": 75,  "6 Months": 105, "1 Year": 135 } },
  { devices: 4,  prices: { "1 Month": 36,  "3 Months": 99,  "6 Months": 140, "1 Year": 180 } },
  { devices: 5,  prices: { "1 Month": 45,  "3 Months": 120, "6 Months": 175, "1 Year": 225 } },
  { devices: 6,  prices: { "1 Month": 54,  "3 Months": 144, "6 Months": 210, "1 Year": 270 } },
  { devices: 7,  prices: { "1 Month": 63,  "3 Months": 168, "6 Months": 245, "1 Year": 315 } },
  { devices: 8,  prices: { "1 Month": 72,  "3 Months": 192, "6 Months": 280, "1 Year": 360 } },
  { devices: 9,  prices: { "1 Month": 81,  "3 Months": 216, "6 Months": 315, "1 Year": 405 } },
  { devices: 10, prices: { "1 Month": 90,  "3 Months": 240, "6 Months": 350, "1 Year": 450 } },
];

const durations = ["1 Month", "3 Months", "6 Months", "1 Year"] as const;
type Duration = typeof durations[number];

// Same colors as HomePricing cards
const cardColors: Record<Duration, { bg: string; isLight: boolean; shadow: string }> = {
  "1 Month":  { bg: "#ffffff",  isLight: true,  shadow: "0 8px 24px rgba(63,154,174,0.15)" },
  "3 Months": { bg: "#2d6a78",  isLight: false, shadow: "0 8px 24px rgba(45,106,120,0.3)" },
  "6 Months": { bg: "#3F9AAE",  isLight: false, shadow: "0 12px 40px rgba(63,154,174,0.45)" },
  "1 Year":   { bg: "#F96E5B",  isLight: false, shadow: "0 12px 40px rgba(249,110,91,0.45)" },
};

const badgeLabels: Partial<Record<Duration, string>> = {
  "6 Months": "Popular",
  "1 Year":   "Best Value",
};

const badgeBg: Partial<Record<Duration, string>> = {
  "6 Months": "#F96E5B",
  "1 Year":   "#1A3D45",
};

const durationSlug: Record<Duration, string> = {
  "1 Month":  "1-month",
  "3 Months": "3-months",
  "6 Months": "6-months",
  "1 Year":   "1-year",
};

function orderHref(devices: number, dur: Duration): string {
  if (devices === 1) {
    const map: Record<Duration, string> = {
      "1 Month":  "/pricing/1-month",
      "3 Months": "/pricing/3-months",
      "6 Months": "/pricing/6-months",
      "1 Year":   "/pricing/12-months",
    };
    return map[dur];
  }
  return `/pricing/${devices}-devices/${durationSlug[dur]}`;
}

const features = [
  "25,000+ Live Channels",
  "120,000+ Movies & Series",
  "4K Ultra HD Quality",
  "NHL · TSN · Sportsnet · CTV",
  "PPV Events Included",
  "EPG & Catch-Up TV",
  "All Devices Supported",
  "24/7 Canadian Support",
];

export default function PricingSection() {
  const [activeDevices, setActiveDevices] = useState(1);
  const plan = plans.find((p) => p.devices === activeDevices)!;
  const scrollRef = useRef<HTMLDivElement>(null);

  function handleSelect(n: number) {
    setActiveDevices(n);
    requestAnimationFrame(() => {
      const btn = scrollRef.current?.querySelector<HTMLElement>(`[data-n="${n}"]`);
      btn?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    });
  }

  const connLabel = `${activeDevices} Connection${activeDevices > 1 ? "s" : ""}`;

  return (
    <section id="pricing-section" style={{ padding: "0 16px 60px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Header */}
        <p style={{ textAlign: "center", color: "#F96E5B", fontWeight: 700, fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 10 }}>
          PRICING PLANS
        </p>
        <h2 style={{ textAlign: "center", fontSize: "clamp(1.6rem,4vw,2.2rem)", fontWeight: 900, color: "#000000", marginBottom: 10 }}>
          Simple, Transparent Pricing
        </h2>
        <div style={{ textAlign: "center", marginBottom: 10 }}>
          <span style={{ display: "inline-block", background: "#F96E5B", color: "#fff", fontSize: 13, fontWeight: 700, padding: "5px 18px", borderRadius: 999 }}>
            50% OFF Today!
          </span>
        </div>
        <p style={{ textAlign: "center", color: "#000000", marginBottom: 32, fontSize: 15 }}>
          No contracts. No hidden fees. Instant activation after you order.
        </p>

        {/* Connection selector */}
        <div
          ref={scrollRef}
          style={{
            overflowX: "auto",
            overflowY: "visible",
            WebkitOverflowScrolling: "touch",
            display: "flex",
            gap: 8,
            marginBottom: 36,
            paddingBottom: 10,
            paddingTop: 6,
            scrollbarWidth: "none",
          } as React.CSSProperties}
        >
          {plans.map((p) => {
            const active = activeDevices === p.devices;
            return (
              <button
                key={p.devices}
                data-n={p.devices}
                onClick={() => handleSelect(p.devices)}
                style={{
                  flexShrink: 0,
                  padding: "8px 18px",
                  borderRadius: 999,
                  border: active ? "none" : "1.5px solid #1A3D45",
                  background: active ? "#1A3D45" : "transparent",
                  color: active ? "#E8F4F5" : "#1A3D45",
                  fontWeight: 700,
                  fontSize: 13,
                  cursor: "pointer",
                  opacity: active ? 1 : 0.5,
                  transition: "all .2s",
                  whiteSpace: "nowrap",
                  fontFamily: "inherit",
                }}
              >
                {p.devices} Connection{p.devices > 1 ? "s" : ""}
              </button>
            );
          })}
        </div>

        {/* Price cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20 }}>
          {durations.map((dur) => {
            const price = plan.prices[dur];
            const badge = badgeLabels[dur];
            const { bg, isLight, shadow } = cardColors[dur];
            const isYear = dur === "1 Year";
            return (
              <div
                key={dur}
                style={{
                  background: bg,
                  border: isLight ? "2px solid rgba(63,154,174,0.3)" : "none",
                  borderRadius: 20,
                  padding: "32px 24px",
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: shadow,
                }}
              >
                {badge && (
                  <span style={{
                    position: "absolute", top: -13, left: "50%",
                    transform: "translateX(-50%)",
                    background: badgeBg[dur], color: "#fff",
                    fontSize: 11, fontWeight: 800,
                    padding: "4px 14px", borderRadius: 999, whiteSpace: "nowrap",
                  }}>
                    {badge}
                  </span>
                )}
                <p style={{ fontSize: 16, fontWeight: 700, color: isLight ? "#1A3D45" : "#fff", marginBottom: 6 }}>{dur}</p>
                <div style={{ display: "flex", alignItems: "baseline", gap: 8, margin: "4px 0 16px" }}>
                  <span style={{ fontSize: "clamp(2rem,5vw,2.6rem)", fontWeight: 900, color: isLight ? "#F96E5B" : "#E8F4F5" }}>${price}</span>
                  <span style={{ fontSize: 12, color: isLight ? "#3F9AAE" : "rgba(255,255,255,0.65)" }}>/ {connLabel}</span>
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px", flex: 1 }}>
                  {isYear && (
                    <li style={{ marginBottom: 10, display: "flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.3)", borderRadius: 8, padding: "7px 10px" }}>
                      <span style={{ flexShrink: 0, fontSize: 14 }}>⭐</span>
                      <span style={{ fontSize: 13, color: "#fff", fontWeight: 600, lineHeight: 1.3 }}>IBO Player Subscription for Free</span>
                    </li>
                  )}
                  {features.map((f) => (
                    <li key={f} style={{ fontSize: 13, color: isLight ? "#1A3D45" : "rgba(255,255,255,0.9)", marginBottom: 6, display: "flex", alignItems: "center", gap: 8 }}>
                      <span style={{ color: isLight ? "#3F9AAE" : "#E8F4F5", fontWeight: 700, flexShrink: 0 }}>✓</span> {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={orderHref(activeDevices, dur)}
                  style={{
                    display: "block", textAlign: "center",
                    padding: "13px 0", borderRadius: 12,
                    background: isLight ? "#1A3D45" : "#E8F4F5",
                    color: isLight ? "#fff" : bg,
                    fontWeight: 800, fontSize: 14,
                    textDecoration: "none",
                  }}
                >
                  Get Started →
                </a>
              </div>
            );
          })}
        </div>

        <p style={{ textAlign: "center", color: "#000000", fontSize: 12, marginTop: 24, opacity: 0.6 }}>
          All plans include the same channels, VOD library, and features. Longer plans = lower monthly cost.
        </p>
      </div>
    </section>
  );
}
