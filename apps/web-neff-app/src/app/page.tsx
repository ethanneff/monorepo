/* eslint-disable max-lines */
'use client';

import { useCallback, useEffect, useRef } from 'react';

type Bubble = {
  color: string;
  id: number;
  r: number;
  vx: number;
  vy: number;
  x: number;
  y: number;
};

const STROKE_COLOR = 'oklch(0.2 0 0)';
const MIN_RADIUS = 5;
const INITIAL_BUBBLE_COUNT = 10;
const CELL_SIZE = 300;

const BubblePhysics = () => {
  const canvasReference = useRef<HTMLCanvasElement>(null);
  const contextReference = useRef<CanvasRenderingContext2D | null>(null);
  const bubblesReference = useRef<Bubble[]>([]);
  const nextIdReference = useRef(0);
  const rafReference = useRef<number>(null);
  const runningReference = useRef(true);
  const dprReference = useRef(1);
  const lastTsReference = useRef(0);

  // resize canvas to CSS size * DPR and scale context once
  const fitCanvas = () => {
    const canvas = canvasReference.current;
    const context = contextReference.current;
    if (!canvas || !context) return;

    const rect = canvas.getBoundingClientRect();
    const dpr = Math.max(1, Math.floor(window.devicePixelRatio || 1));
    dprReference.current = dpr;

    const w = Math.max(1, Math.floor(rect.width * dpr));
    const h = Math.max(1, Math.floor(rect.height * dpr));

    if (canvas.width !== w || canvas.height !== h) {
      canvas.width = w;
      canvas.height = h;
      context.setTransform(1, 0, 0, 1, 0, 0);
      context.scale(dpr, dpr);
    }
  };

  // init
  useEffect(() => {
    const canvas = canvasReference.current;
    if (!canvas) return;
    const context = canvas.getContext('2d');
    if (!context) return;
    contextReference.current = context;

    // Make the canvas fill the viewport via CSS (Tailwind h-screen w-full)
    // Then fit to DPR-scaled backing store:
    fitCanvas();

    // init bubbles
    const cssRect = canvas.getBoundingClientRect();
    const w = cssRect.width;
    const h = cssRect.height;
    const array: Bubble[] = [];
    for (let index = 0; index < INITIAL_BUBBLE_COUNT; index++) {
      const r = 50 + Math.random() * 40;
      array.push({
        color: STROKE_COLOR,
        id: nextIdReference.current++,
        r,
        vx: (Math.random() - 0.5) * 4,
        vy: (Math.random() - 0.5) * 4,
        x: r + Math.random() * (w - r * 2),
        y: r + Math.random() * (h - r * 2),
      });
    }
    bubblesReference.current = array;

    // observe size changes
    const ro = new ResizeObserver(() => {
      fitCanvas();
    });
    ro.observe(canvas);

    runningReference.current = true;
    lastTsReference.current = performance.now();

    const loop = (ts: number) => {
      if (!runningReference.current) return;
      const context2 = contextReference.current;
      const canvasElement = canvasReference.current;
      if (!context2 || !canvasElement) return;

      const rect = canvasElement.getBoundingClientRect();
      const { width } = rect;
      const { height } = rect;

      // time step (cap to 33ms for stability)
      const dt = Math.min(33, ts - lastTsReference.current);
      lastTsReference.current = ts;
      // ~60Hz units
      const dts = dt / 16.6667;

      stepPhysics(bubblesReference.current, width, height, dts);

      // draw
      context2.clearRect(0, 0, width, height);
      context2.lineWidth = 2;
      context2.strokeStyle = STROKE_COLOR;

      context2.beginPath();
      for (const b of bubblesReference.current) {
        context2.moveTo(b.x + b.r, b.y);
        context2.arc(b.x, b.y, b.r, 0, Math.PI * 2);
      }
      context2.stroke();

      rafReference.current = requestAnimationFrame(loop);
    };

    rafReference.current = requestAnimationFrame(loop);

    return () => {
      runningReference.current = false;
      if (rafReference.current) cancelAnimationFrame(rafReference.current);
      ro.disconnect();
    };
  }, []);

  // click to split (no React state)
  const onClick = useCallback((event: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasReference.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const array = bubblesReference.current;
    const index = array.findIndex((b) => {
      const dx = x - b.x;
      const dy = y - b.y;
      return dx * dx + dy * dy < b.r * b.r;
    });
    if (index === -1) return;

    const b = array[index];
    if (b.r <= MIN_RADIUS * 2) return;

    const newR = b.r / Math.SQRT2;
    const angle = Math.random() * Math.PI * 2;
    const cx = Math.cos(angle) * newR * 0.5;
    const sy = Math.sin(angle) * newR * 0.5;

    const n1: Bubble = {
      color: b.color,
      id: nextIdReference.current++,
      r: newR,
      vx: b.vx + Math.cos(angle) * 2,
      vy: b.vy + Math.sin(angle) * 2,
      x: b.x + cx,
      y: b.y + sy,
    };
    const n2: Bubble = {
      color: b.color,
      id: nextIdReference.current++,
      r: newR,
      vx: b.vx - Math.cos(angle) * 2,
      vy: b.vy - Math.sin(angle) * 2,
      x: b.x - cx,
      y: b.y - sy,
    };

    const updated = [
      ...array.slice(0, index),
      ...array.slice(index + 1),
      n1,
      n2,
    ];
    bubblesReference.current = updated;
  }, []);

  return (
    <main className="relative h-screen w-full overflow-hidden">
      <canvas
        className="block h-full w-full cursor-pointer"
        onClick={onClick}
        ref={canvasReference}
      />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <p className="text-foreground/30 animate-pulse font-sans text-2xl">
          click the circles
        </p>
      </div>
    </main>
  );
};

