import { link as toLink } from "./paths";

type Intent = { id: string; keys: [RegExp, number][]; reply: () => string; chips: string[] };
type Msg = { from: "user" | "bot"; text?: string; html?: string; chips?: string[] };
type Answer = { html: string; text?: string; chips: string[]; painted?: boolean };

const STORE = "g2w-chat-v1";

const CONTACT = {
  email: "support@go2ways.com",
  phone: "+91 88269 49739",
  tel: "+918826949739",
  hours: "Monday to Saturday, 9:00 AM – 6:00 PM (IST)",
  address: "314a Sector 102, Gurugram, Haryana",
};

type Svc = { slug: string; name: string; text: string; keys: [RegExp, number][] };
const SERVICES: Svc[] = [
  { slug: "ibm-maximo-mas", name: "IBM Maximo Application Suite (MAS)",
    text: "We implement, configure, upgrade and support IBM Maximo and deliver planned migrations to IBM Maximo Application Suite (MAS), including Red Hat OpenShift deployment, AppPoints licensing, automation scripting and BIRT reports.",
    keys: [[/\bmaximo\b/, 2], [/\beam\b/, 2], [/asset management/, 2], [/\bmas\b/, 4], [/application suite/, 4], [/7\.6/, 4], [/migrat/, 3], [/automation script/, 3], [/\bbirt\b/, 3], [/apppoints?/, 4], [/implement/, 1]] },
  { slug: "ai-solutions", name: "AI & Web Solutions",
    text: "Our AI & Web Solutions service covers two areas. AI Solutions: Generative AI and RAG knowledge systems, AI chatbots, AI agents and workflow automation, document intelligence and custom ML models (forecasting, anomaly detection, computer vision, NLP), with AI strategy and MLOps. Web Development: websites, web and SaaS applications, portals, e-commerce and full-stack/API development on any tech stack, with maintenance and support.",
    keys: [[/\bai\b|artificial intelligence/, 3], [/machine learning|\bml\b/, 4], [/generative|gen ?ai|\bllms?\b|gpt/, 4], [/\brag\b|knowledge (base|system)/, 4], [/chatbot|virtual assistant/, 3], [/agents?\b|agentic/, 3], [/document (processing|intelligence)|\bidp\b|\bocr\b/, 4], [/predict|forecast|anomal/, 2], [/computer vision|\bnlp\b/, 4], [/mlops|fine.?tun/, 4], [/web ?sites?|landing page|web ?(app|application|development|developer|design)/, 4], [/\bsaas\b|portal|admin panel|dashboard/, 3], [/e-?commerce|online (store|shop)|shopping cart|payment gateway/, 4], [/react|next\.?js|angular|\bvue\b|node\.?js|fastapi|django|python|\.net\b|\bjava\b|full.?stack|front.?end|back.?end/, 3]] },
  { slug: "erp-enterprise-applications", name: "ERP & Enterprise Applications",
    text: "Our ERP & Enterprise Applications service covers two areas. Enterprise Integration: we connect Maximo with SAP, Oracle, identity (Azure AD / Entra ID), GIS and IoT systems using REST APIs, the Maximo Integration Framework and messaging such as Kafka. TRIRIGA: we implement and support IBM TRIRIGA (now IBM Maximo Real Estate and Facilities) for space management, lease administration and accounting (IFRS 16 / ASC 842), facility maintenance and capital projects.",
    keys: [[/\berp\b|enterprise app/, 4], [/integrat/, 3], [/\bsap\b/, 3], [/oracle/, 2], [/\bapis?\b/, 2], [/middleware/, 3], [/kafka/, 3], [/single sign|\bsso\b|azure ad|entra/, 3], [/\bgis\b|esri/, 2], [/\biot\b|sensor/, 2], [/tririga|triga/, 4], [/lease/, 3], [/space (management|planning)|floor plan|occupan/, 3], [/facilit/, 2], [/iwms/, 4], [/workplace/, 2]] },
  { slug: "cloud-infrastructure", name: "Cloud & Infrastructure",
    text: "We deploy and run infrastructure on AWS, Azure and Red Hat OpenShift, with backup and disaster recovery, 24/7 monitoring, virtualisation and security hardening.",
    keys: [[/cloud/, 3], [/\baws\b|amazon/, 3], [/azure/, 2], [/openshift/, 2], [/infra/, 3], [/backup|disaster|recovery/, 3], [/server|hosting|vmware|virtuali/, 2]] },
  { slug: "managed-support", name: "Managed Support",
    text: "Our managed support covers L2/L3 application support, application management services (AMS), 24/7 monitoring, incident and problem management, health checks and patching.",
    keys: [[/support/, 2], [/\bams\b/, 3], [/24 ?[x\/] ?7|round the clock|around the clock/, 3], [/incident/, 3], [/\bl2\b|\bl3\b/, 3], [/help ?desk|ticket/, 2], [/\bsla\b/, 2]] },
  { slug: "mobile-development", name: "Enterprise Mobile Solutions",
    text: "We develop connected enterprise mobile solutions and deploy Maximo Mobile for field teams: offline-first access, digital inspections, forms with photos/signatures, GPS maps and barcode/RFID scanning.",
    keys: [[/mobile/, 3], [/\bapps?\b/, 2], [/field (team|work|staff|service)|technician/, 3], [/offline/, 3], [/android|\bios\b|iphone/, 3], [/barcode|rfid|scan/, 2], [/inspection/, 2]] },
  { slug: "consulting-advisory", name: "Enterprise Technology Consulting & Architecture",
    text: "We provide enterprise technology consulting and solution architecture: modernisation roadmaps, system assessments, architecture reviews, integration planning and technical advisory.",
    keys: [[/consult/, 3], [/advis/, 3], [/architect/, 4], [/roadmap|strategy/, 3], [/assessment|audit|review/, 3]] },
];

