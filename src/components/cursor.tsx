'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useCursorContext } from '../context/cursorcontext';

const CURSOR_SIZE = 30;
const DESKTOP_WIDTH = 1024;

export default function CustomCursor() {
  const { isHovering } = useCursorContext();
  const [isDesktop, setIsDesktop] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const cursorX = useSpring(mouseX, { stiffness: 500, damping: 30 });
  const cursorY = useSpring(mouseY, { stiffness: 500, damping: 30 });

  const ghostX = useSpring(mouseX, { stiffness: 120, damping: 35 });
  const ghostY = useSpring(mouseY, { stiffness: 120, damping: 35 });

  // Click pulse
  const clickPulse = useMotionValue(0);
  const clickScale = useTransform(clickPulse, v => 1 + v * 0.6);

  /* ----------------------------------
     Desktop-only check (screen width)
  ---------------------------------- */
  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= DESKTOP_WIDTH);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  /* ----------------------------------
     Mouse tracking (desktop only)
  ---------------------------------- */
  useEffect(() => {
    if (!isDesktop) return;

    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX - CURSOR_SIZE / 2);
      mouseY.set(e.clientY - CURSOR_SIZE / 2);
    };

    const click = () => {
      clickPulse.set(1);
      setTimeout(() => clickPulse.set(0), 150);
    };

    document.addEventListener('mousemove', move);
    document.addEventListener('click', click);

    return () => {
      document.removeEventListener('mousemove', move);
      document.removeEventListener('click', click);
    };
  }, [isDesktop, mouseX, mouseY, clickPulse]);

  // 🚫 Mobile: no cursor
  if (!isDesktop) return null;

  return (
    <>
      {/* Aura / Ghost trail */}
      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none rounded-full"
        style={{
          translateX: ghostX,
          translateY: ghostY,
          width: CURSOR_SIZE,
          height: CURSOR_SIZE,
          backgroundColor: 'rgba(0, 140, 255, 0.25)',
          filter: 'blur(14px)',
        }}
      />

      {/* Main Cursor */}
<motion.div
  className="fixed top-0 left-0 z-[9999] pointer-events-none rounded-full"
  animate={{
    scale: isHovering ? 0.45 : 1,
    opacity: isHovering ? 0.6 : 1,
  }}
  style={{
    translateX: cursorX,
    translateY: cursorY,
    scale: clickScale,
    width: CURSOR_SIZE,
    height: CURSOR_SIZE,
    backgroundColor: 'rgba(5, 142, 255, 0.9)',
    boxShadow: '0 0 12px 5px rgba(0, 140, 255, 0.85)',
    mixBlendMode: 'difference', // ✅ ORIGINAL TRANSPARENCY EFFECT
  }}
  transition={{
    type: 'spring',
    stiffness: 400,
    damping: 25,
  }}
/>

    </>
  );
}
