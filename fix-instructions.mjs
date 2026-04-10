import { readFileSync, writeFileSync, readdirSync, statSync } from "fs";
import { join } from "path";

function allTsx(dir) {
  const results = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) results.push(...allTsx(full));
    else if (entry.endsWith(".tsx")) results.push(full);
  }
  return results;
}

const files = allTsx("src");
let updated = 0;

// Pattern to remove the old instruction block from product pages
// Matches the comment + div with the two instruction paragraphs
const instructionBlockPattern =
  /\s*\{\/\* 2\. Instruction text \*\/\}\s*<div className="mb-10">\s*<p[^>]*>Fill out the form below[^<]*<\/p>\s*<p[^>]*>\s*We(?:&apos;|')ll send your login credentials[^<]*<\/p>\s*<\/div>/g;

for (const file of files) {
  let content = readFileSync(file, "utf-8");
  const original = content;

  // 1. Remove old instruction block
  content = content.replace(instructionBlockPattern, "");

  // 2. Replace all "24 hours" → "5 minutes"
  content = content.replaceAll("24 hours", "5 minutes");
  content = content.replaceAll("24-hour", "5-minute");

  if (content !== original) {
    writeFileSync(file, content);
    updated++;
    console.log(`✓ ${file.replace("src/app/", "")}`);
  }
}

console.log(`\nDone: ${updated} files updated.`);
