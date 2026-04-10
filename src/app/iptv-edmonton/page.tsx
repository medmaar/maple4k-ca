import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best IPTV Service in Edmonton 2026 | Maple4K – From $9",
  description:
    "Maple4K is the best IPTV service in Edmonton. 25,000+ live channels, NHL Oilers, TSN, Sportsnet & CBC in 4K. Free 24h trial. From $9/month.",
  keywords: "IPTV Edmonton, best IPTV Edmonton 2026, IPTV service Edmonton Alberta, Edmonton IPTV subscription",
  alternates: { canonical: "https://maple4k.ca/iptv-edmonton" },
  openGraph: {
    title: "Best IPTV Service in Edmonton 2026 | Maple4K – From $9",
    description:
      "Maple4K is the best IPTV service in Edmonton. 25,000+ live channels, NHL Oilers, TSN, Sportsnet & CBC in 4K. Free 24h trial. From $9/month.",
    url: "https://maple4k.ca/iptv-edmonton",
    type: "website",
    siteName: "Maple4K",
  },
  twitter: { card: "summary_large_image" },
};

export default function IPTVEdmontonPage() {
  return (
    <main style={{ background: "#0a0a0a", color: "#fff", minHeight: "100vh" }}>
      {/* Hero */}
      <section
        style={{
          background: "linear-gradient(135deg, #0a0a0a 0%, #1a0505 100%)",
          padding: "80px 16px 60px",
        }}
      >
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <span
            style={{
              display: "inline-block",
              background: "rgba(229,57,53,0.12)",
              border: "1px solid rgba(229,57,53,0.3)",
              color: "#E53935",
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "6px 16px",
              borderRadius: 999,
              marginBottom: 24,
            }}
          >
            Maple4K · Edmonton, AB
          </span>
          <h1
            style={{
              fontSize: "clamp(32px, 5vw, 52px)",
              fontWeight: 900,
              lineHeight: 1.15,
              marginBottom: 20,
            }}
          >
            Best IPTV Service in Edmonton{" "}
            <span style={{ color: "#E53935" }}>2026</span>
          </h1>
          <p
            style={{
              color: "#9ca3af",
              fontSize: 17,
              lineHeight: 1.7,
              maxWidth: 680,
              marginBottom: 36,
            }}
          >
            Maple4K delivers the best Maple4K experience to Edmonton residents. Stream 25,000+ live channels
            including every Edmonton Oilers game on Sportsnet and TSN, CBC, CTV, and 120,000+ movies &amp; series — all in
            4K without a cable subscription.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <Link
              href="/pricing"
              style={{
                background: "#E53935",
                color: "#fff",
                fontWeight: 700,
                fontSize: 16,
                padding: "14px 32px",
                borderRadius: 12,
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              Get Your IPTV Plan →
            </Link>
            <Link
              href="/free-trial"
              style={{
                background: "transparent",
                border: "2px solid rgba(229,57,53,0.4)",
                color: "#E53935",
                fontWeight: 700,
                fontSize: 16,
                padding: "14px 32px",
                borderRadius: 12,
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              Try 24h Free
            </Link>
          </div>
        </div>
      </section>

      {/* Why Maple4K in Edmonton */}
      <section style={{ padding: "60px 16px", background: "#0d0d0d" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "clamp(24px, 3.5vw, 36px)",
              fontWeight: 800,
              marginBottom: 16,
            }}
          >
            Why Edmonton Residents Choose Maple4K
          </h2>
          <p style={{ color: "#9ca3af", fontSize: 15, lineHeight: 1.7, marginBottom: 36 }}>
            Edmonton is one of Canada&apos;s fastest-growing cities, and Maple4K&apos;s servers are
            optimized to deliver fast, buffer-free IPTV streams across Edmonton and the greater Alberta region.
            Whether you&apos;re in downtown Edmonton, St. Albert, Sherwood Park, or Spruce Grove, our IPTV
            Canada service delivers the same reliable 4K quality.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 20,
            }}
          >
            {[
              {
                title: "Every Oilers Game",
                desc: "Never miss an Edmonton Oilers game. All NHL games stream on Sportsnet and TSN feeds in HD and 4K — no blackouts.",
              },
              {
                title: "Alberta-Optimized Servers",
                desc: "Our Canadian IPTV servers are engineered for low latency across Alberta. Edmonton subscribers enjoy smooth, lag-free streaming.",
              },
              {
                title: "English & French Channels",
                desc: "Access CBC, CTV, Global, TSN, Sportsnet, RDS, TVA, and hundreds more Canadian channels in both English and French.",
              },
              {
                title: "Save $1,000+/year vs Cable",
                desc: "Edmonton cable bills average $100–$150/month. Maple4K starts at just $9/month.",
              },
            ].map((f) => (
              <div
                key={f.title}
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 16,
                  padding: "24px 20px",
                }}
              >
                <h3
                  style={{
                    fontWeight: 700,
                    fontSize: 16,
                    marginBottom: 8,
                    color: "#E53935",
                  }}
                >
                  {f.title}
                </h3>
                <p style={{ color: "#9ca3af", fontSize: 14, lineHeight: 1.6 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What channels */}
      <section style={{ padding: "60px 16px", background: "#0a0a0a" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "clamp(24px, 3.5vw, 36px)",
              fontWeight: 800,
              marginBottom: 16,
            }}
          >
            What Canadian Channels Do You Get in Edmonton?
          </h2>
          <p style={{ color: "#9ca3af", fontSize: 15, lineHeight: 1.7, marginBottom: 32 }}>
            Maple4K gives Edmonton viewers access to every major Canadian broadcast and sports network:
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 32 }}>
            {[
              "CBC",
              "CTV",
              "Global",
              "City TV",
              "TSN 1",
              "TSN 2",
              "TSN 3",
              "TSN 4",
              "TSN 5",
              "Sportsnet",
              "Sportsnet West",
              "Sportsnet ONE",
              "Sportsnet 360",
              "RDS",
              "TVA Sports",
              "CP24",
              "BNN Bloomberg",
              "CNN",
              "ESPN",
            ].map((ch) => (
              <span
                key={ch}
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 8,
                  padding: "8px 16px",
                  fontSize: 13,
                  fontWeight: 600,
                  color: "#d1d5db",
                }}
              >
                {ch}
              </span>
            ))}
          </div>
          <p style={{ color: "#6b7280", fontSize: 13 }}>
            + 25,000+ more channels including Sportsnet West regional Edmonton coverage
          </p>
        </div>
      </section>

      {/* Plans */}
      <section style={{ padding: "60px 16px", background: "#0d0d0d" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "clamp(24px, 3.5vw, 36px)",
              fontWeight: 800,
              marginBottom: 12,
              textAlign: "center",
            }}
          >
            IPTV Plans Available in Edmonton
          </h2>
          <p
            style={{
              color: "#9ca3af",
              fontSize: 15,
              textAlign: "center",
              marginBottom: 40,
            }}
          >
            All plans include 25,000+ channels, 4K streaming, and 24/7 support. Pay via Interac e-Transfer.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: 16,
              marginBottom: 32,
            }}
          >
            {[
              { name: "1 Month", price: "$9", href: "/pricing/1-month" },
              { name: "3 Months", price: "$29", href: "/pricing/3-months" },
              { name: "6 Months", price: "$49", href: "/pricing/6-months" },
              { name: "12 Months", price: "$49", href: "/pricing/12-months", best: true },
            ].map((plan) => (
              <Link
                key={plan.name}
                href={plan.href}
                style={{
                  background: plan.best ? "rgba(229,57,53,0.08)" : "rgba(255,255,255,0.03)",
                  border: plan.best
                    ? "1.5px solid rgba(229,57,53,0.4)"
                    : "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 16,
                  padding: "24px 16px",
                  textAlign: "center",
                  textDecoration: "none",
                  display: "block",
                }}
              >
                <div style={{ fontSize: 14, fontWeight: 600, color: "#d1d5db", marginBottom: 8 }}>
                  {plan.name}
                </div>
                <div
                  style={{ fontSize: 28, fontWeight: 900, color: "#E53935", marginBottom: 12 }}
                >
                  {plan.price}
                </div>
                <div style={{ fontSize: 12, color: "#6b7280" }}>25,000+ channels · 4K</div>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: "center" }}>
            <Link
              href="/pricing"
              style={{
                background: "#E53935",
                color: "#fff",
                fontWeight: 700,
                fontSize: 15,
                padding: "14px 32px",
                borderRadius: 12,
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              View All Maple4K Plans →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          padding: "60px 16px",
          textAlign: "center",
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(229,57,53,0.12) 0%, transparent 70%), #0a0a0a",
        }}
      >
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "clamp(24px, 3.5vw, 38px)",
              fontWeight: 900,
              marginBottom: 16,
            }}
          >
            Start Streaming in Edmonton Today
          </h2>
          <p style={{ color: "#9ca3af", marginBottom: 32, fontSize: 15, lineHeight: 1.7 }}>
            Join Edmonton residents who&apos;ve switched from cable to Maple4K. Try free for 24 hours —
            no credit card required.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              href="/free-trial"
              style={{
                background: "#E53935",
                color: "#fff",
                fontWeight: 700,
                fontSize: 15,
                padding: "14px 30px",
                borderRadius: 12,
                textDecoration: "none",
              }}
            >
              Get Free Trial
            </Link>
            <Link
              href="/pricing"
              style={{
                background: "transparent",
                border: "2px solid rgba(229,57,53,0.4)",
                color: "#E53935",
                fontWeight: 700,
                fontSize: 15,
                padding: "14px 30px",
                borderRadius: 12,
                textDecoration: "none",
              }}
            >
              View Pricing →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
