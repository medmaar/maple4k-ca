"use client";
import { usePathname } from "next/navigation";
import { existing } from "../data/seo/existing";

const SITE = "https://maple4k.ca";

// Older pages that do not ship their own BreadcrumbList JSON-LD get an automatic trail here.
// (New SEO pages and the rest of the site emit their own, so they are not listed — this
// avoids duplicate BreadcrumbList blocks.)
const CITY_PARENT = "/ca/iptv-cities";
const PARENTS: Record<string, string> = {
  "/ca/iptv-calgary": CITY_PARENT, "/ca/iptv-edmonton": CITY_PARENT, "/ca/iptv-halifax": CITY_PARENT,
  "/ca/iptv-hamilton": CITY_PARENT, "/ca/iptv-london-ontario": CITY_PARENT, "/ca/iptv-montreal": CITY_PARENT,
  "/ca/iptv-near-me": CITY_PARENT, "/ca/iptv-ottawa": CITY_PARENT, "/ca/iptv-quebec": CITY_PARENT,
  "/ca/iptv-vancouver": CITY_PARENT, "/ca/iptv-victoria": CITY_PARENT, "/ca/iptv-winnipeg": CITY_PARENT,
  "/ca/iptv-box": "/iptv-set-top-box",
  "/blog/iptv-smarters-pro-canada": "/ca/blog",
  "/ca/about": "",
  "/ca/free-trial": "",
  "/ca/iptv-providers-canada": "/ca/best-iptv-canada",
};

const NAMES: Record<string, string> = {
  "/ca/about": "About Maple4K",
  "/ca/best-iptv-canada": "Best IPTV Canada",
  "/ca/iptv-providers-canada": "IPTV Providers Canada",
  "/ca/free-trial": "Free Trial",
  "/ca/iptv-cities": "IPTV by City",
  "/iptv-set-top-box": "IPTV Set-Top Boxes",
  "/ca/iptv-box": "IPTV Box",
  "/ca/blog": "Blog",
  "/ca/iptv-near-me": "IPTV Near Me",
  "/blog/iptv-smarters-pro-canada": "IPTV Smarters Pro Tutorial",
};

function label(path: string): string {
  if (NAMES[path]) return NAMES[path];
  const known = existing[path];
  if (known) return known.label;
  const seg = path.split("/").filter(Boolean).pop() ?? "";
  let m = seg.match(/^(\d+)-devices$/);
  if (m) return `${m[1]} Connections`;
  m = seg.match(/^(\d+)-(months?|year)$/);
  if (m) return `${m[1]} ${m[2] === "year" ? "Year" : Number(m[1]) === 1 ? "Month" : "Months"}`;
  return seg.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
}

function trailFor(path: string): { name: string; item: string }[] | null {
  const trail: { name: string; item: string }[] = [{ name: "Home", item: SITE }];
  const pricingBase = path.startsWith("/ca/pricing/") ? "/ca/pricing/" : path.startsWith("/pricing/") ? "/pricing/" : null;
  if (pricingBase) {
    trail.push({ name: "Pricing", item: SITE + "/ca/pricing" });
    // /pricing/3-devices/6-months → skip the page-less "/pricing/3-devices" level
    const parts = path.slice(pricingBase.length).split("/").filter(Boolean);
    const name = parts.length === 2 ? `${label("/" + parts[0])} – ${label("/" + parts[1])}` : label(path);
    trail.push({ name, item: SITE + path });
    return trail;
  }
  if (!(path in PARENTS)) return null;
  const parent = PARENTS[path];
  if (parent) trail.push({ name: label(parent), item: SITE + parent });
  trail.push({ name: label(path), item: SITE + path });
  return trail;
}

export default function AutoBreadcrumb() {
  const path = (usePathname() || "/").replace(/\/$/, "") || "/";
  const trail = trailFor(path);
  if (!trail) return null;
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c.name, item: c.item })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
