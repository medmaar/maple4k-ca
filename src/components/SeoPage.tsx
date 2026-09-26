import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import type { SeoPageData } from "../data/seo/types";
import { lookupLink, relatedFor } from "../data/seo";

const SITE = "https://maple4k.ca";
const bg = "#0C0F1A";
const bg2 = "#0E1120";
const red = "#E8041F";
const rs = { color: red } as const;
const h2Style = { fontSize: "clamp(22px, 2.5vw, 34px)", fontWeight: 800, marginBottom: 20 } as const;
const bodyText = { color: "rgba(255,255,255,0.65)", fontSize: 15, lineHeight: 1.75, margin: "0 0 16px" } as const;
const inlineLink = { color: red, textDecoration: "underline", textUnderlineOffset: 3 } as const;
const chip = { background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 8, padding: "6px 14px", fontSize: 13, color: "rgba(255,255,255,0.75)", textDecoration: "none", fontWeight: 500 } as const;

const LINK_RE = /\[([^\]]+)\]\((\/[^)\s]*)\)/g;

/** Renders "text [anchor](/path) text" with real <Link> elements. */
function rich(text: string): ReactNode[] {
  const parts: ReactNode[] = [];
  let last = 0;
  let m: RegExpExecArray | null;
  LINK_RE.lastIndex = 0;
  while ((m = LINK_RE.exec(text))) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    parts.push(<Link key={m.index} href={m[2]} style={inlineLink}>{m[1]}</Link>);
    last = m.index + m[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts;
}

const plain = (t: string) => t.replace(LINK_RE, "$1");

export function seoMetadata(p: SeoPageData): Metadata {
  const url = SITE + p.path;
  const languages: Record<string, string> = { [p.lang ?? "en-CA"]: url };
  for (const a of p.alt ?? []) languages[a.lang] = SITE + (a.path === "/" ? "" : a.path);
  const enAlt = (p.alt ?? []).find(a => a.lang === "en-CA");
  languages["x-default"] = enAlt ? SITE + (enAlt.path === "/" ? "" : enAlt.path) : url;
  const isArticle = p.kind === "blog";
  return {
    title: { absolute: p.title },
    description: p.description,
    keywords: p.keywords.join(", "),
    alternates: { canonical: url, languages },
    openGraph: {
      title: p.title,
      description: p.description,
      url,
      type: isArticle ? "article" : "website",
      siteName: "Maple4K",
      locale: (p.lang ?? "en-CA").replace("-", "_"),
      images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: `${p.label} – Maple4K` }],
    },
    twitter: { card: "summary_large_image", title: p.title, description: p.description, images: ["/og-image.jpg"] },
  };
}

function breadcrumbs(p: SeoPageData) {
  const trail: { name: string; item: string }[] = [{ name: p.lang === "fr-CA" ? "Accueil" : "Home", item: SITE }];
  if (p.hub) {
    const hub = lookupLink(p.hub);
    if (hub) trail.push({ name: hub.label, item: SITE + p.hub });
  }
  trail.push({ name: p.label, item: SITE + p.path });
  return trail;
}

