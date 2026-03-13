"use client";

import { useEffect, useRef } from "react";

export default function TopographicCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let offset = 0;

    const NUM_LINES = 22;
    const LINE_OPACITY = 0.18;

    function resize() {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    function drawLines() {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const W = canvas.width;
      const H = canvas.height;
      const spacing = H / (NUM_LINES - 1);

      for (let i = 0; i < NUM_LINES; i++) {
        const baseY = i * spacing + (offset % spacing) - spacing;

        ctx.beginPath();
        ctx.strokeStyle = `rgba(255, 255, 255, ${LINE_OPACITY})`;
        ctx.lineWidth = 1;

        const steps = 120;
        for (let s = 0; s <= steps; s++) {
          const x = (s / steps) * W;
          // Multiple sine waves layered for organic ribbon shape
          const y =
            baseY +
            Math.sin((x / W) * Math.PI * 2.5 + i * 0.4 + offset * 0.012) * 60 +
            Math.sin((x / W) * Math.PI * 1.2 + i * 0.8 - offset * 0.008) * 35 +
            Math.sin((x / W) * Math.PI * 4 + i * 0.2 + offset * 0.005) * 15;

          if (s === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }
    }

    function animate() {
      offset += 0.5;
      drawLines();
      animationId = requestAnimationFrame(animate);
    }

    resize();
    animate();

    window.addEventListener("resize", () => {
      resize();
    });

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      aria-hidden="true"
    />
  );
}
