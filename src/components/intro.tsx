"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
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
    <main className="relative h-screen w-screen flex items-center justify-center overflow-hidden text-center">
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center gap-6 px-6 py-4 rounded-2xl 
                   bg-white/10 backdrop-blur-md border border-white/20 shadow-lg max-w-2xl w-[90%] md:w-auto"
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
          Hello, I'm Vibhor Saxena.
        </h1>

        <h2
          className="relative text-2xl md:text-4xl font-semibold text-cyan-300 inline-block"
          style={{
            perspective: "1000px",
            minHeight: "3rem",
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
                backfaceVisibility: "hidden",
                padding: "0.25rem 1rem",
                borderRadius: "0.5rem",
                background: "rgba(0, 136, 255, 0.15)",
                boxShadow: "0 0 15px rgba(0, 136, 255, 0.4)",
              }}
            >
              {currentTitle}
            </motion.span>
          </AnimatePresence>
        </h2>
      </motion.div>
    </main>
  );
}
