import type { Metadata } from "next";
import ReviewsSection from "../components/ReviewsSection";

const reviewsPageSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Maple4K IPTV Canada",
  "description": "Canada's best 4K IPTV service. 25,000+ live channels, NHL, UFC, CFL. True H.265/HEVC 4K streaming from $9/month.",
  "brand": { "@type": "Brand", "name": "Maple4K" },
  "image": "https://maple4k.ca/og-image.jpg",
  "review": [
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "author": { "@type": "Person", "name": "Mike T." },
      "reviewBody": "Best IPTV service in Canada. NHL streams are crystal clear and never buffer. Switched from Bell and saving $120/month."
    },
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "author": { "@type": "Person", "name": "Sarah L." },
      "reviewBody": "Setup took 5 minutes on my Firestick. TSN and Sportsnet work perfectly in 4K. Support replied in under 10 minutes."
    },
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "author": { "@type": "Person", "name": "Jean-Pierre M." },
      "reviewBody": "Excellent service. Toutes les chaînes canadiennes en 4K. Je recommande fortement à tous les Canadiens."
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "312",
    "bestRating": "5",
    "worstRating": "1"
  },
  "offers": {
    "@type": "Offer",
    "price": "9.00",
    "priceCurrency": "CAD",
    "availability": "https://schema.org/InStock",
    "url": "https://maple4k.ca/pricing",
    "shippingDetails": {
      "@type": "OfferShippingDetails",
      "shippingRate": { "@type": "MonetaryAmount", "value": "0", "currency": "CAD" },
      "shippingDestination": { "@type": "DefinedRegion", "addressCountry": "CA" },
      "deliveryTime": {
        "@type": "ShippingDeliveryTime",
        "handlingTime": { "@type": "QuantitativeValue", "minValue": 0, "maxValue": 0, "unitCode": "MIN" },
        "transitTime": { "@type": "QuantitativeValue", "minValue": 0, "maxValue": 30, "unitCode": "MIN" }
      }
    },
    "hasMerchantReturnPolicy": {
      "@type": "MerchantReturnPolicy",
      "applicableCountry": "CA",
      "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
      "merchantReturnDays": 3,
      "returnMethod": "https://schema.org/ReturnByMail",
      "returnFees": "https://schema.org/FreeReturn"
    }
  }
};

export const metadata: Metadata = {
  title: { absolute: "Maple4K Reviews — Trustpilot, WhatsApp & Google | Maple4K IPTV Canada" },
  description: "Read verified Maple4K reviews from Trustpilot, WhatsApp, and Google. 50,000+ happy Canadian customers. See why Maple4K is Canada's top-rated IPTV service.",
  alternates: { canonical: "https://maple4k.ca/reviews" },
};

export default function ReviewsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsPageSchema) }} />
      <main style={{ background: "linear-gradient(to left, #daf0f2 0%, #fce8e4 100%)", minHeight: "100vh", color: "#000000" }}>

      {/* Hero */}
      <section style={{ padding: "48px 16px 32px" }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <div style={{ background: "#1A3D45", borderRadius: 24, padding: "28px 24px", boxShadow: "0 8px 32px rgba(26,61,69,0.25)", textAlign: "center" }}>
            <span style={{ display: "inline-block", background: "rgba(249,110,91,0.18)", border: "1px solid rgba(249,110,91,0.4)", color: "#F96E5B", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", padding: "5px 16px", borderRadius: 999, marginBottom: 20 }}>
              Verified Reviews
            </span>
            <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 900, color: "#ffffff", lineHeight: 1.1, marginBottom: 14 }}>
              What Customers Say About <span style={{ color: "#F96E5B" }}>Maple4K</span>
            </h1>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 14 }}>
              Real feedback from Trustpilot, WhatsApp & Google — 50,000+ happy customers across Canada and worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section style={{ padding: "32px 16px 60px", maxWidth: 1100, margin: "0 auto" }}>
        <ReviewsSection showHeader={false} />
      </section>

      {/* CTA */}
      <section style={{ padding: "60px 16px", background: "#1A3D45", textAlign: "center" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 900, color: "#ffffff", marginBottom: 14 }}>
            Join 50,000+ Happy Customers
          </h2>
          <p style={{ color: "rgba(255,255,255,0.75)", marginBottom: 28, fontSize: 15 }}>
            Try Maple4K free for 24 hours — no credit card required.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center" }}>
            <a href="/free-trial" style={{ background: "#F96E5B", color: "#fff", padding: "14px 32px", borderRadius: 12, fontWeight: 700, fontSize: 15, textDecoration: "none", boxShadow: "0 6px 20px rgba(249,110,91,0.4)" }}>
              Get Free Trial
            </a>
            <a href="/pricing" style={{ background: "transparent", border: "2px solid #79C9C5", color: "#79C9C5", padding: "14px 32px", borderRadius: 12, fontWeight: 700, fontSize: 15, textDecoration: "none" }}>
              View Plans
            </a>
          </div>
        </div>
      </section>

    </main>
    </>
  );
}
