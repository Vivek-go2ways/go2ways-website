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
      </Container>
    </div>
  );
}