const link = (href: string, label: string) => '<a href="' + toLink(href) + '">' + label + "</a>";
const svcLink = (s: Svc) => link("/service-" + s.slug, s.name);
const bySlug = (slug: string | undefined) => SERVICES.find((s) => s.slug === slug);

const INTENTS: Intent[] = [
  { id: "greet", keys: [[/^(hi|hello|hey|hiya|namaste|good (morning|afternoon|evening))\b/, 3]],
    reply: () => "Hello! I can tell you about Go2Ways’ services, our products, the industries we work in, or how to reach the team. What would you like to know?",
    chips: ["What services do you offer?", "Tell me about Ordova", "How do I contact you?"] },
  { id: "about", keys: [[/about (go2ways|g2ways|the company|your company|you)/, 4], [/who (are|is) (you|go2ways)\b/, 4], [/what (is|does) go2ways/, 4], [/\bcompany\b/, 1], [/go2ways|g2ways/, 1]],
    reply: () => "Go2Ways is an enterprise technology partner for asset-driven businesses, based in Gurugram, Haryana. We help organisations run their operations better with IBM Maximo, MAS migration, AI, machine learning and web development, enterprise integration, cloud, managed support, TRIRIGA, mobile apps and consulting. We also build our own products, such as " + link("https://ordova.go2ways.com/", "Ordova") + ".",
    chips: ["What services do you offer?", "Which industries do you work with?", "Who have you worked with?"] },
  { id: "services", keys: [[/\bservices?\b/, 1], [/what (do|can) you (do|offer|help)/, 3], [/\boffer(ings?)?\b/, 2], [/help (me|us) with/, 1]],
    reply: () => "We offer " + SERVICES.length + " services:<ul>" + SERVICES.map((s) => "<li>" + svcLink(s) + "</li>").join("") + "</ul>Which one would you like to know more about?",
    chips: ["MAS migration", "Managed support", "Consulting"] },
  { id: "products", keys: [[/products?/, 3], [/platform|software you (make|build|sell)/, 2]],
    reply: () => "We have two products:<ul><li>" + link("https://ordova.go2ways.com/", "Ordova") + ": an intelligent transport management system for bus operators and transport authorities.</li><li><b>Emp AI</b>: in development and not available yet.</li></ul>",
    chips: ["Tell me about Ordova", "When is Emp AI launching?"] },
  { id: "ordova", keys: [[/ordova/, 5], [/transport/, 2], [/\bbus(es)?\b/, 3], [/fleet/, 2], [/dispatch/, 3], [/transit|depot/, 2]],
    reply: () => "Ordova is Go2Ways’ intelligent transport management system for bus operators and transport authorities. It covers network and trip planning, live dispatch, fleet and depot maintenance, analytics, and AI recommendations for dispatchers, and it connects to systems like IBM Maximo, GPS and ticketing. " + link("https://ordova.go2ways.com/", "Visit the Ordova site") + ".",
    chips: ["Book a demo", "What services do you offer?"] },
  { id: "empai", keys: [[/emp ?ai/, 5]],
    reply: () => "Emp AI is still in development, so there’s nothing to share publicly yet. If you’d like to hear when it launches, " + link("/contact#contact-form", "leave us a message") + ".",
    chips: ["Tell me about Ordova", "How do I contact you?"] },
  { id: "industries", keys: [[/industr/, 3], [/sectors?/, 3], [/manufactur|utilit|oil|\bgas\b|government|healthcare|hospital|infrastructure|real estate/, 1]],
    reply: () => "We work across eight sectors: manufacturing, utilities, oil &amp; gas, government, healthcare, infrastructure, transportation and real estate. " + link("/industries#sectors", "See the sectors") + ".",
    chips: ["Who have you worked with?", "What services do you offer?"] },
  { id: "clients", keys: [[/clients?|customers?/, 3], [/worked (with|for)/, 3], [/case stud|portfolio|references?/, 3]],
    reply: () => "We’ve provided services to organisations including LTI (a Larsen &amp; Toubro Group company), BRIWO, AsahiKASEI, Saudi Electricity Company, CONNIXT, Mitsubishi Heavy Industries and Quantum Strides. " + link("/industries#clients", "See our clients") + ".",
    chips: ["Which industries do you work with?", "Book a demo"] },
  { id: "contact", keys: [[/contact/, 3], [/e-?mail/, 3], [/phone|call|number|whatsapp/, 3], [/reach|get in touch|talk to (someone|a person|sales|the team)/, 3], [/human|real person|agent/, 3]],
    reply: () => "You can reach the Go2Ways team by:<ul><li>Email: " + link("mailto:" + CONTACT.email, CONTACT.email) + "</li><li>Phone: " + link("tel:" + CONTACT.tel, CONTACT.phone) + "</li><li>The " + link("/contact#contact-form", "contact form") + "</li></ul>We reply within 24 hours on business days.",
    chips: ["Where is your office?", "What are your hours?", "Book a demo"] },
  { id: "location", keys: [[/where/, 1], [/locat|address|office|based|gurugram|gurgaon|haryana|delhi|ncr|india|visit/, 3]],
    reply: () => "Our office is at " + CONTACT.address + ". " + link("https://www.google.com/maps/search/?api=1&query=314a+Sector+102+Gurugram+Haryana", "Open in Google Maps") + ". We work with clients across India and internationally, on-site and remotely.",
    chips: ["What are your hours?", "How do I contact you?"] },
  { id: "hours", keys: [[/hours|timings?|opening|open (on|today)|working days|when are you/, 4], [/saturday|sunday|weekend/, 3]],
    reply: () => "We’re open " + CONTACT.hours + ". Messages sent outside those hours are answered on the next business day.",
    chips: ["How do I contact you?", "Book a demo"] },
  { id: "pricing", keys: [[/price|pricing|cost|quote|budget|how much|rates?\b|charges?/, 4]],
    reply: () => "Pricing depends on scope: a health check, a migration and a long-term support contract are priced very differently. Tell us what you need in the " + link("/contact?topic=demo#contact-form", "contact form") + " and we’ll send a proposal.",
    chips: ["Book a demo", "What services do you offer?"] },
  { id: "demo", keys: [[/demo|trial|meeting|book|schedule|appointment/, 4]],
    reply: () => "Happy to set that up. " + link("/contact?topic=demo#contact-form", "Book a demo") + " and we’ll arrange a short call to understand your operation.",
    chips: ["What are your hours?", "What services do you offer?"] },
  { id: "careers", keys: [[/career|jobs?\b|hiring|vacanc|intern|openings?|join (you|your team)/, 4]],
    reply: () => "We don’t have a careers page yet. To ask about openings, email " + link("mailto:" + CONTACT.email, CONTACT.email) + " with your CV and the role you’re interested in.",
    chips: ["What services do you offer?", "Where is your office?"] },
  { id: "partner", keys: [[/partner(ship)?/, 4], [/resell|collaborat/, 3]],
    reply: () => "We partner with system integrators, consultancies and technology vendors. " + link("/contact?topic=partner#contact-form", "Tell us about your company") + " and we’ll be in touch.",
    chips: ["What services do you offer?", "How do I contact you?"] },
  { id: "thanks", keys: [[/thank|thx|cheers|great|perfect|awesome/, 3]],
    reply: () => "You’re welcome! Anything else I can help with?",
    chips: ["What services do you offer?", "How do I contact you?"] },
  { id: "bye", keys: [[/\bbye\b|goodbye|see you|that'?s all/, 4]],
    reply: () => "Thanks for stopping by. If anything else comes up, I’m right here.",
    chips: [] },
];

SERVICES.forEach((s) => {
  INTENTS.push({ id: "svc-" + s.slug, keys: s.keys,
    reply: () => s.text + " " + link("/service-" + s.slug, "Read more about " + s.name) + ".",
    chips: ["Talk to an expert", "What services do you offer?"] });
});

const FALLBACK = {
  reply: () => "I’m not sure about that one. I can help with our services, products, industries, clients and contact details. For anything else, the team can answer directly at " + link("mailto:" + CONTACT.email, CONTACT.email) + " or " + link("tel:" + CONTACT.tel, CONTACT.phone) + ".",
  chips: ["What services do you offer?", "How do I contact you?"],
};

const pageSlug = () => {
  const slug = location.pathname.match(/^\/service-([a-z-]+?)(?:\.html)?$/)?.[1];
  return bySlug(slug) ? slug : undefined;
};

function chipIntent(label: string): string | null {
  if (label === "Talk to an expert") return "contact";
  if (label === "Book a demo") return "demo";
  if (label === "About this service") { const s = pageSlug(); return s ? "svc-" + s : null; }
  return null;
}
const isFixedChip = (label: string) => label === "Talk to an expert" || label === "Book a demo" || label === "About this service";

const normalise = (s: string) => s.toLowerCase().replace(/[’']/g, "'").replace(/\s+/g, " ").trim();
function findIntent(text: string) {
  const t = normalise(text);
  let best: Intent | null = null;
  let bestScore = 0;
  for (const intent of INTENTS) {
    let score = 0;
    for (const [re, weight] of intent.keys) if (re.test(t)) score += weight;
    if (score > bestScore) { best = intent; bestScore = score; }
  }
  return best;
}
const intentById = (id: string | null) => (id ? INTENTS.find((i) => i.id === id) : undefined);

const SAFE_URL = /^(\/(?:[\w-]+(?:\.html)?)?(?:[?#][\w\-=&#.]*)?|#[\w-]+|https:\/\/ordova\.go2ways\.com\/?[\w\-./?=&#]*|mailto:[\w.+-]+@[\w.-]+|tel:\+?[\d ]+)$/;
function esc(t: string) { const d = document.createElement("div"); d.textContent = t; return d.innerHTML; }
function inline(t: string) {
  return esc(t)
    .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_m, label: string, url: string) => {
      let raw = url.replace(/&amp;/g, "&");
      if (!SAFE_URL.test(raw)) return label;
      raw = raw.replace(/^\/([\w-]+)\.html/, (_x, page: string) => (page === "index" ? "/" : "/" + page));
      const ext = /^https:/.test(raw) ? ' target="_blank" rel="noopener"' : "";
      return '<a href="' + esc(raw) + '"' + ext + ">" + label + "</a>";
    })
    .replace(/\*\*([^*]+)\*\*/g, "<b>$1</b>");
}
function renderMd(text: string) {
  const out: string[] = [];
  let list: string[] | null = null;
  text.replace(/\r/g, "").split("\n").forEach((line) => {
    const item = line.match(/^\s*[-*•]\s+(.*)$/);
    if (item) { if (!list) list = []; list.push("<li>" + inline(item[1]) + "</li>"); return; }
    if (list) { out.push("<ul>" + list.join("") + "</ul>"); list = null; }
    if (line.trim()) out.push(inline(line));
    else if (out.length && out[out.length - 1] !== "<br>") out.push("<br>");
  });
  if (list) out.push("<ul>" + (list as string[]).join("") + "</ul>");
  return out.join("<br>").replace(/(<br>)+(<ul>)/g, "$2").replace(/(<\/ul>)(<br>)+/g, "$1").replace(/(<br>){2,}/g, "<br><br>").replace(/^(<br>)+|(<br>)+$/g, "");
}

const ICON_CLOSE = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg>';
const ICON_SEND = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 19V5M5 12l7-7 7 7"/></svg>';
const ICON_RESET = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 12a9 9 0 1 0 2.6-6.4L3 8"/><path d="M3 3v5h5"/></svg>';
const ICON_SPARK = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/><path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z"/></svg>';

export function initChat({ endpoint }: { endpoint?: string }): () => void {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const timers = new Set<number>();
  const later = (fn: () => void, ms: number) => {
    const id = window.setTimeout(() => { timers.delete(id); fn(); }, ms);
    timers.add(id);
    return id;
  };

  let state: { open: boolean; messages: Msg[]; teaserSeen: boolean } = { open: false, messages: [], teaserSeen: false };
  function load() {
    try { const raw = sessionStorage.getItem(STORE); if (raw) state = Object.assign(state, JSON.parse(raw)); } catch {}
  }
  function save() {
    try {
      state.messages = state.messages.slice(-40);
      sessionStorage.setItem(STORE, JSON.stringify(state));
    } catch {}
  }

  const root = document.createElement("div");
  root.className = "g2w-chat";
  root.innerHTML =
    '<div class="chat-teaser" hidden><p>Questions about Go2Ways? Ask me.</p><button type="button" class="chat-teaser-x" aria-label="Dismiss">' + ICON_CLOSE + "</button></div>" +
    '<section class="chat-panel" id="g2w-chat-panel" role="dialog" aria-label="Go2Ways assistant" hidden>' +
      '<header class="chat-head">' +
        '<span class="chat-avatar">' + ICON_SPARK + "</span>" +
        '<div class="chat-title"><p class="chat-name">Go2Ways assistant</p><p class="chat-status"><span class="dot" aria-hidden="true"></span>Answers instantly</p></div>' +
        '<button type="button" class="chat-icon-btn chat-reset" aria-label="Start a new conversation" title="New conversation">' + ICON_RESET + "</button>" +
        '<button type="button" class="chat-icon-btn chat-close" aria-label="Close chat">' + ICON_CLOSE + "</button>" +
      "</header>" +
      '<div class="chat-log" role="log" aria-live="polite" aria-relevant="additions"></div>' +
      '<div class="chat-chips" aria-label="Suggested questions"></div>' +
      '<form class="chat-form" autocomplete="off">' +
        '<label class="sr-only" for="g2w-chat-input">Ask a question</label>' +
        '<input id="g2w-chat-input" type="text" maxlength="300" placeholder="Ask about services, products, contact…" enterkeyhint="send">' +
        '<button type="submit" class="chat-send" aria-label="Send">' + ICON_SEND + "</button>" +
      "</form>" +
      '<p class="chat-note">AI assistant. It can make mistakes, so for anything important <a href="/contact">contact our team</a>.</p>' +
    "</section>" +
    '<button type="button" class="chat-launcher" aria-label="Open chat with the Go2Ways assistant" aria-expanded="false" aria-controls="g2w-chat-panel">' +
      '<span class="chat-launcher-avatar"><span class="ic ic-open">' + ICON_SPARK + '</span><span class="ic ic-close">' + ICON_CLOSE + "</span></span>" +
      '<span class="chat-launcher-label" aria-hidden="true">Ask Go2Ways</span>' +
    "</button>";
  document.body.appendChild(root);

  const panel = root.querySelector<HTMLElement>(".chat-panel")!;
  const launcher = root.querySelector<HTMLButtonElement>(".chat-launcher")!;
  const log = root.querySelector<HTMLElement>(".chat-log")!;
  const chipsEl = root.querySelector<HTMLElement>(".chat-chips")!;
  const form = root.querySelector<HTMLFormElement>(".chat-form")!;
  const input = root.querySelector<HTMLInputElement>("#g2w-chat-input")!;
  const teaser = root.querySelector<HTMLElement>(".chat-teaser")!;
  let busy = false;

  const scrollToEnd = () => { log.scrollTop = log.scrollHeight; };

  function addMessage(from: "user" | "bot", html: string, animate: boolean) {
    const row = document.createElement("div");
    row.className = "chat-msg from-" + from + (animate ? " is-new" : "");
    const bubble = document.createElement("div");
    bubble.className = "bubble";
    if (from === "user") bubble.textContent = html; else bubble.innerHTML = html;
    row.appendChild(bubble);
    log.appendChild(row);
    scrollToEnd();
  }

  function setChips(list: string[] | undefined) {
    chipsEl.innerHTML = "";
    (list || []).forEach((label, i) => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "chat-chip";
      b.style.setProperty("--i", String(i));
      b.textContent = label;
      b.addEventListener("click", () => ask(label));
      chipsEl.appendChild(b);
    });
  }

  function showTyping() {
    const row = document.createElement("div");
    row.className = "chat-msg from-bot is-new chat-typing";
    row.innerHTML = '<div class="bubble" aria-label="Assistant is typing"><span></span><span></span><span></span></div>';
    log.appendChild(row);
    scrollToEnd();
    return row;
  }

  function localAnswer(text: string): Answer {
    const slug = pageSlug();
    const intent = intentById(chipIntent(text)) || findIntent(text) || FALLBACK;
    const chips = intent.chips.slice();
    if (slug && ("id" in intent ? intent.id : "") !== "svc-" + slug && chips.indexOf("About this service") === -1) chips.push("About this service");
    return { html: intent.reply(), chips: chips.slice(0, 3) };
  }

  let aiAvailable = !!endpoint;
  function historyForAi() {
    return state.messages.slice(-12).map((m) => ({
      role: m.from === "user" ? "user" : "assistant",
      content: m.from === "user" ? m.text : m.text || (m.html || "").replace(/<[^>]+>/g, " "),
    }));
  }

  function streamAnswer(text: string, typing: HTMLElement, myGen: number): Promise<string> {
    const history = historyForAi();
    history.pop();
    let bubble: HTMLElement | null = null;
    function paint(t: string, done: boolean) {
      if (myGen !== generation) return t;
      if (!bubble) {
        typing.remove();
        const row = document.createElement("div");
        row.className = "chat-msg from-bot is-new";
        bubble = document.createElement("div");
        bubble.className = "bubble";
        row.appendChild(bubble);
        log.appendChild(row);
      }
      bubble.innerHTML = renderMd(t) + (done ? "" : '<span class="chat-caret" aria-hidden="true"></span>');
      scrollToEnd();
      return t;
    }
    return fetch(endpoint!, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: text, history, page: location.pathname }),
    }).then((r) => {
      if (!r.ok || !r.body) throw new Error("status " + r.status);
      if ((r.headers.get("content-type") || "").indexOf("application/json") === 0) {
        return r.json().then((d) => { if (!d.reply) throw new Error("empty"); return paint(String(d.reply), true); });
      }
      const reader = r.body.getReader();
      const decoder = new TextDecoder();
      let acc = "";
      let frame = 0;
      function pump(): Promise<string> {
        return reader.read().then((chunk) => {
          if (chunk.done) {
            if (acc.indexOf("\u0000ERROR") !== -1) acc = acc.split("\u0000ERROR")[0];
            if (!acc.trim()) throw new Error("empty");
            cancelAnimationFrame(frame);
            return paint(acc, true);
          }
          acc += decoder.decode(chunk.value, { stream: true });
          if (acc.indexOf("\u0000ERROR") !== -1 && !acc.split("\u0000ERROR")[0].trim()) { reader.cancel(); throw new Error("server error"); }
          cancelAnimationFrame(frame);
          frame = requestAnimationFrame(() => paint(acc.split("\u0000ERROR")[0], false));
          return pump();
        });
      }
      return pump();
    });
  }

  let queued: string[] = [];
  let generation = 0;
  function finish(res: Answer, myGen: number) {
    if (myGen !== generation) return;
    if (!res.painted) addMessage("bot", res.html, true);
    setChips(res.chips);
    state.messages.push({ from: "bot", html: res.html, text: res.text, chips: res.chips });
    save();
    busy = false;
    if (queued.length) ask(queued.shift()!);
  }
  function ask(raw: string) {
    const text = String(raw || "").trim();
    if (!text) return;
    if (busy) { queued.push(text); return; }
    busy = true;
    setChips([]);
    addMessage("user", text, true);
    state.messages.push({ from: "user", text });
    save();
    const typing = showTyping();
    const started = Date.now();
    const myGen = generation;
    const local = localAnswer(text);

    function answerLocally() {
      const minDelay = reduceMotion ? 150 : 550 + Math.min(text.length * 8, 400);
      later(() => {
        if (myGen !== generation) return;
        typing.remove();
        finish(local, myGen);
      }, Math.max(0, minDelay - (Date.now() - started)));
    }

    if (!aiAvailable || (isFixedChip(text) && intentById(chipIntent(text)))) return answerLocally();
    streamAnswer(text, typing, myGen).then((finalText) => {
      finish({ html: renderMd(finalText), text: finalText, chips: local.chips, painted: true }, myGen);
    }).catch(() => {
      aiAvailable = false;
      answerLocally();
    });
  }

  function greet() {
    let html = "Hi, I’m the Go2Ways assistant. I can help you find the right service, learn about our products, or get in touch with the team.";
    let chips = ["What services do you offer?", "Tell me about Ordova", "How do I contact you?"];
    const svc = bySlug(pageSlug());
    if (svc) {
      html += " You’re on the <b>" + svc.name + "</b> page. Want a quick summary?";
      chips = ["About this service", "Talk to an expert", "What services do you offer?"];
    }
    addMessage("bot", html, true);
    setChips(chips);
    state.messages.push({ from: "bot", html, chips });
    save();
  }

  function restore() {
    log.innerHTML = "";
    state.messages.forEach((m) => addMessage(m.from, (m.from === "user" ? m.text : m.html) || "", false));
    const last = state.messages[state.messages.length - 1];
    setChips(last && last.from === "bot" ? last.chips : []);
  }

  let closeTimer = 0;
  function setOpen(open: boolean, opts: { silent?: boolean; returnFocus?: boolean } = {}) {
    state.open = open;
    save();
    clearTimeout(closeTimer);
    launcher.setAttribute("aria-expanded", String(open));
    launcher.setAttribute("aria-label", open ? "Close chat" : "Open chat with the Go2Ways assistant");
    root.classList.toggle("is-open", open);
    if (open) {
      hideTeaser();
      panel.hidden = false;
      void panel.offsetWidth;
      root.classList.add("is-visible");
      if (!state.messages.length) greet();
      scrollToEnd();
      if (!opts.silent && window.matchMedia("(hover: hover)").matches) later(() => input.focus(), 60);
    } else {
      root.classList.remove("is-visible");
      closeTimer = later(() => { panel.hidden = true; }, reduceMotion ? 0 : 220);
      if (opts.returnFocus) launcher.focus();
    }
  }

  function hideTeaser() {
    teaser.classList.remove("show");
    later(() => { teaser.hidden = true; }, 250);
    state.teaserSeen = true;
    save();
  }

  launcher.addEventListener("click", () => setOpen(!state.open));
  root.querySelector(".chat-close")!.addEventListener("click", () => setOpen(false, { returnFocus: true }));
  root.querySelector(".chat-reset")!.addEventListener("click", () => {
    generation++; state.messages = []; queued = []; save(); log.innerHTML = ""; busy = false; greet(); input.focus();
  });
  root.querySelector(".chat-teaser-x")!.addEventListener("click", hideTeaser);
  teaser.querySelector("p")!.addEventListener("click", () => setOpen(true));
  root.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && state.open) { e.stopPropagation(); setOpen(false, { returnFocus: true }); }
  });
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const v = input.value;
    input.value = "";
    ask(v);
  });

  log.addEventListener("click", (e) => {
    if ((e.target as Element).closest?.("a") && window.matchMedia("(max-width: 600px)").matches) setOpen(false, { silent: true });
  });

  load();
  restore();
  if (state.open) setOpen(true, { silent: true });
  else if (!state.teaserSeen) {
    later(() => {
      if (state.open || state.teaserSeen) return;
      teaser.hidden = false;
      requestAnimationFrame(() => teaser.classList.add("show"));
    }, 5000);
  }

  return () => {
    generation++;
    timers.forEach((id) => clearTimeout(id));
    root.remove();
  };
}
