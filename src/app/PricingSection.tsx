"use client";
import { useState } from "react";

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

const badges: Partial<Record<Duration, string>> = {
  "6 Months": "Most Popular",
  "1 Year":   "Best Value",
};

const durationSlug: Record<Duration, string> = {
  "1 Month":  "1-month",
  "3 Months": "3-months",
  "6 Months": "6-months",
  "1 Year":   "1-year",
};

function orderHref(devices: number, dur: Duration): string {
  if (devices === 1) {
    const oneDeviceMap: Record<Duration, string> = {
      "1 Month":  "/pricing/1-month",
      "3 Months": "/pricing/3-months",
      "6 Months": "/pricing/6-months",
      "1 Year":   "/pricing/12-months",
    };
    return oneDeviceMap[dur];
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

  return (
    <section id="pricing-section" style={{ background: "#10131E", color: "#fff", padding: "60px 16px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Header */}
        <p style={{ textAlign: "center", color: "#fd0322", fontWeight: 700, fontSize: 13, letterSpacing: 2, textTransform: "uppercase", marginBottom: 8 }}>
          PRICING PLANS
        </p>
        <h2 style={{ textAlign: "center", fontSize: "clamp(1.6rem,4vw,2.2rem)", fontWeight: 800, marginBottom: 8 }}>
          Simple, Transparent Pricing
        </h2>
        <div style={{ textAlign: "center", marginBottom: 8 }}>
          <span style={{ display: "inline-block", background: "#fd0322", color: "#fff", fontSize: 13, fontWeight: 700, padding: "5px 18px", borderRadius: 999 }}>
            50% OFF Today!
          </span>
        </div>
        <p style={{ textAlign: "center", color: "#aaa", marginBottom: 36, fontSize: 15 }}>
          No contracts. No hidden fees. Instant activation after you order.
        </p>

        {/* Device tabs */}
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 8, marginBottom: 36 }}>
          {plans.map((p) => (
            <button
              key={p.devices}
              onClick={() => setActiveDevices(p.devices)}
              style={{
                padding: "8px 18px",
                borderRadius: 999,
                border: activeDevices === p.devices ? "none" : "1px solid #333",
                background: activeDevices === p.devices ? "#fd0322" : "transparent",
                color: "#fff",
                fontWeight: 600,
                fontSize: 14,
                cursor: "pointer",
                transition: "all .2s",
              }}
            >
              {p.devices} {p.devices === 1 ? "Device" : "Devices"}
            </button>
          ))}
        </div>

        {/* Price cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20 }}>
          {durations.map((dur) => {
            const price = plan.prices[dur];
            const badge = badges[dur];
            const isPopular = dur === "6 Months";
            return (
              <div
                key={dur}
                style={{
                  background: isPopular ? "rgba(253,3,34,0.08)" : "#181C2A",
                  border: isPopular ? "2px solid #fd0322" : "1px solid #232840",
                  borderRadius: 16,
                  padding: "28px 24px",
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {badge && (
                  <span
                    style={{
                      position: "absolute",
                      top: -13,
                      left: "50%",
                      transform: "translateX(-50%)",
                      background: "#fd0322",
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
                <p style={{ fontSize: 14, color: "#aaa", marginBottom: 4 }}>{dur}</p>
                <p style={{ fontSize: "clamp(2rem,5vw,2.6rem)", fontWeight: 800, margin: "4px 0 16px" }}>
                  ${price}
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px", flex: 1 }}>
                  {features.map((f) => (
                    <li key={f} style={{ fontSize: 13, color: "#ccc", marginBottom: 6, display: "flex", alignItems: "center", gap: 8 }}>
                      <span style={{ color: "#fd0322", fontWeight: 700 }}>✓</span> {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={orderHref(activeDevices, dur)}
                  style={{
                    display: "block",
                    textAlign: "center",
                    padding: "11px 0",
                    borderRadius: 8,
                    border: isPopular ? "none" : "1px solid #fd0322",
                    background: isPopular ? "#fd0322" : "transparent",
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: 14,
                    textDecoration: "none",
                    transition: "all .2s",
                  }}
                >
                  Get Started →
                </a>
              </div>
            );
          })}
        </div>

        {/* Trust note */}
        <p style={{ textAlign: "center", color: "#555", fontSize: 12, marginTop: 28 }}>
          All plans include the same channels, VOD library, and features. Longer plans = lower monthly cost.
        </p>
      </div>
    </section>
  );
}
