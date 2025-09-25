'use client';

import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useCursorContext } from '../context/cursorcontext';

const CURSOR_SIZE = 30;
const SPRING_CONFIG = { damping: 20, stiffness: 300, mass: 0.5 };

export default function CustomCursor() {
  const { isHovering } = useCursorContext();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const cursorX = useSpring(mouseX, SPRING_CONFIG);
  const cursorY = useSpring(mouseY, SPRING_CONFIG);

  const ghostX = useSpring(mouseX, { damping: 30, stiffness: 120 });
  const ghostY = useSpring(mouseY, { damping: 30, stiffness: 120 });

  const clickPulse = useMotionValue(0);
  const clickScale = useTransform(clickPulse, v => 1 + v * 0.6); // ✅ FIXED

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - CURSOR_SIZE / 2);
      mouseY.set(e.clientY - CURSOR_SIZE / 2);
    };

    const handleClick = () => {
      clickPulse.set(1);
      setTimeout(() => clickPulse.set(0), 150);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <>
      {/* Aura Trail */}
      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none rounded-full blur-md"
        style={{
          translateX: ghostX,
          translateY: ghostY,
          width: CURSOR_SIZE,
          height: CURSOR_SIZE,
          backgroundColor: 'rgba(0, 140, 255, 0.2)',
          filter: 'blur(12px)',
        }}
      />

      {/* Main Cursor */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none rounded-full"
        animate={{
          opacity: isHovering ? 0 : 1,
        }}
        style={{
          translateX: cursorX,
          translateY: cursorY,
          scale: isHovering ? 0.5 : clickScale, // ✅ Use animated scale
          width: CURSOR_SIZE,
          height: CURSOR_SIZE,
          backgroundColor: 'rgba(5, 142, 255, 0.91)',
          boxShadow: '0 0 8px 4px rgba(0, 140, 255, 0.7)',
          mixBlendMode: 'difference',
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 25 }}
      />
    </>
  );
}
