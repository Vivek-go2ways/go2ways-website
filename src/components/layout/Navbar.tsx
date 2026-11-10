import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "./Container";
import { mainNavItems } from "@/data/navigation";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/[0.08] bg-white/95 backdrop-blur-md">
      <Container className="flex h-16 sm:h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <Image
            src="/go2ways-website/images/logo.png"
            alt="go2ways logo"
            width={150}
            height={34}
            className="h-8 sm:h-9 w-auto object-contain transition-transform group-hover:scale-105"
            priority
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-6 xl:gap-7">
          {mainNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xs xl:text-sm font-medium text-[#262626] transition-colors hover:text-[#0067B8]"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-4 py-2 rounded text-xs sm:text-sm font-semibold text-white bg-[#0067B8] hover:bg-[#005a9e] shadow-sm transition-colors"
          >
            Book a Consultation
          </Link>
        </div>
      </Container>
    </header>
  );
}
