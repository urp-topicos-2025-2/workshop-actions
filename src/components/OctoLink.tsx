export function sanitizeUrl(url: string) {
  try {
    const parsed = new URL(url, "https://example.com");
    const scheme = parsed.protocol.replace(":", "").toLowerCase();

    // Permitir solo http/https y rutas relativas seguras
    if (scheme === "http" || scheme === "https" || url.startsWith("/") || url.startsWith("./") || url.startsWith("../")) {
      return url;
    }
    return "about:blank";
  } catch {
    return "about:blank";
  }
}

export default function OctoLink(u: string) {
  return sanitizeUrl(u);
}
