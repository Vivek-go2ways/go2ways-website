"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { initSite } from "@/lib/site-effects";

export default function SiteEffects() {
  const pathname = usePathname();
  const router = useRouter();
  useEffect(
    () => initSite({ navigate: (href) => router.push(href), prefetch: (href) => router.prefetch(href) }),
    [pathname, router],
  );
  return null;
}
