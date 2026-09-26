import type { ReactNode } from "react";

export type SimpleFaqItem = { q: string; a: string };

const red = "#E8041F";

/** FAQ section + matching FAQPage JSON-LD (same styling as the SEO landing pages). */
export default function SimpleFaq({ title, items, bg = "#0C0F1A" }: { title: string; items: SimpleFaqItem[]; bg?: string }): ReactNode {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section style={{ padding: "60px 16px", background: bg }}>
        <div style={{ maxWidth: 820, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(22px, 2.5vw, 34px)", fontWeight: 800, marginBottom: 32, color: "#fff" }}>{title}</h2>
          {items.map(item => (
            <details key={item.q} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 12, overflow: "hidden", marginBottom: 10 }}>
              <summary style={{ padding: "18px 22px", cursor: "pointer", fontWeight: 600, fontSize: 15, listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center", color: "#fff" }}>
                {item.q}<span style={{ color: red }}>+</span>
              </summary>
              <p style={{ padding: "0 22px 18px", color: "rgba(255,255,255,0.6)", fontSize: 14, lineHeight: 1.7, margin: 0 }}>{item.a}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
