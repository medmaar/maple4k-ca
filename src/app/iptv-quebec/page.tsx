import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: { absolute: "IPTV Québec 2026 — 50,000+ Chaînes + Netflix dès 9$/mois | Maple4K" },
  description: "Meilleur service IPTV Québec 2026. TVA, RDS, ICI Radio-Canada, Noovo, V Télé en 4K Ultra HD. Essai gratuit 24h sans carte de crédit. IPTV abonnement dès 9$/mois.",
  keywords: "iptv québec, iptv canada, iptv montreal, iptv abonnement québec, meilleur iptv québec, iptv service québec, iptv 4k québec, iptv near me, iptv subscription canada",
  alternates: { canonical: "https://maple4k.ca/iptv-quebec" },
};

const qcChannels = [
  "TVA","TVA Sports","TVA Sports 2","TVA Sports 3","RDS","RDS 2","RDS Info",
  "ICI Radio-Canada Télé","ICI RDI","ICI ARTV","ICI Explora","Noovo","Noovo Info",
  "V Télé","Télé-Québec","LCN","Canal D","Séries+","Historia","Canal Vie","VRAK",
  "Max (Super Écran)","Crave","Unis TV","TV5 Québec Canada","Évasion","Zeste","Casa",
];

const faqs = [
  { q: "Quel est le meilleur service IPTV au Québec en 2026?", a: "Maple4K est le choix numéro un au Québec avec 50,000+ chaînes incluant TVA, RDS, Noovo, ICI Radio-Canada et toutes les chaînes francophones en 4K." },
  { q: "L'IPTV est-il légal au Québec?", a: "La technologie IPTV est légale au Canada et au Québec. C'est la même technologie utilisée par les grandes télécoms. Maple4K opère selon les standards de diffusion canadiens." },
  { q: "Est-ce que je peux avoir un essai gratuit?", a: "Oui — essai gratuit 24h sans carte de crédit. Contactez-nous via WhatsApp ou courriel pour l'activer immédiatement." },
  { q: "Sur quels appareils puis-je utiliser l'IPTV?", a: "Maple4K fonctionne sur Firestick, Apple TV, Android TV, Smart TV Samsung/LG, iPhone, Android, MAG Box et ordinateurs." },
  { q: "Combien coûte un abonnement IPTV Québec?", a: "Dès 9$/mois pour 1 connexion. Forfaits 3, 6 et 12 mois disponibles avec économies jusqu'à 50%." },
];

export default function IptvQuebecPage() {
  return (
    <main style={{ background: "#0C0F1A", color: "#fff", minHeight: "100vh" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />

      <section style={{ padding: "80px 16px 60px", textAlign: "center", background: "#0E1120", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <span style={{ display: "inline-block", background: "rgba(232,4,31,0.12)", border: "1px solid rgba(232,4,31,0.3)", color: "#E8041F", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", padding: "6px 18px", borderRadius: 999, marginBottom: 24 }}>IPTV Québec 2026</span>
          <h1 style={{ fontSize: "clamp(2rem,5vw,3.2rem)", fontWeight: 900, marginBottom: 20, lineHeight: 1.1 }}>
            Meilleur Service <span style={{ color: "#E8041F" }}>IPTV Québec</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 17, lineHeight: 1.7, marginBottom: 36, maxWidth: 560, margin: "0 auto 36px" }}>
            50,000+ chaînes + Netflix — TVA, RDS, ICI Radio-Canada, Noovo et toutes les chaînes québécoises en <strong style={{ color: "#fff" }}>4K Ultra HD</strong>. Dès <strong style={{ color: "#E8041F" }}>9$/mois</strong>.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/free-trial" style={{ background: "#E8041F", color: "#fff", padding: "16px 40px", borderRadius: 14, fontWeight: 800, fontSize: 16, textDecoration: "none", boxShadow: "0 6px 24px rgba(232,4,31,0.4)" }}>▶ Essai Gratuit 24H</Link>
            <Link href="/pricing" style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.15)", color: "#fff", padding: "16px 32px", borderRadius: 14, fontWeight: 700, fontSize: 16, textDecoration: "none" }}>Voir les forfaits →</Link>
          </div>
        </div>
      </section>

      <section style={{ padding: "60px 16px", background: "#0C0F1A" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(1.4rem,3vw,2rem)", fontWeight: 900, marginBottom: 12, textAlign: "center" }}>Chaînes Québécoises Incluses</h2>
          <p style={{ color: "rgba(255,255,255,0.55)", textAlign: "center", marginBottom: 32, fontSize: 14 }}>Toutes vos chaînes francophones préférées — sans supplément</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" }}>
            {qcChannels.map(ch => (
              <span key={ch} style={{ background: "rgba(232,4,31,0.08)", border: "1px solid rgba(232,4,31,0.2)", color: "rgba(255,255,255,0.85)", fontSize: 13, fontWeight: 600, padding: "8px 16px", borderRadius: 10 }}>{ch}</span>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "60px 16px", background: "#0E1120" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(1.4rem,3vw,2rem)", fontWeight: 900, marginBottom: 32, textAlign: "center" }}>Questions Fréquentes — IPTV Québec</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {faqs.map(f => (
              <details key={f.q} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 14, overflow: "hidden" }}>
                <summary style={{ padding: "18px 22px", cursor: "pointer", fontWeight: 600, fontSize: 15, color: "#fff", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  {f.q}<span style={{ color: "#E8041F", fontSize: 18, fontWeight: 400, flexShrink: 0, marginLeft: 12 }}>+</span>
                </summary>
                <p style={{ padding: "0 22px 18px", color: "rgba(255,255,255,0.6)", fontSize: 14, lineHeight: 1.7, margin: 0 }}>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 16px", textAlign: "center", background: "linear-gradient(135deg, #0E1120, #1a0510 50%, #0E1120)" }}>
        <div style={{ maxWidth: 560, margin: "0 auto" }}>
          <h2 style={{ fontWeight: 900, fontSize: "clamp(1.6rem,3vw,2.2rem)", marginBottom: 16 }}>Commencez à Streamer Aujourd&apos;hui</h2>
          <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: 32, fontSize: 15, lineHeight: 1.7 }}>Accès instantané à toutes les chaînes québécoises. Essai gratuit 24h sans carte de crédit.</p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/free-trial" style={{ background: "#E8041F", color: "#fff", padding: "16px 36px", borderRadius: 14, fontWeight: 800, fontSize: 16, textDecoration: "none", boxShadow: "0 6px 24px rgba(232,4,31,0.4)" }}>▶ Essai Gratuit 24H</Link>
            <Link href="/pricing" style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.15)", color: "#fff", padding: "16px 28px", borderRadius: 14, fontWeight: 700, fontSize: 16, textDecoration: "none" }}>Forfaits →</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
