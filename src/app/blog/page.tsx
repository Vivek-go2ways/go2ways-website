import React from "react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata = {
  title: "Insights & Perspectives",
  description: "Executive viewpoints, logistics breakthroughs, and corporate strategy analysis.",
};

const articles = [
  {
    title: "Navigating Volatility in Modern Global Supply Networks",
    category: "Logistics",
    date: "October 2026",
    excerpt: "How forward-thinking enterprises build antifragile operational ecosystems.",
  },
  {
    title: "The Role of Intelligent Automation in Corporate Governance",
    category: "Technology",
    date: "September 2026",
    excerpt: "Bridging speed and regulatory rigor through next-generation workflows.",
  },
  {
    title: "Sustainable Trade: Balancing Profitability with ESG Targets",
    category: "Strategy",
    date: "August 2026",
    excerpt: "Actionable frameworks for long-term stakeholder value creation.",
  },
];

export default function BlogPage() {
  return (
    <div className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          badge="Thought Leadership"
          title="Insights & Perspectives"
          subtitle="Explore the latest analysis and executive perspectives from the gO2WAYS advisory team."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {articles.map((article, index) => (
            <article
              key={index}
              className="rounded-2xl border border-card-border bg-card/60 p-8 flex flex-col justify-between hover:border-primary/40 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                  <span className="font-semibold text-primary">{article.category}</span>
                  <span>{article.date}</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 leading-snug">
                  {article.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {article.excerpt}
                </p>
              </div>
              <div className="mt-6 pt-6 border-t border-border/20 text-xs font-semibold text-primary">
                Read Article →
              </div>
            </article>
          ))}
        </div>
      </Container>
    </div>
  );
}

