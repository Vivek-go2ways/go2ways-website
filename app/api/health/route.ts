import { contactStatus } from "@/lib/server/contact";

export const dynamic = "force-dynamic";

export function GET() {
  return Response.json({
    ok: true,
    chatAI: Boolean(process.env.ANTHROPIC_API_KEY || process.env.ANTHROPIC_AUTH_TOKEN),
    email: contactStatus.email,
    inbox: contactStatus.inbox,
  }, { headers: { "Cache-Control": "no-store" } });
}
