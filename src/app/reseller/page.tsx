import type { Metadata } from "next";
import ResellerOrderForm from "./ResellerOrderForm";

export const metadata: Metadata = {
  title: "IPTV Reseller Canada 2026 | Start Your IPTV Business – Maple4K",
  description:
    "Become an IPTV reseller in Canada with Maple4K. Wholesale pricing, white-label options, and a fast reseller panel. Start your own IPTV business today.",
  keywords: "iptv resellers, best iptv resell, iptv reseller canada, iptv supplier, iptv server, iptv solutions, canadian iptv reseller, iptv provider canada",
  alternates: { canonical: "https://maple4k.ca/reseller" },
  openGraph: {
    title: "IPTV Reseller Canada 2026 | Start Your IPTV Business – Maple4K",
    description: "Become an IPTV reseller in Canada with Maple4K. Wholesale pricing, white-label options, and a fast reseller panel. Start your own IPTV business today.",
    url: "https://maple4k.ca/reseller",
    type: "website",
    siteName: "Maple4K",
    locale: "en_CA",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Maple4K IPTV Reseller Canada" }],
  },
  twitter: { card: "summary_large_image" },
};

const features = [
  { title: "Wholesale Pricing", desc: "Get deeply discounted subscription credits to resell to your clients. The more you buy, the more you save.", icon: "💰" },
  { title: "Your Own Brand", desc: "White-label our service under your own brand name. Your clients see your branding, powered by Maple4K's infrastructure.", icon: "🏷️" },
  { title: "Fast Panel Access", desc: "Manage all your clients from a single reseller dashboard. Create accounts, set expiry dates, and top up credits instantly.", icon: "⚡" },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://maple4k.ca" },
    { "@type": "ListItem", "position": 2, "name": "IPTV Reseller Canada", "item": "https://maple4k.ca/reseller" },
  ],
};
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "How do I become an IPTV reseller in Canada?", "acceptedAnswer": { "@type": "Answer", "text": "Contact Maple4K via WhatsApp or email to start your reseller account. You get a reseller panel, wholesale pricing, and white-label options to run your own IPTV business in Canada." } },
    { "@type": "Question", "name": "What is the minimum order for IPTV resellers?", "acceptedAnswer": { "@type": "Answer", "text": "Maple4K reseller plans start at 10 connections for $300/year, 50 connections for $1,250/year, or 100 connections for $2,300/year." } },
  ],
};

