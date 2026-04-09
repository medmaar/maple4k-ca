import type { Metadata } from "next";
import PlanOrderForm from "../PlanOrderForm";
import PlanFAQ, { type FaqItem } from "../PlanFAQ";

export const metadata: Metadata = {
  title: "6 Months IPTV Plan — $60 CAD | Maple4KTV Canada",
  description:
    "Get 6 months of IPTV in Canada for $60 CAD. 25,000+ live channels, 4K quality, NHL, TSN, CTV and more. Save vs monthly. Login credentials sent within 24 hours.",
  keywords:
    "Maple4K 6 months, IPTV 6 month plan Canada, best IPTV plan Canada, IPTV semi-annual Canada",
  alternates: { canonical: "https://maple4k.ca/pricing/6-months" },
};

const faqItems: FaqItem[] = [
  {
    q: "What is included in the 6-month IPTV plan?",
    a: "The 6-month plan includes six full months of access to 25,000+ live channels (TSN, Sportsnet, CBC, CTV, Global, RDS, TVA and more), 120,000+ movies and series on demand, 4K Ultra HD streaming, EPG, and 7-day catch-up TV — all for $60 CAD.",
  },
  {
    q: "How do I receive my login credentials after ordering?",
    a: "After placing your order, our team will review it and send your login credentials (server URL, username, and password) directly to your email address within 24 hours. Check your spam folder if you don't see it.",
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

export default function Pricing6MonthsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main style={{ background: "#10131E", color: "#fff", minHeight: "100vh" }}>
        <section
          className="py-20 px-4"
          style={{
            background:
              "radial-gradient(ellipse 80% 55% at 50% 0%, rgba(253,3,34,0.13) 0%, transparent 65%), #10131E",
          }}
        >
          <div className="max-w-2xl mx-auto">
            {/* 1. Page title */}
            <div className="mb-8">
              <span
                className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5"
                style={{
                  background: "rgba(253,3,34,0.12)",
                  border: "1px solid rgba(253,3,34,0.28)",
                  color: "#fd0322",
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

                <span style={{ color: "#fd0322", fontWeight: 800, fontSize: "2rem" }}>Price : $39</span>

                <span style={{ background: "rgba(253,3,34,0.15)", color: "#fd0322", border: "1px solid rgba(253,3,34,0.4)", fontWeight: 700, fontSize: 12, padding: "4px 12px", borderRadius: 999, whiteSpace: "nowrap" }}>50% OFF</span>

              </div>
            </div>

            {/* 2. Instruction text */}
            <div className="mb-10">
              <p className="text-gray-300 text-base">Fill out the form below to place your order.</p>
              <p className="text-gray-400 text-sm mt-1">
                We&apos;ll send your login credentials to your email within 24 hours.
              </p>
            </div>

            {/* 3. Order Form */}
            <div
              className="rounded-3xl p-6 md:p-8 border mb-16"
              style={{
                background: "rgba(255,255,255,0.03)",
                borderColor: "rgba(255,255,255,0.07)",
              }}
            >
              <PlanOrderForm plan="6 Months Plan — $60 CAD" />
            </div>

            {/* 4. FAQ */}
            <div>
              <p
                className="text-xs font-bold uppercase tracking-widest mb-2"
                style={{ color: "#fd0322" }}
              >
                FAQ
              </p>
              <h2 className="text-2xl font-extrabold text-white mb-6">
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
