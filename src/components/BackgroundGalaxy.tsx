import { useEffect, useRef } from "react";

type Star = { x: number; y: number; z: number; size: number; phase: number; drift: number };
type Particle = { x: number; y: number; vx: number; vy: number; size: number; alpha: number };

interface BackgroundGalaxyProps {
  starDensity?: number; // clamped 0.5..2
  particleDensity?: number; // 0..1
}

const clamp = (value: number, min: number, max: number) => Math.max(min, Math.min(max, value));

export default function BackgroundGalaxy({ starDensity = 1, particleDensity = 0.5 }: BackgroundGalaxyProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const starsRef = useRef<Star[]>([]);
  const particlesRef = useRef<Particle[]>([]);
  const prefersReducedMotionRef = useRef<boolean>(false);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d", { alpha: false })!;
    const container: HTMLElement = canvas.parentElement as HTMLElement;

    const updatePrefersReducedMotion = () => {
      const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
      prefersReducedMotionRef.current = mq.matches;
      mq.onchange = () => (prefersReducedMotionRef.current = mq.matches);
    };

    updatePrefersReducedMotion();

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const baseWidth = 1280;
    const baseHeight = 720;

    const resize = () => {
      const rect = container.getBoundingClientRect();
      const targetWidth = Math.max(1, Math.floor(rect.width));
      const targetHeight = Math.max(1, Math.floor(rect.height));
      canvas.width = Math.floor(targetWidth * dpr);
      canvas.height = Math.floor(targetHeight * dpr);
      canvas.style.width = `${targetWidth}px`;
      canvas.style.height = `${targetHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      initScene();
      if (prefersReducedMotionRef.current) {
        draw();
      }
    };

    let lastTs = 0;

    const initScene = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;

      const starCount = Math.floor(220 * (width * height) / (baseWidth * baseHeight) * clamp(starDensity, 0.5, 2));
      const particleCount = Math.floor(40 * (width * height) / (baseWidth * baseHeight) * clamp(particleDensity, 0, 1));

      starsRef.current = Array.from({ length: starCount }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        z: 0.2 + Math.random() * 0.8,
        size: 0.4 + Math.random() * 1.0,
        phase: Math.random() * Math.PI * 2,
        drift: (Math.random() - 0.5) * 0.05,
      }));

      particlesRef.current = Array.from({ length: particleCount }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.05,
        vy: (Math.random() - 0.5) * 0.05,
        size: 0.6 + Math.random() * 1.4,
        alpha: 0.1 + Math.random() * 0.4,
      }));
    };

    const drawBackground = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;

      // Linear gradient background 0 -> 1 from #010208 to #05070e
      const grad = ctx.createLinearGradient(0, 0, 0, height);
      grad.addColorStop(0, "#010208");
      grad.addColorStop(1, "#05070e");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      // Subtle nebulas using radial gradients lighter blend
      const nebula = (cx: number, cy: number, r: number, color: string) => {
        const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
        g.addColorStop(0, color);
        g.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = g;
        ctx.globalCompositeOperation = "lighter";
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalCompositeOperation = "source-over";
      };

      nebula(width * 0.3, height * 0.35, Math.min(width, height) * 0.45, "rgba(76,110,245,0.06)");
      nebula(width * 0.7, height * 0.6, Math.min(width, height) * 0.55, "rgba(167,139,250,0.05)");
    };

    const draw = (ts?: number) => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      const t = ts ?? lastTs;
      lastTs = t;

      drawBackground();

      // Stars
      for (const s of starsRef.current) {
        const twinkle = 0.3 + 0.7 * Math.abs(Math.sin(t * 0.0015 + s.phase));
        const alpha = prefersReducedMotionRef.current ? 0.8 : twinkle;
        const x = s.x + (prefersReducedMotionRef.current ? 0 : s.drift * t * 0.02);
        ctx.save();
        ctx.shadowBlur = prefersReducedMotionRef.current ? 0 : (3 + s.size * 2);
        ctx.shadowColor = "rgba(255,255,255,0.6)";
        ctx.fillStyle = `rgba(255,255,255,${alpha})`;
        ctx.beginPath();
        ctx.arc(((x % width) + width) % width, s.y, s.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // Particles
      for (const p of particlesRef.current) {
        if (!prefersReducedMotionRef.current) {
          p.x += p.vx;
          p.y += p.vy;
        }
        if (p.x < 0) p.x = width; if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height; if (p.y > height) p.y = 0;
        ctx.fillStyle = `rgba(255,255,255,${p.alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      if (!prefersReducedMotionRef.current) {
        rafRef.current = requestAnimationFrame(draw);
      }
    };

    const onResize = () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      // Throttle to rAF by just resizing then drawing once
      resize();
      if (!prefersReducedMotionRef.current) {
        rafRef.current = requestAnimationFrame(draw);
      }
    };

    resize();
    if (!prefersReducedMotionRef.current) {
      rafRef.current = requestAnimationFrame(draw);
    } else {
      draw();
    }

    const ro = new ResizeObserver(onResize);
    ro.observe(container);
    window.addEventListener("resize", onResize);

    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", onResize);
      ro.disconnect();
    };
  }, [starDensity, particleDensity]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full gpu"
      aria-hidden="true"
    />
  );
}

