import Link from "next/link";
import type { ReactNode } from "react";
import { existingExtras } from "../data/seo/extras-all";

const red = "#E8041F";
const LINK_RE = /\[([^\]]+)\]\((\/[^)\s]*)\)/g;

function rich(text: string): ReactNode[] {
  const parts: ReactNode[] = [];
  let last = 0;
  let m: RegExpExecArray | null;
  LINK_RE.lastIndex = 0;
  while ((m = LINK_RE.exec(text))) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    parts.push(<Link key={m.index} href={m[2]} style={{ color: red, textDecoration: "underline", textUnderlineOffset: 3 }}>{m[1]}</Link>);
    last = m.index + m[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts;
}

/** Extra keyword-targeted content + JSON-LD appended to older hand-written pages. */
export default function ExtraSections({ path }: { path: string }) {
  const x = existingExtras[path];
  if (!x) return null;
  const body = { color: "rgba(255,255,255,0.65)", fontSize: 15, lineHeight: 1.75, margin: "0 0 16px" } as const;
  return (
    <>
      {(x.jsonld ?? []).map((j, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(j) }} />
      ))}
      {x.sections.map((s, si) => (
        <section key={s.h2} style={{ background: si % 2 === 0 ? "#0E1120" : "#0C0F1A", padding: "60px 16px", color: "#fff" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <h2 style={{ fontSize: "clamp(22px, 2.5vw, 34px)", fontWeight: 800, marginBottom: 20 }}>{s.h2}</h2>
            {(s.paras ?? []).map((t, i) => <p key={i} style={body}>{rich(t)}</p>)}
            {s.bullets && (
              <ul style={{ margin: "0 0 16px", paddingLeft: 22, color: "rgba(255,255,255,0.65)", fontSize: 15, lineHeight: 1.75 }}>
                {s.bullets.map((b, i) => <li key={i} style={{ marginBottom: 8 }}>{rich(b)}</li>)}
              </ul>
            )}
            {s.table && (
              <div style={{ overflowX: "auto", margin: "8px 0 16px" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
                  <thead>
                    <tr style={{ background: "rgba(232,4,31,0.12)", borderBottom: "2px solid rgba(232,4,31,0.3)" }}>
                      {s.table.head.map((h, i) => <th key={h} style={{ padding: "14px 16px", textAlign: i === 0 ? "left" : "center", fontWeight: 700, color: i === 1 ? red : "#fff" }}>{h}</th>)}
                    </tr>
                  </thead>
                  <tbody>
                    {s.table.rows.map((row, ri) => (
                      <tr key={ri} style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", background: ri % 2 === 0 ? "rgba(255,255,255,0.02)" : "transparent" }}>
                        {row.map((c, ci) => <td key={ci} style={{ padding: "12px 16px", textAlign: ci === 0 ? "left" : "center", color: "rgba(255,255,255,0.7)" }}>{rich(c)}</td>)}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            {s.note && <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 13 }}>{rich(s.note)}</p>}
          </div>
        </section>
      ))}
      {x.qas && x.qas.length > 0 && (
        <section style={{ background: "#0C0F1A", padding: "40px 16px 60px", color: "#fff" }}>
          <div style={{ maxWidth: 820, margin: "0 auto" }}>
            <h2 style={{ fontSize: "clamp(20px, 2.2vw, 28px)", fontWeight: 800, marginBottom: 20 }}>More questions</h2>
            {x.qas.map(q => (
              <details key={q.q} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 12, marginBottom: 10 }}>
                <summary style={{ padding: "16px 22px", cursor: "pointer", fontWeight: 600, fontSize: 15, listStyle: "none", display: "flex", justifyContent: "space-between" }}>{q.q}<span style={{ color: red }}>+</span></summary>
                <p style={{ padding: "0 22px 16px", color: "rgba(255,255,255,0.6)", fontSize: 14, lineHeight: 1.7, margin: 0 }}>{rich(q.a)}</p>
              </details>
            ))}
          </div>
        </section>
      )}
      {x.sources && x.sources.length > 0 && (
        <section style={{ background: "#0E1120", padding: "36px 16px", color: "#fff" }}>
          <div style={{ maxWidth: 820, margin: "0 auto" }}>
            <h2 style={{ fontSize: 13, fontWeight: 700, color: red, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 14 }}>Sources &amp; further reading</h2>
            <ul style={{ margin: 0, paddingLeft: 20, color: "rgba(255,255,255,0.6)", fontSize: 14, lineHeight: 1.8 }}>
              {x.sources.map(s => <li key={s.url}><a href={s.url} target="_blank" rel="noopener noreferrer" style={{ color: red, textDecoration: "underline", textUnderlineOffset: 3 }}>{s.label}</a></li>)}
            </ul>
          </div>
        </section>
      )}
    </>
  );
}
