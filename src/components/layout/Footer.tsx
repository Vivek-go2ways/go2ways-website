import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "./Container";
import { footerNavItems } from "@/data/navigation";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t border-black/10 bg-white text-foreground">
      <Container className="py-14 sm:py-16">
        {/* Top Logo & Enterprise Tagline */}
        <div className="mb-12 pb-8 border-b border-black/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <Link href="/" className="inline-block">
            <Image
              src="/go2ways-website/images/logo.png"
              alt="go2ways logo"
              width={160}
              height={36}
              className="h-9 w-auto object-contain"
            />
          </Link>
          <p className="text-xs sm:text-sm text-muted-foreground max-w-md">
            Trusted enterprise technology, IBM Maximo asset management, and cloud architecture for asset-driven industries worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Enterprise Services */}
          <div>
            <h4 className="text-sm font-semibold text-foreground tracking-tight mb-4">
              Enterprise Services
            </h4>
            <ul className="space-y-2.5">
              {footerNavItems.enterpriseServices.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Cloud & Integration */}
          <div>
            <h4 className="text-sm font-semibold text-foreground tracking-tight mb-4">
              Cloud & Integration
            </h4>
            <ul className="space-y-2.5">
              {footerNavItems.cloudIntegration.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="text-sm font-semibold text-foreground tracking-tight mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              {footerNavItems.company.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Headquarters */}
          <div>
            <h4 className="text-sm font-semibold text-foreground tracking-tight mb-4">
              Contact Headquarters
            </h4>
            <div className="space-y-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
              <p>{siteConfig.contact.address}</p>
              <p>
                <strong className="text-foreground">Email:</strong>{" "}
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:underline text-muted-foreground hover:text-foreground"
                >
                  {siteConfig.contact.email}
                </a>
              </p>
              <p>
                <strong className="text-foreground">Phone:</strong>{" "}
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`}
                  className="hover:underline text-muted-foreground hover:text-foreground"
                >
                  {siteConfig.contact.phone}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom copyright & legal bar */}
        <div className="mt-12 pt-8 border-t border-black/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>Copyright © {new Date().getFullYear()} Go2Ways. All Rights Reserved.</p>
          <div className="flex flex-wrap gap-6">
            {footerNavItems.legal.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
