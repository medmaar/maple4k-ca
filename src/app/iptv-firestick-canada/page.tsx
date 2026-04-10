import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IPTV on Amazon Firestick in Canada 2026 | Maple4K Setup Guide",
  description:
    "Set up IPTV on your Amazon Firestick in Canada in under 5 minutes. Maple4K offers 25,000+ channels, NHL, TSN & 4K quality. Free 24h trial.",
  alternates: { canonical: "https://maple4k.ca/iptv-firestick-canada" },
  openGraph: {
    title: "IPTV on Amazon Firestick in Canada 2026 | Maple4K Setup Guide",
    description:
      "Set up IPTV on your Amazon Firestick in Canada in under 5 minutes. Maple4K offers 25,000+ channels, NHL, TSN & 4K quality. Free 24h trial.",
    url: "https://maple4k.ca/iptv-firestick-canada",
    type: "website",
    siteName: "Maple4K",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Set Up IPTV on Amazon Firestick in Canada",
  step: [
    {
      "@type": "HowToStep",
      name: "Install Downloader App",
      text: "Search for 'Downloader' in the Amazon App Store and install it. Enable 'Apps from Unknown Sources' in Firestick settings.",
    },
    {
      "@type": "HowToStep",
      name: "Install IPTV Player",
      text: "Open Downloader and enter the URL provided by Maple4K to install TiviMate or IPTV Smarters Pro.",
    },
    {
      "@type": "HowToStep",
      name: "Enter Your Credentials",
      text: "Open your IPTV player and enter the server URL, username, and password sent by Maple4K to your email.",
    },
    {
      "@type": "HowToStep",
      name: "Start Streaming",
      text: "Your 25,000+ Canadian and international channels are now ready. Navigate to TSN, Sportsnet, or CBC and enjoy 4K streaming.",
    },
  ],
};

const steps = [
  {
    num: "1",
    title: "Install Downloader App",
    desc: "Search for 'Downloader' in the Amazon App Store and install it. Then go to Settings > My Fire TV > Developer Options and enable 'Apps from Unknown Sources'.",
  },
  {
    num: "2",
    title: "Install IPTV Player",
    desc: "Open Downloader, enter the URL provided by Maple4K, and install TiviMate or IPTV Smarters Pro — both are optimized for Firestick.",
  },
  {
    num: "3",
    title: "Enter Your Credentials",
    desc: "Open your IPTV player and enter the server URL, username, and password from your Maple4K welcome email. Tap 'Connect' and your channels load in seconds.",
  },
  {
    num: "4",
    title: "Start Streaming",
    desc: "Your 25,000+ Canadian and international channels are now ready. Navigate to TSN, Sportsnet, or CBC and enjoy 4K streaming on your big screen.",
  },
];

