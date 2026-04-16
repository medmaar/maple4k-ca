"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "../components/Logo";

const links = [
  { label: "Pricing", href: "/pricing" },
  { label: "Channels", href: "/channels-list" },
  { label: "Free Trial", href: "/free-trial" },
  { label: "Blog", href: "/blog" },
  { label: "Referral", href: "/referral" },
  { label: "DMCA", href: "/dmca" },
  { label: "Reseller", href: "/reseller" },
  { label: "Contact", href: "/contact" },
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
        background: scrolled ? "rgba(255,242,210,0.96)" : "#FFE2AF",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: "2px solid rgba(121,201,197,0.4)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-[68px] flex items-center justify-between">
        <Logo />

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium" style={{ color: "#3F9AAE" }}>
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="transition-colors" style={{ color: "#3F9AAE" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#1A3D45")}
              onMouseLeave={e => (e.currentTarget.style.color = "#3F9AAE")}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <Link
          href="/free-trial"
          className="hidden md:inline-flex items-center gap-2 text-sm font-bold text-white px-5 py-2.5 rounded-xl transition-all hover:brightness-110"
          style={{ background: "#F96E5B", boxShadow: "0 4px 14px rgba(249,110,91,0.35)" }}
        >
          Free Trial
        </Link>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="md:hidden flex flex-col justify-center gap-[5px] w-8 h-8"
        >
          <span className={`block h-0.5 rounded transition-all duration-300 ${open ? "rotate-45 translate-y-[7px]" : ""}`} style={{ background: "#1A3D45" }} />
          <span className={`block h-0.5 rounded transition-opacity duration-300 ${open ? "opacity-0" : ""}`} style={{ background: "#1A3D45" }} />
          <span className={`block h-0.5 rounded transition-all duration-300 ${open ? "-rotate-45 -translate-y-[7px]" : ""}`} style={{ background: "#1A3D45" }} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden border-t px-4 pb-5"
          style={{ background: "#FFE2AF", borderColor: "rgba(121,201,197,0.4)" }}
        >
          <div className="flex flex-col gap-1 pt-3">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-3 py-3 rounded-xl text-sm font-medium transition-colors"
                style={{ color: "#3F9AAE" }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/free-trial"
              onClick={() => setOpen(false)}
              className="mt-2 text-white px-4 py-3 rounded-xl text-sm font-bold text-center"
              style={{ background: "#F96E5B" }}
            >
              Free Trial
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
