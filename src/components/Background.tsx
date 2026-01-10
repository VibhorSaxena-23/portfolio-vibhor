"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
};

const CONFIG = {
  PARTICLE_COUNT: 100,
  PARTICLE_SIZE: 3,
  PARTICLE_COLOR: "#ffffff",

  MIN_VELOCITY: -0.5,
  MAX_VELOCITY: 0.5,
  VELOCITY_MULTIPLIER: 1.5,

  ACCELERATION: 0.0005,
  MAX_SPEED: 2.5,

  CONNECTION_DISTANCE: 120,
  LINE_COLOR: "255,255,255",
  LINE_WIDTH: 1,

  MOUSE_RADIUS: 120,
  ATTRACTION_STRENGTH: 20,
  REPEL_STRENGTH: 1,
};

export default function Background() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return; // ✅ runtime guard (TS + runtime safe)

    let animationFrameId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const mouse = {
      x: 0,
      y: 0,
      radius: CONFIG.MOUSE_RADIUS,
      repel: false,
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const handleMouseDown = () => (mouse.repel = true);
    const handleMouseUp = () => (mouse.repel = false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    const particles: Particle[] = [];

    for (let i = 0; i < CONFIG.PARTICLE_COUNT; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx:
          (Math.random() *
            (CONFIG.MAX_VELOCITY - CONFIG.MIN_VELOCITY) +
            CONFIG.MIN_VELOCITY) *
          CONFIG.VELOCITY_MULTIPLIER,
        vy:
          (Math.random() *
            (CONFIG.MAX_VELOCITY - CONFIG.MIN_VELOCITY) +
            CONFIG.MIN_VELOCITY) *
          CONFIG.VELOCITY_MULTIPLIER,
        radius: CONFIG.PARTICLE_SIZE,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const p of particles) {
        // Gradual acceleration
        p.vx *= 1 + CONFIG.ACCELERATION;
        p.vy *= 1 + CONFIG.ACCELERATION;

        // Speed clamp
        const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        if (speed > CONFIG.MAX_SPEED) {
          p.vx = (p.vx / speed) * CONFIG.MAX_SPEED;
          p.vy = (p.vy / speed) * CONFIG.MAX_SPEED;
        }

        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Edge bounce (radius-aware)
        if (p.x - p.radius <= 0 || p.x + p.radius >= canvas.width) {
          p.vx *= -1;
        }
        if (p.y - p.radius <= 0 || p.y + p.radius >= canvas.height) {
          p.vy *= -1;
        }

        // Mouse interaction
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius && dist > 0.1) {
          if (mouse.repel) {
            p.vx += (dx / dist) * CONFIG.REPEL_STRENGTH;
            p.vy += (dy / dist) * CONFIG.REPEL_STRENGTH;
          } else {
            p.vx -= dx / (dist * CONFIG.ATTRACTION_STRENGTH);
            p.vy -= dy / (dist * CONFIG.ATTRACTION_STRENGTH);
          }
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = CONFIG.PARTICLE_COLOR;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();


    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 bg-[#0d0d0d]"
    />
  );
}
