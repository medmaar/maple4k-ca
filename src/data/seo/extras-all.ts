import { existingExtras as a, type ExistingExtra } from "./extras";
import { existingExtras2 as b } from "./extras2";
import { existingExtras3 as c } from "./extras3";
import { existingExtras4 as d } from "./extras4";

/** Merge both extras maps; when a path appears in both, sections/keywords are concatenated. */
export const existingExtras: Record<string, ExistingExtra> = { ...a };
for (const src of [b, c, d]) {
  for (const [path, x] of Object.entries(src)) {
    const cur = existingExtras[path];
    existingExtras[path] = cur
      ? {
          keywords: [...cur.keywords, ...x.keywords],
          sections: [...cur.sections, ...x.sections],
          qas: [...(cur.qas ?? []), ...(x.qas ?? [])],
          jsonld: [...(cur.jsonld ?? []), ...(x.jsonld ?? [])],
          sources: [...(cur.sources ?? []), ...(x.sources ?? [])],
        }
      : x;
  }
}
