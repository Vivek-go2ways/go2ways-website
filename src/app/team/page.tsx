import React from "react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata = {
  title: "Our Team",
  description: "Meet the leadership team driving gO2WAYS forward.",
};

const leaders = [
  {
    name: "Executive Leadership",
    role: "Strategic Direction",
    bio: "Decades of combined corporate operations, logistics engineering, and organizational transformation expertise.",
  },
  {
    name: "Operations Directorate",
    role: "Global Logistics & Execution",
    bio: "Pioneering high-throughput international supply chain execution and client governance.",
  },
  {
    name: "Technology & Infrastructure",
    role: "Enterprise Systems",
    bio: "Deploying secure, modern, data-backed operational platforms for multi-region teams.",
  },
];

export default function TeamPage() {
  return (
    <div className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          badge="Leadership & Expertise"
          title="Meet Our Leadership"
          subtitle="Experienced corporate visionaries committed to sustainable performance and client success."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {leaders.map((member, index) => (
            <div
              key={index}
              className="rounded-2xl border border-card-border bg-card/60 p-8 text-center hover:border-primary/40 transition-colors"
            >
              <div className="h-24 w-24 rounded-full bg-primary/10 border border-primary/20 mx-auto flex items-center justify-center text-primary font-bold text-2xl mb-6">
                {member.name.charAt(0)}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
              <p className="text-xs uppercase font-semibold text-primary tracking-wider mb-4">
                {member.role}
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

