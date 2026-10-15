"use client";
import { useState } from "react";

// Referral form — same design and flow as iptvmapletv.com/refer-a-friend/.
// Sent through the same EmailJS service/template/key as this site's order forms.
const EMAILJS = { service: "service_mq69xac", template: "template_6gpfu3m", publicKey: "BE3GO7hcQXUJAnRBV" };
const SITE_NAME = "Maple4K.ca";
const WA_URL = "/link/wa?msg=Hi%20Maple4K!%20I%20just%20submitted%20a%20referral.";
const T = {
  "title": "Submit a referral",
  "req": "All fields are required.",
  "g1": "Your details",
  "g1s": "The person referring",
  "g2": "Your friend’s details",
  "g2s": "The new customer you’re referring",
  "name": "Name",
  "phone": "Phone (WhatsApp)",
  "email": "Email",
  "ph1n": "E.g. John Smith",
  "ph2n": "E.g. Mike Brown",
  "ph1e": "you@example.com",
  "ph2e": "friend@example.com",
  "submit": "Submit referral",
  "sending": "Sending…",
  "err_req": "Please fill in this field.",
  "err_email": "Please enter a valid email.",
  "err_phone": "Please enter a valid phone number.",
  "fail": "Something went wrong. Please try again or message us on WhatsApp.",
  "ok_t": "Referral received!",
  "ok_p": "Thank you! We’ve got your referral. As soon as your friend’s 12-month plan is paid, we’ll add <b>6 months free</b> to your account and let you know on WhatsApp.",
  "again": "Refer another friend",
  "wa": "Confirm on WhatsApp",
  "subj": "New referral",
  "plan": "Referral program — 6 months free",
  "referrer": "REFERRER",
  "friend": "FRIEND"
};
const C = {
  "inputBg": "rgba(255,255,255,.04)",
  "line": "rgba(255,255,255,.14)",
  "text": "#fff",
  "label": "#dfe3ec",
  "heading": "#fff",
  "muted": "#a4aaba",
  "placeholder": "#6b7183",
  "numText": "#0b0c12",
  "panel": "#0e1119",
  "acc1": "#E8041F",
  "acc2": "#3F9AAE",
  "cta": "linear-gradient(120deg,#E8041F 0%,#F96E5B 100%)",
  "ctaShadow": "0 18px 50px -12px rgba(232,4,31,.55)"
};

type Who = "r" | "f";
type Key = `${Who}_${"name" | "phone" | "email"}`;
const EMPTY: Record<Key, string> = { r_name: "", r_phone: "", r_email: "", f_name: "", f_phone: "", f_email: "" };

function validate(k: Key, v: string): string {
  const s = v.trim();
  if (!s) return T.err_req;
  if (k.endsWith("email") && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(s)) return T.err_email;
  if (k.endsWith("phone") && s.replace(/\D/g, "").length < 6) return T.err_phone;
  return "";
}

