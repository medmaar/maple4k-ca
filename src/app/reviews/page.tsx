"use client";
import { useState } from "react";
import type { Metadata } from "next";

const trustpilotReviews = [
  { name: "David L.", location: "Toronto, ON", rating: 5, title: "Best IPTV I've tried in Canada", text: "Switched from two other services before finding Maple4K. The 4K quality is genuinely different — sharper and no buffering even during Leafs playoff games. Setup took less than 10 minutes on my Firestick." },
  { name: "Sarah M.", location: "Vancouver, BC", rating: 5, title: "Finally a service that just works", text: "I've been with Maple4K for 6 months and I have zero complaints. TSN, Sportsnet, CBC — all crystal clear. Customer support responded within minutes when I had a setup question." },
  { name: "Ahmed K.", location: "Calgary, AB", rating: 5, title: "Incredible channel selection", text: "The Arabic and Middle Eastern channels are perfect quality. My family watches Al Jazeera and MBC daily without any issues. The 4K sports channels are a huge bonus." },
  { name: "Jennifer R.", location: "Ottawa, ON", rating: 5, title: "Reliable and affordable", text: "Cut cable 8 months ago and haven't looked back. Everything from kids channels to live sports to international content. The annual plan is incredible value." },
  { name: "Michael T.", location: "Montreal, QC", rating: 5, title: "RDS and TVA in perfect quality", text: "As a Habs fan living in Montreal, getting RDS in 4K is everything. The French Canadian channels are all there, no buffering during games. Highly recommend." },
  { name: "Priya S.", location: "Mississauga, ON", rating: 5, title: "Great for the whole family", text: "Kids channels, Bollywood movies, sports, and news — Maple4K has it all. The multi-device plan means everyone watches what they want. Brilliant service." },
  { name: "James W.", location: "Edmonton, AB", rating: 5, title: "Oilers games finally in 4K", text: "Every Oilers game on Sportsnet and TSN with zero blackouts. The picture quality is noticeably better than anything I had before. Fast activation too — was watching within 10 minutes." },
  { name: "Natasha B.", location: "Winnipeg, MB", rating: 4, title: "Very good overall", text: "Solid service with excellent channel coverage. Occasionally had one channel freeze but it resolved itself quickly. Support team was helpful and responsive. Would definitely recommend." },
  { name: "Carlos M.", location: "Brampton, ON", rating: 5, title: "Portuguese and Spanish channels are great", text: "The Latin American and Portuguese channels I was struggling to find elsewhere are all here in HD. My whole family is happy. The price is very fair for what you get." },
  { name: "Lisa H.", location: "Halifax, NS", rating: 5, title: "No more cable bills", text: "Cancelled Bell after 12 years thanks to Maple4K. I pay less per month now and get 10x the channels. The 24h free trial convinced me immediately — the quality speaks for itself." },
  { name: "Kevin O.", location: "Saskatoon, SK", rating: 5, title: "Smooth setup and great support", text: "The WhatsApp support team walked me through setup on my Samsung TV in under 5 minutes. Streams are stable and the EPG works perfectly. Very impressed." },
  { name: "Fatima A.", location: "Toronto, ON", rating: 5, title: "Amazing value", text: "The 12-month plan is an absolute steal. HD and 4K quality, all Canadian channels plus international ones. I recommended it to my whole family and they all subscribed." },
];

