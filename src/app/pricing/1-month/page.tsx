import type { Metadata } from "next";
import PlanOrderForm from "../PlanOrderForm";
import PlanFAQ, { type FaqItem } from "../PlanFAQ";

export const metadata: Metadata = {
  title: "1 Month IPTV Plan — $15 CAD | Maple4KTV Canada",
  description:
    "Get 1 month of IPTV in Canada for $15 CAD. 25,000+ live channels, 4K quality, NHL, TSN, CTV and more. No contract. Login credentials sent within 24 hours.",
  keywords:
    "Maple4K 1 month, IPTV monthly plan Canada, IPTV $15 Canada, month to month Maple4K",
  alternates: { canonical: "https://maple4k.ca/pricing/1-month" },
};

const faqItems: FaqItem[] = [
  {
    q: "What is included in the 1-month IPTV plan?",
    a: "The 1-month plan gives you full access to 25,000+ live channels including all Canadian networks (TSN, Sportsnet, CBC, CTV, Global, RDS, TVA), 120,000+ movies and series on demand, 4K Ultra HD streaming, electronic program guide (EPG), and 7-day catch-up TV — all for $15 CAD.",
  },
  {
    q: "How do I receive my login credentials after ordering?",
    a: "After placing your order, our team will review it and send your login credentials (server URL, username, and password) directly to your email address within 24 hours. Check your spam folder if you don't see it.",
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

export default function Pricing1MonthPage() {
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
                Maple4K · 1 Month
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
                1 Month
              </h1>
              <div style={{ display: "flex", alignItems: "center", gap: 16, marginTop: 10 }}>

                <span style={{ color: "#fd0322", fontWeight: 800, fontSize: "2rem" }}>Price : $9</span>

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
              <PlanOrderForm plan="1 Month Plan — $15 CAD" />
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
