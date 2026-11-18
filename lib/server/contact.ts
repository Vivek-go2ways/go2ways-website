import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import nodemailer from "nodemailer";
import type { Contact } from "./shared";

const env = process.env;

const DATA_DIR = env.DATA_DIR ? path.resolve(env.DATA_DIR) : path.join(process.cwd(), "data");
const STORE = path.join(DATA_DIR, "messages.jsonl");

export type Entry = Contact & { id: string; receivedAt: string };

const mailer = env.SMTP_HOST && env.NOTIFY_TO
  ? nodemailer.createTransport({
      host: env.SMTP_HOST,
      port: Number(env.SMTP_PORT) || 587,
      secure: Number(env.SMTP_PORT) === 465,
      auth: env.SMTP_USER ? { user: env.SMTP_USER, pass: env.SMTP_PASS } : undefined,
    })
  : null;

export const contactStatus = {
  email: !!mailer,
  inbox: !!env.ADMIN_PASSWORD,
};

export function saveMessage(d: Contact): Entry {
  const entry: Entry = { id: crypto.randomUUID(), receivedAt: new Date().toISOString(), ...d };
  fs.mkdirSync(DATA_DIR, { recursive: true });
  fs.appendFileSync(STORE, JSON.stringify(entry) + "\n");
  return entry;
}

export async function emailTeam(d: Contact, entry: Entry) {
  if (!mailer) return;
  try {
    await mailer.sendMail({
      from: env.NOTIFY_FROM || env.SMTP_USER,
      to: env.NOTIFY_TO,
      replyTo: `${d.name} <${d.email}>`,
      subject: `New website enquiry from ${d.name}${d.company ? ` (${d.company})` : ""}`,
      text: [
        `Name: ${d.name}`, `Email: ${d.email}`, `Company: ${d.company || "-"}`, `Phone: ${d.phone || "-"}`,
        d.topic ? `Topic: ${d.topic}` : null, "", d.message, "", `Received ${entry.receivedAt}`,
      ].filter((l) => l !== null).join("\n"),
    });
  } catch (err) {
    console.error("[contact] email failed (message is still saved):", (err as Error).message);
  }
}

export function authorised(req: Request) {
  const pass = env.ADMIN_PASSWORD;
  if (!pass) return false;
  const m = /^Basic (.+)$/.exec(req.headers.get("authorization") || "");
  if (!m) return false;
  const given = Buffer.from(m[1], "base64").toString("utf8").split(":").slice(1).join(":");
  const a = crypto.createHash("sha256").update(given).digest();
  const b = crypto.createHash("sha256").update(pass).digest();
  return crypto.timingSafeEqual(a, b);
}

export function readAll(): Entry[] {
  if (!fs.existsSync(STORE)) return [];
  return fs.readFileSync(STORE, "utf8").split("\n").filter(Boolean)
    .map((l) => { try { return JSON.parse(l) as Entry; } catch { return null; } })
    .filter((e): e is Entry => e !== null)
    .reverse();
}

export function adminGate(req: Request): Response | null {
  if (!env.ADMIN_PASSWORD) {
    return new Response("The inbox is off. Set ADMIN_PASSWORD in .env.local and restart the server.", { status: 404, headers: { "Content-Type": "text/plain" } });
  }
  if (!authorised(req)) {
    return new Response("Sign in with any username and the inbox password.", {
      status: 401,
      headers: { "WWW-Authenticate": 'Basic realm="go2ways inbox", charset="UTF-8"', "Content-Type": "text/plain" },
    });
  }
  return null;
}

const esc = (s: unknown) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

const csvCell = (v: unknown) => {
  let s = String(v ?? "");
  if (/^[=+\-@\t\r]/.test(s)) s = "'" + s;
  return `"${s.replace(/"/g, '""')}"`;
};

export function messagesCsv(items: Entry[]) {
  const cols = ["receivedAt", "name", "email", "company", "phone", "topic", "message"] as const;
  return [cols.join(","), ...items.map((m) => cols.map((c) => csvCell(m[c])).join(","))].join("\n");
}

export function inboxHtml(items: Entry[]) {
  const rows = items.map((m) => `
    <article>
      <header><b>${esc(m.name)}</b> <a href="mailto:${esc(m.email)}">${esc(m.email)}</a>${m.company ? ` · ${esc(m.company)}` : ""}${m.phone ? ` · <a href="tel:${esc(m.phone)}">${esc(m.phone)}</a>` : ""}
        <time>${esc(new Date(m.receivedAt).toLocaleString("en-IN", { dateStyle: "medium", timeStyle: "short", timeZone: "Asia/Kolkata" }))}</time></header>
      ${m.topic ? `<span class="tag">${esc(m.topic)}</span>` : ""}
      <p>${esc(m.message).replace(/\n/g, "<br>")}</p>
    </article>`).join("");
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex"><title>Inbox — go2ways</title>
<style>
  body{margin:0;font:15px/1.5 Inter,system-ui,sans-serif;color:#111;background:#f6f6f5}
  main{max-width:820px;margin:0 auto;padding:32px 16px 64px}
  h1{font-size:28px;font-weight:500;margin:0 0 4px} .sub{color:#4d4d4d;margin:0 0 24px;display:flex;gap:16px;flex-wrap:wrap;align-items:center}
  .sub a{color:#111;background:#fff;border:1px solid #d2d2d2;border-radius:999px;padding:6px 14px;text-decoration:none}
  article{background:#fff;border:1px solid #e4e4e4;border-radius:18px;padding:18px 20px;margin-bottom:12px}
  header{display:flex;flex-wrap:wrap;gap:6px 10px;align-items:baseline} header a{color:#1f66cc}
  time{margin-left:auto;color:#767676;font-size:13px} p{margin:10px 0 0;white-space:normal}
  .tag{display:inline-block;margin-top:8px;font-size:12px;padding:2px 10px;border-radius:999px;background:#eef3fa;color:#2a58a8}
  .empty{color:#4d4d4d;background:#fff;border:1px dashed #d2d2d2;border-radius:18px;padding:32px;text-align:center}
</style></head><body><main>
<h1>Website messages</h1>
<p class="sub">${items.length} message${items.length === 1 ? "" : "s"}, newest first <a href="/admin/messages.csv">Download as spreadsheet (CSV)</a></p>
${rows || '<p class="empty">No messages yet. They appear here as soon as someone sends the contact form.</p>'}
</main></body></html>`;
}
