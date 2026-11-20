import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServicePage from "@/components/ServicePage";
import { SERVICES, serviceBySlug } from "@/content/services";
import { link } from "@/lib/paths";

type Params = { service: string };

const slugOf = (segment: string) => segment.match(/^service-([a-z-]+)$/)?.[1] ?? "";

const LEGACY_ALIASES: Record<string, { slug: string; hash?: string }> = {
  "ibm-maximo": { slug: "ibm-maximo-mas" },
  "mas-migration": { slug: "ibm-maximo-mas" },
  "enterprise-integration": { slug: "erp-enterprise-applications", hash: "integration" },
  tririga: { slug: "erp-enterprise-applications", hash: "tririga" },
};

const legacyTarget = (slug: string) => {
  const alias = LEGACY_ALIASES[slug];
  const target = serviceBySlug(alias.slug)!;
  return { name: target.name, url: link(`/service-${alias.slug}`) + (alias.hash ? `#${alias.hash}` : "") };
};

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  const params: Params[] = SERVICES.map((s) => ({ service: `service-${s.slug}` }));
  for (const legacy of Object.keys(LEGACY_ALIASES)) {
    params.push({ service: `service-${legacy}` });
  }
  return params;
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const slug = slugOf((await params).service);
  if (LEGACY_ALIASES[slug]) {
    const target = legacyTarget(slug);
    return {
      title: `${target.name} — Go2Ways`,
      description: `Redirecting to ${target.name}.`,
      robots: { index: false, follow: true },
      alternates: { canonical: target.url },
    };
  }
  const s = serviceBySlug(slug);
  if (!s) return {};
  return { title: `${s.name} — Go2Ways`, description: s.sub };
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const slug = slugOf((await params).service);
  if (LEGACY_ALIASES[slug]) {
    const target = legacyTarget(slug);
    return (
      <main className="container" style={{ padding: "120px 24px", textAlign: "center" }}>
        <meta httpEquiv="refresh" content={`0;url=${target.url}`} />
        <h1 className="heading-l" style={{ marginBottom: "16px" }}>Page Moved</h1>
        <p className="body-l">
          This service is now part of <strong>{target.name}</strong>.
        </p>
        <p className="body-m" style={{ marginTop: "24px" }}>
          <a className="btn btn-primary" href={target.url}>Continue to {target.name}</a>
        </p>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.location.replace(${JSON.stringify(target.url)});`,
          }}
        />
      </main>
    );
  }
  const s = serviceBySlug(slug);
  if (!s) notFound();
  return <ServicePage s={s} />;
}
