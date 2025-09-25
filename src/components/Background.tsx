"use client";

import { useEffect, useRef, useState } from "react";

// Type for Vanta effect
type VantaEffect = {
  destroy: () => void;
};

export default function Background() {
  const vantaRef = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<VantaEffect | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && !vantaEffect && vantaRef.current) {
      // Load dynamically to avoid SSR issues
      const THREE = require("three");
      let BIRDS = require("vanta/dist/vanta.birds.min");

      // ✅ Normalize export (some builds put function in .default)
      BIRDS = BIRDS.default || BIRDS;

      const effect = BIRDS({
        el: vantaRef.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        backgroundColor: 0x0d0d0d, // dark background
        color1: 0xff9900,
        color2: 0xffffff,
        birdSize: 1.2,
        speedLimit: 4.0,
      });

      setVantaEffect(effect);
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return <div ref={vantaRef} className="fixed inset-0 -z-10" />;
}
