import { WAVES } from "./waves";
import { BASE_PATH } from "./paths";

type On = {
  <K extends keyof WindowEventMap>(t: Window, type: K, fn: (e: WindowEventMap[K]) => void, o?: AddEventListenerOptions): void;
  <K extends keyof DocumentEventMap>(t: Document, type: K, fn: (e: DocumentEventMap[K]) => void, o?: AddEventListenerOptions): void;
  <K extends keyof HTMLElementEventMap>(t: HTMLElement, type: K, fn: (e: HTMLElementEventMap[K]) => void, o?: AddEventListenerOptions): void;
};

const asEl = (t: EventTarget | null) => (t instanceof Element ? t : null);

type Options = {
  navigate: (href: string) => void;
  prefetch: (href: string) => void;
};

let lastPath: string | null = null;
let toastEl: HTMLDivElement | null = null;

export function toast(msg: string) {
  if (!toastEl) {
    toastEl = document.createElement("div");
    toastEl.className = "toast";
    toastEl.setAttribute("role", "status");
    document.body.appendChild(toastEl);
  }
  const el = toastEl;
  el.textContent = msg;
  el.classList.add("show");
  window.clearTimeout(Number(el.dataset.t));
  el.dataset.t = String(window.setTimeout(() => el.classList.remove("show"), 2600));
}

