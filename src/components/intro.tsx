"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Dynamic rotating titles
const titles = [
  "Software Developer",
  "Competitive Coder",
  "UI/UX Designer",
  "AI Enthusiast",
];

const PAUSE_TIME = 2000;
const FLIP_DURATION = 0.8;

export default function Intro() {
  const [titleIndex, setTitleIndex] = useState(0);

  // Cycle the titles
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, PAUSE_TIME + FLIP_DURATION * 1000);

    return () => clearInterval(intervalId);
  }, []);

  // 🔒 Disable page scroll while this component is active
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  const currentTitle = titles[titleIndex];

  const flipVariants = {
    initial: {
      rotateX: 90,
      opacity: 0,
      scale: 0.9,
      transition: { duration: FLIP_DURATION / 2 },
    },
    animate: {
      rotateX: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: FLIP_DURATION / 2,
        delay: FLIP_DURATION / 2,
      },
    },
    exit: {
      rotateX: -90,
      opacity: 0,
      scale: 0.9,
      transition: { duration: FLIP_DURATION / 2 },
    },
  };

  return (
    <main
  className="relative h-screen w-screen overflow-hidden flex flex-col justify-start items-center text-center"
  style={{
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/70 backdrop-blur-sm z-0" />

  {/* Content wrapper */}
  <div className="relative z-10 px-4 pt-65 -translate-y-6">
    <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
      Hello, I'm Vibhor Saxena.
    </h1>

    <h2
      className="relative text-2xl md:text-4xl font-semibold text-cyan-300 mt-4 inline-block"
      style={{
        perspective: '1000px',
        minHeight: '3rem',
      }}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={currentTitle}
          className="inline-block origin-center"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={flipVariants}
          style={{
            backfaceVisibility: 'hidden',
            padding: '0.25rem 1rem',
            borderRadius: '0.5rem',
            background: 'rgba(0, 136, 255, 0.1)',
            boxShadow: '0 0 10px rgba(0, 136, 255, 0.4)',
          }}
        >
          {currentTitle}
        </motion.span>
      </AnimatePresence>
    </h2>
  </div>
</main>

  );
}
