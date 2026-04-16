"use client";
import { useState, useEffect } from "react";

const words = ["4K ULTRA HD", "HDR MOVIES", "LIVE SPORTS", "HEVC STREAMS"];

export default function HeroSection() {
  const [index, setIndex] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
      setAnimKey((k) => k + 1);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative overflow-hidden py-24 md:py-36 px-4 text-center"
      style={{
        background:
          "radial-gradient(ellipse 90% 55% at 50% -5%, rgba(253,3,34,0.14) 0%, transparent 65%), #10131E",
      }}
    >
      {/* Badge */}
      <div
        className="inline-flex items-center gap-2 mb-7 px-4 py-[7px] rounded-full text-xs font-bold uppercase tracking-widest"
        style={{
          background: "rgba(253,3,34,0.1)",
          border: "1px solid rgba(253,3,34,0.28)",
          color: "#fd0322",
        }}
      >
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#fd0322] animate-pulse" />
        Canada's Premium 4K IPTV — 2026
      </div>

      {/* Main headline */}
      <h1 className="text-5xl md:text-[72px] font-extrabold leading-[1.04] tracking-tight text-white mb-4">
        Canada&apos;s Premium
        <br />
        4K IPTV Service
      </h1>

      {/* Animated rotating word */}
      <div className="h-[60px] md:h-[76px] flex items-center justify-center mb-7 overflow-hidden">
        <span
          key={animKey}
          className="block text-4xl md:text-[58px] font-extrabold tracking-tight animate-fade-slide"
          style={{ color: "#fd0322" }}
        >
          {words[index]}
        </span>
      </div>

      {/* Subtitle */}
      <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
        H.265/HEVC encoded. HDR10 &amp; Dolby Vision supported.
        <br className="hidden sm:block" />
        25,000+ live channels and 120,000+ titles — at the resolution your display deserves.
      </p>

      {/* CTA buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="/pricing"
          className="inline-flex items-center justify-center gap-2 px-9 py-4 rounded-2xl text-base font-bold text-white transition-all hover:brightness-110 hover:scale-[1.02] active:scale-[0.99]"
          style={{
            background: "#fd0322",
            boxShadow: "0 8px 32px rgba(253,3,34,0.32)",
          }}
        >
          Subscribe Now →
        </a>
        <a
          href="/free-trial"
          className="inline-flex items-center justify-center gap-2 px-9 py-4 rounded-2xl text-base font-bold text-white transition-all hover:bg-white/10 active:scale-[0.99]"
          style={{ border: "1px solid rgba(255,255,255,0.18)" }}
        >
          Free 24H Trial
        </a>
      </div>

      {/* Stats row */}
      <div className="mt-14 flex flex-wrap justify-center gap-x-10 gap-y-3 text-sm">
        {[
          { n: "25,000+", l: "Live Channels" },
          { n: "4K HDR10", l: "& Dolby Vision" },
          { n: "H.265", l: "HEVC Codec" },
          { n: "99.9%", l: "Uptime" },
          { n: "24/7", l: "Support" },
        ].map((s) => (
          <div key={s.l} className="flex items-center gap-2">
            <span className="font-extrabold text-white">{s.n}</span>
            <span className="text-gray-500">{s.l}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
