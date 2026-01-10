"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

export default function About() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  // 🔹 Same subtle card style used across sections
  const cardStyle =
    "p-6 rounded-2xl bg-gray-900/50 border border-cyan-500/20 " +
    "shadow-xl backdrop-blur-sm hover:-translate-y-1 " +
    "transition-all duration-300";

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col px-6 sm:px-20 max-w-5xl mx-auto space-y-10 font-mono py-0 mb-20"
    >
      {/* Section Heading */}
      <SectionHeading text="About" />

      <motion.div
        className="flex flex-col gap-8 text-gray-300 text-base sm:text-lg leading-relaxed"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.25 }}
      >
        {/* Intro */}
        <motion.div variants={fadeInUp} className={cardStyle}>
          <p>
            Hey, I am{" "}
            <span className="font-bold text-cyan-400">Vibhor Saxena</span>!
            <br />
            I am a <span className="font-semibold">B.Tech Computer Science</span>{" "}
            undergraduate at{" "}
            <span className="font-bold text-cyan-400">
              JK Lakshmipat University
            </span>
            , Jaipur, India. I was also selected as an exchange student at{" "}
            <span className="font-bold text-cyan-300">IIT Jodhpur</span> and{" "}
            <span className="font-bold text-cyan-300">IIT Kanpur</span>.
          </p>
        </motion.div>

        {/* Experience */}
        <motion.div variants={fadeInUp} className={cardStyle}>
          <p>
            I have interned at{" "}
            <span className="font-bold text-cyan-400">ITJOBXS</span> as an{" "}
            <code className="px-2 py-1 bg-gray-800/70 text-green-400 rounded">
              SDE Intern
            </code>
            ,{" "}
            <span className="font-bold text-cyan-400">
              SEMS Welfare Foundation
            </span>{" "}
            as a{" "}
            <code className="px-2 py-1 bg-gray-800/70 text-green-400 rounded">
              UI/UX & Web Dev Intern
            </code>
            , and{" "}
            <span className="font-bold text-cyan-400">
              AddLens Technologies
            </span>{" "}
            as a{" "}
            <code className="px-2 py-1 bg-gray-800/70 text-green-400 rounded">
              ML Intern
            </code>
            .
          </p>
        </motion.div>

        {/* Passion */}
        <motion.div variants={fadeInUp} className={cardStyle}>
          <p>
            I love building{" "}
            <span className="font-bold text-white">
              scalable applications
            </span>{" "}
            and tackling{" "}
            <code className="px-2 py-1 bg-gray-800/70 text-yellow-400 rounded">
              algorithmic challenges
            </code>
            . In Competitive Programming, I&apos;m an{" "}
            <span className="font-semibold text-cyan-400">
              Expert on Codeforces (1600+)
            </span>{" "}
            and a{" "}
            <span className="font-semibold text-cyan-400">
              4★ Coder on CodeChef
            </span>
            .
          </p>
        </motion.div>

        {/* Responsibilities */}
        <motion.div variants={fadeInUp} className={cardStyle}>
          <h3 className="text-2xl sm:text-3xl font-bold uppercase tracking-widest mb-4 text-cyan-300">
            ► Responsibilities
          </h3>
          <p>
            • Worked as a{" "}
            <code className="px-2 py-1 bg-gray-800/70 text-purple-400 rounded">
              problem setter
            </code>{" "}
            for competitions with{" "}
            <span className="font-bold text-white">200+ participants</span>.
            <br />• Built backend logic, ML models, and dashboards during
            internships.
          </p>
        </motion.div>

        {/* Coursework */}
        <motion.div variants={fadeInUp} className={cardStyle}>
          <h3 className="text-2xl sm:text-3xl font-bold uppercase tracking-widest mb-4 text-cyan-300">
            ► Computer Science Coursework
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "Computer Networks",
              "Data Structures",
              "Algorithms",
              "DBMS",
              "Operating Systems",
              "Object Oriented Programming",
              "Software Engineering",
              "Machine Learning & Pattern Recognition",
              "Big Data Analysis",
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-cyan-400">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
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
