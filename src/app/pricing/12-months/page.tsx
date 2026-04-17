import type { Metadata } from "next";
import PlanOrderForm from "../PlanOrderForm";
import PlanFAQ, { type FaqItem } from "../PlanFAQ";

export const metadata: Metadata = {
  title: { absolute: "1 Year IPTV Canada — $49 Best Value | Maple4K" },
  description:
    "Get a full year of IPTV in Canada for only $49. 25,000+ live channels, 4K quality, NHL, TSN, CTV, IBO Player bonus included. Best value IPTV plan Canada.",
  keywords:
    "IPTV annual Canada, Maple4K 1 year, best value IPTV Canada, 12 month IPTV Canada $49, yearly IPTV Canada",
  alternates: { canonical: "https://maple4k.ca/pricing/12-months" },
};

const faqItems: FaqItem[] = [
  {
    q: "What is included in the 1-year IPTV plan?",
    a: "The 1-year plan gives you a full 12 months of access to 25,000+ live channels (TSN, Sportsnet, CBC, CTV, Global, RDS, TVA and hundreds more), 120,000+ movies and series on demand, 4K Ultra HD streaming, EPG, and 7-day catch-up TV — all for $49.",
  },
  {
    q: "How do I receive my login credentials after ordering?",
    a: "After placing your order, our team will review it and send your login credentials (server URL, username, and password) directly to your email address within minutes. Check your spam folder if you don't see it in your inbox.",
  },
  {
    q: "Which devices are compatible with this IPTV service?",
    a: "Our service works on Amazon Firestick, all Samsung and LG Smart TVs, Android boxes, Android phones and tablets, iPhone, iPad, Apple TV, MAG boxes, Windows PCs and Macs. Any device that supports an IPTV player app will work.",
  },
  {
    q: "How fast does my internet connection need to be?",
    a: "We recommend at least 10 Mbps for HD streaming and 25 Mbps for 4K Ultra HD. Standard Canadian home broadband handles this with ease. Our anti-freeze buffer technology also reduces interruptions on slower connections.",
  },
  {
    q: "Can I watch live Canadian and Quebec channels?",
    a: "Yes — all plans include TSN, Sportsnet, CBC, CTV, Global, City TV, RDS, TVA, Canal Vie, and every regional Canadian channel in HD and 4K. Full coverage of NHL, NFL, NBA, MLB, UFC, F1 and CFL is included throughout the year.",
  },
  {
    q: "Can I use this service on more than one device at a time?",
    a: "The base plan supports 1 simultaneous connection. Need to stream on multiple screens? Contact us and we'll set up a multi-connection plan tailored to your household.",
  },
  {
    q: "What happens when my 1-year subscription expires?",
    a: "You'll receive a reminder before your renewal date. Simply place a new order to renew for another year. There are no automatic charges and no long-term contracts — you're always in control.",
  },
  {
    q: "How do I get support if something stops working?",
    a: "Our Canadian support team is available 24/7 via WhatsApp (+1 782-802-6280) and email in English and French. Most issues are resolved within minutes, any time of day.",
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
  name: "Maple4K 1 Year IPTV Plan",
  description: "12 months of IPTV access to 25,000+ live channels in Canada including NHL, TSN, CTV, Sportsnet and 120,000+ VOD titles in 4K. Includes IBO Player subscription.",
  brand: { "@type": "Brand", name: "Maple4K" },
  offers: {
    "@type": "Offer",
    price: "49.00",
    priceCurrency: "CAD",
    availability: "https://schema.org/InStock",
    url: "https://maple4k.ca/pricing/12-months",
  },
};

export default function Pricing12MonthsPage() {
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
                Maple4K · 1 Year
              </span>
              <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 900, color: "#ffffff", lineHeight: 1.1, marginBottom: 16 }}>
                1 Year
              </h1>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14, marginBottom: 16 }}>
                <span style={{ color: "#F96E5B", fontWeight: 900, fontSize: "2.4rem" }}>Price : $49</span>
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
              <PlanOrderForm plan="1 Year Plan — $49" />
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