export default function ResellerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main style={{ background: "#0C0F1A", color: "#fff", minHeight: "100vh" }}>

        {/* Hero */}
        <section style={{ padding: "90px 16px 70px", textAlign: "center", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <span style={{ display: "inline-block", background: "rgba(232,4,31,0.12)", border: "1px solid rgba(232,4,31,0.3)", color: "#E8041F", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", padding: "6px 18px", borderRadius: 999, marginBottom: 28 }}>
              IPTV Reseller Program
            </span>
            <h1 style={{ fontSize: "clamp(34px, 5.5vw, 58px)", fontWeight: 900, lineHeight: 1.1, marginBottom: 22, color: "#ffffff" }}>
              Become an IPTV Reseller<br />
              <span style={{ color: "#E8041F" }}>in Canada</span>
            </h1>
            <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 17, lineHeight: 1.7, maxWidth: 620, margin: "0 auto 36px" }}>
              Start your own IPTV business with Maple4K&apos;s reseller program. Wholesale pricing, white-label support, and a powerful management panel — everything you need to build a profitable IPTV business.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 20, fontSize: 14, color: "rgba(255,255,255,0.7)" }}>
              <span><span style={{ color: "#79C9C5" }}>✓</span> No minimums</span>
              <span><span style={{ color: "#79C9C5" }}>✓</span> White-label panel</span>
              <span><span style={{ color: "#79C9C5" }}>✓</span> 99.9% uptime</span>
              <span><span style={{ color: "#79C9C5" }}>✓</span> Setup within minutes</span>
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section style={{ padding: "80px 16px" }}>
          <div style={{ maxWidth: 960, margin: "0 auto" }}>
            <p style={{ textAlign: "center", color: "#E8041F", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>Reseller Pricing — 1 Year</p>
            <h2 style={{ textAlign: "center", fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 900, marginBottom: 12, color: "#fff" }}>
              Choose Your Reseller Plan
            </h2>
            <p style={{ textAlign: "center", color: "rgba(255,255,255,0.6)", fontSize: 15, marginBottom: 52 }}>
              All plans include 1 full year of access, panel management, and 24/7 support.
            </p>
            <ResellerOrderForm />
          </div>
        </section>

        {/* Features */}
        <section style={{ padding: "80px 16px", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
          <div style={{ maxWidth: 960, margin: "0 auto" }}>
            <h2 style={{ textAlign: "center", fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 900, marginBottom: 48, color: "#fff" }}>
              Everything You Need to Resell IPTV
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>
              {features.map((f) => (
                <div key={f.title} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.09)", borderRadius: 20, padding: "36px 28px", textAlign: "center" }}>
                  <div style={{ fontSize: 40, marginBottom: 16 }}>{f.icon}</div>
                  <h3 style={{ fontWeight: 800, fontSize: 18, marginBottom: 12, color: "#fff" }}>{f.title}</h3>
                  <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 14, lineHeight: 1.7 }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section style={{ padding: "80px 16px", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
          <div style={{ maxWidth: 780, margin: "0 auto" }}>
            <h2 style={{ textAlign: "center", fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 900, marginBottom: 48, color: "#fff" }}>
              How the Reseller Program Works
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                { n: "01", title: "Pick Your Plan", desc: "Choose a reseller package above that fits the size of your business. Start with 10 connections and scale up anytime." },
                { n: "02", title: "Submit Your Order", desc: "Fill in your details and select a plan. We'll confirm your order via WhatsApp or email within minutes." },
                { n: "03", title: "Access Your Panel", desc: "Log into your reseller dashboard to manage all client accounts — create, suspend, renew, and monitor in real time." },
                { n: "04", title: "Set Your Own Prices", desc: "You control your retail pricing. Sell subscriptions at whatever margin works for your business." },
                { n: "05", title: "Scale and Earn", desc: "Grow your client base with Maple4K's reliable 99.9% uptime infrastructure backing your brand." },
              ].map((s) => (
                <div key={s.n} style={{ display: "flex", gap: 20, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 14, padding: "22px 28px" }}>
                  <span style={{ color: "#E8041F", fontWeight: 900, fontSize: 24, opacity: 0.5, minWidth: 40, flexShrink: 0 }}>{s.n}</span>
                  <div>
                    <h3 style={{ fontWeight: 700, fontSize: 16, marginBottom: 6, color: "#fff" }}>{s.title}</h3>
                    <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 14, lineHeight: 1.6 }}>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why resell */}
        <section style={{ padding: "80px 16px", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <h2 style={{ textAlign: "center", fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 900, marginBottom: 48, color: "#fff" }}>
              Why Resell Maple4K IPTV in Canada?
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20 }}>
              {[
                { title: "Growing Market", desc: "Millions of Canadians are cutting cable. The IPTV market is growing rapidly — perfect time to enter." },
                { title: "Recurring Revenue", desc: "Subscription renewals mean predictable monthly income. Retain clients with a reliable service they love." },
                { title: "No Infrastructure Costs", desc: "We handle all servers, content, and technical support. You focus on sales and customer relationships." },
                { title: "24/7 Backend Support", desc: "Our technical team supports your infrastructure around the clock so your clients are always satisfied." },
              ].map((f) => (
                <div key={f.title} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 16, padding: "24px 20px" }}>
                  <h3 style={{ fontWeight: 700, fontSize: 15, marginBottom: 8, color: "#E8041F" }}>{f.title}</h3>
                  <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 13, lineHeight: 1.6 }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: "80px 16px", textAlign: "center", borderTop: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.03)" }}>
          <div style={{ maxWidth: 600, margin: "0 auto" }}>
            <h2 style={{ fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 900, marginBottom: 16, color: "#fff" }}>
              Questions Before Ordering?
            </h2>
            <p style={{ color: "rgba(255,255,255,0.65)", marginBottom: 36, fontSize: 15, lineHeight: 1.7 }}>
              Contact us on WhatsApp or email — we respond within minutes and can walk you through the program.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <a
                href="/link/wa?msg=Hi%20Maple4K!%20I%27m%20interested%20in%20the%20reseller%20program."
                target="_blank"
                rel="noopener noreferrer"
                style={{ background: "#25D366", color: "#fff", fontWeight: 700, fontSize: 16, padding: "16px 36px", borderRadius: 14, textDecoration: "none", display: "inline-block" }}
              >
                📱 WhatsApp Us
              </a>
              <a
                href="mailto:help@maple4k.ca?subject=IPTV%20Reseller%20Inquiry"
                style={{ background: "transparent", border: "2px solid rgba(232,4,31,0.5)", color: "#E8041F", fontWeight: 700, fontSize: 16, padding: "16px 36px", borderRadius: 14, textDecoration: "none", display: "inline-block" }}
              >
                Email Us →
              </a>
            </div>
            <p style={{ color: "rgba(255,255,255,0.35)", fontSize: 13, marginTop: 20 }}>
              help@maple4k.ca · Reply within minutes
            </p>
          </div>
        </section>

      </main>
    </>
  );
}
