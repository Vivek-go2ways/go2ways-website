import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/go2ways-website",
  reactStrictMode: true,
  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;

