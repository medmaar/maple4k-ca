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

const cardStyle: Record<Duration, { bg: string; accent: string; border: string; featured: boolean }> = {
  "1 Month":  { bg: "rgba(255,255,255,0.04)", accent: "#fff",    border: "rgba(255,255,255,0.1)",  featured: false },
  "3 Months": { bg: "rgba(255,255,255,0.06)", accent: "#79C9C5", border: "rgba(121,201,197,0.25)", featured: false },
  "6 Months": { bg: "rgba(232,4,31,0.08)",   accent: "#E8041F", border: "rgba(232,4,31,0.4)",     featured: true  },
  "1 Year":   { bg: "rgba(232,4,31,0.12)",   accent: "#E8041F", border: "rgba(232,4,31,0.6)",     featured: true  },
};

const badgeLabels: Partial<Record<Duration, string>> = {
  "6 Months": "Popular",
  "1 Year":   "Best Value ⭐",
};

const durationSlug: Record<Duration, string> = {
  "1 Month":  "1-month",
  "3 Months": "3-months",
  "6 Months": "6-months",
  "1 Year":   "1-year",
};

function orderHref(devices: number, dur: Duration): string {
  if (devices === 1) {
    return { "1 Month": "/pricing/1-month", "3 Months": "/pricing/3-months", "6 Months": "/pricing/6-months", "1 Year": "/pricing/12-months" }[dur];
  }
  return `/pricing/${devices}-devices/${durationSlug[dur]}`;
}

