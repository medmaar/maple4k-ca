import type { SeoPageData, Section } from "./types";

// [display name, spellings people search]
const names: [string, string[]][] = [
  ["Apollo TV", ["apollo tv iptv", "iptv apollo", "apollo iptv"]], ["Area51", ["area51 iptv"]], ["Aroma", ["aroma iptv"]],
  ["ATV", ["atv iptv"]], ["Avatar", ["avatar iptv"]], ["Blended", ["blended iptv"]], ["Blink", ["blink iptv"]],
  ["Blitzen", ["blitzen iptv"]], ["Bravo", ["bravo iptv"]], ["Briz", ["briz iptv"]], ["Canal", ["canal iptv"]],
  ["Cobra", ["cobraiptv"]], ["CoreTV", ["coretv"]], ["Crazy", ["crazy iptv"]], ["Dark", ["dark iptv", "dark media iptv"]],
  ["Datoo", ["datoo iptv"]], ["DLTA 4K", ["dlta 4k", "dlta 4k iptv", "dlta 4k tango pro"]], ["DMTN", ["dmtn iptv"]],
  ["Domino", ["domino iptv"]], ["Elon", ["eloniptv", "elon iptv"]], ["Eternal", ["eternal iptv", "eternal tv iptv"]],
  ["EVDTV", ["evdtv"]], ["Express", ["expressiptv", "iptv express"]], ["Fame", ["fame iptv"]], ["Flex", ["flex iptv", "flex iptv player", "iptv flex"]],
  ["Full IPTV", ["full iptv"]], ["Gemini Streamz", ["gemini streamz", "gemini streamz iptv"]], ["Geo", ["geo iptv", "geoiptv"]],
  ["Get IPTV", ["get iptv"]], ["Gotit", ["gotit iptv"]], ["Harmo", ["harmo iptv"]], ["High Tech", ["iptv high tech"]],
  ["iGate", ["igate iptv"]], ["Iliria", ["iliria iptv"]], ["Infinity", ["infinity iptv"]], ["IPGuys", ["ipguys"]],
  ["IPStreamz", ["ipstreamz"]], ["Iron", ["ironiptv"]], ["iStar", ["istar iptv"]], ["ITEC", ["itec iptv"]], ["iView", ["iview iptv"]],
  ["Jarvis", ["jarvis iptv"]], ["LiveGo", ["livego iptv"]], ["Maestro", ["maestro iptv"]], ["Magnum", ["magnum iptv"]],
  ["Max", ["maxiptv", "iptv max", "max iptv"]], ["MiTVPro", ["mitvpro"]], ["Moul", ["moul iptv"]], ["MXL", ["mxl iptv", "mxl tv", "iptv mxl"]],
  ["My IPTV / MyHD", ["my iptv", "my ip tv", "my hd iptv", "myhd iptv", "myiptv 4k"]], ["NetTV", ["nettv iptv"]], ["Nikon", ["nikon iptv", "nikoniptv"]],
  ["Nord", ["nord iptv"]], ["OK2", ["ok2 iptv"]], ["One TV", ["one tv iptv", "onetv iptv", "iptv one"]], ["OnPoint", ["onpoint iptv"]],
  ["Open", ["open iptv"]], ["Play", ["playiptv"]], ["Prime", ["primeiptv"]], ["Pure", ["pure iptv", "pureiptv"]], ["Quzu", ["quzu iptv", "quzu tv"]],
  ["Red", ["rediptv"]], ["Revolution", ["iptv revolution"]], ["Room", ["room iptv", "roomiptv"]], ["Sky", ["sky iptv"]],
  ["Skyline", ["skyline iptv"]], ["Sleek", ["sleek iptv"]], ["SmartGo", ["smartgo iptv"]], ["Soplayer", ["soplayer iptv"]],
  ["SSTV", ["sstv iptv"]], ["Streamy", ["streamy iptv"]], ["Streamz", ["streamz iptv"]], ["Strong", ["strong iptv"]],
  ["Tele", ["tele iptv"]], ["TNT", ["tnt iptv"]], ["TV Plus", ["tv plus iptv"]], ["TV Team", ["tv team iptv"]], ["TVZon", ["tvzon"]],
  ["Unifi", ["unifi iptv"]], ["Uno", ["unoiptv"]], ["VIP", ["vipiptv"]], ["Watched", ["watched iptv"]], ["Fox", ["iptv fox", "foxiptv", "fox iptv"]],
  ["Tune", ["iptv tune"]], ["SIM", ["iptv sim"]], ["LA", ["la iptv"]], ["Stream Pro", ["iptv stream pro", "iptv stream player pro"]],
  ["B1G", ["b1g iptv"]], ["Apollo", ["apollo iptv"]], ["Dream", ["dream iptv", "dream tv iptv"]], ["E Vision", ["e vision iptv"]],
  ["Evybuy", ["evybuy"]], ["Firestick LY73PR", ["firestick ly73pr"]],
];

