"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Contact() {
  const fullText = "| Get In Touch |";
  const [displayText, setDisplayText] = useState("");
  const [key, setKey] = useState(0);

  useEffect(() => {
    setKey((prev) => prev + 1);
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const contacts = [
    {
      type: "Email",
      value: "vibhorsaxena000@gmail.com",
      link: "mailto:vibhorsaxena000@gmail.com",
      color: "cyan",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      type: "Phone",
      value: "+91-7023492881",
      link: "tel:+917023492881",
      color: "green",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
    },
  ];

  const socials = [
    {
      name: "LinkedIn",
      username: "vibhor-saxena",
      link: "https://www.linkedin.com/in/vibhor-saxena-96196b256/",
      color: "blue",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
        </svg>
      ),
    },
    {
      name: "GitHub",
      username: "VibhorSaxena-23",
      link: "https://github.com/VibhorSaxena-23",
      color: "purple",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      name: "Codeforces",
      username: "vibhorsaxena000",
      link: "https://codeforces.com/profile/vibhorsaxena000",
      color: "orange",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4.5 7.5C5.328 7.5 6 8.172 6 9v10.5c0 .828-.672 1.5-1.5 1.5h-3C.672 21 0 20.328 0 19.5V9c0-.828.672-1.5 1.5-1.5h3zm9-4.5c.828 0 1.5.672 1.5 1.5v15c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5v-15c0-.828.672-1.5 1.5-1.5h3zm9 7.5c.828 0 1.5.672 1.5 1.5v7.5c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5V12c0-.828.672-1.5 1.5-1.5h3z" />
        </svg>
      ),
    },
    {
      name: "CodeChef",
      username: "chaosconqueror",
      link: "https://www.codechef.com/users/chaosconqueror",
      color: "yellow",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0z" />
        </svg>
      ),
    },
    {
      name: "LeetCode",
      username: "VibhorSaxena-23",
      link: "https://leetcode.com/u/VibhorSaxena-23/",
      color: "cyan",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226 3.262 10.352a5.266 5.266 0 0 0-1.209 2.104 5.527 5.527 0 0 0 .062 2.362 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392a1.38 1.38 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-4.276-4.193a2.68 2.68 0 0 1-.948-2.263 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831a1.384 1.384 0 0 0 1.733-2.15l-3.5-2.831a5.26 5.26 0 0 0-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0z" />
        </svg>
      ),
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 40, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  const getColorClasses = (color: string) => {
    const colors: Record<string, { border: string; text: string }> = {
      cyan: { border: "border-cyan-500/40", text: "text-cyan-400" },
      green: { border: "border-green-500/40", text: "text-green-400" },
      blue: { border: "border-blue-500/40", text: "text-blue-400" },
      purple: { border: "border-purple-500/40", text: "text-purple-400" },
      orange: { border: "border-orange-500/40", text: "text-orange-400" },
      yellow: { border: "border-yellow-500/40", text: "text-yellow-400" },
    };
    return colors[color];
  };

  const cardBase =
    "p-6 rounded-xl bg-gray-900/50 border shadow-xl backdrop-blur-sm " +
    "hover:-translate-y-1 transition-all duration-300";

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col px-6 sm:px-20 max-w-5xl mx-auto space-y-10 font-mono py-0 mb-20"
    >
      {/* Typing Heading */}
      <motion.h2
        className="relative text-4xl sm:text-5xl font-extrabold text-center text-white tracking-wider mb-8"
        initial={{ opacity: 0, y: -50, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, type: "spring" }}
      >
        <span className="px-8 py-3 inline-block border-y-4 border-cyan-500 shadow-lg shadow-cyan-500/30">
          {displayText}
          <span className="animate-pulse text-cyan-400">▌</span>
        </span>
      </motion.h2>

      <motion.div
        key={key}
        className="flex flex-col gap-8"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.15 }}
      >
        {/* Intro */}
        <motion.p
          variants={fadeInUp}
          className="text-gray-300 text-center text-base sm:text-lg max-w-2xl mx-auto"
        >
          Feel free to reach out for collaborations, opportunities, or just a
          friendly chat!
        </motion.p>

        {/* Contact Cards */}
        <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contacts.map((contact, idx) => {
            const colorClass = getColorClasses(contact.color);
            return (
              <a
                key={idx}
                href={contact.link}
                className={`${cardBase} ${colorClass.border}`}
              >
                <div className="flex items-center gap-4">
                  <div className={`${colorClass.text}`}>
                    {contact.icon}
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{contact.type}</p>
                    <p className={`${colorClass.text} font-semibold break-all`}>
                      {contact.value}
                    </p>
                  </div>
                </div>
              </a>
            );
          })}
        </motion.div>

        {/* Socials */}
        <motion.div variants={fadeInUp}>
          <h3 className="text-2xl font-bold text-cyan-300 mb-6 text-center">
            ► Connect With Me
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {socials.map((social, idx) => {
              const colorClass = getColorClasses(social.color);
              return (
                <a
                  key={idx}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${cardBase} ${colorClass.border} flex flex-col items-center text-center`}
                >
                  <div className={`${colorClass.text} mb-3`}>
                    {social.icon}
                  </div>
                  <p className="text-white font-semibold text-sm">
                    {social.name}
                  </p>
                  <p className={`${colorClass.text} text-xs break-all`}>
                    {social.username}
                  </p>
                </a>
              );
            })}
          </div>
        </motion.div>

        {/* Footer */}
        <motion.footer
          variants={fadeInUp}
          className="text-center text-sm text-gray-500 mt-10 pt-8 border-t border-gray-800"
        >
          <p className="mb-2">© {new Date().getFullYear()} Vibhor Saxena</p>
          <p className="text-xs text-gray-600">
            Built with Next.js, TypeScript & Tailwind CSS
          </p>
        </motion.footer>
      </motion.div>
    </section>
  );
}
