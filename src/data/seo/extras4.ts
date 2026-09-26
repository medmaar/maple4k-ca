import type { ExistingExtra } from "./extras";
import type { Section } from "./types";
import { depth5 } from "./depth5";

const risk: Section = {
  h2: "Try Maple4K risk-free",
  bullets: [
    "Free 24-hour trial, no credit card — [start now](/free-trial)",
    "No contract or automatic renewal — [refund policy](/refund-policy)",
    "Support on WhatsApp, Telegram, live chat and email, in English and French — [contact](/contact)",
    "Plans from $9/month — [see pricing](/pricing)",
  ],
};

const compare = (current: string, scenarios: string[]): Section => ({
  h2: "Compare all Maple4K plans (1 connection)",
  table: {
    head: ["Plan", "Price", "Per month", "Best for"],
    rows: [
      ["[1 month](/pricing/1-month)", "$9", "$9.00", "Testing after the free trial"],
      ["[3 months](/pricing/3-months)", "$29", "≈ $9.67", "A season stretch"],
      ["[6 months](/pricing/6-months)", "$39", "$6.50", "Most viewers"],
      ["[12 months](/pricing/12-months)", "$49", "≈ $4.08", "Daily viewers, best value"],
    ],
  },
  bullets: scenarios,
  note: `You are viewing the ${current} plan. Need several screens at once? See the [multi-connection price table](/iptv-price-canada).`,
});

const legal = (h2: string, text: string): ExistingExtra => ({ keywords: [], sections: [{ h2, paras: [text] }] });

export const existingExtras4: Record<string, ExistingExtra> = {
  "/pricing/1-month": { keywords: [], sections: [compare("1-month", ["Pick this if you are unsure how much you will watch", "Pick this for a short trip or a single event", "Upgrade later without losing your setup"])] },
  "/pricing/3-months": { keywords: [], sections: [compare("3-month", ["Pick this to cover a hockey playoff run", "Pick this for a winter season", "Switch to 6 months if you keep watching"])] },
  "/pricing/6-months": { keywords: [], sections: [compare("6-month", ["Pick this for a full sports season", "Pick this to replace two or three streaming apps", "Move to 12 months for the lowest monthly cost"])] },
  "/pricing/12-months": { keywords: [], sections: [compare("12-month", ["Pick this if you watch every day", "Pick this to lock in the lowest monthly cost", "Add connections if the household streams on several TVs"])] },
  "/best-iptv-for-sports-canada": { keywords: [], sections: [risk] },
  "/blog/best-iptv-for-hockey-canada-2026": { keywords: [], sections: [risk] },
  "/blog/best-iptv-player-canada": { keywords: [], sections: [risk] },
  "/blog/iptv-vlc-m3u-kodi-guide-canada": { keywords: [], sections: [risk] },
  "/blog/is-iptv-legal-canada": { keywords: [], sections: [risk] },
  "/iptv-firestick-canada": { keywords: [], sections: [risk] },
  "/disclaimer": legal("Questions about this notice?", "Contact [support](/contact) or read the [terms of service](/terms-of-service) and [privacy policy](/privacy-policy). New to Maple4K? [Start a free trial](/free-trial) or see [pricing](/pricing)."),
  "/dmca": legal("Contacting us about content", "To report a concern, use the [contact page](/contact). See also the [disclaimer](/disclaimer) and [terms of service](/terms-of-service). New to Maple4K? [Start a free trial](/free-trial)."),
  "/privacy-policy": legal("Privacy questions", "Questions about your data? [Contact support](/contact). See our [terms of service](/terms-of-service) and [refund policy](/refund-policy), or [view plans](/pricing)."),
  "/terms-of-service": legal("Questions about these terms", "Ask [support](/contact) if anything is unclear. Related: [privacy policy](/privacy-policy), [refund policy](/refund-policy), [pricing](/pricing) and the [free trial](/free-trial)."),
  "/iptv-near-me": { keywords: [], sections: depth5["/iptv-near-me"] },
  "/iptv-quebec": { keywords: [], sections: depth5["/iptv-quebec"] },
};
