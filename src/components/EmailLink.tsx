"use client";
import { useEffect, useState } from "react";

interface Props {
  className?: string;
  style?: React.CSSProperties;
  subject?: string;
}

export default function EmailLink({ className, style, subject }: Props) {
  const [email, setEmail] = useState("");

  useEffect(() => {
    // Build email client-side only — never in static HTML, prevents CF email obfuscation injection
    const u = "help";
    const d = "maple4k.ca";
    setEmail(`${u}@${d}`);
  }, []);

  if (!email) return <span className={className} style={style}>help[at]maple4k.ca</span>;

  const href = subject
    ? `mailto:${email}?subject=${encodeURIComponent(subject)}`
    : `mailto:${email}`;

  return (
    <a href={href} className={className} style={style}>
      {email}
    </a>
  );
}
