import type { Section } from "./types";

const en = (topic: string, action: string): Section[] => [
  {
    h2: `Try ${topic} risk-free`,
    bullets: [
      `Start the [free 24-hour trial](/free-trial) — no credit card, and ${action}`,
      "No contract and no automatic renewal — see the [refund policy](/refund-policy)",
      "Login details arrive by email and WhatsApp within minutes",
      "Support is a message away on WhatsApp, Telegram or email — [contact us](/contact)",
    ],
  },
];

const fr = (topic: string): Section[] => [
  {
    h2: "Essayez sans risque",
    bullets: [
      `Testez ${topic} avec l'[essai gratuit de 24 heures](/free-trial), sans carte de crédit`,
      "Aucun contrat ni renouvellement automatique — [politique de remboursement](/refund-policy)",
      "Identifiants reçus par courriel et WhatsApp en quelques minutes",
      "Soutien en français et en anglais — [nous joindre](/contact)",
    ],
  },
];

/** Bespoke "try it risk-free" blocks (trust signals + CTA) for pages near the 600-word mark. */
export const depth4: Record<string, Section[]> = {
  "/blog/best-iptv-canada-reddit": en("what Reddit says", "compare it with your own test"),
  "/blog/iptv-dvr-recording-canada": en("IPTV recording", "try recording one game during the trial"),
  "/blog/m3u8-vs-m3u-iptv-canada": en("playlist links", "load both an M3U and an Xtream login during the trial"),
  "/blog/other-iptv-players-pc-kodi-canada": en("PC and Kodi players", "test VLC, Kodi and Smarters Pro with the same login"),
  "/blog/tivimate-reddit-troypoint-canada": en("TiviMate advice", "try TiviMate with a trial login before buying Premium"),
  "/buzztv-canada": en("a BuzzTV box", "confirm the box accepts a new login during the trial"),
  "/gse-smart-iptv-canada": en("GSE Smart IPTV", "test GSE next to Smarters Pro with one trial login"),
  "/iptv-24-7-canada": en("round-the-clock service", "run the 24-hour test plan above"),
  "/iptv-mobile-apps-canada": en("mobile IPTV", "test on your phone over Wi-Fi first"),
  "/iptv-onn-tv-box-canada": en("an Onn box", "confirm your box before buying a long plan"),
  "/iptv-tizen-webos-apps-canada": en("Samsung and LG apps", "check which app your TV year supports during the trial"),
  "/iptv-ufc-canada": en("fight nights", "test on the next event that interests you"),
  "/live-iptv-canada": en("live TV", "watch a live game on your main device"),
  "/mag-254-canada": en("a MAG 254", "confirm the portal loads on your box"),
  "/ott-iptv-canada": en("OTT-style IPTV", "test on the streaming box you already own"),
  "/tvip-s-box-canada": en("a TVIP box", "confirm your version accepts a portal or Xtream login"),
  "/fr/abonnement-iptv-canada": fr("votre abonnement"),
  "/fr/iptv-legal-canada": fr("un fournisseur"),
  "/fr/iptv-ne-fonctionne-plus": fr("votre appareil"),
  "/fr/lecteur-iptv-canada": fr("votre lecteur"),
  "/fr/liste-m3u-iptv": fr("votre lien M3U"),
};
