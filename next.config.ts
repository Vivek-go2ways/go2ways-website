import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  agentRules: false,
  outputFileTracingIncludes: { "/api/chat": ["./content/knowledge.md"] },
  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/:page(services|industries|contact|service-[a-z-]+).html", destination: "/:page", permanent: true },
    ];
  },
};

export default nextConfig;
