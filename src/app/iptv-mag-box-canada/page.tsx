import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "IPTV MAG Box Canada – Setup & Best Plans 2026 | Maple4K",
  description:
    "Set up Maple4K IPTV on your MAG Box in Canada. Full portal URL setup guide. 25,000+ live channels, NHL, TSN in 4K. Plans from $9/month.",
  keywords: "IPTV MAG Box Canada, MAG 322 Maple4K, MAG Box setup Canada 2026",
  alternates: { canonical: "https://maple4k.ca/iptv-mag-box-canada" },
  openGraph: {
    title: "IPTV MAG Box Canada – Setup & Best Plans 2026 | Maple4K",
    description: "Set up Maple4K IPTV on your MAG Box in Canada. Full portal URL setup guide. 25,000+ live channels, NHL, TSN in 4K. Plans from $9/month.",
    url: "https://maple4k.ca/iptv-mag-box-canada",
    type: "website",
    siteName: "Maple4K",
    locale: "en_CA",
    images: [{ url: "/favicon.svg", width: 512, height: 512, alt: "Maple4K IPTV MAG Box Canada" }],
  },
  twitter: { card: "summary_large_image" },
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Set Up Maple4K IPTV on a MAG Box in Canada",
  description: "Configure your MAG Box with Maple4K portal URL in minutes.",
  step: [
    { "@type": "HowToStep", name: "Boot your MAG Box", text: "Power on your MAG 322, 324, 351, or 410 box and wait for the home screen to load." },
    { "@type": "HowToStep", name: "Open Settings", text: "Navigate to System Settings > Servers > Portals in the MAG Box menu." },
    { "@type": "HowToStep", name: "Enter Portal URL", text: "Enter the Maple4K portal URL we send to your email after subscribing. Save and reboot." },
    { "@type": "HowToStep", name: "Start streaming", text: "Your MAG Box will load the Maple4K portal with 25,000+ Canadian and international channels." },
  ],
};

export default function IPTVMagBoxCanadaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <main style={{ background: "linear-gradient(to left, #daf0f2 0%, #fce8e4 100%)", color: "#000000", minHeight: "100vh" }}>
        <section style={{ background: "transparent", padding: "80px 16px 60px" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <span style={{ display: "inline-block", background: "rgba(249,110,91,0.12)", border: "1px solid rgba(249,110,91,0.3)", color: "#F96E5B", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", padding: "6px 16px", borderRadius: 999, marginBottom: 24 }}>
              Maple4K · MAG Box
            </span>
            <h1 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 900, lineHeight: 1.15, marginBottom: 20 }}>
              IPTV MAG Box Canada –<br />
              <span style={{ color: "#F96E5B" }}>Setup &amp; Best Plans 2026</span>
            </h1>
            <p style={{ color: "#000000", fontSize: 17, lineHeight: 1.7, maxWidth: 680, marginBottom: 36 }}>
              Maple4K is one of the best Maple4K providers for MAG Box users. Whether you have a MAG 322, 324, 351, or 410, our service works flawlessly with a simple portal URL setup — no technical knowledge required.
            </p>
            <Link href="/pricing" style={{ background: "#F96E5B", color: "#000000", fontWeight: 700, fontSize: 16, padding: "14px 32px", borderRadius: 12, textDecoration: "none", display: "inline-block" }}>
              Get Your Maple4K Plan →
            </Link>
          </div>
        </section>

        <section style={{ padding: "60px 16px", background: "#E8F4F5" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <h2 style={{ fontSize: "clamp(24px, 3.5vw, 36px)", fontWeight: 800, marginBottom: 32 }}>
              Why Maple4K Works Great on MAG Box
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
              {[
                { title: "Native Portal Support", desc: "MAG boxes natively support IPTV portals. Maple4K provides a dedicated portal URL — no extra apps needed." },
                { title: "HD & 4K Streams", desc: "MAG 322 and newer models support HD and 4K playback. Stream every Canadian channel in full quality." },
                { title: "Full EPG Guide", desc: "Browse live TV with a complete electronic program guide, just like traditional cable — on your MAG Box." },
                { title: "Catch-Up TV", desc: "Missed a game or show? Our 7-day catch-up feature lets you replay content on your MAG Box." },
              ].map((f) => (
                <div key={f.title} style={{ background: "#ffffff", border: "1px solid rgba(63,154,174,0.1)", borderRadius: 16, padding: "24px 20px" }}>
                  <h3 style={{ fontWeight: 700, fontSize: 16, marginBottom: 8, color: "#F96E5B" }}>{f.title}</h3>
                  <p style={{ color: "#000000", fontSize: 14, lineHeight: 1.6 }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ padding: "60px 16px", background: "#E8F4F5" }}>
          <div style={{ maxWidth: 780, margin: "0 auto" }}>
            <h2 style={{ fontSize: "clamp(24px, 3.5vw, 36px)", fontWeight: 800, marginBottom: 32 }}>
              How to Set Up Maple4K on Your MAG Box
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                { n: "01", title: "Subscribe to Maple4K", desc: "Choose a plan on our pricing page. All plans support MAG Box via portal URL. Pay with Interac e-Transfer." },
                { n: "02", title: "Receive Portal URL by Email", desc: "Within 5 minutes, we'll send your portal URL and MAC address registration instructions to your email." },
                { n: "03", title: "Open MAG Box Settings", desc: "On your MAG Box home screen, go to System Settings → Servers → Portals." },
                { n: "04", title: "Enter Portal URL", desc: "Type in the Maple4K portal URL in the Portal 1 URL field. Save and reboot your MAG Box." },
                { n: "05", title: "Stream Canadian TV", desc: "Your MAG Box will load the full channel list. Browse 25,000+ channels and 120,000+ on-demand titles." },
              ].map((s) => (
                <div key={s.n} style={{ display: "flex", gap: 20, background: "#ffffff", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 14, padding: "20px 24px" }}>
                  <span style={{ color: "#F96E5B", fontWeight: 900, fontSize: 24, opacity: 0.5, minWidth: 36 }}>{s.n}</span>
                  <div>
                    <h3 style={{ fontWeight: 700, fontSize: 15, marginBottom: 6 }}>{s.title}</h3>
                    <p style={{ color: "#000000", fontSize: 14, lineHeight: 1.6 }}>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ padding: "60px 16px", background: "#E8F4F5", textAlign: "center" }}>
          <div style={{ maxWidth: 600, margin: "0 auto" }}>
            <h2 style={{ fontSize: "clamp(24px, 3.5vw, 36px)", fontWeight: 800, marginBottom: 16 }}>Ready to Set Up Your MAG Box?</h2>
            <p style={{ color: "#000000", marginBottom: 32, fontSize: 15 }}>
              Best Maple4K service for MAG boxes. Plans from $9/month with free 24h trial.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/pricing" style={{ background: "#F96E5B", color: "#000000", fontWeight: 700, fontSize: 15, padding: "14px 30px", borderRadius: 12, textDecoration: "none" }}>View Maple4K Plans →</Link>
              <Link href="/free-trial" style={{ background: "transparent", border: "2px solid rgba(249,110,91,0.4)", color: "#F96E5B", fontWeight: 700, fontSize: 15, padding: "14px 30px", borderRadius: 12, textDecoration: "none" }}>Try 24h Free</Link>
            </div>
          </div>
        </section>
      
        {/* SEO Internal Links */}
        <section style={{ padding: "48px 16px" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <p style={{ textAlign: "center", color: "#000000", fontSize: 13, fontWeight: 600, marginBottom: 16 }}>Other Canadian cities we serve:</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center", marginBottom: 16 }}>
              <a href="/iptv-toronto" style={{ background: "rgba(63,154,174,0.1)", border: "1px solid rgba(63,154,174,0.25)", borderRadius: 999, padding: "7px 18px", fontSize: 13, fontWeight: 600, color: "#1A3D45", textDecoration: "none" }}>🍁 IPTV Toronto</a>
              <a href="/iptv-vancouver" style={{ background: "rgba(63,154,174,0.1)", border: "1px solid rgba(63,154,174,0.25)", borderRadius: 999, padding: "7px 18px", fontSize: 13, fontWeight: 600, color: "#1A3D45", textDecoration: "none" }}>🍁 IPTV Vancouver</a>
              <a href="/iptv-montreal" style={{ background: "rgba(63,154,174,0.1)", border: "1px solid rgba(63,154,174,0.25)", borderRadius: 999, padding: "7px 18px", fontSize: 13, fontWeight: 600, color: "#1A3D45", textDecoration: "none" }}>🍁 IPTV Montreal</a>
              <a href="/iptv-calgary" style={{ background: "rgba(63,154,174,0.1)", border: "1px solid rgba(63,154,174,0.25)", borderRadius: 999, padding: "7px 18px", fontSize: 13, fontWeight: 600, color: "#1A3D45", textDecoration: "none" }}>🍁 IPTV Calgary</a>
              <a href="/iptv-ottawa" style={{ background: "rgba(63,154,174,0.1)", border: "1px solid rgba(63,154,174,0.25)", borderRadius: 999, padding: "7px 18px", fontSize: 13, fontWeight: 600, color: "#1A3D45", textDecoration: "none" }}>🍁 IPTV Ottawa</a>
              <a href="/iptv-edmonton" style={{ background: "rgba(63,154,174,0.1)", border: "1px solid rgba(63,154,174,0.25)", borderRadius: 999, padding: "7px 18px", fontSize: 13, fontWeight: 600, color: "#1A3D45", textDecoration: "none" }}>🍁 IPTV Edmonton</a>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" }}>
              <a href="/pricing" style={{ background: "#F96E5B", color: "#fff", borderRadius: 999, padding: "7px 18px", fontSize: 13, fontWeight: 700, textDecoration: "none" }}>View Plans</a>
              <a href="/free-trial" style={{ background: "#3F9AAE", color: "#fff", borderRadius: 999, padding: "7px 18px", fontSize: 13, fontWeight: 700, textDecoration: "none" }}>Free Trial</a>
              <a href="/channels-list" style={{ background: "rgba(63,154,174,0.1)", border: "1px solid rgba(63,154,174,0.25)", borderRadius: 999, padding: "7px 18px", fontSize: 13, fontWeight: 600, color: "#1A3D45", textDecoration: "none" }}>Channel List</a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
