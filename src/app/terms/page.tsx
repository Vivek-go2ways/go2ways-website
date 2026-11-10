import React from "react";
import { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Terms of Use | Go2Ways",
  description: "Terms and conditions governing the use of Go2Ways websites, portals, and services.",
};

export default function TermsPage() {
  return (
    <div className="bg-muted/40 text-foreground min-h-screen py-16 sm:py-24">
      <Container>
        <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8 sm:p-12 border border-black/[0.08] shadow-sm">
          <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-2 font-heading">
            Legal & Governance
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground font-heading mb-6">
            Terms of Use
          </h1>
          <p className="text-xs text-muted-foreground mb-8">
            Last Updated: November 2026
          </p>

          <div className="space-y-6 text-sm text-foreground/80 leading-relaxed">
            <section>
              <h2 className="text-lg font-bold text-foreground mb-2">1. Acceptance of Terms</h2>
              <p>
                By accessing or using the services, applications, and websites provided by {siteConfig.name},
                you agree to be bound by these Terms of Use and all applicable laws and regulations.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-foreground mb-2">2. Intellectual Property Rights</h2>
              <p>
                All proprietary methodologies, software artifacts, blueprints, logos, and website materials are
                the exclusive property of {siteConfig.name} or its licensors. Unauthorized copying, reverse engineering,
                or redistribution is strictly prohibited.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-foreground mb-2">3. Professional Consulting Engagements</h2>
              <p>
                Specific implementation, managed support (AMS), and MAS migration services are governed by formal
                Statements of Work (SOW) and Master Services Agreements (MSA) executed between parties.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-foreground mb-2">4. Limitation of Liability</h2>
              <p>
                In no event shall {siteConfig.name} be liable for any indirect, consequential, or incidental damages
                arising out of the use or inability to use the informational content provided on this website.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-foreground mb-2">5. Inquiries & Contact</h2>
              <p>
                Questions regarding these terms should be directed to{" "}
                <a href={`mailto:${siteConfig.contact.email}`} className="text-primary hover:underline">
                  {siteConfig.contact.email}
                </a>.
              </p>
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
}