const whatsappReviews = [
  { name: "Ryan C.", flag: "🇨🇦", text: "All good on my side now. Streams are stable even during Raptors games. Big difference compared to my old IPTV provider." },
  { name: "Amira T.", flag: "🇨🇦", text: "Activated in minutes, everything works perfectly. The picture on my LG OLED is stunning — especially the 4K sports channels." },
  { name: "Tom B.", flag: "🇨🇦", text: "Customer service is excellent. Had a small issue at midnight and got a response within 5 minutes. Problem sorted immediately. Rare to see support like this." },
  { name: "Sonia K.", flag: "🇨🇦", text: "Been using Maple4K for 3 months now. Stable streams, great channel list. The NHL package is flawless — every game, no blackouts." },
  { name: "Marcus L.", flag: "🇨🇦", text: "Working perfectly now. Customer service was very patient explaining the setup on my MAG box. Quality is solid and the VOD library is huge." },
  { name: "Diana F.", flag: "🇨🇦", text: "Switched from Rogers cable last month. Saving $110 a month and getting way more channels. The 4K quality is actually better than cable was." },
  { name: "Hassan M.", flag: "🇨🇦", text: "The Arabic news channels and sports are perfect quality. Setup was instant. My family watches Al Arabiya and beIN Sports daily without any buffering." },
  { name: "Kelly R.", flag: "🇨🇦", text: "Renewed for another year. Honestly the best $49 I spend annually. Every channel works, the app is smooth, and support is always there if needed." },
];

const googleReviews = [
  { name: "Matthew Collins", rating: 5, text: "I've used a few IPTV services over the years and Maple4K is the first one that didn't disappoint after the first week. Channels load fast, sports are smooth, and the quality stays consistent. Had one small issue during setup and support answered quickly and fixed it right away. Overall very solid service." },
  { name: "Daniel Thompson", rating: 5, text: "Switched from an IPTV provider that kept buffering during live games. Maple4K has been much better so far. Streams are stable and customer service actually replies when you message them. That alone makes a big difference compared to what I had before." },
  { name: "Christopher Miller", rating: 5, text: "Activation was fast and everything worked as expected. I mainly use it for live sports and movies, and I haven't had any major problems. I contacted support once with a question and they were polite and helpful. Definitely better than my previous IPTV service." },
  { name: "Amanda Chen", rating: 5, text: "The channel selection is massive and the 4K quality on my Samsung TV is genuinely impressive. I was skeptical at first but the free trial convinced me immediately. Six months in and still very happy." },
  { name: "Patrick O'Brien", rating: 5, text: "As a sports fan, this is everything I needed. All TSN channels, Sportsnet, NFL Network, beIN Sports — all in 4K. No blackouts, no buffering during peak times. Worth every cent." },
  { name: "Michelle Torres", rating: 4, text: "Great service overall. The VOD library alone is worth the subscription. Occasionally a single channel will freeze for a second but it's rare. Support was quick to help when I reached out. Recommended." },
  { name: "Andrew Park", rating: 5, text: "Cancelled my Bell Fibe TV after 8 years. Maple4K gives me everything I had and more for a fraction of the cost. The setup guide was clear and everything works flawlessly on my Firestick and Apple TV." },
  { name: "Rebecca Wilson", rating: 5, text: "The customer service is what really sets Maple4K apart. They're available on WhatsApp and actually respond quickly. The streams are reliable and the picture quality is excellent. Very happy customer." },
  { name: "Yusuf Ibrahim", rating: 5, text: "Perfect for my family. We watch Arabic, French, and English channels and all of them work great. The 4K quality on the sports channels is incredible. Best IPTV service I've found in Canada." },
];

const STARS = (n: number) => "★".repeat(n) + "☆".repeat(5 - n);

