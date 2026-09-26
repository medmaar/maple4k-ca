import type { Faq, SeoPageData } from "./types";

type Entry = { name: string; variants: string[]; angle: string };
type Group = {
  slug: string;
  label: string;
  blurb: string;
  title: string;
  description: string;
  h1: string;
  theme: string;
  entries: Entry[];
  faq: Faq[];
};

const e = (name: string, variants: string[], angle: string): Entry => ({ name, variants, angle });

function groupPage(g: Group): SeoPageData {
  const path = `/${g.slug}`;
  return {
    path,
    cluster: "alt",
    hub: "/iptv-alternatives",
    kind: "brand",
    label: g.label,
    blurb: g.blurb,
    title: g.title,
    description: g.description,
    keywords: [...new Set(g.entries.flatMap(x => [...x.variants, `${x.name.toLowerCase()} alternative`]))],
    eyebrow: "IPTV Alternatives · Brand Names",
    h1: g.h1,
    intro: `${g.theme} Maple4K is an independent Canadian IPTV service and is not affiliated with any name on this page. We cannot vouch for any of them, but we can show how to compare each fairly — and what Maple4K offers: 50,000+ channels, 4K and a free 24-hour trial from $9 per month.`,
    quick: { label: "Quick answer", text: "Whatever name you searched, test it the same way: free trial, transparent price, support reply speed, live-sport stability and device fit. Run the Maple4K free 24-hour trial next to it and decide on evidence." },
    sections: [
      {
        h2: "One checklist for every name below",
        table: {
          head: ["Check", "How to test", "Maple4K"],
          rows: [
            ["Free trial", "Can you test before you pay?", "Free for 24 hours, no card"],
            ["Price", "Is the full price shown up front?", "$9 / $29 / $39 / $49 — [pricing](/pricing)"],
            ["Support", "Message them and time the reply", "[WhatsApp, Telegram, email](/contact)"],
            ["Stability", "Watch a live game at peak time", "4K H.265 streams"],
            ["Devices", "Works on your TV or box?", "[All major devices](/iptv-devices)"],
          ],
        },
        note: "Maple4K's column describes our own service — verify it with the trial.",
      },
      ...g.entries.map(x => ({
        h2: `${x.name} — what to know before you compare`,
        paras: [`${x.angle} People also search this name as ${x.variants.slice(0, 4).join(", ")}. Maple4K is unrelated to it; see the checklist above and the [free trial](/free-trial) to compare on your own device.`],
      })),
      {
        h2: "Switching or comparing in five minutes",
        bullets: [
          "Keep your device and player — [TiviMate](/tivimate-canada), [IPTV Smarters Pro](/iptv-smarters-pro-canada) or [XCIPTV](/xciptv-canada) all accept Maple4K",
          "Add Maple4K as a second playlist and switch between services on the same TV",
          "Check independent [reviews](/reviews) and our [Reddit roundup](/blog/best-iptv-canada-reddit)",
          "Browse the [full brand directory](/iptv-brand-names-a-z) or [all alternatives](/iptv-alternatives)",
        ],
      },
    ],
    faqs: [
      ...g.faq,
      { q: "Is Maple4K affiliated with any of these brands?", a: "No. Maple4K is an independent Canadian IPTV service. Every other name is a separate service, app or reseller." },
      { q: "How can I compare IPTV services fairly?", a: "Use each free trial on the same device at the same time of day, watch a live sports channel and a 4K movie, and message support with a simple question. See [IPTV alternatives](/iptv-alternatives)." },
      { q: "How much does Maple4K cost?", a: "$9 for one month, $29 for three, $39 for six and $49 for twelve months on one connection. See [pricing](/pricing)." },
    ],
    related: ["/iptv-alternatives", "/best-iptv-canada", "/top-iptv-providers-canada"],
    aliases: [],
    ctaTitle: "Compare with Maple4K — Free for 24 Hours",
    ctaText: "No card, no contract. Test stability, channels and support yourself.",
    notAffiliated: "any brand named on this page",
  };
}

