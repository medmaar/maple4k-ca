/**
 * Maple4K — Free Trial Worker
 * - Creates IPTV line via Activation Panel (USA - All, sub=99 demo)
 * - Sends welcome email (English)
 * - Stores trial in KV
 * - Cron every hour: T-4h reminder + T=0 follow-up
 */

const API_BASE    = "https://activationpanel.ru/api/api.php";
const API_KEY     = "35cf68cc83a3a82e1a0ac5361c7b6105";
const HOST        = "http://terry.thecontentnest.com";
const RESEND_KEY  = "re_j2Jo3Xfg_NDg6tKwQvYKURivpWZkFZAUh";
const FROM_EMAIL  = "Maple4K <help@maple4k.ca>";
const ADMIN_EMAIL = "help@maple4k.ca";
const SITE_URL    = "https://maple4k.ca";
const PACK_NAME   = "USA - All";

// ── helpers ───────────────────────────────────────────────────────────────────

function jsonRes(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
  });
}

async function apiGet(params) {
  const qs = new URLSearchParams({ ...params, api_key: API_KEY });
  const res = await fetch(`${API_BASE}?${qs}`);
  const text = await res.text();
  return { status: res.status, text };
}

async function sendEmail(to, subject, html) {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${RESEND_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({ from: FROM_EMAIL, to, subject, html }),
  });
  if (!res.ok) throw new Error(`Resend (${res.status}): ${await res.text()}`);
}

// ── email layout ──────────────────────────────────────────────────────────────

