import type { Section } from "./types";

export const depthInfo: Record<string, Section[]> = {
  // ─────────── learn / blog ───────────
  "/what-is-iptv": [
    {
      h2: "The pieces of an IPTV system",
      paras: [
        "Every IPTV setup has four parts. The provider runs servers that receive channels and store movies. Your account holds the login details that identify you. The player app on your device fetches the guide and streams, and your internet connection carries the video. If one part fails, the picture suffers — which is why buffering can come from a busy Wi-Fi network or from an overloaded server.",
        "Modern IPTV uses adaptive streaming: the app requests small chunks of video and switches quality if your connection changes. That is how a stream can drop from 4K to HD for a few seconds instead of freezing completely.",
      ],
    },
    {
      h2: "Live TV, catch-up and video on demand",
      table: {
        head: ["Type", "What it is", "Example"],
        rows: [
          ["Live TV", "Channels streaming as they are broadcast", "A hockey game on Sportsnet"],
          ["Catch-up / replay", "Recently aired programmes you can watch later", "Last night's news, where the provider supports it"],
          ["Video on demand (VOD)", "Movies and series stored on the server", "A film in 4K — see [IPTV VOD](/iptv-vod-movies-series-canada)"],
          ["Recording", "Programmes saved by your app or box", "TiviMate Premium or a Formuler box"],
        ],
      },
    },
    {
      h2: "IPTV terms you will see in apps",
      bullets: [
        "EPG — the electronic programme guide, a TV listings grid",
        "M3U — a playlist file of channel links; see [what M3U is](/blog/what-is-m3u-iptv-canada)",
        "Xtream Codes — a login of server URL, username and password; see the [Xtream guide](/xtream-iptv-canada)",
        "Portal / MAC — a box-based login used by MAG boxes; see [MAG box guide](/iptv-mag-box-canada)",
        "H.265 / HEVC — a video codec that makes 4K possible at lower bitrates",
        "Connection — one simultaneous stream allowed by your plan",
      ],
    },
    {
      h2: "How much data does IPTV use?",
      paras: [
        "Data use depends on quality. As a rough guide, HD streams use around 3–6 GB per hour and 4K streams can use 7–15 GB per hour, depending on the source and codec. A household watching several hours a day should check that its internet plan has no restrictive data cap. Most Canadian home internet plans from major providers are unlimited or have generous caps, but rural and satellite plans may differ.",
      ],
    },
    {
      h2: "Is IPTV right for you?",
      paras: [
        "IPTV suits people who want more choice than a cable bundle, watch sports or international channels, or want to use multiple devices. It may not suit anyone with an unreliable internet connection or who wants a completely managed, one-box experience from a single provider. If you are unsure, the simplest test is a free trial: it costs nothing and shows you the quality on your own connection. Start yours on the [free trial page](/free-trial).",
      ],
    },
  ],
  "/blog/iptv-for-beginners-canada": [
    {
      h2: "What to expect in your first week",
      paras: [
        "The first day is about setup: install the app, enter the login, favourite your channels. By the third day you will know whether your Wi-Fi is strong enough — evening viewing is the true test. By the end of the week you will have settled on a routine: which channels you watch, which app you prefer and whether you need an extra connection.",
        "If something feels off, do not guess. Note the device, app, channel and time, and ask support. Most problems are solved in a message or two.",
      ],
    },
    {
      h2: "A simple home network checklist",
      bullets: [
        "Place the router in the open, not inside a cabinet",
        "Use 5 GHz Wi-Fi for streaming devices near the router",
        "Use Ethernet for the device you use most",
        "Restart the router monthly",
        "Run a speed test on the same device you watch on — see [buffering fixes](/blog/fix-iptv-buffering-canada)",
      ],
    },
  ],
  "/blog/iptv-server-explained-canada": [
    {
      h2: "Origin servers, edge servers and CDNs in plain English",
      paras: [
        "Large streaming services use a content delivery network (CDN): copies of popular streams are held on servers close to viewers, so video travels a short distance. Smaller IPTV services may use fewer servers or a single data centre, which can add delay for viewers far from it. The result you notice is start-up time and the number of buffering pauses.",
        "You cannot see the server architecture from the outside, but you can measure its effects: how quickly channels start, whether many channels stutter at the same time, and whether performance changes at peak hours. Keep notes during your trial.",
      ],
    },
    {
      h2: "Server-side problems you may notice",
      table: {
        head: ["Symptom", "Likely side"],
        rows: [
          ["One channel freezes, others fine", "Channel source — try another channel"],
          ["All channels freeze at the same moment", "Server or network — test on another device"],
          ["Freezes only on Wi-Fi", "Your network"],
          ["Login fails at peak times only", "Server capacity — contact support"],
        ],
      },
    },
  ],
  "/blog/fix-iptv-buffering-canada": [
    {
      h2: "A step-by-step diagnosis",
      paras: [
        "Work from the outside in. First check whether other devices in the house stream fine — if they do, the problem is likely on your IPTV device. Then test a different channel: if only one channel stutters, the source is at fault. Test a different app: if it works in another player, your original app needs a settings change. Finally test on a wired connection: if it is smooth, your Wi-Fi is the cause.",
        "Change one thing at a time and give it a few minutes. Making five changes at once tells you nothing about what fixed it.",
      ],
    },
    {
      h2: "Device-specific advice",
      bullets: [
        "Fire Stick: clear cache, use an Ethernet adapter, avoid Lite for 4K — see [Fire Stick guide](/iptv-firestick-canada)",
        "Smart TV: reduce playlist size, update firmware, try a plug-in device — see [Smart TV guide](/iptv-smart-tv-canada)",
        "Android box: hardware decoding, Ethernet, remove unused apps — see [best Android TV box](/best-android-tv-box-for-iptv-canada)",
        "Phone or tablet: close background apps and keep the battery saver off",
        "Computer: use a wired connection and hardware decoding — see [PC and Mac guide](/iptv-smarters-pro-pc-mac-canada)",
      ],
    },
  ],
  "/blog/iptv-downloader-app-guide-canada": [
    {
      h2: "Why sideloading needs care",
      paras: [
        "Sideloading means installing an app from outside your device's official store. It is common on Fire Stick and Android TV because some IPTV apps are not listed in every region. The risk is that a file from an unknown source can contain unwanted software. The rule of thumb: only install files that come directly from the developer's own website, and check the address carefully — look-alike domains are common.",
        "After installing, review the app's permissions. A video player has no reason to request access to your contacts or SMS. If it does, uninstall it.",
      ],
    },
    {
      h2: "Downloader troubleshooting",
      table: {
        head: ["Problem", "Fix"],
        rows: [
          ["Install blocked", "Enable 'Install unknown apps' for Downloader in Developer options"],
          ["Page will not load", "Check the URL for typos; try Wi-Fi if Ethernet fails or vice versa"],
          ["APK will not install", "Storage may be full; free space and retry"],
          ["App will not open after install", "Restart the device and clear the app's data"],
        ],
      },
    },
  ],
  "/blog/iptv-plex-jellyfin-emby-stremio-canada": [
    {
      h2: "Why a media server is a different tool",
      paras: [
        "Plex, Jellyfin and Emby are built to organise your own media library: movies, shows and music you own. Their live TV features are add-ons designed around tuners and guide data rather than internet playlists. IPTV players are built for the opposite: fast channel switching, big playlists and guide grids. It is possible to bridge the two, but the extra complexity rarely gives a better result.",
        "If you like the idea of one interface for everything, pick a media server for your own files and keep a dedicated IPTV player for live TV. They can live side by side on the same box.",
      ],
    },
    {
      h2: "If you still want IPTV in Jellyfin or Emby",
      bullets: [
        "Use an M3U link and an XMLTV guide URL from your provider",
        "Keep the playlist small — media servers slow down with huge channel lists",
        "Enable hardware transcoding only if your server supports it",
        "Test playback on the device you use rather than assuming it works",
      ],
    },
  ],
  "/blog/free-iptv-m3u-lists-risks-canada": [
    {
      h2: "What can go wrong with a public list",
      paras: [
        "The obvious risk is that it will not work. The less obvious risks are security-related: pages that host free lists are often full of aggressive ads, pop-ups and fake download buttons. Some lists contain links to unofficial apps you are told to install. Others harvest your email through 'unlock' forms. None of that is worth saving a few dollars.",
        "There is also the reliability problem of shared streams. When thousands of people load the same link, capacity is exhausted and the feed drops. A paid service limits usage to logged-in customers so that quality holds.",
      ],
    },
    {
      h2: "Safer ways to explore IPTV before you pay",
      bullets: [
        "Use an official free trial with a provider that has clear contact details",
        "Load the playlist in your own app — never into an unknown website",
        "Avoid downloading 'IPTV apps' from links in forum posts",
        "Read independent [reviews](/reviews) before you subscribe",
        "Keep your device and apps updated",
      ],
    },
  ],
  "/blog/iptv-amazon-ebay-aliexpress-canada": [
    {
      h2: "If you have already bought a pre-loaded box",
      paras: [
        "If you already own a box that came 'pre-loaded', check whether it allows you to add your own login. Look for Add Playlist, Xtream Codes or Portal settings, or a launcher that lets you install apps. If it does, you can treat the box as a normal device and use it with any provider. If it is locked, consider it hardware you have to work around.",
        "Photograph the box and the listing, keep the order details and, if the product was not as described, use the marketplace's dispute process quickly — most have time limits.",
      ],
    },
    {
      h2: "What to buy where in Canada",
      table: {
        head: ["Where", "Good for", "Watch out for"],
        rows: [
          ["Amazon.ca", "Fire Stick, Fire TV Cube", "Third-party sellers of 'pre-loaded' boxes"],
          ["Best Buy, Walmart, Canadian Tire", "Google TV boxes, Apple TV, Roku", "Old stock on clearance"],
          ["Specialist retailers", "Formuler, MAG", "Check warranty and returns"],
          ["AliExpress / Alibaba", "Cheap accessories", "Unbranded boxes with outdated software"],
        ],
      },
    },
  ],
  "/blog/iptv-vs-satellite-canada": [
    {
      h2: "Reliability: where each technology wins",
      paras: [
        "Satellite reception can be affected by heavy rain or snow on the dish, but it does not depend on a home internet connection. IPTV depends entirely on internet quality and can be affected by congestion, outages or throttling. If your internet is stable and fast, IPTV is convenient and cost-effective. If your internet drops often or you live somewhere with only limited bandwidth, satellite may still be the safer choice for essential TV.",
        "Many households use both: a basic satellite or antenna setup for local channels and IPTV for everything else. That keeps important live channels available during an internet outage without paying for a large satellite package.",
      ],
    },
    {
      h2: "Deciding in five questions",
      bullets: [
        "Do you have at least 25 Mbps of stable internet per 4K stream?",
        "Do you watch sports or international content that satellite bundles charge extra for?",
        "Are you comfortable installing an app on a streaming device?",
        "Would you like to avoid a long contract?",
        "Do you need TV to work during an internet outage?",
      ],
      paras: ["If you answer yes to the first four, try IPTV with the [free trial](/free-trial)."],
    },
  ],

  // ─────────── hubs ───────────
  "/iptv-cities": [
    {
      h2: "Why local matters even though IPTV works everywhere",
      paras: [
        "IPTV is delivered over the internet, so it does not change with your postal code. What does change is the team you follow, the internet provider you use and the local news and programming you care about. City guides bring those details together so you can see at a glance whether the channels you watch are there and what setup tips apply on your ISP.",
        "If your city is not listed, use the closest guide or [IPTV near me](/iptv-near-me). The setup is identical from coast to coast.",
      ],
    },
  ],
  "/iptv-devices": [
    {
      h2: "How to pick your first IPTV device",
      paras: [
        "If you already own a smart TV, try its built-in app first — you may not need to buy anything. If the app is missing or slow, a Fire Stick 4K is the cheapest reliable upgrade and works with almost any TV that has an HDMI port. If you want the best possible experience and do not mind paying more, a Shield TV or a Formuler box gives extra performance and features.",
        "Phones and tablets are a good way to test before you invest. Install IPTV Smarters Pro, sign in with a free trial login and see how the service performs on your network.",
      ],
    },
  ],
  "/iptv-player": [
    {
      h2: "Player features that actually matter",
      bullets: [
        "Xtream Codes login so the guide and VOD load without extra steps",
        "A fast, searchable channel list",
        "Favourites and custom groups",
        "EPG with reminders",
        "Hardware decoding support for 4K",
        "Optional recording where your device and provider allow it",
      ],
      paras: [
        "Features like themes, built-in speed tests or fancy animations matter far less than speed and stability. Choose the app that opens quickly, plays smoothly and that you find pleasant to use every evening.",
      ],
    },
  ],
  "/iptv-set-top-box": [
    {
      h2: "Portal boxes vs Android boxes",
      paras: [
        "A portal box such as a MAG receives its channel list from the provider's portal. It is simple and stable, but it only does what the portal allows. An Android box runs a full operating system: you install an app for IPTV, another for streaming services and can change apps whenever you like. Formuler sits between the two — an Android box with its own polished IPTV app.",
        "If you want to set it up once and forget it, a portal box is appealing. If you like choice and updates, choose an Android box.",
      ],
    },
  ],
  "/iptv-alternatives": [
    {
      h2: "Why comparing beats guessing",
      paras: [
        "IPTV brand names can look almost identical, and searches often mix names, apps and providers. The safest approach is to compare on measurable things rather than reputation. A free trial from each service lets you check picture quality, guide accuracy and support speed. Write down what you find — memory is unreliable after a few evenings of viewing.",
        "If a provider will not let you test before paying, ask why. A confident service normally welcomes a trial.",
      ],
    },
  ],
};
