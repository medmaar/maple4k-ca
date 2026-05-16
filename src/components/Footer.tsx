"use client";
import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer style={{ background: "#08090F", borderTop: "1px solid rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.6)", fontSize: 14 }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "64px 24px 32px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 40, marginBottom: 56 }}>
          {/* Brand */}
          <div>
            <Logo />
            <p style={{ marginTop: 16, color: "rgba(255,255,255,0.45)", lineHeight: 1.7, fontSize: 13 }}>
              Canada&apos;s premium 4K IPTV service. H.265/HEVC encoded, HDR10 &amp; Dolby Vision. 50,000+ channels + Netflix.
            </p>
            <p style={{ marginTop: 16, fontSize: 13 }}>
              <strong style={{ color: "rgba(255,255,255,0.7)" }}>Contact:</strong>{" "}
              <Link href="/contact" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>support@maple4k.ca</Link>
            </p>
          </div>

          {/* Service */}
          <div>
            <h4 style={{ color: "#fff", fontWeight: 700, fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 20, marginTop: 0 }}>Service</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                { label: "Pricing", href: "/pricing" },
                { label: "Channel List", href: "/channels-list" },
                { label: "Free Trial", href: "/free-trial" },
                { label: "Referral Program", href: "/referral" },
                { label: "Reseller", href: "/reseller" },
              ].map(l => (
                <Link key={l.href} href={l.href} style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Guides */}
          <div>
            <h4 style={{ color: "#fff", fontWeight: 700, fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 20, marginTop: 0 }}>Guides</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                { label: "Fire Stick Setup", href: "/iptv-firestick-canada" },
                { label: "Apple TV Setup", href: "/iptv-apple-tv-canada" },
                { label: "Android TV Setup", href: "/iptv-android-tv-canada" },
                { label: "Smart TV Setup", href: "/iptv-smart-tv-canada" },
                { label: "Blog", href: "/blog" },
              ].map(l => (
                <Link key={l.href} href={l.href} style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 style={{ color: "#fff", fontWeight: 700, fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 20, marginTop: 0 }}>Legal</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                { label: "Privacy Policy", href: "/privacy-policy" },
                { label: "Terms of Service", href: "/terms-of-service" },
                { label: "Refund Policy", href: "/refund-policy" },
                { label: "DMCA", href: "/dmca" },
                { label: "Disclaimer", href: "/disclaimer" },
              ].map(l => (
                <Link key={l.href} href={l.href} style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: 28, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <p style={{ margin: 0, color: "rgba(255,255,255,0.3)", fontSize: 13 }}>
            © {new Date().getFullYear()} Maple4K. All rights reserved. Serving Canada 🍁
          </p>
          <p style={{ margin: 0, color: "rgba(255,255,255,0.3)", fontSize: 12 }}>
            IPTV technology is legal in Canada. Users are responsible for content access rights.
          </p>
        </div>
      </div>
    </footer>
  );
}
