import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  outputFileTracingIncludes: {
    "/api/notes/*": ["./private-notes/*.pdf"],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "Content-Security-Policy", value: "frame-ancestors 'none'; object-src 'none'; base-uri 'self'" },
          { key: "Strict-Transport-Security", value: "max-age=31536000" },
        ],
      },
      {
        source: "/workers/javascript.worker.js",
        headers: [{ key: "Content-Security-Policy", value: "default-src 'none'; script-src 'self' 'unsafe-eval'; connect-src 'none'; worker-src 'none'; child-src 'none'; frame-src 'none'; object-src 'none'; base-uri 'none'" }],
      },
      {
        source: "/workers/python.worker.js",
        headers: [{ key: "Content-Security-Policy", value: "default-src 'none'; script-src 'self' 'unsafe-eval' https://cdn.jsdelivr.net; connect-src https://cdn.jsdelivr.net; worker-src 'none'; child-src 'none'; frame-src 'none'; object-src 'none'; base-uri 'none'" }],
      },
      {
        source: "/workers/sql.worker.js",
        headers: [{ key: "Content-Security-Policy", value: "default-src 'none'; script-src 'self' 'unsafe-eval' 'wasm-unsafe-eval' https://cdn.jsdelivr.net; connect-src https://cdn.jsdelivr.net; worker-src 'none'; child-src 'none'; frame-src 'none'; object-src 'none'; base-uri 'none'" }],
      },
    ];
  },
};

export default nextConfig;
