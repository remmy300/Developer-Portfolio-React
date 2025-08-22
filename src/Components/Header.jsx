import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Hamburger from "hamburger-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = ["Home", "About", "Projects", "Contact"];

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 backdrop-blur-md text-white shadow-md px-6 md:px-10">
      <div className="flex justify-between items-center h-20">
        <h1 className="text-3xl md:text-4xl font-extrabold italic text-purple-300">
          Jentah.dev
        </h1>

        <nav className="hidden lg:flex gap-8 text-lg font-medium">
          {menuItems.map((item) => (
            <NavLink
              key={item}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className={({ isActive }) =>
                `hover:text-purple-400 transition ${
                  isActive ? "text-purple-300 underline" : ""
                }`
              }
            >
              {item}
            </NavLink>
          ))}
        </nav>

        <div className="lg:hidden">
          <Hamburger
            toggled={isOpen}
            toggle={setIsOpen}
            size={24}
            color="#fff"
          />
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden flex flex-col gap-5 py-6 text-lg font-medium bg-[#1e1b4b] shadow-md rounded-b-xl"
          >
            {menuItems.map((item) => (
              <NavLink
                key={item}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className={({ isActive }) =>
                  `text-center hover:text-purple-400 transition ${
                    isActive ? "text-purple-300 underline" : ""
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                {item}
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
