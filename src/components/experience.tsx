"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Experience() {
  const fullText = "|Past Work Experience|";
  const [displayText, setDisplayText] = useState("");
  const [key, setKey] = useState(0);

  useEffect(() => {
    setKey(prev => prev + 1);
    
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const experiences = [
    {
      company: "ITJOBXS",
      logo: "💼",
      role: "Software Engineer Intern",
      location: "Remote",
      duration: "July 2025 – Present",
      color: "cyan",
      description: [
        "Designed and developed a fully responsive web page for multiple company interview experiences",
        "Enhanced backend user registration flow by designing validation logic in PHP & MySQL to prevent fake bot accounts, reducing spam registrations",
        "Proposed and implemented solutions like temporary cleanup queries, domain whitelisting with hashmaps, and Google reCAPTCHA integration",
        "Improved system reliability by debugging a critical issue causing rapid database growth, ensuring genuine user registrations",
      ],
    },
    {
      company: "SEMS Welfare Foundation",
      logo: "🌐",
      role: "UI/UX & Web Development Intern",
      location: "Remote",
      duration: "May 2024 – July 2024",
      color: "purple",
      description: [
        "Optimized UI/UX and developed web pages using WordPress for improved performance",
        "Built a mobile app with React Native to enhance user engagement and accessibility",
        "Integrated APIs to boost app functionality and improve user experience",
      ],
    },
    {
      company: "AddLens Technologies",
      logo: "🤖",
      role: "Machine Learning Intern",
      location: "Remote",
      duration: "May 2024 – July 2024",
      color: "green",
      description: [
        "Contributed to OrdaLane, a mobile app enabling users to explore and shop online from nearby businesses with competitive pricing and quick delivery",
        "Implemented machine learning models for personalized product recommendations and demand forecasting",
        "Designed dashboards and reports to visualize shopping trends and customer behavior for data-driven decisions",
      ],
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  const getColorClasses = (color: string) => {
    const colors: Record<string, { border: string; text: string; bg: string; shadow: string }> = {
      cyan: {
        border: "border-cyan-500/40",
        text: "text-cyan-400",
        bg: "from-cyan-900/20 to-gray-900/60",
        shadow: "shadow-cyan-500/10",
      },
      purple: {
        border: "border-purple-500/40",
        text: "text-purple-400",
        bg: "from-purple-900/20 to-gray-900/60",
        shadow: "shadow-purple-500/10",
      },
      green: {
        border: "border-green-500/40",
        text: "text-green-400",
        bg: "from-green-900/20 to-gray-900/60",
        shadow: "shadow-green-500/10",
      },
    };
    return colors[color];
  };

  return (
    <section
      id="experience"
      className="min-h-screen flex flex-col px-6 sm:px-20 max-w-6xl mx-auto space-y-10 font-mono py-0 mb-20"
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
        transition={{ staggerChildren: 0.2 }}
      >
        {/* Timeline Container with Overlapping Cards */}
        <div className="relative">
          {experiences.map((exp, idx) => {
            const colorClass = getColorClasses(exp.color);
            const isEven = idx % 2 === 0;
            
            return (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="relative mb-16 last:mb-0"
                style={{
                  marginLeft: isEven ? '0' : 'auto',
                  marginRight: isEven ? 'auto' : '0',
                  maxWidth: '100%',
                }}
              >
                {/* Company Card */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                  className={`relative p-8 rounded-2xl bg-gradient-to-br ${colorClass.bg} border-2 ${colorClass.border} ${colorClass.shadow} shadow-2xl backdrop-blur-sm overflow-hidden`}
                  style={{
                    transform: `translateX(${isEven ? '0' : '0'})`,
                  }}
                >
                  {/* Decorative corner accent */}
                  <div className={`absolute top-0 right-0 w-32 h-32 ${colorClass.text} opacity-5`}>
                    <div className="absolute top-0 right-0 w-full h-full" style={{
                      background: `radial-gradient(circle at top right, currentColor 0%, transparent 70%)`
                    }}></div>
                  </div>

                  {/* Company Header */}
                  <div className="relative z-10 flex items-start gap-4 mb-6 pb-6 border-b border-gray-700/50">
                    <div className="text-5xl">{exp.logo}</div>
                    <div className="flex-1">
                      <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 tracking-wide">
                        {exp.company}
                      </h3>
                      <div className={`inline-block px-4 py-2 rounded-full ${colorClass.text} bg-gray-800/70 text-sm sm:text-base font-semibold mb-2 border border-current/20`}>
                        {exp.role}
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-gray-400 text-sm mt-2">
                        <span className="flex items-center gap-2">
                          <span className={colorClass.text}>📍</span>
                          {exp.location}
                        </span>
                        <span className="hidden sm:block text-gray-600">|</span>
                        <span className="flex items-center gap-2">
                          <span className={colorClass.text}>📅</span>
                          {exp.duration}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Experience Details */}
                  <div className="relative z-10 space-y-3">
                    {exp.description.map((point, pointIdx) => (
                      <div key={pointIdx} className="flex items-start gap-3 group">
                        <span className={`${colorClass.text} mt-1 text-sm group-hover:scale-125 transition-transform duration-200`}>
                          ▹
                        </span>
                        <p className="text-gray-300 text-sm sm:text-base leading-relaxed flex-1">
                          {point}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Card number badge */}
                  <div className={`absolute bottom-4 right-4 w-12 h-12 rounded-full ${colorClass.text} bg-gray-800/50 border border-current/30 flex items-center justify-center font-bold text-xl`}>
                    {idx + 1}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom decorative divider */}
        <motion.div
          variants={fadeInUp}
          className="flex justify-center items-center gap-4 pt-8 pb-4"
        >
          <div className="h-px w-20 bg-gradient-to-r from-transparent to-cyan-500"></div>
          <span className="text-cyan-400 text-2xl">◆</span>
          <div className="h-px w-20 bg-gradient-to-l from-transparent to-cyan-500"></div>
        </motion.div>
      </motion.div>
    </section>
  );
}