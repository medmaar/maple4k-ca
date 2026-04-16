import type { Metadata } from "next";
import PlanOrderForm from "../PlanOrderForm";
import PlanFAQ, { type FaqItem } from "../PlanFAQ";

export const metadata: Metadata = {
  title: { absolute: "6 Month IPTV Canada — $39 | Maple4K" },
  description:
    "Get 6 months of IPTV in Canada for only $39. 25,000+ live channels, 4K quality, NHL, TSN, CTV included. Save vs monthly. Login credentials sent within 5 minutes.",
  keywords:
    "IPTV 6 months Canada, Maple4K 6 months, best IPTV plan Canada, 6 month IPTV Canada $39",
  alternates: { canonical: "https://maple4k.ca/pricing/6-months" },
};

const faqItems: FaqItem[] = [
  {
    q: "What is included in the 6-month IPTV plan?",
    a: "The 6-month plan includes six full months of access to 25,000+ live channels (TSN, Sportsnet, CBC, CTV, Global, RDS, TVA and more), 120,000+ movies and series on demand, 4K Ultra HD streaming, EPG, and 7-day catch-up TV — all for $39.",
  },
  {
    q: "How do I receive my login credentials after ordering?",
    a: "After placing your order, our team will review it and send your login credentials (server URL, username, and password) directly to your email address within 5 minutes. Check your spam folder if you don't see it.",
  },
  {
    q: "Which devices are compatible with this IPTV service?",
    a: "Our service works on Amazon Firestick, all Samsung and LG Smart TVs, Android boxes, Android phones and tablets, iPhone, iPad, Apple TV, MAG boxes, Windows PCs and Macs. Any device that supports an IPTV player app is compatible.",
  },
  {
    q: "How fast does my internet connection need to be?",
    a: "We recommend at least 10 Mbps for HD streaming and 25 Mbps for 4K Ultra HD. Any standard Canadian home internet plan handles this easily. Our anti-freeze technology also helps on slower connections.",
  },
  {
    q: "Can I watch live Canadian and Quebec channels?",
    a: "Yes — all plans include TSN, Sportsnet, CBC, CTV, Global, City TV, RDS, TVA, Canal Vie, and all regional Canadian channels in HD and 4K. Complete NHL, NFL, NBA, MLB, UFC and CFL coverage is included.",
  },
  {
    q: "Can I use this service on more than one device at a time?",
    a: "The base plan supports 1 simultaneous connection. If you need multiple devices streaming at the same time, contact us and we'll arrange a multi-connection plan for your household.",
  },
  {
    q: "What happens when my 6-month subscription expires?",
    a: "You'll receive a reminder before your expiry date. You can renew for another 6 months or upgrade to the annual plan for even better value. There are no automatic charges and no contracts.",
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
  name: "Maple4K 6 Month IPTV Plan",
  description: "6 months of IPTV access to 25,000+ live channels in Canada including NHL, TSN, CTV, Sportsnet and 120,000+ VOD titles in 4K.",
  brand: { "@type": "Brand", name: "Maple4K" },
  offers: {
    "@type": "Offer",
    price: "39.00",
    priceCurrency: "CAD",
    availability: "https://schema.org/InStock",
    url: "https://maple4k.ca/pricing/6-months",
  },
};

export default function Pricing6MonthsPage() {
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
            <div className="mb-8">
              <span
                className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5"
                style={{
                  background: "rgba(249,110,91,0.12)",
                  border: "1px solid rgba(249,110,91,0.35)",
                  color: "#F96E5B",
                }}
              >
                Maple4K · 6 Months
              </span>
              <h1
                style={{
                  fontSize: "clamp(1.6rem, 4vw, 2.8rem)",
                  fontWeight: 800,
                  color: "#fff",
                  lineHeight: 1.2,
                  whiteSpace: "nowrap",
                }}
              >
                6 Months
              </h1>
              <div style={{ display: "flex", alignItems: "center", gap: 16, marginTop: 10 }}>

                <span style={{ color: "#F96E5B", fontWeight: 800, fontSize: "2rem" }}>Price : $39</span>

                <span style={{ background: "rgba(253,3,34,0.15)", color: "#F96E5B", border: "1px solid rgba(253,3,34,0.4)", fontWeight: 700, fontSize: 12, padding: "4px 12px", borderRadius: 999, whiteSpace: "nowrap" }}>50% OFF</span>

              </div>
            </div>

            {/* 3. Order Form */}
            <div
              className="rounded-3xl p-6 md:p-8 border mb-16"
              style={{
                background: "#1A3D45",
                borderColor: "rgba(121,201,197,0.2)", boxShadow: "0 8px 32px rgba(26,61,69,0.25)",
              }}
            >
              <PlanOrderForm plan="6 Months Plan — $39" />
            </div>

            {/* 4. FAQ */}
            <div>
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
