import type { Metadata } from "next";
export const metadata: Metadata = {
  title: { absolute: "Smart IPTV Canada — Best Smart TV IPTV Service 2026 | Maple4K" },
  description: "Stream IPTV on any Smart TV in Canada. Maple4K works on Samsung, LG, Android TV, Apple TV and all smart TVs. Free trial, 4K quality. Smart IPTV Canada from $9/month.",
  keywords: "smart iptv, smart iptv canada, iptv smart tv canada, best smart iptv canada, smart tv iptv canada, iptv samsung smart tv, iptv lg smart tv canada",
  alternates: { canonical: "https://maple4k.ca/smart-iptv" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type":"ListItem","position":1,"name":"Maple4K","item":"https://maple4k.ca"},
    {"@type":"ListItem","position":2,"name":"Smart IPTV Canada","item":"https://maple4k.ca/smart-iptv"}
  ]
};


const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {"@type":"Question","name":"What is Smart IPTV and how does it work?","acceptedAnswer":{"@type":"Answer","text":"Smart IPTV refers to streaming IPTV directly on a Smart TV without an external device. Samsung, LG, Sony, and Android TV Smart TVs can run IPTV apps like IPTV Smarters Pro natively. Maple4K supports all Smart TV brands."}},
    {"@type":"Question","name":"Does Maple4K work on Samsung Smart TV?","acceptedAnswer":{"@type":"Answer","text":"Yes — Maple4K works on Samsung Smart TVs via IPTV Smarters Pro or the Smart IPTV app from the Samsung App Store. Supports all Samsung Tizen models from 2017 onwards."}},
    {"@type":"Question","name":"Does Maple4K work on LG Smart TV?","acceptedAnswer":{"@type":"Answer","text":"Yes — Maple4K works on all LG webOS Smart TVs. Download Smart IPTV or IPTV Smarters from the LG Content Store, enter your Maple4K credentials, and stream all 25,000+ channels."}}
  ]
};

export default function SmartIPTVPage() {
  return (
    <main style={{ background: "linear-gradient(to left, #daf0f2 0%, #fce8e4 100%)", color: "#000", minHeight: "100vh" }}>
      <section style={{ padding: "80px 16px 60px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <span style={{ background: "rgba(249,110,91,0.12)", border: "1px solid rgba(249,110,91,0.3)", color: "#F96E5B", fontSize: 12, fontWeight: 700, padding: "4px 14px", borderRadius: 999, textTransform: "uppercase" }}>Smart IPTV · Canada · Maple4K</span>
          <div style={{ textAlign: "center", marginBottom: 8 }}>
          <span style={{ background: "rgba(63,154,174,0.12)", border: "1px solid rgba(63,154,174,0.25)", color: "#3F9AAE", fontSize: 12, fontWeight: 600, padding: "3px 12px", borderRadius: 999 }}>
            🗓 Last updated: April 2026
          </span>
        </div>
            <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 900, marginTop: 20, marginBottom: 16 }}>
            Smart IPTV Canada — Stream on <span style={{ color: "#F96E5B" }}>Any Smart TV</span>
          </h1>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.7, maxWidth: 680, marginBottom: 28 }}>
            Maple4K is Canada&apos;s best Smart IPTV service, fully compatible with Samsung, LG, Sony, Philips, and all Android TV smart TVs. No external device required on most Smart TVs — download the app and you&apos;re streaming 4K in minutes.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a href="/free-trial" style={{ background: "#F96E5B", color: "#fff", padding: "14px 36px", borderRadius: 10, fontWeight: 700, textDecoration: "none" }}>Try on Your Smart TV →</a>
            <a href="/pricing" style={{ border: "2px solid rgba(249,110,91,0.5)", color: "#F96E5B", padding: "14px 36px", borderRadius: 10, fontWeight: 700, textDecoration: "none" }}>View Plans</a>
          </div>
        </div>
      </section>
      <section style={{ maxWidth: 900, margin: "0 auto", padding: "0 16px 60px" }}>
        <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 20 }}>Compatible Smart TV Brands in Canada</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(200px,1fr))", gap: 14, marginBottom: 48 }}>
          {[
            { brand: "Samsung Smart TV", app: "IPTV Smarters / TiviMate", note: "Tizen OS" },
            { brand: "LG Smart TV", app: "IPTV Smarters / SmartIPTV", note: "webOS" },
            { brand: "Sony Bravia", app: "TiviMate / IPTV Smarters", note: "Google TV / Android TV" },
            { brand: "Android TV Box", app: "TiviMate (recommended)", note: "Best for 4K H.265" },
            { brand: "Apple TV 4K", app: "IPTV Smarters Pro", note: "Native 4K Dolby Vision" },
            { brand: "Amazon Fire TV", app: "TiviMate / IPTV Smarters", note: "Fire OS" },
            { brand: "Microsoft Edge Browser", app: "Web-based IPTV player", note: "Windows / Mac / Android" },
          ].map(tv => (
            <div key={tv.brand} style={{ background: "#fff", borderRadius: 14, padding: 20, border: "1px solid rgba(63,154,174,0.15)" }}>
              <p style={{ fontWeight: 700, fontSize: 15, marginBottom: 6 }}>📺 {tv.brand}</p>
              <p style={{ color: "#3F9AAE", fontSize: 13, fontWeight: 600, marginBottom: 4 }}>App: {tv.app}</p>
              <p style={{ color: "#666", fontSize: 12 }}>{tv.note}</p>
            </div>
          ))}
        </div>
        <div style={{ background: "#1A3D45", borderRadius: 16, padding: 32, textAlign: "center" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#fff", marginBottom: 12 }}>Start Smart IPTV on Your TV Today</h2>
          <p style={{ color: "rgba(255,255,255,0.8)", marginBottom: 24 }}>Free 24-hour trial. No credit card. Full 4K Smart IPTV access.</p>
          <a href="/free-trial" style={{ background: "#F96E5B", color: "#fff", padding: "14px 40px", borderRadius: 10, fontWeight: 700, textDecoration: "none" }}>Get Smart IPTV Free →</a>
        </div>
      </section>
    </main>
  );
}
