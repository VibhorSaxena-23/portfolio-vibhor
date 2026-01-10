'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

type Props = {
  text: string;
  speed?: number; // optional typing speed
};

export default function SectionHeading({ text, speed = 80 }: Props) {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(text.slice(0, i + 1));
      i++;
      if (i === text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <motion.h2
      className="
        text-center font-extrabold tracking-wider text-white
        text-2xl sm:text-4xl lg:text-5xl
        mb-10
      "
      initial={{ opacity: 0, y: -30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, type: 'spring' }}
    >
      <span
        className="
          inline-block
          px-4 sm:px-8 py-2 sm:py-3
          border-y-2 sm:border-y-4 border-cyan-500
          shadow-lg shadow-cyan-500/30
          whitespace-nowrap
        "
      >
        {/* Pipes ONLY on desktop */}
        <span className="hidden lg:inline">| </span>

        {displayText}

        <span className="hidden lg:inline"> |</span>

        {/* Blinking cursor */}
        <span className="ml-1 animate-pulse text-cyan-400">▌</span>
      </span>
    </motion.h2>
  );
}
