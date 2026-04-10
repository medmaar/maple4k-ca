import type { Metadata } from "next";
import PlanOrderForm from "../pricing/PlanOrderForm";
import PlanFAQ, { type FaqItem } from "../pricing/PlanFAQ";

export const metadata: Metadata = {
  title: "Free Trial — Maple4K | Activate in 5 Minutes",
  description:
    "Get a free 5-minute Maple4K trial. Access 25,000+ live channels, NHL, TSN, CTV and 120,000+ movies with no credit card required. Instant activation.",
  keywords:
    "Maple4K free trial, free Maple4K, IPTV trial Canada, try Maple4K",
  alternates: { canonical: "https://www.maple4k.ca/free-trial" },
};

const faqItems: FaqItem[] = [
  {
    q: "How do I get the free trial?",
    a: "Simply fill out the form above and submit your request. Our team will activate your trial within minutes — usually under 5 minutes during business hours.",
  },
  {
    q: "Does the free trial include all channels?",
    a: "Yes. Your 5-minute trial gives you full access to all 25,000+ live channels, 120,000+ VOD titles, and all sports packages — no restrictions.",
  },
  {
    q: "How many devices can I use during the trial?",
    a: "Your trial includes one simultaneous connection. If you want to test on multiple devices, let us know and we can arrange that.",
  },
  {
    q: "What happens after 5 minutes?",
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
      <main style={{ background: "#10131E", color: "#fff", minHeight: "100vh" }}>
        <section
          className="py-20 px-4"
          style={{
            background:
              "radial-gradient(ellipse 80% 55% at 50% 0%, rgba(253,3,34,0.13) 0%, transparent 65%), #10131E",
          }}
        >
          <div className="max-w-2xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <span
                className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5"
                style={{
                  background: "rgba(253,3,34,0.12)",
                  border: "1px solid rgba(253,3,34,0.28)",
                  color: "#fd0322",
                }}
              >
                No Credit Card Required
              </span>
              <h1
                style={{
                  fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                  fontWeight: 800,
                  color: "#fff",
                  lineHeight: 1.2,
                }}
              >
                Free Trial — Maple4K
              </h1>
              <p className="text-gray-400 text-sm mt-3">
                5-minute full access. Fill out the form and we&apos;ll activate your trial within minutes.
              </p>
            </div>

            {/* Order Form */}
            <div
              className="rounded-3xl p-6 md:p-8 border mb-16"
              style={{
                background: "rgba(255,255,255,0.03)",
                borderColor: "rgba(255,255,255,0.07)",
              }}
            >
              <PlanOrderForm plan="Free Trial" />
            </div>

            {/* FAQ */}
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
