import type { NextConfig } from "next";

const basePath =
  process.env.DEPLOY_TARGET === "pages" ? "/go2ways-website" : undefined;

const nextConfig: NextConfig = {
  output: "standalone",
  images: { unoptimized: true },
  trailingSlash: true,
  ...(basePath ? { basePath } : {}),
  async redirects() {
    return [
      {
        source: "/resource-outsourcing.php",
        destination: "/service-managed-support/",
        permanent: true,
      },
      {
        source: "/ibm-maximo.php",
        destination: "/service-ibm-maximo-mas/",
        permanent: true,
      },
      {
        source: "/web-development.php",
        destination: "/service-ai-solutions/",
        permanent: true,
      },
      {
        source: "/contact.php",
        destination: "/contact/",
        permanent: true,
      },
      {
        source: "/g2w-services.php",
        destination: "/",
        permanent: true,
      },
      {
        source: "/mobile-development.php",
        destination: "/service-mobile-development/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
