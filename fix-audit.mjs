/**
 * Comprehensive audit fix script:
 * 1. Remove all " CAD" / "CAD" references
 * 2. Fix wrong prices: $19 → $9, $79 → $49 (global); $15/$60/$100 in specific files
 * 3. Fix "Maple4KTV" → "Maple4K" everywhere
 * 4. Fix meta title suffixes: "| Maple4K Canada" → "| Maple4K"
 * 5. Fix multi-device page titles
 */
import { readFileSync, writeFileSync, readdirSync, statSync } from "fs";
import { join } from "path";

function allTsx(dir) {
  const results = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) results.push(...allTsx(full));
    else if (entry.endsWith(".tsx") || entry.endsWith(".ts")) results.push(full);
  }
  return results;
}

const files = allTsx("src");
let totalFixed = 0;

// Per-file price fixes (wrong prices that vary by file)
const perFilePriceFixes = {
  "src/app/pricing/1-month/page.tsx": [["$15", "$9"]],
  "src/app/pricing/6-months/page.tsx": [["$60", "$39"]],
  "src/app/pricing/12-months/page.tsx": [["$100", "$49"]],
};

for (const file of files) {
  let content = readFileSync(file, "utf-8");
  const original = content;

  // 1. Fix doubled brand name from previous partial replacement
  content = content.replaceAll("Maple4KTV Maple4K", "Maple4K");

  // 2. Fix brand name
  content = content.replaceAll("Maple4KTV", "Maple4K");

  // 3. Remove " CAD" (space before CAD — covers "$9 CAD", "$19 CAD/month", etc.)
  content = content.replaceAll(" CAD", "");

  // 4. Fix meta title suffixes
  content = content.replaceAll("| Maple4K Canada", "| Maple4K");
  content = content.replaceAll("– Maple4K Canada", "| Maple4K");

  // 5. Global wrong-price fixes (consistent across all files)
  //    $19 is always a wrong price reference for the $9/month plan
  //    $79 is always a wrong price reference for the $49/year plan
  content = content.replaceAll("$19", "$9");
  content = content.replaceAll("$79", "$49");

  // 6. Per-file price fixes
  const fixes = perFilePriceFixes[file];
  if (fixes) {
    for (const [from, to] of fixes) {
      content = content.replaceAll(from, to);
    }
  }

  if (content !== original) {
    writeFileSync(file, content);
    totalFixed++;
    console.log(`✓ ${file.replace("src/app/", "")}`);
  }
}

console.log(`\nDone: ${totalFixed} files updated.`);