/** Physics with spatial hashing & sqrt-free tests */
const stepPhysics = (
  bubbles: Bubble[],
  width: number,
  height: number,
  dt: number,
  // eslint-disable-next-line max-params, sonarjs/cognitive-complexity
) => {
  const n = bubbles.length;
  if (n === 0) return;

  // integrate + wall bounce
  for (let index = 0; index < n; index++) {
    const b = bubbles[index];
    b.x += b.vx * dt;
    b.y += b.vy * dt;

    if (b.x - b.r < 0) {
      b.x = b.r;
      b.vx = -b.vx;
    } else if (b.x + b.r > width) {
      b.x = width - b.r;
      b.vx = -b.vx;
    }
    if (b.y - b.r < 0) {
      b.y = b.r;
      b.vy = -b.vy;
    } else if (b.y + b.r > height) {
      b.y = height - b.r;
      b.vy = -b.vy;
    }
  }

  // spatial hash: cell key "cx,cy"
  const grid = new Map<string, number[]>();
  const cellSize = CELL_SIZE;

  const put = (key: string, index: number) => {
    const a = grid.get(key);
    if (a) a.push(index);
    else grid.set(key, [index]);
  };

  for (let index = 0; index < n; index++) {
    const b = bubbles[index];
    const minCx = Math.floor((b.x - b.r) / cellSize);
    const maxCx = Math.floor((b.x + b.r) / cellSize);
    const minCy = Math.floor((b.y - b.r) / cellSize);
    const maxCy = Math.floor((b.y + b.r) / cellSize);
    for (let cx = minCx; cx <= maxCx; cx++) {
      for (let cy = minCy; cy <= maxCy; cy++) {
        put(`${cx},${cy}`, index);
      }
    }
  }

  // check collisions only among neighbors
  const visitedPairs = new Set<string>();
  const neighbors = [
    [0, 0],
    [1, 0],
    [0, 1],
    [1, 1],
    [-1, 0],
    [0, -1],
    [-1, -1],
    [1, -1],
    [-1, 1],
  ];

  // local function to handle collisions for a set of indices
  // eslint-disable-next-line sonarjs/cognitive-complexity
  const collideIndices = (A: number[], B?: number[]) => {
    // eslint-disable-next-line no-param-reassign, @typescript-eslint/prefer-nullish-coalescing
    if (!B) B ??= A;
    for (let index = 0; index < A.length; index++) {
      const indexIndex = A[index];
      const bi = bubbles[indexIndex];
      const indexStart = B === A ? index + 1 : 0;
      for (let index2 = indexStart; index2 < B.length; index2++) {
        const indexIndex2 = B[index2];
        if (indexIndex === indexIndex2) continue;

        // de-dup cross-cell pairs
        const pairKey =
          indexIndex < indexIndex2
            ? `${indexIndex}-${indexIndex2}`
            : `${indexIndex2}-${indexIndex}`;
        if (visitedPairs.has(pairKey)) continue;
        visitedPairs.add(pairKey);

        const bj = bubbles[indexIndex2];
        const dx = bj.x - bi.x;
        const dy = bj.y - bi.y;
        const rSum = bi.r + bj.r;
        const distribution2 = dx * dx + dy * dy;
        if (distribution2 >= rSum * rSum) continue;

        // resolve overlap & compute elastic collision along normal
        const distribution = Math.sqrt(distribution2) || 0.0001;
        const nx = dx / distribution;
        const ny = dy / distribution;

        // separate equally
        const overlap = rSum - distribution;
        const half = overlap * 0.5;
        bi.x -= nx * half;
        bi.y -= ny * half;
        bj.x += nx * half;
        bj.y += ny * half;

        // relative velocity along normal
        const rvx = bj.vx - bi.vx;
        const rvy = bj.vy - bi.vy;
        const relativeVelocityAlongN = rvx * nx + rvy * ny;
        // moving apart
        if (relativeVelocityAlongN > 0) continue;

        // equal mass elastic: swap normal components
        const impulse = -relativeVelocityAlongN;
        const jx = impulse * nx;
        const jy = impulse * ny;
        bi.vx -= jx;
        bi.vy -= jy;
        bj.vx += jx;
        bj.vy += jy;
      }
    }
  };

  for (const [key, indices] of grid.entries()) {
    const [cxString, cyString] = key.split(',');
    const cx = Number(cxString);
    const cy = Number(cyString);

    // collide within cell
    collideIndices(indices);

    // collide with neighbor cells (to avoid missing boundary pairs)
    for (const [ox, oy] of neighbors) {
      const nk = `${cx + ox},${cy + oy}`;
      const ni = grid.get(nk);
      if (ni && ni !== indices) collideIndices(indices, ni);
    }
  }
};

export default BubblePhysics;

/* eslint-enable max-lines */