export default function ReviewsPage() {
  const [tpPage, setTpPage] = useState(0);
  const [waPage, setWaPage] = useState(0);
  const [gPage, setGPage] = useState(0);

  const tpPerPage = 1;
  const waPerPage = 2;
  const gPerPage = 3;

  const tpTotal = Math.ceil(trustpilotReviews.length / tpPerPage);
  const waTotal = Math.ceil(whatsappReviews.length / waPerPage);
  const gTotal = Math.ceil(googleReviews.length / gPerPage);

  const tpVisible = trustpilotReviews.slice(tpPage * tpPerPage, (tpPage + 1) * tpPerPage);
  const waVisible = whatsappReviews.slice(waPage * waPerPage, (waPage + 1) * waPerPage);
  const gVisible = googleReviews.slice(gPage * gPerPage, (gPage + 1) * gPerPage);

  const Dots = ({ total, current, set }: { total: number; current: number; set: (n: number) => void }) => (
    <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 24 }}>
      {Array.from({ length: total }).map((_, i) => (
        <button key={i} onClick={() => set(i)} style={{
          width: i === current ? 24 : 10, height: 10,
          borderRadius: 99, border: "none", cursor: "pointer",
          background: i === current ? "#F96E5B" : "rgba(63,154,174,0.3)",
          transition: "all 0.3s ease", padding: 0,
        }} />
      ))}
    </div>
  );

  return (
    <main style={{ background: "linear-gradient(to left, #daf0f2 0%, #fce8e4 100%)", minHeight: "100vh", color: "#000000" }}>

      {/* Hero */}
      <section style={{ padding: "48px 16px 32px" }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <div style={{ background: "#1A3D45", borderRadius: 24, padding: "28px 24px", boxShadow: "0 8px 32px rgba(26,61,69,0.25)", textAlign: "center" }}>
            <span style={{ display: "inline-block", background: "rgba(249,110,91,0.18)", border: "1px solid rgba(249,110,91,0.4)", color: "#F96E5B", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", padding: "5px 16px", borderRadius: 999, marginBottom: 20 }}>
              Verified Reviews
            </span>
            <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 900, color: "#ffffff", lineHeight: 1.1, marginBottom: 14 }}>
              What Canadians Say About <span style={{ color: "#F96E5B" }}>Maple4K</span>
            </h1>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 14, marginBottom: 20 }}>
              Real feedback from customers across Trustpilot, WhatsApp, and Google.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 20, fontSize: 14, color: "rgba(255,255,255,0.75)" }}>
              <span><span style={{ color: "#79C9C5" }}>★★★★★</span> Trustpilot</span>
              <span><span style={{ color: "#25D366" }}>✓</span> WhatsApp</span>
              <span><span style={{ color: "#F96E5B" }}>★★★★★</span> Google</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: "0 16px 48px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 16 }}>
          {[
            { val: "5.0", label: "Trustpilot Score", color: "#F96E5B" },
            { val: "500+", label: "Happy Customers", color: "#3F9AAE" },
            { val: "4.9★", label: "Google Rating", color: "#F96E5B" },
            { val: "24/7", label: "Support Available", color: "#3F9AAE" },
          ].map(s => (
            <div key={s.val} style={{ background: "#1A3D45", borderRadius: 16, padding: "20px 16px", textAlign: "center", boxShadow: "0 4px 16px rgba(26,61,69,0.2)" }}>
              <div style={{ fontSize: 28, fontWeight: 900, color: s.color }}>{s.val}</div>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.7)", marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Trustpilot */}
      <section style={{ padding: "0 16px 60px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <p style={{ textAlign: "center", color: "#F96E5B", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 10 }}>Maple4K · Trustpilot</p>
          <h2 style={{ textAlign: "center", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 900, color: "#000000", marginBottom: 32 }}>Trustpilot Reviews for Maple4K IPTV</h2>

          {tpVisible.map((r, i) => (
            <div key={i} style={{ background: "#ffffff", borderRadius: 20, padding: "32px 36px", boxShadow: "0 4px 24px rgba(63,154,174,0.12)", border: "1px solid rgba(63,154,174,0.15)" }}>
              <div style={{ display: "flex", gap: 4, marginBottom: 12 }}>
                {Array.from({ length: r.rating }).map((_, j) => (
                  <span key={j} style={{ color: "#00b67a", fontSize: 22 }}>★</span>
                ))}
              </div>
              <h3 style={{ fontWeight: 700, fontSize: 18, marginBottom: 12, color: "#000000" }}>{r.title}</h3>
              <p style={{ color: "#000000", lineHeight: 1.75, fontSize: 15, marginBottom: 20 }}>{r.text}</p>
              <p style={{ color: "#3F9AAE", fontWeight: 600, fontSize: 13 }}>— {r.name} · {r.location} 🍁</p>
            </div>
          ))}

          <Dots total={tpTotal} current={tpPage} set={setTpPage} />
        </div>
      </section>

      {/* WhatsApp */}
      <section style={{ padding: "0 16px 60px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <p style={{ textAlign: "center", color: "#25D366", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 10 }}>Maple4K · WhatsApp</p>
          <h2 style={{ textAlign: "center", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 900, color: "#000000", marginBottom: 32 }}>WhatsApp Reviews for Maple4K IPTV</h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            {waVisible.map((r, i) => (
              <div key={i} style={{ background: "#ffffff", borderRadius: 16, padding: "24px 24px", boxShadow: "0 4px 20px rgba(63,154,174,0.1)", border: "1px solid rgba(63,154,174,0.15)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                  <div style={{ width: 36, height: 36, borderRadius: "50%", background: "#25D366", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  </div>
                  <span style={{ fontWeight: 700, fontSize: 14, color: "#000000" }}>WhatsApp</span>
                </div>
                <p style={{ color: "#000000", lineHeight: 1.7, fontSize: 14, marginBottom: 14 }}>{r.text}</p>
                <p style={{ color: "#3F9AAE", fontWeight: 600, fontSize: 13 }}>— {r.name} {r.flag}</p>
              </div>
            ))}
          </div>

          <Dots total={waTotal} current={waPage} set={setWaPage} />
        </div>
      </section>

      {/* Google */}
      <section style={{ padding: "0 16px 60px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={{ textAlign: "center", color: "#F96E5B", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 10 }}>Maple4K · Google</p>
          <h2 style={{ textAlign: "center", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 900, color: "#000000", marginBottom: 32 }}>Google Reviews for Maple4K IPTV</h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            {gVisible.map((r, i) => (
              <div key={i} style={{ background: "#ffffff", borderRadius: 16, padding: "24px 24px", boxShadow: "0 4px 20px rgba(63,154,174,0.1)", border: "1px solid rgba(63,154,174,0.15)" }}>
                <div style={{ display: "flex", gap: 2, marginBottom: 10 }}>
                  {Array.from({ length: r.rating }).map((_, j) => (
                    <span key={j} style={{ color: "#FBBC04", fontSize: 18 }}>★</span>
                  ))}
                </div>
                <p style={{ fontWeight: 700, fontSize: 15, color: "#000000", marginBottom: 10 }}>{r.name}</p>
                <p style={{ color: "#000000", lineHeight: 1.7, fontSize: 14 }}>{r.text}</p>
              </div>
            ))}
          </div>

          <Dots total={gTotal} current={gPage} set={setGPage} />
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "60px 16px", background: "#1A3D45", textAlign: "center" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 900, color: "#ffffff", marginBottom: 14 }}>Join 500+ Happy Canadians</h2>
          <p style={{ color: "rgba(255,255,255,0.75)", marginBottom: 28, fontSize: 15 }}>Try Maple4K free for 24 hours — no credit card required.</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center" }}>
            <a href="/free-trial" style={{ background: "#F96E5B", color: "#fff", padding: "14px 32px", borderRadius: 12, fontWeight: 700, fontSize: 15, textDecoration: "none", boxShadow: "0 6px 20px rgba(249,110,91,0.4)" }}>Get Free Trial</a>
            <a href="/pricing" style={{ background: "transparent", border: "2px solid #79C9C5", color: "#79C9C5", padding: "14px 32px", borderRadius: 12, fontWeight: 700, fontSize: 15, textDecoration: "none" }}>View Plans</a>
          </div>
        </div>
      </section>

    </main>
  );
}
