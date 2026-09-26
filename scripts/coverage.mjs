// Keyword coverage: which keywords from the xlsx-derived json are not present in any page's keywords/title/h1/aliases/text.
import { readFileSync, readdirSync, statSync } from "fs";
import { join } from "path";
import { buildSync } from "esbuild";
import { createRequire } from "module";
import { tmpdir } from "os";
const out = join(tmpdir(), "cov.cjs");
buildSync({ entryPoints: ["src/data/seo/index.ts"], bundle: true, platform: "node", format: "cjs", outfile: out, logLevel: "error" });
const { seoPages } = createRequire(import.meta.url)(out);
const rows = JSON.parse(readFileSync(process.argv[2], "utf8"));
const norm = s => s.toLowerCase().replace(/[^a-z0-9à-ÿ ]+/g, " ").replace(/\s+/g, " ").trim();
// strong coverage = keyword appears in a keywords array / title / h1 / alias slug
const strong = new Set(), text = [];
for (const p of seoPages) {
  p.keywords.forEach(k => strong.add(norm(k)));
  strong.add(norm(p.title)); strong.add(norm(p.h1));
  (p.aliases ?? []).forEach(a => strong.add(norm(a.replace(/-/g, " "))));
  text.push(norm(JSON.stringify(p)));
}
function walk(d, o = []) { for (const f of readdirSync(d)) { const p = join(d, f); if (statSync(p).isDirectory()) walk(p, o); else if (p.endsWith("page.tsx") && !readFileSync(p, "utf8").includes("getSeoPage") && !p.includes("channels-list")) o.push(p); } return o; }
const oldFiles = walk("src/app").map(f => readFileSync(f, "utf8"));
for (const src of oldFiles) {
  for (const m of src.matchAll(/keywords:\s*"([^"]*)"/g)) m[1].split(",").forEach(k => strong.add(norm(k)));
  for (const m of src.matchAll(/absolute:\s*"([^"]*)"/g)) strong.add(norm(m[1]));
}
try { const ex = createRequire(import.meta.url)(out).existingExtras ?? {}; for (const v of Object.values(ex)) (v.keywords ?? []).forEach(k => strong.add(norm(k))); } catch {}
const old = oldFiles.map(norm).join(" ");
const all = text.join(" ") + " " + old;
const missing = [];
for (const [k, v] of rows) {
  const n = norm(k);
  if ([...strong].some(s => s === n || s.includes(n))) continue; // in a keywords list / title
  missing.push([k, v, all.includes(n) ? "text-only" : "none"]);
}
console.log(rows.length, "keywords;", missing.length, "not in any keywords/title;", missing.filter(m => m[2] === "none").length, "absent entirely");
for (const m of missing) console.log(m.join("|"));
