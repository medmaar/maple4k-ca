"use client";
import { usePathname } from "next/navigation";
import pageMeta from "../data/seo/page-meta.json";

const SITE = "https://maple4k.ca";
const CITIES: Record<string, string> = {
  "/iptv-toronto": "Toronto", "/iptv-vancouver": "Vancouver", "/iptv-montreal": "Montréal", "/iptv-calgary": "Calgary",
  "/iptv-ottawa": "Ottawa", "/iptv-edmonton": "Edmonton", "/iptv-winnipeg": "Winnipeg", "/iptv-quebec": "Québec City",
  "/iptv-halifax": "Halifax", "/iptv-hamilton": "Hamilton", "/iptv-victoria": "Victoria", "/iptv-london-ontario": "London, Ontario",
};
// Hand-written pages that ship no page-level schema of their own (checked by scripts/audit-deep.mjs).
const WEBPAGE = new Set([
  "/about", "/best-iptv-app-canada", "/best-iptv-apps-canada", "/best-iptv-canada", "/best-iptv-for-sports-canada",
  "/channels-list", "/free-trial", "/how-it-works", "/iptv-4k", "/iptv-android-canada", "/iptv-android-tv-canada",
  "/iptv-apple-tv-canada", "/iptv-box", "/iptv-firestick-canada", "/iptv-formula", "/iptv-ios-canada", "/iptv-lg-tv-canada",
  "/iptv-mag-box-canada", "/iptv-near-me", "/iptv-providers-canada", "/iptv-roku-canada", "/iptv-samsung-tv-canada",
  "/iptv-smart-tv-canada", "/iptv-smarters-pro-canada", "/iptv-windows-canada", "/referral", "/reseller", "/smart-iptv",
  "/stb-emu-canada", "/tivimate-canada",
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
      offers: { "@type": "AggregateOffer", priceCurrency: "CAD", lowPrice: "9", highPrice: "49", offerCount: "4", url: `${SITE}/pricing` },
    };
  } else if (WEBPAGE.has(path)) {
    schema = {
      "@context": "https://schema.org",
      "@type": path === "/about" ? "AboutPage" : "WebPage",
      name: meta.title,
      description: meta.description,
      url,
      inLanguage: path === "/iptv-quebec" ? "fr-CA" : "en-CA",
      isPartOf: { "@id": `${SITE}/#website` },
      publisher: org,
      dateModified: "2026-09-27",
    };
  }
  if (!schema) return null;
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
