import type { Metadata } from "next";
export const metadata: Metadata = {
  title: { absolute: "IPTV Formuler Canada — Best Setup Guide 2026 | Maple4K" },
  description: "Set up Maple4K IPTV on Formuler Z8, Z10, Z Alpha, and all Formuler Android TV boxes in Canada. 4K IPTV on your Formuler box — free trial from $9/month.",
  keywords: "iptv formula, iptv formuler canada, formuler z8 iptv canada, formuler z10 iptv, iptv formuler box canada, best iptv formuler canada",
  alternates: { canonical: "https://maple4k.ca/iptv-formula" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type":"ListItem","position":1,"name":"Maple4K","item":"https://maple4k.ca"},
    {"@type":"ListItem","position":2,"name":"IPTV Formuler Canada","item":"https://maple4k.ca/iptv-formula"}
  ]
};


const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {"@type":"Question","name":"What IPTV app should I use on a Formuler box in Canada?","acceptedAnswer":{"@type":"Answer","text":"For Formuler boxes in Canada, use MyTVOnline 3 — the built-in app designed specifically for IPTV. It supports Xtream Codes and M3U, full EPG, and 4K H.265 hardware playback with no extra app install."}},
    {"@type":"Question","name":"Which Formuler box is best for IPTV in Canada in 2026?","acceptedAnswer":{"@type":"Answer","text":"The Formuler Z10 Pro Max is the top pick for Canadian IPTV in 2026. It runs Android 9, has a Gigabit ethernet port, Dolby Vision support, and hardware 4K H.265 decoding — ideal for Maple4K's 4K streams."}},
    {"@type":"Question","name":"Is Maple4K compatible with Formuler Z8?","acceptedAnswer":{"@type":"Answer","text":"Yes — Maple4K is fully compatible with the Formuler Z8 and all Formuler models. Use MyTVOnline 3 or TiviMate on the Z8 with your Maple4K Xtream Codes credentials for 4K playback."}}
  ]
};

export default function IPTVFormulaPage() {
  return (
    <main style={{ background: "linear-gradient(to left, #daf0f2 0%, #fce8e4 100%)", color: "#000", minHeight: "100vh" }}>
      <section style={{ padding: "80px 16px 60px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <span style={{ background: "rgba(249,110,91,0.12)", border: "1px solid rgba(249,110,91,0.3)", color: "#F96E5B", fontSize: 12, fontWeight: 700, padding: "4px 14px", borderRadius: 999, textTransform: "uppercase" }}>IPTV Formuler · Canada · Maple4K</span>
          <div style={{ textAlign: "center", marginBottom: 8 }}>
          <span style={{ background: "rgba(63,154,174,0.12)", border: "1px solid rgba(63,154,174,0.25)", color: "#3F9AAE", fontSize: 12, fontWeight: 600, padding: "3px 12px", borderRadius: 999 }}>
            🗓 Last updated: April 2026
          </span>
        </div>
            <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 900, marginTop: 20, marginBottom: 16 }}>
            IPTV on Formuler Box Canada — <span style={{ color: "#F96E5B" }}>4K Setup Guide</span>
          </h1>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.7, maxWidth: 680, marginBottom: 28 }}>
            Formuler boxes are among the best IPTV players available in Canada — the Z8, Z10, and Z Alpha deliver hardware-accelerated 4K H.265 playback through the built-in MyTVOnline 3 app. Maple4K is fully optimized for all Formuler devices.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a href="/free-trial" style={{ background: "#F96E5B", color: "#fff", padding: "14px 36px", borderRadius: 10, fontWeight: 700, textDecoration: "none" }}>Try Free on Formuler →</a>
            <a href="/pricing" style={{ border: "2px solid rgba(249,110,91,0.5)", color: "#F96E5B", padding: "14px 36px", borderRadius: 10, fontWeight: 700, textDecoration: "none" }}>View Plans</a>
          </div>
        </div>
      </section>
      <section style={{ maxWidth: 900, margin: "0 auto", padding: "0 16px 60px" }}>
        <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 16 }}>How to Set Up Maple4K on Formuler</h2>
        <ol style={{ paddingLeft: 24, lineHeight: 2.4, fontSize: "1rem", marginBottom: 40 }}>
          {["Open MyTVOnline 3 on your Formuler Z8 / Z10 / Z Alpha","Select 'Add New Portal'","Enter the Maple4K M3U URL or Xtream Codes credentials provided after signup","Choose a profile name (e.g. 'Maple4K Canada')","Browse 25,000+ channels in Full 4K — sports, news, movies, and more"].map((step, i) => (
            <li key={i} style={{ marginBottom: 8 }}><strong>Step {i+1}:</strong> {step}</li>
          ))}
        </ol>
        <div style={{ background: "rgba(249,110,91,0.08)", border: "1px solid rgba(249,110,91,0.25)", borderRadius: 12, padding: 24, marginBottom: 40 }}>
          <p style={{ fontWeight: 700, color: "#F96E5B", marginBottom: 12 }}>Supported Formuler Models</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {["Formuler Z8","Formuler Z10","Formuler Z11 Pro","Formuler Z Alpha","Formuler GTV","Formuler CC","Formuler Z10 SE"].map(m => (
              <span key={m} style={{ background: "rgba(249,110,91,0.1)", border: "1px solid rgba(249,110,91,0.2)", borderRadius: 8, padding: "6px 14px", fontSize: 13, fontWeight: 600 }}>{m}</span>
            ))}
          </div>
        </div>
        <div style={{ background: "#1A3D45", borderRadius: 16, padding: 32, textAlign: "center" }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 800, color: "#fff", marginBottom: 12 }}>Get Maple4K for Your Formuler Box</h2>
          <p style={{ color: "rgba(255,255,255,0.8)", marginBottom: 24 }}>Free 24-hour trial. No credit card. Full 4K access on your Formuler.</p>
          <a href="/free-trial" style={{ background: "#F96E5B", color: "#fff", padding: "14px 40px", borderRadius: 10, fontWeight: 700, textDecoration: "none" }}>Start Free Trial →</a>
        </div>
      </section>
    </main>
  );
}
