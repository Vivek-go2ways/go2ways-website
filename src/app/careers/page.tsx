import React from "react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Careers",
  description: "Join our expanding global team at gO2WAYS.",
};

const openRoles = [
  {
    title: "Senior Supply Chain Strategist",
    department: "Operations",
    location: "Global / Hybrid",
  },
  {
    title: "Enterprise Solutions Architect",
    department: "Technology",
    location: "Global / Remote",
  },
  {
    title: "Client Engagement Director",
    department: "Business Development",
    location: "New York, NY / Hybrid",
  },
];

export default function CareersPage() {
  return (
    <div className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          badge="Join Our Team"
          title="Build the Future of Corporate Operations"
          subtitle="We are looking for dedicated professionals driven to make a tangible global impact."
        />

        <div className="space-y-4 max-w-3xl mx-auto mt-16">
          {openRoles.map((role, index) => (
            <div
              key={index}
              className="rounded-xl border border-card-border bg-card/60 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-primary/40 transition-colors"
            >
              <div>
                <h3 className="text-lg font-bold text-foreground">{role.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {role.department} · {role.location}
                </p>
              </div>
              <Button variant="outline" size="sm">
                View Position
              </Button>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

