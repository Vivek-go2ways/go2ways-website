import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServicePage from "@/components/ServicePage";
import { SERVICES, serviceBySlug } from "@/content/services";

type Params = { service: string };

const slugOf = (segment: string) => segment.match(/^service-([a-z-]+)$/)?.[1] ?? "";

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return SERVICES.map((s) => ({ service: `service-${s.slug}` }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const s = serviceBySlug(slugOf((await params).service));
  if (!s) return {};
  return { title: `${s.name} — go2ways`, description: s.sub };
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const s = serviceBySlug(slugOf((await params).service));
  if (!s) notFound();
  return <ServicePage s={s} />;
}
