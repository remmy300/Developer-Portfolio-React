import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";
import resume from "../assets/resume.png";
import taskManager from "../assets/task-manager.png";
import movie from "../assets/movie.png";
import jobTracker from "../assets/job-tracker.png";

const projects = [
  {
    title: "Task Manager App",
    img: taskManager,
    description:
      "A responsive task management app built with features including filtering, due dates, and real-time syncing with Firestore.",
    tech: ["React", "Firebase", "Tailwind CSS"],
    github: "https://github.com/remmy300/task-manager-react.git",
    demo: "https://task-manager-react-dhuk-kpkk5fidd-jentah-rehemas-projects.vercel.app/",
  },
  {
    title: "Resume Builder App",
    img: resume,
    description:
      "Build a professional resume using simple form inputs with real-time preview and PDF export functionality.",
    tech: ["React", "Tailwind CSS", "html2pdf"],
    github: "https://github.com/remmy300/Resume-App",
    demo: "https://resume-app-xi-silk.vercel.app/",
  },
  {
    title: "Movie Discovery App",
    img: movie,
    description:
      "Browse and search movies using an external API with detailed information and filtering options.",
    tech: ["React", "Axios", "Tailwind CSS", "REST API"],
    github: "https://github.com/remmy300/Movie-App",
    demo: "https://movie-app-two-eta-90.vercel.app/",
  },
  {
    title: "Job Tracker Dashboard",
    img: jobTracker,
    description:
      "Track your job applications, manage statuses, add excitement ratings, and never lose sight of your job hunt progress — all in one beautiful dashboard.",
    tech: ["React", "Firebase", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/remmy300/job-tracker-react.git",
    demo: "https://job-tracker-react.vercel.app/",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState("all");

  const filters = ["all", "react", "firebase", "api"];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) =>
          project.tech.some((tech) => tech.toLowerCase().includes(filter))
        );

  return (
    <section
      id="projects"
      className="relative py-20 px-4 md:px-8   overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">
            My Projects
          </h2>
          <div className="w-32 h-1 bg-purple-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-100 max-w-2xl mx-auto">
            Here's a collection of my recent work. Each project represents my
            passion for creating functional, beautiful, and user-centered
            applications.
          </p>
        </motion.div>

        {/* Filter buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {filters.map((filterItem) => (
            <button
              key={filterItem}
              onClick={() => setFilter(filterItem)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === filterItem
                  ? "bg-purple-600 text-white"
                  : "bg-white text-slate-700 hover:bg-slate-100 shadow-sm"
              }`}
            >
              {filterItem.charAt(0).toUpperCase() + filterItem.slice(1)}
            </button>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-slate-800 backdrop-blur-md rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <h3 className="text-xl font-bold text-white">
                    {project.title}
                  </h3>
                </div>
                <div className="absolute top-3 right-3 flex gap-2">
                  {project.tech.slice(0, 2).map((tech, i) => (
                    <span
                      key={i}
                      className="bg-white/90 text-xs font-medium py-1 px-2 rounded-full text-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-5 bg-white/5">
                <p className="text-gray-100 mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs font-medium text-slate-500 bg-slate-100 py-1 px-2 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center pt-3 border-t border-slate-100">
                  <button className="text-sm font-medium text-purple-200 hover:text-purple-400  flex items-center">
                    View Details
                  </button>
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-purple-200 hover:text-purple-400 transition-colors"
                    >
                      <FaGithub className="text-lg" />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-purple-200 hover:text-purple-400 transition-colors"
                    >
                      <FaExternalLinkAlt className="text-lg" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-white/10 rounded-xl overflow-hidden max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedProject.img}
                  alt={selectedProject.title}
                  className="w-full h-56 object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 bg-white/90 text-slate-800 hover:bg-white rounded-full p-2 transition-colors"
                >
                  <FaTimes className="text-lg" />
                </button>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-100 mb-2">
                  {selectedProject.title}
                </h3>

                <p className="text-gray-100 mb-6">
                  {selectedProject.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-medium text-gray-100 mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-slate-100 text-slate-700 text-sm font-medium py-1.5 px-3 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 pt-4 border-t border-slate-100">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-white/5 text-white py-2.5 px-5 rounded-lg hover:bg-slate-900 transition-colors font-medium"
                  >
                    <FaGithub />
                    View Code
                  </a>
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-purple-600 text-white py-2.5 px-5 rounded-lg hover:bg-purple-700 transition-colors font-medium"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
