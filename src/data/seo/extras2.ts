import type { ExistingExtra } from "./extras";

const city = (name: string, isps: string, teams: string, extraLink?: string): ExistingExtra => ({
  keywords: [`iptv ${name.toLowerCase()}`, `best iptv ${name.toLowerCase()}`, `${name.toLowerCase()} iptv service`],
  sections: [
    {
      h2: `IPTV in ${name}: ISP notes, teams and next steps`,
      paras: [
        `Most ${name} viewers connect through ${isps}. IPTV works on all of them; for live games use Ethernet or 5 GHz Wi-Fi and aim for 25 Mbps per 4K stream. Local sport is covered too: ${teams}. Not sure which app to install? See the [IPTV devices hub](/ca/iptv-devices) and the [IPTV player guide](/ca/iptv-player).`,
        `${extraLink ? extraLink + " " : ""}Compare all Canadian city guides on the [IPTV by city](/ca/iptv-cities) page, read the national overview of [Canadian IPTV](/ca/canadian-iptv), and check [pricing](/ca/pricing) or start the [free 24-hour trial](/ca/free-trial).`,
      ],
    },
  ],
});

const dev = (kw: string[], h2: string, paras: string[], bullets?: string[]): ExistingExtra => ({
  keywords: kw,
  sections: [{ h2, paras, bullets }],
});

