import { writeFileSync, mkdirSync, existsSync } from "fs";
import { join } from "path";

const allPrices = {
  1: [9, 29, 39, 49],
  2: [18, 50, 69, 89],
  3: [27, 75, 105, 135],
  4: [36, 99, 140, 180],
  5: [45, 120, 175, 225],
  6: [54, 144, 210, 270],
  7: [63, 168, 245, 315],
  8: [72, 192, 280, 360],
  9: [81, 216, 315, 405],
  10: [90, 240, 350, 450],
};

// durations: index 0=1-month, 1=3-months, 2=6-months, 3=1-year
const durations = [
  { slug: "1-month", label: "1 Month" },
  { slug: "3-months", label: "3 Months" },
  { slug: "6-months", label: "6 Months" },
  { slug: "1-year", label: "1 Year" },
];

function origPrice(p) {
  return Math.round(p * 2);
}

function plural(n) {
  return n === 1 ? "Device" : "Devices";
}

function multiDevicePage(n, dur, price) {
  const origP = origPrice(price);
  const devLabel = `${n} ${plural(n)}`;
  const titleStr = `${dur.label} - ${devLabel}`;
  const canonical = `https://maple4k.ca/pricing/${n}-devices/${dur.slug}`;

  return `import type { Metadata } from "next";
import PlanOrderForm from "../../PlanOrderForm";
import PlanFAQ, { type FaqItem } from "../../PlanFAQ";

export const metadata: Metadata = {
  title: { absolute: "${n} Connections IPTV Canada ${dur.label} — \$${price} | Maple4K" },
  description:
    "Get ${n} simultaneous connections for \$${price}. 25,000+ live channels, 4K quality, NHL, TSN, CTV and more. No contract. Credentials sent within 5 minutes.",
  alternates: { canonical: "${canonical}" },
};

const faqItems: FaqItem[] = [
  {
    q: "How many devices can stream at the same time with this plan?",
    a: "This plan supports exactly ${n} simultaneous connections. All ${n} devices can stream different channels at the same time on your account.",
  },
  {
    q: "How do I receive my login credentials after ordering?",
    a: "After placing your order our team will send your login credentials directly to your email within 5 minutes. Check your spam folder if you don't see it.",
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
  name: "Maple4K ${dur.label} IPTV Plan — ${devLabel}",
  description: "${dur.label} of IPTV access for ${n} simultaneous connections. 25,000+ live channels in Canada including NHL, TSN, CTV, Sportsnet and 120,000+ VOD titles in 4K.",
  brand: { "@type": "Brand", name: "Maple4K" },
  offers: {
    "@type": "Offer",
    price: "${price}.00",
    priceCurrency: "CAD",
    availability: "https://schema.org/InStock",
    url: "${canonical}",
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
                Maple4K · ${dur.label} · ${devLabel}
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
                ${titleStr}
              </h1>
              <div style={{ display: "flex", alignItems: "center", gap: 16, marginTop: 10 }}>
                <span style={{ color: "#fd0322", fontWeight: 800, fontSize: "2rem" }}>Price : $${price}</span>
                <span style={{ background: "rgba(253,3,34,0.15)", color: "#fd0322", border: "1px solid rgba(253,3,34,0.4)", fontWeight: 700, fontSize: 12, padding: "4px 12px", borderRadius: 999, whiteSpace: "nowrap" }}>50% OFF</span>
              </div>
            </div>

            {/* 2. Instruction text */}
            <div className="mb-10">
              <p className="text-gray-300 text-base">Fill out the form below to place your order.</p>
              <p className="text-gray-400 text-sm mt-1">
                We&apos;ll send your login credentials to your email within 5 minutes.
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
              <PlanOrderForm plan="${dur.label} - ${devLabel} — $${price}" />
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
`;
}

// Generate multi-device pages (2-10)
for (let n = 2; n <= 10; n++) {
  const prices = allPrices[n];
  for (let i = 0; i < durations.length; i++) {
    const dur = durations[i];
    const price = prices[i];
    const dir = join("src/app/pricing", `${n}-devices`, dur.slug);
    if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
    const content = multiDevicePage(n, dur, price);
    writeFileSync(join(dir, "page.tsx"), content);
    console.log(`✓ ${n}-devices/${dur.slug} — $${price}`);
  }
}

console.log("\nDone! All 36 multi-device pages regenerated.");
