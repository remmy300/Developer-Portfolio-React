import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import resume from "../assets/resume.png";
import recipe from "../assets/recipe.png";
import movie from "../assets/movie.png";

const projects = [
  {
    title: "Recipe App",
    img: recipe,
    description: "Search and explore tasty recipes with ingredient filters.",
    tech: "React · API · Tailwind",
    github: "https://github.com/remmy300/Recipe-App",
    demo: "https://recipe-app-black-two.vercel.app/",
  },
  {
    title: "Resume App",
    img: resume,
    description: "Build a professional resume using simple form inputs.",
    tech: "React · Tailwind",
    github: "https://github.com/remmy300/Resume-App",
    demo: "https://resume-app-xi-silk.vercel.app/",
  },
  {
    title: "Movie App",
    img: movie,
    description: "Browse and search movies using an external API.",
    tech: "React · Axios · Tailwind",
    github: "https://github.com/remmy300/Movie-App",
    demo: "https://movie-app-two-eta-90.vercel.app/",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="projects"
      className="bg-gradient-to-b from-[#1e1b4b] to-[#312e81] py-20 px-6 text-white relative"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-5xl font-extrabold text-center text-purple-300 mb-12"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden shadow-lg hover:shadow-2xl cursor-pointer"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                  <h3 className="text-xl font-bold text-white">
                    {project.title}
                  </h3>
                </div>
              </div>
              <div className="p-5 space-y-3">
                <p className="text-gray-200">{project.description}</p>
                <p className="text-sm font-medium text-cyan-300">
                  {project.tech}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-white rounded-xl p-6 max-w-md w-full text-gray-800 relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-2 right-3 text-gray-400 hover:text-red-500 text-xl"
              >
                &times;
              </button>
              <img
                src={selectedProject.img}
                alt={selectedProject.title}
                className="rounded-md mb-4"
              />
              <h3 className="text-2xl font-bold mb-2">
                {selectedProject.title}
              </h3>
              <p className="text-sm mb-2">{selectedProject.description}</p>
              <p className="text-sm mb-4 text-purple-600 font-medium">
                {selectedProject.tech}
              </p>
              <div className="flex justify-between text-sm font-semibold">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-700 hover:underline"
                >
                  View Code →
                </a>
                <a
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-700 hover:underline"
                >
                  Live Demo →
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