const notes = [
  "Confirm whether this is a provider, a player app or a reseller before you pay.",
  "Check the exact website and that reviews mention the same domain.",
  "Ask for a trial and a written price, and time the support reply.",
  "Test live sport at peak time on your own device.",
];

const byLetter = new Map<string, [string, string[]][]>();
for (const n of names) {
  const first = n[0][0].toUpperCase();
  const L = /[A-Z]/.test(first) ? first : "#";
  byLetter.set(L, [...(byLetter.get(L) ?? []), n]);
}
const letters = [...byLetter.keys()].sort();

let idx = 0;
const sections: Section[] = letters.map(L => ({
  h2: `IPTV brand names starting with ${L}`,
  table: {
    head: ["Name", "Also searched as", "What to check"],
    rows: byLetter.get(L)!.map(([name, v]) => [name, v.join(", "), notes[idx++ % notes.length]]),
  },
}));

export const glossary: SeoPageData[] = [
  {
    path: "/iptv-brand-names-a-z",
    cluster: "alt",
    hub: "/iptv-alternatives",
    kind: "brand",
    label: "IPTV brand names A–Z",
    blurb: "Directory of 100+ IPTV brand names and how to compare them",
    title: "IPTV Brand Names A–Z Canada — 100+ Names Compared Fairly",
    description: "A–Z directory of 100+ IPTV brand names Canadians search, with spelling variants and a fair-comparison checklist. Maple4K is independent — test free for 24 hours.",
    keywords: names.flatMap(n => n[1]),
    eyebrow: "IPTV Brand Directory",
    h1: "IPTV Brand Names A–Z — 100+ Names and How to Compare Them",
    intro: "Canadians search for hundreds of IPTV names — many are providers, some are player apps and a few are resellers. This directory lists the most searched names with their spelling variants, and gives one checklist that works for all of them. Maple4K is independent of every name below; test us next to any of them with a free 24-hour trial.",
    quick: { label: "Quick answer", text: "Before paying any IPTV name: confirm the exact website, ask for a free trial, get the price in writing, test live sport at peak time and message support once. Use the same steps on Maple4K's free trial to compare." },
    sections: [
      {
        h2: "How to use this directory",
        bullets: [
          "Find the name you searched — the second column shows spelling variants that mean the same search",
          "Read the checklist in the third column, then follow the steps in the [alternatives guide](/iptv-alternatives)",
          "For the most searched names see the detailed pages: [Diablo](/diablo-iptv-alternative), [Kemo](/kemo-iptv-alternative), [Flix](/flix-iptv-alternative), [AtlasPro](/atlaspro-iptv-alternative) and [more](/iptv-alternatives)",
          "Themed groups: [power names](/iptv-brands-power-speed), [gold & royal](/iptv-brands-gold-royal), [animals](/iptv-brands-animals-myth), [space & tech](/iptv-brands-space-tech), [everyday names](/iptv-brands-everyday-names), [numbered names](/iptv-brands-numbers-domains)",
        ],
      },
      ...sections,
      {
        h2: "Why so many similar names exist",
        paras: [
          "IPTV names are cheap to create, easy to copy and often reused by unrelated sellers. A name that looks like a popular service may belong to a different operator, and the same operator may trade under several names. That is why we recommend judging services on evidence — trial results, published terms, support behaviour — rather than reputation by name alone.",
          "If you resell IPTV yourself, the same checks apply to any panel you buy from; see our [reseller programme](/reseller).",
        ],
      },
    ],
    faqs: [
      { q: "Are all these names IPTV providers?", a: "No. Some are providers, some are player apps and some are resellers. Confirm which before paying." },
      { q: "Is Maple4K affiliated with any name listed?", a: "No. Maple4K is an independent Canadian IPTV service." },
      { q: "How do I compare IPTV services fairly?", a: "Use each free trial on the same device at the same time of day and test a live sports channel, a 4K movie and support. See [IPTV alternatives](/iptv-alternatives)." },
      { q: "Why do the same names appear with different spellings?", a: "Searchers type names as one word, two words or with extra terms like 'player' or 'reddit'. They usually refer to the same brand." },
      { q: "Where do I find independent opinions?", a: "See [reviews](/reviews) and our [Reddit summary](/blog/best-iptv-canada-reddit)." },
    ],
    related: ["/iptv-alternatives", "/top-iptv-providers-canada", "/best-iptv-canada"],
    aliases: ["/iptv-brands-a-z", "/iptv-names", "/iptv-brand-directory"],
    ctaTitle: "Compare Any Name with Maple4K — Free 24 Hours",
    ctaText: "No card, no contract. Test stability, channels and support yourself.",
    notAffiliated: "any brand named on this page",
  },
];
