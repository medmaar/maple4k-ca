import type { Metadata } from "next";
import Link from "next/link";
import ReviewsSection from "../components/ReviewsSection";

export const metadata: Metadata = {
  title: { absolute: "Maple4K Reviews — Trustpilot, WhatsApp & Google | Maple4K IPTV Canada" },
  description: "Read verified Maple4K reviews from Trustpilot, WhatsApp, and Google. 50,000+ happy Canadian customers. See why Maple4K is Canada's top-rated IPTV service.",
  alternates: { canonical: "https://maple4k.ca/reviews" },
};


const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Maple4K",
  "url": "https://maple4k.ca",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "50000",
    "bestRating": "5",
    "worstRating": "1"
  }
};
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type":"ListItem","position":1,"name":"Home","item":"https://maple4k.ca"},
    {"@type":"ListItem","position":2,"name":"Reviews","item":"https://maple4k.ca/reviews"}
  ]
};
export default function ReviewsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    <main style={{ background: "#0C0F1A", minHeight: "100vh", color: "#fff" }}>

      {/* Hero */}
      <section style={{ padding: "80px 16px 48px", textAlign: "center" }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <span style={{ display: "inline-block", background: "rgba(232,4,31,0.12)", border: "1px solid rgba(232,4,31,0.3)", color: "#E8041F", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", padding: "6px 18px", borderRadius: 999, marginBottom: 24 }}>
            Verified Reviews
          </span>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 900, color: "#fff", lineHeight: 1.1, marginBottom: 16 }}>
            What Customers Say About{" "}
            <span style={{ color: "#E8041F" }}>Maple4K</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 15, lineHeight: 1.7, marginBottom: 40 }}>
            Real feedback from Trustpilot, WhatsApp &amp; Google — 50,000+ happy customers across Canada and worldwide.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 14 }}>
            {[
              { val: "5.0", label: "Trustpilot", color: "#00b67a" },
              { val: "50,000+", label: "Customers", color: "#00E5FF" },
              { val: "4.9★", label: "Google", color: "#FBBC04" },
              { val: "24/7", label: "Support", color: "#E8041F" },
            ].map(s => (
              <div key={s.val} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.09)", borderRadius: 14, padding: "14px 24px", textAlign: "center", minWidth: 100 }}>
                <div style={{ fontSize: 20, fontWeight: 900, color: s.color }}>{s.val}</div>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", marginTop: 4, fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section style={{ padding: "0 16px 80px", maxWidth: 1100, margin: "0 auto" }}>
        <ReviewsSection showHeader={false} />
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 16px", background: "#0E1120", borderTop: "1px solid rgba(255,255,255,0.06)", textAlign: "center" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 900, color: "#fff", marginBottom: 14 }}>
            Join 50,000+ Happy Customers
          </h2>
          <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: 32, fontSize: 15, lineHeight: 1.7 }}>
            Start with a free 24-hour trial — no credit card required.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/free-trial" style={{ background: "#E8041F", color: "#fff", padding: "14px 36px", borderRadius: 14, fontWeight: 700, fontSize: 16, textDecoration: "none", boxShadow: "0 6px 24px rgba(232,4,31,0.4)" }}>
              ▶ Free Trial 24H
            </Link>
            <Link href="/pricing" style={{ background: "transparent", border: "1px solid rgba(255,255,255,0.2)", color: "#fff", padding: "14px 36px", borderRadius: 14, fontWeight: 700, fontSize: 16, textDecoration: "none" }}>
              View Plans →
            </Link>
          </div>
        </div>
      </section>

    </main>
    </>
  );
}