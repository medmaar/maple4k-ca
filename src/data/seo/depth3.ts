import type { Section } from "./types";

const W = (t: string, u: string) => ({ label: `${t} — Wikipedia`, url: `https://en.wikipedia.org/wiki/${u}` });

/** Third depth pass: pages that were under ~600 words in the deep audit. */
export const depth3: Record<string, Section[]> = {
  "/best-iptv-for-firestick-canada": [
    { h2: "Fire Stick IPTV mistakes to avoid", bullets: [
      "Installing five IPTV apps — one or two is plenty and saves storage",
      "Leaving Wi-Fi on 2.4 GHz when 5 GHz is available",
      "Adding an M3U link when your provider offers Xtream Codes (slower to load, no guide)",
      "Sideloading from unofficial sites — use the [Downloader guide](/blog/iptv-downloader-app-guide-canada)",
      "Skipping the free trial and paying for a long plan first",
    ], paras: ["Support is on hand at any hour — [message us](/contact) with your Fire Stick model if something misbehaves."] },
  ],
  "/blog/iptv-dvr-recording-canada": [
    { h2: "Recording scenarios: what to do when", table: { head: ["Scenario", "Best approach"], rows: [
      ["You will be out during a game", "Schedule a recording in TiviMate Premium and add 10 minutes of padding"],
      ["You want to watch from the start after joining late", "Use timeshift/pause if your player supports it"],
      ["You want to keep a show", "Record to a USB drive or SSD and label it"],
      ["Two games at once", "Two connections and two devices — see [pricing](/pricing)"],
      ["You watch on a phone", "Use catch-up where available rather than recording"],
    ] }, paras: ["Recording depends on your device, storage and the stream, and is for personal viewing. See the [buffering guide](/blog/fix-iptv-buffering-canada) if recordings stutter."] },
  ],
  "/blog/iptv-for-beginners-canada": [
    { h2: "Beginner FAQ: words you will see", table: { head: ["Word", "Meaning"], rows: [
      ["Provider", "The company that sells your IPTV subscription"],
      ["Player / app", "The software that shows channels — [player hub](/iptv-player)"],
      ["Xtream Codes", "A three-field login — [explained](/xtream-iptv-canada)"],
      ["EPG", "The TV guide"],
      ["Connection", "One simultaneous stream allowed by your plan"],
      ["VOD", "Movies and series on demand — [VOD guide](/iptv-vod-movies-series-canada)"],
    ] }, paras: ["Still unsure? The [what is IPTV guide](/what-is-iptv) covers the basics and support will answer any setup question."] },
  ],
  "/blog/iptv-plex-jellyfin-emby-stremio-canada": [
    { h2: "Which tool for which job", paras: ["Use Plex, Jellyfin or Emby for the movies, shows and music you own; use a dedicated IPTV player for live channels; use Stremio only if you understand the add-ons you install. Mixing them is possible but adds maintenance. If you value simplicity, keep two apps: a media server for your library and [TiviMate](/tivimate-canada) or [Smarters Pro](/iptv-smarters-pro-canada) for live TV."] },
  ],
  "/blog/iptv-vs-satellite-canada": [
    { h2: "Cost comparison for a typical household", paras: ["A satellite package typically combines a monthly bundle fee, equipment rental or purchase and installation. IPTV replaces those with a subscription and a streaming device you may already own. Because bundle prices change often, compare current offers rather than relying on our numbers: total the monthly fee, receiver rental, sports add-ons and taxes for the channels you actually watch, then compare with the [Maple4K plans](/pricing) from $9 a month."] },
  ],
  "/blog/m3u8-vs-m3u-iptv-canada": [
    { h2: "Troubleshooting playlist problems", table: { head: ["Symptom", "Likely cause", "Fix"], rows: [
      ["Playlist loads but no channels", "Expired subscription or wrong URL", "Check expiry; re-copy the link"],
      ["Channel names look garbled", "Encoding mismatch", "Use the UTF-8 (M3U8) version of the link"],
      ["App freezes loading", "Huge M3U with VOD", "Use Xtream Codes instead"],
      ["No guide", "M3U lacks EPG", "Add the EPG URL or use Xtream Codes"],
      ["Works in VLC, not in the TV app", "TV app limits file size", "Try another app — [player hub](/iptv-player)"],
    ] }, paras: ["Need a link that works in every app? Ask [support](/contact) or start the [free trial](/free-trial)."] },
  ],
  "/blog/other-iptv-players-pc-kodi-canada": [
    { h2: "Choosing between Kodi, VLC and Smarters Pro", paras: ["Pick VLC if you just want to play a link quickly. Pick Kodi if you want a media-centre interface with a guide and are comfortable installing a PVR client. Pick the Smarters Pro desktop app if you want the Xtream login with categories and search. All work with Maple4K; the right one is the one you will actually open. Try two for a week and keep the one that feels easier."] },
  ],
  "/blog/tivimate-reddit-troypoint-canada": [
    { h2: "Turning advice into a test", table: { head: ["Advice you read", "How to test it"], rows: [
      ["Use hardware decoding", "Toggle it and watch a 4K channel for five minutes"],
      ["Refresh EPG daily", "Change the interval and check guide accuracy the next day"],
      ["Premium is worth it", "Try recording one game before paying — see [TiviMate Premium](/tivimate-premium-canada)"],
      ["Provider X is best", "Run its free trial next to Maple4K's — [alternatives](/iptv-alternatives)"],
    ] }, paras: ["Advice is a starting point; your own device and internet decide the result."] },
  ],
  "/buzztv-canada": [
    { h2: "BuzzTV FAQ from real setups", paras: ["Owners most often ask three things. Can I use my own provider? Yes if the box lets you add Xtream or M3U in its IPTV app. Can I install other apps? Usually, from the box's app store or by sideloading. Why does it stutter in 4K? Almost always Wi-Fi or the software decoder — use Ethernet and hardware decoding. If you are stuck, [contact support](/contact) with the exact model (XRS 4500 or 4900) and we will suggest the right app."] },
  ],
  "/formuler-z10-pro-max-canada": [
    { h2: "Common Z10 Pro Max questions", table: { head: ["Question", "Short answer"], rows: [
      ["Does it need a special IPTV login?", "No — Xtream Codes or M3U in MyTVOnline 3"],
      ["Can I record?", "Yes to USB storage where the stream allows"],
      ["Wi-Fi or Ethernet?", "Ethernet for live sport"],
      ["Can I install TiviMate?", "It runs Android, so other apps can be installed"],
      ["Is it worth it over a Fire Stick?", "If you want a dedicated IPTV interface and remote, yes"],
    ] }, paras: ["More on the range: [Formuler box overview](/formuler-box-canada), [Z8 Pro](/formuler-z8-pro-canada) and [Z11](/iptv-formula)."] },
  ],
  "/formuler-z8-pro-canada": [
    { h2: "Z8 Pro questions answered", table: { head: ["Question", "Short answer"], rows: [
      ["Is it 4K?", "The Z8 Pro 4K variant is — check your exact model"],
      ["Which app?", "MyTVOnline 3 is preinstalled"],
      ["Can I switch to Xtream Codes?", "Yes — Add Portal → Xtream Codes"],
      ["Does it record?", "To attached USB storage"],
      ["Upgrade path?", "[Z10 Pro Max](/formuler-z10-pro-max-canada) or [Z11](/iptv-formula)"],
    ] }, paras: ["Support can confirm your model and the best settings — [contact us](/contact)."] },
  ],
  "/gse-smart-iptv-canada": [
    { h2: "Getting GSE Smart IPTV right on iPhone and Apple TV", paras: ["Choose the Xtream option and let the first sync finish before you open channels. Add a favourites group early — GSE remembers it. If the app asks about Chromecast or AirPlay, use AirPlay for Apple TV and a native app where possible; native decoding is steadier than mirrored video. On iPhone, allow background audio in the app settings if you want sound to continue when the screen locks."] },
  ],
  "/infomir-mag-models-canada": [
    { h2: "MAG model FAQ", table: { head: ["Question", "Answer"], rows: [
      ["Do all MAG boxes use the same setup?", "Yes — MAC + portal URL"],
      ["Can I add apps?", "No app store; everything goes through the portal"],
      ["Which model for 4K?", "524-class — [MAG 524](/mag-524-canada)"],
      ["Is a MAG better than an Android box?", "Different: simpler vs more flexible — see [set-top boxes](/iptv-set-top-box)"],
      ["Where is the MAC?", "On the sticker, starts 00:1A:79"],
    ] }, paras: ["Send your MAC to [support](/contact) or start a [free trial](/free-trial) and we will link the portal."] },
  ],
  "/iptv-24-7-canada": [
    { h2: "24/7 claims to be sceptical about", bullets: [
      "'Zero downtime' — no service has none; ask how outages are handled",
      "'Unlimited channels' — count the ones you will watch",
      "'24/7 support' with no visible contact details",
      "Very long lifetime offers — see [lifetime IPTV](/iptv-lifetime-subscription-canada)",
    ], paras: ["Maple4K's own commitment is simple: published prices, a free 24-hour trial, and support you can message any time — [contact](/contact)."] },
  ],
  "/iptv-hisense-vidaa-canada": [
    { h2: "Hisense buying tips for IPTV users", paras: ["If you are about to buy a Hisense TV and want IPTV built in, choose a Google TV or Roku TV model rather than VIDAA; the app selection is far wider. If you already own a VIDAA set, do not replace it — add a $50-class streaming stick and put the TV on that HDMI input. Either way, the same [Maple4K login](/free-trial) works, and the [devices hub](/iptv-devices) lists the guides for each option."] },
  ],
  "/iptv-lifetime-subscription-canada": [
    { h2: "Questions to ask any seller of long plans", bullets: [
      "How long has the service operated, under what name?",
      "What is the written refund policy if the service stops?",
      "Who do I contact, and how quickly do they reply?",
      "Can I test first without paying?",
      "What happens if a channel or server is removed?",
    ], paras: ["Clear answers are a good sign; vague ones are not. Maple4K answers all five in its [terms](/terms-of-service), [refund policy](/refund-policy) and [contact page](/contact)."] },
  ],
  "/iptv-mobile-apps-canada": [
    { h2: "Mobile IPTV FAQ", table: { head: ["Question", "Answer"], rows: [
      ["Can I download for offline viewing?", "Live IPTV needs a connection; VOD offline support varies by app"],
      ["Does it drain the battery?", "Video decoding is power-hungry — plug in for long sessions"],
      ["Can two phones use one login?", "Only up to your plan's connection count"],
      ["Best app for Android?", "[XCIPTV](/xciptv-canada) or Smarters Pro"],
      ["Best app for iPhone?", "Smarters Pro, [iPlayTV](/iplaytv-apple-tv-canada) or [GSE](/gse-smart-iptv-canada)"],
    ] }, paras: ["More: [IPTV on iPhone](/iptv-ios-canada) and [IPTV on Android](/iptv-android-canada)."] },
  ],
  "/iptv-nvidia-shield-canada": [
    { h2: "Shield TV troubleshooting", table: { head: ["Problem", "Fix"], rows: [
      ["Stutter on 4K", "Ethernet; hardware decoder; disable HDR tone-mapping if the TV handles HDR"],
      ["Colour looks washed out", "Match dynamic range and colour space to the TV"],
      ["App crashes", "Clear cache; reinstall; update Shield software"],
      ["Remote lag", "Replace batteries; re-pair"],
    ] }, paras: ["Not sure a Shield is right? Compare in the [best Android TV box guide](/best-android-tv-box-for-iptv-canada)."] },
  ],
  "/iptv-onn-tv-box-canada": [
    { h2: "Onn box FAQ", table: { head: ["Question", "Answer"], rows: [
      ["Google TV or Android TV?", "Current Onn 4K boxes run Google TV; both install IPTV apps"],
      ["Storage?", "Modest — keep apps to what you need"],
      ["Ethernet?", "Via a compatible USB adapter"],
      ["Best IPTV app?", "[TiviMate](/tivimate-canada)"],
      ["Sports-ready?", "Yes for HD; use Ethernet for 4K games"],
    ] }, paras: ["Compare with the [Mi Box](/iptv-xiaomi-mi-box-canada) and [Fire Stick](/iptv-firestick-canada)."] },
  ],
  "/iptv-soccer-canada": [
    { h2: "Soccer viewing tips", bullets: [
      "Create a favourites group called Soccer and add every relevant sports channel",
      "Use EPG reminders for morning kick-offs",
      "Watch in 1080p on busy match days if your connection is shared",
      "Use two connections if two people follow different matches — [pricing](/pricing)",
    ], paras: ["Rights vary by competition and season, so always confirm your matches with the [free trial](/free-trial)."] },
  ],
  "/iptv-ufc-canada": [
    { h2: "UFC FAQ", table: { head: ["Question", "Answer"], rows: [
      ["Do I need a separate purchase?", "No separate PPV charge on top of your Maple4K plan"],
      ["When do cards start?", "Check the EPG in your local time"],
      ["Can I watch on my phone?", "Yes with Smarters Pro — [mobile apps](/iptv-mobile-apps-canada)"],
      ["Can I record?", "See the [DVR guide](/blog/iptv-dvr-recording-canada)"],
    ] }, paras: ["More sport: [best IPTV for sports](/best-iptv-for-sports-canada)."] },
  ],
  "/iptv-tizen-webos-apps-canada": [
    { h2: "Choosing an app when several are available", paras: ["If more than one app is available for your TV, start with the one that uses a direct Xtream login (Smarters Player Lite): it needs no playlist upload and loads the guide. If the TV's remote makes typing painful, use a code-based app (Duplecast) and enter the playlist from your phone. Use Smart IPTV if you already own an activation. Whichever you choose, keep the playlist small and the TV firmware current."] },
  ],
  "/iptv-xiaomi-mi-box-canada": [
    { h2: "Mi Box FAQ", table: { head: ["Question", "Answer"], rows: [
      ["Is the Mi Box S still supported?", "It receives fewer updates than newer boxes; update while you can"],
      ["4K?", "Yes — 4K HDR at 60 fps output"],
      ["Best app?", "[TiviMate](/tivimate-canada)"],
      ["Casting?", "Google Cast is built in"],
      ["Upgrade path?", "[Shield TV](/iptv-nvidia-shield-canada) or [Onn 4K](/iptv-onn-tv-box-canada)"],
    ] }, paras: ["Set it up in five minutes with the [free trial](/free-trial)."] },
  ],
  "/king365tv-canada": [
    { h2: "Checklist before you replace a box", bullets: [
      "Confirm whether the box accepts another login or is locked",
      "Confirm the box's update status and warranty",
      "Test a cheap streaming stick first — it may solve everything for a small cost",
      "Keep your existing box as a backup on a second TV",
    ], paras: ["See the [best IPTV box guide](/best-iptv-box-canada) and [devices hub](/iptv-devices) for replacement options."] },
  ],
  "/live-iptv-canada": [
    { h2: "Live IPTV FAQ for first-time viewers", table: { head: ["Question", "Answer"], rows: [
      ["Why is live delayed?", "Streaming adds a few seconds of buffering"],
      ["Can I pause live TV?", "Some players support timeshift — see the [DVR guide](/blog/iptv-dvr-recording-canada)"],
      ["Best device for live sport?", "Wired Fire Stick 4K, Shield or Formuler — [devices](/iptv-devices)"],
      ["Does live work on my phone?", "Yes — [mobile apps](/iptv-mobile-apps-canada)"],
      ["What if a channel is down?", "Try another channel, then message [support](/contact)"],
    ] } },
  ],
  "/mag-254-canada": [
    { h2: "MAG 254 FAQ", table: { head: ["Question", "Answer"], rows: [
      ["Is it 4K?", "No — HD-era hardware"],
      ["Does it need an app?", "No — portal only"],
      ["Wi-Fi?", "Use Ethernet"],
      ["Worth keeping?", "For HD on a spare TV, yes"],
      ["Replacement?", "[MAG 524](/mag-524-canada) or a [Fire Stick](/iptv-firestick-canada)"],
    ] } },
  ],
  "/mag-524-canada": [
    { h2: "MAG 524 FAQ", table: { head: ["Question", "Answer"], rows: [
      ["4K output?", "Yes on 524-class models — use HDMI 2.0"],
      ["Can I install apps?", "No — portal-based"],
      ["Ethernet or Wi-Fi?", "Ethernet (524w3 adds Wi-Fi)"],
      ["Setup time?", "About five minutes after we link your MAC"],
      ["Other MAG models?", "[All MAG models](/infomir-mag-models-canada)"],
    ] } },
  ],
  "/mytvonline-canada": [
    { h2: "MyTVOnline 3 FAQ", table: { head: ["Question", "Answer"], rows: [
      ["Is it free?", "It is preinstalled on Formuler boxes"],
      ["Xtream or M3U?", "Xtream Codes is easier and loads the guide"],
      ["Multiple portals?", "Yes — but keep only the ones you use"],
      ["Recording?", "To USB storage"],
      ["Which boxes?", "[Formuler range](/formuler-box-canada)"],
    ] } },
  ],
  "/ott-iptv-canada": [
    { h2: "OTT terms in one table", table: { head: ["Term", "Meaning"], rows: [
      ["OTT", "Video delivered over the internet"],
      ["OTT box", "Any streaming box — see [devices](/iptv-devices)"],
      ["OTT Navigator", "An Android IPTV player app"],
      ["IPTV OTT", "IPTV delivered as OTT — the normal case"],
      ["4K OTT", "4K streams needing HEVC decoding and ~25 Mbps"],
    ] } },
  ],
  "/tvip-s-box-canada": [
    { h2: "TVIP FAQ", table: { head: ["Question", "Answer"], rows: [
      ["Portal or Android?", "Depends on version and mode"],
      ["Where do I enter the URL?", "IPTV/Middleware settings"],
      ["4K?", "Model-dependent — check your version"],
      ["Alternatives?", "[MAG](/infomir-mag-models-canada) or [Formuler](/formuler-box-canada)"],
      ["Need help?", "[Message support](/contact) with your version number"],
    ] } },
  ],
  "/atlaspro-iptv-alternative": [
    { h2: "How to compare on an iPhone", paras: ["If you mainly use an iPhone, run the trial on the phone first: install IPTV Smarters Pro, add the Maple4K Xtream login, and open a live game and a movie. Note start-up time, picture quality on Wi-Fi and on mobile data, and whether the guide is accurate. Repeat with any service you are comparing. Then decide — see [IPTV on iPhone & iPad](/iptv-ios-canada) for setup."] },
  ],
  // ───────── French ─────────
  "/fr": [
    { h2: "Garanties, paiement et soutien", bullets: [
      "Essai gratuit de 24 heures, sans carte de crédit — [essayer](/free-trial)",
      "Aucun contrat ni renouvellement automatique — [politique de remboursement](/refund-policy)",
      "Identifiants envoyés par courriel et WhatsApp en quelques minutes",
      "Soutien en français et en anglais, sur WhatsApp, Telegram et par courriel — [nous joindre](/contact)",
      "Prix dès 9 $ par mois — [abonnement IPTV](/fr/abonnement-iptv-canada)",
    ] },
  ],
  "/fr/abonnement-iptv-canada": [
    { h2: "Garanties et soutien", bullets: [
      "Essai gratuit de 24 heures avant de payer",
      "Aucun contrat — consultez la [politique de remboursement](/refund-policy)",
      "Soutien 24 h/24 en français et en anglais — [contact](/contact)",
      "Prix affichés d'avance, sans frais cachés — [forfaits](/pricing)",
    ] },
  ],
  "/fr/iptv-legal-canada": [
    { h2: "Où en savoir plus", paras: ["Le [CRTC](https://crtc.gc.ca) réglemente la radiodiffusion et les télécommunications au Canada, et la [Loi sur le droit d'auteur](https://laws-lois.justice.gc.ca/fra/lois/c-42/) encadre l'utilisation des contenus protégés. Ces liens sont informatifs et ne remplacent pas un avis juridique. Voir aussi [Is IPTV legal in Canada?](/blog/is-iptv-legal-canada) (en anglais) et la [politique de confidentialité](/privacy-policy)."] },
  ],
  "/fr/iptv-ne-fonctionne-plus": [
    { h2: "Tableau de dépannage rapide", table: { head: ["Symptôme", "Cause probable", "Solution"], rows: [
      ["Saccades", "Wi-Fi ou décodeur logiciel", "Ethernet, décodeur matériel"],
      ["Identifiants refusés", "Faute de frappe ou abonnement expiré", "Resaisir; vérifier l'échéance"],
      ["Écran noir en 4K", "Décodeur inadapté", "Activer le décodeur matériel"],
      ["Guide vide", "EPG non chargé", "Actualiser l'EPG"],
      ["Application introuvable", "Région ou modèle", "Version Lite ou Downloader — [guide](/blog/iptv-downloader-app-guide-canada)"],
    ] } },
  ],
  "/fr/lecteur-iptv-canada": [
    { h2: "Conseils d'utilisation pour chaque lecteur", bullets: [
      "TiviMate : réglez le décodeur sur matériel et actualisez l'EPG une fois par jour — [guide](/tivimate-canada)",
      "IPTV Smarters Pro : choisissez « Xtream Codes API » — [guide](/iptv-smarters-pro-canada)",
      "iPlayTV : activez l'EPG et créez des favoris — [guide](/iplaytv-apple-tv-canada)",
      "VLC : ouvrez le lien M3U comme flux réseau — [guide](/blog/iptv-vlc-m3u-kodi-guide-canada)",
      "En cas de doute, écrivez au [soutien](/contact) : nous répondons en français",
    ], paras: ["Essayez votre lecteur avec un vrai abonnement grâce à l'[essai gratuit de 24 heures](/free-trial). Comparez aussi les [prix](/fr/abonnement-iptv-canada)."] },
  ],
  "/fr/liste-m3u-iptv": [
    { h2: "Dépannage d'une liste M3U", table: { head: ["Symptôme", "Solution"], rows: [
      ["Liste vide", "Vérifier l'abonnement et recopier le lien"],
      ["Caractères illisibles", "Utiliser la version M3U8 (UTF-8) — [M3U8 vs M3U](/blog/m3u8-vs-m3u-iptv-canada)"],
      ["Application lente", "Passer à Xtream Codes — [guide](/xtream-iptv-canada)"],
      ["Pas de guide", "Ajouter l'adresse EPG ou utiliser Xtream Codes"],
    ] }, paras: ["Besoin d'un lien fiable ? Demandez-le au [soutien](/contact) ou lancez l'[essai gratuit](/free-trial)."] },
  ],
  "/fr/meilleur-iptv-canada": [
    { h2: "Grille d'évaluation à copier", table: { head: ["Critère (1 à 5)", "Service A", "Service B", "Maple4K"], rows: [
      ["Stabilité pendant un match", "", "", ""],
      ["Qualité d'image 4K", "", "", ""],
      ["Exactitude du guide", "", "", ""],
      ["Rapidité du soutien", "", "", ""],
      ["Prix pour votre forfait", "", "", ""],
    ] }, note: "Remplissez la grille après vos propres essais : le meilleur IPTV est celui qui vous convient le mieux." },
  ],
};

