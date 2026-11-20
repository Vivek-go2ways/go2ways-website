type V3 = [number, number, number];
type RGB = [number, number, number];
type Mesh = { v: V3[]; f: number[][] };

const CUBE: Mesh = {
  v: [[-1, -1, -1], [1, -1, -1], [1, 1, -1], [-1, 1, -1], [-1, -1, 1], [1, -1, 1], [1, 1, 1], [-1, 1, 1]],
  f: [[0, 1, 2, 3], [4, 5, 6, 7], [0, 1, 5, 4], [2, 3, 7, 6], [1, 2, 6, 5], [0, 3, 7, 4]],
};
const OCTA: Mesh = {
  v: [[1, 0, 0], [-1, 0, 0], [0, 1, 0], [0, -1, 0], [0, 0, 1], [0, 0, -1]],
  f: [[0, 2, 4], [2, 1, 4], [1, 3, 4], [3, 0, 4], [2, 0, 5], [1, 2, 5], [3, 1, 5], [0, 3, 5]],
};
const TETRA: Mesh = {
  v: [[1, 1, 1], [1, -1, -1], [-1, 1, -1], [-1, -1, 1]],
  f: [[0, 1, 2], [0, 1, 3], [0, 2, 3], [1, 2, 3]],
};
const scaled = (m: Mesh, sx: number, sy: number, sz: number): Mesh => ({
  v: m.v.map(([x, y, z]) => [x * sx, y * sy, z * sz] as V3),
  f: m.f,
});
const MESHES: Mesh[] = [
  CUBE,
  OCTA,
  TETRA,
  scaled(OCTA, 0.7, 1.55, 0.7),
  scaled(CUBE, 1.9, 0.36, 0.36),
  scaled(CUBE, 1.15, 1.15, 0.32),
];

const PALETTE: RGB[] = [
  [150, 190, 92],
  [198, 200, 62],
  [104, 146, 214],
  [74, 178, 222],
  [152, 134, 204],
  [178, 190, 208],
  [222, 232, 246],
];
const BG: RGB = [10, 28, 48];
const LIGHT = norm([-0.45, -0.75, -0.55]);
const NEAR = 60;
const CRUISE = 55;
const WARP = 1500;

function norm(v: V3): V3 {
  const l = Math.hypot(v[0], v[1], v[2]) || 1;
  return [v[0] / l, v[1] / l, v[2] / l];
}
const rand = (a: number, b: number) => a + Math.random() * (b - a);
const pick = <T,>(arr: T[]) => arr[Math.floor(Math.random() * arr.length)];
const clamp = (v: number, a: number, b: number) => Math.min(b, Math.max(a, v));

/** Critically damped spring (implicit Euler): smooth, frame-rate independent, never overshoots wildly. */
type Spring = { x: number; v: number };
const spring = (x = 0): Spring => ({ x, v: 0 });
function step(s: Spring, target: number, dt: number, omega: number) {
  const f = 1 + 2 * dt * omega;
  const hoo = dt * omega * omega;
  const hhoo = dt * hoo;
  const inv = 1 / (f + hhoo);
  const x = (f * s.x + dt * s.v + hhoo * target) * inv;
  s.v = (s.v + hoo * (target - s.x)) * inv;
  s.x = x;
}
/** Exponential approach that behaves the same at 30, 60 or 144 fps. */
const damp = (from: number, to: number, rate: number, dt: number) => from + (to - from) * (1 - Math.exp(-rate * dt));

type Obj = {
  mesh: Mesh;
  x: number; y: number; z: number; s: number;
  rx: number; ry: number; rz: number;
  vrx: number; vry: number; vrz: number;
  col: RGB;
  ring: boolean;
  theta: number; radius: number; bob: number;
  fade: number; fadeTarget: number;
};

type Star = { x: number; y: number; z: number };

export type OrbPose = "hidden" | "hero" | "center" | "right" | "left" | "top" | "portal" | "hub";

/** Where the ball sits on the destinations screen, and the orbit its satellites follow. Shared with the DOM. */
export function hubLayout(w: number, h: number) {
  const m = Math.min(w, h);
  const wide = w > 900;
  // Keep the whole orbit (satellite moon above, moon + label below) between the heading and the buttons.
  const top = wide ? 212 : 186;
  const bottom = h - 205;
  const ry = Math.max(80, (bottom - top) / 2);
  const cy = Math.max(top + 80, (top + bottom) / 2);
  const rx = wide ? Math.min(0.34 * w, 540) : 0.29 * w;
  const r = Math.min(wide ? 0.14 * m : 0.16 * m, ry * 0.5);
  return { cx: 0.5 * w, cy, r, rx, ry, tilt: wide ? -0.08 : -0.1 };
}

