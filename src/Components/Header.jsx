import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Hamburger from "hamburger-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Projects", path: "/projects" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur text-slate-900 px-6 md:px-10">
      <div className="flex justify-between items-center h-20 max-w-6xl mx-auto">
        <div>
          <h1 className="text-2xl md:text-4xl font-black tracking-tight text-slate-900">
            Jentah
          </h1>
          <p className="text-xs md:text-sm text-slate-500">Frontend Engineer</p>
        </div>

        <nav className="hidden lg:flex gap-8 text-base font-medium items-center">
          {menuItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              className={({ isActive }) =>
                `transition ${
                  isActive
                    ? "text-slate-900"
                    : "text-slate-500 hover:text-slate-900"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="rounded-full bg-slate-900 px-5 py-2 font-semibold text-white hover:bg-slate-700 transition-colors"
          >
            Hire Me
          </Link>
        </nav>

        <div className="lg:hidden">
          <Hamburger
            toggled={isOpen}
            toggle={setIsOpen}
            size={24}
            color="#0f172a"
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
            className="lg:hidden flex flex-col gap-5 py-6 text-lg font-medium bg-white shadow-md rounded-b-xl border border-slate-200"
          >
            {menuItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.path}
                className={({ isActive }) =>
                  `text-center transition ${
                    isActive
                      ? "text-slate-900"
                      : "text-slate-500 hover:text-slate-900"
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="mx-auto rounded-full bg-slate-900 px-5 py-2 font-semibold text-white hover:bg-slate-700 transition-colors"
            >
              Hire Me
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
