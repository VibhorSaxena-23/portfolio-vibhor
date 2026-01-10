"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

export default function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      color: "cyan",
      skills: ["C++", "Java", "Python", "JavaScript", "TypeScript"],
    },
    {
      title: "Backend & Databases",
      color: "green",
      skills: ["Node.js", "Express", "MySQL", "MongoDB", "REST APIs"],
    },
    {
      title: "Frontend & Design",
      color: "purple",
      skills: ["React", "Next.js", "Tailwind CSS", "UI/UX Design", "Framer Motion"],
    },
    {
      title: "Core Computer Science",
      color: "blue",
      skills: [
        "Data Structures",
        "Algorithms",
        "Operating Systems",
        "Computer Networks",
        "DBMS",
      ],
    },
    {
      title: "Tools & Platforms",
      color: "orange",
      skills: ["Git", "Docker", "Cloud Computing", "Microservices", "Linux"],
    },
    {
      title: "Specializations",
      color: "yellow",
      skills: [
        "Competitive Programming",
        "Machine Learning",
        "Problem Solving",
        "System Design",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  const getColorClasses = (color: string) => {
    const colors: Record<
      string,
      { border: string; text: string; shadow: string }
    > = {
      cyan: {
        border: "border-cyan-500/30",
        text: "text-cyan-400",
        shadow: "shadow-cyan-500/10",
      },
      green: {
        border: "border-green-500/30",
        text: "text-green-400",
        shadow: "shadow-green-500/10",
      },
      purple: {
        border: "border-purple-500/30",
        text: "text-purple-400",
        shadow: "shadow-purple-500/10",
      },
      blue: {
        border: "border-blue-500/30",
        text: "text-blue-400",
        shadow: "shadow-blue-500/10",
      },
      orange: {
        border: "border-orange-500/30",
        text: "text-orange-400",
        shadow: "shadow-orange-500/10",
      },
      yellow: {
        border: "border-yellow-500/30",
        text: "text-yellow-400",
        shadow: "shadow-yellow-500/10",
      },
    };
    return colors[color];
  };

  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col px-6 sm:px-20 max-w-6xl mx-auto space-y-10 font-mono mb-20"
    >
      {/* ✅ Unified Section Heading */}
      <SectionHeading text="Skills & Expertise" />

      <motion.p
        className="text-gray-300 text-center text-base sm:text-lg max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        A comprehensive overview of technologies, frameworks, and tools I’ve
        mastered through projects, internships, and competitive programming.
      </motion.p>

      {/* Skills Grid */}
      <motion.div
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
              whileHover={{ scale: 1.03 }}
              className={`p-6 rounded-xl bg-gray-900/50 border ${colorClass.border} ${colorClass.shadow} shadow-xl backdrop-blur-sm hover:-translate-y-1 transition-all duration-300`}
            >
              <div className="mb-4 pb-3 border-b border-gray-700/50">
                <h3
                  className={`text-xl font-bold ${colorClass.text} tracking-wide`}
                >
                  {category.title}
                </h3>
              </div>

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

      {/* Divider */}
      <div className="flex justify-center items-center gap-4 pt-8 pb-4">
        <div className="h-px w-20 bg-gradient-to-r from-transparent to-cyan-500" />
        <span className="text-cyan-400 text-2xl">◆</span>
        <div className="h-px w-20 bg-gradient-to-l from-transparent to-cyan-500" />
      </div>
    </section>
  );
}
