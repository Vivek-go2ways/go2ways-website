import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const rawBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? (isProd ? "/go2ways-website" : "");
const basePath = rawBasePath || undefined;

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  ...(basePath ? { basePath } : {}),
};

export default nextConfig;
