"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "./Container";
import { mainNavItems } from "@/data/navigation";
import { Button } from "@/components/ui/Button";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-7">
          {mainNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xs xl:text-sm font-medium text-foreground/90 transition-colors hover:text-primary"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        {/* Action Buttons & Mobile Hamburger */}
        <div className="flex items-center gap-3 sm:gap-4">
          <Button href="/contact" size="sm" className="hidden sm:inline-flex">
            Book a Consultation
          </Button>

          {/* Mobile Menu Trigger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            className="inline-flex lg:hidden items-center justify-center p-2 rounded-lg text-foreground hover:bg-muted transition-colors"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </Container>

      {/* Mobile Menu Dropdown Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden border-t border-black/[0.08] bg-white overflow-hidden"
          >
            <Container className="py-6 space-y-4">
              <nav className="flex flex-col space-y-3">
                {mainNavItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-base font-semibold text-foreground hover:text-primary transition-colors py-1.5 flex items-center justify-between"
                  >
                    <span>{item.title}</span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                  </Link>
                ))}
              </nav>

              <div className="pt-4 border-t border-black/[0.08]">
                <Button
                  href="/contact"
                  size="md"
                  className="w-full"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Book a Consultation
                </Button>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
