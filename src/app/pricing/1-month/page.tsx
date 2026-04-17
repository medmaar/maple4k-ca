import type { Metadata } from "next";
import PlanOrderForm from "../PlanOrderForm";
import PlanFAQ, { type FaqItem } from "../PlanFAQ";

export const metadata: Metadata = {
  title: { absolute: "1 Month IPTV Canada — $9 | Maple4K" },
  description:
    "Get 1 month of IPTV in Canada for only $9. 25,000+ live channels, 4K quality, NHL, TSN, CTV included. No contract. Login credentials sent within minutes.",
  keywords:
    "IPTV 1 month Canada, Maple4K 1 month, IPTV $9 Canada, month to month IPTV Canada",
  alternates: { canonical: "https://maple4k.ca/pricing/1-month" },
};

const faqItems: FaqItem[] = [
  {
    q: "What is included in the 1-month IPTV plan?",
    a: "The 1-month plan gives you full access to 25,000+ live channels including all Canadian networks (TSN, Sportsnet, CBC, CTV, Global, RDS, TVA), 120,000+ movies and series on demand, 4K Ultra HD streaming, electronic program guide (EPG), and 7-day catch-up TV — all for $9.",
  },
  {
    q: "How do I receive my login credentials after ordering?",
    a: "After placing your order, our team will review it and send your login credentials (server URL, username, and password) directly to your email address within minutes. Check your spam folder if you don't see it.",
  },
  {
    q: "Which devices are compatible with this IPTV service?",
    a: "Our service works on Amazon Firestick, all Samsung and LG Smart TVs, Android boxes, Android phones and tablets, iPhone, iPad, Apple TV, MAG boxes, Windows PCs and Macs. You can use it on virtually any device that supports an IPTV player app.",
  },
  {
    q: "How fast does my internet connection need to be?",
    a: "We recommend at least 10 Mbps for HD streaming and 25 Mbps for 4K Ultra HD. Any standard Canadian home internet plan handles this easily. Our anti-freeze technology also minimises buffering on slower connections.",
  },
  {
    q: "Can I watch live Canadian and Quebec channels?",
    a: "Yes — every plan includes TSN, Sportsnet, CBC, CTV, Global, City TV, RDS, TVA, Canal Vie, and all regional Canadian channels in HD and 4K. Every NHL, NFL, NBA and CFL game is covered.",
  },
  {
    q: "Can I use this service on more than one device at a time?",
    a: "The base plan supports 1 simultaneous connection. If you need more devices streaming at the same time, contact us and we'll set up a multi-connection plan for you.",
  },
  {
    q: "What happens when my 1-month subscription expires?",
    a: "You'll receive a reminder before expiry. Simply place a new order to renew — or upgrade to the 6-month or 12-month plan for better savings. There are no automatic charges and no contracts.",
  },
  {
    q: "How do I get support if something stops working?",
    a: "Our Canadian support team is available 24/7 via WhatsApp (+1 782-802-6280) and email in English and French. Most issues are resolved within minutes.",
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
  name: "Maple4K 1 Month IPTV Plan",
  description: "1 month of IPTV access to 25,000+ live channels in Canada including NHL, TSN, CTV, Sportsnet and 120,000+ VOD titles in 4K.",
  brand: { "@type": "Brand", name: "Maple4K" },
  offers: {
    "@type": "Offer",
    price: "9.00",
    priceCurrency: "CAD",
    availability: "https://schema.org/InStock",
    url: "https://maple4k.ca/pricing/1-month",
  },
};

export default function Pricing1MonthPage() {
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
                Maple4K · 1 Month
              </span>
              <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 900, color: "#ffffff", lineHeight: 1.1, marginBottom: 16 }}>
                1 Month
              </h1>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14, marginBottom: 16 }}>
                <span style={{ color: "#F96E5B", fontWeight: 900, fontSize: "2.4rem" }}>Price : $9</span>
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
              <PlanOrderForm plan="1 Month Plan — $9" />
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
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
