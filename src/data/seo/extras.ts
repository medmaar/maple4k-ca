import type { Faq, Section } from "./types";

export type ExistingExtra = {
  /** Extra meta keywords appended to the page's existing keywords */
  keywords: string[];
  sections: Section[];
  /** Visible Q&A (rendered without a second FAQPage block — pages already ship one) */
  qas?: Faq[];
  /** Extra JSON-LD objects for the page */
  jsonld?: Record<string, unknown>[];
  /** Outbound authority links */
  sources?: { label: string; url: string }[];
};

const CUR = "CAD";
const offer = (name: string, price: string, url: string) => ({
  "@type": "Offer",
  name,
  price,
  priceCurrency: CUR,
  availability: "https://schema.org/InStock",
  url,
  priceValidUntil: "2026-12-31",
});

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Maple4K IPTV Subscription",
  description: "IPTV subscription for Canada with 50,000+ live channels, movies and series on demand, 4K streams, EPG and 24/7 support. Free 24-hour trial.",
  brand: { "@type": "Brand", name: "Maple4K" },
  image: "https://maple4k.ca/og-image.jpg",
  url: "https://maple4k.ca/pricing",
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: CUR,
    lowPrice: "9",
    highPrice: "49",
    offerCount: "4",
    offers: [
      offer("1 Month", "9", "https://maple4k.ca/pricing/1-month"),
      offer("3 Months", "29", "https://maple4k.ca/pricing/3-months"),
      offer("6 Months", "39", "https://maple4k.ca/pricing/6-months"),
      offer("12 Months", "49", "https://maple4k.ca/pricing/12-months"),
    ],
  },
};

