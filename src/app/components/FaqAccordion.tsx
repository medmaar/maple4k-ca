"use client";
import { useState } from "react";

const items = [
  {
    q: "What resolution and codec does Maple4K stream in?",
    a: "Maple4K streams in True 4K Ultra HD (3840×2160) using H.265/HEVC encoding — delivering twice the picture quality of H.264 at the same bitrate. HDR10 and Dolby Vision are supported where broadcasters provide HDR feeds, giving you cinema-grade colour and brightness on compatible displays.",
  },
  {
    q: "What internet speed is needed for 4K IPTV?",
    a: "A stable 25 Mbps connection handles 4K H.265 streams without buffering. Canadian fibre and cable plans at 75 Mbps+ run multiple simultaneous 4K streams with ease. Our servers use Canadian-optimized routes for low latency — most users see sub-50ms ping.",
  },
  {
    q: "Does Maple4K support HDR10 and Dolby Vision?",
    a: "Yes. HDR10 and Dolby Vision are fully supported on compatible streams and players. Pair Maple4K with TiviMate or IBO Player on an Apple TV 4K, Samsung QLED, or LG OLED and your display's full HDR capability is automatically engaged — peak brightness, wide colour gamut, the works.",
  },
  {
    q: "Which IPTV player gives the best 4K H.265 performance?",
    a: "TiviMate (Android/Fire TV) is the gold standard for 4K H.265 with hardware acceleration and a clean EPG. IBO Player is included free with 12-month plans and delivers native 4K on Android TV. IPTV Smarters Pro and the Apple TV app are excellent alternatives for iOS and tvOS.",
  },
  {
    q: "Can I watch NHL, CFL, and Canadian sports in 4K?",
    a: "All sports content broadcasts at maximum available quality — 4K where the broadcaster provides 4K feeds. TSN (all feeds), Sportsnet (all regional), CBC Sports, TVA Sports, and RDS are all included. Every NHL, CFL, UFC, NFL, NBA, and MLB game is covered with no blackouts and no extra PPV charges.",
  },
  {
    q: "How does Maple4K picture quality compare to cable?",
    a: "Cable TV compresses most content to 1080i or 720p using legacy codecs. Maple4K delivers True 4K H.265/HEVC streams — significantly sharper than anything Bell or Rogers offers at standard tiers. Same Canadian channels, dramatically higher resolution, for up to 90% less per month.",
  },
];

export default function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div
          key={i}
          className="rounded-2xl border overflow-hidden transition-colors"
          style={{
            borderColor: open === i ? "rgba(253,3,34,0.38)" : "rgba(255,255,255,0.07)",
            background: open === i ? "rgba(253,3,34,0.05)" : "rgba(255,255,255,0.03)",
          }}
        >
          <button
            className="w-full flex items-center justify-between gap-4 px-5 py-5 text-left"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
            aria-label={`${open === i ? "Collapse" : "Expand"}: ${item.q}`}
          >
            <span className="font-semibold text-white text-sm md:text-base leading-snug">
              {item.q}
            </span>
            <span
              className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-white text-lg font-bold transition-all duration-300"
              style={{
                background: open === i ? "#fd0322" : "rgba(255,255,255,0.08)",
                transform: open === i ? "rotate(45deg)" : "rotate(0deg)",
              }}
            >
              +
            </span>
          </button>
          {open === i && (
            <div className="px-5 pb-5">
              <p className="text-gray-400 text-sm leading-relaxed">{item.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
