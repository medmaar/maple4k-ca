"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const words = ["LIVE TV", "MOVIES", "SERIES", "SPORTS"];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
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
        justifyContent: "center",
        textAlign: "center",
        padding: "120px 16px 100px",
        overflow: "hidden",
        background: "#0C0F1A",
      }}
    >
      {/* Ambient glow blobs */}
      <div style={{ position: "absolute", top: "15%", left: "10%", width: 500, height: 500, background: "rgba(232,4,31,0.1)", borderRadius: "50%", filter: "blur(100px)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "10%", right: "5%", width: 400, height: 400, background: "rgba(63,154,174,0.07)", borderRadius: "50%", filter: "blur(90px)", pointerEvents: "none" }} />

      {/* Grid pattern overlay */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`,
        backgroundSize: "60px 60px",
      }} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: 800 }}>
        {/* Badge */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          background: "rgba(232,4,31,0.12)", border: "1px solid rgba(232,4,31,0.3)",
          borderRadius: 100, padding: "8px 20px", fontSize: 12, fontWeight: 700,
          color: "#E8041F", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 32,
        }}>
          <span style={{ width: 7, height: 7, background: "#E8041F", borderRadius: "50%", animation: "softPulse 1.5s ease infinite" }} />
          Maple4K — Canada&apos;s Best IPTV
        </div>

        {/* Main heading with rotating word */}
        <h1 style={{ fontSize: "clamp(36px, 7vw, 78px)", fontWeight: 900, lineHeight: 1.1, margin: "0 0 12px", letterSpacing: "-0.02em" }}>
          <span style={{ display: "block", color: "rgba(255,255,255,0.9)", marginBottom: 4, fontSize: "0.55em", fontWeight: 700, letterSpacing: "0.05em" }}>
            Maple4K
          </span>
          <span style={{ position: "relative", display: "inline-block", minWidth: "4ch" }}>
            {words.map((word, i) => (
              <span
                key={word}
                style={{
                  position: i === 0 ? "relative" : "absolute",
                  top: 0, left: 0, right: 0,
                  color: "#E8041F",
                  opacity: current === i ? 1 : 0,
                  transform: current === i ? "translateY(0)" : "translateY(16px)",
                  transition: "opacity 0.5s ease, transform 0.5s ease",
                  display: "block",
                }}
              >
                {word}
              </span>
            ))}
          </span>
        </h1>

        {/* Subtitle */}
        <p style={{
          fontSize: "clamp(16px, 2vw, 20px)",
          color: "rgba(255,255,255,0.6)",
          maxWidth: 580,
          margin: "28px auto 48px",
          lineHeight: 1.65,
        }}>
          Access 25,000+ channels, 120,000+ movies & series on all your devices — from $9/month. The only Canadian IPTV in True 4K H.265 Ultra HD.
        </p>

        {/* CTA buttons */}
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", marginBottom: 56 }}>
          <Link href="/pricing" className="btn-red" style={{ fontSize: 16, padding: "18px 40px" }}>
            Subscribe Now
          </Link>
          <Link href="/free-trial" className="btn-outline" style={{ fontSize: 16, padding: "18px 40px" }}>
            ▶ Free Trial 24H
          </Link>
        </div>

        {/* Trust indicators */}
        <div style={{ display: "flex", gap: 24, justifyContent: "center", flexWrap: "wrap" }}>
          {["✓ No Credit Card for Trial", "✓ Access in Minutes", "✓ All Devices Supported", "✓ 25,000+ Channels"].map(t => (
            <span key={t} style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", fontWeight: 600 }}>{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
