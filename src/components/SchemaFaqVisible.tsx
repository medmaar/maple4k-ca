type Q = { name?: string; acceptedAnswer?: { text?: string }; q?: string; a?: string };

/** Renders a visible FAQ from an existing FAQPage schema object so markup always matches page content. */
export default function SchemaFaqVisible({ schema, title = "Frequently asked questions" }: { schema: { mainEntity?: Q[] }; title?: string }) {
  const items = (schema.mainEntity ?? []).map(x => ({ q: x.name ?? x.q ?? "", a: x.acceptedAnswer?.text ?? x.a ?? "" })).filter(x => x.q && x.a);
  if (!items.length) return null;
  return (
    <section style={{ background: "#0C0F1A", padding: "50px 16px", color: "#fff" }}>
      <div style={{ maxWidth: 820, margin: "0 auto" }}>
        <h2 style={{ fontSize: "clamp(20px, 2.2vw, 28px)", fontWeight: 800, marginBottom: 20 }}>{title}</h2>
        {items.map(f => (
          <details key={f.q} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 12, marginBottom: 10 }}>
            <summary style={{ padding: "16px 22px", cursor: "pointer", fontWeight: 600, fontSize: 15, listStyle: "none", display: "flex", justifyContent: "space-between" }}>{f.q}<span style={{ color: "#E8041F" }}>+</span></summary>
            <p style={{ padding: "0 22px 16px", color: "rgba(255,255,255,0.6)", fontSize: 14, lineHeight: 1.7, margin: 0 }}>{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
