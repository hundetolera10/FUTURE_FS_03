import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";
import { FaDumbbell, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navStyle = ({ isActive }) =>
    isActive
      ? "text-primary font-semibold"
      : "hover:text-primary transition";

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800"
    >
      <div className="flex justify-between items-center px-6 md:px-10 py-5">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <FaDumbbell className="text-primary text-2xl rotate-[30deg]" />
          <h1 className="text-2xl font-bold tracking-tight">
            BRIGHT GYM
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="space-x-6 hidden md:block">
          <NavLink to="/" className={navStyle}>Home</NavLink>
          <NavLink to="/services" className={navStyle}>Services</NavLink>
          <NavLink to="/plans" className={navStyle}>Plans</NavLink>
          <NavLink to="/contact" className={navStyle}>Contact</NavLink>

          <NavLink
            to="/join"
            className="bg-yellow-400 text-black px-5 py-2 rounded-xl font-semibold hover:bg-yellow-300 transition"
          >
            Join Now
          </NavLink>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-2xl"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            className="md:hidden bg-black border-t border-gray-800 px-6 py-6 space-y-5 text-center"
          >
            <NavLink
              to="/"
              className={navStyle}
              onClick={() => setMenuOpen(false)}
            >
              Home
            </NavLink>

            <div />

            <NavLink
              to="/services"
              className={navStyle}
              onClick={() => setMenuOpen(false)}
            >
              Services
            </NavLink>

            <div />

            <NavLink
              to="/plans"
              className={navStyle}
              onClick={() => setMenuOpen(false)}
            >
              Plans
            </NavLink>

            <div />

            <NavLink
              to="/contact"
              className={navStyle}
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </NavLink>

            <div className="pt-3">
              <NavLink
                to="/join"
                onClick={() => setMenuOpen(false)}
                className="inline-block bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold hover:bg-yellow-300 transition"
              >
                Join Now
              </NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}