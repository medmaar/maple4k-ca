import type { Section } from "./types";

/** Extra long-form sections appended to each page (unique per page). */
export const depthApps: Record<string, Section[]> = {
  "/tivimate-premium-canada": [
    {
      h2: "Is TiviMate Premium worth it for Canadian viewers?",
      paras: [
        "The honest answer depends on how you watch. If you use TiviMate every evening for live sports on TSN and Sportsnet, the yearly price works out to pennies per day and the extra playlist and recording tools pay for themselves the first time you schedule a game you would otherwise miss. If you only open the app a couple of times a week to browse, the free version already gives you the guide and channel list.",
        "Premium also matters if you run more than one IPTV login. Many households keep a main subscription plus a second one for a family member or for testing a new provider. Without Premium you are limited to a single playlist, so switching means deleting and re-adding logins. With Premium you can keep both and flip between them in seconds.",
      ],
    },
    {
      h2: "Getting the most from TiviMate Premium with Maple4K",
      bullets: [
        "Create favourite groups such as Hockey, News and Kids so the guide opens on what matters",
        "Turn on channel reminders for playoff games — TiviMate can pop a notification before puck drop",
        "Use the recording feature only with a fast USB drive or internal storage; slow drives cause stutter",
        "Set the guide to refresh once a day; more frequent refreshes just add load time",
        "If you upgrade your IPTV plan later, edit the existing playlist instead of adding a new one so your groups and favourites carry over",
      ],
      paras: ["Not sure whether your device is powerful enough for recording? Compare options in our [best Android TV box for IPTV](/best-android-tv-box-for-iptv-canada) guide, or stay on a [Fire Stick 4K](/iptv-firestick-canada) which handles TiviMate comfortably."],
    },
  ],
  "/tivimate-firestick-canada": [
    {
      h2: "Fire Stick settings that make TiviMate feel faster",
      paras: [
        "Fire Stick hardware is modest, so a few small settings make a visible difference. In Fire TV settings, turn off Data Monitoring and Automatic App Updates while you are watching live sport so nothing competes for bandwidth. Under Display & Sounds, match the frame rate to the content if your TV supports it — hockey looks noticeably smoother when the output follows the source.",
        "Inside TiviMate, reduce the number of visible categories. A playlist with thousands of channels across hundreds of groups is the main reason menus feel sluggish on a Lite or HD stick. Hide groups you never open and keep only the ones you use. This does not delete anything from your subscription; it only tidies the list on that device.",
      ],
    },
    {
      h2: "Troubleshooting TiviMate on Fire Stick",
      table: {
        head: ["Symptom", "Likely cause", "Fix"],
        rows: [
          ["Channels load but video stutters", "Wi-Fi congestion or weak signal", "Use Ethernet or a 5 GHz network closer to the router"],
          ["Guide is empty", "EPG not loaded yet", "Settings → EPG → refresh; wait a minute after first login"],
          ["App closes randomly", "Low storage or memory", "Free space, clear cache, restart the stick"],
          ["Login rejected", "Typo in server URL, username or password", "Re-enter exactly as sent; no spaces; include http:// and the port"],
          ["Black screen on 4K channels", "Software decoder in use", "Settings → Playback → Video decoder → Hardware"],
        ],
      },
      paras: ["Still stuck? Message [Maple4K support](/contact) with your Fire Stick model and the channel name. We reply fast, including during live games."],
    },
  ],
  "/tivimate-alternatives-canada": [
    {
      h2: "How to get a TiviMate-style experience without Android",
      paras: [
        "What people love about TiviMate is the layout: a channel list on the left, a live preview and a clean programme guide. You can get close on other platforms. On Apple TV, iPlayTV offers an EPG grid and favourite groups. On Samsung and LG, Smarters Player Lite gives a simple category list with search. On computers, IPTV Smarters Pro and VLC are stable, though they are less TV-remote friendly.",
        "If you specifically want TiviMate's features — recording, multiple playlists, sorting — the cleanest solution is to add a low-cost Android device to the TV you use most. A Fire Stick 4K or Onn Google TV box costs less than a month of most cable packages and plugs into any HDMI port, leaving your existing smart TV apps untouched.",
      ],
    },
    {
      h2: "Choosing between an app on your TV and a plug-in device",
      bullets: [
        "Use the TV's own app if the TV is only occasionally used for IPTV and you are happy with a simpler interface",
        "Use a plug-in Android device if it is your main living-room screen, you record programmes, or you watch a lot of live sport",
        "Use your phone or tablet for travel — IPTV Smarters Pro on iOS and Android works with the same Maple4K login",
        "Remember one login supports one simultaneous stream per connection — plan connections for the number of screens you will use at the same time (see [pricing](/pricing))",
      ],
      paras: ["See the complete device overview in the [IPTV devices hub](/iptv-devices)."],
    },
  ],
  "/xciptv-canada": [
    {
      h2: "XCIPTV features worth knowing",
      paras: [
        "XCIPTV stands out for customisation. You can change the theme, choose the stream format (for example TS or HLS), adjust buffer size and set a parental PIN. Those options help when a particular device or network behaves differently from the norm — for instance, switching format sometimes resolves a channel that stutters in one app but is fine in another.",
        "It also supports several playlist styles: Xtream Codes, M3U links, and Stalker-style portals on some builds. That flexibility is why long-time IPTV users keep it installed as a backup player even if TiviMate is their day-to-day choice.",
      ],
    },
    {
      h2: "When to choose XCIPTV over other players",
      bullets: [
        "You want a free player with more knobs to turn than IPTV Smarters Pro offers",
        "Your Android TV box struggles with a heavy interface and you prefer a lighter one",
        "You want a second app to test whether a problem is provider-side or app-side",
        "You are comfortable spending five minutes in settings to tune buffer and format",
      ],
      paras: ["If you would rather not tweak anything, install [TiviMate](/tivimate-canada) and follow its default steps. For an overview of every app see the [IPTV player hub](/iptv-player)."],
    },
  ],
  "/xtream-iptv-canada": [
    {
      h2: "Reading your Xtream Codes details correctly",
      paras: [
        "The server URL is a web address, often starting with http:// and ending with a port number such as :8080. Do not add a slash at the end unless your provider says so. The username and password are case-sensitive — copy and paste them when possible instead of retyping, because look-alike characters (O and 0, l and 1) cause many failed logins.",
        "Some apps ask for a playlist name. It can be anything you like; it only labels the login inside the app. Others ask for the EPG URL separately, though most Xtream logins load the guide automatically from the same server.",
      ],
    },
    {
      h2: "Xtream Codes troubleshooting checklist",
      bullets: [
        "Confirm the subscription is active and not past its expiry date",
        "Check you are not using more devices at once than your plan's connection count",
        "Try the login in a second app — if it works there, the first app has a settings issue",
        "Restart the modem and device to clear stale DNS entries",
        "If the server address recently changed, ask support for the current one",
      ],
      paras: ["Move on to [fixing IPTV buffering](/blog/fix-iptv-buffering-canada) if the login works but playback is choppy."],
    },
  ],
  "/xtreme-hd-iptv-canada": [
    {
      h2: "Tips for using Xtreme HD IPTV day to day",
      paras: [
        "On Android TV boxes, Xtreme HD IPTV works best when you give it a clean start: remove old playlists you no longer use, then add the Maple4K Xtream login once. Let the first sync finish before you open channels — the app is downloading categories, and interrupting that step is a common reason for empty lists.",
        "If you switch between apps, remember each app stores its own favourites. Set favourites once in the player you use most instead of maintaining several lists.",
      ],
    },
    {
      h2: "Xtreme HD IPTV vs TiviMate vs XCIPTV",
      table: {
        head: ["", "Xtreme HD IPTV", "TiviMate", "XCIPTV"],
        rows: [
          ["Interface", "Classic list layout", "TV-first guide", "Customisable"],
          ["Cost", "Free to install", "Free / Premium", "Free"],
          ["Recording", "Limited", "Premium", "Limited"],
          ["Best for", "Simple Android use", "Living-room TVs", "Tinkerers"],
        ],
      },
      paras: ["Every one of these works with the same login. Browse the [IPTV player hub](/iptv-player) and pick one to try."],
    },
  ],
  "/implayer-canada": [
    {
      h2: "Who IMPlayer suits best",
      paras: [
        "IMPlayer is a practical pick for mixed households. If someone in the family uses an Apple TV, another has an LG TV and a third streams on a phone, having one app name across platforms simplifies instructions: the same playlist details go in everywhere. That convenience matters more than any single feature.",
        "As with any player, check the app store description on your device for current features and pricing. Premium tiers change over time, so do not rely on a review that is a year old.",
      ],
    },
    {
      h2: "Checklist before you pay for a premium player",
      bullets: [
        "Test with the free tier and the Maple4K [free trial](/free-trial) first",
        "Confirm Premium unlocks something you will actually use (multiple playlists, EPG options, no ad-like prompts)",
        "Check whether the licence covers all your devices or just one",
        "Compare with free alternatives such as [IPTV Smarters Pro](/iptv-smarters-pro-canada) and [XCIPTV](/xciptv-canada)",
      ],
    },
  ],
  "/iplaytv-apple-tv-canada": [
    {
      h2: "Making iPlayTV great on Apple TV 4K",
      paras: [
        "Apple TV 4K supports HEVC hardware decoding, which suits the H.265 streams used for 4K IPTV. In Apple TV settings, enable Match Content for both range and frame rate so hockey and football play at native motion instead of being converted. Connect Apple TV by Ethernet if it has a port — the 4K model with 128 GB storage does — and you will notice fewer drops in the third period of a busy game night.",
        "Use Siri to search inside iPlayTV where supported, and set your most-watched channels as favourites so they open without scrolling. Because tvOS keeps your playlist stored, you only enter the login once.",
      ],
    },
    {
      h2: "iPlayTV vs Smarters on Apple TV",
      table: {
        head: ["", "iPlayTV", "IPTV Smarters Pro"],
        rows: [
          ["Look and feel", "Native tvOS style", "Familiar across devices"],
          ["EPG", "Grid guide", "Guide available"],
          ["Cost", "Paid app", "Free"],
          ["Best for", "Living-room Apple TV", "People who use Smarters on phones"],
        ],
      },
      paras: ["See also the full [Apple TV IPTV guide](/iptv-apple-tv-canada) and [IPTV on iPhone & iPad](/iptv-ios-canada)."],
    },
  ],
  "/nanomid-lg-webos-canada": [
    {
      h2: "Tips for smoother IPTV on LG webOS",
      paras: [
        "LG TVs are capable panels, but webOS apps run in a lighter environment than Android boxes. Keep the playlist tidy — smaller lists load faster — and restart the TV once a week to clear memory. If the picture looks soft, check the Picture Mode: LG's Cinema or Filmmaker modes handle 4K streams accurately, while aggressive smoothing modes can add lag on live sport.",
        "Wi-Fi in TVs is often weaker than in phones. If you see stuttering, connect the TV to the router by Ethernet or use a Wi-Fi extender placed within line of sight.",
      ],
    },
    {
      h2: "Common Nanomid problems on LG TVs",
      bullets: [
        "App not found: check webOS version in Settings → General → About; older TVs may lack the app",
        "Playlist not loading: the M3U link may have a typo or the playlist was not saved against your device code",
        "No EPG: some M3U-based apps need a separate guide link; ask support for the EPG URL",
        "Freezes on 4K: reduce to an HD channel to confirm the network, then check Ethernet",
      ],
      paras: ["When webOS apps do not behave, a plug-in [Fire Stick with TiviMate](/tivimate-firestick-canada) is a dependable fallback."],
    },
  ],
  "/duplecast-iptv-canada": [
    {
      h2: "Getting reliable results from code-based smart TV apps",
      paras: [
        "Code-based players like Duplecast separate the playlist step from the TV. That is convenient, but it adds a place where mistakes happen: the code shown on the TV must match the code you enter online, and you must save the playlist before relaunching the app. If nothing appears, re-check the code character by character and make sure you did not enter it in a similar-looking but different tool.",
        "Keep a note of the playlist link somewhere safe, because if you reset the TV or switch models you will need to add it again. Never share your link publicly — it is tied to your subscription.",
      ],
    },
    {
      h2: "If Duplecast is not available on your TV",
      bullets: [
        "Try [Smarters Player Lite](/smarters-player-lite-canada) for a login-based approach without codes",
        "Check [Smart IPTV](/smart-iptv) if you own a Samsung or LG TV",
        "Consider a plug-in device such as a Fire Stick — see [IPTV on Fire Stick](/iptv-firestick-canada)",
        "Contact [Maple4K support](/contact) with your TV brand and year, and we will suggest the best option",
      ],
    },
  ],
  "/smarters-player-lite-canada": [
    {
      h2: "Smarters Player Lite tips for TV screens",
      paras: [
        "Smart TV remotes make typing painful. Enter your Xtream details slowly, and use the TV's on-screen keyboard's symbol page for http:// and the colon before the port. If your TV supports a companion phone app for text input, use it — it saves a lot of frustration.",
        "After logging in, spend a minute in settings: choose the stream format your TV handles best, turn on the guide, and set a PIN if children use the TV. Lite keeps these options simple, which is exactly why it suits TVs.",
      ],
    },
    {
      h2: "Why the name is spelled so many ways",
      paras: ["Searches show many spellings — Smarters, Smasters, Smart Player Lite, Smarters Pro Lite. They all point to the same family of apps by the same developer. If the store shows two similar apps, choose the one whose description mentions Xtream Codes login and the Lite label for smart TVs. When in doubt, ask [Maple4K support](/contact) and mention your TV brand."],
    },
  ],
  "/iptv-smarters-pro-firestick-canada": [
    {
      h2: "Making Smarters Pro comfortable on a TV remote",
      paras: [
        "IPTV Smarters Pro started life on phones, so its home screen uses big tiles rather than a compact guide. On Fire Stick that works well once you know the shortcuts: hold the select button on a channel to add it to favourites, and use the menu button to jump between categories quickly. Set the app to remember the last channel so it resumes where you left off.",
        "If you prefer a guide grid, TiviMate's layout is closer to cable. Many people keep both apps installed and use Smarters Pro as the reliable backup.",
      ],
    },
    {
      h2: "Fire Stick storage and updates",
      bullets: [
        "Fire Stick Lite and HD have limited storage — uninstall unused apps before adding new ones",
        "After sideloading, delete the downloaded installer file inside Downloader to free space",
        "Keep automatic app updates on, but pause them during live events if your connection is weak",
        "Restart the stick weekly to clear memory",
      ],
      paras: ["Compare the Fire Stick options in our [best IPTV for Firestick](/best-iptv-for-firestick-canada) guide."],
    },
  ],
  "/iptv-smarters-pro-pc-mac-canada": [
    {
      h2: "Watching IPTV on a laptop: practical tips",
      paras: [
        "On laptops, battery and heat matter. Streaming 4K decodes a lot of video, so plug in for long sessions and make sure hardware decoding is on; software decoding will spin the fans and drain the battery quickly. If the video looks choppy but the network is fine, that is the setting to check first.",
        "For a second-screen setup, connect the laptop to the TV with an HDMI cable and set the display to mirror or extend. It is a quick way to use a Maple4K login on a big screen if you do not own a streaming device yet.",
      ],
    },
    {
      h2: "VLC or Smarters Pro on a computer?",
      table: {
        head: ["", "VLC", "IPTV Smarters Pro"],
        rows: [
          ["Login", "M3U URL", "Xtream Codes"],
          ["EPG", "Not built in", "Yes"],
          ["Channel browsing", "Long list", "Categories and search"],
          ["Best for", "Quick test, recording a stream", "Everyday watching"],
        ],
      },
      paras: ["Learn the VLC steps in our [VLC, M3U & Kodi guide](/blog/iptv-vlc-m3u-kodi-guide-canada)."],
    },
  ],
  "/iptv-smarters-pro-smart-tv-canada": [
    {
      h2: "Smart TV IPTV: what to expect on each brand",
      paras: [
        "Samsung and LG use their own operating systems (Tizen and webOS). Apps on those platforms are approved through TV-specific stores, which is why the selection is smaller than on Android. Sony, TCL and Philips sets often run Google TV and can install the full Android version of Smarters Pro or TiviMate directly.",
        "The year of your TV matters. A 2017 Samsung and a 2024 Samsung can have very different app support. Before troubleshooting an app, check the model year and update the TV firmware — many 'app not working' issues disappear after an update.",
      ],
    },
    {
      h2: "When a plug-in device beats a TV app",
      bullets: [
        "The TV is more than five years old and apps feel slow",
        "You want recording, multiple playlists or a better guide",
        "You use several IPTV logins",
        "You want the same interface on every TV in the house",
      ],
      paras: ["Read our [Fire Stick guide](/iptv-firestick-canada) or the [set-top box hub](/iptv-set-top-box) for options."],
    },
  ],
  "/iptv-smarters-pro-subscription-canada": [
    {
      h2: "How to avoid overpaying for an IPTV Smarters setup",
      paras: [
        "The app is free, so the only thing to pay for is the IPTV service. Compare like for like: number of channels, whether 4K is included, how many connections the price covers and whether a trial is offered. A long-term plan often costs far less per month than renewing monthly, but only commit once the trial has proven the service works on your device and internet.",
        "Be wary of sites that sell 'Smarters Pro activation', 'Smarters premium' or 'Smarters lifetime'. The Xtream Codes login inside the app does not need activation from a third party. If someone asks you to pay to unlock the app itself, step back and confirm with the developer.",
      ],
    },
    {
      h2: "Checklist: before you subscribe",
      bullets: [
        "Request a free trial and test it on your main device at peak time",
        "Check the plan covers the number of simultaneous screens you need",
        "Confirm you can reach support by message",
        "Read the refund policy — [Maple4K's refund policy](/refund-policy)",
        "Save your login details securely",
      ],
    },
  ],
  "/iptv-web-player-canada": [
    {
      h2: "Getting a web player to work",
      paras: [
        "Web players run inside a browser, so they depend on what the browser can decode. Chrome and Edge handle most HLS streams with the help of a small script, while Safari supports HLS natively. If a stream will not play, try another browser before assuming the login is wrong, and disable extensions that block scripts or media.",
        "Mixed-content rules can also get in the way: a secure (https) web player may refuse to load an insecure (http) stream address. If that happens, a desktop app is the practical solution.",
      ],
    },
    {
      h2: "Where a browser makes sense",
      bullets: [
        "Testing a login quickly on a work or borrowed computer",
        "Watching a match on a laptop while travelling",
        "Checking whether a playlist loads before you set up a TV app",
        "Troubleshooting: if it plays in a browser but not in your TV app, the app is the problem",
      ],
      paras: ["For day-to-day viewing, jump to our [IPTV player hub](/iptv-player) and pick an app for your TV."],
    },
  ],
  "/mytvonline-canada": [
    {
      h2: "Getting more from MyTVOnline 3",
      paras: [
        "MyTVOnline 3 is designed for a remote with dedicated buttons: the EPG key opens the guide, the record key starts a recording, and the favourites key jumps to your saved channels. Learning those three shortcuts changes how the box feels. Use an Ethernet cable if you can — Formuler boxes are built for stable wired networks.",
        "Recordings need external storage. A fast USB 3.0 drive or SSD avoids stutter, and formatting it through the Formuler menu ensures compatibility. Keep enough free space for long sports events.",
      ],
    },
    {
      h2: "Formuler troubleshooting",
      table: {
        head: ["Problem", "Fix"],
        rows: [
          ["Portal loads empty", "Re-add the portal; confirm the details and wait for the first sync"],
          ["EPG shows 'no information'", "Enable the guide in portal settings and refresh"],
          ["Recording fails", "Use a formatted USB 3.0 drive with free space"],
          ["Box slow after weeks of use", "Reboot and remove unused portals"],
        ],
      },
      paras: ["Model-specific notes: [Z11](/iptv-formula), [Z10 Pro Max](/formuler-z10-pro-max-canada), [Z8 Pro](/formuler-z8-pro-canada)."],
    },
  ],
};