export function initSite({ navigate, prefetch }: Options): () => void {
  const root = document.documentElement;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const disposers: (() => void)[] = [];
  const on: On = (t: EventTarget, type: string, fn: (e: never) => void, o?: AddEventListenerOptions) => {
    t.addEventListener(type, fn as EventListener, o);
    disposers.push(() => t.removeEventListener(type, fn as EventListener, o));
  };
  const timers = new Set<number>();
  const later = (fn: () => void, ms: number) => {
    const id = window.setTimeout(() => { timers.delete(id); fn(); }, ms);
    timers.add(id);
    return id;
  };
  const observers: IntersectionObserver[] = [];
  const io = (cb: IntersectionObserverCallback, opts?: IntersectionObserverInit) => {
    const o = new IntersectionObserver(cb, opts);
    observers.push(o);
    return o;
  };
  const $$ = <T extends Element = HTMLElement>(sel: string) => Array.from(document.querySelectorAll<T>(sel));

  const path = location.pathname;
  if (lastPath === null) {
    const markLoaded = () => root.classList.add("is-loaded");
    if (document.fonts && document.fonts.ready) {
      Promise.race([document.fonts.ready, new Promise((r) => setTimeout(r, 350))]).then(markLoaded);
    } else {
      on(window, "load", markLoaded);
    }
  } else if (lastPath !== path) {
    root.classList.remove("is-leaving", "is-loaded");
    void root.offsetWidth;
    const raf = requestAnimationFrame(() => root.classList.add("is-loaded"));
    disposers.push(() => cancelAnimationFrame(raf));
  }
  lastPath = path;
  $$("[data-tabs]").forEach((list) => {
    const tabs = Array.from(list.querySelectorAll<HTMLButtonElement>("[data-tab]"));
    const select = (id: string, focus = false) => {
      const tab = tabs.find((t) => t.dataset.tab === id);
      if (!tab) return;
      tabs.forEach((t) => {
        const active = t === tab;
        t.setAttribute("aria-selected", String(active));
        t.tabIndex = active ? 0 : -1;
        const panel = document.getElementById(t.getAttribute("aria-controls") || "");
        if (panel) panel.hidden = !active;
      });
      if (focus) tab.focus();
      history.replaceState(history.state, "", "#" + id);
    };
    tabs.forEach((t, k) => {
      on(t, "click", () => select(t.dataset.tab || ""));
      on(t, "keydown", (e) => {
        if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
        e.preventDefault();
        const next = tabs[(k + (e.key === "ArrowRight" ? 1 : tabs.length - 1)) % tabs.length];
        select(next.dataset.tab || "", true);
      });
    });
    const initial = decodeURIComponent(location.hash.slice(1));
    if (initial && tabs.some((t) => t.dataset.tab === initial)) select(initial);
  });
  if (location.hash.length > 1) {
    const target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
    if (target) later(() => target.scrollIntoView({ block: "start", behavior: "instant" }), 80);
  }
  on(window, "pageshow", (e) => { if (e.persisted) { root.classList.remove("is-leaving"); root.classList.add("is-loaded"); } });

  const internalUrl = (a: HTMLAnchorElement | null) => {
    if (!a) return null;
    const href = a.getAttribute("href");
    if (!href || href.charAt(0) === "#" || a.target === "_blank" || /^(mailto:|tel:|https?:)/.test(href)) return null;
    const url = new URL(href, location.href);
    return url.origin === location.origin ? url : null;
  };

  on(document, "click", (e) => {
    const a = asEl(e.target)?.closest<HTMLAnchorElement>("a[href]") ?? null;
    if (!a || e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    const url = internalUrl(a);
    if (!url) return;
    if (url.pathname === location.pathname && url.hash) {
      const target = document.getElementById(decodeURIComponent(url.hash.slice(1)));
      if (!target) return;
      e.preventDefault();
      if (location.hash !== url.hash) history.replaceState(history.state, "", url.hash);
      target.scrollIntoView({ block: "start", behavior: reduceMotion ? "instant" : "smooth" });
      return;
    }
    e.preventDefault();
    const targetPath = BASE_PATH && url.pathname.startsWith(BASE_PATH) ? url.pathname.slice(BASE_PATH.length) || "/" : url.pathname;
    const go = () => (url.pathname === location.pathname ? location.assign(url.href) : navigate(targetPath + url.search + url.hash));
    if (reduceMotion) return go();
    root.classList.add("is-leaving");
    window.setTimeout(go, 260);
  });

  const prefetched = new Set<string>();
  const warm = (e: Event) => {
    const url = internalUrl(asEl(e.target)?.closest<HTMLAnchorElement>("a[href]") ?? null);
    if (!url || url.pathname === location.pathname) return;
    const targetPath = BASE_PATH && url.pathname.startsWith(BASE_PATH) ? url.pathname.slice(BASE_PATH.length) || "/" : url.pathname;
    if (prefetched.has(targetPath)) return;
    prefetched.add(targetPath);
    prefetch(targetPath);
  };
  on(document, "mouseover", warm, { passive: true });
  on(document, "focusin", warm);

  const header = document.querySelector<HTMLElement>(".site-header");
  const progress = document.querySelector<HTMLElement>(".scroll-progress");
  let lastY = window.scrollY;
  let ticking = false;
  function onScroll() {
    const y = window.scrollY;
    if (header) {
      header.classList.toggle("is-scrolled", y > 24);
      const goingDown = y > lastY + 4;
      const goingUp = y < lastY - 4;
      if (goingDown && y > 420 && !root.classList.contains("nav-open") && !document.querySelector(".has-menu.open")) header.classList.add("is-hidden");
      else if (goingUp || y < 420) header.classList.remove("is-hidden");
    }
    if (progress) {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.transform = "scaleX(" + (max > 0 ? y / max : 0) + ")";
    }
    parallax(y);
    lastY = y;
    ticking = false;
  }
  on(window, "scroll", () => {
    if (!ticking) { requestAnimationFrame(onScroll); ticking = true; }
  }, { passive: true });

  const toggle = document.querySelector<HTMLButtonElement>(".nav-toggle");
  if (toggle) {
    on(toggle, "click", () => {
      const open = root.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    on(document, "keydown", (e) => {
      if (e.key === "Escape" && root.classList.contains("nav-open")) { root.classList.remove("nav-open"); toggle.setAttribute("aria-expanded", "false"); toggle.focus(); }
    });
    $$<HTMLAnchorElement>(".main-nav a").forEach((a) => {
      on(a, "click", () => { root.classList.remove("nav-open"); toggle.setAttribute("aria-expanded", "false"); });
    });
    disposers.push(() => { root.classList.remove("nav-open"); toggle.setAttribute("aria-expanded", "false"); });
  }

  const menus = $$<HTMLLIElement>(".has-menu");
  const hoverNav = window.matchMedia("(hover: hover) and (min-width: 901px)");
  function setMenu(li: HTMLLIElement, open: boolean) {
    li.classList.toggle("open", open);
    const b = li.querySelector(".menu-btn");
    if (b) b.setAttribute("aria-expanded", String(open));
  }
  function closeMenus(except?: HTMLLIElement) { menus.forEach((m) => { if (m !== except) setMenu(m, false); }); }
  menus.forEach((li) => {
    const btn = li.querySelector<HTMLButtonElement>(".menu-btn")!;
    let timer = 0;
    let hoverOpened = false;
    on(btn, "click", () => {
      if (hoverOpened) { hoverOpened = false; setMenu(li, true); return; }
      const open = !li.classList.contains("open");
      closeMenus(li);
      setMenu(li, open);
    });
    on(li, "mouseenter", () => {
      if (!hoverNav.matches) return;
      clearTimeout(timer);
      if (!li.classList.contains("open")) { hoverOpened = true; later(() => { hoverOpened = false; }, 400); }
      closeMenus(li);
      setMenu(li, true);
    });
    on(li, "mouseleave", () => {
      if (!hoverNav.matches) return;
      timer = later(() => setMenu(li, false), 180);
    });
    on(li, "focusout", (e) => {
      if (hoverNav.matches && !li.contains(e.relatedTarget as Node | null)) setMenu(li, false);
    });
  });
  on(document, "click", (e) => { if (!asEl(e.target)?.closest(".has-menu")) closeMenus(); });
  on(document, "keydown", (e) => {
    if (e.key !== "Escape") return;
    const open = document.querySelector<HTMLLIElement>(".has-menu.open");
    if (open) { setMenu(open, false); open.querySelector<HTMLElement>(".menu-btn")?.focus(); }
  });
  if (toggle) on(toggle, "click", () => { if (!root.classList.contains("nav-open")) closeMenus(); });
  disposers.push(() => closeMenus());

  $$("[data-slider]").forEach((box) => {
    const track = box.querySelector<HTMLElement>(".slides")!;
    const slides = Array.from(track.children) as HTMLElement[];
    const n = slides.length;
    if (n < 2) return;
    const dotsBox = box.querySelector<HTMLElement>(".slider-dots")!;
    box.style.setProperty("--slide-ms", "4500ms");

    const clone = slides[0].cloneNode(true) as HTMLElement;
    clone.setAttribute("aria-hidden", "true");
    const cloneImg = clone.querySelector("img");
    if (cloneImg) { cloneImg.alt = ""; cloneImg.removeAttribute("loading"); }
    track.appendChild(clone);

    slides.forEach((s, k) => {
      s.setAttribute("role", "group");
      s.setAttribute("aria-roledescription", "slide");
      s.setAttribute("aria-label", k + 1 + " of " + n);
    });
    const dots = slides.map((_, k) => {
      const b = document.createElement("button");
      b.type = "button";
      b.setAttribute("aria-label", "Show photo " + (k + 1) + " of " + n);
      b.addEventListener("click", () => go(k));
      dotsBox.appendChild(b);
      return b;
    });
    disposers.push(() => { clone.remove(); dots.forEach((d) => d.remove()); });

    let i = 0;
    let hovered = false;
    let focused = false;
    let visible = !("IntersectionObserver" in window);
    function render(animate: boolean) {
      track.classList.toggle("no-anim", !animate);
      track.style.transform = "translateX(" + -i * 100 + "%)";
      const real = i % n;
      slides.forEach((s, k) => s.classList.toggle("is-active", k === real && i < n));
      clone.classList.toggle("is-active", i === n);
      dots.forEach((d, k) => { if (k === real) d.setAttribute("aria-current", "true"); else d.removeAttribute("aria-current"); });
    }
    function restartProgress() {
      const d = dots[i % n];
      d.removeAttribute("aria-current"); void d.offsetWidth; d.setAttribute("aria-current", "true");
    }
    function go(k: number) { i = k; render(true); restartProgress(); }
    function next() {
      i += 1;
      render(true);
      if (i === n) later(() => { i = 0; render(false); }, 950);
    }
    function prev() { go(i === 0 ? n - 1 : (i % n) - 1); }
    function updatePause() { box.classList.toggle("paused", hovered || focused || !visible || document.hidden); }

    if (reduceMotion) box.classList.add("static");
    on(dotsBox, "animationend", (e) => { if (e.animationName === "slide-progress" && !reduceMotion) next(); });
    on(box, "mouseenter", () => { hovered = true; updatePause(); });
    on(box, "mouseleave", () => { hovered = false; updatePause(); });
    on(box, "focusin", () => { focused = true; updatePause(); });
    on(box, "focusout", () => { focused = false; updatePause(); });
    on(document, "visibilitychange", updatePause);
    if (!visible) {
      io((entries) => { visible = entries[0].isIntersecting; updatePause(); }, { threshold: 0.3 }).observe(box);
    }
    let startX: number | null = null;
    on(box, "pointerdown", (e) => { startX = e.clientX; });
    on(box, "pointerup", (e) => {
      if (startX === null) return;
      const dx = e.clientX - startX; startX = null;
      if (Math.abs(dx) > 40) { if (dx < 0) go((i + 1) % n); else prev(); }
    });

    render(false);
    updatePause();
  });

  $$("[data-stagger-children]").forEach((group) => {
    Array.from(group.children).forEach((child, i) => (child as HTMLElement).style.setProperty("--stagger", String(i)));
  });
  const revealEls = $$(".reveal, .reveal-scale, [data-inview]");
  if ("IntersectionObserver" in window && !reduceMotion) {
    const rio = io((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          rio.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.12 });
    revealEls.forEach((el) => rio.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("in-view"));
  }

  const countRafs = new Set<number>();
  function countUp(el: HTMLElement) {
    const raw = el.getAttribute("data-count")!;
    const target = parseFloat(raw);
    const suffix = el.getAttribute("data-suffix") || "";
    const prefix = el.getAttribute("data-prefix") || "";
    const decimals = (raw.split(".")[1] || "").length;
    if (reduceMotion) { el.textContent = prefix + target.toFixed(decimals) + suffix; return; }
    const start = performance.now();
    const dur = 1600;
    (function step(now: number) {
      const p = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(2, -10 * p);
      el.textContent = prefix + (target * (p === 1 ? 1 : eased)).toFixed(decimals) + suffix;
      if (p < 1) { const id = requestAnimationFrame(step); countRafs.add(id); }
    })(start);
  }
  disposers.push(() => countRafs.forEach(cancelAnimationFrame));
  const counters = $$("[data-count]");
  if ("IntersectionObserver" in window) {
    const cio = io((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) { countUp(entry.target as HTMLElement); cio.unobserve(entry.target); }
      });
    }, { threshold: 0.6 });
    counters.forEach((el) => cio.observe(el));
  } else {
    counters.forEach(countUp);
  }

  if (!reduceMotion && window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
    $$("[data-tilt]").forEach((el) => {
      let raf = 0;
      on(el, "pointermove", (e) => {
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => {
          el.style.transform = "perspective(900px) rotateY(" + x * 6 + "deg) rotateX(" + -y * 6 + "deg) translateY(-6px)";
        });
      });
      on(el, "pointerleave", () => {
        cancelAnimationFrame(raf);
        el.style.transform = "";
      });
      disposers.push(() => { cancelAnimationFrame(raf); el.style.transform = ""; });
    });
  }

  type Num = { ti: number; v: number; role: "x" | "y"; x?: number };
  type Shape = { el: SVGPathElement; tokens: (string | number)[]; nums: Num[]; still: boolean; phase: number; amp: number };
  type Wave = { host: HTMLElement; shapes: Shape[]; visible: boolean; speed: number };
  const waves: Wave[] = [];
  function buildWave(host: HTMLElement) {
    const key = host.getAttribute("data-wave") || "";
    const markup = WAVES[key];
    if (!markup) return;
    host.innerHTML = markup;
    disposers.push(() => { host.innerHTML = ""; host.style.transform = ""; });
    const svg = host.querySelector("svg")!;
    svg.setAttribute("aria-hidden", "true");
    svg.setAttribute("focusable", "false");
    const paths = Array.from(svg.querySelectorAll("path"));
    const shapes = paths.map((p, index): Shape => {
      const id = p.getAttribute("id") || "";
      const d = p.getAttribute("d") || "";
      const tokens = d.match(/[a-zA-Z]|-?\d*\.?\d+(?:e[-+]?\d+)?/g) || [];
      const nums: Num[] = [];
      let cmd = "";
      let pairPos = 0;
      tokens.forEach((t, ti) => {
        if (/[a-zA-Z]/.test(t)) { cmd = t; pairPos = 0; return; }
        const v = parseFloat(t);
        let role: "x" | "y" = "x";
        if (cmd === "V" || cmd === "v") role = "y";
        else if (cmd === "H" || cmd === "h") role = "x";
        else { role = pairPos % 2 === 0 ? "x" : "y"; pairPos++; }
        nums.push({ ti, v, role });
      });
      let lastX = 0;
      nums.forEach((n) => { if (n.role === "x") lastX = n.v; else n.x = lastX; });
      return {
        el: p, tokens, nums,
        still: id === "Fade",
        phase: index * 0.085,
        amp: /Ribbon/.test(id) ? 1 : /Edge/.test(id) ? 0.6 : 1.15,
      };
    });
    const wave: Wave = { host, shapes, visible: true, speed: parseFloat(host.getAttribute("data-speed") || "1") };
    waves.push(wave);
    if ("IntersectionObserver" in window) {
      io((entries) => { wave.visible = entries[0].isIntersecting; }).observe(host);
    }
    renderWave(wave, 0);
  }
  function renderWave(wave: Wave, t: number) {
    wave.shapes.forEach((s) => {
      if (s.still) return;
      const out = s.tokens.slice();
      s.nums.forEach((n) => {
        if (n.role !== "y" || n.v >= 598) { out[n.ti] = n.v; return; }
        const x = n.x!;
        const dy = s.amp * (
          11 * Math.sin(x * 0.0042 + t * 0.55 + s.phase) +
          8 * Math.sin(x * 0.0019 - t * 0.33 + s.phase * 0.6) +
          3 * Math.sin(x * 0.011 + t * 0.9 + s.phase * 2)
        );
        out[n.ti] = (n.v + dy).toFixed(1);
      });
      s.el.setAttribute("d", out.join(" "));
    });
  }
  $$("[data-wave]").forEach(buildWave);

  function parallax(y: number) {
    waves.forEach((w) => {
      if (!w.host.hasAttribute("data-parallax")) return;
      w.host.style.transform = "translate3d(0," + (y * 0.18).toFixed(1) + "px,0)";
    });
  }

  type Ribbon = { host: HTMLElement; canvas: HTMLCanvasElement; ctx: CanvasRenderingContext2D; faint: boolean; visible: boolean; w: number; h: number };
  const ribbons: Ribbon[] = [];
  function buildRibbon(host: HTMLElement) {
    const canvas = document.createElement("canvas");
    host.appendChild(canvas);
    disposers.push(() => canvas.remove());
    const ctx = canvas.getContext("2d")!;
    const faint = host.hasAttribute("data-faint");
    const r: Ribbon = { host, canvas, ctx, faint, visible: true, w: 0, h: 0 };
    function size() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      r.w = host.clientWidth; r.h = host.clientHeight;
      canvas.width = Math.round(r.w * dpr); canvas.height = Math.round(r.h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    size();
    on(window, "resize", size);
    if ("IntersectionObserver" in window) {
      io((entries) => { r.visible = entries[0].isIntersecting; }).observe(host);
    }
    ribbons.push(r);
    drawRibbon(r, 0);
  }
  function drawRibbon(r: Ribbon, t: number) {
    const { ctx, w, h } = r;
    if (!w || !h) return;
    ctx.clearRect(0, 0, w, h);
    const grad = ctx.createLinearGradient(0, 0, w, 0);
    if (r.faint) {
      grad.addColorStop(0, "rgba(120,200,120,0.55)");
      grad.addColorStop(0.5, "rgba(120,170,230,0.45)");
      grad.addColorStop(1, "rgba(150,210,140,0.55)");
    } else {
      grad.addColorStop(0, "#3aa7e0");
      grad.addColorStop(0.18, "#c2d93a");
      grad.addColorStop(0.36, "#9fd24a");
      grad.addColorStop(0.58, "#8b56c7");
      grad.addColorStop(0.78, "#6b6fd6");
      grad.addColorStop(1, "#2f8fe0");
    }
    ctx.strokeStyle = grad;
    const lines = r.faint ? 26 : 44;
    const mid = h * 0.5;
    const spread = r.faint ? h * 0.42 : h * 0.46;
    const step = Math.max(6, w / 140);
    for (let i = 0; i < lines; i++) {
      const k = i / (lines - 1) - 0.5;
      ctx.globalAlpha = r.faint ? 0.35 : 0.55 + 0.45 * (1 - Math.abs(k) * 2);
      ctx.lineWidth = r.faint ? 0.8 : 1;
      if (r.faint) ctx.setLineDash([10, 7]); else ctx.setLineDash([]);
      ctx.beginPath();
      for (let x = -10; x <= w + 10; x += step) {
        const u = x / w;
        const base = mid + Math.sin(u * Math.PI * 2.1 + t * 0.45) * h * 0.18 + Math.sin(u * Math.PI * 4.3 - t * 0.3) * h * 0.06;
        const twist = Math.cos(u * Math.PI * 2.6 - t * 0.5 + 0.8);
        const y = base + k * spread * twist + Math.sin(u * 18 + t + i * 0.15) * 1.2;
        if (x === -10) ctx.moveTo(x, y); else ctx.lineTo(x, y);
      }
      ctx.stroke();
    }
    ctx.globalAlpha = 1;
  }
  $$("[data-ribbon]").forEach(buildRibbon);

  if (!reduceMotion && (waves.length || ribbons.length)) {
    const t0 = performance.now();
    let last = 0;
    let loopId = 0;
    (function loop(now: number) {
      loopId = requestAnimationFrame(loop);
      if (document.hidden || now - last < 1000 / 45) return;
      last = now;
      const t = (now - t0) / 1000;
      waves.forEach((w) => { if (w.visible) renderWave(w, t * w.speed); });
      ribbons.forEach((r) => { if (r.visible) drawRibbon(r, t); });
    })(t0);
    disposers.push(() => cancelAnimationFrame(loopId));
  }

  $$(".faq-item").forEach((item) => {
    const btn = item.querySelector<HTMLButtonElement>(".faq-q")!;
    on(btn, "click", () => {
      const open = !item.classList.contains("open");
      item.classList.toggle("open", open);
      btn.setAttribute("aria-expanded", String(open));
    });
  });

  $$<HTMLAnchorElement>("[data-soon]").forEach((a) => {
    on(a, "click", (e) => { e.preventDefault(); toast((a.textContent || "").trim() + " is coming soon."); });
  });

  const form = document.querySelector<HTMLFormElement>("#contact-form");
  if (form) initContactForm(form, on);

  onScroll();

  return () => {
    disposers.splice(0).reverse().forEach((d) => d());
    timers.forEach((id) => clearTimeout(id));
    observers.forEach((o) => o.disconnect());
  };
}

