import React from "react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata = {
  title: "About Us",
  description: "Learn more about gO2WAYS, our history, leadership, and mission.",
};

export default function AboutPage() {
  return (
    <div className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          badge="About gO2WAYS"
          title="Pioneering Global Corporate Solutions"
          subtitle="Delivering excellence across supply chains, operational transformations, and strategic consulting."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 items-center">
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <h3 className="text-2xl font-bold text-foreground">Our Mission & Purpose</h3>
            <p>
              At gO2WAYS, we empower modern enterprises to navigate complex global logistical and operational hurdles with speed, precision, and confidence.
            </p>
            <p>
              Our multidisciplinary team combines deep industry expertise with cutting-edge technological infrastructure, ensuring seamless execution across every initiative.
            </p>
          </div>

          <div className="rounded-2xl border border-card-border bg-card/60 p-8 space-y-6">
            <h4 className="text-xl font-bold text-foreground">Core Corporate Values</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <span className="h-2 w-2 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                <span><strong>Integrity & Governance:</strong> Transparent, ethical, and rigorously compliant operations.</span>
              </li>
              <li className="flex gap-3">
                <span className="h-2 w-2 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                <span><strong>Relentless Innovation:</strong> Continuously evolving tools and systems to anticipate market shifts.</span>
              </li>
              <li className="flex gap-3">
                <span className="h-2 w-2 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                <span><strong>Sustainable Growth:</strong> Environmental and economic stewardship embedded into every strategy.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Leadership & Certifications Section */}
        <div id="leadership" className="scroll-mt-24 mt-24 pt-16 border-t border-black/[0.08]">
          <SectionHeading
            badge="Leadership & Certifications"
            title="Strategic Leadership & Enterprise Credentials"
            subtitle="Backed by senior EAM architects, certified cloud practitioners, and trusted industry partnerships."
            align="left"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            <div className="rounded-xl border border-card-border bg-white p-6 shadow-sm">
              <span className="text-xs font-bold uppercase tracking-wider text-primary block mb-2 font-heading">
                Enterprise Partnership
              </span>
              <h4 className="text-lg font-bold text-foreground mb-2">IBM Silver Partner</h4>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Specialized in IBM Maximo Application Suite (MAS), TRIRIGA IWMS, and enterprise integration scripting.
              </p>
            </div>

            <div className="rounded-xl border border-card-border bg-white p-6 shadow-sm">
              <span className="text-xs font-bold uppercase tracking-wider text-primary block mb-2 font-heading">
                Cloud Architecture
              </span>
              <h4 className="text-lg font-bold text-foreground mb-2">AWS & Azure Advanced Tier</h4>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Certified cloud engineers delivering high-availability clusters, OpenShift deployments, and automated failover.
              </p>
            </div>

            <div className="rounded-xl border border-card-border bg-white p-6 shadow-sm">
              <span className="text-xs font-bold uppercase tracking-wider text-primary block mb-2 font-heading">
                Global Delivery
              </span>
              <h4 className="text-lg font-bold text-foreground mb-2">70+ Certified Engineers</h4>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Multi-disciplinary technical directors, functional consultants, and round-the-clock AMS support specialists.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

