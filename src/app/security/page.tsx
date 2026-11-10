import React from "react";
import { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { ShieldCheck, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Security & Compliance | Go2Ways",
  description: "Enterprise security architecture, data governance, and regulatory compliance protocols at Go2Ways.",
};

const certifications = [
  "IBM Silver Business Partner (Maximo & TRIRIGA)",
  "AWS Certified Cloud Architecture & Security Practices",
  "Red Hat Certified Enterprise Partner",
  "Strict adherence to SOC 2 Type II operational security controls",
  "ISO/IEC 27001 data protection and security management standards",
  "GDPR and regional data privacy regulatory compliance",
];

export default function SecurityPage() {
  return (
    <div className="bg-muted/40 text-foreground min-h-screen py-16 sm:py-24">
      <Container>
        <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8 sm:p-12 border border-black/[0.08] shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <ShieldCheck className="h-5 w-5 text-primary" />
            <span className="text-xs font-bold uppercase tracking-widest text-primary font-heading">
              Governance & Trust
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground font-heading mb-6">
            Security & Compliance
          </h1>
          <p className="text-xs text-muted-foreground mb-8">
            Enterprise Asset Management Security Framework
          </p>

          <div className="space-y-6 text-sm text-foreground/80 leading-relaxed">
            <section>
              <h2 className="text-lg font-bold text-foreground mb-2">1. Security Architecture</h2>
              <p>
                At {siteConfig.name}, enterprise security is woven into every layer of our asset management
                implementations and cloud architectures. We follow zero-trust principles, least-privilege access
                policies, and end-to-end TLS 1.3 encryption for data in transit and AES-256 for data at rest.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-foreground mb-2">2. Standards & Compliance</h2>
              <p className="mb-3">
                Our engineering and delivery teams align with internationally recognized operational benchmarks:
              </p>
              <div className="space-y-2">
                {certifications.map((cert) => (
                  <div key={cert} className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-foreground/80 font-medium">{cert}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-lg font-bold text-foreground mb-2">3. Managed Cloud & Infrastructure Uptime</h2>
              <p>
                Our 24x7 AMS operations maintain automated vulnerability patching, SIEM monitoring, DDoS mitigation,
                and tested disaster recovery protocols guaranteeing rapid recovery time objectives (RTO) and minimal
                recovery point objectives (RPO).
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-foreground mb-2">4. Reporting Vulnerabilities</h2>
              <p>
                To disclose a security observation or request a detailed security evaluation brief, contact our
                security team at{" "}
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
