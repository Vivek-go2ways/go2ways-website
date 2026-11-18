import { adminGate, inboxHtml, readAll } from "@/lib/server/contact";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export function GET(req: Request) {
  const denied = adminGate(req);
  if (denied) return denied;
  return new Response(inboxHtml(readAll()), {
    headers: { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-store", "X-Robots-Tag": "noindex" },
  });
}
