"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

export default function Experience() {
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
        "Enhanced backend user registration flow by designing validation logic in PHP & MySQL to prevent fake bot accounts",
        "Proposed and implemented solutions like cleanup queries, domain whitelisting, and Google reCAPTCHA",
        "Improved system reliability by debugging a critical issue causing rapid database growth",
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
        "Optimized UI/UX and developed web pages using WordPress",
        "Built a mobile app with React Native to enhance accessibility",
        "Integrated APIs to boost app functionality",
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
        "Contributed to OrdaLane, a local commerce mobile app",
        "Implemented ML models for recommendations and demand forecasting",
        "Designed dashboards to visualize shopping trends",
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
    const colors: Record<
      string,
      { border: string; text: string; bg: string; shadow: string }
    > = {
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
      className="min-h-screen flex flex-col px-6 sm:px-20 max-w-6xl mx-auto space-y-10 font-mono mb-20"
    >
      {/* ✅ Unified Section Heading */}
      <SectionHeading text="Past Work Experience" />

      <motion.div
        className="flex flex-col gap-12"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.2 }}
      >
        <div className="relative">
          {experiences.map((exp, idx) => {
            const colorClass = getColorClasses(exp.color);

            return (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="relative mb-16 last:mb-0"
              >
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                  className={`relative p-8 rounded-2xl bg-gradient-to-br ${colorClass.bg}
                    border-2 ${colorClass.border} ${colorClass.shadow}
                    shadow-2xl backdrop-blur-sm overflow-hidden`}
                >
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-6 pb-6 border-b border-gray-700/50">
                    <div className="text-5xl">{exp.logo}</div>
                    <div className="flex-1">
                      <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                        {exp.company}
                      </h3>

                      <div
                        className={`inline-block px-4 py-2 rounded-full ${colorClass.text}
                        bg-gray-800/70 text-sm font-semibold mb-2`}
                      >
                        {exp.role}
                      </div>

                      <div className="flex flex-wrap gap-4 text-gray-400 text-sm mt-2">
                        <span className="flex items-center gap-2">
                          <span className={colorClass.text}>📍</span>
                          {exp.location}
                        </span>
                        <span className="flex items-center gap-2">
                          <span className={colorClass.text}>📅</span>
                          {exp.duration}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="space-y-3">
                    {exp.description.map((point, i) => (
                      <div key={i} className="flex gap-3">
                        <span className={`${colorClass.text} mt-1`}>▹</span>
                        <p className="text-gray-300 text-sm sm:text-base">
                          {point}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Index badge */}
                  <div
                    className={`absolute bottom-4 right-4 w-12 h-12 rounded-full
                    ${colorClass.text} bg-gray-800/50 border border-current/30
                    flex items-center justify-center font-bold text-xl`}
                  >
                    {idx + 1}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Divider */}
        <motion.div
          variants={fadeInUp}
          className="flex justify-center items-center gap-4 pt-8"
        >
          <div className="h-px w-20 bg-gradient-to-r from-transparent to-cyan-500" />
          <span className="text-cyan-400 text-2xl">◆</span>
          <div className="h-px w-20 bg-gradient-to-l from-transparent to-cyan-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}
