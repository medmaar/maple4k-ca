import type { Metadata } from "next";
import PricingSection from "../PricingSection";
import FaqAccordion from "../components/FaqAccordion";

export const metadata: Metadata = {
  title: { absolute: "4K IPTV Plans Canada — H.265/HEVC from $9 | Maple4K" },
  description:
    "Compare Maple4K premium 4K IPTV plans. H.265/HEVC encoded, HDR10 & Dolby Vision. 1, 3, 6 & 12-month options from $9. 25,000+ live channels, no contracts.",
  keywords:
    "Maple4K pricing, 4K IPTV plans Canada, H.265 HEVC IPTV Canada, HDR IPTV subscription 2026",
  alternates: { canonical: "https://maple4k.ca/pricing" },
  openGraph: {
    title: "4K IPTV Plans Canada — H.265/HEVC from $9 | Maple4K",
    description:
      "Compare Maple4K premium 4K IPTV plans. H.265/HEVC, HDR10 & Dolby Vision. 1, 3, 6 & 12-month options from $9. 25,000+ live channels included.",
    url: "https://maple4k.ca/pricing",
    siteName: "Maple4K",
    locale: "en_CA",
    type: "website",
    images: [{ url: "/favicon.svg", width: 512, height: 512, alt: "Maple4K 4K IPTV Pricing Canada" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "4K IPTV Plans Canada — H.265/HEVC from $9 | Maple4K",
    description:
      "Compare Maple4K 4K IPTV plans. H.265/HEVC encoded, HDR10 & Dolby Vision. From $9/month, no contracts.",
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
            <span style={{ color: "#fd0322" }}>Premium 4K Plans 2026</span>
          </h1>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto leading-relaxed">
            No hidden fees. Every plan streams in True 4K Ultra HD with H.265/HEVC encoding,
            HDR10 &amp; Dolby Vision support, and 24/7 Canadian support.
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
            <span style={{ color: "#fd0322" }}>Premium 4K</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "25,000+ Live TV Channels",
              "120,000+ Movies & Series (VOD)",
              "True 4K Ultra HD — H.265/HEVC Encoded",
              "HDR10 & Dolby Vision Support",
              "NHL, NFL, NBA, MLB, UFC, CFL",
              "TSN, Sportsnet, CBC, CTV, Global",
              "PPV Events Included — No Extra Cost",
              "Full EPG + Catch-Up TV (7 days)",
              "TiviMate & IBO Player Compatible",
              "All Devices: Fire TV, Smart TV, iOS, Android",
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
            Not Sure Yet? Try the Full 4K Experience Free
          </h2>
          <p className="text-gray-400 mb-8 text-sm">
            No credit card required. Test True 4K H.265 streams, HDR rendering, and every channel on your own hardware.
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
