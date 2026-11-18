import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import SiteEffects from "@/components/SiteEffects";
import ChatWidget from "@/components/ChatWidget";

export const metadata: Metadata = {
  title: "go2ways",
  description: "go2ways connects data, assets, people and workflows into one intelligent operational view.",
  icons: { icon: "/assets/img/logo.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Google+Sans+Flex:wght@400;500;700&family=Inter:wght@400;500;600;700;800&display=swap" />
      </head>
      <body>
        <div className="page-veil" aria-hidden="true" />
        <div className="scroll-progress" aria-hidden="true" />
        <SiteHeader />
        {children}
        <SiteFooter />
        <SiteEffects />
        <ChatWidget />
      </body>
    </html>
  );
}
