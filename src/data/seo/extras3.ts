import type { ExistingExtra } from "./extras";
import type { Section } from "./types";

const TRUST: Section = {
  h2: "Guarantees, payment and support",
  bullets: [
    "Free 24-hour trial before you pay — no credit card required ([start here](/free-trial))",
    "No contract and no automatic renewal — read the [refund policy](/refund-policy) and [terms](/terms-of-service)",
    "Login details are sent by email and WhatsApp within minutes of your order",
    "Support in English and French on WhatsApp, Telegram, live chat and email — [contact us](/contact)",
    "Prices are shown up front on the [pricing page](/pricing); payment options are listed at checkout",
  ],
};

const plan = (label: string, price: string, perMonth: string, perDay: string, who: string[], keywords: string[], next: string): ExistingExtra => ({
  keywords,
  sections: [
    {
      h2: `Is the ${label} plan right for you?`,
      paras: who,
      table: {
        head: ["Plan", "Price", "Per month", "Per day"],
        rows: [[`${label}`, price, perMonth, perDay]],
      },
    },
    { h2: `What happens after you order the ${label} plan`, paras: [`You receive a server URL, username and password (Xtream Codes) by email and WhatsApp. Install a player such as [TiviMate](/tivimate-canada) or [IPTV Smarters Pro](/iptv-smarters-pro-canada), enter the details and open the guide. ${next} Compare every option in our [IPTV price guide](/iptv-price-canada) or pick your [device guide](/iptv-devices).`] },
    TRUST,
  ],
});

const S = {
  wiki: (t: string, u: string) => ({ label: `${t} — Wikipedia`, url: `https://en.wikipedia.org/wiki/${u}` }),
};

