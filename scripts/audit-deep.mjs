// Deep per-page SEO audit of ./out (run after `npm run build`).  node scripts/audit-deep.mjs [--json]
import { readdirSync, readFileSync, statSync, existsSync } from "fs";
import { join, relative } from "path";

const OUT = "out";
const SITE = "https://maple4k.ca";
const files = [];
(function walk(d) { for (const f of readdirSync(d)) { const p = join(d, f); if (statSync(p).isDirectory()) { if (f !== "_next") walk(p); } else if (f.endsWith(".html")) files.push(p); } })(OUT);
const routeOf = f => { let r = "/" + relative(OUT, f).replace(/\\/g, "/").replace(/\.html$/, ""); return r.replace(/\/index$/, "") || "/"; };
const SKIP = new Set(["/404", "/_not-found", "/order", "/whatsapp-contact"]);
const all = files.map(f => ({ route: routeOf(f), html: readFileSync(f, "utf8") })).filter(p => !SKIP.has(p.route));
const noindexed = new Set(all.filter(p => /<meta[^>]*name="robots"[^>]*noindex/i.test(p.html)).map(p => p.route));
const pages = all.filter(p => !noindexed.has(p.route));
const routeSet = new Set(all.map(p => p.route));
const redirects = new Map();
for (const l of readFileSync("public/_redirects", "utf8").split("\n")) { const t = l.trim().split(/\s+/); if (t[0]?.startsWith("/") && t[1]) redirects.set(t[0], t[1]); }
const sitemap = new Set([...readFileSync("public/sitemap.xml", "utf8").matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1].replace(SITE, "") || "/"));

