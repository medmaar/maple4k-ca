import type { Metadata } from "next";
import PlanOrderForm from "../pricing/PlanOrderForm";
import PlanFAQ, { type FaqItem } from "../pricing/PlanFAQ";

export const metadata: Metadata = {
  title: { absolute: "Free IPTV Trial Canada — Test Maple4K Risk-Free | Maple4K" },
  description:
    "Get a free Maple4K IPTV trial in Canada. No credit card required. Access 25,000+ live channels, NHL, TSN, CTV and 120,000+ movies. Activate in under 5 minutes.",
  keywords:
    "free IPTV trial Canada, Maple4K free trial, try IPTV Canada, free IPTV Canada no credit card",
  alternates: { canonical: "https://maple4k.ca/free-trial" },
  openGraph: {
    title: "Free IPTV Trial Canada — Test Maple4K Risk-Free | Maple4K",
    description: "Get a free Maple4K IPTV trial in Canada. No credit card required. Access 25,000+ live channels, NHL, TSN, CTV and 120,000+ movies.",
    url: "https://maple4k.ca/free-trial",
    type: "website",
    siteName: "Maple4K",
    locale: "en_CA",
    images: [{ url: "/favicon.svg", width: 512, height: 512, alt: "Maple4K Free IPTV Trial Canada" }],
  },
  twitter: { card: "summary_large_image" },
};

const faqItems: FaqItem[] = [
  {
    q: "How do I get the free trial?",
    a: "Simply fill out the form above and submit your request. Our team will activate your trial within minutes — usually under 5 minutes during business hours.",
  },
  {
    q: "Does the free trial include all channels?",
    a: "Yes. Your 24h trial gives you full access to all 25,000+ live channels, 120,000+ VOD titles, and all sports packages — no restrictions.",
  },
  {
    q: "How many devices can I use during the trial?",
    a: "Your trial includes one simultaneous connection. If you want to test on multiple devices, let us know and we can arrange that.",
  },
  {
    q: "What happens after 2 hours?",
    a: "Your trial simply stops. There are no charges, no cancellation required. If you'd like to continue, contact us to choose a plan.",
  },
  {
    q: "Is a credit card required to start the trial?",
    a: "Absolutely not. No payment information is needed. The trial is 100% free with zero obligation to subscribe afterwards.",
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

export default function FreeTrialPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main style={{ background: "linear-gradient(to left, #daf0f2 0%, #fce8e4 100%)", color: "#000000", minHeight: "100vh" }}>
        <section
          className="py-20 px-4"
          style={{ background: "transparent" }}
        >
          <div className="max-w-2xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <span
                className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5"
                style={{
                  background: "rgba(249,110,91,0.12)",
                  border: "1px solid rgba(249,110,91,0.35)",
                  color: "#F96E5B",
                }}
              >
                No Credit Card Required
              </span>
              <h1
                style={{
                  fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                  fontWeight: 800,
                  color: "#000000",
                  lineHeight: 1.2,
                }}
              >
                Free Trial — Maple4K
              </h1>
              <p style={{ color: "#000000", fontSize: 14, marginTop: 10 }}>
                5-minute full access. Fill out the form and we&apos;ll activate your trial within minutes.
              </p>
            </div>

            {/* Order Form */}
            <div
              className="rounded-3xl p-6 md:p-8 border mb-16"
              style={{
                background: "#1A3D45",
                borderColor: "rgba(121,201,197,0.2)",
                boxShadow: "0 8px 32px rgba(26,61,69,0.25)",
              }}
            >
              <PlanOrderForm plan="Free Trial" />
            </div>

            {/* FAQ */}
            <div style={{ background: "#1A3D45", borderRadius: 24, padding: "32px", boxShadow: "0 8px 32px rgba(26,61,69,0.25)" }}>
              <p
                className="text-xs font-bold uppercase tracking-widest mb-2"
                style={{ color: "#F96E5B" }}
              >
                FAQ
              </p>
              <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#ffffff", marginBottom: 24 }}>
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
