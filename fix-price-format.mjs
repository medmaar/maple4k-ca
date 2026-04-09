import { readFileSync, writeFileSync, readdirSync, statSync } from "fs";
import { join } from "path";

// Collect all product page.tsx files under src/app/pricing/
function collectPages(dir) {
  const results = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      results.push(...collectPages(full));
    } else if (entry === "page.tsx") {
      results.push(full);
    }
  }
  return results;
}

const pages = collectPages("src/app/pricing");

// Match the price display block and capture the actual price
// Pattern works for both formats (baseline flex + del/span)
const pattern =
  /(\s*)<div style=\{\{ display: "flex", alignItems: "baseline", gap: 12, marginTop: 10 \}\}>\s*<del[^>]*>\$\d+<\/del>\s*<span style=\{\{ color: "#fd0322", fontWeight: 700, fontSize: "2rem" \}\}>\$(\d+)<\/span>\s*<\/div>/;

let updated = 0;
for (const file of pages) {
  const content = readFileSync(file, "utf-8");
  const m = content.match(pattern);
  if (!m) continue;
  const indent = m[1]; // leading whitespace
  const price = m[2];  // actual price
  const replacement =
    `${indent}<div style={{ display: "flex", alignItems: "center", gap: 16, marginTop: 10 }}>` +
    `\n${indent}  <span style={{ color: "#fd0322", fontWeight: 800, fontSize: "2rem" }}>Price : $${price}</span>` +
    `\n${indent}  <span style={{ background: "rgba(253,3,34,0.15)", color: "#fd0322", border: "1px solid rgba(253,3,34,0.4)", fontWeight: 700, fontSize: 12, padding: "4px 12px", borderRadius: 999, whiteSpace: "nowrap" }}>50% OFF</span>` +
    `\n${indent}</div>`;
  const newContent = content.replace(pattern, replacement);
  writeFileSync(file, newContent);
  console.log(`✓ ${file.replace("src/app/pricing/", "")} — $${price}`);
  updated++;
}

console.log(`\nDone: ${updated} pages updated.`);
