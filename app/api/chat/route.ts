import fs from "node:fs";
import path from "node:path";
import Anthropic from "@anthropic-ai/sdk";
import {
  ERROR_MARKER, MAX_MESSAGE_CHARS, MODEL_DEFAULT, REFUSAL_TEXT,
  buildMessages, buildSystemPrompt, chatRequest, clientIp, json, makeLimiter, readJson,
} from "@/lib/server/shared";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_BODY_BYTES = 32 * 1024;
const MODEL = process.env.CHAT_MODEL || MODEL_DEFAULT;
const rateLimited = makeLimiter(30, 10 * 60 * 1000);

let systemPrompt: string | null = null;
const getSystemPrompt = () =>
  (systemPrompt ??= buildSystemPrompt(fs.readFileSync(path.join(process.cwd(), "content", "knowledge.md"), "utf8")));

let client: Anthropic | null | undefined;
const getClient = () =>
  client !== undefined ? client : (client = process.env.ANTHROPIC_API_KEY || process.env.ANTHROPIC_AUTH_TOKEN ? new Anthropic() : null);

export async function POST(req: Request) {
  const anthropic = getClient();
  if (!anthropic) return json(503, { error: "Chat AI is not configured (no ANTHROPIC_API_KEY)." });
  if (rateLimited(clientIp(req))) return json(429, { error: "Too many messages. Please wait a few minutes." });

  let body: Record<string, unknown>;
  try { body = await readJson(req, MAX_BODY_BYTES); } catch { return json(400, { error: "Invalid request." }); }
  const message = String(body.message || "").trim().slice(0, MAX_MESSAGE_CHARS);
  if (!message) return json(400, { error: "Empty message." });

  const messages = buildMessages(body.history, message, typeof body.page === "string" ? body.page : "");
  const params = chatRequest({ model: MODEL, systemPrompt: getSystemPrompt(), messages });
  const encoder = new TextEncoder();

  const stream = new ReadableStream<Uint8Array>({
    start(controller) {
      const reply = anthropic.beta.messages.stream(params as Parameters<typeof anthropic.beta.messages.stream>[0], { signal: req.signal });
      reply.on("text", (delta) => controller.enqueue(encoder.encode(delta)));
      reply.finalMessage().then((final) => {
        if (final.stop_reason === "refusal") controller.enqueue(encoder.encode(REFUSAL_TEXT));
        controller.close();
      }).catch((err: unknown) => {
        if (req.signal.aborted) return;
        if (err instanceof Anthropic.AuthenticationError) console.error("[chat] invalid API key");
        else if (err instanceof Anthropic.RateLimitError) console.error("[chat] rate limited by the API");
        else if (err instanceof Anthropic.APIError) console.error(`[chat] API error ${err.status}: ${err.message}`);
        else console.error("[chat]", err);

        controller.enqueue(encoder.encode(ERROR_MARKER));
        controller.close();
      });
    },
  });

  return new Response(stream, {
    headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "no-store", "X-Accel-Buffering": "no" },
  });
}
