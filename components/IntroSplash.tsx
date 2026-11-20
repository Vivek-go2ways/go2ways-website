"use client";

import { useCallback, useEffect, useRef, useState, type CSSProperties } from "react";
import { asset, link } from "@/lib/paths";
import { hubLayout, startIntroScene, type IntroScene, type OrbPose } from "@/lib/intro-scene";
import "./IntroSplash.css";

const SEEN_KEY = "g2w-intro-seen";
const FORCE = /[?&]intro(=|&|$)/;

const PRE_PAINT = `try{var d=document.documentElement;if(sessionStorage.getItem("${SEEN_KEY}")&&!${FORCE}.test(location.search))d.classList.add("g2w-intro-off");else d.classList.add("g2w-intro-lock")}catch(e){}`;

type Phase = "loading" | "landing" | "journey" | "portal" | "worlds" | "leaving" | "done";

type Chapter = {
  pose: OrbPose;
  ms: number;
  at: "split" | "left" | "right" | "below";
  eyebrow?: string;
  title: string;
  body: string;
};

/** The story that plays after "Begin Your Journey": the ball moves, the copy answers. */
const CHAPTERS: Chapter[] = [
  {
    pose: "center",
    ms: 5600,
    at: "split",
    title: "Your business runs on a thousand moving parts.",
    body: "Go2Ways makes them move as one.",
  },
  {
    pose: "right",
    ms: 5400,
    at: "left",
    eyebrow: "The challenge",
    title: "Disconnected costs more than you think.",
    body: "Assets fail without warning. Maintenance and ERP data never meet. AI pilots stall before they pay off. Every gap slows the business down.",
  },
  {
    pose: "left",
    ms: 5400,
    at: "right",
    eyebrow: "Your mission",
    title: "Build one connected, intelligent enterprise.",
    body: "Assets that report their own health. Systems that share one version of the truth. AI that turns it all into action.",
  },
  {
    pose: "top",
    ms: 5200,
    at: "below",
    eyebrow: "Your crew",
    title: "One team from first workshop to go-live.",
    body: "IBM Maximo specialists, integration engineers and AI builders working as one, and staying with you long after launch.",
  },
];
const TOTAL_MS = CHAPTERS.reduce((sum, c) => sum + c.ms, 0);

/** Satellites that orbit the Go2Ways ball on the destinations screen. */
type Satellite = { name: string; note: string; href: string; img?: string; external?: boolean; featured?: boolean };
const SATELLITES: Satellite[] = [
  { name: "Ordova", note: "Transport platform", href: "https://ordova.go2ways.com/", external: true, featured: true },
  { name: "IBM Maximo & MAS", note: "Maintain", href: "/service-ibm-maximo-mas", img: "/assets/img/services/ibm-maximo/g1.jpg" },
  { name: "ERP & Enterprise Apps", note: "Connect", href: "/service-erp-enterprise-applications", img: "/assets/img/services/enterprise-integration/g1.jpg" },
  { name: "AI & Web Solutions", note: "Innovate", href: "/service-ai-solutions", img: "/assets/img/services/ai-services/g1.jpg" },
];

const DEMO_HREF = "/contact?topic=demo#contact-form";

