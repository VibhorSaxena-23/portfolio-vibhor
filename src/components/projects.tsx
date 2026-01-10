"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

export default function Projects() {
  const projects = [
    {
      title: "OlympIQ",
      category: "Data Analytics",
      description:
        "Analytics platform analyzing socio-economic drivers of Olympic performance using React, D3.js, FastAPI, and Machine Learning.",
      tech: ["React", "D3.js", "FastAPI", "ML", "Data Visualization"],
      color: "cyan",
      github: "https://github.com/VibhorSaxena-23/OLYMPIQ-Visual-Analytics",
    },
    {
      title: "Khana Khoj",
      category: "Mobile Development",
      description:
        "Recipe recommendation app built with React Native and TensorFlow for healthy, personalized meal suggestions.",
      tech: ["React Native", "TensorFlow", "ML"],
      color: "purple",
      github: "https://github.com/VibhorSaxena-23/Khana-Khoj",
    },

    {
      title: "FitFood – Nutrition Tracker",
      category: "Full-Stack Web App",
      description:
        "Personalized macro & calorie tracking platform with dashboards, meal logs, and nutrition recommendations using BMR & TDEE.",
      tech: ["Next.js", "React", "MongoDB", "Tailwind CSS", "Nutrition Algorithms"],
      color: "orange",
      github: "https://github.com/VibhorSaxena-23/FitFood",
    },
    {
      title: "QueryX – NL → SQL RAG System",
      category: "Generative AI · Databases",
      description:
        "Natural language → SQL generation for relational data using RAG with SentenceTransformers schema embeddings in Qdrant and PostgreSQL.",
      tech: ["RAG", "FLAN-T5", "PostgreSQL", "Qdrant", "NL → SQL"],
      color: "yellow",
      github: "https://github.com/StonerSensei/QueryX",
    },
    {
      title: "Legal Document Query Assistant",
      category: "Offline NLP Tool",
      description:
        "Streamlit-based tool for querying legal PDFs using local embeddings with sentence-transformers. Fully offline and privacy-preserving.",
      tech: ["Python", "Streamlit", "Sentence Transformers", "NLP"],
      color: "blue",
      github: "https://github.com/shreyansh-1911/Generative_AI-Project",
    },
    {
      title: "Golang UDP Socket",
      category: "Distributed Systems",
      description:
        "Distributed Math Series Computation using Go's UDP socket programming for efficient inter-process communication and parallel computation.",
      tech: ["Golang", "UDP", "Networking", "Distributed Computing"],
      color: "cyan",
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
    const colors: Record<
      string,
      { border: string; text: string; bg: string; accent: string }
    > = {
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
      yellow: {
        border: "border-yellow-500/40",
        text: "text-yellow-400",
        bg: "from-yellow-900/20 to-gray-900/60",
        accent: "bg-yellow-500/10 border-yellow-500/30",
      },
    };
    return colors[color];
  };

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col px-6 sm:px-20 max-w-6xl mx-auto space-y-12 font-mono mb-20"
    >
      {/* Heading */}
      <SectionHeading text="Projects" />

      <motion.div
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
              whileHover={{ scale: 1.03, y: -6 }}
              className={`relative p-8 rounded-2xl bg-gradient-to-br ${colorClass.bg}
                border-2 ${colorClass.border} shadow-2xl backdrop-blur-sm group`}
            >
              {/* Category & Number */}
              <div className="flex justify-between mb-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold uppercase
                  ${colorClass.text} ${colorClass.accent}`}
                >
                  {project.category}
                </span>
                <span className={`${colorClass.text} font-bold`}>
                  {idx + 1}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-sm sm:text-base mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Tech badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-md bg-gray-800/70 text-gray-300 text-xs border border-gray-700/50"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* GitHub Link */}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg
                  ${colorClass.accent} ${colorClass.text} font-semibold text-sm
                  hover:scale-105 transition`}
                >
                  <span>View on GitHub →</span>
                </a>
              )}

              {/* Hover accent */}
              <div
                className={`absolute bottom-0 left-0 h-1 ${colorClass.text}
                w-0 group-hover:w-full transition-all duration-500`}
              />
            </motion.div>
          );
        })}
      </motion.div>

      {/* Divider */}
      <div className="flex justify-center items-center gap-4 pt-8">
        <div className="h-px w-20 bg-gradient-to-r from-transparent to-cyan-500" />
        <span className="text-cyan-400 text-2xl">◆</span>
        <div className="h-px w-20 bg-gradient-to-l from-transparent to-cyan-500" />
      </div>
    </section>
  );
}
