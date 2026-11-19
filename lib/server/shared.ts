export const MODEL_DEFAULT = "claude-opus-5-5";
export const MAX_MESSAGE_CHARS = 600;
const MAX_HISTORY = 12;
export const REFUSAL_TEXT = "\n\nSorry, I can't help with that here. For anything about Go2Ways, the team is at support@go2ways.com.";
export const ERROR_MARKER = "\u0000ERROR";

export function buildSystemPrompt(knowledge: string) {
  return `You are the Go2Ways website assistant. You chat with visitors on Go2Ways' website and help them understand what the company does, find the right service or product page, and get in touch with the team.

How to answer:
- Answer only from the company briefing below. If something isn't covered, say you don't have that detail and point the visitor to the team (email, phone or the contact form). Never guess at prices, numbers, certifications, clients or timelines.
- Keep replies short: two to four sentences, or a brief list when the visitor asks for several things. Write in plain, friendly English.
- When a page on the site answers the question, link it with a markdown link using the path given in the briefing, for example [MAS Migration](/service-mas-migration). Link at most two pages per reply.
- Formatting: plain text, markdown links, **bold** for a key term, and "- " bullet lists. No headings, tables or code blocks.
- Stay on topic. For unrelated requests (general knowledge, coding help, opinions), say briefly that you can only help with questions about Go2Ways.
- You are an automated assistant. Don't claim to be a person, and don't promise anything on the team's behalf (meetings, discounts, deadlines); offer the contact form or booking link instead.

<company_briefing>
${knowledge}
</company_briefing>`;
}

export type ChatMessage = { role: "user" | "assistant" | "system"; content: string };

export function buildMessages(history: unknown, message: string, page: string): ChatMessage[] {
  const out: ChatMessage[] = [];
  for (const m of Array.isArray(history) ? history.slice(-MAX_HISTORY) : []) {
    if (!m || (m.role !== "user" && m.role !== "assistant")) continue;
    const text = String(m.content || "").slice(0, 1500).trim();
    if (!text) continue;
    if (!out.length && m.role !== "user") continue;
    if (out.length && out[out.length - 1].role === m.role) out[out.length - 1].content += "\n\n" + text;
    else out.push({ role: m.role, content: text });
  }
  if (out.length && out[out.length - 1].role === "user") out.pop();
  out.push({ role: "user", content: message });
  if (page) {
    out.push({ role: "system", content: `The visitor is currently on the page ${String(page).slice(0, 120)}.` });
  }
  return out;
}

export function chatRequest({ model, systemPrompt, messages }: { model?: string; systemPrompt: string; messages: ChatMessage[] }) {
  return {
    model: model || MODEL_DEFAULT,
    max_tokens: 4000,
    output_config: { effort: "low" as const },
    betas: ["server-side-fallback-2026-07-01"],
    fallbacks: "default" as const,
    system: [{ type: "text" as const, text: systemPrompt, cache_control: { type: "ephemeral" as const } }],
    messages,
  };
}

const LIMITS = { name: 120, email: 200, company: 160, phone: 40, message: 4000, topic: 60, page: 120 };
export type Contact = Record<keyof typeof LIMITS, string>;

export function cleanContact(body: Record<string, unknown> | null): Contact {
  const d = {} as Contact;
  for (const [k, max] of Object.entries(LIMITS) as [keyof Contact, number][]) d[k] = String((body && body[k]) ?? "").trim().slice(0, max);
  return d;
}

export function validateContact(d: Contact) {
  const errors: Partial<Record<keyof Contact, string>> = {};
  if (d.name.length < 2) errors.name = "Please enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(d.email)) errors.email = "Please enter a valid work email.";
  if (d.phone && !/^[+()\d\s-]{7,}$/.test(d.phone)) errors.phone = "Please enter a valid phone number.";
  if (d.message.length < 10) errors.message = "Tell us a little more (at least 10 characters).";
  return errors;
}

export function makeLimiter(max: number, windowMs: number) {
  const hits = new Map<string, number[]>();
  return function limited(key: string) {
    const now = Date.now();
    const list = (hits.get(key) || []).filter((t) => now - t < windowMs);
    list.push(now);
    hits.set(key, list);
    if (hits.size > 5000) hits.clear();
    return list.length > max;
  };
}

export function clientIp(req: Request) {
  return req.headers.get("x-forwarded-for")?.split(",")[0].trim() || req.headers.get("x-real-ip") || "unknown";
}

export function json(status: number, body: unknown) {
  return Response.json(body, { status, headers: { "Cache-Control": "no-store" } });
}

export async function readJson(req: Request, maxBytes: number): Promise<Record<string, unknown>> {
  const text = await req.text();
  if (Buffer.byteLength(text) > maxBytes) throw new Error("too large");
  const v = JSON.parse(text);
  if (!v || typeof v !== "object") throw new Error("not an object");
  return v;
}