const features = [
  "50,000+ Channels + Netflix",
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
  const plan = plans.find(p => p.devices === activeDevices)!;
  const sliderRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  /* ── Drag-to-scroll on desktop ── */
  function onMouseDown(e: React.MouseEvent) {
    isDragging.current = true;
    startX.current = e.pageX - (sliderRef.current?.offsetLeft ?? 0);
    scrollLeft.current = sliderRef.current?.scrollLeft ?? 0;
    if (sliderRef.current) sliderRef.current.style.cursor = "grabbing";
  }
  function onMouseMove(e: React.MouseEvent) {
    if (!isDragging.current || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    sliderRef.current.scrollLeft = scrollLeft.current - (x - startX.current);
  }
  function onMouseUp() {
    isDragging.current = false;
    if (sliderRef.current) sliderRef.current.style.cursor = "grab";
  }

  const connLabel = `${activeDevices} Device${activeDevices > 1 ? "s" : ""}`;

  return (
    <section id="pricing-section" style={{ padding: "0 0 60px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* Badge */}
        <div style={{ textAlign: "center", marginBottom: 28, padding: "0 16px" }}>
          <span style={{ display: "inline-block", background: "#E8041F", color: "#fff", fontSize: 13, fontWeight: 700, padding: "6px 20px", borderRadius: 999, boxShadow: "0 4px 16px rgba(232,4,31,0.4)" }}>
            50% OFF Today!
          </span>
        </div>

        {/* ── Connection slider — horizontally scrollable, one row ── */}
        <div style={{ padding: "0 16px", marginBottom: 12 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 13, fontWeight: 600, margin: 0 }}>
              Select number of simultaneous devices:
            </p>
            <span style={{ color: "#E8041F", fontWeight: 800, fontSize: 14 }}>
              {connLabel}
            </span>
          </div>
          {/* Scrollable pill track */}
          <div
            ref={sliderRef}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseUp}
            style={{
              overflowX: "auto",
              overflowY: "visible",
              display: "flex",
              gap: 8,
              paddingBottom: 8,
              paddingTop: 4,
              cursor: "grab",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
              userSelect: "none",
            } as React.CSSProperties}
          >
            {plans.map(p => {
              const active = activeDevices === p.devices;
              return (
                <button
                  key={p.devices}
                  onClick={() => setActiveDevices(p.devices)}
                  style={{
                    flexShrink: 0,
                    padding: "10px 22px",
                    borderRadius: 999,
                    border: active ? "none" : "1.5px solid rgba(255,255,255,0.15)",
                    background: active ? "#E8041F" : "rgba(255,255,255,0.04)",
                    color: active ? "#fff" : "rgba(255,255,255,0.55)",
                    fontWeight: 700,
                    fontSize: 14,
                    cursor: "pointer",
                    transition: "all 0.22s cubic-bezier(0.34,1.56,0.64,1)",
                    whiteSpace: "nowrap",
                    fontFamily: "inherit",
                    boxShadow: active ? "0 4px 16px rgba(232,4,31,0.45)" : "none",
                    transform: active ? "scale(1.06)" : "scale(1)",
                  }}
                >
                  {p.devices} Device{p.devices > 1 ? "s" : ""}
                </button>
              );
            })}
          </div>
          {/* Scroll hint */}
          <p style={{ color: "rgba(255,255,255,0.25)", fontSize: 11, margin: "6px 0 0", textAlign: "center", fontStyle: "italic" }}>
            ← Slide to see more options →
          </p>
        </div>

        {/* Price cards */}
        <div style={{ padding: "0 16px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: 20, alignItems: "start", paddingTop: 20 }}>
            {durations.map(dur => {
              const price = plan.prices[dur];
              const badge = badgeLabels[dur];
              const { bg, accent, border, featured } = cardStyle[dur];
              const isYear = dur === "1 Year";
              return (
                <div
                  key={dur}
                  style={{
                    background: bg,
                    border: `1px solid ${border}`,
                    borderRadius: 20,
                    padding: "32px 24px",
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    transform: featured ? "scale(1.03)" : "scale(1)",
                    boxShadow: featured ? "0 12px 40px rgba(232,4,31,0.2)" : "none",
                    transition: "all 0.35s ease",
                  }}
                >
                  {badge && (
                    <span style={{
                      position: "absolute", top: -14, left: "50%",
                      transform: "translateX(-50%)",
                      background: "#E8041F", color: "#fff",
                      fontSize: 11, fontWeight: 800,
                      padding: "5px 16px", borderRadius: 999, whiteSpace: "nowrap",
                      boxShadow: "0 4px 12px rgba(232,4,31,0.4)",
                    }}>
                      {badge}
                    </span>
                  )}
                  <p style={{ fontSize: 15, fontWeight: 700, color: "#fff", margin: "0 0 6px" }}>{dur}</p>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 6, margin: "4px 0 16px" }}>
                    <span style={{ fontSize: "clamp(2rem,5vw,2.6rem)", fontWeight: 900, color: accent }}>${price}</span>
                    <span style={{ fontSize: 12, color: "rgba(255,255,255,0.45)" }}>/ {connLabel}</span>
                  </div>
                  <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px", flex: 1 }}>
                    {isYear && (
                      <li style={{ marginBottom: 10, display: "flex", alignItems: "center", gap: 8, background: "rgba(232,4,31,0.15)", border: "1px solid rgba(232,4,31,0.3)", borderRadius: 8, padding: "7px 10px" }}>
                        <span style={{ flexShrink: 0, fontSize: 14 }}>⭐</span>
                        <span style={{ fontSize: 13, color: "#fff", fontWeight: 600, lineHeight: 1.3 }}>IBO Player Subscription for Free</span>
                      </li>
                    )}
                    {features.map(f => (
                      <li key={f} style={{ fontSize: 13, color: "rgba(255,255,255,0.8)", marginBottom: 8, display: "flex", alignItems: "center", gap: 8 }}>
                        <span style={{ color: accent, fontWeight: 700, flexShrink: 0 }}>✓</span> {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={orderHref(activeDevices, dur)}
                    style={{
                      display: "block", textAlign: "center",
                      padding: "14px 0", borderRadius: 12,
                      background: featured ? "#E8041F" : "rgba(255,255,255,0.08)",
                      border: featured ? "none" : "1px solid rgba(255,255,255,0.15)",
                      color: "#fff", fontWeight: 800, fontSize: 14,
                      textDecoration: "none",
                      boxShadow: featured ? "0 4px 20px rgba(232,4,31,0.4)" : "none",
                    }}
                  >
                    Get Started →
                  </a>
                </div>
              );
            })}
          </div>
        </div>

        <p style={{ textAlign: "center", color: "rgba(255,255,255,0.3)", fontSize: 12, marginTop: 28, padding: "0 16px" }}>
          No contracts · No hidden fees · Instant activation · All plans include same channels &amp; VOD library
        </p>
      </div>
    </section>
  );
}
