import type { Metadata } from "next";
export const metadata: Metadata = {
  title: { absolute: "IPTV Subscription Canada 2026 — Best Plans from $9 | Maple4K" },
  description: "Get the best IPTV subscription in Canada. Monthly, quarterly and annual plans. No contracts, free trial. 25,000+ channels, 4K quality. IPTV subscription from $9/month.",
  keywords: "iptv subscription, iptv subscription canada, best iptv subscription canada, iptv subscription plans, cheap iptv subscription canada, iptv subscription 2026",
  alternates: { canonical: "https://maple4k.ca/iptv-subscription" },
};
export default function IPTVSubscriptionPage() {
  return (
    <main style={{ background: "linear-gradient(to left, #daf0f2 0%, #fce8e4 100%)", color: "#000", minHeight: "100vh" }}>
      <section style={{ padding: "80px 16px 60px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <span style={{ background: "rgba(249,110,91,0.12)", border: "1px solid rgba(249,110,91,0.3)", color: "#F96E5B", fontSize: 12, fontWeight: 700, padding: "4px 14px", borderRadius: 999, textTransform: "uppercase" }}>IPTV Subscription Canada · Maple4K</span>
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
    </main>
  );
}
