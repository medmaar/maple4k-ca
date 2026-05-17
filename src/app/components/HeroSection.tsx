"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const words = ["LIVE TV", "MOVIES", "SERIES", "SPORTS"];

const CARDS = [
  {
    label: "🏒 Hockey",
    gradient: "linear-gradient(135deg, #1a2744 0%, #0d1829 100%)",
    accent: "#4FC3F7",
    emoji: "🏒",
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
    gradient: "linear-gradient(135deg, #2d1b4e 0%, #1a0d2e 100%)",
    accent: "#CE93D8",
    emoji: "🎬",
    rotate: "6deg",
    top: "2%",
    right: "2%",
    width: 190,
    zIndex: 3,
    delay: "0.15s",
    image: null,
  },
  {
    label: "⚡ Action",
    gradient: "linear-gradient(135deg, #1b2838 0%, #0f1923 100%)",
    accent: "#EF5350",
    emoji: "⚡",
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
    gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
    accent: "#66BB6A",
    emoji: "🎭",
    rotate: "8deg",
    top: "52%",
    right: "1%",
    width: 200,
    zIndex: 2,
    delay: "0.45s",
    image: null,
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
      style={{
        position: "relative",
        minHeight: "92vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        background: "#0C0F1A",
      }}
    >
      {/* ── Red diagonal geometric background (top-left corner) ── */}
      <div style={{
        position: "absolute", top: 0, left: 0,
        width: "45%", height: "100%",
        background: "linear-gradient(160deg, rgba(180,4,20,0.22) 0%, transparent 65%)",
        pointerEvents: "none", zIndex: 0,
      }} />
      <div style={{
        position: "absolute", top: 0, left: 0,
        width: 0, height: 0,
        borderStyle: "solid",
        borderWidth: "340px 260px 0 0",
        borderColor: "rgba(180,4,20,0.14) transparent transparent transparent",
        pointerEvents: "none", zIndex: 0,
      }} />
      <div style={{
        position: "absolute", top: 0, left: 0,
        width: 0, height: 0,
        borderStyle: "solid",
        borderWidth: "200px 150px 0 0",
        borderColor: "rgba(232,4,31,0.1) transparent transparent transparent",
        pointerEvents: "none", zIndex: 0,
      }} />

      {/* Subtle grid overlay */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0,
        backgroundImage: "linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />

      {/* ── LEFT — text content ── */}
      <div style={{
        position: "relative", zIndex: 10,
        padding: "120px 48px 100px 6vw",
        maxWidth: 560,
        flex: "0 0 auto",
      }}>
        {/* Service name */}
        <p style={{
          fontSize: 16, fontWeight: 700, color: "rgba(255,255,255,0.55)",
          margin: "0 0 12px", letterSpacing: "0.04em",
        }}>
          Maple4K
        </p>

        {/* Rotating headline */}
        <h1 style={{
          fontSize: "clamp(42px, 6vw, 78px)", fontWeight: 900,
          lineHeight: 1.0, margin: "0 0 28px", letterSpacing: "-0.02em",
        }}>
          <span style={{ display: "block", color: "#fff", marginBottom: 6 }}>
            Stream
          </span>
          <span style={{ position: "relative", display: "block", minHeight: "1.1em" }}>
            {words.map((word, i) => (
              <span
                key={word}
                style={{
                  position: i === 0 ? "relative" : "absolute",
                  top: 0, left: 0,
                  color: "#00E5FF",
                  opacity: current === i ? 1 : 0,
                  transform: current === i ? "translateY(0)" : "translateY(16px)",
                  transition: "opacity 0.5s ease, transform 0.5s ease",
                  display: "block",
                  textShadow: "0 0 40px rgba(0,229,255,0.4)",
                }}
              >
                {word}
              </span>
            ))}
          </span>
        </h1>

        {/* Subtitle */}
        <p style={{
          fontSize: "clamp(15px, 1.6vw, 17px)",
          color: "rgba(255,255,255,0.65)",
          lineHeight: 1.7,
          margin: "0 0 40px",
          maxWidth: 440,
        }}>
          Get access to 50,000+ channels + Netflix, movies and TV series on all your devices with a single subscription.
        </p>

        {/* CTAs */}
        <div style={{ display: "flex", flexDirection: "column", gap: 14, alignItems: "flex-start" }}>
          <Link
            href="/pricing"
            style={{
              background: "#E8041F",
              color: "#fff", fontWeight: 800, fontSize: 16,
              padding: "16px 40px", borderRadius: 12,
              textDecoration: "none", display: "inline-block",
              boxShadow: "0 6px 32px rgba(232,4,31,0.5)",
              letterSpacing: "0.01em",
            }}
          >
            Subscribe
          </Link>
          <Link
            href="/free-trial"
            style={{
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.2)",
              color: "#fff", fontWeight: 700, fontSize: 15,
              padding: "14px 36px", borderRadius: 12,
              textDecoration: "none", display: "inline-flex",
              alignItems: "center", gap: 10,
            }}
          >
            <span style={{ width: 10, height: 10, background: "#E8041F", borderRadius: "50%", flexShrink: 0, animation: "heroPulse 1.4s ease-in-out infinite" }} />
            Free Trial 24H
          </Link>
        </div>
      </div>

      {/* ── RIGHT — floating tilted content cards ── */}
      <div style={{
        position: "absolute",
        right: 0, top: 0, bottom: 0,
        width: "55%",
        pointerEvents: "none",
        zIndex: 5,
      }}>
        {CARDS.map((card, idx) => (
          <div
            key={card.label}
            style={{
              position: "absolute",
              top: card.top,
              right: card.right,
              width: card.width,
              aspectRatio: "16/10",
              background: card.gradient,
              borderRadius: 16,
              border: `1px solid ${card.accent}22`,
              boxShadow: `0 20px 60px rgba(0,0,0,0.6), 0 0 0 1px ${card.accent}18`,
              transform: `rotate(${card.rotate})`,
              zIndex: card.zIndex,
              overflow: "hidden",
              opacity: mounted ? 1 : 0,
              transition: `opacity 0.6s ease ${card.delay}, transform 0.6s cubic-bezier(0.34,1.56,0.64,1) ${card.delay}`,
              animation: `cardFloat${idx} ${4 + idx * 0.7}s ease-in-out infinite`,
            }}
          >
            {/* Real image background if available */}
            {card.image && (
              <img
                src={card.image}
                alt={card.label}
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            )}
            {/* Card shine overlay */}
            <div style={{
              position: "absolute", inset: 0,
              background: card.image
                ? "linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)"
                : "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, transparent 50%)",
            }} />
            {/* Card label badge */}
            <div style={{ position: "absolute", bottom: 10, left: 12, zIndex: 2 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: card.image ? "#fff" : card.accent, letterSpacing: "0.06em", textTransform: "uppercase", textShadow: card.image ? "0 1px 4px rgba(0,0,0,0.8)" : "none" }}>
                {card.label}
              </div>
            </div>
            {/* Abstract shimmer bars for non-image cards */}
            {!card.image && (
              <div style={{ padding: "20px 18px", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                  {[...Array(3)].map((_, i) => (
                    <div key={i} style={{
                      height: 6, borderRadius: 3,
                      background: card.accent,
                      opacity: 0.3 + i * 0.15,
                      width: `${30 + i * 15}%`,
                    }} />
                  ))}
                </div>
                <div>
                  <div style={{ fontSize: 28, marginBottom: 6 }}>{card.emoji}</div>
                </div>
              </div>
            )}
            {/* Bottom gradient */}
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "40%", background: "linear-gradient(to top, rgba(0,0,0,0.5), transparent)" }} />
          </div>
        ))}
      </div>

      {/* Keyframes injected via style tag */}
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
          section > div:last-of-type { display: none; }
        }
      `}</style>
    </section>
  );
}
