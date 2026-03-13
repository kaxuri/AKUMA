"use client";

import { useEffect, useRef } from "react";

export default function BackgroundLines() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    function resize() {
      if (!canvas) return;
      // Adjust for high DPI displays for a sharper look
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx!.scale(dpr, dpr);
    }

    function drawLines() {
      if (!canvas || !ctx) return;
      
      const W = window.innerWidth;
      const H = window.innerHeight;

      // Clear the canvas cleanly
      ctx.clearRect(0, 0, W, H);

      // Customize the density and look based on the image provided
      const NUM_LINES = 50; // Increased line count for the premium moire effect
      // Calculate spacing so lines expand beyond the screen to cover the edges during waves
      const startX = -W * 0.5;
      const endX = W * 1.5;
      const spacing = (endX - startX) / NUM_LINES;
      
      ctx.lineWidth = 1;
      ctx.strokeStyle = "rgba(255, 255, 255, 0.4)"; // Bright enough to look premium and sharp

      for (let i = 0; i < NUM_LINES; i++) {
        const baseX = startX + i * spacing;
        
        ctx.beginPath();
        
        // Number of vertical segments to draw each line
        const steps = 150; 
        for (let s = 0; s <= steps; s++) {
          const y = (s / steps) * H;
          
          // Moire wave math to match the reference image:
          // The lines pinch and separate by applying phase shifts based on both 'y' and 'i' (line index).
          // Wave 1: The primary large sway
          const wave1 = Math.sin(y * 0.003 + i * 0.15 + time * 0.8) * 120;
          // Wave 2: A secondary frequency to create complex overlapping patterns
          const wave2 = Math.sin(y * 0.005 - i * 0.05 + time * 0.4) * 80;
          // Wave 3: Subtle global drift
          const wave3 = Math.cos(y * 0.001 + time * 0.2) * 50;
          
          const x = baseX + wave1 + wave2 + wave3;
          
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
      time += 0.008; // Very slow and smooth animation
      drawLines();
      animationId = requestAnimationFrame(animate);
    }

    resize();
    animate();

    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.8 }} // Base opacity
      aria-hidden="true"
    />
  );
}