type Field = HTMLInputElement | HTMLTextAreaElement;
type FormError = Error & { userMessage?: string; fieldErrors?: boolean; noServer?: boolean };
function initContactForm(form: HTMLFormElement, on: On) {
  const params = new URLSearchParams(location.search);
  const topic = params.get("topic");
  const msg = form.querySelector<HTMLTextAreaElement>("#f-message");
  if (topic && msg && !msg.value) {
    const presets: Record<string, string> = {
      demo: "Hi Go2Ways team, I'd like to book a demo for my team.",
      trial: "Hi Go2Ways team, I'd like to start a free trial.",
      partner: "Hi Go2Ways team, I'm interested in partnering with you.",
    };
    const services: Record<string, string> = {
      "ibm-maximo-mas": "IBM Maximo Application Suite (MAS)",
      "ibm-maximo": "IBM Maximo Application Suite (MAS)",
      "mas-migration": "IBM Maximo Application Suite (MAS)",
      "ai-solutions": "AI & Web Solutions",
      "enterprise-integration": "Enterprise Integration",
      "cloud-infrastructure": "Cloud & Infrastructure",
      "managed-support": "Managed Support",
      tririga: "TRIRIGA Services",
      "erp-enterprise-applications": "Enterprise Solutions",
      "mobile-development": "Mobile Solutions",
      "consulting-advisory": "Enterprise Technology Consulting & Architecture",
    };
    if (services[topic]) presets[topic] = "Hi Go2Ways team, I'd like to talk about " + services[topic] + ".";
    if (presets[topic]) msg.value = presets[topic];
  }

  const rules: Record<string, (v: string) => true | string> = {
    name: (v) => v.trim().length >= 2 || "Please enter your name.",
    email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) || "Please enter a valid work email.",
    phone: (v) => !v.trim() || /^[+()\d\s-]{7,}$/.test(v.trim()) || "Please enter a valid phone number.",
    message: (v) => v.trim().length >= 10 || "Tell us a little more (at least 10 characters).",
  };
  function check(input: Field) {
    const rule = rules[input.name];
    if (!rule) return true;
    const res = rule(input.value);
    const field = input.closest(".field")!;
    const err = field.querySelector(".err");
    const ok = res === true;
    field.classList.toggle("invalid", !ok);
    input.setAttribute("aria-invalid", String(!ok));
    if (err) err.textContent = ok ? "" : (res as string);
    return ok;
  }
  form.querySelectorAll<Field>(".field input, .field textarea").forEach((input) => {
    on(input, "blur", () => { if (input.value) check(input); });
    on(input, "input", () => { if (input.closest(".field")!.classList.contains("invalid")) check(input); });
  });

  const success = document.querySelector<HTMLElement>(".form-success")!;
  on(form, "submit", (e) => {
    e.preventDefault();
    const inputs = Array.from(form.querySelectorAll<Field>(".field input, .field textarea"));
    let firstBad: Field | null = null;
    for (const input of inputs) {
      const field = input.closest(".field") as HTMLElement;
      field.classList.remove("invalid"); void field.offsetWidth;
      if (!check(input) && !firstBad) firstBad = input;
    }
    if (firstBad) { firstBad.focus(); return; }

    const btn = form.querySelector<HTMLButtonElement>("button[type=submit]")!;
    btn.disabled = true; btn.classList.add("loading");
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;
    if (topic) data.topic = topic;

    const endpoint = form.getAttribute("data-endpoint") || "/api/contact";

    function showFieldErrors(body: { errors?: Record<string, string>; error?: string } | null, status: number) {
      const errs = (body && body.errors) || {};
      let first: Field | null = null;
      for (const name of Object.keys(errs)) {
        const input = form.querySelector<Field>('[name="' + name + '"]');
        if (!input) continue;
        const field = input.closest(".field")!;
        field.classList.add("invalid");
        input.setAttribute("aria-invalid", "true");
        const err = field.querySelector(".err");
        if (err) err.textContent = errs[name];
        if (!first) first = input;
      }
      if (first) first.focus();
      const err: FormError = new Error((body && body.error) || "status " + status);
      err.userMessage = body?.error;
      err.fieldErrors = !!first;
      return err;
    }
    function postToServer() {
      return fetch(endpoint, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(data) })
        .then((r) => {
          if (r.ok) return;
          if (r.status === 404 || r.status === 405 || r.status === 501) { const err: FormError = new Error("no server"); err.noServer = true; throw err; }
          return r.json().catch(() => ({})).then((body) => { throw showFieldErrors(body, r.status); });
        }, () => { const err: FormError = new Error("no server"); err.noServer = true; throw err; });
    }
    function openEmail(): never {
      const lines = ["Name: " + data.name, "Email: " + data.email];
      if (data.company) lines.push("Company: " + data.company);
      if (data.phone) lines.push("Phone: " + data.phone);
      lines.push("", data.message);
      location.href = "mailto:support@go2ways.com?subject=" + encodeURIComponent("Website enquiry from " + data.name) +
        "&body=" + encodeURIComponent(lines.join("\n"));
      const err: FormError = new Error("email app");
      err.userMessage = "Opening your email app with your message. Just press Send.";
      throw err;
    }

    postToServer().catch((err: FormError) => {
      if (err.noServer) openEmail();
      throw err;
    }).then(() => {
      const nameEl = success.querySelector("[data-name]");
      if (nameEl) nameEl.textContent = data.name.split(" ")[0];
      success.classList.add("show");
      form.reset();
    }).catch((err: FormError) => {
      if (err && err.fieldErrors) return;
      toast((err && err.userMessage) || "Something went wrong. Please email support@go2ways.com.");
    }).then(() => {
      btn.disabled = false; btn.classList.remove("loading");
    });
  });
  const again = document.querySelector<HTMLElement>("[data-send-another]");
  if (again) on(again, "click", () => { success.classList.remove("show"); form.querySelector("input")?.focus(); });
}