export default function SeoPage({ page: p }: { page: SeoPageData }) {
  const fr = p.lang === "fr-CA";
  const url = SITE + p.path;
  const crumbs = breadcrumbs(p);
  const modified = p.dateModified ?? "2026-09-26";
  const published = p.datePublished ?? "2026-09-26";
  const related = relatedFor(p);
  const hubLinks = (p.hubLinks ?? []).filter(l => lookupLink(l));

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: p.faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: plain(f.a) } })),
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c.name, item: c.item })),
  };
  const pageSchema = p.kind === "blog"
    ? {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: p.h1.slice(0, 110),
        description: p.description,
        image: `${SITE}/og-image.jpg`,
        inLanguage: p.lang ?? "en-CA",
        author: { "@type": "Person", name: "Alex Tremblay", url: `${SITE}/about` },
        publisher: { "@type": "Organization", name: "Maple4K", url: SITE, logo: { "@type": "ImageObject", url: `${SITE}/favicon.svg` } },
        datePublished: published,
        dateModified: modified,
        mainEntityOfPage: { "@type": "WebPage", "@id": url },
      }
    : {
        "@context": "https://schema.org",
        "@type": p.kind === "hub" ? "CollectionPage" : "WebPage",
        ...(hubLinks.length > 0
          ? {
              mainEntity: {
                "@type": "ItemList",
                numberOfItems: hubLinks.length,
                itemListElement: hubLinks.map((l, i) => ({ "@type": "ListItem", position: i + 1, name: lookupLink(l)!.label, url: SITE + (l === "/" ? "" : l) })),
              },
            }
          : {}),
        publisher: { "@id": `${SITE}/#organization` },
        name: p.title,
        description: p.description,
        url,
        inLanguage: p.lang ?? "en-CA",
        isPartOf: { "@type": "WebSite", name: "Maple4K", url: SITE },
        datePublished: published,
        dateModified: modified,
      };
  const howToSchema = p.steps
    ? {
        "@context": "https://schema.org",
        "@type": "HowTo",
        name: p.steps.h2,
        step: p.steps.items.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: s.title, text: plain(s.body) })),
      }
    : null;

  const ctaTrial = fr ? "▶ Essai gratuit 24 h" : "▶ Free Trial 24H";
  const ctaPlans = fr ? "Voir les forfaits →" : "View Plans →";
  let band = p.quick ? 1 : 0;
  const nextBg = () => (band++ % 2 === 0 ? bg2 : bg);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {howToSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />}
      <main lang={p.lang ?? "en-CA"} style={{ background: bg, color: "#fff", minHeight: "100vh" }}>

        {/* Hero */}
        <section style={{ background: bg, padding: "80px 16px 60px" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <nav aria-label="Breadcrumb" style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", marginBottom: 22 }}>
              {crumbs.map((c, i) => (
                <span key={c.item}>
                  {i > 0 && <span style={{ margin: "0 8px" }}>›</span>}
                  {i < crumbs.length - 1
                    ? <Link href={c.item.replace(SITE, "") || "/"} style={{ color: "rgba(255,255,255,0.55)", textDecoration: "none" }}>{c.name}</Link>
                    : <span>{c.name}</span>}
                </span>
              ))}
            </nav>
            <span style={{ background: "rgba(232,4,31,0.12)", border: "1px solid rgba(232,4,31,0.3)", color: red, fontSize: 12, fontWeight: 700, padding: "4px 14px", borderRadius: 999, letterSpacing: "0.08em", textTransform: "uppercase" }}>
              {p.eyebrow}
            </span>
            <h1 style={{ fontSize: "clamp(32px, 5vw, 60px)", fontWeight: 900, margin: "24px 0 20px", lineHeight: 1.1 }}>{p.h1}</h1>
            <p style={{ fontSize: "clamp(15px, 1.8vw, 18px)", color: "rgba(255,255,255,0.7)", maxWidth: 720, marginBottom: 20, lineHeight: 1.65 }}>{rich(p.intro)}</p>
            <p style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", marginBottom: 30 }}>
              {fr ? "Mis à jour le" : "Updated"} {new Date(modified + "T12:00:00Z").toLocaleDateString(fr ? "fr-CA" : "en-CA", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" })} · {fr ? "Équipe Maple4K" : "Maple4K support team"}
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <Link href="/free-trial" className="btn-red">{ctaTrial}</Link>
              <Link href="/pricing" className="btn-outline">{ctaPlans}</Link>
            </div>
          </div>
        </section>

        {/* Quick answer */}
        {p.quick && (
          <section style={{ background: bg2, padding: "40px 16px" }}>
            <div style={{ maxWidth: 900, margin: "0 auto", background: "rgba(232,4,31,0.07)", border: "1px solid rgba(232,4,31,0.25)", borderRadius: 14, padding: "22px 26px" }}>
              <p style={{ margin: "0 0 8px", fontSize: 12, fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", color: red }}>{p.quick.label}</p>
              <p style={{ margin: 0, fontSize: 16, lineHeight: 1.7, color: "rgba(255,255,255,0.85)" }}>{rich(p.quick.text)}</p>
            </div>
          </section>
        )}

        {/* Content sections */}
        {p.sections.map(s => (
          <section key={s.h2} style={{ background: nextBg(), padding: "60px 16px" }}>
            <div style={{ maxWidth: 900, margin: "0 auto" }}>
              <h2 style={h2Style}>{s.h2}</h2>
              {(s.paras ?? []).map((t, i) => <p key={i} style={bodyText}>{rich(t)}</p>)}
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
                        {s.table.head.map((h, i) => (
                          <th key={h} style={{ padding: "14px 16px", textAlign: i === 0 ? "left" : "center", fontWeight: 700, color: i === 1 ? red : "#fff" }}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {s.table.rows.map((row, ri) => (
                        <tr key={ri} style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", background: ri % 2 === 0 ? "rgba(255,255,255,0.02)" : "transparent" }}>
                          {row.map((c, ci) => (
                            <td key={ci} style={{ padding: "12px 16px", textAlign: ci === 0 ? "left" : "center", color: ci === 0 ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.7)", fontWeight: ci === 0 ? 500 : 400 }}>{rich(c)}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
              {s.note && <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 13, marginTop: 8 }}>{rich(s.note)}</p>}
            </div>
          </section>
        ))}

        {/* Steps */}
        {p.steps && (
          <section style={{ padding: "60px 16px", background: nextBg() }}>
            <div style={{ maxWidth: 900, margin: "0 auto" }}>
              <h2 style={{ ...h2Style, marginBottom: 36 }}>{p.steps.h2}</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {p.steps.items.map((step, i) => (
                  <div key={step.title} style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
                    <div style={{ flexShrink: 0, width: 44, height: 44, borderRadius: "50%", background: red, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 17, fontWeight: 900 }}>{i + 1}</div>
                    <div style={{ paddingTop: 4 }}>
                      <h3 style={{ fontSize: 16, fontWeight: 700, margin: "0 0 8px" }}>{step.title}</h3>
                      <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 14, lineHeight: 1.7, margin: 0 }}>{rich(step.body)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Features */}
        {p.features && (
          <section style={{ padding: "60px 16px", background: nextBg() }}>
            <div style={{ maxWidth: 900, margin: "0 auto" }}>
              <h2 style={{ ...h2Style, marginBottom: 32 }}>{p.features.h2}</h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
                {p.features.items.map(f => (
                  <div key={f.title} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 14, padding: 22 }}>
                    <div style={{ fontSize: 28, marginBottom: 10 }}>{f.icon}</div>
                    <h3 style={{ fontSize: 15, fontWeight: 700, margin: "0 0 8px" }}>{f.title}</h3>
                    <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 13, lineHeight: 1.7, margin: 0 }}>{rich(f.body)}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Hub cards */}
        {hubLinks.length > 0 && (
          <section style={{ padding: "60px 16px", background: nextBg() }}>
            <div style={{ maxWidth: 1000, margin: "0 auto" }}>
              <h2 style={{ ...h2Style, marginBottom: 28 }}>{fr ? "Tous les guides" : "All guides in this section"}</h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
                {hubLinks.map(l => {
                  const info = lookupLink(l)!;
                  return (
                    <Link key={l} href={l} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 14, padding: "18px 20px", textDecoration: "none", color: "#fff", display: "block" }}>
                      <span style={{ fontWeight: 700, fontSize: 15, display: "block", marginBottom: 6 }}>{info.label}</span>
                      <span style={{ color: "rgba(255,255,255,0.55)", fontSize: 13, lineHeight: 1.6 }}>{info.blurb}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* FAQ */}
        <section style={{ padding: "60px 16px", background: nextBg() }}>
          <div style={{ maxWidth: 820, margin: "0 auto" }}>
            <h2 style={{ ...h2Style, marginBottom: 32 }}>{p.faqTitle ?? `${p.label} — FAQ`}</h2>
            {p.faqs.map(item => (
              <details key={item.q} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 12, overflow: "hidden", marginBottom: 10 }}>
                <summary style={{ padding: "18px 22px", cursor: "pointer", fontWeight: 600, fontSize: 15, listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  {item.q}<span style={rs}>+</span>
                </summary>
                <p style={{ padding: "0 22px 18px", color: "rgba(255,255,255,0.6)", fontSize: 14, lineHeight: 1.7, margin: 0 }}>{rich(item.a)}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Sources */}
        {p.sources && p.sources.length > 0 && (
          <section style={{ padding: "40px 16px", background: nextBg() }}>
            <div style={{ maxWidth: 900, margin: "0 auto" }}>
              <h2 style={{ fontSize: 13, fontWeight: 700, color: red, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 14 }}>{fr ? "Sources et lectures utiles" : "Sources & further reading"}</h2>
              <ul style={{ margin: 0, paddingLeft: 20, color: "rgba(255,255,255,0.6)", fontSize: 14, lineHeight: 1.8 }}>
                {p.sources.map(x => <li key={x.url}><a href={x.url} target="_blank" rel="noopener noreferrer" style={inlineLink}>{x.label}</a></li>)}
              </ul>
            </div>
          </section>
        )}

        {/* Related */}
        {related.length > 0 && (
          <section style={{ padding: "50px 16px", background: nextBg() }}>
            <div style={{ maxWidth: 900, margin: "0 auto" }}>
              <h2 style={{ fontSize: 13, fontWeight: 700, color: red, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 16 }}>{fr ? "À lire aussi" : "Related guides"}</h2>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {related.map(l => <Link key={l} href={l} style={chip}>{lookupLink(l)!.label}</Link>)}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section style={{ padding: "80px 16px", background: nextBg(), textAlign: "center" }}>
          <div style={{ maxWidth: 580, margin: "0 auto" }}>
            <h2 style={{ fontSize: "clamp(26px, 3.5vw, 42px)", fontWeight: 900, marginBottom: 20 }}>{p.ctaTitle}</h2>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 15, lineHeight: 1.7, marginBottom: 36 }}>{p.ctaText}</p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/free-trial" className="btn-red">{ctaTrial}</Link>
              <Link href="/pricing" className="btn-outline">{ctaPlans}</Link>
            </div>
            {p.notAffiliated && (
              <p style={{ marginTop: 28, fontSize: 12, color: "rgba(255,255,255,0.3)", lineHeight: 1.6 }}>
                {fr
                  ? `Maple4K n'est pas affilié à ${p.notAffiliated}. Les noms de produits appartiennent à leurs propriétaires et servent uniquement à décrire la compatibilité.`
                  : `Maple4K is not affiliated with ${p.notAffiliated}. Product names belong to their owners and are used only to describe compatibility.`}
              </p>
            )}
          </div>
        </section>
      </main>
    </>
  );
}