export const existingExtras2: Record<string, ExistingExtra> = {
  "/ca/iptv-toronto": city("Toronto", "Rogers or Bell", "the Maple Leafs, Raptors, Blue Jays, Toronto FC and Argonauts on TSN and Sportsnet", "See also [IPTV Hamilton](/ca/iptv-hamilton) and [IPTV London Ontario](/ca/iptv-london-ontario) for nearby Ontario cities."),
  "/ca/iptv-vancouver": city("Vancouver", "Telus or Shaw (Rogers)", "the Canucks, Whitecaps and BC Lions", "Vancouver Island viewers should read [IPTV Victoria](/ca/iptv-victoria)."),
  "/ca/iptv-montreal": city("Montréal", "Videotron, Bell or Cogeco", "the Canadiens, CF Montréal and the Alouettes, plus French-language networks", "Pour le français, voir [IPTV Québec](/ca/iptv-quebec) et [IPTV en français](/ca/fr)."),
  "/ca/iptv-calgary": city("Calgary", "Telus or Shaw (Rogers)", "the Flames, Stampeders and Cavalry", "Edmonton fans: [IPTV Edmonton](/ca/iptv-edmonton)."),
  "/ca/iptv-ottawa": city("Ottawa", "Rogers, Bell or Cogeco", "the Senators and the Redblacks", "French-language options: [IPTV Québec](/ca/iptv-quebec)."),
  "/ca/iptv-edmonton": city("Edmonton", "Telus or Shaw (Rogers)", "the Oilers and the Elks", "Calgary fans: [IPTV Calgary](/ca/iptv-calgary)."),
  "/ca/iptv-winnipeg": city("Winnipeg", "Bell MTS or Shaw (Rogers)", "the Jets and the Blue Bombers"),
  "/ca/iptv-quebec": {
    keywords: ["iptv québec", "iptv quebec city", "abonnement iptv québec"],
    sections: [
      {
        h2: "Guides en français pour le Québec",
        bullets: [
          "[Abonnement IPTV Canada](/fr/abonnement-iptv-canada) — prix dès 9 $ par mois",
          "[Meilleur IPTV Canada](/fr/meilleur-iptv-canada) — comparatif et critères",
          "[Installer IPTV](/fr/installer-iptv-canada) — Fire Stick, Samsung, iPhone, PC",
          "[IPTV ne fonctionne plus?](/fr/iptv-ne-fonctionne-plus) — dépannage",
        ],
      },
    ],
  },
  "/ca/iptv-halifax": city("Halifax", "Bell Aliant or Eastlink", "the Mooseheads and the Atlantic sports schedule on TSN and Sportsnet"),
  "/ca/iptv-hamilton": city("Hamilton", "Rogers or Bell", "the Tiger-Cats and Bulldogs", "Nearby: [IPTV Toronto](/ca/iptv-toronto)."),
  "/ca/iptv-victoria": city("Victoria", "Shaw (Rogers) or Telus", "the Royals and Vancouver-based teams", "Mainland guide: [IPTV Vancouver](/ca/iptv-vancouver)."),
  "/ca/iptv-london-ontario": city("London", "Rogers or Bell", "the London Knights and Ontario teams", "Nearby: [IPTV Toronto](/ca/iptv-toronto)."),
  "/ca/iptv-near-me": {
    keywords: ["iptv near me", "iptv service near me", "local iptv", "iptv box near me", "iptv 4k near me"],
    sections: [
      {
        h2: "Local IPTV: what near me really means",
        paras: ["IPTV is delivered over the internet, so 'near me' is about local channels and teams, not a nearby office. Browse the [city guides](/ca/iptv-cities), see [where to buy an IPTV box](/best-iptv-box-canada) locally, and compare [IPTV service providers](/iptv-service-canada)."],
      },
    ],
  },
  "/ca/iptv-firestick-canada": dev(
    ["best iptv for firestick", "tivimate firestick", "smarters firestick", "iptv stick"],
    "Fire Stick IPTV: where to go next",
    ["Once your stick is set up, tune it: read [TiviMate on Fire Stick](/ca/tivimate-firestick-canada), [Smarters Pro on Fire Stick](/iptv-smarters-pro-firestick-canada) and the [Downloader guide](/blog/iptv-downloader-app-guide-canada). Compare choices in [best IPTV for Firestick](/best-iptv-for-firestick-canada) and fix problems with the [buffering guide](/blog/fix-iptv-buffering-canada)."],
  ),
  "/iptv-android-tv-canada": dev(
    ["android tv iptv", "best android tv box for iptv", "tivimate android tv", "shield tv iptv"],
    "Android TV boxes and apps",
    ["Choose hardware in the [best Android TV box guide](/best-android-tv-box-for-iptv-canada), then see device pages for [Nvidia Shield](/iptv-nvidia-shield-canada), [Xiaomi Mi Box](/iptv-xiaomi-mi-box-canada), [Onn](/iptv-onn-tv-box-canada) and [Chromecast with Google TV](/iptv-chromecast-google-tv-canada). Apps: [TiviMate](/ca/tivimate-canada), [XCIPTV](/xciptv-canada)."],
  ),
  "/ca/iptv-android-canada": dev(
    ["iptv android", "android iptv player", "iptv smarters android"],
    "More Android IPTV options",
    ["Beyond IPTV Smarters Pro, try [XCIPTV](/xciptv-canada), [Xtreme HD IPTV](/xtreme-hd-iptv-canada) or [IMPlayer](/ca/implayer-canada). See the [mobile apps guide](/iptv-mobile-apps-canada) and the [IPTV player hub](/ca/iptv-player)."],
  ),
  "/ca/iptv-ios-canada": dev(
    ["iptv iphone", "iptv ipad", "iptv sur iphone"],
    "More iPhone and iPad options",
    ["Besides IPTV Smarters Pro, try [iPlayTV](/iplaytv-apple-tv-canada) or [GSE Smart IPTV](/gse-smart-iptv-canada). See the [mobile apps guide](/iptv-mobile-apps-canada) and cast to a TV with the [Apple TV guide](/iptv-apple-tv-canada)."],
  ),
  "/iptv-lg-tv-canada": dev(
    ["iptv lg", "iptv lg tv", "iptv lg webos", "iptv for lg webos", "iptv lg smart"],
    "LG webOS app choices",
    ["Try [Nanomid](/nanomid-lg-webos-canada), [Smarters Player Lite](/smarters-player-lite-canada) or [Duplecast](/ca/duplecast-iptv-canada). Compare with Samsung in the [Tizen & webOS guide](/iptv-tizen-webos-apps-canada)."],
  ),
  "/iptv-smart-tv-canada": dev(
    ["iptv smart tv", "ip tv smart tv", "iptv samsung smart tv"],
    "Smart TV guides by brand",
    ["See [Samsung](/iptv-samsung-tv-canada), [LG](/iptv-lg-tv-canada), [Hisense VIDAA](/iptv-hisense-vidaa-canada), [Roku](/ca/iptv-roku-canada) and [Google TV](/iptv-chromecast-google-tv-canada) pages, plus the [Tizen & webOS explainer](/iptv-tizen-webos-apps-canada) and [Smarters Pro on Smart TV](/iptv-smarters-pro-smart-tv-canada)."],
  ),
  "/iptv-mag-box-canada": dev(
    ["mag box", "mag iptv box", "tv box mag", "mag 322", "mag 524"],
    "MAG model guides",
    ["Find your model: [MAG 254](/ca/mag-254-canada), [MAG 322](/mag-322-canada), [MAG 524](/ca/mag-524-canada) or the [full MAG models list](/infomir-mag-models-canada). Other boxes: [set-top box hub](/iptv-set-top-box)."],
  ),
  "/ca/iptv-formula": dev(
    ["formuler z11", "formuler z11 pro", "formuler z11 pro max", "iptv formula", "formuler box"],
    "Other Formuler models",
    ["Compare with the [Z10 Pro Max](/formuler-z10-pro-max-canada) and [Z8 Pro](/formuler-z8-pro-canada), read the [Formuler box overview](/ca/formuler-box-canada) and set up the [MyTVOnline 3 app](/ca/mytvonline-canada)."],
  ),
  "/best-iptv-apps-canada": dev(
    ["best iptv apps", "best iptv app", "iptv apps"],
    "Go deeper on each app",
    ["Read the dedicated guides: [TiviMate](/ca/tivimate-canada), [IPTV Smarters Pro](/iptv-smarters-pro-canada), [XCIPTV](/xciptv-canada), [iPlayTV](/iplaytv-apple-tv-canada), [IMPlayer](/ca/implayer-canada), [GSE Smart IPTV](/gse-smart-iptv-canada) and the [IPTV player hub](/ca/iptv-player). Curious about brand names? See the [A–Z directory](/iptv-brand-names-a-z)."],
  ),
  "/best-iptv-app-canada": dev(
    ["best iptv app", "top iptv app canada"],
    "Related app guides",
    ["See [best IPTV apps for Canada](/best-iptv-apps-canada), [mobile IPTV apps](/iptv-mobile-apps-canada) and the [IPTV player hub](/ca/iptv-player)."],
  ),
  "/best-iptv-for-sports-canada": dev(
    ["iptv ufc", "iptv soccer", "iptv sport", "iptv f1", "iptv nba"],
    "Sport-by-sport guides",
    ["Go deeper: [IPTV for UFC](/ca/iptv-ufc-canada), [IPTV for soccer](/ca/iptv-soccer-canada), [best IPTV for hockey](/blog/best-iptv-for-hockey-canada-2026), and set up a reliable [live IPTV](/ca/live-iptv-canada) stream. Record games with the [DVR guide](/blog/iptv-dvr-recording-canada)."],
  ),
  "/ca/about": dev(["about maple4k"], "Explore Maple4K", ["New here? Start with [what is IPTV](/ca/what-is-iptv), see [pricing](/ca/pricing), browse [devices](/ca/iptv-devices) or read [reviews](/ca/reviews)."]),
  "/ca/how-it-works": dev(
    ["how iptv works", "iptv setup", "iptv installer"],
    "After you sign up",
    ["Follow the [beginner's guide](/blog/iptv-for-beginners-canada), pick a [player](/ca/iptv-player) and your [device guide](/ca/iptv-devices). If something fails, use the [buffering fixes](/blog/fix-iptv-buffering-canada). En français : [installer IPTV](/fr/installer-iptv-canada)."],
  ),
  "/ca/channels-list": dev(
    ["iptv channels list", "iptv list", "iptv channels canada"],
    "Find channels by interest",
    ["See [Canadian IPTV](/ca/canadian-iptv), [international channels](/international-iptv-channels-canada), [live IPTV](/ca/live-iptv-canada), [movies & series (VOD)](/iptv-vod-movies-series-canada) and [sports](/best-iptv-for-sports-canada). Test your channels with the [free trial](/ca/free-trial)."],
  ),
  "/ca/reviews": dev(
    ["iptv reviews", "iptv canada reviews", "iptv trustpilot", "trustpilot iptv"],
    "How to read IPTV reviews",
    ["Look for specifics — device, event, support outcome. Compare with our [Reddit summary](/blog/best-iptv-canada-reddit), the [providers scorecard](/top-iptv-providers-canada) and the [alternatives checklist](/ca/iptv-alternatives). Then run your own [free trial](/ca/free-trial)."],
  ),
  "/ca/referral": dev(["iptv referral"], "New to Maple4K?", ["Share the [free trial](/ca/free-trial) with friends and point them to [pricing](/ca/pricing) and the [device guides](/ca/iptv-devices)."]),
  "/ca/blog": dev(
    ["iptv blog canada", "iptv guides"],
    "Start here",
    ["New guides: [what is IPTV](/ca/what-is-iptv), [fix buffering](/blog/fix-iptv-buffering-canada), [OTT vs IPTV](/ca/ott-iptv-canada), [IPTV DVR](/blog/iptv-dvr-recording-canada) and [IPTV brand names A–Z](/iptv-brand-names-a-z)."],
  ),
  "/blog/best-iptv-canada-2026": dev(
    ["best iptv 2026", "top 10 iptv"],
    "Verify the ranking yourself",
    ["Use the [providers scorecard](/top-iptv-providers-canada) and [alternatives checklist](/ca/iptv-alternatives) to run your own test; see [pricing](/ca/pricing)."],
  ),
  "/blog/best-iptv-canada-reddit": dev(
    ["reddit iptv", "best iptv reddit", "iptv subscription reddit", "tivimate reddit"],
    "More on Reddit and IPTV",
    ["Read [TiviMate on Reddit & TroyPoint](/blog/tivimate-reddit-troypoint-canada), the [Kemo IPTV comparison](/ca/kemo-iptv-alternative) and the [brand directory](/iptv-brand-names-a-z)."],
  ),
  "/blog/best-iptv-player-canada": dev(
    ["best iptv player", "iptv player"],
    "Detailed player guides",
    ["See the [IPTV player hub](/ca/iptv-player), [TiviMate Premium](/ca/tivimate-premium-canada), [XCIPTV](/xciptv-canada) and [GSE Smart IPTV](/gse-smart-iptv-canada)."],
  ),
  "/blog/iptv-firestick-canada": dev(
    ["install iptv firestick"],
    "Firestick follow-ups",
    ["Next: [TiviMate on Fire Stick](/ca/tivimate-firestick-canada), [Smarters Pro on Fire Stick](/iptv-smarters-pro-firestick-canada) and the [Downloader guide](/blog/iptv-downloader-app-guide-canada)."],
  ),
  "/blog/iptv-smarters-pro-canada": dev(
    ["iptv smarters pro tutorial"],
    "Smarters Pro by device",
    ["[Fire Stick](/iptv-smarters-pro-firestick-canada) · [PC & Mac](/iptv-smarters-pro-pc-mac-canada) · [Smart TV](/iptv-smarters-pro-smart-tv-canada) · [Price & free](/iptv-smarters-pro-subscription-canada) · [Player Lite](/smarters-player-lite-canada)"],
  ),
  "/blog/iptv-vlc-m3u-kodi-guide-canada": dev(
    ["kodi iptv", "kodi ip tv", "vlc iptv", "ip tv vlc", "iptv vlc player"],
    "Related playlist guides",
    ["Read [M3U8 vs M3U](/blog/m3u8-vs-m3u-iptv-canada), [other PC and Kodi players](/blog/other-iptv-players-pc-kodi-canada), [Plex, Jellyfin & Emby](/blog/iptv-plex-jellyfin-emby-stremio-canada) and [free list risks](/blog/free-iptv-m3u-lists-risks-canada)."],
  ),
  "/blog/iptv-vs-cable-canada": dev(
    ["iptv vs cable"],
    "More comparisons",
    ["Also see [IPTV vs satellite](/blog/iptv-vs-satellite-canada), [OTT vs IPTV](/ca/ott-iptv-canada) and [IPTV price](/ca/iptv-price-canada)."],
  ),
  "/blog/is-iptv-legal-canada": dev(
    ["iptv legal", "iptv légal"],
    "Related reading",
    ["En français : [IPTV légal au Canada](/fr/iptv-legal-canada). See also [free list risks](/blog/free-iptv-m3u-lists-risks-canada) and [buying safely](/blog/iptv-amazon-ebay-aliexpress-canada)."],
  ),
  "/blog/what-is-m3u-iptv-canada": dev(
    ["m3u", "m3u list", "m3u iptv", "iptv m3u"],
    "Go further with playlists",
    ["Read [M3U8 vs M3U](/blog/m3u8-vs-m3u-iptv-canada), [what Xtream Codes is](/ca/xtream-iptv-canada), [free list risks](/blog/free-iptv-m3u-lists-risks-canada) and, en français, la [liste M3U IPTV](/fr/liste-m3u-iptv)."],
  ),
  "/blog/best-iptv-for-hockey-canada-2026": dev(
    ["iptv hockey", "nhl iptv"],
    "Watch every game",
    ["Set up [live IPTV](/ca/live-iptv-canada), record games with the [DVR guide](/blog/iptv-dvr-recording-canada) and follow your city: [Toronto](/ca/iptv-toronto), [Montréal](/ca/iptv-montreal), [Edmonton](/ca/iptv-edmonton), [Calgary](/ca/iptv-calgary), [Vancouver](/ca/iptv-vancouver), [Ottawa](/ca/iptv-ottawa), [Winnipeg](/ca/iptv-winnipeg)."],
  ),
};
