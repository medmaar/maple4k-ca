"use client";
import { usePathname } from "next/navigation";
import pageMeta from "../data/seo/page-meta.json";

const SITE = "https://maple4k.ca";
const CITIES: Record<string, string> = {
  "/ca/iptv-toronto": "Toronto", "/ca/iptv-vancouver": "Vancouver", "/ca/iptv-montreal": "Montréal", "/ca/iptv-calgary": "Calgary",
  "/ca/iptv-ottawa": "Ottawa", "/ca/iptv-edmonton": "Edmonton", "/ca/iptv-winnipeg": "Winnipeg", "/ca/iptv-quebec": "Québec City",
  "/ca/iptv-halifax": "Halifax", "/ca/iptv-hamilton": "Hamilton", "/ca/iptv-victoria": "Victoria", "/ca/iptv-london-ontario": "London, Ontario",
};
// Hand-written pages that ship no page-level schema of their own (checked by scripts/audit-deep.mjs).
const WEBPAGE = new Set([
  "/ca/about", "/best-iptv-app-canada", "/best-iptv-apps-canada", "/ca/best-iptv-canada", "/best-iptv-for-sports-canada",
  "/ca/channels-list", "/ca/free-trial", "/ca/how-it-works", "/ca/iptv-4k", "/ca/iptv-android-canada", "/iptv-android-tv-canada",
  "/iptv-apple-tv-canada", "/ca/iptv-box", "/ca/iptv-firestick-canada", "/ca/iptv-formula", "/ca/iptv-ios-canada", "/iptv-lg-tv-canada",
  "/iptv-mag-box-canada", "/ca/iptv-near-me", "/ca/iptv-providers-canada", "/ca/iptv-roku-canada", "/iptv-samsung-tv-canada",
  "/iptv-smart-tv-canada", "/iptv-smarters-pro-canada", "/ca/iptv-windows-canada", "/ca/referral", "/ca/reseller", "/ca/smart-iptv",
  "/ca/stb-emu-canada", "/ca/tivimate-canada",
]);

export default function AutoPageSchema() {
  const path = (usePathname() || "/").replace(/\/$/, "") || "/";
  const meta = (pageMeta as Record<string, { title: string; description: string }>)[path];
  if (!meta) return null;
  const url = SITE + path;
  const org = { "@id": `${SITE}/#organization` };
  let schema: Record<string, unknown> | null = null;
  if (CITIES[path]) {
    schema = {
      "@context": "https://schema.org",
      "@type": "Service",
      name: `Maple4K IPTV in ${CITIES[path]}`,
      serviceType: "IPTV subscription",
      description: meta.description,
      url,
      provider: org,
      areaServed: { "@type": "City", name: CITIES[path], containedInPlace: { "@type": "Country", name: "Canada" } },
      offers: { "@type": "AggregateOffer", priceCurrency: "USD", lowPrice: "9", highPrice: "49", offerCount: "4", url: `${SITE}/ca/pricing` },
    };
  } else if (WEBPAGE.has(path)) {
    schema = {
      "@context": "https://schema.org",
      "@type": path === "/ca/about" ? "AboutPage" : "WebPage",
      name: meta.title,
      description: meta.description,
      url,
      inLanguage: path === "/ca/iptv-quebec" ? "fr-CA" : "en-CA",
      isPartOf: { "@id": `${SITE}/#website` },
      publisher: org,
      dateModified: "2026-09-27",
    };
  }
  if (!schema) return null;
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