export const existingExtras: Record<string, ExistingExtra> = {
  "/pricing": {
    keywords: ["iptv price", "iptv cost", "iptv plans", "iptv packages", "iptv 12 months", "iptv 1 month", "iptv promo", "cheap iptv"],
    jsonld: [productSchema],
    sections: [
      {
        h2: "How Maple4K plan pricing works",
        paras: [
          "Every plan includes the full channel lineup, on-demand movies and series, 4K where available, the programme guide and support. You choose only two things: plan length (1, 3, 6 or 12 months) and the number of connections — one connection means one simultaneous stream. Prices for 1 connection are $9, $29, $39 and $49. Households that watch on several screens at once can pick up to 10 connections; each price links to its own plan page from our [IPTV price guide](/iptv-price-canada).",
          "Not sure? Start with the free 24-hour trial, then pick a plan. A 12-month IPTV plan works out to about $4.08 a month, and there is no contract to cancel — you simply do not renew. See [cheap IPTV in Canada](/cheap-iptv-canada) for how to compare value.",
        ],
      },
    ],
  },
  "/iptv-subscription": {
    keywords: ["ip tv subscription", "iptv subscribe", "best iptv subscription", "iptv subscription reddit", "iptv sub", "iptv subscription 12 months"],
    jsonld: [productSchema],
    sections: [
      {
        h2: "What to compare in an IPTV subscription",
        bullets: [
          "Trial: can you test before paying? Maple4K offers a [free 24-hour trial](/free-trial)",
          "Length: monthly plans for testing, 6 or 12 months for value — see [IPTV price](/iptv-price-canada)",
          "Connections: match the number of screens you use at the same time",
          "Compatibility: apps for your devices — [IPTV devices](/iptv-devices)",
          "Support: reachable by message at any hour — [contact](/contact)",
        ],
        paras: ["Ready to buy? Read [how to buy IPTV in Canada](/buy-iptv-canada) or compare [top IPTV providers](/top-iptv-providers-canada)."],
      },
    ],
  },
  "/iptv-smarters-pro-canada": {
    keywords: ["ip smarters pro", "ip smarter pro", "iptvsmarterspro", "iptv smarters android", "iptv smarters apple tv", "iptv smasters google play", "iptv smasters iphone", "iptv smasters on roku tv", "iptv smasters player android", "iptv smasters player samsung", "iptv smasters pro apple tv", "iptv smasters pro com", "iptv smasters pro iphone", "iptv smasters pro live", "iptv smasters pro m3u", "iptv smasters pro tv", "smarters player pro", "smarters player tv", "smarters pro tv", "smarterstv", "iptv smart pro", "smart pro iptv", "smart plus iptv", "smarter player pro"],
    sections: [
      {
        h2: "Every way people write IPTV Smarters Pro",
        paras: [
          "The app is officially IPTV Smarters Pro, but searches use dozens of variants: IP TV Smarters Pro, IPTVSmartersPro, Smasters, Smarters Player Pro, Smarters TV, Smart Pro IPTV and more. They all refer to the same family of apps, so your Maple4K login works whichever spelling you searched. Use the table to jump to the right guide for your platform.",
        ],
        table: {
          head: ["You searched", "Platform", "Go to"],
          rows: [
            ["IPTV Smarters Android / Player Android", "Android phone or box", "[IPTV on Android](/iptv-android-canada)"],
            ["Smasters iPhone / Apple TV", "iPhone, iPad, Apple TV", "[iOS](/iptv-ios-canada) · [Apple TV](/iptv-apple-tv-canada)"],
            ["Smasters Roku / Roku TV", "Roku", "[Roku options](/iptv-roku-canada)"],
            ["Smarters Player Samsung / LG / TV", "Smart TVs", "[Smarters Pro on Smart TV](/iptv-smarters-pro-smart-tv-canada)"],
            ["Smasters Pro Fire Stick", "Fire Stick", "[Fire Stick guide](/iptv-smarters-pro-firestick-canada)"],
            ["Smasters Pro PC / Mac", "Computer", "[PC & Mac guide](/iptv-smarters-pro-pc-mac-canada)"],
            ["Smarters Pro price / com / Google Play", "Any", "[Subscription & price](/iptv-smarters-pro-subscription-canada)"],
            ["Smarters Lite / Player Lite", "Smart TVs", "[Smarters Player Lite](/smarters-player-lite-canada)"],
          ],
        },
      },
      {
        h2: "Live, M3U and Xtream logins in Smarters Pro",
        paras: [
          "Smarters Pro offers three ways in: Xtream Codes API (best — loads live TV, VOD and EPG), an M3U URL or file (simple, no guide by default) and a single stream. If you searched 'IPTV Smarters Pro m3u' or 'IPTV Smarters Pro live', start with Xtream. Learn the difference in [what Xtream Codes is](/xtream-iptv-canada) and [M3U8 vs M3U](/blog/m3u8-vs-m3u-iptv-canada). Not on the Google Play Store for your device? See the [Downloader guide](/blog/iptv-downloader-app-guide-canada).",
        ],
      },
    ],
    qas: [
      { q: "Is IP TV Smarters Pro the same as IPTV Smarters Pro?", a: "Yes. The extra space is just a spelling variant. Same app family, same Maple4K login." },
      { q: "Does IPTV Smarters Pro work on Roku?", a: "There is no official Roku app. Use a Fire Stick or cast from a phone — see [Roku options](/iptv-roku-canada)." },
      { q: "Why can't I find Smarters Pro on Google Play?", a: "Availability varies by device and region. Try Smarters Player Lite or sideload from the developer's official page using the [Downloader guide](/blog/iptv-downloader-app-guide-canada)." },
    ],
  },
  "/stb-emu-canada": {
    keywords: ["stbemu iptv", "iptv stbemu", "stbemu 4k", "stbemu pro firestick", "stb emu firestick", "stb emu 4k"],
    sections: [
      {
        h2: "STB Emu on Fire Stick, Android TV and 4K",
        paras: [
          "STB Emu (also written StbEmu or Stbemu Pro) is an Android app that emulates a MAG-style box, so it uses a portal URL and a MAC address rather than a username and password. On a Fire Stick it is usually installed with the Downloader app; on Android TV it comes from the Play Store where available. 4K playback depends on your device's hardware decoder and the app's player setting — choose the hardware or system player for H.265.",
          "If you find portals fiddly, Xtream Codes players such as [TiviMate](/tivimate-canada) or [XCIPTV](/xciptv-canada) are simpler. Compare with real MAG hardware in the [MAG models guide](/infomir-mag-models-canada).",
        ],
      },
    ],
    qas: [
      { q: "What is StbEmu Pro?", a: "The paid version of an Android app that emulates a MAG set-top box using a portal URL and MAC address." },
      { q: "Does STB Emu work on Firestick?", a: "Yes, usually via the Downloader app. See the [Downloader guide](/blog/iptv-downloader-app-guide-canada)." },
    ],
  },
  "/smart-iptv": {
    keywords: ["smart iptv com", "smart iptv fire stick", "smart iptv firestick", "smart iptv pc", "smart iptv premium", "smart iptv activation", "siptv activation"],
    sections: [
      {
        h2: "Smart IPTV: what it is and what it is not",
        paras: [
          "Smart IPTV (SIPTV) is an app for Samsung and LG smart TVs that plays a playlist you upload to its website against your TV's MAC address. It is a TV app, so there is no official Smart IPTV for Fire Stick or PC — people searching 'Smart IPTV firestick' or 'Smart IPTV PC' are better served by [TiviMate on Fire Stick](/tivimate-firestick-canada) or [Smarters Pro on PC](/iptv-smarters-pro-pc-mac-canada). The app has a one-time activation after a short trial, which is separate from your IPTV subscription.",
          "Compare with code-based and login-based alternatives in the [Tizen & webOS apps guide](/iptv-tizen-webos-apps-canada).",
        ],
      },
    ],
    qas: [
      { q: "Is there a Smart IPTV for Fire Stick?", a: "No. It is a Samsung and LG TV app. Use TiviMate or Smarters Pro on Fire Stick." },
      { q: "What is Smart IPTV activation?", a: "A one-time activation of the app on your TV after the trial period; it does not include channels." },
    ],
  },
  "/tivimate-canada": {
    keywords: ["tivimate player", "iptv tivimate", "tivimate iptv player", "tivimate official", "tivimate app"],
    sections: [
      {
        h2: "TiviMate guides by topic",
        bullets: [
          "[TiviMate Premium price and activation](/tivimate-premium-canada)",
          "[TiviMate on Fire Stick](/tivimate-firestick-canada)",
          "[TiviMate for Apple TV, Roku, Samsung, LG and PC](/tivimate-alternatives-canada)",
          "[What Reddit and TroyPoint say about TiviMate](/blog/tivimate-reddit-troypoint-canada)",
          "[Recording with TiviMate](/blog/iptv-dvr-recording-canada)",
        ],
      },
    ],
  },
  "/iptv-4k": {
    keywords: ["ip tv 4k", "iptv full hd", "iptv 8k", "8k iptv", "myiptv 4k", "box iptv 4k", "iptv premium 4k", "4k ott iptv"],
    sections: [
      {
        h2: "4K, Full HD and the truth about 8K IPTV",
        paras: [
          "Live channels are broadcast mostly in 720p or 1080p Full HD, with a growing number of true 4K sources and a large 4K on-demand library. 8K IPTV does not exist as a delivered format — an '8K' label is marketing. What matters is efficient H.265/HEVC encoding, hardware decoding on your device and 25 Mbps of stable bandwidth per 4K stream.",
          "For hardware see the [best Android TV box for IPTV](/best-android-tv-box-for-iptv-canada), the [IPTV box guide](/best-iptv-box-canada) and [OTT vs IPTV](/ott-iptv-canada). Setup on a MAG or Formuler 4K box is covered in our [4K box guides](/iptv-set-top-box).",
        ],
      },
    ],
    qas: [
      { q: "Is there 8K IPTV?", a: "No mainstream IPTV service delivers 8K sources. Treat 8K claims as marketing." },
      { q: "What is Full HD IPTV?", a: "1080p streams. Many live channels are Full HD; 4K is available on selected channels and VOD." },
    ],
  },
  "/iptv-apple-tv-canada": {
    keywords: ["iptv apple tv 4k", "iptv on apple tv 4k", "iptv smarters apple tv", "iptv sur apple tv"],
    sections: [
      {
        h2: "Apple TV 4K vs Apple TV HD for IPTV",
        paras: [
          "Apple TV 4K decodes H.265 in hardware and, on the Ethernet model, gives the most stable live-sport experience; Apple TV HD is limited to 1080p. Use iPlayTV, IPTV Smarters Pro or GSE Smart IPTV — see [iPlayTV](/iplaytv-apple-tv-canada) and [GSE Smart IPTV](/gse-smart-iptv-canada). In Settings → Video and Audio turn on Match Content for frame rate and dynamic range.",
        ],
      },
    ],
  },
  "/iptv-roku-canada": {
    keywords: ["roku express iptv", "iptv smasters on roku tv", "roku iptv app", "iptv roku stick"],
    sections: [
      {
        h2: "Roku Express, Roku Stick and Roku TV",
        paras: [
          "Roku Express and other Roku players cannot install Android IPTV apps, and IPTV Smarters has no official Roku version, so 'Roku Express IPTV' is best solved by adding a Fire Stick or Android box on another HDMI port. Roku TV sets behave the same. Read the [device hub](/iptv-devices) and [TiviMate alternatives](/tivimate-alternatives-canada) for the best substitutes.",
        ],
      },
    ],
  },
  "/iptv-samsung-tv-canada": {
    keywords: ["smasters player samsung", "iptv smasters player samsung", "samsung tizen iptv", "iptv samsung tizen"],
    sections: [
      {
        h2: "Samsung Tizen app options",
        paras: ["Samsung TVs use Tizen. Choose Smarters Player Lite, Smart IPTV or Duplecast depending on availability for your model year — full comparison in the [Tizen & webOS guide](/iptv-tizen-webos-apps-canada)."],
      },
    ],
  },
  "/iptv-quebec": {
    keywords: ["iptv rive nord", "iptv rive-nord", "iptv laurentides", "iptv laval", "iptv longueuil"],
    sections: [
      {
        h2: "IPTV sur la Rive-Nord et dans le reste du Québec",
        paras: [
          "Que vous soyez sur la Rive-Nord, à Laval, à Longueuil, dans les Laurentides ou en région, l'IPTV Maple4K fonctionne partout au Québec avec une connexion Internet stable de Videotron, Bell ou Cogeco. Consultez le [centre IPTV en français](/fr), le [meilleur IPTV au Canada](/fr/meilleur-iptv-canada) et l'[abonnement IPTV](/fr/abonnement-iptv-canada).",
        ],
      },
    ],
  },
  "/contact": {
    keywords: ["iptv customer service", "iptv support", "iptv smarters customer service", "iptv help canada"],
    sections: [
      {
        h2: "What our IPTV customer service can help with",
        bullets: [
          "Login problems and lost credentials",
          "Setup help for TiviMate, Smarters Pro and other players — see the [IPTV player hub](/iptv-player)",
          "Buffering diagnosis — try the [buffering fixes](/blog/fix-iptv-buffering-canada) first",
          "Plan changes and extra connections — [pricing](/pricing)",
          "Questions in English or French",
        ],
      },
    ],
  },
  "/iptv-windows-canada": {
    keywords: ["ip tv pc", "iptv pc", "iptv player pc", "iptv pour pc"],
    sections: [
      {
        h2: "IP TV on PC: three ways",
        paras: ["Use VLC with an M3U link, the IPTV Smarters Pro desktop app or a browser player. See [Smarters Pro on PC and Mac](/iptv-smarters-pro-pc-mac-canada), [other PC and Kodi players](/blog/other-iptv-players-pc-kodi-canada) and the [web player guide](/iptv-web-player-canada)."],
      },
    ],
  },
  "/best-iptv-canada": {
    keywords: ["best iptv for canada", "best iptv in canada", "best iptv service canada", "best iptv provider canada", "best iptv near me"],
    sections: [
      {
        h2: "Verify 'best' yourself",
        paras: ["Every provider claims to be the best. Use the [top providers scorecard](/top-iptv-providers-canada), the [alternatives checklist](/iptv-alternatives) and our free trial to verify. Independent context: [reviews](/reviews)."],
      },
    ],
  },
  "/reseller": {
    keywords: ["iptv resellers", "best iptv resell", "iptv supplier", "iptv resale", "iptv reseller panel canada"],
    sections: [
      {
        h2: "Reseller vs subscriber: which are you?",
        paras: ["A reseller buys credits and sells subscriptions to others; a subscriber just watches. If you only want to watch, start with the [free trial](/free-trial) or [buy IPTV](/buy-iptv-canada). If you want to build a business, compare panels with our [IPTV alternatives checklist](/iptv-alternatives) — the same tests apply."],
      },
    ],
  },
  "/iptv-providers-canada": {
    keywords: ["iptv providers", "provider iptv", "iptv providers reddit", "iptv provider canada", "iptv service provider"],
    sections: [
      {
        h2: "More ways to compare providers",
        bullets: [
          "[Top IPTV providers scorecard](/top-iptv-providers-canada)",
          "[IPTV alternatives and brand-name comparisons](/iptv-alternatives) and the [A–Z brand directory](/iptv-brand-names-a-z)",
          "[IPTV service checklist](/iptv-service-canada)",
          "[Reddit's take](/blog/best-iptv-canada-reddit) and [reviews](/reviews)",
        ],
      },
    ],
  },
  "/iptv-box": {
    keywords: ["ip tv box", "ip box tv", "tv ip box", "iptv box 4k", "box iptv"],
    sections: [
      {
        h2: "IP TV box, IP box TV, TV IP box: same thing",
        paras: ["All of these describe a box that plays IPTV. Compare models in the [best IPTV box guide](/best-iptv-box-canada), the [set-top box hub](/iptv-set-top-box) and the [best Android TV box](/best-android-tv-box-for-iptv-canada)."],
      },
    ],
  },
  "/free-trial": {
    keywords: ["free trial iptv", "iptv free trial", "iptv trial", "trial iptv", "iptv free trial canada 24 hours"],
    sections: [
      {
        h2: "What to test during your 24 hours",
        bullets: [
          "Peak-time stability — see the [24/7 test plan](/iptv-24-7-canada)",
          "A live sports channel and a 4K movie",
          "Your player of choice — [player hub](/iptv-player)",
          "Support speed — send one question",
        ],
      },
    ],
  },
};
