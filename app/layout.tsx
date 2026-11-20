import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import SiteEffects from "@/components/SiteEffects";
import ChatWidget from "@/components/ChatWidget";
import { asset } from "@/lib/paths";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Go2Ways",
  description: "Go2Ways connects data, assets, people and workflows into one intelligent operational view.",
  icons: { icon: asset("/assets/img/logo.png") },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={manrope.variable} suppressHydrationWarning>
      <head />
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