export default function IntroSplash() {
  const [phase, setPhase] = useState<Phase>("loading");
  const [chapter, setChapter] = useState(-1);
  const phaseRef = useRef<Phase>("loading");
  const rootRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const barRef = useRef<HTMLSpanElement>(null);
  const storyBarRef = useRef<HTMLSpanElement>(null);
  const orbitRef = useRef<SVGEllipseElement>(null);
  const satRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const holdRef = useRef(false);
  const sceneRef = useRef<IntroScene | null>(null);
  const closingRef = useRef(false);
  const reduceRef = useRef(false);
  const timersRef = useRef<number[]>([]);

  const go = useCallback((p: Phase) => {
    phaseRef.current = p;
    setPhase(p);
  }, []);

  const later = useCallback((fn: () => void, ms: number) => {
    timersRef.current.push(window.setTimeout(fn, ms));
  }, []);

  const markSeen = useCallback(() => {
    try {
      sessionStorage.setItem(SEEN_KEY, "1");
    } catch {}
  }, []);

  /** Close the intro and reveal the website underneath. */
  const finish = useCallback(() => {
    if (closingRef.current) return;
    closingRef.current = true;
    markSeen();
    const html = document.documentElement;
    html.classList.remove("g2w-intro-lock");
    go("leaving");
    later(() => {
      sceneRef.current?.destroy();
      sceneRef.current = null;
      html.classList.add("g2w-intro-off");
      go("done");
    }, 850);
  }, [go, later, markSeen]);

  /** A link out of the intro (demo, a service page): fade while the site navigates. */
  const leaveVia = useCallback(() => {
    markSeen();
    closingRef.current = true;
    document.documentElement.classList.remove("g2w-intro-lock");
    go("leaving");
  }, [go, markSeen]);

  const toWorlds = useCallback(() => {
    const p = phaseRef.current;
    if (p === "portal" || p === "worlds" || closingRef.current) return;
    const scene = sceneRef.current;
    scene?.setProgress(-1);
    scene?.setPose("portal");
    scene?.warp(1);
    setChapter(-1);
    go("portal");
    later(() => {
      scene?.setPose("hub");
      go("worlds");
      rootRef.current?.focus({ preventScroll: true });
    }, reduceRef.current ? 60 : 1500);
  }, [go, later]);

  const begin = () => {
    if (phaseRef.current !== "landing") return;
    sceneRef.current?.warp(0.4);
    sceneRef.current?.setProgress(0);
    go("journey");
  };

  // Boot: decide whether to show, start the scene, run the loader.
  useEffect(() => {
    const html = document.documentElement;
    let seen = false;
    try {
      seen = !!sessionStorage.getItem(SEEN_KEY);
    } catch {}
    if (seen && !FORCE.test(location.search)) {
      html.classList.add("g2w-intro-off");
      html.classList.remove("g2w-intro-lock");
      go("done");
      return;
    }
    html.classList.remove("g2w-intro-off");
    html.classList.add("g2w-intro-lock");

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    reduceRef.current = reduce;
    if (canvasRef.current) {
      sceneRef.current = startIntroScene(canvasRef.current, {
        markSrc: asset("/assets/img/intro-mark.png"),
        reduceMotion: reduce,
      });
    }

    const minMs = reduce ? 400 : 2600;
    const start = performance.now();
    let loaded = document.readyState === "complete";
    const onLoad = () => { loaded = true; };
    window.addEventListener("load", onLoad);
    const fallback = window.setTimeout(onLoad, 3400);

    let raf = 0;
    const tick = (now: number) => {
      const lin = Math.min(1, (now - start) / minMs);
      const p = loaded ? lin : Math.min(lin, 0.9);
      if (barRef.current) barRef.current.style.transform = `scaleX(${1 - Math.pow(1 - p, 2)})`;
      if (p >= 1) {
        sceneRef.current?.reveal();
        go("landing");
        rootRef.current?.focus({ preventScroll: true });
        return;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") finish(); };
    window.addEventListener("keydown", onKey);

    const timers = timersRef.current;
    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(fallback);
      timers.forEach((id) => window.clearTimeout(id));
      window.removeEventListener("load", onLoad);
      window.removeEventListener("keydown", onKey);
      sceneRef.current?.destroy();
      sceneRef.current = null;
      html.classList.remove("g2w-intro-lock");
    };
  }, [finish, go]);

  // The story: step through the chapters, move the ball and fill the progress ring.
  useEffect(() => {
    if (phase !== "journey") return;
    const scene = sceneRef.current;
    const start = performance.now();
    let current = -1;
    let raf = 0;
    let poseTimer = 0;
    const tick = (now: number) => {
      const elapsed = now - start;
      const p = Math.min(1, elapsed / TOTAL_MS);
      if (storyBarRef.current) storyBarRef.current.style.transform = `scaleX(${p})`;
      scene?.setProgress(p);
      let acc = 0;
      let i = 0;
      for (; i < CHAPTERS.length; i++) {
        acc += CHAPTERS[i].ms;
        if (elapsed < acc) break;
      }
      if (i >= CHAPTERS.length) {
        toWorlds();
        return;
      }
      if (i !== current) {
        // Old caption fades out first, then the ball glides, then the new caption lands.
        const first = current < 0;
        current = i;
        setChapter(i);
        const pose = CHAPTERS[i].pose;
        if (first) scene?.setPose(pose);
        else poseTimer = window.setTimeout(() => scene?.setPose(pose), 380);
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(poseTimer);
    };
  }, [phase, toWorlds]);

  // Destinations: satellites orbit the ball. Hovering or focusing one eases the orbit to a stop.
  useEffect(() => {
    if (phase !== "worlds") return;
    const n = SATELLITES.length;
    const cruise = reduceRef.current ? 0 : 0.17;
    let angle = 0.35;
    let speed = cruise;
    let last = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const dt = Math.min(0.1, Math.max(0, (now - last) / 1000));
      last = now;
      speed += ((holdRef.current ? 0 : cruise) - speed) * (1 - Math.exp(-dt * (holdRef.current ? 9 : 2.5)));
      angle += speed * dt;
      const L = hubLayout(window.innerWidth, window.innerHeight);
      const ct = Math.cos(L.tilt);
      const st = Math.sin(L.tilt);
      const orbit = orbitRef.current;
      if (orbit) {
        orbit.setAttribute("cx", L.cx.toFixed(1));
        orbit.setAttribute("cy", L.cy.toFixed(1));
        orbit.setAttribute("rx", L.rx.toFixed(1));
        orbit.setAttribute("ry", L.ry.toFixed(1));
        orbit.setAttribute("transform", `rotate(${((L.tilt * 180) / Math.PI).toFixed(2)} ${L.cx.toFixed(1)} ${L.cy.toFixed(1)})`);
      }
      for (let i = 0; i < n; i++) {
        const el = satRefs.current[i];
        if (!el) continue;
        const a = angle + (i / n) * Math.PI * 2;
        const ex = Math.cos(a) * L.rx;
        const ey = Math.sin(a) * L.ry;
        const x = L.cx + ex * ct - ey * st;
        const y = L.cy + ex * st + ey * ct;
        const depth = (Math.sin(a) + 1) / 2;
        el.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0) scale(${(0.8 + 0.2 * depth).toFixed(3)})`;
        el.style.setProperty("--d", depth.toFixed(3));
        el.style.zIndex = String(1 + Math.round(depth * 10));
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [phase]);

  const holdOrbit = () => { holdRef.current = true; };
  const releaseOrbit = () => { holdRef.current = false; };

  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: PRE_PAINT }} />
      {phase !== "done" && (
        <div
          ref={rootRef}
          className={`g2w-intro is-${phase}`}
          role="dialog"
          aria-modal="true"
          aria-labelledby="g2w-intro-title"
          tabIndex={-1}
        >
          <canvas ref={canvasRef} className="g2w-intro-canvas" aria-hidden="true" />

          <div className="g2w-intro-loader" aria-hidden={phase !== "loading"}>
            <span className="g2w-intro-badge">
              <img src={asset("/assets/img/logo.png")} alt="Go2Ways" width="170" height="48" />
            </span>
            <p className="g2w-intro-loading">Loading</p>
          </div>
          <div className="g2w-intro-bar" aria-hidden="true"><span ref={barRef} /></div>

          <header className="g2w-intro-top">
            <span className="g2w-intro-badge g2w-intro-badge-sm">
              <img src={asset("/assets/img/logo.png")} alt="Go2Ways" width="110" height="31" />
            </span>
          </header>

          {/* 1. Landing */}
          <section className="g2w-intro-landing" inert={phase !== "landing"}>
            <p className="g2w-intro-eyebrow">Enterprise Assets · Integration · AI</p>
            <h2 id="g2w-intro-title" className="g2w-intro-title">
              <span>Know Every Asset.</span>
              <span>Connect Every System.</span>
              <span className="g2w-intro-accent">Unleash Your AI.</span>
            </h2>
            <p className="g2w-intro-sub">
              Go2Ways brings IBM Maximo, ERP integration and AI together, so your operations stop working in
              silos and start moving forward as one.
            </p>
            <div className="g2w-intro-actions">
              <button type="button" className="g2w-intro-btn g2w-intro-btn-primary" onClick={begin}>
                Begin Your Journey
                <span className="g2w-intro-btn-arrow" aria-hidden="true">→</span>
              </button>
              <a className="g2w-intro-btn g2w-intro-btn-ghost" href={link(DEMO_HREF)} onClick={leaveVia}>
                Request a Demo
              </a>
            </div>
            <button type="button" className="g2w-intro-textlink" onClick={finish}>
              Visit Our Site <span aria-hidden="true">→</span>
            </button>
          </section>

          {/* 2. Story */}
          <section className="g2w-intro-story" inert={phase !== "journey"} aria-live="polite">
            {CHAPTERS.map((c, i) => (
              <div key={c.title} className={`g2w-cap g2w-cap-${c.at}${chapter === i ? " is-active" : ""}`}>
                {c.at === "split" ? (
                  <>
                    <p className="g2w-cap-l">{c.title}</p>
                    <p className="g2w-cap-r">{c.body}</p>
                  </>
                ) : (
                  <div className="g2w-cap-inner">
                    {c.eyebrow && <p className="g2w-intro-eyebrow">{c.eyebrow}</p>}
                    <h3 className="g2w-cap-title">{c.title}</h3>
                    <p className="g2w-cap-body">{c.body}</p>
                  </div>
                )}
              </div>
            ))}
            <div className="g2w-intro-storybar">
              <span className="g2w-intro-track" aria-hidden="true"><span ref={storyBarRef} /></span>
              <button type="button" className="g2w-intro-skip" onClick={toWorlds}>Skip</button>
            </div>
          </section>

          {/* 3. Destinations */}
          <section className="g2w-intro-worlds" inert={phase !== "worlds"}>
            <div className="g2w-worlds-head">
              <p className="g2w-intro-eyebrow">Pick a satellite to explore</p>
              <h3 className="g2w-worlds-title">Where will you go first?</h3>
            </div>
            <div className="g2w-orbit">
              <svg className="g2w-orbit-svg" aria-hidden="true">
                <defs>
                  <linearGradient id="g2w-orbit-grad" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0" stopColor="#2D8DB6" />
                    <stop offset="0.6" stopColor="#85A84F" />
                    <stop offset="1" stopColor="#AFB129" />
                  </linearGradient>
                </defs>
                <ellipse ref={orbitRef} className="g2w-orbit-path" />
              </svg>
              <ul className="g2w-sats" aria-label="Destinations">
                {SATELLITES.map((sat, i) => (
                  <li key={sat.name}>
                    <a
                      ref={(el) => { satRefs.current[i] = el; }}
                      className={`g2w-sat${sat.featured ? " is-featured" : ""}`}
                      href={sat.external ? sat.href : link(sat.href)}
                      target={sat.external ? "_blank" : undefined}
                      rel={sat.external ? "noopener noreferrer" : undefined}
                      onClick={sat.external ? undefined : leaveVia}
                      onMouseEnter={holdOrbit}
                      onMouseLeave={releaseOrbit}
                      onFocus={holdOrbit}
                      onBlur={releaseOrbit}
                      style={{ "--i": i } as CSSProperties}
                    >
                      <span className="g2w-sat-body">
                        <span className="g2w-sat-moon" aria-hidden="true">
                          {sat.img ? (
                            <img src={asset(sat.img)} alt="" width="64" height="64" loading="lazy" />
                          ) : (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                              <rect x="5" y="3" width="14" height="14" rx="3" />
                              <path d="M5 11h14M8 17v3M16 17v3M9 6.5h6" />
                              <circle cx="8.5" cy="14" r="0.9" fill="currentColor" />
                              <circle cx="15.5" cy="14" r="0.9" fill="currentColor" />
                            </svg>
                          )}
                        </span>
                        <span className="g2w-sat-label">
                          <strong>
                            {sat.name}
                            {sat.external && <span className="g2w-sat-ext" aria-hidden="true"> ↗</span>}
                          </strong>
                          <small>{sat.note}</small>
                          {sat.external && <span className="g2w-visually-hidden"> (opens in a new tab)</span>}
                        </span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="g2w-intro-actions g2w-worlds-actions">
              <a className="g2w-intro-btn g2w-intro-btn-primary" href={link(DEMO_HREF)} onClick={leaveVia}>
                Request a Demo
              </a>
              <button type="button" className="g2w-intro-btn g2w-intro-btn-ghost" onClick={finish}>
                Visit Our Site <span aria-hidden="true">→</span>
              </button>
            </div>
          </section>
        </div>
      )}
    </>
  );
}
