import type { Metadata } from "next";
export const metadata: Metadata = {
  title: { absolute: "IPTV Subscription Canada 2026 — Best Plans from $9 | Maple4K" },
  description: "Get the best IPTV subscription in Canada. Monthly, quarterly and annual plans. No contracts, free trial. 25,000+ channels, 4K quality. IPTV subscription from $9/month.",
  keywords: "iptv subscription, iptv subscription canada, best iptv subscription canada, iptv subscription plans, cheap iptv subscription canada, iptv subscription 2026",
  alternates: { canonical: "https://maple4k.ca/iptv-subscription" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type":"ListItem","position":1,"name":"Maple4K","item":"https://maple4k.ca"},
    {"@type":"ListItem","position":2,"name":"IPTV Subscription","item":"https://maple4k.ca/iptv-subscription"}
  ]
};


const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {"@type":"Question","name":"How much does an IPTV subscription in Canada cost?","acceptedAnswer":{"@type":"Answer","text":"Maple4K IPTV subscriptions in Canada start at $9/month for 1 device. A 12-month IPTV subscription costs just $49 — the best value for Canadian subscribers."}},
    {"@type":"Question","name":"What's included in a Maple4K IPTV subscription?","acceptedAnswer":{"@type":"Answer","text":"Every Maple4K IPTV subscription includes 25,000+ live channels, 120,000+ on-demand movies and series, True 4K Ultra HD quality, 7-day catch-up TV, and full EPG guide on all devices."}},
    {"@type":"Question","name":"Can I cancel my IPTV subscription any time?","acceptedAnswer":{"@type":"Answer","text":"Yes — Maple4K has no contracts. You can subscribe month-to-month and cancel any time with no penalties or cancellation fees."}}
  ]
};