export type IntroScene = {
  /** Leave the loading screen: fly forward and bring in the ball. */
  reveal: () => void;
  /** Glide the ball to a named position. */
  setPose: (pose: OrbPose) => void;
  /** Progress ring around the ball, 0..1; a negative value hides it. */
  setProgress: (p: number) => void;
  /** A short burst of forward speed (star streaks). */
  warp: (strength?: number) => void;
  destroy: () => void;
};

export function startIntroScene(
  canvas: HTMLCanvasElement,
  { markSrc, reduceMotion }: { markSrc: string; reduceMotion: boolean },
): IntroScene {
  const noop: IntroScene = { reveal() {}, setPose() {}, setProgress() {}, warp() {}, destroy() {} };
  const ctx = canvas.getContext("2d");
  if (!ctx) return noop;
  const c2d: CanvasRenderingContext2D = ctx;

  const mark = new Image();
  mark.src = markSrc;

  let w = 0;
  let h = 0;
  let F = 600;
  let bg: CanvasGradient | null = null;

  const RING_Z = 900;
  const objs: Obj[] = [];
  const stars: Star[] = [];

  const makeObj = (ring: boolean, i = 0, n = 1): Obj => ({
    mesh: pick(MESHES),
    x: 0, y: 0, z: 0,
    s: ring ? rand(22, 34) : rand(26, 70),
    rx: rand(0, 6.28), ry: rand(0, 6.28), rz: rand(0, 6.28),
    vrx: rand(-0.45, 0.45), vry: rand(-0.5, 0.5), vrz: rand(-0.3, 0.3),
    col: pick(PALETTE),
    ring,
    theta: (i / n) * Math.PI * 2 + rand(-0.2, 0.2),
    radius: rand(280, 400),
    bob: rand(0, 6.28),
    fade: 0,
    fadeTarget: ring ? 1 : 0,
  });

  const placeFar = (o: Obj, camZ: number, near = false) => {
    o.ring = false;
    o.x = rand(-1700, 1700);
    o.y = rand(-950, 950);
    o.z = camZ + (near ? rand(700, 5200) : rand(4300, 5600));
    o.s = rand(26, 70);
    o.fade = 0;
  };

  for (let i = 0; i < 10; i++) objs.push(makeObj(true, i, 10));
  for (let i = 0; i < 30; i++) {
    const o = makeObj(false);
    placeFar(o, 1150, true);
    objs.push(o);
  }
  for (let i = 0; i < 260; i++) stars.push({ x: rand(-3200, 3200), y: rand(-2000, 2000), z: rand(150, 6200) });

  const motion = reduceMotion ? 0 : 1;
  let camZ = 0;
  let camX = 0;
  let camY = 0;
  let tx = 0;
  let ty = 0;
  let t = 0;
  let revealed = false;
  let warpUntil = -1;
  let warpPower = 1;
  let beam = 1;
  let raf = 0;
  let last = performance.now();

  const speed = spring(0);
  let pose: OrbPose = "hidden";
  const orbX = spring(0);
  const orbY = spring(0);
  const orbR = spring(0);
  const orbA = spring(0);
  let progress = -1;
  let shownProgress = 0;
  let ringVis = 0;
  let hubK = 0;

  function poseTarget(p: OrbPose) {
    const m = Math.min(w, h);
    const wide = w > 900;
    switch (p) {
      case "hero":
        return wide ? { x: 0.73 * w, y: 0.48 * h, r: 0.24 * m, a: 1 } : { x: 0.5 * w, y: 0.27 * h, r: 0.25 * m, a: 1 };
      case "center":
        return wide ? { x: 0.5 * w, y: 0.5 * h, r: 0.17 * m, a: 1 } : { x: 0.5 * w, y: 0.33 * h, r: 0.22 * m, a: 1 };
      case "right":
        return wide ? { x: 0.73 * w, y: 0.5 * h, r: 0.22 * m, a: 1 } : { x: 0.6 * w, y: 0.3 * h, r: 0.22 * m, a: 1 };
      case "left":
        return wide ? { x: 0.27 * w, y: 0.5 * h, r: 0.22 * m, a: 1 } : { x: 0.4 * w, y: 0.3 * h, r: 0.22 * m, a: 1 };
      case "top":
        return wide ? { x: 0.5 * w, y: 0.3 * h, r: 0.13 * m, a: 1 } : { x: 0.5 * w, y: 0.28 * h, r: 0.2 * m, a: 1 };
      case "portal":
        return { x: 0.5 * w, y: 0.5 * h, r: Math.hypot(w, h) * 1.6, a: 0 };
      case "hub": {
        const hub = hubLayout(w, h);
        return { x: hub.cx, y: hub.cy, r: hub.r, a: 1 };
      }
      default:
        return { x: orbX.x, y: orbY.x, r: 0, a: 0 };
    }
  }

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = canvas.clientWidth || window.innerWidth;
    h = canvas.clientHeight || window.innerHeight;
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    c2d.setTransform(dpr, 0, 0, dpr, 0, 0);
    F = Math.min(w * 0.75, h * 1.05);
    bg = c2d.createRadialGradient(w * 0.5, h * 0.32, 0, w * 0.5, h * 0.32, Math.max(w, h) * 0.95);
    bg.addColorStop(0, "#1D4D7B");
    bg.addColorStop(0.45, "#0E2338");
    bg.addColorStop(1, "#071423");
  }

  function onPointer(e: PointerEvent) {
    tx = (e.clientX / w - 0.5) * 2;
    ty = (e.clientY / h - 0.5) * 2;
  }

  function rotate(v: V3, o: Obj): V3 {
    let [x, y, z] = v;
    const cx = Math.cos(o.rx), sx = Math.sin(o.rx);
    [y, z] = [y * cx - z * sx, y * sx + z * cx];
    const cy = Math.cos(o.ry), sy = Math.sin(o.ry);
    [x, z] = [x * cy + z * sy, -x * sy + z * cy];
    const cz = Math.cos(o.rz), sz = Math.sin(o.rz);
    [x, y] = [x * cz - y * sz, x * sz + y * cz];
    return [x * o.s + o.x - camX, y * o.s + o.y - camY, z * o.s + o.z - camZ];
  }

  const project = (p: V3): [number, number] => [w / 2 + (p[0] * F) / p[2], h / 2 + (p[1] * F) / p[2]];

  function drawObj(o: Obj) {
    const cz = o.z - camZ;
    if (cz < NEAR + o.s * 2 || o.fade <= 0.01) return;
    const pts = o.mesh.v.map((v) => rotate(v, o));
    const center: V3 = [o.x - camX, o.y - camY, cz];
    // Fade in from the fog far away and fade out just before passing the camera, so nothing pops.
    const fog = clamp((cz - 1300) / 5000, 0, 0.72);
    const nearFade = clamp((cz - NEAR - o.s * 2) / 260, 0, 1);
    const faces: { d: number; idx: number[]; shade: number }[] = [];
    for (const f of o.mesh.f) {
      const a = pts[f[0]], b = pts[f[1]], c = pts[f[2]];
      const u: V3 = [b[0] - a[0], b[1] - a[1], b[2] - a[2]];
      const v: V3 = [c[0] - a[0], c[1] - a[1], c[2] - a[2]];
      let n = norm([u[1] * v[2] - u[2] * v[1], u[2] * v[0] - u[0] * v[2], u[0] * v[1] - u[1] * v[0]]);
      let fx = 0, fy = 0, fz = 0;
      for (const k of f) { fx += pts[k][0]; fy += pts[k][1]; fz += pts[k][2]; }
      fx /= f.length; fy /= f.length; fz /= f.length;
      if (n[0] * (fx - center[0]) + n[1] * (fy - center[1]) + n[2] * (fz - center[2]) < 0) n = [-n[0], -n[1], -n[2]];
      if (n[0] * fx + n[1] * fy + n[2] * fz >= 0) continue;
      const shade = 0.6 + 0.5 * Math.max(0, n[0] * LIGHT[0] + n[1] * LIGHT[1] + n[2] * LIGHT[2]);
      faces.push({ d: fz, idx: f, shade });
    }
    faces.sort((p, q) => q.d - p.d);
    const alpha = o.fade * nearFade;
    if (alpha <= 0.01) return;
    c2d.lineJoin = "round";
    for (const face of faces) {
      const col = o.col.map((ch, k) => Math.round(Math.min(255, ch * face.shade) * (1 - fog) + BG[k] * fog));
      c2d.beginPath();
      face.idx.forEach((k, j) => {
        const [px, py] = project(pts[k]);
        if (j === 0) c2d.moveTo(px, py);
        else c2d.lineTo(px, py);
      });
      c2d.closePath();
      c2d.fillStyle = `rgba(${col[0]},${col[1]},${col[2]},${alpha})`;
      c2d.fill();
      c2d.strokeStyle = `rgba(255,255,255,${0.28 * alpha * (1 - fog)})`;
      c2d.lineWidth = 1;
      c2d.stroke();
    }
  }

  function drawStars(v: number) {
    // Streak length grows continuously with speed: no jump between dots and lines.
    const len = clamp(v * 0.06, 0, 700);
    const boost = clamp(v / 1200, 0, 1) * 0.25;
    c2d.lineCap = "round";
    for (const s of stars) {
      let z = s.z - camZ;
      if (z < NEAR) {
        s.z += 6000;
        s.x = rand(-3200, 3200);
        s.y = rand(-2000, 2000);
        z = s.z - camZ;
      }
      const x = s.x - camX * 0.5;
      const y = s.y - camY * 0.5;
      const px = w / 2 + (x * F) / z;
      const py = h / 2 + (y * F) / z;
      if (px < -40 || px > w + 40 || py < -40 || py > h + 40) continue;
      const a = Math.min(1, clamp(1.15 - z / 6000, 0, 1) * 0.85 + boost) * clamp((z - NEAR) / 200, 0, 1);
      const size = clamp(320 / z, 0.6, 2.4);
      const z2 = z + len;
      const qx = w / 2 + (x * F) / z2;
      const qy = h / 2 + (y * F) / z2;
      if ((px - qx) ** 2 + (py - qy) ** 2 < 0.5) {
        c2d.fillStyle = `rgba(214,229,250,${a})`;
        c2d.fillRect(px - size / 2, py - size / 2, size, size);
      } else {
        c2d.strokeStyle = `rgba(214,229,250,${a})`;
        c2d.lineWidth = size;
        c2d.beginPath();
        c2d.moveTo(qx, qy);
        c2d.lineTo(px, py);
        c2d.stroke();
      }
    }
  }

  function drawBeam(a: number) {
    if (a <= 0.01) return;
    const bw = Math.max(140, w * 0.16);
    const g = c2d.createLinearGradient(w / 2 - bw, 0, w / 2 + bw, 0);
    g.addColorStop(0, "rgba(160,200,255,0)");
    g.addColorStop(0.5, `rgba(180,214,255,${0.16 * a})`);
    g.addColorStop(1, "rgba(160,200,255,0)");
    c2d.fillStyle = g;
    c2d.fillRect(w / 2 - bw, 0, bw * 2, h);
    const glow = c2d.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, Math.min(w, h) * 0.45);
    glow.addColorStop(0, `rgba(120,180,240,${0.22 * a})`);
    glow.addColorStop(1, "rgba(120,180,240,0)");
    c2d.fillStyle = glow;
    c2d.fillRect(0, 0, w, h);
  }

  function ringPath(ox: number, oy: number, rx: number, ry: number, rot: number, from: number, to: number) {
    c2d.beginPath();
    c2d.ellipse(ox, oy, rx, ry, rot, from, to);
  }

  function drawOrb() {
    const r = orbR.x;
    let alpha = clamp(orbA.x, 0, 1);
    // Diving into the ball: it rushes at the camera and dissolves instead of filling the screen.
    if (pose === "portal") alpha *= clamp(1.8 - r / (Math.min(w, h) * 0.28), 0, 1);
    if (r < 1 || alpha < 0.01) return;
    // On the destinations screen the ball holds still so the clickable satellites orbit it exactly.
    const free = 1 - hubK;
    const ox = orbX.x - camX * 0.12 * free;
    const oy = orbY.x + (Math.sin(t * 0.9) * 8 * motion - camY * 0.08) * free;
    const spin = t * 0.5 * motion;
    const orbitA = (1 - ringVis) * free;

    c2d.save();
    c2d.globalAlpha = alpha;

    const glow = c2d.createRadialGradient(ox, oy, r * 0.6, ox, oy, r * 2.3);
    glow.addColorStop(0, "rgba(45,141,182,0.42)");
    glow.addColorStop(1, "rgba(45,141,182,0)");
    c2d.fillStyle = glow;
    c2d.fillRect(Math.max(0, ox - r * 2.4), Math.max(0, oy - r * 2.4), Math.min(w, r * 4.8), Math.min(h, r * 4.8));

    const rings: { rx: number; ry: number; rot: number; col: string; dot: string; sp: number }[] = [
      { rx: r * 1.6, ry: r * 0.42, rot: -0.32, col: `rgba(201,214,234,${0.45 * orbitA})`, dot: "#C9D6EA", sp: 0.7 },
      { rx: r * 1.95, ry: r * 0.56, rot: 0.22, col: `rgba(133,168,79,${0.45 * orbitA})`, dot: "#B5D77A", sp: -0.45 },
    ];
    c2d.lineWidth = 2;
    if (orbitA > 0.01) {
      for (const g of rings) {
        c2d.strokeStyle = g.col;
        ringPath(ox, oy, g.rx, g.ry, g.rot, Math.PI, Math.PI * 2);
        c2d.stroke();
      }
    }
    const satellite = (g: (typeof rings)[number], front: boolean) => {
      if (orbitA <= 0.01) return;
      const a = spin * g.sp * 2;
      const s = Math.sin(a);
      if (front !== s > 0) return;
      const ex = Math.cos(a) * g.rx;
      const ey = s * g.ry;
      const px = ox + ex * Math.cos(g.rot) - ey * Math.sin(g.rot);
      const py = oy + ex * Math.sin(g.rot) + ey * Math.cos(g.rot);
      c2d.globalAlpha = alpha * orbitA;
      c2d.fillStyle = g.dot;
      c2d.beginPath();
      c2d.arc(px, py, Math.max(3, r * 0.045), 0, Math.PI * 2);
      c2d.fill();
      c2d.globalAlpha = alpha;
    };
    rings.forEach((g) => satellite(g, false));

    const body = c2d.createRadialGradient(ox - r * 0.35, oy - r * 0.4, r * 0.08, ox, oy, r);
    body.addColorStop(0, "#FFFFFF");
    body.addColorStop(0.55, "#E2EAF6");
    body.addColorStop(1, "#8FA9CF");
    c2d.fillStyle = body;
    c2d.beginPath();
    c2d.arc(ox, oy, r, 0, Math.PI * 2);
    c2d.fill();

    c2d.save();
    c2d.beginPath();
    c2d.arc(ox, oy, r, 0, Math.PI * 2);
    c2d.clip();
    c2d.strokeStyle = "rgba(29,77,123,0.08)";
    c2d.lineWidth = Math.max(1, r * 0.02);
    const drift = ((t * 0.08 * motion) % 0.36) * r;
    for (let i = -3; i <= 3; i++) {
      c2d.beginPath();
      c2d.ellipse(ox, oy + i * r * 0.36 + drift, r * 1.05, r * 0.16, 0, 0, Math.PI * 2);
      c2d.stroke();
    }
    c2d.restore();

    if (mark.complete && mark.naturalWidth) {
      const size = r * 1.12;
      c2d.save();
      c2d.translate(ox, oy);
      c2d.rotate(Math.sin(t * 0.5) * 0.06 * motion);
      c2d.drawImage(mark, -size / 2, -size / 2, size, size);
      c2d.restore();
    }

    if (orbitA > 0.01) {
      for (const g of rings) {
        c2d.strokeStyle = g.col;
        ringPath(ox, oy, g.rx, g.ry, g.rot, 0, Math.PI);
        c2d.stroke();
      }
    }
    rings.forEach((g) => satellite(g, true));

    if (ringVis > 0.01) {
      const R = r * 1.3;
      c2d.globalAlpha = alpha * ringVis;
      c2d.lineCap = "round";
      c2d.lineWidth = 2;
      c2d.strokeStyle = "rgba(255,255,255,0.14)";
      c2d.beginPath();
      c2d.arc(ox, oy, R, 0, Math.PI * 2);
      c2d.stroke();

      c2d.setLineDash([2, 12]);
      c2d.lineDashOffset = -t * 14 * motion;
      c2d.strokeStyle = "rgba(201,214,234,0.35)";
      c2d.lineWidth = 1.5;
      c2d.beginPath();
      c2d.arc(ox, oy, R * 1.22, 0, Math.PI * 2);
      c2d.stroke();
      c2d.setLineDash([]);

      if (shownProgress > 0.002) {
        const end = -Math.PI / 2 + Math.PI * 2 * shownProgress;
        const g = c2d.createLinearGradient(ox - R, oy - R, ox + R, oy + R);
        g.addColorStop(0, "#2D8DB6");
        g.addColorStop(0.6, "#85A84F");
        g.addColorStop(1, "#AFB129");
        c2d.strokeStyle = g;
        c2d.lineWidth = 3.5;
        c2d.beginPath();
        c2d.arc(ox, oy, R, -Math.PI / 2, end);
        c2d.stroke();
        c2d.fillStyle = "#E3F0C4";
        c2d.shadowColor = "rgba(181,215,122,0.9)";
        c2d.shadowBlur = 12;
        c2d.beginPath();
        c2d.arc(ox + Math.cos(end) * R, oy + Math.sin(end) * R, 4.5, 0, Math.PI * 2);
        c2d.fill();
        c2d.shadowBlur = 0;
      }
    }
    c2d.restore();
  }

  function frame(now: number) {
    const dt = Math.min(0.1, Math.max(0, (now - last) / 1000));
    last = now;
    t += dt;

    camX = damp(camX, tx * 130 * motion, 2.4, dt);
    camY = damp(camY, ty * 75 * motion, 2.4, dt);

    const targetSpeed = !revealed || reduceMotion ? 0 : t < warpUntil ? WARP * warpPower : CRUISE;
    step(speed, targetSpeed, dt, 2.6);
    camZ += Math.max(0, speed.x) * dt;
    beam = damp(beam, revealed ? 0 : 1, 3, dt);

    const target = poseTarget(pose);
    if (reduceMotion) {
      orbX.x = target.x; orbY.x = target.y; orbR.x = target.r; orbA.x = target.a;
    } else {
      const fast = pose === "portal";
      step(orbX, target.x, dt, 3.6);
      step(orbY, target.y, dt, 3.6);
      step(orbR, target.r, dt, fast ? 2.6 : 3.8);
      step(orbA, target.a, dt, fast ? 2.2 : 4);
    }
    ringVis = damp(ringVis, progress >= 0 ? 1 : 0, 3.5, dt);
    hubK = damp(hubK, pose === "hub" ? 1 : 0, 4, dt);
    if (progress >= 0) shownProgress = damp(shownProgress, progress, 8, dt);

    for (const o of objs) {
      o.rx += o.vrx * dt * motion;
      o.ry += o.vry * dt * motion;
      o.rz += o.vrz * dt * motion;
      if (o.ring) {
        o.theta += 0.12 * dt * motion;
        o.x = Math.cos(o.theta) * o.radius;
        o.y = Math.sin(o.theta) * o.radius * 0.55 + Math.sin(t * 1.3 + o.bob) * 10 * motion;
        o.z = RING_Z + Math.sin(o.theta) * o.radius * 0.3;
        if (o.z - camZ < NEAR && revealed) {
          placeFar(o, camZ);
          o.fadeTarget = 1;
        }
      } else if (o.z - camZ < NEAR) {
        placeFar(o, camZ);
      }
      o.fade = damp(o.fade, o.fadeTarget, 1.6, dt);
    }

    c2d.fillStyle = bg ?? "#0E2338";
    c2d.fillRect(0, 0, w, h);
    drawStars(speed.x);
    drawBeam(beam);
    const sorted = [...objs].sort((a, b) => b.z - a.z);
    const orbDepth = camZ + 1500;
    let orbDrawn = false;
    for (const o of sorted) {
      if (!orbDrawn && o.z < orbDepth) {
        drawOrb();
        orbDrawn = true;
      }
      drawObj(o);
    }
    if (!orbDrawn) drawOrb();

    raf = requestAnimationFrame(frame);
  }

  resize();
  orbX.x = poseTarget("hero").x;
  orbY.x = poseTarget("hero").y;
  window.addEventListener("resize", resize);
  window.addEventListener("pointermove", onPointer, { passive: true });
  raf = requestAnimationFrame(frame);

  return {
    reveal() {
      if (revealed) return;
      revealed = true;
      warpUntil = t + 1.1;
      warpPower = 1;
      pose = "hero";
      for (const o of objs) if (!o.ring) o.fadeTarget = 1;
    },
    setPose(p) {
      // After diving through the ball it is gone: don't let it shrink back into view.
      if (pose === "portal" && p !== "portal") {
        orbR.x = 0; orbR.v = 0; orbA.x = 0; orbA.v = 0;
        if (p === "hub") {
          const hub = hubLayout(w, h);
          orbX.x = hub.cx; orbX.v = 0; orbY.x = hub.cy; orbY.v = 0;
        }
      }
      pose = p;
    },
    setProgress(p) {
      progress = p;
    },
    warp(strength = 1) {
      if (reduceMotion) return;
      warpPower = strength;
      warpUntil = t + 0.5 + 0.7 * strength;
    },
    destroy() {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointer);
    },
  };
}
