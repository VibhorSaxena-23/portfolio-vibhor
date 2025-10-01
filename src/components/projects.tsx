"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Projects() {
  const fullText = "| Featured Projects |";
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

  const projects = [
    {
      title: "OlympIQ",
      category: "Data Analytics",
      description: "Analytics platform analyzing socio-economic drivers of Olympic performance using React, D3.js, FastAPI, and Machine Learning.",
      tech: ["React", "D3.js", "FastAPI", "Machine Learning", "Data Visualization"],
      color: "cyan",
      github: "https://github.com/VibhorSaxena-23/OLYMPIQ-Visual-Analytics",
    },
    {
      title: "Khana Khoj",
      category: "Mobile Development",
      description: "A recipe recommendation app developed using React Native + TensorFlow, providing healthy and personalized meal suggestions.",
      tech: ["React Native", "TensorFlow", "Machine Learning", "Mobile App"],
      color: "purple",
      github: "https://github.com/VibhorSaxena-23/Khana-Khoj",
    },
    {
      title: "Legal Document Query Assistant",
      category: "Generative AI",
      description: "Built with Streamlit, this tool allows you to upload legal PDFs and query them using natural language. Works completely offline using sentence-transformers for local embeddings.",
      tech: ["Python", "Streamlit", "Sentence Transformers", "NLP", "PDF Processing"],
      color: "green",
      github: "https://github.com/shreyansh-1911/Generative_AI-Project",
    },
    {
      title: "Facial Recognition Model",
      category: "Machine Learning",
      description: "Built CNN, LBP, and HOG models; improved with KNN, SVM, and ANN on the LFW dataset for better accuracy in face recognition.",
      tech: ["CNN", "LBP", "HOG", "KNN", "SVM", "ANN", "Python"],
      color: "orange",
      github: null,
    },
    {
      title: "Golang UDP Socket",
      category: "Distributed Systems",
      description: "Distributed Math Series Computation using Go's UDP socket programming for efficient inter-process communication and parallel computation.",
      tech: ["Golang", "UDP", "Networking", "Distributed Computing", "Concurrency"],
      color: "blue",
      github: "https://github.com/VibhorSaxena-23/Golang-UDP-socket",
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
    const colors: Record<string, { border: string; text: string; bg: string; accent: string }> = {
      cyan: {
        border: "border-cyan-500/40",
        text: "text-cyan-400",
        bg: "from-cyan-900/20 to-gray-900/60",
        accent: "bg-cyan-500/10 border-cyan-500/30",
      },
      purple: {
        border: "border-purple-500/40",
        text: "text-purple-400",
        bg: "from-purple-900/20 to-gray-900/60",
        accent: "bg-purple-500/10 border-purple-500/30",
      },
      green: {
        border: "border-green-500/40",
        text: "text-green-400",
        bg: "from-green-900/20 to-gray-900/60",
        accent: "bg-green-500/10 border-green-500/30",
      },
      orange: {
        border: "border-orange-500/40",
        text: "text-orange-400",
        bg: "from-orange-900/20 to-gray-900/60",
        accent: "bg-orange-500/10 border-orange-500/30",
      },
      blue: {
        border: "border-blue-500/40",
        text: "text-blue-400",
        bg: "from-blue-900/20 to-gray-900/60",
        accent: "bg-blue-500/10 border-blue-500/30",
      },
    };
    return colors[color];
  };

  return (
    <section
      id="projects"
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
        className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.2 }}
      >
        {projects.map((project, idx) => {
          const colorClass = getColorClasses(project.color);
          
          return (
            <motion.div
              key={idx}
              variants={fadeInUp}
              whileHover={{ scale: 1.03, y: -8 }}
              transition={{ duration: 0.3 }}
              className={`relative p-8 rounded-2xl bg-gradient-to-br ${colorClass.bg} border-2 ${colorClass.border} shadow-2xl backdrop-blur-sm overflow-hidden group`}
            >
              {/* Decorative top bar */}
              <div className={`absolute top-0 left-0 right-0 h-1 ${colorClass.text} opacity-50`}></div>

              {/* Category Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${colorClass.text} ${colorClass.accent} border uppercase tracking-wider`}>
                  {project.category}
                </span>
                <div className={`w-8 h-8 rounded-full ${colorClass.accent} border ${colorClass.border} flex items-center justify-center ${colorClass.text} font-bold text-sm`}>
                  {idx + 1}
                </div>
              </div>

              {/* Project Title */}
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 tracking-wide group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-300">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIdx) => (
                  <span
                    key={techIdx}
                    className="px-3 py-1 rounded-md bg-gray-800/70 text-gray-300 text-xs font-mono border border-gray-700/50 hover:border-gray-600 transition-colors duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* GitHub Link */}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg ${colorClass.accent} border ${colorClass.border} ${colorClass.text} font-semibold text-sm hover:scale-105 transition-all duration-300 mt-2`}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  <span>View on GitHub</span>
                </a>
              )}

              {/* Hover accent line */}
              <div className={`absolute bottom-0 left-0 h-1 ${colorClass.text} w-0 group-hover:w-full transition-all duration-500`}></div>
            </motion.div>
          );
        })}

        {/* Large empty card for future projects - removed */}
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