export default function IPTVSubscriptionPage() {
  return (
    <main style={{ background: "linear-gradient(to left, #daf0f2 0%, #fce8e4 100%)", color: "#000", minHeight: "100vh" }}>
      <section style={{ padding: "80px 16px 60px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <span style={{ background: "rgba(249,110,91,0.12)", border: "1px solid rgba(249,110,91,0.3)", color: "#F96E5B", fontSize: 12, fontWeight: 700, padding: "4px 14px", borderRadius: 999, textTransform: "uppercase" }}>IPTV Subscription Canada · Maple4K</span>
          <div style={{ textAlign: "center", marginBottom: 8 }}>
          <span style={{ background: "rgba(63,154,174,0.12)", border: "1px solid rgba(63,154,174,0.25)", color: "#3F9AAE", fontSize: 12, fontWeight: 600, padding: "3px 12px", borderRadius: 999 }}>
            🗓 Last updated: April 2026
          </span>
        </div>
            <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 900, marginTop: 20, marginBottom: 16 }}>
            IPTV Subscription Canada — <span style={{ color: "#F96E5B" }}>Plans from $9/Month</span>
          </h1>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.7, maxWidth: 680, marginBottom: 32 }}>
            Maple4K offers flexible IPTV subscription plans for Canadian customers — no contracts, no credit card required for the free trial. Start with a 1-month plan and upgrade any time. Every IPTV subscription includes 25,000+ live channels, 120,000+ on-demand titles, and True 4K Ultra HD quality.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(200px,1fr))", gap: 16, marginBottom: 40 }}>
            {[
              { plan: "1 Month", price: "$9", best: false },
              { plan: "3 Months", price: "$29", best: false },
              { plan: "6 Months", price: "$39", best: false },
              { plan: "12 Months", price: "$49", best: true },
            ].map(p => (
              <div key={p.plan} style={{ background: p.best ? "#F96E5B" : "#fff", borderRadius: 14, padding: 24, border: p.best ? "none" : "1px solid rgba(63,154,174,0.15)", textAlign: "center" }}>
                {p.best && <p style={{ color: "#fff", fontSize: 11, fontWeight: 700, marginBottom: 8, letterSpacing: "0.1em" }}>BEST VALUE</p>}
                <p style={{ fontWeight: 800, fontSize: 18, color: p.best ? "#fff" : "#000", marginBottom: 4 }}>{p.plan}</p>
                <p style={{ fontSize: 28, fontWeight: 900, color: p.best ? "#fff" : "#F96E5B", marginBottom: 12 }}>{p.price}</p>
                <a href="/pricing" style={{ display: "block", background: p.best ? "#fff" : "#F96E5B", color: p.best ? "#F96E5B" : "#fff", borderRadius: 8, padding: "10px 0", fontWeight: 700, textDecoration: "none", fontSize: 14 }}>Subscribe →</a>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a href="/free-trial" style={{ background: "#F96E5B", color: "#fff", padding: "14px 36px", borderRadius: 10, fontWeight: 700, textDecoration: "none" }}>Free Trial First →</a>
            <a href="/pricing" style={{ border: "2px solid rgba(249,110,91,0.5)", color: "#F96E5B", padding: "14px 36px", borderRadius: 10, fontWeight: 700, textDecoration: "none" }}>All Plans & Pricing</a>
          </div>
        </div>
      </section>
      <section style={{ maxWidth: 900, margin: "0 auto", padding: "0 16px 80px" }}>
        <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 16 }}>What&apos;s Included in Every IPTV Subscription</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))", gap: 12 }}>
          {["25,000+ Live Channels","120,000+ Movies & Series","True 4K Ultra HD","H.265/HEVC Streams","7-Day Catch-Up TV","Full EPG Guide","Multi-Device Options","24/7 Canadian Support","Free Setup Assistance"].map(f => (
            <div key={f} style={{ background: "#fff", borderRadius: 10, padding: "14px 18px", border: "1px solid rgba(63,154,174,0.12)", display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ color: "#3F9AAE", fontWeight: 800 }}>✓</span>
              <span style={{ fontSize: 14, fontWeight: 600 }}>{f}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Deep content section */}
      <section style={{ maxWidth: 900, margin: "0 auto", padding: "0 16px 60px" }}>
        <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 16 }}>What Is an IPTV Subscription and How Does It Work?</h2>
        <p style={{ color: "#333", lineHeight: 1.85, marginBottom: 16 }}>
          An IPTV subscription gives you access to live television channels delivered over your internet connection rather than a cable wire or satellite dish. When you subscribe to Maple4K, you receive a set of credentials — a server URL, username, and password — that you enter into an IPTV player app on your device. The app connects to Maple4K&apos;s Canadian servers and streams your chosen channel in real time, exactly like cable TV but at a fraction of the cost.
        </p>
        <p style={{ color: "#333", lineHeight: 1.85, marginBottom: 32 }}>
          Unlike cable or satellite, a Maple4K IPTV subscription isn&apos;t tied to a physical address. You can watch at home on your Smart TV, at the office on your laptop, or on the road on your phone — all with the same subscription. Each plan supports a set number of simultaneous streams, and you can upgrade at any time to add more screens.
        </p>

        <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 16 }}>Choosing the Right IPTV Subscription Plan for Canada</h2>
        <p style={{ color: "#333", lineHeight: 1.85, marginBottom: 16 }}>
          The right plan depends on how long you want to commit and how many devices you need. The 1-month plan at $9 is ideal if you want to test the service beyond the free 24-hour trial — you get full access for a month with no risk. The 3-month plan at $29 works well for most households, offering a meaningful saving over paying monthly. If you&apos;re ready to cut cable for good, the 12-month plan at $49 is the best IPTV subscription value in Canada: less than $5 per month for 25,000+ channels and 120,000+ on-demand titles.
        </p>
        <p style={{ color: "#333", lineHeight: 1.85, marginBottom: 32 }}>
          Multi-device plans are available for households where multiple family members watch simultaneously in different rooms. Contact us via WhatsApp before subscribing and we&apos;ll recommend the plan that best fits your household size.
        </p>

        <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 16 }}>What You Get With Every Maple4K IPTV Subscription</h2>
        <p style={{ color: "#333", lineHeight: 1.85, marginBottom: 16 }}>
          Every subscription tier includes the complete Maple4K channel lineup with no locked tiers or add-on fees. You get all 25,000+ live channels including every Canadian network — CBC, CTV, Global, City TV, CP24, TSN in all five regional feeds, Sportsnet in all regional feeds, and French-language channels including TVA, RDS, and Canal Vie. Sports are fully covered: every NHL game, every UFC PPV, all CFL games, NBA, NFL, and MLB — all with zero blackouts and zero extra charges.
        </p>
        <p style={{ color: "#333", lineHeight: 1.85, marginBottom: 16 }}>
          The 120,000+ VOD library covers the latest movies usually within a week of release, plus a comprehensive catalogue of TV series organized by genre, country, and year. Catch-up TV lets you replay content from the past 7 days on supported channels. The full EPG (electronic program guide) loads automatically so you can browse by channel or by time slot, just like a traditional cable guide.
        </p>
        <p style={{ color: "#333", lineHeight: 1.85, marginBottom: 32 }}>
          True 4K Ultra HD with H.265/HEVC encoding is available on all plans for channels that broadcast in 4K. If your TV or device supports HDR10 or Dolby Vision, compatible channels display in full HDR. On 1080p devices, streams automatically serve optimized HD quality. Setup is instant — credentials arrive within minutes of subscribing.
        </p>

        <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 16 }}>IPTV Subscription Canada vs Cable: The Real Cost Comparison</h2>
        <div style={{ background: "#fff", borderRadius: 14, padding: 24, border: "1px solid rgba(63,154,174,0.15)", marginBottom: 32 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16, textAlign: "center", marginBottom: 20 }}>
            {[["Bell Fibe TV", "$95–$130/mo", "~350 channels"],["Rogers Ignite", "$90–$125/mo", "~250 channels"],["Maple4K IPTV", "$9–$49/year", "25,000+ channels"]].map(([name, price, channels]) => (
              <div key={name} style={{ padding: 16, background: name === "Maple4K IPTV" ? "rgba(249,110,91,0.08)" : "transparent", borderRadius: 10, border: name === "Maple4K IPTV" ? "1px solid rgba(249,110,91,0.25)" : "none" }}>
                <p style={{ fontWeight: 700, marginBottom: 4 }}>{name}</p>
                <p style={{ color: "#F96E5B", fontWeight: 800, fontSize: "1.1rem", marginBottom: 4 }}>{price}</p>
                <p style={{ color: "#666", fontSize: 13 }}>{channels}</p>
              </div>
            ))}
          </div>
          <p style={{ color: "#333", fontSize: 14, lineHeight: 1.75 }}>
            The average Canadian household on Bell or Rogers pays $95–$130/month for TV alone — that&apos;s $1,140–$1,560 per year for a fraction of the channels. A 12-month Maple4K IPTV subscription costs $49 total. The annual saving is over $1,000 for most families, with access to more content, in higher quality, on more devices.
          </p>
        </div>

        <div style={{ background: "#1A3D45", borderRadius: 16, padding: 32, textAlign: "center" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#fff", marginBottom: 12 }}>Start Your IPTV Subscription Today</h2>
          <p style={{ color: "rgba(255,255,255,0.8)", marginBottom: 28, maxWidth: 500, margin: "0 auto 28px", lineHeight: 1.7 }}>Free 24-hour trial — no credit card. Full access to all 25,000+ channels. Subscribe from $9/month after your trial.</p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/free-trial" style={{ background: "#F96E5B", color: "#fff", padding: "14px 36px", borderRadius: 10, fontWeight: 700, textDecoration: "none" }}>Try Free First →</a>
            <a href="/pricing" style={{ border: "2px solid rgba(255,255,255,0.4)", color: "#fff", padding: "14px 36px", borderRadius: 10, fontWeight: 700, textDecoration: "none" }}>See All Plans</a>
          </div>
        </div>
      </section>

    </main>
  );
}
