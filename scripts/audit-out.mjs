// Post-build SEO audit of ./out. Run: node scripts/audit-out.mjs
import { readdirSync, readFileSync, statSync, existsSync } from "fs";
import { join, relative } from "path";

const OUT = "out";
const SITE = "https://maple4k.ca";
const files = [];
(function walk(d) {
  for (const f of readdirSync(d)) {
    const p = join(d, f);
    if (statSync(p).isDirectory()) { if (f !== "_next") walk(p); }
    else if (f.endsWith(".html")) files.push(p);
  }
})(OUT);

const routeOf = (f) => {
  let r = "/" + relative(OUT, f).replace(/\\/g, "/").replace(/\.html$/, "");
  r = r.replace(/\/index$/, "") || "/";
  return r;
};
const routes = new Map(files.map(f => [routeOf(f), f]));

// redirect sources
const redirects = new Map();
for (const l of readFileSync("public/_redirects", "utf8").split("\n")) {
  const t = l.trim().split(/\s+/);
  if (t[0]?.startsWith("/") && t[1]) redirects.set(t[0], t[1]);
}

const inbound = new Map([...routes.keys()].map(r => [r, 0]));
const issues = [];
const titles = new Map();
const stats = { pages: 0, noFaq: [], noCanon: [], badH1: [], noBreadcrumb: [], dupTitle: [], broken: [], longTitle: [] };

for (const [route, file] of routes) {
  if (route === "/404" || route === "/_not-found") continue;
  const html = readFileSync(file, "utf8");
  stats.pages++;
  const h1s = (html.match(/<h1[\s>]/g) || []).length;
  if (h1s !== 1) stats.badH1.push(`${route} (${h1s})`);
  const title = (html.match(/<title>([^<]*)<\/title>/) || [])[1] || "";
  if (title.length > 65) stats.longTitle.push(`${route} ${title.length}`);
  if (titles.has(title)) stats.dupTitle.push(`${route} = ${titles.get(title)}`);
  titles.set(title, route);
  const canon = (html.match(/<link rel="canonical" href="([^"]+)"/) || [])[1];
  const expected = route === "/" ? SITE : SITE + route;
  if (!canon) stats.noCanon.push(route);
  else if (canon.replace(/\/$/, "") !== expected) stats.noCanon.push(`${route} → ${canon}`);
  const ld = [...html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map(m => m[1]);
  const hasFaq = ld.some(j => /"FAQPage"/.test(j));
  if (!hasFaq && !/^\/(order|whatsapp-contact|privacy-policy|terms-of-service|refund-policy|dmca|disclaimer)/.test(route) && !/^\/pricing\/\d/.test(route)) stats.noFaq.push(route);
  if (route !== "/" && !ld.some(j => /"BreadcrumbList"/.test(j))) stats.noBreadcrumb.push(route);
  for (const m of html.matchAll(/href="(\/[^"#?]*)"/g)) {
    let h = m[1].replace(/\/$/, "") || "/";
    if (h.startsWith("/_next") || /\.(ico|jpg|png|webp|svg|xml|txt)$/.test(h)) continue;
    if (routes.has(h)) inbound.set(h, (inbound.get(h) || 0) + (h === route ? 0 : 1));
    else if (redirects.has(h)) stats.broken.push(`${route} → ${h} (redirect, prefer canonical)`);
    else stats.broken.push(`${route} → ${h} (404)`);
  }
}

const orphans = [...inbound].filter(([r, n]) => n === 0 && r !== "/" && r !== "/404" && r !== "/_not-found").map(([r]) => r);
console.log(`Pages audited: ${stats.pages}`);
for (const [k, v] of Object.entries(stats)) if (Array.isArray(v)) console.log(`${k}: ${v.length}${v.length ? "\n  " + v.slice(0, Number(process.env.N || 40)).join("\n  ") : ""}`);
console.log(`orphans (0 inbound): ${orphans.length}${orphans.length ? "\n  " + orphans.join("\n  ") : ""}`);
