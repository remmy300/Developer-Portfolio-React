import { motion } from "framer-motion";
import { FaArrowRight, FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-6 text-center"
        >
          <p className="inline-flex items-center rounded-full border border-slate-300 bg-slate-100 px-4 py-1.5 text-sm font-medium text-slate-700 mb-6">
            Open to frontend roles and freelance projects
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 leading-tight mb-4">
            I build high-quality
            <span className="block text-slate-700">frontend experiences</span>
          </h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "220px" }}
            transition={{ delay: 1, duration: 0.8 }}
            className="h-1 bg-slate-300 mx-auto mb-6"
          ></motion.div>
        </motion.div>

        <motion.p
          className="mt-4 text-lg md:text-xl text-slate-600 max-w-3xl mx-auto text-center leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          Hi, I am Jentah Rehema, a frontend developer focused on MERN,
          TypeScript, and modern UX patterns. I turn product ideas into clean,
          performant, and accessible interfaces.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="transition-all"
          >
            <Link
              to="/projects"
              className="bg-slate-900 hover:bg-slate-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all flex items-center gap-2"
            >
              View Projects
              <FaArrowRight className="text-sm" />
            </Link>
          </motion.div>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="resume.pdf"
            download
            className="bg-white hover:bg-slate-100 border border-slate-300 text-slate-800 font-medium py-3 px-8 rounded-full shadow-lg transition-all flex items-center gap-2"
          >
            Download CV
            <FaDownload className="text-sm" />
          </motion.a>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="transition-all"
          >
            <Link
              to="/contact"
              className="bg-white hover:bg-slate-100 border border-slate-300 text-slate-800 font-medium py-3 px-8 rounded-full transition-all block"
            >
              Let's Talk
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-12 flex justify-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <motion.a
            href="https://github.com/remmy300"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5 }}
            className="bg-white hover:bg-slate-100 p-3 rounded-full backdrop-blur-sm border border-slate-300 text-slate-600 hover:text-slate-900 transition-colors"
          >
            <FaGithub className="text-xl" />
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/jentah-rehema-a48a762a8/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5 }}
            className="bg-white hover:bg-slate-100 p-3 rounded-full backdrop-blur-sm border border-slate-300 text-slate-600 hover:text-slate-900 transition-colors"
          >
            <FaLinkedin className="text-xl" />
          </motion.a>
        </motion.div>

        <motion.div
          className="mt-16 animate-bounce"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <a
            href="#about"
            className="text-slate-600 hover:text-slate-900 transition-colors"
          >
            <div className="flex flex-col items-center">
              <span className="text-sm mb-2">Scroll to explore</span>
              <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-slate-500 rounded-full mt-2"></div>
              </div>
            </div>
          </a>
        </motion.div>
      </div>

      {/* Animated floating elements */}
      <motion.div
        className="absolute bottom-20 left-10 w-4 h-4 rounded-full bg-slate-400/30"
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      />
      <motion.div
        className="absolute top-20 right-20 w-6 h-6 rounded-full bg-slate-300/40"
        animate={{
          y: [0, -30, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          delay: 1,
        }}
      />
      <motion.div
        className="absolute top-1/3 left-20 w-3 h-3 rounded-full bg-slate-500/20"
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          delay: 0.5,
        }}
      />
    </section>
  );
};

export default Hero;
