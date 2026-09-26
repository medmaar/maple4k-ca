// Converts large content JPGs in public/ to WebP (max 1280px wide) and prints dimensions as JSON.
import sharp from "sharp";
import { readdirSync, writeFileSync } from "fs";
const skip = new Set(["og-image.jpg"]);
const dims = {};
for (const f of readdirSync("public").filter(f => f.endsWith(".jpg") && !skip.has(f))) {
  const out = f.replace(/\.jpg$/, ".webp");
  const img = sharp(`public/${f}`).rotate();
  const meta = await img.metadata();
  const width = Math.min(meta.width, 1280);
  const info = await img.resize({ width }).webp({ quality: 76 }).toFile(`public/${out}`);
  dims["/" + out] = { width: info.width, height: info.height, kb: Math.round(info.size / 1024) };
}
writeFileSync("scripts/image-dims.json", JSON.stringify(dims, null, 1));
console.log(dims);