export const sourcesMap: Record<string, { label: string; url: string }[]> = {
  "/what-is-iptv": [W("Internet Protocol television", "IPTV"), { label: "CRTC — Canada's broadcasting regulator", url: "https://crtc.gc.ca" }],
  "/blog/m3u8-vs-m3u-iptv-canada": [W("M3U", "M3U"), W("HTTP Live Streaming", "HTTP_Live_Streaming")],
  "/blog/iptv-dvr-recording-canada": [W("Digital video recorder", "Digital_video_recorder")],
  "/blog/iptv-server-explained-canada": [W("Content delivery network", "Content_delivery_network")],
  "/blog/fix-iptv-buffering-canada": [{ label: "Speedtest by Ookla", url: "https://www.speedtest.net" }],
  "/ott-iptv-canada": [W("Over-the-top media service", "Over-the-top_media_service"), W("Internet Protocol television", "IPTV")],
  "/blog/iptv-plex-jellyfin-emby-stremio-canada": [
    { label: "Plex — official site", url: "https://www.plex.tv" },
    { label: "Jellyfin — official site", url: "https://jellyfin.org" },
    { label: "Emby — official site", url: "https://emby.media" },
  ],
  "/blog/other-iptv-players-pc-kodi-canada": [
    { label: "Kodi — official site", url: "https://kodi.tv" },
    { label: "VLC media player — official site", url: "https://www.videolan.org/vlc/" },
  ],
  "/blog/iptv-vs-satellite-canada": [{ label: "CRTC — broadcasting in Canada", url: "https://crtc.gc.ca" }],
  "/iptv-nvidia-shield-canada": [{ label: "NVIDIA SHIELD TV — official page (Canada)", url: "https://www.nvidia.com/en-ca/shield/" }],
  "/formuler-box-canada": [{ label: "Formuler — official website", url: "https://www.formuler.tv" }],
  "/infomir-mag-models-canada": [{ label: "Infomir — MAG set-top boxes", url: "https://infomir.eu" }],
  "/iplaytv-apple-tv-canada": [{ label: "Apple TV 4K (Apple Canada)", url: "https://www.apple.com/ca/apple-tv-4k/" }],
  "/iptv-4k": [],
  "/blog/is-iptv-legal-canada": [],
  "/fr/iptv-legal-canada": [{ label: "CRTC — Conseil de la radiodiffusion et des télécommunications canadiennes", url: "https://crtc.gc.ca/fra/home-accueil.htm" }],
  "/iptv-lifetime-subscription-canada": [{ label: "Competition Bureau Canada — deceptive marketing practices", url: "https://competition-bureau.canada.ca" }],
  "/blog/iptv-amazon-ebay-aliexpress-canada": [{ label: "Canadian Anti-Fraud Centre", url: "https://antifraudcentre-centreantifraude.ca" }],
  "/blog/free-iptv-m3u-lists-risks-canada": [{ label: "Get Cyber Safe — Government of Canada", url: "https://www.getcybersafe.gc.ca" }],
};
