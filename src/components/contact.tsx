"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Contact() {
  const fullText = "| Get In Touch |";
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

  const contacts = [
    {
      type: "Email",
      value: "vibhorsaxena000@gmail.com",
      link: "mailto:vibhorsaxena000@gmail.com",
      color: "cyan",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      type: "Phone",
      value: "+91-7023492881",
      link: "tel:+917023492881",
      color: "green",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
    },
  ];

  const socials = [
    {
      name: "LinkedIn",
      username: "vibhor-saxena",
      link: "https://www.linkedin.com/in/vibhor-saxena-96196b256/",
      color: "blue",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
    },
    {
      name: "GitHub",
      username: "VibhorSaxena-23",
      link: "https://github.com/VibhorSaxena-23",
      color: "purple",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      name: "Codeforces",
      username: "vibhorsaxena000",
      link: "https://codeforces.com/profile/vibhorsaxena000",
      color: "orange",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4.5 7.5C5.328 7.5 6 8.172 6 9v10.5c0 .828-.672 1.5-1.5 1.5h-3C.672 21 0 20.328 0 19.5V9c0-.828.672-1.5 1.5-1.5h3zm9-4.5c.828 0 1.5.672 1.5 1.5v15c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5v-15c0-.828.672-1.5 1.5-1.5h3zm9 7.5c.828 0 1.5.672 1.5 1.5v7.5c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5V12c0-.828.672-1.5 1.5-1.5h3z"/>
        </svg>
      ),
    },
    {
      name: "CodeChef",
      username: "chaosconqueror",
      link: "https://www.codechef.com/users/chaosconqueror",
      color: "yellow",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.257.004c-.37.01-.735.03-1.1.063l.11.024-.004.004c-.365.033-.728.076-1.088.131l.028-.004c-.355.054-.707.118-1.056.193l.034-.008c-.345.074-.687.158-1.024.253l.036-.01c-.334.094-.664.198-.99.313l.04-.014c-.322.114-.64.238-.954.372l.044-.019c-.31.134-.617.278-.918.432l.049-.024c-.298.154-.591.318-.878.492l.048-.028c-.285.174-.565.358-.838.551l.044-.03c-.272.193-.538.395-.797.606l.024-.020c-.258.21-.51.429-.755.656l.021-.019c-.244.227-.481.462-.71.704l.014-.015c-.229.242-.45.491-.663.747l.014-.018c-.212.254-.416.516-.612.784l.016-.023c-.196.267-.383.542-.561.822l.017-.028c-.178.278-.346.564-.504.855l.018-.033c-.158.290-.306.587-.444.888l.016-.035c-.138.301-.265.608-.382.919l.014-.039c-.117.309-.224.623-.32.941l.011-.041c-.096.316-.181.637-.256.961l.009-.043c-.074.322-.138.648-.191.977l.006-.046c-.053.327-.095.658-.126.99l.003-.049c-.031.331-.051.665-.061 1.001l-.001.026v9.635c.01.37.03.735.063 1.1l-.004-.028.004.004c.033.365.076.728.131 1.088l-.008-.034c.054.355.118.707.193 1.056l-.01-.036c.074.345.158.687.253 1.024l-.01-.04c.094.334.198.664.313.99l-.014-.046c.114.322.238.64.372.954l-.019-.05c.134.31.278.617.432.918l-.024-.054c.154.298.318.591.492.878l-.028-.054c.174.285.358.565.551.838l-.030-.05c.193.272.395.538.606.797l-.020-.03c.21.258.429.51.656.755l-.019-.027c.227.244.462.481.704.71l-.015-.020c.242.229.491.45.747.663l-.018-.020c.254.212.516.416.784.612l-.023-.022c.267.196.542.383.822.561l-.028-.023c.278.178.564.346.855.504l-.033-.024c.290.158.587.306.888.444l-.035-.022c.301.138.608.265.919.382l-.039-.020c.309.117.623.224.941.32l-.041-.017c.316.096.637.181.961.256l-.043-.015c.322.074.648.138.977.191l-.046-.009c.327.053.658.095.99.126l-.049-.009c.331.031.665.051 1.001.061l-.026.001h.23c.37-.01.735-.03 1.1-.063l-.028.004.004-.004c.365-.033.728-.076 1.088-.131l-.034.008c.355-.054.707-.118 1.056-.193l-.036.01c.345-.074.687-.158 1.024-.253l-.040.010c.334-.094.664-.198.99-.313l-.046.014c.322-.114.64-.238.954-.372l-.050.019c.31-.134.617-.278.918-.432l-.054.024c.298-.154.591-.318.878-.492l-.054.028c.285-.174.565-.358.838-.551l-.050.030c.272-.193.538-.395.797-.606l-.030.020c.258-.21.51-.429.755-.656l-.027.019c.244-.227.481-.462.71-.704l-.020.014c.229-.242.45-.491.663-.747l-.020.014c.212-.254.416-.516.612-.784l-.022.016c.196-.267.383-.542.561-.822l-.023.017c.178-.278.346-.564.504-.855l-.024.018c.158-.290.306-.587.444-.888l-.022.016c.138-.301.265-.608.382-.919l-.020.014c.117-.309.224-.623.32-.941l-.017.011c.096-.316.181-.637.256-.961l-.015.009c.074-.322.138-.648.191-.977l-.009.006c.053-.327.095-.658.126-.99l-.009.003c.031-.331.051-.665.061-1.001l.001.026V7.31c-.01-.37-.03-.735-.063-1.1l.004.028-.004-.004c-.033-.365-.076-.728-.131-1.088l.008.034c-.054-.355-.118-.707-.193-1.056l.01.036c-.074-.345-.158-.687-.253-1.024l.01.040c-.094-.334-.198-.664-.313-.99l.014.046c-.114-.322-.238-.64-.372-.954l.019.050c-.134-.31-.278-.617-.432-.918l.024.054c-.154-.298-.318-.591-.492-.878l.028.054c-.174-.285-.358-.565-.551-.838l.030.050c-.193-.272-.395-.538-.606-.797l.020.030c-.21-.258-.429-.51-.656-.755l.019.027c-.227-.244-.462-.481-.704-.71l.015.020c-.242-.229-.491-.45-.747-.663l.018.020c-.254-.212-.516-.416-.784-.612l.023.022c-.267-.196-.542-.383-.822-.561l.028.023c-.278-.178-.564-.346-.855-.504l.033.024c-.290-.158-.587-.306-.888-.444l.035.022c-.301-.138-.608-.265-.919-.382l.039.020c-.309-.117-.623-.224-.941-.32l.041.017c-.316-.096-.637-.181-.961-.256l.043.015c-.322-.074-.648-.138-.977-.191l.046.009c-.327-.053-.658-.095-.99-.126l.049.009c-.331-.031-.665-.051-1.001-.061l.026.001h-.23z"/>
        </svg>
      ),
    },
    {
      name: "LeetCode",
      username: "VibhorSaxena-23",
      link: "https://leetcode.com/u/VibhorSaxena-23/",
      color: "cyan",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
        </svg>
      ),
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  const getColorClasses = (color: string) => {
    const colors: Record<string, { border: string; text: string; bg: string; hover: string }> = {
      cyan: { border: "border-cyan-500/40", text: "text-cyan-400", bg: "from-cyan-900/20 to-gray-900/60", hover: "hover:border-cyan-500/60 hover:shadow-cyan-500/20" },
      green: { border: "border-green-500/40", text: "text-green-400", bg: "from-green-900/20 to-gray-900/60", hover: "hover:border-green-500/60 hover:shadow-green-500/20" },
      blue: { border: "border-blue-500/40", text: "text-blue-400", bg: "from-blue-900/20 to-gray-900/60", hover: "hover:border-blue-500/60 hover:shadow-blue-500/20" },
      purple: { border: "border-purple-500/40", text: "text-purple-400", bg: "from-purple-900/20 to-gray-900/60", hover: "hover:border-purple-500/60 hover:shadow-purple-500/20" },
      orange: { border: "border-orange-500/40", text: "text-orange-400", bg: "from-orange-900/20 to-gray-900/60", hover: "hover:border-orange-500/60 hover:shadow-orange-500/20" },
      yellow: { border: "border-yellow-500/40", text: "text-yellow-400", bg: "from-yellow-900/20 to-gray-900/60", hover: "hover:border-yellow-500/60 hover:shadow-yellow-500/20" },
    };
    return colors[color];
  };

  return (
    <section
      id="contact"
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
        transition={{ staggerChildren: 0.15 }}
      >
        {/* Intro Text */}
        <motion.p
          variants={fadeInUp}
          className="text-gray-300 text-center text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
        >
          Feel free to reach out for collaborations, opportunities, or just a friendly chat!
        </motion.p>

        {/* Contact Cards */}
        <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contacts.map((contact, idx) => {
            const colorClass = getColorClasses(contact.color);
            return (
              <a
                key={idx}
                href={contact.link}
                className={`p-6 rounded-xl bg-gradient-to-br ${colorClass.bg} border-2 ${colorClass.border} ${colorClass.hover} shadow-xl transition-all duration-300 hover:scale-105 group`}
              >
                <div className="flex items-center gap-4">
                  <div className={`${colorClass.text} group-hover:scale-110 transition-transform duration-300`}>
                    {contact.icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-400 text-sm mb-1">{contact.type}</p>
                    <p className={`${colorClass.text} font-semibold text-base sm:text-lg break-all`}>
                      {contact.value}
                    </p>
                  </div>
                </div>
              </a>
            );
          })}
        </motion.div>

        {/* Social Links */}
        <motion.div variants={fadeInUp}>
          <h3 className="text-2xl font-bold text-cyan-300 mb-6 text-center flex items-center justify-center gap-2">
            <span className="text-cyan-400">►</span> Connect With Me
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {socials.map((social, idx) => {
              const colorClass = getColorClasses(social.color);
              return (
                <a
                  key={idx}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-5 rounded-xl bg-gradient-to-br ${colorClass.bg} border-2 ${colorClass.border} ${colorClass.hover} shadow-xl transition-all duration-300 hover:scale-105 group flex flex-col items-center text-center`}
                >
                  <div className={`${colorClass.text} mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    {social.icon}
                  </div>
                  <p className="text-white font-semibold text-sm mb-1">{social.name}</p>
                  <p className={`${colorClass.text} text-xs break-all`}>{social.username}</p>
                </a>
              );
            })}
          </div>
        </motion.div>

        {/* Footer */}
        <motion.footer
          variants={fadeInUp}
          className="text-center text-sm text-gray-500 mt-10 pt-8 border-t border-gray-800"
        >
          <p className="mb-2">© {new Date().getFullYear()} Vibhor Saxena</p>
          <p className="text-xs text-gray-600">Built with Next.js, TypeScript & Tailwind CSS</p>
        </motion.footer>
      </motion.div>
    </section>
  );
}