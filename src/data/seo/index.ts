import type { SeoPageData } from "./types";
import { existing } from "./existing";
import { hubs } from "./hubs";
import { apps } from "./apps";
import { devices } from "./devices";
import { boxes } from "./boxes";
import { commerce } from "./commerce";
import { info } from "./info";
import { brands } from "./brands";
import { french } from "./french";
import { groupPages } from "./groups";
import { gaps } from "./gaps";
import { glossary } from "./glossary";
import { depthApps } from "./depth-apps";
import { depthDevices } from "./depth-devices";
import { depthCommerce } from "./depth-commerce";
import { depthInfo } from "./depth-info";
import { depthMisc } from "./depth-misc";
import { depth2 } from "./depth2";
import { depth3, sourcesMap } from "./depth3";
import { depth4 } from "./depth4";
import { depth5 } from "./depth5";
import type { Section } from "./types";

const depth: Record<string, Section[]> = {};
for (const d of [depthApps, depthDevices, depthCommerce, depthInfo, depthMisc, depth2, depth3, depth4, depth5]) {
  for (const [path, sections] of Object.entries(d)) depth[path] = [...(depth[path] ?? []), ...sections];
}

const base: SeoPageData[] = [
  ...hubs,
  ...apps,
  ...devices,
  ...boxes,
  ...commerce,
  ...info,
  ...brands,
  ...french,
  ...groupPages,
  ...gaps,
  ...glossary,
];

// Long-form depth sections are appended after the core sections of each page.
export const seoPages: SeoPageData[] = base.map(p => ({
  ...p,
  sections: depth[p.path] ? [...p.sections, ...depth[p.path]] : p.sections,
  sources: [...(p.sources ?? []), ...(sourcesMap[p.path] ?? [])],
}));

const byPath = new Map(seoPages.map(p => [p.path, p]));

export function getSeoPage(path: string): SeoPageData {
  const page = byPath.get(path);
  if (!page) throw new Error(`No SEO page data for ${path}`);
  return page;
}

export function lookupLink(path: string): { label: string; blurb: string } | null {
  const p = byPath.get(path);
  if (p) return { label: p.label, blurb: p.blurb };
  return existing[path] ?? null;
}

/** Related links for a page: hub first, explicit related, then same-cluster siblings. */
export function relatedFor(page: SeoPageData, max = 8): string[] {
  const out: string[] = [];
  const add = (p?: string) => {
    if (p && p !== page.path && !out.includes(p) && lookupLink(p)) out.push(p);
  };
  add(page.hub);
  (page.related ?? []).forEach(add);
  seoPages
    .filter(p => p.cluster === page.cluster && p.kind !== "hub")
    .forEach(p => add(p.path));
  return out.slice(0, max);
}

export { existingExtras } from "./extras-all";
