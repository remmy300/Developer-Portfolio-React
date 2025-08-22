import { motion } from "framer-motion";
import { FaArrowRight, FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";

const Hero = () => {
  const handleDownloadResume = () => {
    // This would trigger your resume download functionality
    console.log("Download resume");
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-6 text-center overflow-hidden ">
      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          className="text-6xl mb-6"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
        >
          👩🏽‍💻
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-6"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-100 leading-tight mb-4">
            Hi, I'm <span className="">Jentah Rehema</span>
          </h1>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "200px" }}
            transition={{ delay: 1, duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-6"
          ></motion.div>
        </motion.div>

        <motion.p
          className="mt-4 text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          A passionate{" "}
          <span className="font-semibold text-purple-300">
            Frontend Developer
          </span>{" "}
          specializing in creating{" "}
          <span className="font-semibold text-blue-300">responsive</span> and{" "}
          <span className="font-semibold text-pink-300">user-friendly</span> web
          experiences with modern technologies.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#projects"
            className="bg-slate-700 hover:bg-slate-600 border border-slate-600 text-purple-300 font-medium py-3 px-8 rounded-full shadow-lg transition-all flex items-center gap-2"
          >
            View My Work
            <FaArrowRight className="text-sm" />
          </motion.a>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleDownloadResume}
            className="bg-slate-700 hover:bg-slate-600 border border-slate-600 text-purple-300 font-medium py-3 px-8 rounded-full shadow-lg transition-all flex items-center gap-2"
          >
            Download CV
            <FaDownload className="text-sm" />
          </motion.button>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:jentahrehema7@gmail.com"
            className="bg-slate-700 hover:bg-slate-600 border border-slate-600  text-purple-300  font-medium py-3 px-8 rounded-full transition-all"
          >
            Let's Talk
          </motion.a>
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
            className="bg-slate-700/50 hover:bg-slate-600/50 p-3 rounded-full backdrop-blur-sm border border-slate-700 text-slate-300 hover:text-white transition-colors"
          >
            <FaGithub className="text-xl" />
          </motion.a>

          <motion.a
            href="https://linkedin.com/in/jentahrehema"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5 }}
            className="bg-slate-700/50 hover:bg-slate-600/50 p-3 rounded-full backdrop-blur-sm border border-slate-700 text-slate-300 hover:text-white transition-colors"
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
            className="text-slate-200 hover:text-white transition-colors"
          >
            <div className="flex flex-col items-center">
              <span className="text-sm mb-2">Scroll to explore</span>
              <div className="w-6 h-10 border-2 border-slate-500 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-slate-400 rounded-full mt-2"></div>
              </div>
            </div>
          </a>
        </motion.div>
      </div>

      {/* Animated floating elements */}
      <motion.div
        className="absolute bottom-20 left-10 w-4 h-4 rounded-full bg-purple-500/20"
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      />
      <motion.div
        className="absolute top-20 right-20 w-6 h-6 rounded-full bg-blue-500/20"
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
        className="absolute top-1/3 left-20 w-3 h-3 rounded-full bg-cyan-500/20"
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
