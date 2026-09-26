import type { Faq, SeoPageData } from "./types";

type Brand = {
  slug: string;
  name: string;
  /** keyword variants people type */
  variants: string[];
  /** brand-specific paragraph — what these searchers are usually after */
  focus: string;
  /** brand-specific extra FAQ */
  extraFaq: Faq[];
  blurb: string;
};

function brandPage(b: Brand): SeoPageData {
  const path = `/${b.slug}-alternative`;
  return {
    path,
    cluster: "alt",
    hub: "/iptv-alternatives",
    kind: "brand",
    label: `${b.name} alternative`,
    blurb: b.blurb,
    title: `${b.name} Alternative Canada 2026 — Compare | Maple4K`,
    description: `Looking for ${b.name}? Maple4K is an independent Canadian IPTV service — 50,000+ channels, 4K and a free 24-hour trial from $9/month. Compare before you choose.`,
    keywords: [...b.variants, `${b.name} alternative`, `${b.name} alternative canada`, `${b.name} vs maple4k`],
    eyebrow: `${b.name} · Alternative`,
    h1: `${b.name} Alternative in Canada — Compare Before You Choose`,
    intro: `If you searched for ${b.name}, note that Maple4K is an independent Canadian IPTV service and is not affiliated with it. We cannot speak to ${b.name}'s channels, pricing or reliability, but we can show how to compare any IPTV service — and what Maple4K offers: 50,000+ channels, 4K, and a free 24-hour trial from $9 per month.`,
    quick: { label: "Quick answer", text: `Compare any ${b.name}-style service on five things: free trial, price, support, stability at peak times and device compatibility. Maple4K lets you test all five free for 24 hours — no credit card.` },
    sections: [
      {
        h2: `What people searching for ${b.name} usually want`,
        paras: [b.focus],
      },
      {
        h2: `How to compare ${b.name} with any IPTV service`,
        paras: [`Use the same five-point test on ${b.name} and on Maple4K: free trial, price shown up front, support reply speed, stability on a live game at peak time, and compatibility with your device. The full checklist is on our [IPTV alternatives page](/iptv-alternatives); Maple4K's side of it is a free 24-hour trial, published prices from $9 (see [pricing](/pricing)), WhatsApp/Telegram/email support and 4K H.265 streams.`],
      },
      {
        h2: "Switching to Maple4K in 5 minutes",
        bullets: [
          "Keep your device and your player app — [TiviMate](/tivimate-canada), [IPTV Smarters Pro](/iptv-smarters-pro-canada) or [XCIPTV](/xciptv-canada) all work",
          "[Request the free trial](/free-trial) and receive Xtream Codes details",
          "Add them as a new playlist next to your existing one and compare side by side",
          "Read [reviews](/reviews) and [best IPTV in Canada](/best-iptv-canada) for independent context",
        ],
      },
    ],
    faqs: [
      { q: `Is Maple4K affiliated with ${b.name}?`, a: `No. Maple4K is an independent Canadian IPTV service. ${b.name} is a separate name and we have no relationship with it.` },
      { q: `Can I use my ${b.name} login in Maple4K or vice versa?`, a: "No. Logins are specific to each service. You will receive separate Xtream Codes details for Maple4K after starting the [free trial](/free-trial)." },
      ...b.extraFaq,
      { q: "Which apps work with Maple4K?", a: "Any player that supports Xtream Codes or M3U, including TiviMate, IPTV Smarters Pro and XCIPTV. See the [IPTV player hub](/iptv-player)." },
      { q: "How much does Maple4K cost?", a: "$9 for one month, $29 for three, $39 for six and $49 for twelve months on one connection. See [pricing](/pricing)." },
    ],
    related: ["/best-iptv-canada", "/iptv-providers-canada", "/top-iptv-providers-canada"],
    aliases: [`/${b.slug}`],
    ctaTitle: `Compare ${b.name}-Style IPTV with Maple4K Free`,
    ctaText: "24-hour trial. No card. See stability, channels and support for yourself.",
    notAffiliated: b.name,
  };
}

