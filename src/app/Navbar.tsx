"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "../components/Logo";

const links = [
  { label: "Home", href: "/" },
  { label: "Pricing", href: "/pricing" },
  { label: "Channels", href: "/channels-list" },
  { label: "Reviews", href: "/reviews" },
  { label: "Guides", href: "/blog" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className="sticky top-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(12,15,26,0.96)" : "#0C0F1A",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: "1px solid rgba(255,255,255,0.07)",
        height: 68,
        display: "flex",
        alignItems: "center",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full h-full flex items-center gap-6">
        <Logo />

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-5 text-sm font-medium flex-1 justify-center">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="transition-colors whitespace-nowrap"
              style={{ color: "rgba(255,255,255,0.65)" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.65)")}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/pricing"
            className="text-sm font-bold px-5 py-2 rounded-xl whitespace-nowrap"
            style={{ color: "rgba(255,255,255,0.7)", border: "1px solid rgba(255,255,255,0.15)" }}
            onMouseEnter={e => { e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.35)"; }}
            onMouseLeave={e => { e.currentTarget.style.color = "rgba(255,255,255,0.7)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"; }}
          >
            Subscribe
          </Link>
          <Link
            href="/free-trial"
            className="text-sm font-bold text-white px-6 py-2.5 rounded-xl whitespace-nowrap"
            style={{ background: "#E8041F", boxShadow: "0 4px 18px rgba(232,4,31,0.45)" }}
          >
            ▶ Free Trial 24H
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(v => !v)}
          aria-label="Toggle menu"
          className="md:hidden flex flex-col justify-center gap-[5px] w-8 h-8 ml-auto"
        >
          <span className={`block h-0.5 rounded transition-all duration-300 ${open ? "rotate-45 translate-y-[7px]" : ""}`} style={{ background: "rgba(255,255,255,0.05)" }} />
          <span className={`block h-0.5 rounded transition-opacity duration-300 ${open ? "opacity-0" : ""}`} style={{ background: "rgba(255,255,255,0.05)" }} />
          <span className={`block h-0.5 rounded transition-all duration-300 ${open ? "-rotate-45 -translate-y-[7px]" : ""}`} style={{ background: "rgba(255,255,255,0.05)" }} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden border-t px-4 pb-5 absolute top-[68px] left-0 right-0"
          style={{ background: "#0C0F1A", borderColor: "rgba(255,255,255,0.07)", zIndex: 100 }}
        >
          <div className="flex flex-col gap-1 pt-3">
            {links.map(l => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-3 py-3 rounded-xl text-sm font-medium transition-colors"
                style={{ color: "rgba(255,255,255,0.7)" }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/free-trial"
              onClick={() => setOpen(false)}
              className="mt-2 text-white px-4 py-3 rounded-xl text-sm font-bold text-center"
              style={{ background: "#E8041F" }}
            >
              ▶ Free Trial 24H
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
