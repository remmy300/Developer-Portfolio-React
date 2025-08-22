import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaReact,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaPython,
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
    { name: "React", icon: <FaReact className="text-blue-500" />, level: 90 },
    {
      name: "JavaScript",
      icon: <FaJs className="text-yellow-500" />,
      level: 85,
    },
    {
      name: "TypeScript",
      icon: <SiTypescript className="text-blue-700" />,
      level: 80,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-cyan-400" />,
      level: 88,
    },
    {
      name: "Node.js",
      icon: <FaNodeJs className="text-green-600" />,
      level: 40,
    },

    {
      name: "Firebase",
      icon: <SiFirebase className="text-yellow-500" />,
      level: 78,
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs className="text-black" />,
      level: 40,
    },
    { name: "REST APIs", icon: "🔗", level: 85 },
    { name: "Figma", icon: <FaFigma className="text-purple-500" />, level: 75 },
    { name: "Git", icon: <FaGitAlt className="text-red-500" />, level: 88 },
    {
      name: "Databases",
      icon: <FaDatabase className="text-gray-500" />,
      level: 50,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="about"
      className="relative min-h-screen  py-20 px-4 md:px-8 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-purple-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-100 max-w-2xl mx-auto">
            Get to know my skills, experience, and passion for creating
            exceptional digital experiences
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-slate-800/50 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-6">
                Hello, I'm Jentah Rehema
              </h3>

              <p className="text-white mb-4 leading-relaxed">
                I am a{" "}
                <span className="font-semibold text-blue-400">
                  Frontend Developer
                </span>{" "}
                skilled in{" "}
                <span className="font-semibold text-blue-600">React</span>,{" "}
                <span className="font-semibold text-cyan-600">
                  Tailwind CSS
                </span>
                , and{" "}
                <span className="font-semibold text-yellow-600">
                  JavaScript
                </span>
                . I build responsive, accessible, and user-friendly web
                applications with a focus on clean code and performance.
              </p>

              <p className="text-white mb-6 leading-relaxed">
                I enjoy turning ideas into functional, engaging interfaces while
                staying updated on{" "}
                <span className="font-semibold text-blue-400">
                  UI/UX trends
                </span>{" "}
                and modern development practices.
              </p>

              <div className="flex space-x-4">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://github.com/remmy300"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-slate-700 text-white rounded-full hover:bg-slate-600 transition-colors"
                >
                  <FaGithub className="text-xl" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://linkedin.com/in/jentahrehema"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                >
                  <FaLinkedin className="text-xl" />
                </motion.a>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 sm:grid-cols-3 gap-4"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                className="bg-slate-700/60 rounded-xl p-4 shadow-md flex flex-col items-center justify-center hover:shadow-lg transition-shadow"
              >
                <div className="text-3xl mb-2">{skill.icon}</div>
                <h4 className="font-medium text-slate-200 text-center">
                  {skill.name}
                </h4>
                <div className="w-full bg-slate-200 rounded-full h-2 mt-3">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="h-2 rounded-full bg-purple-500"
                  />
                </div>
                <span className="text-xs text-slate-200 mt-1">
                  {skill.level}%
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 bg-slate-800/50 rounded-2xl p-8 shadow-xl"
        >
          <h3 className="text-2xl font-bold text-slate-100 mb-6 text-center">
            My Approach
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 rounded-lg bg-slate-700 hover:bg-slate-600 transition-colors">
              <div className="text-4xl mb-4">💡</div>
              <h4 className="font-semibold text-slate-100 mb-2">
                Creative Solutions
              </h4>
              <p className="text-slate-100">
                I focus on creating innovative and user-friendly interfaces that
                solve real problems.
              </p>
            </div>
            <div className="text-center p-6 rounded-lg bg-slate-700 hover:bg-slate-600 transition-colors">
              <div className="text-4xl mb-4">⚡</div>
              <h4 className="font-semibold text-slate-200 mb-2">Performance</h4>
              <p className="text-slate-100">
                I build fast, efficient applications with clean, optimized code
                and best practices.
              </p>
            </div>
            <div className="text-center p-6 rounded-lg bg-slate-700 hover:bg-slate-600 transition-colors">
              <div className="text-4xl mb-4">🔄</div>
              <h4 className="font-semibold text-slate-100 mb-2">
                Continuous Learning
              </h4>
              <p className="text-slate-100">
                I stay updated with the latest technologies and trends in the
                ever-evolving web landscape.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default About;
