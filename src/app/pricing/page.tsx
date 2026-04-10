import type { Metadata } from "next";
import PricingSection from "../PricingSection";
import FaqAccordion from "../components/FaqAccordion";

export const metadata: Metadata = {
  title: { absolute: "IPTV Subscription Canada — Plans from $9 | Maple4K" },
  description:
    "Compare Maple4K IPTV plans for Canada. 1, 3, 6 & 12-month options starting at $9. 25,000+ live channels, 4K streaming, NHL, TSN, CTV included. No contracts.",
  keywords:
    "Maple4K pricing, Maple4K plans, IPTV subscription price Canada, cheap IPTV Canada 2026",
  alternates: { canonical: "https://maple4k.ca/pricing" },
  openGraph: {
    title: "IPTV Subscription Canada — Plans from $9 | Maple4K",
    description:
      "Compare Maple4K IPTV plans for Canada. 1, 3, 6 & 12-month options starting at $9. 25,000+ live channels, 4K streaming, NHL, TSN, CTV included.",
    url: "https://maple4k.ca/pricing",
    siteName: "Maple4K",
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IPTV Subscription Canada — Plans from $9 | Maple4K",
    description:
      "Compare Maple4K IPTV plans for Canada. 1, 3, 6 & 12-month options starting at $9. 25,000+ live channels, 4K streaming included.",
  },
};

export default function PricingPage() {
  return (
    <main style={{ background: "#10131E", color: "#fff", minHeight: "100vh" }}>
      {/* Header */}
      <section
        className="py-20 px-4 text-center"
        style={{
          background:
            "radial-gradient(ellipse 80% 55% at 50% 0%, rgba(253,3,34,0.12) 0%, transparent 65%), #10131E",
        }}
      >
        <div className="max-w-3xl mx-auto">
          <p
            className="text-xs font-bold uppercase tracking-widest mb-4"
            style={{ color: "#fd0322" }}
          >
            Transparent Pricing
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">
            Maple4K{" "}
            <span style={{ color: "#fd0322" }}>Subscription Plans 2026</span>
          </h1>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto leading-relaxed">
            Transparent pricing with no hidden fees. All plans include 25,000+ channels,
            120,000+ movies &amp; series, and 24/7 Canadian support.
          </p>
          <div className="flex flex-wrap justify-center gap-5 text-sm text-gray-400">
            {["No contracts", "Instant activation", "Cancel anytime", "24h free trial available"].map(
              (item) => (
                <span key={item} className="flex items-center gap-2">
                  <span style={{ color: "#4ade80" }}>✓</span> {item}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* Interactive pricing */}
      <PricingSection />

      {/* What's included */}
      <section className="py-20 px-4" style={{ background: "#10131E" }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#fd0322" }}>
            Included in Every Plan
          </p>
          <h2 className="text-3xl font-extrabold text-center text-white mb-12">
            Every Plan Includes{" "}
            <span style={{ color: "#fd0322" }}>Everything</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "25,000+ Live TV Channels",
              "120,000+ Movies & Series (VOD)",
              "4K Ultra HD & HD Quality",
              "NHL, NFL, NBA, MLB, UFC",
              "TSN, Sportsnet, CBC, CTV, Global",
              "PPV Events Included",
              "Electronic Program Guide (EPG)",
              "Catch-Up TV (7 days)",
              "All Devices: Fire Stick, Smart TV, iOS, Android",
              "Anti-Freeze Technology",
              "99.9% Uptime Guarantee",
              "24/7 Canadian Support",
            ].map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-3 rounded-2xl px-5 py-4 border"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  borderColor: "rgba(255,255,255,0.07)",
                }}
              >
                <span className="text-green-400 text-sm shrink-0">✓</span>
                <span className="text-gray-300 text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free trial CTA */}
      <section
        className="py-16 px-4 text-center"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(253,3,34,0.15) 0%, transparent 70%), #10131E",
          borderTop: "1px solid rgba(253,3,34,0.15)",
          borderBottom: "1px solid rgba(253,3,34,0.15)",
        }}
      >
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-extrabold text-white mb-4">
            Not Sure Yet? Try Free for 5 Minutes
          </h2>
          <p className="text-gray-400 mb-8 text-sm">
            No credit card required. Test every channel, every feature, on any device.
          </p>
          <a
            href="/free-trial"
            className="inline-block text-white px-10 py-4 rounded-2xl font-bold text-base transition-all hover:brightness-110"
            style={{ background: "#fd0322", boxShadow: "0 8px 28px rgba(253,3,34,0.3)" }}
          >
            Get Free Trial
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-center text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#fd0322" }}>
            FAQ
          </p>
          <h2 className="text-3xl font-extrabold text-center text-white mb-10">
            Pricing <span style={{ color: "#fd0322" }}>FAQ</span>
          </h2>
          <FaqAccordion />
        </div>
      </section>
    </main>
  );
}
