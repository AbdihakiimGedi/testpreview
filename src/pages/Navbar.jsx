import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpeg";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleMenuClick = () => setOpen(false);

  const scrollToSection = (id) => {
    if (location.pathname === "/") {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/"); // Go to home first
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
    setOpen(false);
  };

  return (
    <nav className="w-full bg-white dark:bg-gray-900 shadow fixed top-0 left-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* LOGO */}
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => scrollToSection("hero")}
        >
          <img
            src={logo}
            alt="Ocean Beauty Logo"
            className="w-12 h-12 rounded-full object-cover shadow"
          />
          <h1 className="text-3xl font-bold text-blue-700 dark:text-blue-400 tracking-wide">
            OCEAN BEAUTY
          </h1>
        </div>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-8 text-gray-700 dark:text-gray-200 font-medium text-lg">
          <li>
            <Link to="/" onClick={() => scrollToSection("hero")}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/" onClick={() => scrollToSection("services")}>
              Services
            </Link>
          </li>
          <li>
            <Link to="/" onClick={() => scrollToSection("about")}>
              About us
            </Link>
          </li>
          <li>
            <Link to="/" onClick={() => scrollToSection("contact")}>
              Contact us
            </Link>
          </li>
        </ul>

        {/* TOGGLE + MOBILE MENU */}
        <div className="flex items-center gap-4">
          {/* Dark Mode Toggle */}
          <button
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "🌙" : "☀️"}
          </button>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-gray-700 dark:text-gray-200 text-3xl"
            onClick={() => setOpen(!open)}
          >
            {open ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {open && (
        <ul className="md:hidden bg-white dark:bg-gray-900 shadow-inner py-4 px-6 space-y-4 text-gray-700 dark:text-gray-200 font-medium text-lg animate-slideDown transition-colors duration-300">
          <li onClick={() => scrollToSection("hero")}>Home</li>
          <li onClick={() => scrollToSection("services")}>Services</li>
          <li onClick={() => scrollToSection("about")}>About us</li>
          <li onClick={() => scrollToSection("contact")}>Contact us</li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
