import React from "react";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils";

export interface PageHeroMetric {
  label: string;
  value: string;
}

export interface PageHeroProps {
  badge?: string;
  badgePill?: boolean;
  title: string;
  subtitle?: string;
  metrics?: PageHeroMetric[];
  className?: string;
  children?: React.ReactNode;
}

export function PageHero({
  badge,
  badgePill = false,
  title,
  subtitle,
  metrics,
  className,
  children,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "bg-white border-b border-black/[0.08] pt-16 pb-12 sm:pt-20 sm:pb-16",
        className
      )}
    >
      <Container>
        <div className="max-w-4xl">
          {badge && (
            badgePill ? (
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200/80 text-xs font-bold text-primary uppercase tracking-wide mb-6">
                {badge}
              </div>
            ) : (
              <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-3 font-heading">
                {badge}
              </span>
            )
          )}

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground font-heading leading-tight">
            {title}
          </h1>

          {subtitle && (
            <p className="mt-5 sm:mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl">
              {subtitle}
            </p>
          )}

          {children}

          {metrics && metrics.length > 0 && (
            <div className="mt-12 pt-8 border-t border-black/[0.08] grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
              {metrics.map((item) => (
                <div key={item.label}>
                  <div className="text-2xl sm:text-3xl font-extrabold text-primary font-heading">
                    {item.value}
                  </div>
                  <div className="text-xs font-semibold text-muted-foreground mt-1 leading-snug">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}