export const brandDefs: Brand[] = [
  {
    slug: "diablo-iptv",
    name: "Diablo IPTV",
    variants: ["diablo iptv", "iptv diablo", "diablo tv iptv"],
    blurb: "Searching Diablo IPTV? Compare Canadian options",
    focus: "Searches for Diablo IPTV tend to combine the name with 'app', 'login' and 'subscription', which suggests people want to know how it works and what it costs. Whatever service you choose, get pricing in writing, ask which apps are supported and test a live sports channel during a busy evening before paying for anything long-term.",
    extraFaq: [
      { q: "Is there a Diablo IPTV app I need to install?", a: "Services with a brand name usually work with standard players using Xtream Codes or M3U. With Maple4K you use any standard player — see the [player hub](/iptv-player)." },
      { q: "Diablo IPTV or IPTV Diablo — are they the same thing?", a: "Word order varies in searches; both refer to the same name. Maple4K is unrelated to either spelling." },
    ],
  },
  {
    slug: "forevertv",
    name: "ForeverTV",
    variants: ["forevertv", "forever iptv", "forever tv iptv"],
    blurb: "Searching ForeverTV? Compare IPTV options in Canada",
    focus: "People searching for ForeverTV often type it as one word and add 'iptv'. If you are switching or comparing, the useful questions are how long the service has operated, what happens if a channel disappears, and how quickly support replies. A service that promises 'forever' should still let you leave without a long contract.",
    extraFaq: [
      { q: "Does Maple4K offer a 'forever' plan?", a: "No — we sell 1, 3, 6 and 12-month plans. Read why [lifetime IPTV is risky](/iptv-lifetime-subscription-canada)." },
      { q: "ForeverTV vs Forever IPTV — same service?", a: "Searches vary; treat them as the same name. Maple4K is independent of both." },
    ],
  },
  {
    slug: "cloud-stream-iptv",
    name: "Cloud Stream",
    variants: ["cloud stream", "cloud stream iptv", "cloudstream iptv"],
    blurb: "Searching Cloud Stream? Compare IPTV options",
    focus: "Cloud Stream is a generic phrase, so searchers may mean a specific IPTV brand, a media app or cloud-based streaming in general. If you want live TV, sports and movies through one login, use the checklist below to compare providers, and remember that an app is only the player — you still need a service that supplies channels.",
    extraFaq: [
      { q: "Is Cloud Stream an app or a service?", a: "The phrase is used for several things. Check whether you need a player app or a channel provider. Maple4K is a channel provider that works in any standard player." },
      { q: "Is Cloud Stream the same as CloudStream the open-source app?", a: "There is a well-known open-source media app with a similar name. It is unrelated to Maple4K and not an IPTV provider." },
    ],
  },
  {
    slug: "pandar-tv",
    name: "Pandar TV",
    variants: ["pandar tv", "pandar iptv", "pandaiptv", "panda iptv"],
    blurb: "Searching Pandar TV? Compare IPTV options",
    focus: "Panda- and Pandar-style names are common in IPTV and searchers often mix spellings such as Pandar TV, Panda IPTV or PandaIPTV. Before subscribing to any of them, check the exact site name, confirm there is a trial and compare live-sport stability against other providers.",
    extraFaq: [
      { q: "Pandar TV, Panda IPTV and PandaIPTV — which is right?", a: "Spellings vary in searches. Always confirm the exact provider website. Maple4K is not connected to any of them." },
      { q: "Why compare providers before buying?", a: "Similar-sounding names can belong to unrelated services. Comparing trials and support avoids surprises." },
    ],
  },
  {
    slug: "edge-iptv",
    name: "Edge IPTV",
    variants: ["edge iptv", "iptv edge", "iptv edge canada"],
    blurb: "Searching Edge IPTV? Compare Canadian options",
    focus: "Searches for Edge IPTV combine the name with 'iptv' in either order. Speed and low latency are the usual reasons people pick an 'edge'-named service, so test latency on a live sports channel and compare EPG loading time on your device.",
    extraFaq: [
      { q: "Does 'edge' mean faster streaming?", a: "In networking, edge servers sit closer to users, but the name of a service does not guarantee performance. Test buffering during a live game." },
      { q: "Edge IPTV vs IPTV Edge?", a: "Word order varies; both are the same search. Maple4K is unrelated." },
    ],
  },
  {
    slug: "kemo-iptv",
    name: "Kemo IPTV",
    variants: ["kemo iptv", "kemoiptv", "kemo tv", "kemo iptv reddit"],
    blurb: "Searching Kemo IPTV? Compare Canadian options",
    focus: "Kemo IPTV is searched under several forms — Kemo IPTV, KemoIPTV, Kemo TV and 'kemo iptv reddit'. Reddit threads are useful for spotting common complaints, but they are also full of affiliate posts, so weigh them alongside trials and independent reviews.",
    extraFaq: [
      { q: "What does Reddit say about IPTV services?", a: "Opinions vary widely and often include affiliate links. Read our [Reddit summary](/blog/best-iptv-canada-reddit) for a balanced view." },
      { q: "Kemo IPTV vs KemoIPTV vs Kemo TV?", a: "Spelling variants of the same search. Maple4K is independent of all of them." },
    ],
  },
  {
    slug: "flix-iptv",
    name: "Flix IPTV",
    variants: ["flix iptv", "flixiptv", "flix ip tv", "flix iptv player", "flixtv iptv"],
    blurb: "Searching Flix IPTV? Compare IPTV options",
    focus: "Flix IPTV searches often mention 'player', which points to a common confusion between a service and a player app. A player only displays channels; you need a service that provides them. Confirm which one you actually need before paying.",
    extraFaq: [
      { q: "Is Flix IPTV a player or a provider?", a: "The name is used in both contexts by different websites. Check the site to confirm. Maple4K is a provider that works with any standard player." },
      { q: "FlixIPTV vs Flix IPTV Player?", a: "Different searches for possibly different things. See our [IPTV player hub](/iptv-player) to choose a player." },
    ],
  },
  {
    slug: "atlaspro-iptv",
    name: "AtlasPro",
    variants: ["atlaspro", "atlas pro iptv", "atlas iptv", "atlas pro ott", "atlas pro ontv iphone"],
    blurb: "Searching AtlasPro? Compare IPTV options",
    focus: "AtlasPro is typically searched with 'iptv', 'ott' and even iPhone-specific phrases, so people want to know which devices are supported. Before choosing any service, confirm it supports the device you own — iPhone, Fire Stick, Apple TV or smart TV — and that a free trial covers it.",
    extraFaq: [
      { q: "Does Maple4K work on iPhone?", a: "Yes, through apps like IPTV Smarters Pro. See [IPTV on iPhone & iPad](/iptv-ios-canada)." },
      { q: "AtlasPro vs Atlas Pro IPTV?", a: "Spelling variants of the same search. Maple4K is unrelated to either." },
    ],
  },
];

export const brands: SeoPageData[] = brandDefs.map(brandPage);
