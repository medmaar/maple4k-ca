import Link from "next/link";

export default function NotFound() {
  return (
    <main style={{ background: "linear-gradient(to left, #daf0f2 0%, #fce8e4 100%)", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "40px 16px" }}>
      <div style={{ maxWidth: 600, width: "100%", textAlign: "center" }}>
        <p style={{ fontSize: 80, fontWeight: 900, color: "#F96E5B", lineHeight: 1, marginBottom: 8 }}>404</p>
        <h1 style={{ fontSize: "clamp(1.5rem, 4vw, 2.2rem)", fontWeight: 800, marginBottom: 16, color: "#000" }}>Page Not Found</h1>
        <p style={{ color: "#444", lineHeight: 1.7, marginBottom: 32, fontSize: "1.05rem" }}>
          The page you&apos;re looking for doesn&apos;t exist. Here are some helpful links to get you back on track.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 12, marginBottom: 32 }}>
          {[
            ["/", "🏠 Home"],
            ["/pricing", "💰 Pricing"],
            ["/free-trial", "🎁 Free Trial"],
            ["/best-iptv-canada", "🏆 Best IPTV Canada"],
            ["/iptv-4k", "📺 4K IPTV"],
            ["/iptv-subscription", "📋 Subscriptions"],
            ["/smart-iptv", "📡 Smart IPTV"],
            ["/blog", "📝 Blog"],
          ].map(([href, label]) => (
            <Link key={href} href={href} style={{ background: "#fff", border: "1px solid rgba(63,154,174,0.2)", borderRadius: 10, padding: "12px 16px", textDecoration: "none", color: "#000", fontWeight: 600, fontSize: 14, display: "block" }}>{label}</Link>
          ))}
        </div>
        <Link href="/free-trial" style={{ background: "#F96E5B", color: "#fff", padding: "14px 40px", borderRadius: 10, fontWeight: 700, textDecoration: "none", display: "inline-block" }}>
          Try Maple4K Free →
        </Link>
      </div>
    </main>
  );
}