export default function ReferralForm() {
  const [v, setV] = useState<Record<Key, string>>(EMPTY);
  const [errs, setErrs] = useState<Partial<Record<Key, string>>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const set = (k: Key) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setV((p) => ({ ...p, [k]: e.target.value }));
    if (errs[k]) setErrs((p) => ({ ...p, [k]: validate(k, e.target.value) }));
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const next: Partial<Record<Key, string>> = {};
    (Object.keys(EMPTY) as Key[]).forEach((k) => { const m = validate(k, v[k]); if (m) next[k] = m; });
    setErrs(next);
    if (Object.keys(next).length) return;
    setStatus("loading");
    const t = (k: Key) => v[k].trim();
    const message =
      `${T.referrer}\n${T.name}: ${t("r_name")}\n${T.phone}: ${t("r_phone")}\n${T.email}: ${t("r_email")}\n\n` +
      `${T.friend}\n${T.name}: ${t("f_name")}\n${T.phone}: ${t("f_phone")}\n${T.email}: ${t("f_email")}`;
    try {
      const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: EMAILJS.service,
          template_id: EMAILJS.template,
          user_id: EMAILJS.publicKey,
          template_params: {
            site_name: SITE_NAME,
            subject: `${T.subj} – ${SITE_NAME}: ${t("r_name")} → ${t("f_name")}`,
            plan: T.plan,
            name: t("r_name"), full_name: t("r_name"), from_name: t("r_name"),
            email: t("r_email"), from_email: t("r_email"), reply_to: t("r_email"),
            phone: t("r_phone"), whatsapp: t("r_phone"),
            country: "—", device: "—",
            friend_name: t("f_name"), friend_phone: t("f_phone"), friend_email: t("f_email"),
            message,
            time: new Date().toLocaleString(),
          },
        }),
      });
      if (!res.ok) throw new Error(`EmailJS ${res.status}`);
      setStatus("success");
      setV(EMPTY);
    } catch (err) {
      console.error("Referral send failed:", err);
      setStatus("error");
    }
  }

  const input = (k: Key): React.CSSProperties => ({
    width: "100%", height: 52, padding: "0 16px", borderRadius: 14, boxSizing: "border-box",
    background: C.inputBg, border: `1px solid ${errs[k] ? "#ff2d4a" : C.line}`, color: C.text,
    fontSize: 15.5, fontFamily: "inherit", outline: "none",
  });

  const field = (k: Key, label: string, type: string, ph: string, full = false, ac = "off") => (
    <div style={{ display: "grid", gap: 7, gridColumn: full ? "1 / -1" : undefined }}>
      <label htmlFor={`ref-${k}`} style={{ fontSize: 13.5, fontWeight: 600, color: C.label }}>{label}</label>
      <input id={`ref-${k}`} name={k} type={type} required placeholder={ph} value={v[k]} onChange={set(k)}
        autoComplete={ac} inputMode={type === "tel" ? "tel" : type === "email" ? "email" : undefined}
        aria-invalid={errs[k] ? true : undefined} style={input(k)} className="ref-input" />
      {errs[k] && <span style={{ fontSize: 12.5, color: "#ff5a6e" }}>{errs[k]}</span>}
    </div>
  );

  const group = (who: Who, n: number, title: string, hint: string, acc: string, ph: [string, string, string]) => (
    <fieldset style={{
      border: `1px solid ${C.line}`, borderTop: `3px solid ${acc}`, borderRadius: 18, padding: "18px 18px 20px",
      margin: "0 0 16px", minWidth: 0, background: `linear-gradient(180deg, ${acc}17, transparent 70%)`,
    }}>
      <legend style={{ display: "flex", alignItems: "center", gap: 12, padding: 0, marginBottom: 16, float: "left", width: "100%" }}>
        <span style={{ width: 32, height: 32, flex: "none", borderRadius: "50%", display: "grid", placeItems: "center", fontWeight: 800, fontSize: 15, color: C.numText, background: acc }}>{n}</span>
        <span><b style={{ display: "block", fontSize: 17, fontWeight: 800, color: C.heading }}>{title}</b><small style={{ display: "block", color: C.muted, fontSize: 13, marginTop: 2 }}>{hint}</small></span>
      </legend>
      <div className="ref-fields" style={{ clear: "both", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        {field(`${who}_name`, T.name, "text", ph[0], false, who === "r" ? "name" : "off")}
        {field(`${who}_phone`, T.phone, "tel", ph[1], false, who === "r" ? "tel" : "off")}
        {field(`${who}_email`, T.email, "email", ph[2], true, who === "r" ? "email" : "off")}
      </div>
    </fieldset>
  );

  const card: React.CSSProperties = {
    borderRadius: 28, padding: "clamp(22px, 4vw, 40px)", background: C.panel, border: `1px solid ${status === "success" ? "rgba(34,197,94,.55)" : C.line}`,
    boxShadow: "0 30px 80px -30px rgba(0,0,0,.45)", textAlign: "left", color: C.text,
  };

  if (status === "success") {
    return (
      <div style={card} role="status">
        <div style={{ textAlign: "center", padding: "12px 0" }}>
          <div style={{ width: 72, height: 72, margin: "0 auto 18px", borderRadius: "50%", background: "#22c55e", display: "grid", placeItems: "center", color: "#fff", fontSize: 38, fontWeight: 900 }}>✓</div>
          <h2 style={{ fontSize: 26, fontWeight: 800, color: C.heading, margin: "0 0 10px" }}>{T.ok_t}</h2>
          <p style={{ color: C.muted, fontSize: 15.5, lineHeight: 1.7, maxWidth: 460, margin: "0 auto 22px" }} dangerouslySetInnerHTML={{ __html: T.ok_p }} />
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" style={{ background: "#25D366", color: "#fff", padding: "14px 26px", borderRadius: 999, fontWeight: 700, textDecoration: "none" }}>{T.wa}</a>
            <button type="button" onClick={() => setStatus("idle")} style={{ background: "transparent", color: C.heading, border: `1px solid ${C.line}`, padding: "14px 26px", borderRadius: 999, fontWeight: 700, cursor: "pointer", fontFamily: "inherit", fontSize: 15 }}>{T.again}</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={card} id="referral-form">
      <style>{`.ref-input::placeholder{color:${C.placeholder}}.ref-input:focus{border-color:${C.acc2}!important;box-shadow:0 0 0 4px ${C.acc2}22}@media(max-width:520px){.ref-fields{grid-template-columns:1fr!important}}`}</style>
      <h2 style={{ fontSize: 26, fontWeight: 800, color: C.heading, margin: "0 0 6px" }}>{T.title}</h2>
      <p style={{ color: C.muted, margin: "0 0 20px", fontSize: 15 }}>{T.req}</p>
      <form onSubmit={handleSubmit} noValidate>
        {group("r", 1, T.g1, T.g1s, C.acc1, [T.ph1n, "E.g. +1 300 400 5000", T.ph1e])}
        {group("f", 2, T.g2, T.g2s, C.acc2, [T.ph2n, "E.g. +1 245 852 4100", T.ph2e])}
        {status === "error" && (
          <div role="alert" style={{ background: "rgba(255,45,74,.1)", border: "1px solid rgba(255,45,74,.35)", color: "#ff5a6e", borderRadius: 12, padding: "12px 16px", fontSize: 14, margin: "6px 0 0" }}>{T.fail}</div>
        )}
        <button type="submit" disabled={status === "loading"} style={{
          width: "100%", marginTop: 22, padding: "18px 24px", borderRadius: 999, border: "none", color: "#fff",
          background: C.cta, fontWeight: 800, fontSize: 17, fontFamily: "inherit", cursor: status === "loading" ? "wait" : "pointer",
          opacity: status === "loading" ? 0.7 : 1, boxShadow: C.ctaShadow,
        }}>
          {status === "loading" ? T.sending : <>{T.submit} &nbsp;→</>}
        </button>
      </form>
    </div>
  );
}
