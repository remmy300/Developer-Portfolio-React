import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaReact,
  FaJs,
  FaNodeJs,
  FaDatabase,
  FaFigma,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiFirebase,
  SiNextdotjs,
} from "react-icons/si";

const About = () => {
  const skills = [
    { name: "React", icon: <FaReact className="text-slate-600" />, level: 90 },
    { name: "JavaScript", icon: <FaJs className="text-slate-600" />, level: 85 },
    {
      name: "TypeScript",
      icon: <SiTypescript className="text-slate-600" />,
      level: 80,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-slate-600" />,
      level: 88,
    },
    { name: "Node.js", icon: <FaNodeJs className="text-slate-600" />, level: 40 },
    { name: "Firebase", icon: <SiFirebase className="text-slate-600" />, level: 78 },
    { name: "Next.js", icon: <SiNextdotjs className="text-slate-700" />, level: 40 },
    { name: "REST APIs", icon: "🔗", level: 85 },
    { name: "Figma", icon: <FaFigma className="text-slate-600" />, level: 75 },
    { name: "Git", icon: <FaGitAlt className="text-slate-600" />, level: 88 },
    { name: "Databases", icon: <FaDatabase className="text-slate-600" />, level: 50 },
  ];

  const principles = [
    {
      title: "Product Thinking",
      description:
        "I design interfaces around user outcomes, not only screens and components.",
      icon: "🎯",
    },
    {
      title: "Execution Quality",
      description:
        "I focus on maintainable frontend architecture, performance, and reliability.",
      icon: "⚙️",
    },
    {
      title: "Clear Collaboration",
      description:
        "I communicate tradeoffs early and keep delivery transparent from start to finish.",
      icon: "🤝",
    },
  ];

  const timelineItems = [
    {
      side: "left",
      title: "Task Manager App",
      did: "Built the full React frontend with Firebase sync, task filters, due-date flows, and status management.",
      result:
        "Delivered a stable productivity app with smoother task tracking and a cleaner daily workflow.",
    },
    {
      side: "right",
      title: "Coffee Shop Platform",
      did: "Implemented payment integration security checks, including request validation, guarded transaction flow, and safer client-server handling.",
      result:
        "Improved payment reliability and reduced risk in checkout by enforcing safer transaction rules.",
    },
    {
      side: "left",
      title: "Movie Discovery App",
      did: "Integrated third-party movie APIs, built search/filter interactions, and organized reusable UI sections.",
      result:
        "Improved content discovery experience with faster navigation and clearer information display.",
    },
    {
      side: "right",
      title: "Recipe Sharing App",
      did: "Integrated Cloudinary for media storage and added auth checks to protect routes and user-specific actions.",
      result:
        "Enabled secure media-driven sharing with controlled access for authenticated users.",
    },
    {
      side: "left",
      title: "Portfolio Redesign",
      did: "Refined UX structure, project presentation, and responsive behavior across core sections.",
      result:
        "Created a clearer personal brand and a stronger first impression for recruiters and clients.",
    },
  ];

  return (
    <section id="about" className="relative min-h-screen py-20 px-4 md:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="inline-flex items-center rounded-full border border-slate-300 bg-slate-100 px-4 py-1.5 text-sm font-medium text-slate-700 mb-4">
            About Me
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
            Frontend Engineer with a
            <span className="block text-slate-700">strong UX focus</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            I build modern web products that balance clean UI, strong accessibility,
            and practical engineering decisions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 bg-white border border-slate-200 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Hello, I am Jentah Rehema
            </h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              I specialize in building responsive React interfaces with great user
              flow, clear code structure, and production-ready polish.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              My work combines design awareness and engineering discipline, from
              idea validation to smooth release.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">
                  Experience Focus
                </p>
                <p className="text-slate-900 font-semibold">Frontend + UX</p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">
                  Stack
                </p>
                <p className="text-slate-900 font-semibold">React, TS, Firebase</p>
              </div>
            </div>

            <div className="flex gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/remmy300"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-slate-100 text-slate-700 rounded-full hover:bg-slate-200 transition-colors"
              >
                <FaGithub className="text-xl" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://linkedin.com/in/jentahrehema"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-slate-100 text-slate-700 rounded-full hover:bg-slate-200 transition-colors"
              >
                <FaLinkedin className="text-xl" />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-3 bg-white border border-slate-200 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Core Skills</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.04 }}
                  className="rounded-xl border border-slate-200 bg-slate-50 p-4"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{skill.icon}</span>
                      <h4 className="font-semibold text-slate-900">{skill.name}</h4>
                    </div>
                    <span className="text-sm text-slate-600">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 0.9, delay: index * 0.05 }}
                      className="h-2 rounded-full bg-slate-500"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-14 relative"
        >
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-300"></div>

          <div className="space-y-10 md:space-y-0">
            {timelineItems.map((item, index) => (
              <div
                key={item.title}
                className={`grid md:grid-cols-[1fr_40px_1fr] md:gap-8 items-start ${
                  index > 0 ? "md:mt-10" : ""
                }`}
              >
                <div
                  className={`${
                    item.side === "left"
                      ? "md:pr-4"
                      : "md:opacity-0"
                  } ${index % 2 !== 0 ? "md:mt-12" : ""}`}
                >
                  {item.side === "left" ? (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.06 }}
                      className="rounded-2xl border border-slate-200 bg-white p-6 hover:border-slate-300 transition-colors"
                    >
                      <h4 className="text-lg font-bold text-slate-900 mb-2">
                        {item.title}
                      </h4>
                      <p className="text-slate-700 font-medium mb-2">
                        What I did:
                      </p>
                      <p className="text-slate-600 mb-4">{item.did}</p>
                      <p className="text-slate-700 font-medium mb-2">Result:</p>
                      <p className="text-slate-600">{item.result}</p>
                    </motion.div>
                  ) : (
                    <div className="hidden md:block h-full" />
                  )}
                </div>

                <div className="hidden md:block relative h-full min-h-10">
                  <span className="absolute top-6 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-slate-500 ring-4 ring-slate-200"></span>
                </div>

                <div
                  className={`${
                    item.side === "right"
                      ? "md:pl-4"
                      : "md:opacity-0"
                  } ${index % 2 === 0 ? "md:mt-12" : ""}`}
                >
                  {item.side === "right" ? (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.06 }}
                      className="rounded-2xl border border-slate-200 bg-white p-6 hover:border-slate-300 transition-colors"
                    >
                      <h4 className="text-lg font-bold text-slate-900 mb-2">
                        {item.title}
                      </h4>
                      <p className="text-slate-700 font-medium mb-2">
                        What I did:
                      </p>
                      <p className="text-slate-600 mb-4">{item.did}</p>
                      <p className="text-slate-700 font-medium mb-2">Result:</p>
                      <p className="text-slate-600">{item.result}</p>
                    </motion.div>
                  ) : (
                    <div className="hidden md:block h-full" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-14 grid md:grid-cols-3 gap-6"
        >
          {principles.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-6"
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h4>
              <p className="text-slate-600">{item.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
