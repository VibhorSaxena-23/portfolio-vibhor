// src/app/components/Navbar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react"; 
import NavHoverLink from "./NavHoverLink";
import NavSeparatorLink from "./navsep"; // <-- NEW IMPORT

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/", label: "Intro" },
    { href: "/about", label: "About me" },
    { href: "/skills", label: "Skills" },
    { href: "/cp", label: "Competitive programming" },
    { href: "/experience", label: "Experience" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    // Navbar is now transparent black with subtle blur to match modern dark themes
    <nav className="fixed top-0 left-0 w-full z-50 
                    backdrop-blur-sm bg-black/50 border-b border-gray-900">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Name - Simple and white */}
        <Link href="/" className="text-xl font-medium text-white hover:text-gray-400 transition-colors">
          Vibhor Saxena
        </Link>

        {/* Desktop Links - Using flex and the separator component */}
        <div className="hidden md:flex items-center">
          {links.map((link, index) => (
            <NavSeparatorLink 
              key={link.href}
              isLast={index === links.length - 1} // Check if last link
            >
              <NavHoverLink
                href={link.href}
                isActive={pathname === link.href} 
              >
                {link.label}
              </NavHoverLink>
            </NavSeparatorLink>
          ))}
        </div>

        {/* Mobile Menu Button - White icon */}
        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="text-white hover:text-gray-400 focus:outline-none"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Black background, white text */}
      {open && (
        <div className="md:hidden bg-black shadow-lg">
          <div className="flex flex-col items-center space-y-4 py-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`text-gray-300 hover:text-white transition-colors ${
                  pathname === link.href ? "text-white font-semibold" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}