const groups: Group[] = [
  {
    slug: "iptv-brands-power-speed",
    label: "Fast & extreme IPTV names",
    blurb: "Extreme, Fast, Sonic, Monster, Titan, Ninja, Shark and more",
    title: "Extreme, Fast, Sonic, Titan & Shark IPTV — Compare Canada",
    description: "Searching Extreme IPTV, Fast IPTV, Sonic, Monster, Titan, Ninja, Shark, Trex or Viper? Compare power-named IPTV services in Canada fairly. Free 24-hour trial.",
    h1: "Extreme, Fast, Sonic, Titan & Shark IPTV — Comparing Power-Named Services",
    theme: "Names that promise speed and power — Extreme, Fast, Sonic, Monster, Titan, Ninja, Shark — are among the most searched in IPTV.",
    entries: [
      e("Extreme IPTV", ["extreme iptv", "extreme iptv pro", "extreme tv", "iptv extreme"], "Extreme is also the name of a well-known Android player, so searchers may want an app rather than a provider — check which you need."),
      e("Fast IPTV", ["fast iptv", "fastiptv", "fastiger iptv", "iptv rapid", "rapidiptv"], "Speed claims are easy to make and easy to test: time how long a channel takes to start and watch a live match for buffering."),
      e("Sonic IPTV", ["sonic iptv", "hypersonic iptv"], "Speed-themed names suggest low latency; compare the delay between two services showing the same live event."),
      e("Monster IPTV", ["iptv monster", "monster iptv"], "Big-sounding names often promise huge channel counts; count only the channels you would actually watch."),
      e("Titan IPTV", ["titan iptv"], "Capacity claims matter most at peak time, so test on a Saturday evening rather than a quiet Tuesday."),
      e("Ninja IPTV", ["ninja iptv"], "Look for clear terms and support contact details rather than relying on a catchy name."),
      e("Shark IPTV", ["shark iptv", "iptv shark"], "Confirm the exact website and support channel before paying anyone using a popular animal-style name."),
      e("Trex IPTV", ["trex iptv"], "Check whether you are looking for a provider or a player app — several similarly named apps exist."),
      e("Thunder, Nitro and Venom IPTV", ["thunder iptv", "nitro iptv", "venom iptv", "viper iptv", "hulk iptv"], "Aggressive brand names say nothing about quality; a trial and a support test say everything."),
    ],
    faq: [
      { q: "Does a fast-sounding IPTV name mean fast streaming?", a: "No. A name is marketing. Measure start-up time, buffering and latency yourself during a free trial." },
      { q: "Is Extreme IPTV a player or a provider?", a: "The name is used for both an Android player and by services. Confirm which one you mean before installing or paying." },
    ],
  },
  {
    slug: "iptv-brands-gold-royal",
    label: "Gold, King & Royal IPTV names",
    blurb: "Gold, King, Royal, Elite, Premier, Empire, Legends and more",
    title: "Gold, King, Royal, Elite & Empire IPTV — Compare Canada",
    description: "Searching Golden IPTV, King IPTV, Royal, Elite, Premier, Empire or Legends IPTV? Compare premium-named services in Canada fairly with a free 24-hour trial.",
    h1: "Gold, King, Royal & Elite IPTV — Comparing Premium-Named Services",
    theme: "Premium-sounding names — Gold, King, Royal, Elite, Empire, Legends — suggest quality, but the name alone proves nothing.",
    entries: [
      e("Golden / Gold IPTV", ["golden iptv", "goldiptv", "iptvgold", "golds tv iptv", "gold iptv"], "Golden names often appear across many unrelated services; verify the exact website before you send any payment."),
      e("King IPTV", ["kingiptv", "king iptv", "king365 iptv"], "See also our [King365TV box guide](/king365tv-canada) if you own one of those devices."),
      e("Royal IPTV", ["royal iptv", "royaliptv"], "A royal name is no substitute for a written refund policy and reachable support."),
      e("Elite and Premier IPTV", ["elite iptv", "premier iptv", "premium iptv"], "Compare what 'elite' actually includes: 4K, VOD, connections and support hours."),
      e("Empire, Dynasty and Legends IPTV", ["empire iptv", "dynasty iptv", "legends iptv", "fortune iptv", "glory iptv"], "Grand names are common in IPTV; ask how long the service has operated and how renewals work."),
      e("Platinum, Prestige and Deluxe IPTV", ["platinum iptv", "prestige iptv", "deluxe iptv", "iptv deluxe", "lazyiptv deluxe"], "Tier names like platinum and deluxe are meaningful only when the plan differences are written down."),
      e("Crystal and Sapphire IPTV", ["crystal iptv", "crystal ott", "crystal ott iptv", "sapphire iptv", "sapphire tv"], "Crystal-clear claims should be tested on your own screen, in 4K, at peak time."),
      e("Ultimate and Universal IPTV", ["ultimate iptv", "universal iptv", "universe iptv"], "'Ultimate' packages can bundle channels you never watch; count the ones you do."),
    ],
    faq: [
      { q: "Are premium-named IPTV services better?", a: "Not necessarily. Judge on trial results, published terms and support behaviour, not on the name." },
      { q: "Why are so many IPTV names similar?", a: "Names are cheap to create and are reused by unrelated sellers, which is why confirming the exact website matters." },
    ],
  },
  {
    slug: "iptv-brands-animals-myth",
    label: "Lion, Eagle, Dragon & Wolf IPTV names",
    blurb: "Lion, Eagle, Dino, Dodo, Dragon, Wolf, Tiger, Phoenix and more",
    title: "Lion, Eagle, Dragon, Wolf & Phoenix IPTV — Compare Canada",
    description: "Searching Lion IPTV, Eagle IPTV, Dino, Dodo, Dragon, Wolf, Tiger, Phoenix or Wizard IPTV? Compare animal- and myth-named services in Canada fairly.",
    h1: "Lion, Eagle, Dragon, Wolf & Phoenix IPTV — Comparing Animal-Named Services",
    theme: "Animal and mythical names — Lion, Eagle, Dino, Dragon, Wolf, Phoenix — are a huge share of IPTV searches.",
    entries: [
      e("Lion IPTV", ["lion iptv", "lionz iptv"], "Similar names such as Lion and Lionz are separate services; make sure you know which site you are dealing with."),
      e("Eagle IPTV", ["eagle iptv", "eagle tv iptv"], "Check whether the name refers to a provider or a set-top box before buying."),
      e("Dino and Dodo IPTV", ["dino iptv", "iptv dino", "dodo iptv"], "Older-sounding brands may be long-running or just recently renamed; ask how long the service has operated."),
      e("Dragon IPTV", ["dragon iptv", "dragoniptv"], "One-word and two-word spellings appear in searches; treat them as possibly different sellers."),
      e("Wolf, Tiger and Spider IPTV", ["wolf iptv", "tiger iptv", "spider iptv", "sniper iptv"], "Predator names say nothing about reliability — compare buffering during a live event."),
      e("Phoenix and Ghost IPTV", ["phoenix iptv", "ghost iptv", "necro iptv", "voodoo iptv"], "Rebranded services sometimes reuse names; verify reviews mention the same website."),
      e("Wizard, Magic and Joker IPTV", ["wizard iptv", "magic iptv", "magic tv iptv", "joker iptv", "epic iptv", "iptv epic"], "Magic-themed names include both providers and apps; confirm which you need."),
      e("Falcon, Bird and Pelican IPTV", ["falconiptv", "bird iptv", "pelican iptv", "gecko iptv", "gecko iptv player"], "Some of these names refer to players rather than services; a player needs a provider login to show channels."),
    ],
    faq: [
      { q: "Why do IPTV brands use animal names?", a: "They are memorable and easy to search. A name tells you nothing about quality, so test each service." },
      { q: "Is Gecko IPTV player a provider?", a: "Player-style names need a separate provider login. See the [IPTV player hub](/iptv-player)." },
    ],
  },
  {
    slug: "iptv-brands-space-tech",
    label: "Nova, Atlas, Matrix & Neo IPTV names",
    blurb: "NASA, Nova, Astra, Atlas, Matrix, Neo, Delta, Flux and more",
    title: "Nova, Atlas, Matrix, Neo & NASA IPTV — Compare Canada",
    description: "Searching NASA IPTV, Nova, Astra, Atlas, Matrix, Neo, Delta, Flux or Helix IPTV? Compare space- and tech-named services in Canada. Free 24-hour trial.",
    h1: "NASA, Nova, Atlas, Matrix & Neo IPTV — Comparing Tech-Named Services",
    theme: "Space and tech names — NASA, Nova, Astra, Atlas, Matrix, Neo — appear constantly in IPTV searches.",
    entries: [
      e("NASA IPTV", ["nasa iptv", "nasaiptv"], "Space-agency-style names are not affiliated with any agency; verify the real operator behind the site."),
      e("Nova and Astra IPTV", ["nova iptv", "nova max iptv", "astra iptv", "space iptv", "supernova iptv"], "Similar star-themed names are often unrelated; confirm the exact domain."),
      e("Atlas IPTV", ["atlas iptv", "atlas pro iptv", "atlas pro ott", "iptv atlas"], "See our detailed [AtlasPro comparison](/atlaspro-iptv-alternative)."),
      e("Matrix and Neo IPTV", ["matrix iptv", "neo iptv", "neox2 iptv", "neotv pro"], "Neo-style names include both apps and services; check whether a login is needed."),
      e("Delta, Flux and Helix IPTV", ["delta iptv", "flux iptv", "helix iptv", "hydrogen iptv", "evo iptv", "evolution iptv"], "Science-themed brands rarely disclose infrastructure; test performance yourself."),
      e("Star, Stariptv and Digital IPTV", ["star iptv", "stariptv", "digital iptv", "media iptv", "alliptv", "all iptv"], "Generic names are the hardest to research — rely on trial results and written terms."),
      e("5G, Zoom and Opus IPTV", ["5g iptv", "5giptv", "zoom iptv", "opus iptv", "electro iptv", "4k ott iptv"], "Speed-tech names such as 5G refer to marketing, not to a mobile network; your home internet decides the result."),
    ],
    faq: [
      { q: "Is NASA IPTV related to NASA?", a: "No. Names borrowing famous organisations are not affiliated with them. Verify who operates any service." },
      { q: "Does '5G IPTV' need a 5G connection?", a: "No. IPTV works over any stable broadband connection, wired or Wi-Fi." },
    ],
  },
  {
    slug: "iptv-brands-everyday-names",
    label: "Guru, Hot, Mom & Easy IPTV names",
    blurb: "Guru, Hot, Mom, Mario, Easy, Super, Perfect, Wise and more",
    title: "Guru, Hot, Mom, Easy, Super & Perfect IPTV — Compare Canada",
    description: "Searching Guru IPTV, Hot IPTV, Mom IPTV, Easy, Super, Perfect, Wise or Real IPTV? Compare everyday-named IPTV services in Canada with a free trial.",
    h1: "Guru, Hot, Mom, Easy & Perfect IPTV — Comparing Everyday-Named Services",
    theme: "Friendly everyday names — Guru, Hot, Mom, Easy, Perfect, Super, Wise — are searched thousands of times a month.",
    entries: [
      e("Guru IPTV", ["guru iptv", "guru ip tv"], "Expert-style names invite trust; back it up with a trial and a support test."),
      e("Hot IPTV", ["hot iptv", "hotiptv"], "One-word and two-word forms appear in searches; check you are on the right website."),
      e("Mom IPTV", ["mom iptv", "momiptv", "mom iptv canada"], "Family-themed names should still publish clear terms and a refund policy."),
      e("Easy, Simple and Clean IPTV", ["easy iptv", "simpleiptv", "clean iptv", "lazy iptv", "awesome iptv"], "Ease of use is testable: time your first login and first channel."),
      e("Super, Good and Great IPTV", ["super iptv", "good iptv", "great iptv", "iptvgreat", "extra iptv", "new iptv"], "Superlatives are not evidence; a written comparison of plans is."),
      e("Perfect and Real IPTV", ["perfect iptv", "perfectiptv", "real iptv", "realiptv", "wise iptv", "wise iptv player"], "Some of these names refer to players; you still need a service login to see channels."),
      e("Mario, Bob, Eva and Zina IPTV", ["mario iptv", "bob iptv", "eva iptv", "zina iptv", "yeah iptv", "marvel iptv"], "Personal-name brands are difficult to research; ask for contact details before paying."),
      e("Blue, Redline and Purple IPTV", ["blue tv iptv", "redline iptv", "purple iptv", "iptv purple", "iptv smart purple player"], "Colour-named names include both players and services — confirm what you are buying."),
    ],
    faq: [
      { q: "Are friendly-named IPTV services safer?", a: "A friendly name is not a safety signal. Check terms, contact details and independent reviews." },
      { q: "Is Purple IPTV a player or a provider?", a: "The name is used for a player-style product in searches. A player requires a separate provider login." },
    ],
  },
  {
    slug: "iptv-brands-numbers-domains",
    label: "IPTV365, IPTV4U & numbered IPTV names",
    blurb: "iptv345, iptv365, iptv24, iptv4u, iptv12k, iptvx, iptvplus and more",
    title: "IPTV365, IPTV24, IPTV4U, IPTVX & IPTV345 — Compare Canada",
    description: "Searching IPTV345, IPTV365, IPTV24, IPTV4U, IPTV12K, IPTVX or IPTVPlus? Compare numbered and domain-style IPTV names in Canada with a free 24-hour trial.",
    h1: "IPTV365, IPTV24, IPTV4U, IPTVX & IPTV345 — Comparing Domain-Style Names",
    theme: "Numbered and domain-style names — IPTV345, IPTV365, IPTV24, IPTV4U, IPTVX — are usually short brand domains.",
    entries: [
      e("IPTV24, IPTV 24/7, IPTV365", ["iptv24", "iptv 24", "iptv 24 7", "iptv 24h", "iptv365", "iptv 365", "iptv 24/7"], "Numbers like 24/7 and 365 describe availability claims. See our [24/7 IPTV guide](/iptv-24-7-canada) for what round-the-clock service should mean."),
      e("IPTV345", ["iptv345", "iptv 345"], "A numbered domain gives few clues about the operator; ask for clear contact details."),
      e("IPTVX", ["iptvx", "iptvx android", "iptvx apple tv", "iptv x", "x iptv"], "IPTVX is used for apps and services; check the store listing or website before installing."),
      e("IPTV4U, IPTV4Less and IPTV4Sat", ["iptv4u", "iptv4less", "iptv4sat"], "Value-style names should be backed by published prices and terms."),
      e("IPTV12K, IPTV8K and IPTV66", ["iptv12k", "iptv8k", "iptv66", "iptv 8k", "iptv1", "iptvone", "one iptv"], "Resolution claims like 8K are marketing: IPTV sources are not delivered in 8K. See [4K IPTV](/iptv-4k)."),
      e("IPTVPlus, IPTVHut and IPTVFarm", ["iptvplus", "iptvhut", "iptvfarm", "iptv hub", "iptv main"], "Domain-style names change hands often; verify reviews reference the same site."),
      e("IPTV Store, Shop and Resale", ["iptvstore", "iptvshop", "iptvresale", "iptv shop"], "Storefront names may be resellers; see our [reseller programme](/reseller) and [buying advice](/buy-iptv-canada)."),
    ],
    faq: [
      { q: "Does IPTV 8K exist?", a: "IPTV services do not deliver 8K broadcast sources. Treat 8K claims as marketing. See [4K IPTV](/iptv-4k)." },
      { q: "What does 24/7 mean for IPTV?", a: "Ideally that channels stream around the clock and support answers at any hour. See our [24/7 IPTV guide](/iptv-24-7-canada)." },
    ],
  },
];

export const groupPages: SeoPageData[] = groups.map(groupPage);
