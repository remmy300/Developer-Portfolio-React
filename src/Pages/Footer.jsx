import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className=" text-white py-12 px-8">
      {/* Animated background elements */}

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto text-center md:text-left">
        <div>
          <h3 className="text-3xl font-bold text-purple-300 mb-2">
            Jentah Rehema
          </h3>
          <p className="text-lg italic text-purple-200">
            Crafting clean and creative UIs
          </p>
        </div>

        <div>
          <h4 className="text-2xl font-semibold text-purple-300 mb-3">
            Quick Links
          </h4>
          <ul className="space-y-2 text-purple-100 text-lg">
            <li>
              <HashLink smooth to="/#about" className="hover:underline">
                About
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#contact" className="hover:underline">
                Contact
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#projects" className="hover:underline">
                Projects
              </HashLink>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-purple-300 mb-3">
            Connect
          </h3>
          <div className="flex justify-center md:justify-start gap-5">
            <a
              href="https://github.com/remmy300"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition"
            >
              <FaGithub size={30} />
            </a>
            <a
              href="https://linkedin.com/in/jentah-rehema"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition"
            >
              <FaLinkedin size={30} />
            </a>
            <a
              href="mailto:jentahrehema7@gmail.com"
              className="hover:scale-110 transition"
            >
              <MdEmail size={30} />
            </a>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="mt-8 text-center text-sm text-purple-200"
      >
        © {new Date().getFullYear()}{" "}
        <span className="font-bold text-purple-300">Jentah Rehema</span>. All
        rights reserved.
      </motion.div>
    </footer>
  );
};

export default Footer;