export const existingExtras3: Record<string, ExistingExtra> = {
  "/pricing/1-month": plan("1-month", "$9", "$9.00", "≈ $0.30", [
    "The 1-month plan is the lowest-commitment way to keep Maple4K after your free trial. It suits anyone who wants to check quality over a full month, watch a single event such as a playoff series, or use IPTV only occasionally — for example at a cottage or while travelling.",
    "It is priced for flexibility, not for the lowest monthly cost. If you already know you will keep watching, the [6-month](/pricing/6-months) and [12-month](/pricing/12-months) plans cost much less per month.",
  ], ["iptv 1 month", "iptv monthly plan canada", "iptv $9"], "If you like it, you can move to a longer plan at any time."),
  "/pricing/3-months": plan("3-month", "$29", "≈ $9.67", "≈ $0.32", [
    "The 3-month plan covers a full season stretch — a hockey playoff run, a football season or a winter — without committing for a year. It is a good middle step if you want more than a month but are not ready for a long plan.",
    "Be aware that if you will watch for more than three months, the [6-month plan](/pricing/6-months) at $39 works out cheaper per month, and the [12-month plan](/pricing/12-months) cheaper still.",
  ], ["iptv 3 months", "iptv quarterly plan", "iptv $29"], "Your login stays active for the full three months."),
  "/pricing/6-months": plan("6-month", "$39", "$6.50", "≈ $0.21", [
    "The 6-month plan is the popular mid-term choice: about $6.50 a month, enough to cover most of a sports season and any streaming-app habit you want to replace. It is the sensible upgrade after a month or two on a monthly plan.",
    "If you are confident you will keep the service all year, the [12-month plan](/pricing/12-months) drops the price to about $4.08 a month.",
  ], ["iptv 6 months", "iptv half year plan", "iptv $39"], "Renew or switch plans before it ends — there is no automatic renewal."),
  "/pricing/12-months": plan("12-month", "$49", "≈ $4.08", "≈ $0.13", [
    "The 12-month plan is Maple4K's best value: about $4.08 a month, or roughly 13 cents a day, with no contract. It suits households that watch daily, follow several sports and want the same login on all their devices.",
    "Because it is the longest commitment, test first with the [free trial](/free-trial) and, if you have several TVs, choose enough connections — see the [multi-connection price table](/iptv-price-canada).",
  ], ["iptv 12 months", "iptv annual plan", "iptv 1 year", "iptv $49"], "You keep the same login for the full year."),
  "/iptv-near-me": {
    keywords: ["iptv near me canada"],
    sections: [
      {
        h2: "Finding a good IPTV service near you: a checklist",
        paras: [
          "Because IPTV runs over the internet, the best service 'near you' is the one that performs well on your connection. Start with three questions. First, what internet do you have? A stable 10 Mbps supports HD and 25 Mbps supports 4K per stream, and cable, fibre and fixed wireless all work. Second, which screens will you use? Fire Stick, Android TV, Apple TV, Samsung and LG smart TVs, phones and computers are all supported — see the [device hub](/iptv-devices). Third, what do you watch? Local teams, national networks and international channels are all in one lineup.",
          "Then test. Request the [free 24-hour trial](/free-trial), watch a live game in the evening on the device you use most, and message support once. That is more informative than any list of providers. If you want a shortlist to compare, use the [top providers scorecard](/top-iptv-providers-canada) and the [alternatives checklist](/iptv-alternatives).",
        ],
      },
      {
        h2: "Where to buy hardware locally",
        paras: ["Streaming sticks, Android TV boxes and Apple TV are sold at Canadian retailers such as Best Buy, Walmart and Canadian Tire, and online at Amazon.ca. Specialist boxes such as Formuler and MAG come from IPTV retailers. Read the [best IPTV box guide](/best-iptv-box-canada) and the [buying advice](/blog/iptv-amazon-ebay-aliexpress-canada) before you order."],
      },
      TRUST,
    ],
  },
  "/iptv-providers-canada": {
    keywords: [],
    sections: [
      {
        h2: "How Canadian IPTV providers differ",
        paras: [
          "Canadian IPTV providers differ less in channel counts than in operations: how quickly they fix a failed channel, how many servers carry a busy hockey night, how they handle support, and whether they publish prices and refund terms. Those are the things that decide whether you stay after the first month.",
          "When you compare, keep notes. Score each service from 1 to 5 on stability, picture quality, guide accuracy, support speed and price for your plan. Our [scorecard template](/top-iptv-providers-canada) makes this quick. For name-by-name comparisons see [IPTV alternatives](/iptv-alternatives) and the [A–Z brand directory](/iptv-brand-names-a-z).",
        ],
      },
      {
        h2: "What Maple4K publishes so you can verify it",
        bullets: [
          "Prices for every plan on the [pricing page](/pricing) — $9, $29, $39 and $49 for one connection",
          "A written [refund policy](/refund-policy), [terms of service](/terms-of-service) and [privacy policy](/privacy-policy)",
          "A free 24-hour trial with no credit card",
          "Support contact details and a [contact page](/contact)",
          "Public [reviews](/reviews) you can cross-check",
        ],
      },
      TRUST,
    ],
    sources: [{ label: "CRTC — Canada's broadcasting and telecommunications regulator", url: "https://crtc.gc.ca" }],
  },
  "/iptv-quebec": {
    keywords: [],
    sections: [
      {
        h2: "Chaînes et sports au Québec",
        paras: [
          "Au Québec, l'IPTV Maple4K réunit les réseaux francophones et anglophones dans un seul guide : information, divertissement, sports et chaînes internationales, en HD et en 4K là où c'est offert. Le hockey des Canadiens, le soccer de CF Montréal et le football des Alouettes se suivent grâce au guide horaire (EPG), avec des rappels avant le début des matchs. Confirmez les chaînes qui vous intéressent pendant l'[essai gratuit de 24 heures](/free-trial).",
          "Pour la meilleure stabilité, branchez votre appareil en Ethernet ou utilisez le Wi-Fi 5 GHz, surtout si vous êtes chez Vidéotron, Bell ou Cogeco aux heures de pointe. Consultez le guide [IPTV ne fonctionne plus?](/fr/iptv-ne-fonctionne-plus) en cas de saccades.",
        ],
      },
      {
        h2: "Garanties, paiement et soutien",
        bullets: [
          "Essai gratuit de 24 heures, sans carte de crédit",
          "Aucun contrat ni renouvellement automatique — voir la [politique de remboursement](/refund-policy)",
          "Identifiants envoyés par courriel et WhatsApp en quelques minutes",
          "Soutien en français et en anglais sur WhatsApp, Telegram et par courriel — [nous joindre](/contact)",
          "Prix dès 9 $ par mois — [abonnement IPTV](/fr/abonnement-iptv-canada)",
        ],
      },
    ],
  },
  "/reseller": {
    keywords: [],
    sections: [
      {
        h2: "Running a reseller business responsibly",
        paras: [
          "Reselling IPTV is a customer-service business more than a technical one. Your customers judge you on how fast they get a login, how quickly you answer when a game is on and how honest you are about what the service does and does not include. Build a simple routine: send credentials promptly, provide setup instructions for each device (our [device guides](/iptv-devices) can be shared), and keep a record of each customer's expiry date.",
          "Before you commit, test the panel yourself with the [free trial](/free-trial), watch a live game at peak time and message support at an odd hour. Apply the same checks to any panel you consider: the [alternatives checklist](/iptv-alternatives) works for resellers too.",
        ],
      },
      {
        h2: "Legal and consumer basics",
        paras: ["Be clear with customers about what is included, publish your own refund terms and respect privacy: never share customer logins. Read the general [legality overview](/blog/is-iptv-legal-canada) and the Government of Canada's information on the [Copyright Act](https://laws-lois.justice.gc.ca/eng/acts/c-42/) if you are unsure of your obligations. This is not legal advice."],
      },
      TRUST,
    ],
    sources: [{ label: "Copyright Act (Canada) — Justice Laws Website", url: "https://laws-lois.justice.gc.ca/eng/acts/c-42/" }],
  },
  "/iptv-android-canada": {
    keywords: [],
    sections: [
      {
        h2: "Android phone and tablet tips for IPTV",
        paras: [
          "Android phones vary widely, so a few settings matter. Keep the IPTV app excluded from aggressive battery optimisation, otherwise streams can stop when the screen dims. Use Wi-Fi for HD and 4K, and reserve mobile data for occasional viewing — HD uses roughly 3–6 GB an hour. Turn on hardware decoding in the player if the picture stutters.",
          "To watch on a bigger screen, cast to a Chromecast or Google TV, mirror through HDMI, or install a TV app instead — see [IPTV on Chromecast & Google TV](/iptv-chromecast-google-tv-canada) and the [Android TV guide](/iptv-android-tv-canada). Pick a different player from the [mobile apps guide](/iptv-mobile-apps-canada).",
        ],
      },
      {
        h2: "Fix common Android problems",
        table: {
          head: ["Problem", "Try this"],
          rows: [
            ["Stream stops after screen off", "Disable battery optimisation for the app"],
            ["Login rejected", "Check the server URL, username and password for typos"],
            ["Stutters on Wi-Fi", "Move to 5 GHz or closer to the router"],
            ["App missing in Play Store", "Try another player or see the [Downloader guide](/blog/iptv-downloader-app-guide-canada)"],
          ],
        },
      },
      TRUST,
    ],
  },
  "/iptv-ios-canada": {
    keywords: [],
    sections: [
      {
        h2: "iPhone and iPad tips for IPTV",
        paras: [
          "On iOS, install players only from the App Store. IPTV Smarters Pro, iPlayTV and GSE Smart IPTV all work with a Maple4K Xtream login. Keep the app allowed to run in the background if you want audio to continue when the screen locks, and use Picture in Picture where the app supports it. Streaming in 4K on an iPad works well on Wi-Fi 6 networks.",
          "To move the picture to a television, use AirPlay to an Apple TV or compatible smart TV, or install an app directly on the Apple TV — see the [Apple TV guide](/iptv-apple-tv-canada). Compare other apps in the [mobile apps guide](/iptv-mobile-apps-canada).",
        ],
      },
      TRUST,
    ],
    sources: [{ label: "Apple TV 4K (Apple Canada)", url: "https://www.apple.com/ca/apple-tv-4k/" }],
  },
  "/iptv-apple-tv-canada": {
    keywords: [],
    sections: [
      {
        h2: "Apple TV setup checklist",
        bullets: [
          "Update tvOS in Settings → System → Software Updates",
          "Install iPlayTV, IPTV Smarters Pro or GSE Smart IPTV from the App Store",
          "Choose Xtream Codes and enter your Maple4K details — use the iPhone keyboard through Continuity for long text",
          "Turn on Match Content for frame rate and dynamic range for smooth hockey and HDR",
          "Use Ethernet on Apple TV 4K (128 GB model) for live sport",
        ],
        paras: ["Need help choosing? Compare [iPlayTV](/iplaytv-apple-tv-canada), [GSE Smart IPTV](/gse-smart-iptv-canada) and [Smarters Pro](/iptv-smarters-pro-canada)."],
      },
      TRUST,
    ],
    sources: [{ label: "Apple TV 4K (Apple Canada)", url: "https://www.apple.com/ca/apple-tv-4k/" }],
  },
  "/iptv-box": {
    keywords: [],
    sections: [
      {
        h2: "Choosing an IPTV box: what actually matters",
        paras: [
          "An IPTV box is only as good as its decoder, network port and software support. Look for hardware H.265 decoding for 4K, an Ethernet port, at least 2 GB of RAM and a current Android or Google TV version. Avoid boxes 'pre-loaded' with a service you did not choose — they tend to be locked to one provider and rarely updated.",
          "Budget devices such as the Fire Stick 4K or Onn 4K are enough for most homes; power users prefer an Nvidia Shield or Formuler. Compare them in the [best IPTV box guide](/best-iptv-box-canada), the [Android box guide](/best-android-tv-box-for-iptv-canada) and the [set-top box hub](/iptv-set-top-box).",
        ],
      },
      TRUST,
    ],
    sources: [{ label: "Formuler — official website", url: "https://www.formuler.tv" }],
  },
  "/iptv-halifax": {
    keywords: [],
    sections: [
      {
        h2: "Atlantic Canada: internet and channel tips",
        paras: [
          "Viewers in Halifax and across Nova Scotia typically use Bell Aliant or Eastlink. Both support IPTV well; use Ethernet for the main TV and keep other devices on 5 GHz Wi-Fi. Atlantic time means evening games start at different hours in the guide — the EPG in your player shows programme times in your local time zone.",
          "Follow the Mooseheads and Atlantic-based coverage alongside every NHL, CFL and NBA broadcast on TSN and Sportsnet, and pick a player from the [IPTV player hub](/iptv-player). See all city guides on the [IPTV by city](/iptv-cities) page.",
        ],
      },
      TRUST,
    ],
  },
  "/iptv-hamilton": {
    keywords: [],
    sections: [
      {
        h2: "Hamilton and the Golden Horseshoe",
        paras: [
          "Hamilton sits between Toronto and the Niagara region, so viewers follow the Tiger-Cats, the Maple Leafs and the Blue Jays. Rogers and Bell fibre and cable both work well. Choose a wired connection for live games, and if several TVs stream at once, pick a plan with enough connections — see [pricing](/pricing).",
          "Nearby guides: [IPTV Toronto](/iptv-toronto), [IPTV London Ontario](/iptv-london-ontario) and [IPTV Ottawa](/iptv-ottawa). Set up your device with the [devices hub](/iptv-devices).",
        ],
      },
      TRUST,
    ],
  },
  "/iptv-lg-tv-canada": {
    keywords: [],
    sections: [
      {
        h2: "LG webOS checklist",
        bullets: [
          "Check Settings → General → About This TV for the webOS version",
          "Update the firmware before installing IPTV apps",
          "Try Nanomid, Smarters Player Lite or Duplecast — compare in the [Tizen & webOS guide](/iptv-tizen-webos-apps-canada)",
          "Use Ethernet or 5 GHz Wi-Fi and pick a picture mode without motion smoothing for live sport",
          "If apps are missing, plug in a Fire Stick — see [IPTV on Fire Stick](/iptv-firestick-canada)",
        ],
      },
      TRUST,
    ],
  },
  "/iptv-mag-box-canada": {
    keywords: [],
    sections: [
      {
        h2: "MAG box buying and setup checklist",
        bullets: [
          "Note the model and MAC address printed on the label (starts 00:1A:79)",
          "Send the MAC to support — the portal is linked to it",
          "Enter the portal under Settings → System settings → Servers → Portals",
          "Use Ethernet; MAG 524-class boxes suit 4K, older MAG models are HD",
          "Read the detailed guides: [MAG 254](/mag-254-canada), [MAG 322](/mag-322-canada), [MAG 524](/mag-524-canada), [all MAG models](/infomir-mag-models-canada)",
        ],
      },
      TRUST,
    ],
    sources: [{ label: "Infomir — MAG set-top boxes", url: "https://infomir.eu" }],
  },
  "/iptv-roku-canada": {
    keywords: [],
    sections: [
      {
        h2: "Roku: the two workable options",
        paras: [
          "Roku's platform does not run mainstream IPTV apps, so the workable options are casting from a phone (quality depends on your Wi-Fi and the app's cast support) or connecting a second streaming device to another HDMI port. A Fire Stick 4K or an Onn Google TV box is inexpensive and gives you TiviMate or Smarters Pro with the full guide. Many Roku owners keep Roku for the apps they like and switch HDMI input for IPTV.",
          "See [TiviMate on Fire Stick](/tivimate-firestick-canada), the [Onn box guide](/iptv-onn-tv-box-canada) and [TiviMate alternatives for Roku](/tivimate-alternatives-canada).",
        ],
      },
      TRUST,
    ],
  },
  "/iptv-samsung-tv-canada": {
    keywords: [],
    sections: [
      {
        h2: "Samsung Tizen checklist",
        bullets: [
          "Find your model year: Settings → Support → About This TV",
          "Update the TV software before installing apps",
          "Try Smarters Player Lite first; if it is missing, try Smart IPTV or Duplecast — see [Smart IPTV](/smart-iptv) and [Duplecast](/duplecast-iptv-canada)",
          "Enter long URLs with a phone keyboard where the app allows it",
          "If your model has no IPTV app, use a Fire Stick — [Fire Stick guide](/iptv-firestick-canada)",
        ],
      },
      TRUST,
    ],
  },
  "/iptv-smart-tv-canada": {
    keywords: [],
    sections: [
      {
        h2: "Smart TV vs plug-in device: the honest comparison",
        table: {
          head: ["", "Built-in TV app", "Plug-in Fire Stick / Android box"],
          rows: [
            ["Cost", "Free (some apps charge activation)", "Low one-time cost"],
            ["Speed and menus", "Depends on TV age", "Fast and consistent"],
            ["Guide and recording", "Basic", "Full EPG; recording with TiviMate Premium"],
            ["App choice", "Limited by TV OS", "Wide"],
            ["Best for", "Occasional viewing", "Daily, sports-heavy viewing"],
          ],
        },
        paras: ["Whichever you choose, the same Maple4K login works. Start with the [free trial](/free-trial) and read the [Tizen & webOS guide](/iptv-tizen-webos-apps-canada)."],
      },
      TRUST,
    ],
  },
  "/iptv-windows-canada": {
    keywords: [],
    sections: [
      {
        h2: "Windows checklist",
        bullets: [
          "Use the IPTV Smarters Pro desktop app for Xtream login — [PC & Mac guide](/iptv-smarters-pro-pc-mac-canada)",
          "Or open your M3U in VLC (Media → Open Network Stream) — [VLC guide](/blog/iptv-vlc-m3u-kodi-guide-canada)",
          "Enable hardware decoding to keep 4K smooth and the laptop cool",
          "Use a wired connection for live sport",
          "Only download players from the developer's official site",
        ],
      },
      TRUST,
    ],
    sources: [{ label: "VLC media player — official site", url: "https://www.videolan.org/vlc/" }],
  },
  "/reviews": {
    keywords: [],
    sections: [
      {
        h2: "How Maple4K handles feedback and problems",
        paras: [
          "Reviews are most useful when they describe what happened: the device, the event and how support responded. If something goes wrong with your service, message the team with your device model, app and the time of the problem; most issues are diagnosed in a couple of messages. Read the [refund policy](/refund-policy) for what is covered.",
          "Want to compare before you decide? Use the [top providers scorecard](/top-iptv-providers-canada) and run your own [free trial](/free-trial).",
        ],
      },
      TRUST,
    ],
  },
  "/blog/is-iptv-legal-canada": {
    keywords: [],
    sections: [],
    sources: [
      { label: "CRTC — Canadian Radio-television and Telecommunications Commission", url: "https://crtc.gc.ca" },
      { label: "Copyright Act — Justice Laws Website (Canada)", url: "https://laws-lois.justice.gc.ca/eng/acts/c-42/" },
      S.wiki("Internet Protocol television", "IPTV"),
    ],
  },
  "/blog/what-is-m3u-iptv-canada": {
    keywords: [],
    sections: [],
    sources: [S.wiki("M3U", "M3U"), S.wiki("HTTP Live Streaming", "HTTP_Live_Streaming")],
  },
  "/blog/iptv-vlc-m3u-kodi-guide-canada": {
    keywords: [],
    sections: [],
    sources: [
      { label: "VLC media player — official site", url: "https://www.videolan.org/vlc/" },
      { label: "Kodi — official site", url: "https://kodi.tv" },
    ],
  },
  "/blog/iptv-vs-cable-canada": { keywords: [], sections: [], sources: [{ label: "CRTC — broadcasting in Canada", url: "https://crtc.gc.ca" }] },
  "/iptv-4k": { keywords: [], sections: [], sources: [S.wiki("High Efficiency Video Coding (H.265)", "High_Efficiency_Video_Coding")] },
  "/about": { keywords: [], sections: [TRUST] },
  "/how-it-works": { keywords: [], sections: [TRUST], sources: [S.wiki("Internet Protocol television", "IPTV")] },
  "/channels-list": { keywords: [], sections: [TRUST] },
  "/blog": {
    keywords: [],
    sections: [
      {
        h2: "Try what you read about",
        paras: ["Every guide here can be tested with a free 24-hour Maple4K trial — [start yours](/free-trial), see [pricing](/pricing) or ask [support](/contact) for help with any setup."],
      },
    ],
  },
  "/referral": { keywords: [], sections: [TRUST] },
};
