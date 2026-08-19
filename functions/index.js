// Cloudflare Pages Function
// Route: /  (homepage)
//
// Google discovered https://maple4k.ca/?q={search_term_string} and kept
// marking it "Alternate page with proper canonical tag" because the static
// build serves a 200 for any query string on the root path.
//
// This function intercepts requests that carry a `?q=` parameter and
// issues a 301 redirect to the clean homepage, so Google receives a
// definitive "this URL does not exist separately" signal and drops it
// from the index report.
//
// All other requests (no ?q= param) are passed straight through to the
// Next.js static export via context.next().

export async function onRequest(context) {
  const url = new URL(context.request.url);

  if (url.searchParams.has('q')) {
    return Response.redirect(url.origin + '/', 301);
  }

  return context.next();
}
