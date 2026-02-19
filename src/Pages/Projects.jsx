import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaTimes,
  FaArrowRight,
} from "react-icons/fa";
import taskManager from "../assets/task-manager.png";
import movie from "../assets/movie.png";
import jobTracker from "../assets/job-tracker.png";
import recipe from "../assets/recipe.png";
import coffee from "../assets/coffee.png";

const projects = [
  {
    title: "Task Manager App",
    img: taskManager,
    description:
      "Task planning workspace with due dates, categories, status tracking, and cloud sync for daily productivity.",
    tech: ["React", "Firebase", "Tailwind CSS", "Framer Motion"],
    tags: ["frontend", "firebase"],
    github: "https://github.com/remmy300/task-manager-react.git",
    demo: "https://task-manager-react-dhuk-kpkk5fidd-jentah-rehemas-projects.vercel.app/",
  },

  {
    title: "Movie Discovery App",
    img: movie,
    description:
      "Movie explorer with search, filters, and rich metadata sourced from external APIs.",
    tech: ["React", "Axios", "Tailwind CSS", "REST API"],
    tags: ["frontend", "api"],
    github: "https://github.com/remmy300/Movie-App",
    demo: "https://movie-app-two-eta-90.vercel.app/",
  },
  {
    title: "Job Tracker Dashboard",
    img: jobTracker,
    description:
      "Manage job applications, pipeline status, notes, and priorities from a single dashboard.",
    tech: ["React", "Firebase", "TypeScript", "Tailwind CSS"],
    tags: ["frontend", "firebase"],
    github: "https://github.com/remmy300/job-tracker-react.git",
    demo: "https://job-tracker-react.vercel.app/",
  },
  {
    title: "Coffee Shop Platform",
    img: coffee,
    description:
      "Modern cafe ordering experience with product catalog, cart flow, and clean admin-ready architecture.",
    tech: ["MERN", "TypeScript", "context API ", "Tailwind CSS"],
    tags: ["frontend", "fullstack"],
    github: "https://github.com/remmy300/coffee-app.git",
    demo: "https://coffee-app-ed1d.vercel.app/",
  },
  {
    title: "Recipe Sharing App",
    img: recipe,
    description:
      "Community-focused recipe sharing app with image posts, save-to-collection, and lightweight social features.",
    tech: ["MERN", "TypeScript", "Cloud Storage", "Tailwind CSS", "ShadCn"],
    tags: ["frontend", "fullstack"],
    github: "https://github.com/remmy300/recipe-hub.git",
    demo: "https://recipe-hub-snowy.vercel.app/",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState("all");

  const filters = ["all", "frontend", "fullstack", "firebase", "api"];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.tags.includes(filter));

  return (
    <section
      id="projects"
      className="relative py-20 px-4 md:px-8 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
            My Projects
          </h2>
          <div className="w-32 h-1 bg-slate-300 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Selected work focused on product-quality UX, maintainable component
            architecture, and reliable frontend performance.
          </p>
        </motion.div>

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
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors border ${
                filter === filterItem
                  ? "bg-slate-900 border-slate-900 text-white"
                  : "bg-white border-slate-300 text-slate-700 hover:border-slate-500"
              }`}
            >
              {filterItem.charAt(0).toUpperCase() + filterItem.slice(1)}
            </button>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative h-48 overflow-hidden bg-slate-100">
                {project.img ? (
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-slate-700 text-lg font-bold px-4 text-center">
                    Coffee Shop Platform
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <h3 className="text-xl font-bold text-white">
                    {project.title}
                  </h3>
                </div>
                <div className="absolute top-3 right-3 flex gap-2">
                  {project.tech.slice(0, 2).map((tech, i) => (
                    <span
                      key={i}
                      className="bg-white border border-slate-300 text-xs font-medium py-1 px-2 rounded-full text-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-600 mb-4 min-h-12">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs font-medium text-slate-700 bg-slate-100 py-1 px-2 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center pt-3 border-t border-slate-200">
                  <button className="text-sm font-medium text-slate-700 hover:text-slate-900 flex items-center gap-2">
                    View Case Study
                    <FaArrowRight className="text-xs" />
                  </button>
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-slate-500 hover:text-slate-900 transition-colors"
                    >
                      <FaGithub className="text-lg" />
                    </a>
                    {project.demo ? (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-slate-500 hover:text-slate-900 transition-colors"
                      >
                        <FaExternalLinkAlt className="text-lg" />
                      </a>
                    ) : (
                      <span className="text-xs rounded-full border border-slate-300 px-2 py-1 text-slate-500">
                        Demo soon
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-white border border-slate-200 rounded-xl overflow-hidden max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                {selectedProject.img ? (
                  <img
                    src={selectedProject.img}
                    alt={selectedProject.title}
                    className="w-full h-56 object-cover"
                  />
                ) : (
                  <div className="w-full h-56 bg-slate-100 flex items-center justify-center text-slate-700 text-2xl font-bold text-center px-4">
                    {selectedProject.title}
                  </div>
                )}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 bg-white text-slate-700 hover:bg-slate-100 rounded-full p-2 transition-colors border border-slate-300"
                >
                  <FaTimes className="text-lg" />
                </button>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  {selectedProject.title}
                </h3>

                <p className="text-slate-600 mb-6">
                  {selectedProject.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-medium text-slate-900 mb-3">
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

                <div className="flex gap-4 pt-4 border-t border-slate-200">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-slate-900 text-white py-2.5 px-5 rounded-lg hover:bg-slate-700 transition-colors font-medium"
                  >
                    <FaGithub />
                    View Code
                  </a>
                  {selectedProject.demo ? (
                    <a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-slate-200 text-slate-900 py-2.5 px-5 rounded-lg hover:bg-slate-300 transition-colors font-medium"
                    >
                      <FaExternalLinkAlt />
                      Live Demo
                    </a>
                  ) : (
                    <span className="flex items-center gap-2 bg-slate-100 text-slate-500 py-2.5 px-5 rounded-lg font-medium">
                      Demo coming soon
                    </span>
                  )}
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