const dec = s => s.replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
const strip = h => dec(h.replace(/<script[\s\S]*?<\/script>/g, " ").replace(/<style[\s\S]*?<\/style>/g, " ").replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ").trim();
const meta = (h, attr, name) => { const m = h.match(new RegExp(`<meta[^>]*${attr}="${name}"[^>]*>`, "i")); if (!m) return null; const c = m[0].match(/content="([^"]*)"/); return c ? dec(c[1]) : null; };

const issues = new Map(); // route -> string[]
const add = (route, sev, msg) => { if (!issues.has(route)) issues.set(route, []); issues.get(route).push(`${sev} ${msg}`); };
const titles = new Map(), descs = new Map(), sigs = [];

for (const { route, html } of pages) {
  // ---------- head ----------
  const title = dec((html.match(/<title>([^<]*)<\/title>/) || [])[1] || "");
  const desc = meta(html, "name", "description");
  if (!title) add(route, "E", "missing title"); else { if (title.length > 62) add(route, "W", `title ${title.length}c`); if (title.length < 35) add(route, "W", `title short ${title.length}c`); if (titles.has(title)) add(route, "E", `duplicate title with ${titles.get(title)}`); titles.set(title, route); }
  if (!desc) add(route, "E", "missing meta description"); else { if (desc.length < 100) add(route, "W", `desc short ${desc.length}c`); if (desc.length > 165) add(route, "W", `desc long ${desc.length}c`); if (descs.has(desc)) add(route, "E", `duplicate description with ${descs.get(desc)}`); descs.set(desc, route); }
  const canon = (html.match(/<link rel="canonical" href="([^"]+)"/) || [])[1];
  const exp = route === "/" ? SITE : SITE + route;
  if (!canon) add(route, "E", "missing canonical"); else if (canon.replace(/\/$/, "") !== exp) add(route, "E", `canonical mismatch ${canon}`);
    if (!meta(html, "name", "viewport")) add(route, "E", "missing viewport");
  // OG / Twitter
  for (const k of ["og:title", "og:description", "og:url", "og:type", "og:image", "og:site_name", "og:locale"]) if (!meta(html, "property", k)) add(route, "W", `missing ${k}`);
  for (const k of ["twitter:card", "twitter:title", "twitter:description", "twitter:image"]) if (!meta(html, "name", k)) add(route, "W", `missing ${k}`);
  const ogu = meta(html, "property", "og:url"); if (ogu && ogu.replace(/\/$/, "") !== exp) add(route, "W", `og:url mismatch ${ogu}`);
  // hreflang
  const hl = [...html.matchAll(/<link rel="alternate" hreflang="([^"]+)" href="([^"]+)"/g)].map(m => [m[1], m[2]]);
  if (hl.length) {
    const self = hl.find(([, u]) => u.replace(/\/$/, "") === exp);
    if (!self) add(route, "E", "hreflang missing self reference");
    if (!hl.some(([l]) => l === "x-default")) add(route, "W", "hreflang missing x-default");
    for (const [, u] of hl) {
      const r = u.replace(SITE, "").replace(/\/$/, "") || "/";
      const other = pages.find(p => p.route === r);
      if (!other) { add(route, "E", `hreflang target 404 ${u}`); continue; }
      if (r !== route) { const back = [...other.html.matchAll(/<link rel="alternate" hreflang="[^"]+" href="([^"]+)"/g)].map(m => m[1].replace(/\/$/, "")); if (!back.includes(exp)) add(route, "E", `hreflang not reciprocal from ${r}`); }
    }
  }
  // render blocking
  const head = (html.match(/<head>([\s\S]*?)<\/head>/) || [])[1] || "";
  for (const m of head.matchAll(/<script[^>]*src="([^"]+)"[^>]*>/g)) if (!/async|defer|type="module"|noModule/i.test(m[0])) add(route, "W", `render-blocking script ${m[1].slice(0, 60)}`);
  // ---------- body ----------
  const body = (html.match(/<body[\s\S]*<\/body>/) || [html])[0];
  const mainM = body.match(/<main[\s\S]*?<\/main>/);
  const main = mainM ? mainM[0] : body;
  const h1s = [...main.matchAll(/<h1[\s>][\s\S]*?<\/h1>/g)].map(m => strip(m[0]));
  if (h1s.length !== 1) add(route, "E", `${h1s.length} H1`);
  // heading hierarchy
  let prev = 0;
  for (const m of main.matchAll(/<h([1-6])[\s>]/g)) { const l = +m[1]; if (prev && l > prev + 1) add(route, "W", `heading skips h${prev}→h${l}`); prev = l; }
  const text = strip(main);
  const words = text.split(/\s+/).length;
  const noDepth = /^\/(privacy-policy|terms-of-service|refund-policy|dmca|disclaimer|contact|referral|free-trial|order|about|reviews|blog|channels-list)$/.test(route) || /^\/pricing\//.test(route);
  if (words < 600 && !noDepth) add(route, "W", `only ${words} words`);
  // primary keyword in first paragraph
  const kw = (meta(html, "name", "keywords") || "").split(",")[0]?.trim().toLowerCase();
  const firstP = strip((main.match(/<p[\s>][\s\S]*?<\/p>/g) || []).slice(0, 3).join(" ")).toLowerCase();
  const kwToks = kw.split(/\s+/).filter(w => w.length > 2 && !["for","the","and","how"].includes(w)); const hay = (firstP + " " + h1s.join(" ")).toLowerCase(); const hit = kwToks.filter(w => hay.includes(w.replace(/s$/, ""))).length; if (kw && kw.length > 3 && hit < Math.ceil(kwToks.length * 0.7)) add(route, "I", `primary keyword "${kw}" not in H1/first paragraphs`);
  // links
  let internal = 0, outbound = 0;
  for (const m of main.matchAll(/<a[^>]*href="([^"]+)"[^>]*>/g)) {
    const h = m[1];
    if (/^https?:\/\//.test(h) && !h.startsWith(SITE)) { outbound++; continue; }
    if (h.startsWith("#") || h.startsWith("mailto:") || h.startsWith("tel:")) continue;
    const p = h.replace(SITE, "").split("#")[0].split("?")[0].replace(/\/$/, "") || "/";
    internal++;
    if (!routeSet.has(p) && !p.startsWith("/_next") && !/\.(ico|jpg|png|webp|svg|xml|txt)$/.test(p) && p !== "/link/wa") add(route, redirects.has(p) ? "W" : "E", `${redirects.has(p) ? "link to redirect" : "dead link"} ${h}`);
  }
  if (internal < 3 && !noDepth) add(route, "W", `only ${internal} internal links in main`);
  if (!/\/free-trial|\/pricing|\/order/.test(main)) add(route, "W", "no CTA link to trial/pricing");
  // images
  for (const m of body.matchAll(/<img[^>]*>/g)) { const t = m[0]; if (!/alt=/.test(t)) add(route, "W", "img without alt"); if (!/width=/.test(t) || !/height=/.test(t)) add(route, "I", "img without width/height"); }
  // ---------- schema ----------
  const ld = [...html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map(m => m[1]);
  const objs = [];
  ld.forEach((j, i) => { try { objs.push(JSON.parse(j)); } catch (e) { add(route, "E", `JSON-LD #${i} parse error`); } });
  const types = objs.flatMap(o => Array.isArray(o) ? o : [o]).map(o => o["@type"]);
  const dupT = types.filter((t, i) => types.indexOf(t) !== i && !["Organization", "WebSite"].includes(t));
  if (dupT.length) add(route, "W", `duplicate @type ${[...new Set(dupT)].join(",")}`);
  for (const o of objs.flat()) {
    if (o["@type"] === "FAQPage") {
      const qs = o.mainEntity || [];
      if (!qs.length) add(route, "E", "FAQPage empty");
      for (const q of qs) { if (q["@type"] !== "Question" || !q.name || !q.acceptedAnswer?.text) add(route, "E", "FAQPage malformed question"); else if (!text.toLowerCase().includes(q.name.toLowerCase().slice(0, 30))) add(route, "W", `FAQ schema question not visible: ${q.name.slice(0, 40)}`); }
    }
    if (o["@type"] === "BreadcrumbList") { const it = o.itemListElement || []; if (!it.length || it.some(x => !x.name || !x.item || !x.position)) add(route, "E", "BreadcrumbList malformed"); }
    if (o["@type"] === "Product" && !(o.offers && o.name)) add(route, "E", "Product missing offers/name");
    if (o["@type"] === "HowTo" && !(o.step || []).length) add(route, "E", "HowTo without steps");
  }
  if (!types.includes("FAQPage") && !/^\/(privacy|terms|refund|dmca|disclaimer)/.test(route)) add(route, "E", "no FAQPage");
  if (route !== "/" && !types.includes("BreadcrumbList")) add(route, "E", "no BreadcrumbList");
  if (!types.some(t => ["WebPage", "CollectionPage", "BlogPosting", "Article", "Product", "Service", "LocalBusiness", "AboutPage", "ContactPage", "Blog"].includes(t))) add(route, "W", "no page-level schema (WebPage/Product/Service…)");
  // ---------- trust ----------
  if (!noDepth && !/free (24|trial)|24-hour|24 hour|24h|essai gratuit/i.test(text)) add(route, "I", "no trial/guarantee mention");
  if (!noDepth && !/support|soutien|whatsapp|telegram/i.test(text)) add(route, "I", "no support mention");
  // near-duplicate shingles
  const toks = text.toLowerCase().replace(/[^a-z0-9 ]/g, " ").split(/\s+/).filter(Boolean);
  const sh = new Set(); for (let i = 0; i + 8 <= toks.length; i += 4) sh.add(toks.slice(i, i + 8).join(" "));
  sigs.push({ route, sh, words });
  // ---------- sitemap ----------
  if (!sitemap.has(route)) add(route, "E", "not in sitemap.xml");
}
// near duplicates
for (let i = 0; i < sigs.length; i++) for (let j = i + 1; j < sigs.length; j++) {
  const a = sigs[i], b = sigs[j]; if (a.sh.size < 30 || b.sh.size < 30) continue;
  let inter = 0; for (const s of a.sh) if (b.sh.has(s)) inter++;
  const sim = inter / Math.min(a.sh.size, b.sh.size);
  if (sim > 0.45) add(a.route, "W", `near-duplicate (${Math.round(sim * 100)}%) of ${b.route}`);
}
for (const r of noindexed) if (sitemap.has(r)) console.log("NOINDEX PAGE IN SITEMAP:", r);
// sitemap extras
for (const s of sitemap) if (!routeSet.has(s)) console.log("SITEMAP URL WITHOUT PAGE:", s);
const sev = { E: 0, W: 0, I: 0 };
const summary = {};
for (const [r, list] of issues) for (const m of list) { sev[m[0]]++; const k = m.slice(2).replace(/[0-9]+/g, "#").replace(/\/[\w\-/]+/g, "/…").slice(0, 55); summary[k] = (summary[k] || 0) + 1; }
console.log(`Pages: ${pages.length}  Errors: ${sev.E}  Warnings: ${sev.W}  Info: ${sev.I}`);
console.log(Object.entries(summary).sort((a, b) => b[1] - a[1]).slice(0, 40).map(([k, v]) => `${String(v).padStart(4)}  ${k}`).join("\n"));
if (process.argv.includes("--full")) for (const [r, list] of [...issues].sort()) console.log(r + "\n  " + list.join("\n  "));
