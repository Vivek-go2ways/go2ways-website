import { after } from "next/server";
import { cleanContact, clientIp, json, makeLimiter, readJson, validateContact } from "@/lib/server/shared";
import { emailTeam, saveMessage } from "@/lib/server/contact";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_BODY = 16 * 1024;
const limited = makeLimiter(5, 10 * 60 * 1000);

export async function POST(req: Request) {
  if (limited(clientIp(req))) return json(429, { error: "Too many messages. Please try again in a few minutes." });

  let body: Record<string, unknown>;
  try { body = await readJson(req, MAX_BODY); } catch { return json(400, { error: "Invalid request." }); }

  if (body.website) return json(200, { ok: true });

  const d = cleanContact(body);
  const errors = validateContact(d);
  if (Object.keys(errors).length) return json(422, { error: "Please check the highlighted fields.", errors });

  let entry;
  try {
    entry = saveMessage(d);
  } catch (err) {
    console.error("[contact] could not save message:", (err as Error).message);
    return json(500, { error: "Could not send your message. Please email support@go2ways.com." });
  }
  console.log(`[contact] new message from ${d.name} <${d.email}>`);

  after(() => emailTeam(d, entry));
  return json(200, { ok: true });
}
