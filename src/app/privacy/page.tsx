import React from "react";
import { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy & Cookies Policy | Go2Ways",
  description: "Learn how Go2Ways collects, protects, and manages your personal and business data.",
};

export default function PrivacyPage() {
  return (
    <div className="bg-muted/40 text-foreground min-h-screen py-16 sm:py-24">
      <Container>
        <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8 sm:p-12 border border-black/[0.08] shadow-sm">
          <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-2 font-heading">
            Legal & Compliance
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground font-heading mb-6">
            Privacy & Cookies Policy
          </h1>
          <p className="text-xs text-muted-foreground mb-8">
            Last Updated: November 2026
          </p>

          <div className="space-y-6 text-sm text-foreground/80 leading-relaxed">
            <section>
              <h2 className="text-lg font-bold text-foreground mb-2">1. Overview</h2>
              <p>
                At {siteConfig.name}, we are committed to respecting your privacy and protecting any personal
                or corporate data you share with us. This policy outlines our data collection, processing,
                and storage practices when you access our website or engage our consulting and enterprise services.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-foreground mb-2">2. Information We Collect</h2>
              <p>
                We may collect personal identification information including, but not limited to, your name,
                work email address, phone number, company name, and project specifications when you complete
                our contact form or request a consultation.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-foreground mb-2">3. How We Use Your Data</h2>
              <p>
                The information we collect is strictly used to:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-muted-foreground">
                <li>Respond to your direct inquiries and technical scoping requests.</li>
                <li>Deliver consulting, deployment, and ongoing managed support services.</li>
                <li>Improve our website architecture and ensure security against malicious requests.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-foreground mb-2">4. Cookies & Analytics</h2>
              <p>
                Our site uses essential and performance cookies to maintain site security, remember session
                preferences, and analyze aggregate traffic patterns. You can instruct your browser to refuse
                cookies, though some parts of the site may function with reduced speed.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-foreground mb-2">5. Data Retention & Security</h2>
              <p>
                We employ industry-standard encryption, strict access controls, and SOC2/ISO-compliant practices
                to prevent unauthorized access, alteration, or disclosure of your data.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-foreground mb-2">6. Contact Us</h2>
              <p>
                If you have questions regarding this Privacy Policy, please reach us at{" "}
                <a href={`mailto:${siteConfig.contact.email}`} className="text-primary hover:underline">
                  {siteConfig.contact.email}
                </a>{" "}
                or write to our corporate headquarters at {siteConfig.contact.address}.
              </p>
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
}

