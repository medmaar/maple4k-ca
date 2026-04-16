import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "IPTV Reseller Canada 2026 | Start Your IPTV Business – Maple4K",
  description:
    "Become an IPTV reseller in Canada with Maple4K. Wholesale pricing, white-label options, and a fast reseller panel. Start your own IPTV business today.",
  keywords: "IPTV reseller Canada, IPTV reseller program Canada 2026, start IPTV business Canada",
  alternates: { canonical: "https://maple4k.ca/reseller" },
  openGraph: {
    title: "IPTV Reseller Canada 2026 | Start Your IPTV Business – Maple4K",
    description: "Become an IPTV reseller in Canada with Maple4K. Wholesale pricing, white-label options, and a fast reseller panel. Start your own IPTV business today.",
    url: "https://maple4k.ca/reseller",
    type: "website",
    siteName: "Maple4K",
    locale: "en_CA",
    images: [{ url: "/favicon.svg", width: 512, height: 512, alt: "Maple4K IPTV Reseller Canada" }],
  },
  twitter: { card: "summary_large_image" },
};

const features = [
  {
    title: "Wholesale Pricing",
    desc: "Get deeply discounted subscription credits to resell to your clients. The more you buy, the more you save — with no minimum order requirements.",
    icon: "💰",
  },
  {
    title: "Your Own Brand",
    desc: "White-label our service under your own brand name. Your clients see your branding, your pricing, and your identity — powered by Maple4K's infrastructure.",
    icon: "🏷️",
  },
  {
    title: "Fast Panel Access",
    desc: "Manage all your clients from a single reseller dashboard. Create accounts, set expiry dates, monitor connections, and top up credits instantly.",
    icon: "⚡",
  },
];

