import React, { useEffect, useRef, useImperativeHandle, forwardRef } from 'react';

// ─── MODULE-LEVEL SINGLETONS ────────────────────────────────────────────────
// Images live outside React — they are created once for the lifetime of the page
// and never get garbage-collected or re-created on re-renders/remounts.
const TOTAL_A = 74;
const TOTAL_B = 69;

const imagesA = [];
const imagesB = [];
let imagesLoaded = false;

function ensureImagesLoaded() {
  if (imagesLoaded) return;
  imagesLoaded = true;

  for (let i = 1; i <= TOTAL_A; i++) {
    const img = new Image();
    img.src = `/pic/ezgif-1c8e53b2e1acb458-jpg/ezgif-frame-${String(i).padStart(3, '0')}.jpg`;
    imagesA.push(img);
  }
  for (let i = 1; i <= TOTAL_B; i++) {
    const img = new Image();
    img.src = `/pic/ezgif-1186f1d6b5d633e8-jpg/ezgif-frame-${String(i).padStart(3, '0')}.jpg`;
    imagesB.push(img);
  }
}

// Call immediately when module is imported — frames start downloading instantly
ensureImagesLoaded();

// ─── SHARED CANVAS STATE ─────────────────────────────────────────────────────
// Also module-level so GSAP can mutate it without touching React state.
export const canvasState = {
  frameA: 0,
  frameB: 0,
  blend: 0,        // 0 = 100% Sequence A, 1 = 100% Sequence B
};

// ─── COMPONENT ───────────────────────────────────────────────────────────────
const CinematicCanvas = forwardRef((_props, ref) => {
  const canvasRef = useRef(null);

  // Lerped render values (live inside RAF loop, never in React state)
  const lerpRef = useRef({ frameA: 0, frameB: 0, blend: 0 });

  // Expose state object for GSAP to mutate via ref
  useImperativeHandle(ref, () => ({ state: canvasState }));

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // ── Resize handler ──────────────────────────────────────────────────────
    function resize() {
      const dpr = window.devicePixelRatio || 1;
      canvas.width  = window.innerWidth  * dpr;
      canvas.height = window.innerHeight * dpr;
    }
    resize();
    window.addEventListener('resize', resize);

    // ── Cover-fit draw helper ───────────────────────────────────────────────
    function drawCover(ctx, img, alpha, w, h) {
      if (!img || !img.complete || img.naturalWidth === 0) return;
      ctx.save();
      ctx.globalAlpha = alpha;

      const ir = img.naturalWidth / img.naturalHeight;
      const cr = w / h;
      let dw, dh, dx, dy;
      if (cr > ir) { dw = w; dh = w / ir; dx = 0; dy = (h - dh) / 2; }
      else          { dh = h; dw = h * ir; dy = 0; dx = (w - dw) / 2; }

      ctx.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight, dx, dy, dw, dh);
      ctx.restore();
    }

    // ── Vignette (drawn once per frame on top) ──────────────────────────────
    function drawVignette(ctx, w, h) {
      const grad = ctx.createRadialGradient(w/2, h/2, Math.min(w,h)*0.35, w/2, h/2, Math.max(w,h)*0.85);
      grad.addColorStop(0,   'rgba(15, 10, 6, 0)');
      grad.addColorStop(0.5, 'rgba(15, 10, 6, 0.35)');
      grad.addColorStop(1,   'rgba(15, 10, 6, 0.95)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);
    }

    // ── RAF loop ────────────────────────────────────────────────────────────
    const LERP = 0.1; // smoothness — lower = more cinematic lag
    let rafId;

    function tick() {
      const lerp = lerpRef.current;
      const target = canvasState;

      // Smooth interpolation toward GSAP-scrubbed targets
      lerp.frameA += (target.frameA - lerp.frameA) * LERP;
      lerp.frameB += (target.frameB - lerp.frameB) * LERP;
      lerp.blend  += (target.blend  - lerp.blend)  * LERP;

      const idxA = Math.min(Math.max(Math.round(lerp.frameA), 0), TOTAL_A - 1);
      const idxB = Math.min(Math.max(Math.round(lerp.frameB), 0), TOTAL_B - 1);
      const bl   = Math.min(Math.max(lerp.blend, 0), 1);

      const ctx = canvas.getContext('2d');
      const w = canvas.width;
      const h = canvas.height;

      ctx.clearRect(0, 0, w, h);

      if (bl < 0.02) {
        drawCover(ctx, imagesA[idxA], 1, w, h);
      } else if (bl > 0.98) {
        drawCover(ctx, imagesB[idxB], 1, w, h);
      } else {
        drawCover(ctx, imagesA[idxA], 1 - bl, w, h);
        drawCover(ctx, imagesB[idxB], bl,      w, h);
      }

      drawVignette(ctx, w, h);

      rafId = requestAnimationFrame(tick);
    }

    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resize);
    };
  }, []); // runs exactly once

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        zIndex: -20,
        display: 'block',
        pointerEvents: 'none',
        backgroundColor: '#0f0a06',
      }}
    />
  );
});

CinematicCanvas.displayName = 'CinematicCanvas';
export default CinematicCanvas;
