'use client';

import { motion } from 'framer-motion';
import SectionHeading from '@/components/SectionHeading';

export default function Contact() {
  const contacts = [
    {
      type: 'Email',
      value: 'vibhorsaxena000@gmail.com',
      link: 'mailto:vibhorsaxena000@gmail.com',
      color: 'cyan',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      type: 'Phone',
      value: '+91-7023492881',
      link: 'tel:+917023492881',
      color: 'green',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
    },
  ];

  const socials = [
    {
      name: 'LinkedIn',
      username: 'vibhor-saxena',
      link: 'https://www.linkedin.com/in/vibhor-saxena-96196b256/',
      color: 'blue',
      icon: (
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
        </svg>
      ),
    },
    {
      name: 'GitHub',
      username: 'VibhorSaxena-23',
      link: 'https://github.com/VibhorSaxena-23',
      color: 'purple',
      icon: (
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          />
        </svg>
      ),
    },
    {
      name: 'Codeforces',
      username: 'vibhorsaxena000',
      link: 'https://codeforces.com/profile/vibhorsaxena000',
      color: 'orange',
      icon: <span className="text-xl font-bold">CF</span>,
    },
    {
      name: 'CodeChef',
      username: 'chaosconqueror',
      link: 'https://www.codechef.com/users/chaosconqueror',
      color: 'yellow',
      icon: <span className="text-xl font-bold">CC</span>,
    },
    {
      name: 'LeetCode',
      username: 'VibhorSaxena-23',
      link: 'https://leetcode.com/u/VibhorSaxena-23/',
      color: 'cyan',
      icon: <span className="text-xl font-bold">LC</span>,
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 40, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: 'easeOut' as const },
    },
  };

  const colorMap: Record<string, string> = {
    cyan: 'border-cyan-500/40 text-cyan-400 hover:shadow-cyan-500/20',
    green: 'border-green-500/40 text-green-400 hover:shadow-green-500/20',
    blue: 'border-blue-500/40 text-blue-400 hover:shadow-blue-500/20',
    purple: 'border-purple-500/40 text-purple-400 hover:shadow-purple-500/20',
    orange: 'border-orange-500/40 text-orange-400 hover:shadow-orange-500/20',
    yellow: 'border-yellow-500/40 text-yellow-400 hover:shadow-yellow-500/20',
  };

  const cardBase =
    'p-6 rounded-xl bg-gray-900/50 border shadow-xl backdrop-blur-sm ' +
    'hover:-translate-y-1 transition-all duration-300';

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col px-6 sm:px-20 max-w-5xl mx-auto space-y-10 font-mono mb-20"
    >
      <SectionHeading text="Get In Touch" />

      <motion.div
        className="flex flex-col gap-8"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.15 }}
      >
        <motion.p
          variants={fadeInUp}
          className="text-gray-300 text-center text-base sm:text-lg max-w-2xl mx-auto"
        >
          Feel free to reach out for collaborations, opportunities, or just a friendly chat!
        </motion.p>

        <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contacts.map((c, i) => (
            <a key={i} href={c.link} className={`${cardBase} ${colorMap[c.color]}`}>
              <div className="flex items-center gap-4">
                {c.icon}
                <div>
                  <p className="text-gray-400 text-sm">{c.type}</p>
                  <p className="font-semibold break-all">{c.value}</p>
                </div>
              </div>
            </a>
          ))}
        </motion.div>

        <motion.div variants={fadeInUp}>
          <h3 className="text-2xl font-bold text-cyan-300 mb-6 text-center">
            ► Connect With Me
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {socials.map((s, i) => (
              <a
                key={i}
                href={s.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`${cardBase} ${colorMap[s.color]} flex flex-col items-center text-center`}
              >
                <div className="mb-3">{s.icon}</div>
                <p className="text-white font-semibold text-sm">{s.name}</p>
                <p className="text-xs break-all">{s.username}</p>
              </a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
