import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-[#1e1b4b] to-[#312e81] px-6 text-center overflow-hidden">
      <div className="absolute inset-0 bg-[url('/stars.svg')] opacity-10 pointer-events-none" />

      <motion.div
        className="text-5xl mb-4"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        👩🏽‍💻
      </motion.div>

      <motion.h1
        className="text-4xl md:text-6xl font-extrabold text-white leading-tight"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hi, I&apos;m{" "}
        <span className="bg-gradient-to-r from-pink-400 via-indigo-500 to-blue-400 bg-clip-text text-transparent animate-pulse">
          Jentah Rehema
        </span>
      </motion.h1>

      <motion.p
        className="mt-4 text-lg md:text-xl text-gray-300 max-w-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        A passionate frontend developer building beautiful and functional
        interfaces with <strong>React</strong>, <strong>Tailwind</strong>, and{" "}
        <strong>Firebase</strong>.
      </motion.p>

      <motion.div
        className="mt-8 flex gap-4 flex-wrap justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <a
          href="#projects"
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-full shadow-lg transition-all hover:shadow-indigo-500/40"
        >
          View Projects
        </a>
        <a
          href="mailto:jentahrehema7@gmail.com"
          className="border border-indigo-400 text-indigo-200 hover:bg-indigo-100/10 py-3 px-6 rounded-full font-medium transition-all hover:shadow-lg hover:shadow-purple-400/30"
        >
          Contact Me <FaArrowRight className="inline-block ml-2" />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
