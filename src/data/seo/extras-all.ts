import { existingExtras as a, type ExistingExtra } from "./extras";
import { existingExtras2 as b } from "./extras2";

/** Merge both extras maps; when a path appears in both, sections/keywords are concatenated. */
export const existingExtras: Record<string, ExistingExtra> = { ...a };
for (const [path, x] of Object.entries(b)) {
  const cur = existingExtras[path];
  existingExtras[path] = cur
    ? { keywords: [...cur.keywords, ...x.keywords], sections: [...cur.sections, ...x.sections], qas: [...(cur.qas ?? []), ...(x.qas ?? [])], jsonld: cur.jsonld }
    : x;
}
