"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const words = ["LIVE TV", "MOVIES", "SERIES", "SPORTS"];

const CARDS = [
  {
    label: "🏒 Hockey",
    accent: "#4FC3F7",
    rotate: "-8deg",
    top: "4%",
    right: "28%",
    width: 220,
    zIndex: 4,
    delay: "0s",
    image: "/iptv-subscription-canada-1.jpg",
  },
  {
    label: "🎬 Movies",
    accent: "#CE93D8",
    rotate: "6deg",
    top: "2%",
    right: "2%",
    width: 190,
    zIndex: 3,
    delay: "0.15s",
    image: "/iptv-canada.jpg",
  },
  {
    label: "⚡ Action",
    accent: "#EF5350",
    rotate: "-4deg",
    top: "48%",
    right: "24%",
    width: 240,
    zIndex: 5,
    delay: "0.3s",
    image: "/iptv-subscription-canada-3.jpg",
  },
  {
    label: "🎭 Series",
    accent: "#66BB6A",
    rotate: "8deg",
    top: "52%",
    right: "1%",
    width: 200,
    zIndex: 2,
    delay: "0.45s",
    image: "/iptv-subscription.jpg",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const iv = setInterval(() => setCurrent(c => (c + 1) % words.length), 3000);
    return () => clearInterval(iv);
  }, []);

  return (
    <section
      className="hero-section"
      style={{
        position: "relative",
        minHeight: "92vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        background: "#0C0F1A",
      }}
    >
      {/* Background image */}
      <img
        src="/iptv-free.jpg"
        alt="IPTV Canada — NHL arena live streaming"
        style={{
          position: "absolute", inset: 0, width: "100%", height: "100%",
          objectFit: "cover", objectPosition: "center 40%",
          zIndex: 0, opacity: 0.22, pointerEvents: "none",
        }}
      />

      {/* Dark base overlay */}
      <div style={{
        position: "absolute", inset: 0,
        background: "rgba(8,10,20,0.52)",
        pointerEvents: "none", zIndex: 1,
      }} />

      {/* Radial vignette — darker in center where text sits */}
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse 65% 75% at 38% 50%, rgba(8,10,20,0.78) 0%, rgba(8,10,20,0.4) 60%, transparent 100%)",
        pointerEvents: "none", zIndex: 2,
      }} />

      {/* Red top-left accent */}
      <div style={{
        position: "absolute", top: 0, left: 0,
        width: "40%", height: "100%",
        background: "linear-gradient(160deg, rgba(180,4,20,0.16) 0%, transparent 55%)",
        pointerEvents: "none", zIndex: 2,
      }} />

      {/* Subtle grid */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none", zIndex: 2,
        backgroundImage: "linear-gradient(rgba(255,255,255,0.012) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.012) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />

      {/* ── TEXT CONTENT — centered ── */}
      <div
        className="hero-text"
        style={{
          position: "relative", zIndex: 15,
          padding: "120px 24px 100px",
          width: "100%",
          maxWidth: 620,
          textAlign: "center",
        }}
      >
        {/* Brand label */}
        <p style={{
          fontSize: 12, fontWeight: 700, color: "rgba(255,255,255,0.45)",
          margin: "0 0 14px", letterSpacing: "0.14em", textTransform: "uppercase",
          textShadow: "0 1px 4px rgba(0,0,0,0.8)",
        }}>
          Maple4K
        </p>

        {/* Headline */}
        <h1 style={{
          fontSize: "clamp(48px, 7vw, 82px)", fontWeight: 900,
          lineHeight: 1.0, margin: "0 0 28px", letterSpacing: "-0.02em",
          textAlign: "center",
        }}>
          {/* "Stream" line */}
          <span style={{
            display: "block", color: "#fff", marginBottom: 4,
            textShadow: "0 2px 24px rgba(0,0,0,0.95), 0 4px 48px rgba(0,0,0,0.8)",
          }}>
            Stream
          </span>

          {/* Rotating word — fixed centering via width:100% + text-align:center */}
          <span style={{
            display: "block",
            position: "relative",
            width: "100%",
            height: "1.15em",
            overflow: "hidden",
          }}>
            {words.map((word, i) => (
              <span
                key={word}
                style={{
                  position: "absolute",
                  top: 0,
                  left: "50%",
                  transform: current === i
                    ? "translateX(-50%) translateY(0)"
                    : "translateX(-50%) translateY(20px)",
                  opacity: current === i ? 1 : 0,
                  transition: "opacity 0.5s ease, transform 0.5s ease",
                  color: "#00E5FF",
                  whiteSpace: "nowrap",
                  textShadow: "0 0 48px rgba(0,229,255,0.55), 0 2px 24px rgba(0,0,0,0.95)",
                  display: "block",
                }}
              >
                {word}
              </span>
            ))}
          </span>
        </h1>

        {/* Subtitle — red background, white text */}
        <div style={{
          background: "rgba(180,4,20,0.82)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          border: "1px solid rgba(255,80,80,0.25)",
          borderRadius: 14,
          padding: "16px 24px",
          maxWidth: 500,
          margin: "0 auto 40px",
          boxShadow: "0 4px 32px rgba(180,4,20,0.35)",
        }}>
          <p style={{
            fontSize: "clamp(14px, 1.5vw, 16px)",
            color: "#fff",
            lineHeight: 1.7,
            margin: 0,
            fontWeight: 400,
            textShadow: "0 1px 3px rgba(0,0,0,0.4)",
          }}>
            Get access to <strong style={{ fontWeight: 800 }}>50,000+ channels</strong> + Netflix, movies and TV series on all your devices with a single subscription.
          </p>
        </div>

        {/* CTAs */}
        <div style={{ display: "flex", flexDirection: "column", gap: 14, alignItems: "center" }}>
          <Link
            href="/pricing"
            style={{
              background: "#E8041F",
              color: "#fff", fontWeight: 800, fontSize: 16,
              padding: "16px 48px", borderRadius: 12,
              textDecoration: "none", display: "inline-block",
              boxShadow: "0 6px 32px rgba(232,4,31,0.6), 0 2px 8px rgba(0,0,0,0.5)",
              letterSpacing: "0.01em",
            }}
          >
            Subscribe
          </Link>
          <Link
            href="/free-trial"
            style={{
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.25)",
              backdropFilter: "blur(6px)",
              WebkitBackdropFilter: "blur(6px)",
              color: "#fff", fontWeight: 700, fontSize: 15,
              padding: "14px 40px", borderRadius: 12,
              textDecoration: "none", display: "inline-flex",
              alignItems: "center", gap: 10,
              textShadow: "0 1px 3px rgba(0,0,0,0.6)",
            }}
          >
            <span style={{ width: 9, height: 9, background: "#E8041F", borderRadius: "50%", flexShrink: 0, animation: "heroPulse 1.4s ease-in-out infinite" }} />
            Free Trial 24H
          </Link>
        </div>

        {/* Mobile image grid */}
        <div className="hero-mobile-imgs" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 36 }}>
          {[
            { src: "/iptv-subscription-canada-1.jpg", alt: "🏒 Hockey" },
            { src: "/iptv-canada.jpg",                alt: "🎬 Live TV" },
            { src: "/iptv-subscription-canada-3.jpg", alt: "⚡ Sports" },
            { src: "/iptv-subscription.jpg",          alt: "🎭 Series" },
          ].map(card => (
            <div key={card.src} style={{ borderRadius: 12, overflow: "hidden", position: "relative", aspectRatio: "16/10" }}>
              <img src={card.src} alt={card.alt} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} loading="lazy" />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 60%)" }} />
              <span style={{ position: "absolute", bottom: 7, left: 10, fontSize: 11, fontWeight: 700, color: "#fff", textShadow: "0 1px 3px rgba(0,0,0,0.9)" }}>{card.alt}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Floating cards — right side, desktop only ── */}
      <div
        className="hero-cards-panel"
        style={{
          position: "absolute",
          right: 0, top: 0, bottom: 0,
          width: "42%",
          pointerEvents: "none",
          zIndex: 8,
        }}
      >
        {CARDS.map((card, idx) => (
          <div
            key={card.label}
            style={{
              position: "absolute",
              top: card.top,
              right: card.right,
              width: card.width,
              aspectRatio: "16/10",
              borderRadius: 16,
              border: `1px solid ${card.accent}28`,
              boxShadow: `0 20px 60px rgba(0,0,0,0.65), 0 0 0 1px ${card.accent}18`,
              transform: `rotate(${card.rotate})`,
              zIndex: card.zIndex,
              overflow: "hidden",
              opacity: mounted ? 1 : 0,
              transition: `opacity 0.6s ease ${card.delay}, transform 0.6s cubic-bezier(0.34,1.56,0.64,1) ${card.delay}`,
              animation: `cardFloat${idx} ${4 + idx * 0.7}s ease-in-out infinite`,
            }}
          >
            <img
              src={card.image}
              alt={card.label}
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.08) 60%, transparent 100%)",
            }} />
            <div style={{ position: "absolute", bottom: 10, left: 12, zIndex: 2 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#fff", letterSpacing: "0.06em", textTransform: "uppercase", textShadow: "0 1px 4px rgba(0,0,0,0.9)" }}>
                {card.label}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Keyframes */}
      <style>{`
        @keyframes cardFloat0 {
          0%, 100% { transform: rotate(-8deg) translateY(0px); }
          50%       { transform: rotate(-8deg) translateY(-12px); }
        }
        @keyframes cardFloat1 {
          0%, 100% { transform: rotate(6deg) translateY(0px); }
          50%       { transform: rotate(6deg) translateY(-8px); }
        }
        @keyframes cardFloat2 {
          0%, 100% { transform: rotate(-4deg) translateY(0px); }
          50%       { transform: rotate(-4deg) translateY(-14px); }
        }
        @keyframes cardFloat3 {
          0%, 100% { transform: rotate(8deg) translateY(0px); }
          50%       { transform: rotate(8deg) translateY(-10px); }
        }
        @keyframes heroPulse {
          0%, 100% { opacity: 1; box-shadow: 0 0 0 0 rgba(232,4,31,0.5); }
          50%       { opacity: 0.7; box-shadow: 0 0 0 6px rgba(232,4,31,0); }
        }
        @media (max-width: 768px) {
          .hero-cards-panel { display: none !important; }
          .hero-mobile-imgs { display: grid !important; }
        }
        @media (min-width: 769px) {
          .hero-mobile-imgs { display: none !important; }
        }
      `}</style>
    </section>
  );
}
