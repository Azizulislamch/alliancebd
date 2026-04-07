import { useState, useEffect } from "react";
import { NavLink } from "react-router";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "../../../assets/images/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "About Us", to: "/about" },
    { label: "Buying House", to: "/buying-house" },
    { label: "Factory & Machinery", to: "/factory" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-4" : "bg-white/90 backdrop-blur-md py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* LEFT: LOGO */}
        <div className="flex items-center">
          <NavLink to="/">
            <img
              src={logo}
              alt="logo"
              className="h-6 sm:h-10 object-contain cursor-pointer"
            />
          </NavLink>
        </div>

        {/* CENTER: MENU (Desktop) */}
        <ul className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.label}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `text-[17px] font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-cyan-500 font-bold"
                      : "text-gray-700 hover:text-cyan-500"
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* RIGHT: CONTACT BUTTON (Desktop) & MOBILE MENU ICON */}
        <div className="flex items-center gap-4">
          <NavLink to="/contact" className="hidden lg:block">
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2.5 rounded-lg font-semibold transition shadow-sm">
              Contact US
            </button>
          </NavLink>

          {/* Hamburger Menu Icon */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-gray-800 p-2"
          >
            {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU (Mobile) */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-100 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col p-6 gap-4">
          {navLinks.map((link) => (
            <li key={link.label}>
              <NavLink
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `block text-lg font-medium py-2 ${
                    isActive ? "text-cyan-500" : "text-gray-700"
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
          <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
            <button className="w-full bg-cyan-500 text-white py-3 rounded-lg font-bold mt-2">
              Contact US
            </button>
          </NavLink>
        </ul>
      </div>
    </nav>
  );
}