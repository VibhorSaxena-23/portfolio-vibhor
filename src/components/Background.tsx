"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
};

// ========================================
// 🎨 CUSTOMIZATION PARAMETERS
// ========================================
const CONFIG = {
  // Particle settings
  PARTICLE_COUNT: 100,        // Number of particles (50-200 recommended)
  PARTICLE_SIZE: 3,           // Radius of each particle (2-5 recommended)
  PARTICLE_COLOR: "#ffffff",  // Color of particles
  
  // Velocity settings
  MIN_VELOCITY: -0.5,         // Minimum velocity (-1 to 0)
  MAX_VELOCITY: 0.5,          // Maximum velocity (0 to 1)
  VELOCITY_MULTIPLIER: 1.5,   // Overall speed multiplier (0.5-3 recommended)
  
  // Connection lines
  CONNECTION_DISTANCE: 120,   // Max distance to draw lines between particles
  LINE_COLOR: "255,255,255",  // RGB color for lines (no # needed)
  LINE_WIDTH: 1,              // Width of connection lines
  
  // Mouse interaction
  MOUSE_RADIUS: 120,          // Radius of mouse influence
  ATTRACTION_STRENGTH: 20,    // Higher = weaker attraction (10-50)
  REPEL_STRENGTH: 1,          // Repel force multiplier (0.5-2)
};
// ========================================

export default function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Resize canvas
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Mouse state
    const mouse = { 
      x: 0, 
      y: 0, 
      radius: CONFIG.MOUSE_RADIUS, 
      repel: false 
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseDown = () => {
      mouse.repel = true;
    };
    
    const handleMouseUp = () => {
      mouse.repel = false;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    // Particles
    const particles: Particle[] = [];

    for (let i = 0; i < CONFIG.PARTICLE_COUNT; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() * (CONFIG.MAX_VELOCITY - CONFIG.MIN_VELOCITY) + CONFIG.MIN_VELOCITY) * CONFIG.VELOCITY_MULTIPLIER,
        vy: (Math.random() * (CONFIG.MAX_VELOCITY - CONFIG.MIN_VELOCITY) + CONFIG.MIN_VELOCITY) * CONFIG.VELOCITY_MULTIPLIER,
        radius: CONFIG.PARTICLE_SIZE,
      });
    }

    let animationFrameId: number;

    function draw() {
      if (!canvas || !ctx) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw and move particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Bounce from edges
        if (p.x <= 0 || p.x >= canvas.width) p.vx *= -1;
        if (p.y <= 0 || p.y >= canvas.height) p.vy *= -1;

        // Mouse interaction
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius) {
          if (mouse.repel) {
            // Repel on click
            p.vx += (dx / dist) * CONFIG.REPEL_STRENGTH;
            p.vy += (dy / dist) * CONFIG.REPEL_STRENGTH;
          } else {
            // Attract to pointer
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

      // Draw connecting lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < CONFIG.CONNECTION_DISTANCE) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(${CONFIG.LINE_COLOR},${1 - dist / CONFIG.CONNECTION_DISTANCE})`;
            ctx.lineWidth = CONFIG.LINE_WIDTH;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    }

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