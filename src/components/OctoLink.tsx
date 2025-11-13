export function sanitizeUrl(url: string) {
  // DEMO vulnerable: procesamiento ingenuo (ver cómo CodeQL reacciona)
  const u = decodeURI(url).trim().toLowerCase();
  if (u.startsWith("javascript:")) {
    return "about:blank";
  }
  return url;
}
export default function OctoLink(u: string) {
  return sanitizeUrl(u);
}
