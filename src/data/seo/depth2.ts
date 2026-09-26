import type { Section } from "./types";

/** Second depth pass: extra unique sections for the highest-value pages. */
export const depth2: Record<string, Section[]> = {
  "/dreamlink-box-canada": [
    {
      h2: "Enigma2, Dreambox and IPTV",
      paras: [
        "Some Linux receivers in the Dreambox and Dreamlink family run Enigma2, a receiver software that can play IPTV through plugins and playlists. Searches for 'IPTV Enigma2' usually mean adding an M3U bouquet to such a box. If your receiver supports it, ask [Maple4K support](/contact) for an M3U link and follow your image's plugin instructions; if it does not, an Android box or Fire Stick is easier.",
      ],
    },
  ],
  "/blog/iptv-server-explained-canada": [
    {
      h2: "IPTV sharing and connection limits",
      paras: [
        "'IPTV sharing' usually means letting several people or devices use one login. Each plan allows a set number of simultaneous connections; exceeding it can cause freezing or dropped streams for everyone. Do not post your login publicly, and choose a plan with enough connections for your household — see [pricing](/pricing). If two rooms watch at once, you need two connections.",
      ],
    },
  ],
  "/fr/installer-iptv-canada": [
    {
      h2: "Freebox, Orange et IPTV : de quoi parle-t-on?",
      paras: [
        "Freebox et Orange sont des offres de télévision par Internet de fournisseurs français : le décodeur est fourni par l'opérateur. Les recherches « IPTV Freebox » ou « IPTV Orange » signifient souvent qu'on veut ajouter une application IPTV. Au Canada, la solution est plus simple : utilisez une clé Fire Stick, un boîtier Android ou l'application de votre téléviseur, puis entrez vos identifiants Maple4K. Le terme « iptvisuel » désigne le même besoin : regarder l'IPTV avec des identifiants et un lecteur. Voir [lecteur IPTV](/fr/lecteur-iptv-canada).",
      ],
    },
  ],
  "/tivimate-premium-canada": [
    {
      h2: "TiviMate Premium myths and facts",
      table: {
        head: ["Claim you may see", "Reality"],
        rows: [
          ["\"Premium gives you free channels\"", "No — Premium unlocks player features; channels come from your IPTV subscription"],
          ["\"You need a separate Premium for every TV\"", "Premium is tied to your TiviMate account and can be used on several devices signed in to it"],
          ["\"Lifetime means the app never changes\"", "Lifetime covers the Premium licence; the app and stores can still change over time"],
          ["\"Premium fixes buffering\"", "Buffering is caused by network, device or provider — see [buffering fixes](/blog/fix-iptv-buffering-canada)"],
        ],
      },
      paras: ["If you are ever unsure whether something is an official TiviMate purchase, use only the Companion app and the official listing on your device's store."],
    },
  ],
  "/tivimate-firestick-canada": [
    {
      h2: "A realistic 10-minute plan for a first-time Fire Stick user",
      paras: [
        "Minutes 0–2: plug the stick into HDMI and connect it to Wi-Fi. Minutes 2–4: install TiviMate and open it. Minutes 4–6: request your login on the [free trial page](/free-trial) while the app installs, then copy the three details into a note on your phone so you can read them off while typing. Minutes 6–8: add the playlist with Xtream Codes and let the channels load. Minutes 8–10: open the guide, favourite a few channels and switch the decoder to hardware.",
        "The only step that regularly takes longer is typing with the Fire TV remote. The Fire TV mobile app on your phone has a keyboard and makes text entry much faster — install it before you start.",
      ],
    },
  ],
  "/xciptv-canada": [
    {
      h2: "XCIPTV settings we recommend as a starting point",
      table: {
        head: ["Setting", "Suggested value", "Why"],
        rows: [
          ["Stream format", "Default first; try TS or HLS if a channel stalls", "Different formats behave differently per device"],
          ["Buffer", "Medium", "Balances delay and stability"],
          ["Decoder", "Hardware", "Needed for 4K H.265"],
          ["EPG update", "Every 24 hours", "Fewer background downloads"],
          ["Parental control", "On if children use the TV", "PIN-protects adult categories"],
        ],
      },
      paras: ["Change one setting at a time and test a live channel after each change, so you know what helped."],
    },
  ],
  "/xtream-iptv-canada": [
    {
      h2: "Xtream Codes vocabulary decoded",
      table: {
        head: ["Term you see", "What it means"],
        rows: [
          ["Server / Host / URL", "The web address of your provider's server, usually with a port"],
          ["Username", "Your account name — case-sensitive"],
          ["Password", "Your account password — case-sensitive"],
          ["Playlist name", "A label of your choice inside the app"],
          ["EPG URL", "Optional address for the TV guide; often loaded automatically"],
          ["Connections", "How many simultaneous streams your plan allows"],
        ],
      },
      paras: ["Once you understand these six terms, you can set up any IPTV app in under five minutes — see the [IPTV player hub](/iptv-player) for step-by-step guides."],
    },
  ],
  "/iptv-smarters-pro-firestick-canada": [
    {
      h2: "Smarters Pro on Fire Stick: what to expect from the first launch",
      paras: [
        "The first time you open IPTV Smarters Pro it asks you to accept terms and choose how to log in. Pick Xtream Codes API, type any display name and enter your details. After a short sync the home screen shows Live TV, Movies and Series tiles. If a tile is greyed out, the login did not fully load — go back and re-enter it.",
        "Use the app's Settings → General to switch the player to your preferred decoder and to set the EPG update interval. If you plan to keep TiviMate as your main app, treat Smarters Pro as a backup for troubleshooting: if a channel plays in one and not the other, you have identified whether the fault is the app or the stream.",
      ],
    },
  ],
  "/iptv-web-player-canada": [
    {
      h2: "Web player privacy checklist",
      bullets: [
        "Look for https:// and a domain you recognise before entering anything",
        "Prefer players that let you paste a link without creating an account",
        "Do not reuse your email password as your IPTV password",
        "Clear the browser's saved data on a shared computer",
        "If you suspect a site kept your login, ask [support](/contact) to reset it",
      ],
    },
  ],
  "/best-android-tv-box-for-iptv-canada": [
    {
      h2: "Buying checklist you can print",
      bullets: [
        "Model name and Android/Google TV version printed in the listing",
        "Ethernet port or confirmed USB adapter support",
        "H.265/HEVC 4K decoding confirmed",
        "Google Play certification (or a clear statement about the app store)",
        "Return policy of at least 14–30 days",
        "Recent reviews from Canadian buyers mentioning IPTV apps",
      ],
      paras: ["Ready to buy? Read [marketplace advice](/blog/iptv-amazon-ebay-aliexpress-canada) first, then check the [best IPTV box comparison](/best-iptv-box-canada)."],
    },
  ],
  "/formuler-box-canada": [
    {
      h2: "Formuler vs building your own IPTV box",
      table: {
        head: ["", "Formuler box", "Fire Stick + TiviMate"],
        rows: [
          ["Initial cost", "Higher", "Lower"],
          ["Dedicated IPTV remote", "Yes", "No"],
          ["Recording to USB", "Built in", "TiviMate Premium plus storage"],
          ["App choice", "MyTVOnline 3 plus Android apps", "Any Fire TV app"],
          ["Setup time", "About 5 minutes", "About 5–10 minutes"],
          ["Best for", "Dedicated living-room IPTV box", "Value and flexibility"],
        ],
      },
    },
  ],
  "/best-iptv-box-canada": [
    {
      h2: "Frequently missed details when buying",
      paras: [
        "Check the power supply and HDMI cable are included — some resellers strip accessories to lower the price. Confirm the remote type: IR remotes need line of sight, Bluetooth remotes do not. For MAG and Formuler boxes, ask about warranty terms in Canada, because repairs across borders can be slow. And ask whether firmware updates are still being published for the model; a box that stopped getting updates years ago will slowly lose app compatibility.",
      ],
    },
  ],
  "/buy-iptv-canada": [
    {
      h2: "Payment and privacy tips",
      bullets: [
        "Use a payment method that offers buyer protection when available",
        "Keep your order confirmation and login message",
        "Never share your login publicly — it is tied to your connection limit",
        "Read the [privacy policy](/privacy-policy) to see what data is stored",
        "If anything is unclear, ask [support](/contact) before you pay",
      ],
    },
  ],
  "/cheap-iptv-canada": [
    {
      h2: "Cheap vs cost-effective: how to tell the difference",
      table: {
        head: ["", "Cheap", "Cost-effective"],
        rows: [
          ["Price", "Lowest number you can find", "Fair price for what you use"],
          ["Trial", "Often none", "Free trial available"],
          ["Support", "Limited", "Reachable on messaging apps"],
          ["Stability", "Varies widely", "Consistent at peak times"],
          ["Total cost", "Can rise if you re-buy", "Predictable"],
        ],
      },
      paras: ["Cost-effective is the goal. Use the [free trial](/free-trial) to see which side of the table a service falls on."],
    },
  ],
  "/iptv-price-canada": [
    {
      h2: "Four factors that change IPTV prices",
      bullets: [
        "Plan length — longer plans have a lower monthly cost",
        "Number of simultaneous connections",
        "Whether 4K and VOD are included or sold as extras",
        "Whether support and updates are included — some cheap services charge for help",
      ],
      paras: ["Maple4K includes 4K, VOD and support in every plan; you only choose length and connections."],
    },
  ],
  "/iptv-service-canada": [
    {
      h2: "IPTV service glossary for beginners",
      table: {
        head: ["Term", "Plain-English meaning"],
        rows: [
          ["Provider / supplier", "The company that sells you the IPTV subscription"],
          ["Reseller", "Someone who resells a provider's service; see the [reseller programme](/reseller)"],
          ["Panel", "The system used to create and manage customer accounts"],
          ["Line / account", "Your personal login"],
          ["Connection", "One simultaneous stream"],
          ["EPG", "Electronic programme guide"],
        ],
      },
    },
  ],
  "/premium-iptv-canada": [
    {
      h2: "Premium IPTV checklist for a family home",
      bullets: [
        "One connection per TV that may be used at the same time",
        "A wired connection for the main TV",
        "A simple app on every TV so no one needs help to use it",
        "Parental controls set in the player",
        "A shared note with your login details stored safely",
      ],
    },
  ],
  "/top-iptv-providers-canada": [
    {
      h2: "Sample scorecard you can copy",
      table: {
        head: ["Criteria (score 1–5)", "Provider A", "Provider B", "Maple4K"],
        rows: [
          ["Live sport stability", "", "", ""],
          ["4K picture quality", "", "", ""],
          ["Guide accuracy", "", "", ""],
          ["Support reply speed", "", "", ""],
          ["Price for your plan", "", "", ""],
        ],
      },
      note: "Fill in the blanks after your own trials. The best provider is the one that scores highest for how you watch.",
    },
  ],
  "/canadian-iptv": [
    {
      h2: "Setting up Canadian IPTV on your first device",
      paras: [
        "Choose the device you use most, request your free login, and install the matching app from the [IPTV devices hub](/iptv-devices). When channels load, open the guide and search for your local stations first, then favourite the sports channels for your team. It is worth spending five minutes on favourites: the difference between scrolling through thousands of channels and pressing one button to reach the game is huge.",
      ],
    },
  ],
  "/international-iptv-channels-canada": [
    {
      h2: "What to tell support so they can help quickly",
      bullets: [
        "The country and language of the channels you want",
        "Specific channel names if you know them",
        "The device and app you use",
        "Whether you need sport, news or entertainment most",
      ],
      paras: ["With that information the team can point you to the right categories and check that they play well on your device."],
    },
  ],
  "/iptv-vod-movies-series-canada": [
    {
      h2: "VOD troubleshooting",
      table: {
        head: ["Problem", "Try this"],
        rows: [
          ["Movies tab is empty", "Log in with Xtream Codes rather than M3U, then refresh"],
          ["Artwork missing", "Wait for the first sync to finish; artwork loads gradually"],
          ["Episode will not play", "Try another episode; if all fail, tell support the series name"],
          ["Audio in the wrong language", "Change the audio track in the player's settings"],
          ["Subtitles missing", "Check the player's subtitle menu; availability depends on the title"],
        ],
      },
    },
  ],
  "/iptv-ufc-canada": [
    {
      h2: "Combat sports beyond UFC",
      paras: ["The same subscription carries boxing and other combat sports. Search the guide for the promotion name, then set reminders. For the complete sports picture, see [best IPTV for sports in Canada](/best-iptv-for-sports-canada) and [soccer on IPTV](/iptv-soccer-canada)."],
    },
  ],
  "/iptv-soccer-canada": [
    {
      h2: "A weekly soccer routine with IPTV",
      bullets: [
        "Weekend mornings: Premier League — set reminders on Thursday",
        "Midweek afternoons: Champions League matchdays",
        "Evenings: MLS and Canadian Premier League",
        "Summer: international tournaments and friendlies",
      ],
      paras: ["Keep a favourites group called Soccer so every relevant channel is one press away."],
    },
  ],
  "/what-is-iptv": [
    {
      h2: "IPTV myths, corrected",
      table: {
        head: ["Myth", "Reality"],
        rows: [
          ["IPTV needs a special box", "Any modern device with an app works — see [devices](/iptv-devices)"],
          ["IPTV is the same as Netflix", "IPTV includes live TV and sport; Netflix is on-demand only"],
          ["IPTV always buffers", "Buffering is usually a network or device issue — see [fixes](/blog/fix-iptv-buffering-canada)"],
          ["All IPTV is illegal", "The technology is legal; what matters is licensing — see [legality](/blog/is-iptv-legal-canada)"],
          ["You need a VPN", "Not required for normal viewing"],
        ],
      },
    },
  ],
  "/iptv-cities": [
    {
      h2: "How to pick the right guide",
      bullets: [
        "Choose the city closest to you — the setup is identical everywhere",
        "Read the local sports section for teams and channels",
        "Check the ISP note for tips that apply to your provider",
        "Use [IPTV near me](/iptv-near-me) if your city is not listed",
      ],
    },
  ],
  "/iptv-devices": [
    {
      h2: "Device buying shortlist",
      table: {
        head: ["Budget", "Choose", "Guide"],
        rows: [
          ["Lowest", "Onn 4K box or Fire Stick Lite", "[Onn](/iptv-onn-tv-box-canada) · [Fire Stick](/iptv-firestick-canada)"],
          ["Mid", "Fire Stick 4K / Mi Box S", "[Mi Box](/iptv-xiaomi-mi-box-canada)"],
          ["High", "Nvidia Shield TV", "[Shield](/iptv-nvidia-shield-canada)"],
          ["Dedicated IPTV", "Formuler Z11 Pro Max", "[Formuler](/formuler-box-canada)"],
          ["Apple users", "Apple TV 4K + iPlayTV", "[iPlayTV](/iplaytv-apple-tv-canada)"],
        ],
      },
    },
  ],
  "/iptv-player": [
    {
      h2: "Setting up a player: the 60-second version",
      paras: ["Install the app, choose Xtream Codes, enter server URL, username and password, wait for the channels to load, then open the guide. That is all. Everything else — favourites, recording, themes — can wait until you have confirmed that channels play well. Full steps for each app are linked from the cards above."],
    },
  ],
  "/iptv-set-top-box": [
    {
      h2: "A quick rule of thumb",
      paras: ["If you want to install other apps, choose Android. If you want an appliance you plug in and forget, choose a portal box. If you want IPTV to feel like a cable box, choose a Formuler. Whichever you pick, test with a free trial before you commit — [start here](/free-trial)."],
    },
  ],
  "/iptv-alternatives": [
    {
      h2: "How Maple4K handles switching from another service",
      bullets: [
        "You keep your device and app — only the login changes",
        "You can run Maple4K next to your current service during the trial",
        "There is no contract to end when you leave — you simply do not renew",
        "Support helps you move favourites or set up your player if needed",
      ],
    },
  ],
};
