export type Section = {
  h2: string;
  paras?: string[];
  bullets?: string[];
  table?: { head: string[]; rows: string[][] };
  note?: string;
};

export type Faq = { q: string; a: string };

export type SeoPageData = {
  /** URL path, e.g. "/tivimate-premium-canada" */
  path: string;
  /** Cluster id — pages in the same cluster cross-link automatically */
  cluster: string;
  /** Parent hub/pillar path (breadcrumb + "back to pillar" link) */
  hub?: string;
  kind?: "page" | "hub" | "blog" | "brand";
  /** Short anchor text used when other pages link here */
  label: string;
  /** Card blurb used by hub pages and related-link cards */
  blurb: string;
  /** <title> — absolute, target 50–60 chars */
  title: string;
  /** meta description — target 120–160 chars */
  description: string;
  keywords: string[];
  eyebrow: string;
  h1: string;
  /** Answer-first opening paragraph (supports [text](/path) links) */
  intro: string;
  quick?: { label: string; text: string };
  sections: Section[];
  steps?: { h2: string; items: { title: string; body: string }[] };
  features?: { h2: string; items: { icon: string; title: string; body: string }[] };
  faqTitle?: string;
  faqs: Faq[];
  /** Extra related paths (existing or new) */
  related?: string[];
  /** Hub pages: explicit list of child paths to render as cards */
  hubLinks?: string[];
  /** Extra old/typo URLs that should 301 to this page */
  aliases?: string[];
  ctaTitle: string;
  ctaText: string;
  lang?: "en-CA" | "fr-CA";
  /** hreflang siblings, e.g. [{ lang: "en-CA", path: "/best-iptv-canada" }] */
  alt?: { lang: string; path: string }[];
  /** Brand/trademark disclaimer */
  notAffiliated?: string;
  /** Outbound authority links ("Sources & further reading") */
  sources?: { label: string; url: string }[];
  datePublished?: string;
  dateModified?: string;
};