export default function ResellerPage() {
  return (
    <main style={{ background: "#E8F4F5", color: "#000000", minHeight: "100vh" }}>
      {/* Hero */}
      <section
        style={{
          background: "radial-gradient(ellipse 80% 55% at 50% 0%, rgba(229,57,53,0.14) 0%, transparent 65%), #0a0a0a",
          padding: "90px 16px 70px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <span style={{ display: "inline-block", background: "rgba(229,57,53,0.12)", border: "1px solid rgba(229,57,53,0.3)", color: "#F96E5B", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", padding: "6px 18px", borderRadius: 999, marginBottom: 28 }}>
            IPTV Reseller Program
          </span>
          <h1 style={{ fontSize: "clamp(34px, 5.5vw, 58px)", fontWeight: 900, lineHeight: 1.1, marginBottom: 22 }}>
            Become an IPTV Reseller<br />
            <span style={{ color: "#F96E5B" }}>in Canada</span>
          </h1>
          <p style={{ color: "#000000", fontSize: 18, lineHeight: 1.7, maxWidth: 640, margin: "0 auto 36px" }}>
            Start your own IPTV business in Canada with Maple4K&apos;s reseller program. Wholesale pricing, white-label support, and a powerful management panel — everything you need to build a profitable IPTV business.
          </p>
          <a
            href="mailto:help@maple4k.ca?subject=IPTV%20Reseller%20Inquiry"
            style={{
              background: "#F96E5B",
              color: "#000000",
              fontWeight: 700,
              fontSize: 17,
              padding: "16px 36px",
              borderRadius: 14,
              textDecoration: "none",
              display: "inline-block",
            }}
          >
            Start Your IPTV Business Today →
          </a>
        </div>
      </section>

      {/* Feature cards */}
      <section style={{ padding: "80px 16px", background: "#E8F4F5" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 900, marginBottom: 48 }}>
            Everything You Need to Resell IPTV in Canada
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>
            {features.map((f) => (
              <div key={f.title} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 20, padding: "36px 28px", textAlign: "center" }}>
                <div style={{ fontSize: 40, marginBottom: 16 }}>{f.icon}</div>
                <h3 style={{ fontWeight: 800, fontSize: 18, marginBottom: 12, color: "#000000" }}>{f.title}</h3>
                <p style={{ color: "#000000", fontSize: 14, lineHeight: 1.7 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section style={{ padding: "80px 16px", background: "#E8F4F5" }}>
        <div style={{ maxWidth: 780, margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 900, marginBottom: 48 }}>
            How the Reseller Program Works
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              { n: "01", title: "Contact Us to Apply", desc: "Email help@maple4k.ca with your reseller inquiry. We'll respond within 5 minutes with pricing and details." },
              { n: "02", title: "Purchase Credits", desc: "Buy a credit package at wholesale rates. Credits are used to create and renew your clients' subscriptions." },
              { n: "03", title: "Access Your Panel", desc: "Log into your reseller dashboard to manage all client accounts — create, suspend, renew, and monitor in real time." },
              { n: "04", title: "Set Your Own Prices", desc: "You control your retail pricing. Sell subscriptions at whatever margin works for your business." },
              { n: "05", title: "Scale and Earn", desc: "Grow your client base with Maple4K's reliable 99.9% uptime infrastructure backing your brand." },
            ].map((s) => (
              <div key={s.n} style={{ display: "flex", gap: 20, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 14, padding: "22px 28px" }}>
                <span style={{ color: "#F96E5B", fontWeight: 900, fontSize: 24, opacity: 0.5, minWidth: 40 }}>{s.n}</span>
                <div>
                  <h3 style={{ fontWeight: 700, fontSize: 16, marginBottom: 8 }}>{s.title}</h3>
                  <p style={{ color: "#000000", fontSize: 14, lineHeight: 1.6 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why resell */}
      <section style={{ padding: "80px 16px", background: "#E8F4F5" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 900, marginBottom: 48 }}>
            Why Resell Maple4K IPTV in Canada?
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20 }}>
            {[
              { title: "Growing Market", desc: "Millions of Canadians are cutting cable. The Maple4K market is growing rapidly — perfect time to enter." },
              { title: "Recurring Revenue", desc: "Subscription renewals mean predictable monthly income. Retain clients with a reliable service they love." },
              { title: "No Infrastructure Costs", desc: "We handle all servers, content, and technical support. You focus on sales and customer relationships." },
              { title: "24/7 Backend Support", desc: "Our technical team supports your infrastructure around the clock so your clients are always satisfied." },
            ].map((f) => (
              <div key={f.title} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 16, padding: "24px 20px" }}>
                <h3 style={{ fontWeight: 700, fontSize: 15, marginBottom: 8, color: "#F96E5B" }}>{f.title}</h3>
                <p style={{ color: "#000000", fontSize: 13, lineHeight: 1.6 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 16px", textAlign: "center", background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(229,57,53,0.12) 0%, transparent 70%), #0a0a0a" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 900, marginBottom: 16 }}>
            Ready to Start Your IPTV Business?
          </h2>
          <p style={{ color: "#000000", marginBottom: 36, fontSize: 16, lineHeight: 1.7 }}>
            Contact us today to get started as an IPTV reseller in Canada. We&apos;ll walk you through the program and get your panel set up quickly.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="mailto:help@maple4k.ca?subject=IPTV%20Reseller%20Inquiry"
              style={{ background: "#F96E5B", color: "#000000", fontWeight: 700, fontSize: 16, padding: "16px 36px", borderRadius: 14, textDecoration: "none", display: "inline-block" }}
            >
              Email Us to Apply →
            </a>
            <Link
              href="/pricing"
              style={{ background: "transparent", border: "2px solid rgba(229,57,53,0.4)", color: "#F96E5B", fontWeight: 700, fontSize: 16, padding: "16px 36px", borderRadius: 14, textDecoration: "none", display: "inline-block" }}
            >
              View Retail Plans
            </Link>
          </div>
          <p style={{ color: "#4b5563", fontSize: 13, marginTop: 20 }}>
            help@maple4k.ca · Respond within 5 minutes
          </p>
        </div>
      </section>
    </main>
  );
}
