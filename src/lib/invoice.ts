// Emails the client their secure payment invoice after a plan order is sent.
// Fire-and-forget: it never delays or fails the order itself.
const INVOICE_URL = "https://iptv-trial-maple4k.medmaar.workers.dev/invoice";

export function sendInvoice(name: string, email: string, plan: string) {
  fetch(INVOICE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, plan }),
    keepalive: true,
  }).catch(() => {});
}
