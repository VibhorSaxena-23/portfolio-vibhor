"use client";

import Link from 'next/link';
import { useCursorContext } from '../context/cursorcontext';
import { ReactNode, useState } from 'react';
import { motion } from 'framer-motion'; 

interface NavHoverLinkProps {
  href: string;
  isActive: boolean;
  children: ReactNode;
}

export default function NavHoverLink({ href, isActive, children }: NavHoverLinkProps) {
  const { setIsHovering } = useCursorContext();
  const [isHovered, setIsHovered] = useState(false); // track hover state

  return (
    <motion.div
      className="relative inline-block"
      onMouseEnter={() => {
        setIsHovering(true);
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovering(false);
        setIsHovered(false);
      }}
    >
      {/* === Hover Box Effect === */}
      {isHovered && (
  <motion.div
    className="absolute inset-0 z-0"
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.95 }}
    transition={{ type: "spring", stiffness: 300, damping: 30 }}
    style={{
      // Subtle glowing background with a bluish tint (aura)
      background: 'linear-gradient(135deg, rgba(0, 136, 255, 0.15), rgba(255, 255, 255, 0.05))',

      // Enhanced glowing aura box shadow (cool blue)
      boxShadow: `
        0 0 10px 2px rgba(0, 136, 255, 0.5), 
        0 0 20px 4px rgba(0, 136, 255, 0.3)
      `,

      borderRadius: '6px',
    }}
  />
)}


      {/* === The Link === */}
      <Link
        href={href}
        className={`relative z-10 block py-1 px-2 text-sm transition-colors duration-200 ${
          isActive 
            ? "text-white font-semibold" 
            : "text-gray-300 hover:text-white"
        }`}
        style={isActive ? { textShadow: '0 0 5px rgba(255, 255, 255, 0.7)' } : {}}
      >
        {children}
      </Link>

      {/* === Active Underline === */}
      {isActive && (
        <motion.div
          className="absolute left-0 right-0 h-[2px] rounded-full z-20"
          layoutId="activeUnderline"
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: '100%', opacity: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          style={{
            bottom: 0, 
            backgroundColor: '#0008ffff',
            boxShadow: '0 0 5px rgba(0, 255, 255, 0.8)',
            width: 'calc(100% - 8px)',
            marginLeft: '4px',
          }}
        />
      )}
    </motion.div>
  );
}
