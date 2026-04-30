import type { Metadata } from "next";
import PlanOrderForm from "../../PlanOrderForm";
import PlanFAQ, { type FaqItem } from "../../PlanFAQ";

export const metadata: Metadata = {
  title: { absolute: "6 Connections IPTV Canada 1 Year — $270 | Maple4K" },
  description:
    "Get 6 simultaneous connections for $270. 25,000+ live channels, 4K quality, NHL, TSN, CTV and more. No contract. Credentials sent within minutes.",
  alternates: { canonical: "https://maple4k.ca/pricing/6-devices/1-year" },
};

const faqItems: FaqItem[] = [
  {
    q: "How many devices can stream at the same time with this plan?",
    a: "This plan supports exactly 6 simultaneous connections. All 6 devices can stream different channels at the same time on your account.",
  },
  {
    q: "How do I receive my login credentials after ordering?",
    a: "After placing your order our team will send your login credentials directly to your email within minutes. Check your spam folder if you don't see it.",
  },
  {
    q: "Which devices are compatible?",
    a: "Our service works on Amazon Firestick, Samsung and LG Smart TVs, Android boxes, Android phones and tablets, iPhone, iPad, Apple TV, MAG boxes, Windows PCs and Macs.",
  },
  {
    q: "Can I watch live Canadian channels?",
    a: "Yes — every plan includes TSN, Sportsnet, CBC, CTV, Global, City TV, RDS, TVA and all regional Canadian channels in HD and 4K. Every NHL, NFL, NBA and CFL game is covered.",
  },
  {
    q: "What happens when my subscription expires?",
    a: "You will receive a reminder before expiry. Simply place a new order to renew or upgrade to a longer plan for better savings. There are no automatic charges and no contracts.",
  },
  {
    q: "How do I get support if something stops working?",
    a: "Our Canadian support team is available 24/7 via WhatsApp (contact us via WhatsApp form) and email in English and French. Most issues are resolved within minutes.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Maple4K 1 Year IPTV Plan — 6 Devices",
  description: "1 Year of IPTV access for 6 simultaneous connections. 25,000+ live channels in Canada including NHL, TSN, CTV, Sportsnet and 120,000+ VOD titles in 4K.",
  brand: { "@type": "Brand", name: "Maple4K" },
  "image": "https://maple4k.ca/og-image.jpg",
  "review": {
    "@type": "Review",
    "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
    "author": { "@type": "Person", "name": "Marc D." },
    "reviewBody": "Best IPTV service in Canada. Works perfectly on my Firestick with zero buffering. TSN and Sportsnet in 4K — incredible."
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "312",
    "bestRating": "5",
    "worstRating": "1"
  },
  offers: {
    "@type": "Offer",
    price: "270.00",
    priceCurrency: "CAD",
    availability: "https://schema.org/InStock",
    url: "https://maple4k.ca/pricing/6-devices/1-year",
    "shippingDetails": {
      "@type": "OfferShippingDetails",
      "shippingRate": { "@type": "MonetaryAmount", "value": "0", "currency": "CAD" },
      "shippingDestination": { "@type": "DefinedRegion", "addressCountry": "CA" },
      "deliveryTime": {
        "@type": "ShippingDeliveryTime",
        "handlingTime": { "@type": "QuantitativeValue", "minValue": 0, "maxValue": 0, "unitCode": "HUR" },
        "transitTime": { "@type": "QuantitativeValue", "minValue": 0, "maxValue": 0, "unitCode": "HUR" }
      }
    },
    "hasMerchantReturnPolicy": {
      "@type": "MerchantReturnPolicy",
      "applicableCountry": "CA",
      "returnPolicyCategory": "https://schema.org/MerchantReturnNotPermitted"
    },
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <main style={{ background: "linear-gradient(to left, #daf0f2 0%, #fce8e4 100%)", color: "#000000", minHeight: "100vh" }}>
        <section
          className="py-20 px-4"
          style={{
            background:
              "transparent",
          }}
        >
          <div className="max-w-2xl mx-auto">
            {/* 1. Page title */}
            <div style={{ background: "#1A3D45", borderRadius: 24, padding: "28px 24px", boxShadow: "0 8px 32px rgba(26,61,69,0.25)", marginBottom: 24, textAlign: "center" }}>
              <span style={{ background: "rgba(249,110,91,0.18)", border: "1px solid rgba(249,110,91,0.4)", color: "#F96E5B", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", padding: "5px 16px", borderRadius: 999, display: "inline-block", marginBottom: 20 }}>
                Maple4K · 1 Year · 6 Devices
              </span>
              <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 900, color: "#ffffff", lineHeight: 1.1, marginBottom: 16 }}>
                1 Year - 6 Devices
              </h1>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14, marginBottom: 16 }}>
                <span style={{ color: "#F96E5B", fontWeight: 900, fontSize: "2.4rem" }}>Price : $270</span>
                <span style={{ background: "#F96E5B", color: "#fff", fontWeight: 700, fontSize: 12, padding: "5px 14px", borderRadius: 999 }}>50% OFF</span>
              </div>
              <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 13 }}>Fill out the form below — credentials sent within minutes</p>
            </div>
            {/* 3. Order Form */}
            <div
              className="rounded-3xl p-6 md:p-8 border mb-16"
              style={{
                background: "#1A3D45",
                borderColor: "rgba(121,201,197,0.2)", boxShadow: "0 8px 32px rgba(26,61,69,0.25)",
              }}
            >
              <PlanOrderForm plan="1 Year - 6 Devices — $270" />
            </div>

            {/* 4. FAQ */}
            <div style={{ background: "#1A3D45", borderRadius: 24, padding: "32px", boxShadow: "0 8px 32px rgba(26,61,69,0.25)", marginBottom: 32 }}>
              <p
                className="text-xs font-bold uppercase tracking-widest mb-2"
                style={{ color: "#F96E5B" }}
              >
                FAQ
              </p>
              <h2 style={{ color: "#ffffff", fontSize: "1.4rem", fontWeight: 800, marginBottom: 24 }}>
                Frequently Asked Questions
              </h2>
              <PlanFAQ items={faqItems} />
            
            {/* Internal Links */}
            <div style={{ marginTop: 32, background: "rgba(255,255,255,0.06)", borderRadius: 16, padding: "24px 20px" }}>
              <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 12, fontWeight: 600, textAlign: "center", marginBottom: 16, textTransform: "uppercase", letterSpacing: "0.08em" }}>Explore More Plans</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center", marginBottom: 14 }}>
                <a href="/pricing/1-month" style={{ background: "rgba(255,255,255,0.1)", color: "#fff", borderRadius: 999, padding: "6px 16px", fontSize: 13, fontWeight: 600, textDecoration: "none" }}>1 Month — $9</a>
                <a href="/pricing/3-months" style={{ background: "rgba(255,255,255,0.1)", color: "#fff", borderRadius: 999, padding: "6px 16px", fontSize: 13, fontWeight: 600, textDecoration: "none" }}>3 Months — $29</a>
                <a href="/pricing/6-months" style={{ background: "rgba(255,255,255,0.1)", color: "#fff", borderRadius: 999, padding: "6px 16px", fontSize: 13, fontWeight: 600, textDecoration: "none" }}>6 Months — $39</a>
                <a href="/pricing/12-months" style={{ background: "#F96E5B", color: "#fff", borderRadius: 999, padding: "6px 16px", fontSize: 13, fontWeight: 700, textDecoration: "none" }}>1 Year — $49 ⭐</a>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" }}>
                <a href="/free-trial" style={{ background: "#79C9C5", color: "#1A3D45", borderRadius: 999, padding: "6px 16px", fontSize: 13, fontWeight: 700, textDecoration: "none" }}>Try Free 24h</a>
                <a href="/pricing" style={{ background: "rgba(255,255,255,0.1)", color: "#fff", borderRadius: 999, padding: "6px 16px", fontSize: 13, fontWeight: 600, textDecoration: "none" }}>All Plans</a>
                <a href="/channels-list" style={{ background: "rgba(255,255,255,0.1)", color: "#fff", borderRadius: 999, padding: "6px 16px", fontSize: 13, fontWeight: 600, textDecoration: "none" }}>Channel List</a>
                <a href="/iptv-toronto" style={{ background: "rgba(255,255,255,0.1)", color: "#fff", borderRadius: 999, padding: "6px 16px", fontSize: 13, fontWeight: 600, textDecoration: "none" }}>IPTV Toronto</a>
                <a href="/iptv-vancouver" style={{ background: "rgba(255,255,255,0.1)", color: "#fff", borderRadius: 999, padding: "6px 16px", fontSize: 13, fontWeight: 600, textDecoration: "none" }}>IPTV Vancouver</a>
              </div>
            </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
