
import type { NextConfig } from "next";

const basePath =
  process.env.DEPLOY_TARGET === "pages" ? "/go2ways-website" : undefined;

const nextConfig: NextConfig = {
  output: "standalone",
  images: { unoptimized: true },
  trailingSlash: true,
  ...(basePath ? { basePath } : {}),
};

export default nextConfig;
