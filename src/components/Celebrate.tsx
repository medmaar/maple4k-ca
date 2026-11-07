"use client";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

/* Full-screen celebration shown after a free-trial request or a plan order.
   Preview without submitting: add ?celebrate=trial or ?celebrate=order to any page URL. */

export type CelebrateKind = "trial" | "order";

const COPY: Record<CelebrateKind, { title: string; lines: string[]; btn: string }> = {
  trial: {
    title: "Your free trial is on its way, eh!",
    lines: [
      "A very polite moose is trotting your login over to {email} right now. He said sorry twice for the wait. 🫎",
      "It usually lands in under 2 minutes. Check your <b>inbox</b> AND your <b>spam</b> folder, because sometimes our email gets shy and hides in there like a loonie under the couch cushions.",
      "Your only job for the next 24 hours: grab a poutine and claim the good spot on the couch. 🍟",
    ],
    btn: "Beauty, back to the homepage",
  },
  order: {
    title: "You did it! Order placed.",
    lines: [
      "Top shelf, where Grandma keeps the peanut butter. The whole bench is tapping their sticks for you. 🏒",
      "Your invoice is skating over to {email} right now. Check your <b>inbox</b> AND your <b>spam</b> folder, because sometimes it takes a dumb penalty and sits in the spam box for two minutes.",
      "Pay the invoice and your channels light up faster than a slapshot from the blue line. 🍁",
    ],
    btn: "Awesome, back to the homepage",
  },
};

const esc = (s: string) => s.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);

export default function Celebrate({ kind, email }: { kind: CelebrateKind; email?: string }) {
  const goRef = useRef<HTMLButtonElement>(null);
  const c = COPY[kind];

  // No close button, no Escape: the only way out is the button, which takes the client to the homepage.
  const goHome = () => { window.location.href = "/"; };

  useEffect(() => {
    document.documentElement.classList.add("celebrating");
    goRef.current?.focus({ preventScroll: true });
    const onKey = (e: KeyboardEvent) => { if (e.key === "Tab") { e.preventDefault(); goRef.current?.focus(); } };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.documentElement.classList.remove("celebrating");
    };
  }, []);

  const mail = `<b>${esc(email?.trim() || "your email address")}</b>`;

  return createPortal(
    <div className="celebrate" role="dialog" aria-modal="true" aria-labelledby="celebrate-title">
      <div className="celebrate-bits" aria-hidden="true">
        {Array.from({ length: 28 }, (_, i) => (
          <i
            key={i}
            style={{ "--x": `${(i * 37) % 100}%`, "--d": `${(i % 7) * 0.35}s`, "--t": `${3.2 + (i % 5) * 0.5}s`, "--r": `${(i * 53) % 360}deg` } as React.CSSProperties}
          >
            {i % 3 ? "" : "🍁"}
          </i>
        ))}
      </div>
      <div className="celebrate-box">
        <svg className="celebrate-mark" viewBox="0 0 120 120" aria-hidden="true">
          <circle cx="60" cy="60" r="54" />
          <path d="M36 62 53 79 86 44" />
        </svg>
        <h2 id="celebrate-title">{c.title}</h2>
        {c.lines.map((l, i) => (
          <p key={i} dangerouslySetInnerHTML={{ __html: l.replace("{email}", mail) }} />
        ))}
        <button ref={goRef} className="celebrate-go" type="button" onClick={goHome}>{c.btn}</button>
      </div>
    </div>,
    document.body,
  );
}

/* Mounted once in the layout: shows the overlay for ?celebrate=trial / ?celebrate=order previews. */
export function CelebratePreview() {
  const [kind, setKind] = useState<CelebrateKind | null>(null);
  useEffect(() => {
    const q = new URLSearchParams(window.location.search).get("celebrate");
    if (q) setKind(q === "order" ? "order" : "trial");
  }, []);
  return kind ? <Celebrate kind={kind} email="you@example.com" /> : null;
}
