import type { Section } from "./types";

export const depthDevices: Record<string, Section[]> = {
  // ─────────── devices ───────────
  "/iptv-mac-canada": [
    {
      h2: "Mac-specific tips for smooth IPTV",
      paras: [
        "Apple Silicon Macs decode H.265 in hardware, so 4K IPTV is easy on an M1, M2 or newer chip. On older Intel Macs, 4K may push the CPU; if the fans spin up and video stutters, drop to an HD channel or use an app that supports hardware decoding.",
        "macOS can also send video to other screens. AirPlay from your Mac to a compatible TV or Apple TV is convenient for a match with friends, though wired HDMI is more reliable for live sport.",
      ],
    },
    {
      h2: "Keep your login secure on a shared Mac",
      bullets: [
        "Do not save the login in a browser-based player on a shared computer",
        "Sign out of apps when you finish on a work or family Mac",
        "Never paste your Xtream login into unknown websites — see [web player safety](/iptv-web-player-canada)",
        "Ask [Maple4K support](/contact) to reset credentials if you think they were exposed",
      ],
    },
  ],
  "/iptv-chromecast-google-tv-canada": [
    {
      h2: "Chromecast with Google TV: getting the best result",
      paras: [
        "Chromecast with Google TV is one of the cheapest ways to get the full Android TV app store on any HDMI screen. The 4K model supports HDR and H.265, which suits 4K IPTV. Its main weakness is storage — around 8 GB in the standard model — so avoid installing many apps and clear caches regularly.",
        "If you use the remote's voice search, remember it searches across streaming apps by title, not IPTV live channels. Use the IPTV app's own search box for channels.",
      ],
    },
    {
      h2: "Casting versus native apps",
      table: {
        head: ["", "Native IPTV app on Google TV", "Casting from a phone"],
        rows: [
          ["Quality", "Best — decodes on the device", "Depends on phone and Wi-Fi"],
          ["Remote control", "TV remote", "Phone as remote"],
          ["Battery use", "None on your phone", "Phone stays busy"],
          ["Guide", "Full EPG", "Often limited"],
        ],
      },
      paras: ["If you own an older Chromecast, weigh the cost of a [Fire Stick](/iptv-firestick-canada) against the convenience of casting."],
    },
  ],
  "/iptv-hisense-vidaa-canada": [
    {
      h2: "How to tell which OS your Hisense uses",
      paras: [
        "Look at the home screen. If you see large rows of app tiles with a Google or Roku logo, you have Google TV or Roku TV. If you see a horizontal bar with the VIDAA logo, you have VIDAA. The model name in Settings → Support also tells you: many Canadian-market Hisense sets are labelled as Google TV or Roku TV, while some budget lines ship with VIDAA.",
        "VIDAA has improved its app selection over the years, but IPTV apps come and go in its store. Instead of chasing whichever app is available this month, an inexpensive streaming stick gives you the same experience regardless of which TV you own.",
      ],
    },
    {
      h2: "Simple upgrade path for any VIDAA TV",
      bullets: [
        "Buy a Fire Stick 4K or Onn 4K box and plug it into an HDMI port",
        "Install TiviMate and add your Maple4K login",
        "Set the TV to switch to the HDMI input automatically",
        "Keep the TV's own apps for Netflix and YouTube if you like them",
      ],
      paras: ["See [Fire Stick IPTV setup](/iptv-firestick-canada) or compare devices in the [IPTV devices hub](/iptv-devices)."],
    },
  ],
  "/iptv-nvidia-shield-canada": [
    {
      h2: "Getting the most from Shield TV",
      paras: [
        "The Shield's strength is consistency. It has enough memory and CPU headroom to run TiviMate with a large playlist, recordings to attached storage, and background apps without slowing down. Its AI upscaling can sharpen HD channels on a 4K TV — helpful because many live channels are still broadcast in 720p or 1080p.",
        "Shield Pro also offers extra storage and USB ports, making it a good choice if you plan to record shows or store a media library alongside IPTV. The Ethernet port removes Wi-Fi from the equation for live sport.",
      ],
    },
    {
      h2: "Shield vs Fire Stick 4K Max",
      table: {
        head: ["", "Nvidia Shield TV", "Fire Stick 4K Max"],
        rows: [
          ["Performance", "Excellent", "Very good"],
          ["Ethernet", "Built in", "Adapter needed"],
          ["Upscaling", "AI upscaling", "Standard"],
          ["Price", "Higher", "Much lower"],
          ["Best for", "Enthusiasts, recording, big playlists", "Value and simplicity"],
        ],
      },
      paras: ["Both work with Maple4K. For the wider comparison see the [best Android TV box for IPTV](/best-android-tv-box-for-iptv-canada)."],
    },
  ],
  "/iptv-xiaomi-mi-box-canada": [
    {
      h2: "Living with a budget Android TV box",
      paras: [
        "The Mi Box S is inexpensive and small, which makes it ideal for a bedroom TV or a cottage. Its 8 GB of storage fills up fast, so install only the apps you need: one IPTV player, one streaming app if you use it, and nothing else. Clearing caches monthly keeps it responsive.",
        "Some Mi Box units ship with Android TV versions that receive fewer updates than newer devices. If an IPTV app refuses to install because the OS is too old, check for a system update in Settings → Device Preferences → About → System update.",
      ],
    },
    {
      h2: "Quick fixes for common Mi Box issues",
      bullets: [
        "Wi-Fi drops: move the router closer or use a USB-to-Ethernet adapter that supports the box",
        "Remote not pairing: hold Back and Home together until the light flashes",
        "Apps crash after updates: clear the app's data and log in again",
        "Video stutter in 4K: switch decoder to hardware inside your IPTV app",
      ],
    },
  ],
  "/iptv-onn-tv-box-canada": [
    {
      h2: "Onn 4K: a budget box with Google TV",
      paras: [
        "The Onn 4K streaming box is popular because it brings Google TV, 4K HDR support and a simple remote at a price close to a basic streaming stick. It suits second TVs and secondary rooms, and can replace a slow smart TV interface. As with any budget device, keep the app list short and restart occasionally.",
        "Google TV highlights content from streaming subscriptions on the home screen. IPTV apps still appear in the apps row, and you can pin your player so it is one click away.",
      ],
    },
    {
      h2: "Simple setup checklist",
      bullets: [
        "Update Google TV to the latest version before installing apps",
        "Install TiviMate or IPTV Smarters Pro from Google Play",
        "Turn off unused home-screen recommendations to free memory",
        "Use Ethernet through a compatible adapter if Wi-Fi is weak",
        "Test with a [free Maple4K trial](/free-trial) before committing",
      ],
    },
  ],
  "/best-android-tv-box-for-iptv-canada": [
    {
      h2: "Our recommendations by use case",
      paras: [
        "Choosing an Android TV box is easier when you start with how you watch. For a main living-room TV where you watch live hockey nightly, buy the most capable box in your budget and connect it by Ethernet — the Nvidia Shield is the reference here. For a secondary TV or a cottage, a Google TV box like the Onn 4K or a Mi Box S keeps cost low without giving up 4K.",
        "Power users who want extra storage, more USB ports or specific codec support look at enthusiast boxes from brands such as Ugoos or Homatics. These are often sold through specialist retailers and vary in software support, so read recent reviews and confirm warranty terms in Canada before you buy.",
      ],
    },
    {
      h2: "Features that matter, and features that do not",
      table: {
        head: ["Feature", "Matters?", "Why"],
        rows: [
          ["H.265 / HEVC hardware decode", "Yes", "Needed for 4K IPTV streams"],
          ["Ethernet", "Yes", "Stability during live sport"],
          ["2 GB+ RAM", "Yes", "Smooth guide scrolling"],
          ["Wi-Fi 6", "Nice to have", "Only helps if your router supports it"],
          ["8K claims", "No", "IPTV is not delivered in 8K"],
          ["Dozens of pre-installed apps", "No", "Signals a locked or low-quality box"],
        ],
      },
      paras: ["Ready to test? Try Maple4K on any of these boxes with the [free trial](/free-trial)."],
    },
  ],

  // ─────────── boxes ───────────
  "/formuler-box-canada": [
    {
      h2: "Buying a Formuler box in Canada",
      paras: [
        "Formuler boxes are usually sold through IPTV retailers, electronics marketplaces and some specialist online shops. Because pricing and stock change often, compare a couple of sellers and check that the listing shows the exact model, the version of Android and what is included in the box (remote, power supply, HDMI cable).",
        "Ask about the return policy and whether the box is new. A refurbished or grey-market unit may work perfectly well but can lack warranty coverage in Canada. If a listing claims the box comes 'pre-loaded' with a service, treat that as a warning sign — you want a clean box that lets you choose your own provider.",
      ],
    },
    {
      h2: "First-time setup checklist for any Formuler",
      bullets: [
        "Connect Ethernet and HDMI, then complete the on-screen setup wizard",
        "Update firmware from Settings before adding any portal",
        "Open MyTVOnline 3 and add only one portal at first",
        "Enable the EPG and let it finish downloading before browsing",
        "Attach a USB drive if you plan to record, and format it through the box",
        "Save your Maple4K login somewhere safe in case you need to reset the box",
      ],
      paras: ["Detailed portal steps are in the [MyTVOnline guide](/mytvonline-canada)."],
    },
  ],
  "/formuler-z8-pro-canada": [
    {
      h2: "Is the Z8 Pro still a good buy?",
      paras: [
        "The Z8 Pro line remains a solid mid-range IPTV box: it gives you the polished MyTVOnline 3 interface, USB recording and Ethernet without the price of the newest flagship. For homes watching mainly HD and some 4K content, it is more than enough. If you want faster menu response, more RAM headroom or the latest Android version, stepping up to a Z10 Pro Max or Z11 Pro Max is worth considering.",
        "Availability varies by retailer and generation, so double-check the exact model name on the listing (Z8, Z8 Pro, Z8 Pro 4K) and confirm 4K support before you buy.",
      ],
    },
    {
      h2: "Z8 Pro maintenance tips",
      bullets: [
        "Reboot every couple of weeks to keep the interface fast",
        "Remove unused portals and old EPG sources",
        "Keep the firmware up to date",
        "Place the box with airflow around it — heat can cause slowdowns",
      ],
    },
  ],
  "/formuler-z10-pro-max-canada": [
    {
      h2: "Where the Z10 Pro Max fits",
      paras: [
        "The Z10 Pro Max sits between the value-focused Z8 Pro and the top-tier Z11 Pro Max. It is a sensible choice for people who want a responsive interface, dependable recording and 4K playback but do not need the very latest hardware. Many owners pair it with Ethernet and a USB drive and leave it running as the main IPTV device in the living room.",
        "Compared with a Fire Stick, the Formuler experience is more integrated: the remote has IPTV-specific buttons, and the box is designed to always be on and ready. The trade-off is a higher purchase price and a smaller app ecosystem if you use only MyTVOnline 3.",
      ],
    },
    {
      h2: "Getting reliable recordings",
      bullets: [
        "Use a USB 3.0 drive or SSD rather than an old flash stick",
        "Format the drive through the Formuler menu",
        "Leave plenty of free space — a single 4K game can be very large",
        "Schedule recordings from the guide rather than manually starting them",
      ],
      paras: ["Read our [Formuler box overview](/formuler-box-canada) for the other models in the range."],
    },
  ],
  "/mag-322-canada": [
    {
      h2: "Why MAG boxes still have fans",
      paras: [
        "MAG boxes are appliance-like: you plug them in, register the MAC address and add a portal. There are no apps to update and no store to navigate, which appeals to people who value stability and simplicity. The MAG 322 in particular has been a workhorse for years, and many households still run one on a secondary TV.",
        "The trade-off is flexibility. You cannot install extra apps, and modern 4K H.265 content is better served by newer hardware. For an HD-only bedroom TV, though, a MAG 322 remains perfectly serviceable.",
      ],
    },
    {
      h2: "MAG 322 quick fixes",
      table: {
        head: ["Symptom", "Check"],
        rows: [
          ["Portal shows an error", "Confirm the MAC registered with the provider matches the sticker exactly"],
          ["Channels missing", "Refresh the portal and wait a minute after restart"],
          ["Wi-Fi unstable (322w1)", "Move closer, use 5 GHz if supported, or use Ethernet"],
          ["Screen blank after update", "Factory reset the box and re-enter the portal"],
        ],
      },
      paras: ["For upgrades see [MAG 524](/mag-524-canada) or [Formuler boxes](/formuler-box-canada)."],
    },
  ],
  "/mag-524-canada": [
    {
      h2: "Why choose a MAG 524",
      paras: [
        "The MAG 524 family is the newest in Infomir's line, aimed at people who want the appliance simplicity of a portal box together with 4K output. Setup is the same as older MAG models, so anyone comfortable with a MAG 322 will feel at home. It suits homes where several TVs each get a dedicated box and a family member just wants to press one button and watch.",
        "Because MAG boxes are portal-based, you rely on the provider's portal for your channels rather than an app you can swap. That is fine when the portal is stable, but it means you cannot easily change interface if you dislike it.",
      ],
    },
    {
      h2: "4K setup checklist for MAG 524",
      bullets: [
        "Use a certified HDMI 2.0 cable and a 4K-capable input",
        "Enable the 4K output resolution in the box's video settings",
        "Use Ethernet — 4K streams are demanding",
        "Test a 4K movie and a live sports channel before deciding it is stable",
      ],
    },
  ],
  "/mag-254-canada": [
    {
      h2: "How old is too old?",
      paras: [
        "Boxes like the MAG 250 and 254 were designed when 720p and 1080p H.264 streams were the norm. They can still play those streams, but they struggle with H.265 or 4K content and may run hot. If your box still plays your HD channels smoothly, keep it. If you see constant freezing or the box no longer receives firmware support, replacement is worth it.",
        "When upgrading, you have two paths: stay with a portal-style box such as the MAG 524, or move to an Android-based device like a Formuler or Fire Stick, which gives you app choice and a longer software lifespan.",
      ],
    },
    {
      h2: "Upgrade options compared",
      table: {
        head: ["Option", "Pros", "Cons"],
        rows: [
          ["MAG 524", "Familiar portal setup, 4K", "No app choice"],
          ["Formuler Z-series", "Dedicated IPTV remote, recording", "Higher cost"],
          ["Fire Stick 4K", "Low cost, TiviMate", "No dedicated remote buttons"],
          ["Android TV box", "Flexible, many apps", "Requires setup"],
        ],
      },
    },
  ],
  "/infomir-mag-models-canada": [
    {
      h2: "How to find your MAG model number",
      paras: [
        "Turn the box over and read the sticker: it lists the model (for example MAG 322w1 or MAG 524w3), the MAC address and the serial number. The model name tells you the generation and whether it has built-in Wi-Fi. The MAC address, which begins 00:1A:79 on Infomir devices, is what your provider needs to link the portal to your box.",
        "If you bought a used box, factory reset it from the settings menu before adding your own portal. Older portals from previous owners can remain stored and cause confusing behaviour.",
      ],
    },
    {
      h2: "Choosing the right MAG for your TV",
      bullets: [
        "1080p TV or bedroom set: an older MAG in good condition is fine",
        "4K TV in the living room: choose a 524-class model",
        "Multiple TVs: consider one box per TV, all registered on the same subscription with enough connections",
        "Not sure? Message [support](/contact) with your model and TV and we will advise",
      ],
    },
  ],
  "/dreamlink-box-canada": [
    {
      h2: "What to ask before buying a Dreamlink box",
      paras: [
        "Dreamlink boxes are sold by a number of retailers, and features differ between models. Before you buy, ask the seller whether the box supports Xtream Codes, portal URLs or M3U links, whether it can install additional apps, and what firmware updates are available. A box that supports only one provider's app will limit you.",
        "If you already own a Dreamlink and it works, keep it. If it does not accept third-party logins, adding a Fire Stick or Android TV box is an easy way to keep the TV and gain flexibility.",
      ],
    },
    {
      h2: "Troubleshooting a Dreamlink box",
      bullets: [
        "Check the network cable and router lights first",
        "Confirm the date and time on the box are correct — wrong time can break streams",
        "Re-enter the portal or Xtream details carefully",
        "Reboot the box and router",
        "Send [support](/contact) the model number if problems persist",
      ],
    },
  ],
  "/buzztv-canada": [
    {
      h2: "Living with a BuzzTV box",
      paras: [
        "BuzzTV boxes are built around Android and typically include Ethernet, a simple remote and support for common IPTV apps. That makes them a good middle ground between a bare-bones streaming stick and a premium Formuler. Because they run Android, you can also install other apps such as YouTube or Netflix — depending on the model's certification.",
        "As with any Android box, check whether the model receives firmware updates and whether the Play Store is available. A box without Google Play limits your app choices, though sideloading with the Downloader app is an option.",
      ],
    },
    {
      h2: "Getting reliable 4K on BuzzTV",
      bullets: [
        "Use the Ethernet port instead of Wi-Fi",
        "Set the player's decoder to hardware",
        "Keep the firmware current",
        "Try a different HDMI port or cable if you see flicker",
      ],
      paras: ["Compare other boxes in the [set-top box hub](/iptv-set-top-box)."],
    },
  ],
  "/tvip-s-box-canada": [
    {
      h2: "TVIP: middleware and Android modes explained",
      paras: [
        "TVIP S-Box devices are built around a middleware model: you enter a portal or server address in the box's IPTV settings and the channel list is delivered from there. On versions that also offer an Android mode, you can switch to a normal Android interface and install apps like TiviMate. Knowing which mode you are in explains most 'it does not work' questions.",
        "Because TVIP hardware spans several generations, always confirm the exact version printed on the box before following instructions written for another model.",
      ],
    },
    {
      h2: "Checklist for TVIP owners",
      bullets: [
        "Identify your version (v.525, v.605, etc.) from the label",
        "Check whether Android mode is available and enabled",
        "Enter the portal or Xtream details exactly",
        "Update firmware where offered",
        "Ask [Maple4K support](/contact) which setup fits your version",
      ],
    },
  ],
  "/king365tv-canada": [
    {
      h2: "Boxes tied to one service: what are your options?",
      paras: [
        "Some brand-name boxes are designed to work with a single provider. If yours does not let you add a different login, you can still use it as an ordinary HDMI device or retire it and use a general-purpose streaming stick. The point of buying a box is convenience; if it limits your choices, it is not serving you.",
        "Before you spend money, check whether the box has an Add Playlist option, an Android launcher or a Play Store. If it does, you may already have everything you need to use another service.",
      ],
    },
    {
      h2: "Independent options that keep you flexible",
      bullets: [
        "[Fire Stick 4K](/iptv-firestick-canada) — inexpensive and works with any provider",
        "[Android TV box](/best-android-tv-box-for-iptv-canada) — most flexible",
        "[Formuler](/formuler-box-canada) — dedicated IPTV experience with open portals",
        "[Smart TV apps](/iptv-smart-tv-canada) — no extra hardware if your TV supports them",
      ],
    },
  ],
  "/best-iptv-box-canada": [
    {
      h2: "How we would choose an IPTV box for different homes",
      paras: [
        "A single-TV household that just wants IPTV without fuss: buy a Fire Stick 4K, install TiviMate, and spend the savings on a longer subscription. A family with a large living-room TV and heavy sports viewing: get a Shield TV or Formuler Z11 Pro Max and connect it by Ethernet. A home with several TVs: buy a mix — a premium box in the main room and inexpensive sticks elsewhere — and use a multi-connection plan.",
        "For anyone who likes the appliance approach and never wants to update apps, a MAG 524 is attractive. Whichever you choose, test with a free trial first so you know the service runs on your hardware.",
      ],
    },
    {
      h2: "Mistakes to avoid when buying an IPTV box",
      bullets: [
        "Paying extra for a box 'pre-loaded' with a provider you did not choose",
        "Buying 8K boxes — IPTV content is not delivered in 8K",
        "Ignoring the return policy on marketplace purchases",
        "Assuming any box works with any provider — check for Xtream, M3U or portal support",
        "Skipping the Ethernet port on a device you will use for live sports",
      ],
    },
  ],
};