function emailWrap(content) {
  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"></head>
<body style="margin:0;padding:0;background-color:#f2f2f2;font-family:Arial,sans-serif;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f2f2f2;padding:32px 16px;">
  <tr><td align="center">
    <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0"
           style="max-width:600px;background:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
      <tr><td style="background-color:#0C0F1A;padding:32px 40px;text-align:center;border-bottom:3px solid #E8041F;">
        <h1 style="margin:0;font-family:Arial,sans-serif;font-size:26px;font-weight:bold;color:#ffffff;">Maple4K</h1>
        <p style="margin:6px 0 0;font-family:Arial,sans-serif;font-size:13px;color:rgba(255,255,255,0.70);">Premium IPTV Canada · 4K Streaming</p>
      </td></tr>
      <tr><td style="padding:36px 40px;">${content}</td></tr>
      <tr><td style="background-color:#f8f8f8;border-top:1px solid #eeeeee;padding:18px 40px;text-align:center;">
        <p style="margin:0;font-family:Arial,sans-serif;font-size:11px;color:#aaaaaa;">
          © 2026 Maple4K · <a href="${SITE_URL}" style="color:#E8041F;text-decoration:none;">maple4k.ca</a>
        </p>
      </td></tr>
    </table>
  </td></tr>
</table>
</body></html>`;
}

function credBox(username, password, m3uUrl) {
  const server = (() => { try { return new URL(m3uUrl).origin; } catch { return HOST; } })();
  return `
  <p style="margin:0 0 8px;font-family:Arial,sans-serif;font-size:13px;font-weight:bold;color:#333333;">Xtream Codes</p>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"
         style="background-color:#f8f8f8;border:1px solid #e0e0e0;border-radius:6px;margin-bottom:18px;">
    <tr><td style="padding:18px 22px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
        <tr><td style="padding:0 0 11px;border-bottom:1px solid #e8e8e8;">
          <p style="margin:0 0 2px;font-family:Arial,sans-serif;font-size:11px;color:#888888;text-transform:uppercase;">Server</p>
          <p style="margin:0;font-family:Arial,sans-serif;font-size:13px;color:#333333;font-weight:bold;">${server}</p>
        </td></tr>
        <tr><td style="padding:11px 0;border-bottom:1px solid #e8e8e8;">
          <p style="margin:0 0 2px;font-family:Arial,sans-serif;font-size:11px;color:#888888;text-transform:uppercase;">Username</p>
          <p style="margin:0;font-family:Arial,sans-serif;font-size:13px;color:#333333;font-weight:bold;">${username}</p>
        </td></tr>
        <tr><td style="padding:11px 0 0;">
          <p style="margin:0 0 2px;font-family:Arial,sans-serif;font-size:11px;color:#888888;text-transform:uppercase;">Password</p>
          <p style="margin:0;font-family:Arial,sans-serif;font-size:13px;color:#333333;font-weight:bold;">${password}</p>
        </td></tr>
      </table>
    </td></tr>
  </table>
  <p style="margin:0 0 8px;font-family:Arial,sans-serif;font-size:13px;font-weight:bold;color:#333333;">M3U Link</p>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"
         style="background-color:#f8f8f8;border:1px solid #e0e0e0;border-radius:6px;margin-bottom:28px;">
    <tr><td style="padding:14px 20px;">
      <p style="margin:0;font-family:Arial,sans-serif;font-size:12px;color:#E8041F;word-break:break-all;">${m3uUrl}</p>
    </td></tr>
  </table>`;
}

function ctaButton(text, url) {
  return `
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:28px;">
    <tr><td style="background-color:#E8041F;border-radius:8px;padding:14px 32px;text-align:center;">
      <a href="${url}" style="font-family:Arial,sans-serif;font-size:15px;font-weight:bold;color:#ffffff;text-decoration:none;">${text}</a>
    </td></tr>
  </table>`;
}

// ── email templates ───────────────────────────────────────────────────────────

function welcomeEmail(name, username, password, m3uUrl) {
  const firstName = name.split(" ")[0];
  return emailWrap(`
    <p style="margin:0 0 16px;font-family:Arial,sans-serif;font-size:15px;color:#333333;">Hi ${firstName},</p>
    <p style="margin:0 0 14px;font-family:Arial,sans-serif;font-size:14px;line-height:1.65;color:#555555;">
      Your free trial is ready! 🎉
    </p>
    <p style="margin:0 0 14px;font-family:Arial,sans-serif;font-size:14px;line-height:1.65;color:#555555;">
      We've unlocked all countries and languages so you can fully test our service.
    </p>
    <p style="margin:0 0 24px;font-family:Arial,sans-serif;font-size:13px;line-height:1.65;color:#777777;font-style:italic;">
      Note: Don't worry if the channel list seems too long — you can always ask us to hide regions or categories you don't need!
    </p>
    <p style="margin:0 0 18px;font-family:Arial,sans-serif;font-size:14px;line-height:1.65;color:#555555;">
      Here are your login credentials:
    </p>
    ${credBox(username, password, m3uUrl)}
    <p style="margin:0 0 20px;font-family:Arial,sans-serif;font-size:14px;line-height:1.65;color:#555555;">
      Need help with setup? Contact us by replying to this email or via our WhatsApp at
      <a href="https://wa.me/17828026280" style="color:#E8041F;text-decoration:none;font-weight:bold;">+1 782-802-6280</a>
    </p>
    <p style="display:none;">
    </p>
    <p style="margin:24px 0 0;font-family:Arial,sans-serif;font-size:14px;color:#555555;">Best regards,<br><strong>The Maple4K Team</strong></p>
  `);
}

function reminderEmail(name, username, password, m3uUrl) {
  const firstName = name.split(" ")[0];
  return emailWrap(`
    <p style="margin:0 0 16px;font-family:Arial,sans-serif;font-size:15px;color:#333333;">Hi ${firstName},</p>
    <p style="margin:0 0 14px;font-family:Arial,sans-serif;font-size:14px;line-height:1.65;color:#555555;">
      Your free trial <strong>expires in 4 hours</strong> ⏳
    </p>
    <p style="margin:0 0 22px;font-family:Arial,sans-serif;font-size:14px;line-height:1.65;color:#555555;">
      You still have time to enjoy your full access to +50,000 channels, NHL, TSN, CTV, and +300,000 movies & shows in 4K.
    </p>
    <p style="margin:0 0 16px;font-family:Arial,sans-serif;font-size:14px;color:#555555;">Your active credentials:</p>
    ${credBox(username, password, m3uUrl)}
    <p style="margin:0 0 16px;font-family:Arial,sans-serif;font-size:14px;line-height:1.65;color:#555555;">
      Continue without interruption — choose your plan now:
    </p>
    ${ctaButton("View Our Plans →", SITE_URL + "/pricing")}
    <p style="margin:0 0 8px;font-family:Arial,sans-serif;font-size:14px;line-height:1.65;color:#555555;">
      Questions? Reach us by replying to this email or on WhatsApp at <a href="https://wa.me/17828026280" style="color:#E8041F;text-decoration:none;font-weight:bold;">+1 782-802-6280</a>
    </p>
    <p style="margin:24px 0 0;font-family:Arial,sans-serif;font-size:14px;color:#555555;">Best regards,<br><strong>The Maple4K Team</strong></p>
  `);
}

function followupEmail(name) {
  const firstName = name.split(" ")[0];
  return emailWrap(`
    <p style="margin:0 0 16px;font-family:Arial,sans-serif;font-size:15px;color:#333333;">Hi ${firstName},</p>
    <p style="margin:0 0 14px;font-family:Arial,sans-serif;font-size:14px;line-height:1.65;color:#555555;">
      Your Maple4K free trial has now <strong>ended</strong>.
    </p>
    <p style="margin:0 0 22px;font-family:Arial,sans-serif;font-size:14px;line-height:1.65;color:#555555;">
      We hope you enjoyed the quality of our service — +50,000 channels, NHL, TSN, CTV and +300,000 movies & shows in 4K, uninterrupted.
    </p>
    <p style="margin:0 0 16px;font-family:Arial,sans-serif;font-size:14px;line-height:1.65;color:#555555;">
      Keep streaming with Maple4K — choose the plan that works for you:
    </p>
    ${ctaButton("Choose My Plan →", SITE_URL + "/pricing")}
    <p style="margin:0 0 8px;font-family:Arial,sans-serif;font-size:14px;line-height:1.65;color:#555555;">
      Any questions? Contact us by replying to this email or directly on WhatsApp at <a href="https://wa.me/17828026280" style="color:#E8041F;text-decoration:none;font-weight:bold;">+1 782-802-6280</a>
    </p>
    <p style="margin:24px 0 0;font-family:Arial,sans-serif;font-size:14px;color:#555555;">Best regards,<br><strong>The Maple4K Team</strong></p>
  `);
}

function adminEmail(name, email, country, device, whatsapp, notes, username, password, m3uUrl) {
  return `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"></head>
<body style="font-family:Arial,sans-serif;font-size:14px;color:#333;padding:20px;">
  <h2 style="color:#E8041F;margin-top:0;">New Free Trial — Maple4K</h2>
  <table cellpadding="6" cellspacing="0" border="0">
    <tr><td style="color:#888;width:120px;">Name</td><td><strong>${name}</strong></td></tr>
    <tr><td style="color:#888;">Email</td><td>${email}</td></tr>
    <tr><td style="color:#888;">Country</td><td>${country||"—"}</td></tr>
    <tr><td style="color:#888;">Device</td><td>${device||"—"}</td></tr>
    <tr><td style="color:#888;">WhatsApp</td><td>${whatsapp||"—"}</td></tr>
    <tr><td style="color:#888;">Notes</td><td>${notes||"—"}</td></tr>
    <tr><td colspan="2"><hr style="border:none;border-top:1px solid #eee;margin:8px 0;"></td></tr>
    <tr><td style="color:#888;">Username</td><td><strong>${username}</strong></td></tr>
    <tr><td style="color:#888;">Password</td><td><strong>${password}</strong></td></tr>
    <tr><td style="color:#888;">M3U</td><td style="word-break:break-all;font-size:12px;">${m3uUrl}</td></tr>
  </table>
</body></html>`;
}

// ── fetch handler ─────────────────────────────────────────────────────────────

async function handleFetch(request, env) {
  if (request.method === "OPTIONS") {
    return new Response(null, { headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    }});
  }

  if (request.method === "GET") {
    const u = new URL(request.url);
    if (u.searchParams.has("debug")) {
      const bq = await apiGet({ action: "bouquet" });
      const ri = await apiGet({ action: "reseller_info" });
      const trials = await env.TRIALS.list();
      return jsonRes({ bouquet: bq.text.slice(0,400), reseller: ri.text.slice(0,200), kv_keys: trials.keys.length });
    }
    return new Response("Maple4K Trial Worker — OK", { status: 200 });
  }

  if (request.method !== "POST") return jsonRes({ success: false, error: "POST only" }, 405);

  let body;
  try { body = await request.json(); }
  catch { return jsonRes({ success: false, error: "Invalid JSON" }, 400); }

  const { name, email, country, device, whatsapp, notes } = body;
  if (!name || !email) return jsonRes({ success: false, error: "Name and email required" }, 400);

  let step = "bouquet";
  try {
    // 1. Get package ID
    const bqRes = await apiGet({ action: "bouquet" });
    let packId = "all";
    if (bqRes.text.trim().startsWith("[") || bqRes.text.trim().startsWith("{")) {
      const list = JSON.parse(bqRes.text);
      const arr = Array.isArray(list) ? list : Object.values(list);
      const pkg = arr.find(b => (b.name || "").trim().toLowerCase() === PACK_NAME.toLowerCase());
      if (pkg) packId = pkg.id;
      else console.log("Package not found, using pack=all. Available:", arr.map(b=>b.name).join(", "));
    }

    // 2. Create demo M3U (sub=99 = demo ticket)
    step = "create_demo";
    const crRes = await apiGet({
      action: "new", type: "m3u", sub: "99", pack: packId,
      note: `Trial / maple4k.ca / ${email} | ${whatsapp || ""}`,
    });
    if (!crRes.text.trim().startsWith("[") && !crRes.text.trim().startsWith("{")) {
      throw new Error(`Panel non-JSON: ${crRes.text.slice(0, 200)}`);
    }
    const crData = JSON.parse(crRes.text);
    const item = Array.isArray(crData) ? crData[0] : crData;
    if (!item || String(item.status) !== "true") {
      throw new Error(`Panel: ${item?.message || JSON.stringify(item)}`);
    }

    // 3. Build credentials
    step = "extract";
    const rawUrl = item.url || "";
    let username = "", password = "";
    try { const u = new URL(rawUrl); username = u.searchParams.get("username") || ""; password = u.searchParams.get("password") || ""; } catch {}
    const m3uUrl = `${HOST}/get.php?username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}&type=m3u_plus&output=ts`;

    // 4. Store in KV FIRST (so trial is always recorded even if email fails)
    step = "kv_store";
    const expiry = Date.now() + 24 * 60 * 60 * 1000;
    await env.TRIALS.put(
      `trial:${email}`,
      JSON.stringify({ name, email, whatsapp, site: 'maple4k.ca', username, password, m3uUrl, expiry, reminder_sent: false, followup_sent: false, created_at: Date.now() }),
      { expirationTtl: 30 * 24 * 60 * 60 }
    );
    // Notify central KV reader
    try {
      await fetch('https://iptv-kv-reader.medmaar.workers.dev/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, whatsapp, site: 'maple4k.ca', phone: whatsapp, created_at: Date.now() })
      });
    } catch(_) {}

    // 5. Welcome email
    step = "email_client";
    await sendEmail(email, "Your Maple4K Free Trial is Ready — 24H Access Activated ✓", welcomeEmail(name, username, password, m3uUrl));

    // 6. Admin notification
    step = "email_admin";
    await sendEmail(ADMIN_EMAIL, `Automation / maple4k.ca / trial / ${name} / ${email}`, adminEmail(name, email, country, device, whatsapp, notes, username, password, m3uUrl));

    return jsonRes({ success: true });

  } catch (err) {
    console.error(`[step=${step}]`, err.message);
    return jsonRes({ success: false, error: `[${step}] ${err.message}` }, 500);
  }
}

// ── cron handler ──────────────────────────────────────────────────────────────

async function handleScheduled(env) {
  const now = Date.now();
  const FOUR_HOURS = 4 * 60 * 60 * 1000;
  const { keys } = await env.TRIALS.list({ prefix: "trial:" });
  console.log(`[cron] Checking ${keys.length} trials`);

  for (const { name: key } of keys) {
    let trial;
    try { const raw = await env.TRIALS.get(key); if (!raw) continue; trial = JSON.parse(raw); } catch { continue; }

    const { name, email, username, password, m3uUrl, expiry, reminder_sent, followup_sent } = trial;

    if (!reminder_sent && now >= expiry - FOUR_HOURS && now < expiry) {
      try {
        await sendEmail(email, "⏳ Your Maple4K Trial Expires in 4 Hours", reminderEmail(name, username, password, m3uUrl));
        trial.reminder_sent = true;
        await env.TRIALS.put(key, JSON.stringify(trial), { expirationTtl: 30 * 24 * 60 * 60 });
        console.log(`[cron] Reminder → ${email}`);
      } catch (e) { console.error(`[cron] Reminder failed ${email}:`, e.message); }
    }

    if (!followup_sent && now >= expiry) {
      try {
        await sendEmail(email, "Your Maple4K Trial Has Ended — Keep Streaming 🎬", followupEmail(name));
        trial.followup_sent = true;
        await env.TRIALS.put(key, JSON.stringify(trial), { expirationTtl: 30 * 24 * 60 * 60 });
        console.log(`[cron] Follow-up → ${email}`);
      } catch (e) { console.error(`[cron] Follow-up failed ${email}:`, e.message); }
    }
  }
}

export default {
  async fetch(request, env) { return handleFetch(request, env); },
  async scheduled(event, env, ctx) { ctx.waitUntil(handleScheduled(env)); },
};