export default function IPTVFirestickCanadaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main style={{ background: "#0a0a0a", color: "#fff", minHeight: "100vh" }}>

        {/* Hero */}
        <section
          style={{
            background: "linear-gradient(135deg, #0a0a0a 0%, #1a0505 100%)",
            padding: "80px 16px 60px",
          }}
        >
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <span
              style={{
                background: "#E53935",
                color: "#fff",
                fontSize: 12,
                fontWeight: 700,
                padding: "4px 14px",
                borderRadius: 999,
                letterSpacing: 1,
                display: "inline-block",
                marginBottom: 20,
              }}
            >
              IPTV CANADA · MAPLESTREAMTV
            </span>
            <h1
              style={{
                fontSize: "clamp(2rem, 5vw, 3rem)",
                fontWeight: 800,
                lineHeight: 1.15,
                marginBottom: 20,
              }}
            >
              IPTV on Amazon Firestick in{" "}
              <span style={{ color: "#E53935" }}>Canada 2026</span>
            </h1>
            <p
              style={{
                fontSize: "1.15rem",
                color: "#ccc",
                maxWidth: 680,
                lineHeight: 1.75,
                marginBottom: 36,
              }}
            >
              Maple4K is the top-rated Maple4K service built for Amazon Firestick.
              Connect your Firestick in under 5 minutes and unlock 25,000+ live channels,
              120,000+ movies and series, and crystal-clear 4K HDR streams — including every
              major Canadian broadcaster and sports network.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
              <a
                href="/pricing"
                style={{
                  background: "#E53935",
                  color: "#fff",
                  padding: "16px 40px",
                  borderRadius: 12,
                  fontWeight: 700,
                  display: "inline-block",
                  textDecoration: "none",
                  fontSize: "1rem",
                }}
              >
                Get Your Maple4K Plan →
              </a>
              <a
                href="/free-trial"
                style={{
                  border: "2px solid #E53935",
                  color: "#E53935",
                  padding: "16px 40px",
                  borderRadius: 12,
                  fontWeight: 700,
                  display: "inline-block",
                  textDecoration: "none",
                  fontSize: "1rem",
                }}
              >
                Try 24h Free
              </a>
            </div>
          </div>
        </section>

        {/* Why Maple4K on Firestick */}
        <section style={{ padding: "60px 16px" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <h2
              style={{ color: "#fff", fontSize: "1.8rem", fontWeight: 700, marginBottom: 24 }}
            >
              Why Maple4K Works Great on Firestick
            </h2>
            <p style={{ color: "#aaa", lineHeight: 1.75, marginBottom: 28 }}>
              Millions of Canadians use Amazon Firestick as their primary streaming device.
              Maple4K is engineered to take full advantage of the Firestick hardware —
              delivering reliable, high-speed Maple4K streams without complicated setup.
            </p>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: 16,
              }}
            >
              {[
                {
                  title: "Blazing-Fast Anti-Freeze Servers",
                  desc: "Our Canadian-optimized servers guarantee low-latency streams with zero buffering — even during peak NHL playoff nights. Your Firestick handles 4K without a hitch.",
                },
                {
                  title: "Full TiviMate & Smarters Compatibility",
                  desc: "Maple4K works perfectly with both TiviMate and IPTV Smarters Pro — the two highest-rated IPTV players on Fire TV. Full 7-day EPG guide included.",
                },
                {
                  title: "True 4K Ultra HD Picture Quality",
                  desc: "Firestick 4K and Firestick 4K Max users get native 4K HDR streams. SD and HD options are available for older Fire TV Stick models — always crisp, always clear.",
                },
              ].map((item) => (
                <li
                  key={item.title}
                  style={{
                    background: "#111",
                    border: "1px solid #2a0a0a",
                    borderRadius: 14,
                    padding: "20px 24px",
                    display: "flex",
                    gap: 16,
                    alignItems: "flex-start",
                  }}
                >
                  <span
                    style={{
                      background: "#E53935",
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      flexShrink: 0,
                      marginTop: 6,
                    }}
                  />
                  <div>
                    <strong
                      style={{ color: "#fff", display: "block", marginBottom: 4 }}
                    >
                      {item.title}
                    </strong>
                    <span
                      style={{ color: "#999", fontSize: "0.92rem", lineHeight: 1.65 }}
                    >
                      {item.desc}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Setup Steps */}
        <section style={{ padding: "60px 16px", background: "#0f0f0f" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <h2
              style={{ color: "#fff", fontSize: "1.8rem", fontWeight: 700, marginBottom: 8 }}
            >
              How to Set Up IPTV on Your Firestick
            </h2>
            <p style={{ color: "#aaa", marginBottom: 36 }}>
              Four simple steps — up and streaming in under 5 minutes.
            </p>
            <ol
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: 18,
              }}
            >
              {steps.map((s) => (
                <li
                  key={s.num}
                  style={{
                    background: "#111",
                    border: "1px solid #1f1f1f",
                    borderRadius: 14,
                    padding: "22px 24px",
                    display: "flex",
                    gap: 20,
                    alignItems: "flex-start",
                  }}
                >
                  <span
                    style={{
                      background: "#E53935",
                      color: "#fff",
                      fontWeight: 800,
                      fontSize: "1rem",
                      borderRadius: "50%",
                      width: 40,
                      height: 40,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {s.num}
                  </span>
                  <div>
                    <strong
                      style={{
                        color: "#fff",
                        fontSize: "1rem",
                        display: "block",
                        marginBottom: 6,
                      }}
                    >
                      {s.title}
                    </strong>
                    <span
                      style={{ color: "#999", fontSize: "0.92rem", lineHeight: 1.65 }}
                    >
                      {s.desc}
                    </span>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Canadian Channels */}
        <section style={{ padding: "60px 16px" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <h2
              style={{ color: "#fff", fontSize: "1.8rem", fontWeight: 700, marginBottom: 24 }}
            >
              What Canadian Channels Do You Get?
            </h2>
            <p style={{ color: "#aaa", lineHeight: 1.75, marginBottom: 16 }}>
              Maple4K delivers every major Canadian channel straight to your Firestick.
              Never miss a live NHL game on TSN or Sportsnet, catch the latest on CBC News
              Network, follow hit dramas on CTV and Global, or cheer on your team with RDS and
              TVA Sports. Our Maple4K library includes all regional variants of each network
              so you always get your local feed.
            </p>
            <p style={{ color: "#aaa", lineHeight: 1.75, marginBottom: 24 }}>
              Beyond Canadian content, the full 25,000+ channel lineup spans US, UK, European,
              Middle Eastern, and South Asian networks — plus a 120,000+ title VOD library of
              movies and series, all accessible from the Firestick remote.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {[
                "TSN 1–5",
                "Sportsnet",
                "CBC",
                "CTV",
                "Global",
                "City TV",
                "RDS",
                "TVA Sports",
                "ESPN",
                "NFL Network",
                "Sky Sports",
                "beIN Sports",
              ].map((ch) => (
                <span
                  key={ch}
                  style={{
                    background: "#1a0505",
                    border: "1px solid #3a1010",
                    color: "#fff",
                    padding: "6px 16px",
                    borderRadius: 999,
                    fontSize: "0.85rem",
                    fontWeight: 600,
                  }}
                >
                  {ch}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Snapshot */}
        <section style={{ padding: "60px 16px", background: "#0f0f0f" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <h2
              style={{ color: "#fff", fontSize: "1.8rem", fontWeight: 700, marginBottom: 24 }}
            >
              Firestick IPTV Plans — Simple Canadian Pricing
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                gap: 16,
                marginBottom: 28,
              }}
            >
              {[
                { period: "1 Month", price: "$9" },
                { period: "3 Months", price: "$29" },
                { period: "6 Months", price: "$49" },
                { period: "12 Months", price: "$49" },
              ].map((plan) => (
                <div
                  key={plan.period}
                  style={{
                    background: "#111",
                    border: "1px solid #2a0a0a",
                    borderRadius: 14,
                    padding: "24px 20px",
                    textAlign: "center",
                  }}
                >
                  <div style={{ color: "#aaa", fontSize: "0.9rem", marginBottom: 8 }}>
                    {plan.period}
                  </div>
                  <div
                    style={{ color: "#E53935", fontSize: "1.6rem", fontWeight: 800 }}
                  >
                    {plan.price}
                  </div>
                </div>
              ))}
            </div>
            <div style={{ textAlign: "center" }}>
              <a
                href="/pricing"
                style={{
                  background: "#E53935",
                  color: "#fff",
                  padding: "14px 36px",
                  borderRadius: 12,
                  fontWeight: 700,
                  display: "inline-block",
                  textDecoration: "none",
                }}
              >
                See Full Pricing Details →
              </a>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          style={{ background: "#1a0505", padding: "60px 16px", textAlign: "center" }}
        >
          <div style={{ maxWidth: 700, margin: "0 auto" }}>
            <h2
              style={{ fontSize: "2rem", fontWeight: 800, marginBottom: 12 }}
            >
              Ready to Stream IPTV on Your Firestick?
            </h2>
            <p
              style={{ color: "#ccc", marginBottom: 32, fontSize: "1.05rem", lineHeight: 1.7 }}
            >
              Join thousands of Canadians already enjoying Maple4K. Try it free for 24
              hours — no credit card required. Questions? Email{" "}
              <a
                href="mailto:help@maple4k.ca"
                style={{ color: "#E53935", textDecoration: "none" }}
              >
                help@maple4k.ca
              </a>
              .
            </p>
            <div
              style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 16 }}
            >
              <a
                href="/pricing"
                style={{
                  background: "#E53935",
                  color: "#fff",
                  padding: "16px 40px",
                  borderRadius: 12,
                  fontWeight: 700,
                  display: "inline-block",
                  textDecoration: "none",
                }}
              >
                Get Your Maple4K Plan →
              </a>
              <a
                href="/free-trial"
                style={{
                  border: "2px solid #E53935",
                  color: "#E53935",
                  padding: "16px 40px",
                  borderRadius: 12,
                  fontWeight: 700,
                  display: "inline-block",
                  textDecoration: "none",
                }}
              >
                Try 24h Free
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
