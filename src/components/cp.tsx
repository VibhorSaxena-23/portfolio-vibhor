"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function CompetitiveProgramming() {
  const fullText = "|Competitive Programming|";
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

  const achievements = [
    {
      platform: "Codeforces",
      badge: "Expert",
      detail: "1600+ rating with consistent performance in Div. 2 contests",
      color: "blue",
      icon: "🏆",
    },
    {
      platform: "CodeChef",
      badge: "4★ Rated",
      detail: "Global Rank 90 in long challenges",
      color: "orange",
      icon: "⭐",
    },
    {
      platform: "Meta Hacker Cup",
      badge: "Qualified",
      detail: "Qualified multiple online rounds in coding challenges",
      color: "cyan",
      icon: "💻",
    },
    {
      platform: "Capsule Vision Challenge 2024",
      badge: "Global Rank 7",
      detail: "95% accuracy in video endoscopy classification",
      color: "purple",
      icon: "🎯",
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
      blue: { border: "border-blue-500/30", text: "text-blue-400" },
      orange: { border: "border-orange-500/30", text: "text-orange-400" },
      cyan: { border: "border-cyan-500/30", text: "text-cyan-400" },
      purple: { border: "border-purple-500/30", text: "text-purple-400" },
      green: { border: "border-green-500/30", text: "text-green-400" },
    };
    return colors[color];
  };

  // 🔹 SAME CARD FEEL AS EXPERIENCE / ABOUT / SKILLS
  const cardBase =
    "p-6 rounded-lg bg-gray-900/50 border shadow-xl " +
    "backdrop-blur-sm hover:-translate-y-1 transition-all duration-300";

  return (
    <section
      id="competitive-programming"
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
        transition={{ staggerChildren: 0.2 }}
      >
        {/* Intro */}
        <motion.p
          variants={fadeInUp}
          className="text-gray-300 text-center text-base sm:text-lg max-w-3xl mx-auto leading-relaxed"
        >
          I am passionate about solving algorithmic challenges and actively
          participate in various competitive programming platforms. Over the
          years, I&apos;ve improved my problem-solving skills and achieved notable
          rankings.
        </motion.p>

        {/* C++ Badge */}
        <motion.div variants={fadeInUp} className="flex justify-center">
          <div className="px-6 py-3 rounded-full bg-gray-900/60 backdrop-blur-sm border border-cyan-500/30 shadow-lg">
            <span className="text-cyan-300 font-semibold text-sm sm:text-base">
              Primary Language:{" "}
              <span className="text-white font-bold">C++</span>
            </span>
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          variants={fadeInUp}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {achievements.map((achievement, idx) => {
            const colorClass = getColorClasses(achievement.color);
            return (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.03 }}
                className={`${cardBase} ${colorClass.border}`}
              >
                <div className="flex items-start gap-4">
                  <span className="text-4xl">{achievement.icon}</span>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-1">
                      {achievement.platform}
                    </h3>
                    <div
                      className={`inline-block px-3 py-1 rounded-full ${colorClass.text} bg-gray-800/60 text-sm font-semibold mb-2`}
                    >
                      {achievement.badge}
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {achievement.detail}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Platform Profiles */}
        <motion.div variants={fadeInUp} className={`${cardBase} border-cyan-500/20`}>
          <h3 className="text-xl font-bold text-cyan-300 mb-4">
            ► Platform Profiles
          </h3>
          <div className="space-y-3">
            {[
              {
                name: "Codeforces",
                color: "text-blue-400",
                link: "https://codeforces.com/profile/vibhorsaxena000",
                label: "vibhorsaxena000",
              },
              {
                name: "CodeChef",
                color: "text-orange-400",
                link: "https://www.codechef.com/users/chaosconqueror",
                label: "chaosconqueror",
              },
              {
                name: "LeetCode",
                color: "text-green-400",
                link: "https://leetcode.com/u/VibhorSaxena-23/",
                label: "VibhorSaxena-23",
              },
            ].map((p) => (
              <div key={p.name} className="flex flex-wrap gap-3 items-center">
                <span className="text-gray-400">{p.name}:</span>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-3 py-1 bg-gray-800 rounded font-semibold text-sm ${p.color} hover:scale-105 transition`}
                >
                  {p.label} →
                </a>
              </div>
            ))}
          </div>
        </motion.div>

        {/* GitHub Repo */}
        <motion.div variants={fadeInUp} className={`${cardBase} border-green-500/30`}>
          <h3 className="text-xl font-bold text-green-300 mb-3">
            ► Problem Collection
          </h3>
          <p className="text-gray-300 mb-4 text-sm sm:text-base">
            I curate high quality competitive programming problems organized by
            topics and difficulty levels for reference and practice.
          </p>
          <a
            href="https://github.com/VibhorSaxena-23/DSA_Topic_wise_problems"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-green-600/20 hover:bg-green-600/30 border border-green-500/40 rounded-lg text-green-300 font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
          >
            📂 View Problem Collection →
          </a>
        </motion.div>

        {/* Quote */}
        <motion.div
          variants={fadeInUp}
          className={`${cardBase} border-gray-700/50 text-center`}
        >
          <p className="text-gray-300 italic mb-4">
            “I stopped worrying about competition in contemporary art. It feels a
            little bit more pure.”
          </p>
          <footer className="text-cyan-400 font-semibold">
            — Takashi Murakami
          </footer>
        </motion.div>

        {/* Divider */}
        <motion.div
          variants={fadeInUp}
          className="flex justify-center items-center gap-4 pt-8 pb-4"
        >
          <div className="h-px w-20 bg-gradient-to-r from-transparent to-cyan-500" />
          <span className="text-cyan-400 text-2xl">◆</span>
          <div className="h-px w-20 bg-gradient-to-l from-transparent to-cyan-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}
