"use client";
import { useState } from "react";

const items = [
  {
    q: "What is the best IPTV service in Canada for 2026?",
    a: "IPTV Subscription Canada is the #1 rated IPTV service in Canada for 2026, offering 25,000+ live channels including all Canadian networks, NHL, TSN, Sportsnet, CTV, CBC and 120,000+ movies and series in 4K quality with 99.9% uptime.",
  },
  {
    q: "Is IPTV legal in Canada?",
    a: "IPTV technology is completely legal in Canada and is used by major telecoms. Our service provides access to publicly available streams and operates within Canadian broadcasting standards.",
  },
  {
    q: "Can I watch NHL and Canadian sports?",
    a: "Yes! We include TSN, Sportsnet, CBC Sports, CTV, and all NHL games. Every Leafs, Habs, Canucks, Oilers, Flames and Senators game is covered in HD and 4K.",
  },
  {
    q: "How much does IPTV cost compared to cable in Canada?",
    a: "Our IPTV plans start at just $9/month compared to $80–150/month for cable. You save up to 80% while getting more channels and better quality.",
  },
  {
    q: "What devices are supported?",
    a: "Our IPTV works on Amazon Fire Stick, all Smart TVs (Samsung, LG), Android boxes, iPhone, iPad, Android phones, MAG boxes, Windows and Mac computers.",
  },
  {
    q: "Do you offer a free trial?",
    a: "Yes! We offer a 5-minute free trial so you can test all 25,000+ channels and 120,000+ VOD titles completely risk-free before subscribing. No credit card required.",
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
