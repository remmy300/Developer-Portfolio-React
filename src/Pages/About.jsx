import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaReact, FaCss3Alt, FaJs } from "react-icons/fa";

const skills = [
  {
    name: "React",
    icon: <FaReact className="text-blue-500" />,
    level: 90,
    color: "bg-blue-500",
  },
  {
    name: "JavaScript",
    icon: <FaJs className="text-yellow-500" />,
    level: 85,
    color: "bg-yellow-400",
  },
  {
    name: "Tailwind CSS",
    icon: <FaCss3Alt className="text-teal-500" />,
    level: 80,
    color: "bg-teal-400",
  },
  { name: "REST APIs & Axios", icon: "🔗", level: 75, color: "bg-indigo-400" },
];

const About = () => {
  return (
    <section
      id="about"
      className="bg-gradient-to-b from-[#1e1b4b] to-[#312e81] text-white py-20 px-8"
    >
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-5xl font-extrabold mb-8 text-purple-300"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          About Me
        </motion.h2>

        <motion.p
          className="text-xl mb-6 text-gray-200"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Hi, I'm{" "}
          <span className="font-bold text-purple-400">Jentah Rehema</span>, a{" "}
          <span className="font-semibold">Frontend Developer</span> who loves
          crafting responsive, user-focused web apps using{" "}
          <span className="font-semibold text-blue-400">React</span> and{" "}
          <span className="font-semibold text-cyan-300">Tailwind CSS</span>.
        </motion.p>

        <motion.p
          className="text-lg mb-6 text-gray-300"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          I enjoy solving UI challenges and turning ideas into intuitive
          experiences. I've built apps like recipe finders, movie browsers, and
          resume builders while continuously exploring new tools.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <h3 className="text-3xl font-semibold mt-10 mb-6 text-purple-200">
            Skills & Technologies
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map(({ name, icon }) => (
              <div
                key={name}
                className="bg-white/10 backdrop-blur p-4 rounded-xl shadow-md text-center hover:scale-105 transition-transform"
              >
                <div className="text-4xl mb-2">{icon}</div>
                <h4 className="text-lg font-semibold">{name}</h4>
              </div>
            ))}
          </div>

          <div className="mt-10 space-y-6 text-left">
            {skills.map(({ name, level, color }, idx) => (
              <div key={name}>
                <p className="font-medium text-gray-200 mb-1">{name}</p>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${level}%` }}
                  transition={{
                    delay: 1 + idx * 0.2,
                    duration: 0.8,
                    ease: "easeOut",
                  }}
                  className={`h-3 rounded-lg ${color}`}
                />
              </div>
            ))}
          </div>
        </motion.div>

        <motion.p
          className="text-lg mt-12 text-gray-300"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.8 }}
        >
          Outside of coding, I enjoy exploring new dev tools, reading about UI
          design, and sipping a good cup of coffee ☕.
        </motion.p>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
        >
          <p className="text-xl text-purple-200 mb-4">
            Want to collaborate or see more?
          </p>
          <div className="flex justify-center gap-8 text-4xl">
            <a
              href="https://github.com/remmy300"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition-transform transform hover:scale-110"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/jentahrehema"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition-transform transform hover:scale-110"
            >
              <FaLinkedin />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
