import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServicePage from "@/components/ServicePage";
import { SERVICES, serviceBySlug } from "@/content/services";
import { link } from "@/lib/paths";

type Params = { service: string };

const slugOf = (segment: string) => segment.match(/^service-([a-z-]+)$/)?.[1] ?? "";

const LEGACY_ALIASES: Record<string, string> = {
  "ibm-maximo": "ibm-maximo-mas",
  "mas-migration": "ibm-maximo-mas",
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
    const targetSlug = LEGACY_ALIASES[slug];
    const targetUrl = link(`/service-${targetSlug}`);
    return {
      title: "IBM Maximo & MAS Services — Go2Ways",
      description: "Redirecting to IBM Maximo & MAS Services.",
      robots: { index: false, follow: true },
      alternates: { canonical: targetUrl },
    };
  }
  const s = serviceBySlug(slug);
  if (!s) return {};
  return { title: `${s.name} — Go2Ways`, description: s.sub };
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const slug = slugOf((await params).service);
  if (LEGACY_ALIASES[slug]) {
    const targetSlug = LEGACY_ALIASES[slug];
    const targetUrl = link(`/service-${targetSlug}`);
    return (
      <main className="container" style={{ padding: "120px 24px", textAlign: "center" }}>
        <meta httpEquiv="refresh" content={`0;url=${targetUrl}`} />
        <h1 className="heading-l" style={{ marginBottom: "16px" }}>Page Moved</h1>
        <p className="body-l">
          This service has been updated to <strong>IBM Maximo &amp; MAS Services</strong>.
        </p>
        <p className="body-m" style={{ marginTop: "24px" }}>
          <a className="btn btn-primary" href={targetUrl}>Continue to IBM Maximo &amp; MAS Services</a>
        </p>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.location.replace(${JSON.stringify(targetUrl)});`,
          }}
        />
      </main>
    );
  }
  const s = serviceBySlug(slug);
  if (!s) notFound();
  return <ServicePage s={s} />;
}
