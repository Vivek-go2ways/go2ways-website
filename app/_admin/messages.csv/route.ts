import { adminGate, messagesCsv, readAll } from "@/lib/server/contact";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export function GET(req: Request) {
  const denied = adminGate(req);
  if (denied) return denied;
  return new Response(messagesCsv(readAll()), {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": 'attachment; filename="go2ways-messages.csv"',
      "Cache-Control": "no-store",
    },
  });
}
