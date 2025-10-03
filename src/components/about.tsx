"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function About() {
  // Typing effect for heading
  const fullText = "| About Me |";
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

  // Animation variants for content reveal
  const fadeInUp = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  return (
    <section
      id="about"
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

      {/* Content Wrapper */}
      <motion.div
        key={key}
        className="flex flex-col gap-8 text-gray-300 text-base sm:text-lg leading-relaxed"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.25 }}
      >
        {/* Intro */}
        <motion.div 
          variants={fadeInUp}
          className="p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-cyan-500/20 shadow-xl hover:-translate-y-1 transition-transform duration-200"
        >
          <p>
            Hey, I am <span className="font-bold text-cyan-400">Vibhor Saxena</span>!
            <br />
            I am a <span className="font-semibold">B.Tech Computer Science</span>{" "}
            undergraduate at{" "}
            <span className="font-bold text-cyan-400">JK Lakshmipat University</span>, Jaipur, India.  
            I was also selected as an exchange student at{" "}
            <span className="font-bold text-cyan-300">IIT Jodhpur</span> and{" "}
            <span className="font-bold text-cyan-300">IIT Kanpur</span>.
          </p>
        </motion.div>

        {/* Experience */}
        <motion.div 
          variants={fadeInUp}
          className="p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-cyan-500/20 shadow-xl hover:-translate-y-1 transition-transform duration-200"
        >
          <p>
            I have interned at{" "}
            <span className="font-bold text-cyan-400">ITJOBXS</span> as an{" "}
            <code className="px-2 py-1 bg-gray-800 text-green-400 rounded shadow-md">
              SDE Intern
            </code>
            ,{" "}
            <span className="font-bold text-cyan-400">SEMS Welfare Foundation</span>{" "}
            as a{" "}
            <code className="px-2 py-1 bg-gray-800 text-green-400 rounded shadow-md">
              UI/UX & Web Dev Intern
            </code>
            , and{" "}
            <span className="font-bold text-cyan-400">AddLens Technologies</span> as a{" "}
            <code className="px-2 py-1 bg-gray-800 text-green-400 rounded shadow-md">
              ML Intern
            </code>
            .  
            I worked on web apps, backend validation, ML models, and dashboards for
            data-driven decisions.
          </p>
        </motion.div>

        {/* Passion */}
        <motion.div 
          variants={fadeInUp}
          className="p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-cyan-500/20 shadow-xl hover:-translate-y-1 transition-transform duration-200"
        >
          <p>
            I love building <span className="font-bold text-white">scalable applications</span>{" "}
            and tackling{" "}
            <code className="px-2 py-1 bg-gray-800 text-yellow-400 rounded shadow-md">
              algorithmic challenges
            </code>
            .  
            In Competitive Programming, I'm an{" "}
            <span className="font-semibold text-cyan-400">Expert on Codeforces (1600+)</span>  
            and a <span className="font-semibold text-cyan-400">4★ Coder on CodeChef (Global Rank 90)</span>.
          </p>
        </motion.div>

        {/* Responsibilities */}
        <motion.div 
          variants={fadeInUp}
          className="p-6 rounded-2xl bg-gradient-to-br from-purple-900/30 to-gray-800/30 border border-purple-500/20 shadow-xl hover:-translate-y-1 transition-transform duration-200"
        >
          <h3 className="text-2xl sm:text-3xl font-bold uppercase tracking-widest mb-4 text-cyan-300 flex items-center gap-2">
            <span className="text-cyan-400">►</span> Responsibilities
          </h3>
          <p className="leading-relaxed">
            • Worked as a{" "}
            <code className="px-2 py-1 bg-gray-800 text-purple-400 rounded shadow-md">
              problem setter
            </code>{" "}
            for multiple competitions with{" "}
            <span className="font-bold text-white">200+ participants</span>.
            <br />
            • Implemented backend logic, ML models, and dashboards during my
            internships to drive data-driven decision-making.
          </p>
        </motion.div>

        {/* Coursework */}
        <motion.div 
          variants={fadeInUp}
          className="p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-cyan-500/20 shadow-xl hover:-translate-y-1 transition-transform duration-200"
        >
          <h3 className="text-2xl sm:text-3xl font-bold uppercase tracking-widest mb-4 text-cyan-300 flex items-center gap-2">
            <span className="text-cyan-400">►</span> Computer Science Coursework
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-gray-300">
            <li className="flex items-start gap-2">
              <span className="text-cyan-400 mt-1">•</span>
              <span>Computer Networks</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400 mt-1">•</span>
              <span>Data Structures</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400 mt-1">•</span>
              <span>Algorithms</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400 mt-1">•</span>
              <span>Database Management Systems</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400 mt-1">•</span>
              <span>Operating Systems</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400 mt-1">•</span>
              <span>Object Oriented Programming</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400 mt-1">•</span>
              <span>Software Engineering</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400 mt-1">•</span>
              <span>Machine Learning & Pattern Recognition</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400 mt-1">•</span>
              <span>Big Data Analysis</span>
            </li>
          </ul>
        </motion.div>

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