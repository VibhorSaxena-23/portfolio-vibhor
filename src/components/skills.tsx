"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Skills() {
  const fullText = "| Skills & Expertise |";
  const [displayText, setDisplayText] = useState("");
  const [key, setKey] = useState(0);

  useEffect(() => {
    // Reset animations when component mounts
    setKey(prev => prev + 1);
    
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const skillCategories = [
    {
      title: "Languages",
      icon: "{ }",
      color: "cyan",
      skills: ["C++", "Java", "Python", "JavaScript", "TypeScript"],
    },
    {
      title: "Backend & Databases",
      icon: "⚙",
      color: "green",
      skills: ["Node.js", "Express", "MySQL", "MongoDB", "REST APIs"],
    },
    {
      title: "Frontend & Design",
      icon: "🎨",
      color: "purple",
      skills: ["React", "Next.js", "Tailwind CSS", "UI/UX Design", "Framer Motion"],
    },
    {
      title: "Core CS",
      icon: "💻",
      color: "blue",
      skills: ["Data Structures", "Algorithms", "Operating Systems", "Computer Networks", "DBMS"],
    },
    {
      title: "Tools & Platforms",
      icon: "🛠",
      color: "orange",
      skills: ["Git", "Docker", "Cloud Computing", "Microservices", "Linux"],
    },
    {
      title: "Specializations",
      icon: "⭐",
      color: "yellow",
      skills: ["Competitive Programming", "Machine Learning", "Problem Solving", "System Design"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  const getColorClasses = (color: string) => {
    const colors: Record<string, { border: string; text: string; glow: string; bg: string }> = {
      cyan: {
        border: "border-cyan-500/30",
        text: "text-cyan-400",
        glow: "shadow-cyan-500/20",
        bg: "from-cyan-900/10 to-gray-900/50",
      },
      green: {
        border: "border-green-500/30",
        text: "text-green-400",
        glow: "shadow-green-500/20",
        bg: "from-green-900/10 to-gray-900/50",
      },
      purple: {
        border: "border-purple-500/30",
        text: "text-purple-400",
        glow: "shadow-purple-500/20",
        bg: "from-purple-900/10 to-gray-900/50",
      },
      blue: {
        border: "border-blue-500/30",
        text: "text-blue-400",
        glow: "shadow-blue-500/20",
        bg: "from-blue-900/10 to-gray-900/50",
      },
      orange: {
        border: "border-orange-500/30",
        text: "text-orange-400",
        glow: "shadow-orange-500/20",
        bg: "from-orange-900/10 to-gray-900/50",
      },
      yellow: {
        border: "border-yellow-500/30",
        text: "text-yellow-400",
        glow: "shadow-yellow-500/20",
        bg: "from-yellow-900/10 to-gray-900/50",
      },
    };
    return colors[color];
  };

  return (
    <section
      id="skills"
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

      <motion.p
        className="text-gray-300 text-center text-base sm:text-lg max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        A comprehensive overview of technologies, frameworks, and tools I&apos;ve mastered through
        projects, internships, and competitive programming.
      </motion.p>

      {/* Skills Grid - Removed viewport trigger, using key to reset */}
      <motion.div
        key={key}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {skillCategories.map((category, idx) => {
          const colorClass = getColorClasses(category.color);
          return (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              className={`p-6 rounded-lg bg-gradient-to-br ${colorClass.bg} border ${colorClass.border} shadow-xl ${colorClass.glow} hover:shadow-2xl transition-all duration-300`}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-gray-700">
                <span className="text-3xl">{category.icon}</span>
                <h3 className={`text-xl font-bold ${colorClass.text} tracking-wide`}>
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <ul className="space-y-2">
                {category.skills.map((skill, skillIdx) => (
                  <li
                    key={skillIdx}
                    className="flex items-center gap-2 text-gray-300"
                  >
                    <span className={`${colorClass.text} text-sm`}>▹</span>
                    <span className="text-sm">{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Bottom decorative divider */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="flex justify-center items-center gap-4 pt-8 pb-4"
      >
        <div className="h-px w-20 bg-gradient-to-r from-transparent to-cyan-500"></div>
        <span className="text-cyan-400 text-2xl">◆</span>
        <div className="h-px w-20 bg-gradient-to-l from-transparent to-cyan-500"></div>
      </motion.div>
    </section>
  );
}