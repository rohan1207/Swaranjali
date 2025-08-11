import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav
        className="hidden lg:flex fixed top-1 left-1/2 z-50 -translate-x-1/2 w-[92vw] max-w-6xl rounded-full bg-white/30 backdrop-blur-md shadow-lg border border-white/40 items-center justify-between px-6 py-2"
        style={{
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.15)",
          border: "1.5px solid rgba(255,255,255,0.25)",
        }}
      >
        {/* Left Menu */}
        <ul className="flex items-center space-x-6">
          <li>
            <Link
              to="/services"
              className="text-gray-800 font-medium transition-all tracking-wide relative group"
            >
              <span className="group-hover:text-white group-hover:scale-105 transition-all duration-200 inline-block">
                Services
              </span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white rounded-full group-hover:w-full transition-all duration-300"></span>
            </Link>
          </li>
          <li>
            <Link
              to="/rooms"
              className="text-gray-800 font-medium transition-all tracking-wide relative group"
            >
              <span className="group-hover:text-white group-hover:scale-105 transition-all duration-200 inline-block">
                Our Rooms
              </span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white rounded-full group-hover:w-full transition-all duration-300"></span>
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-gray-800 font-medium transition-all tracking-wide relative group"
            >
              <span className="group-hover:text-white group-hover:scale-105 transition-all duration-200 inline-block">
                About Us
              </span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white rounded-full group-hover:w-full transition-all duration-300"></span>
            </Link>
          </li>
        </ul>

        {/* Logo Centered */}
        <div className="flex-shrink-0 flex items-center justify-center mx-4">
          <Link to="/">
            <img
              src="/logo1.png"
              alt="SWARANJALI logo1"
              className="h-20 w-auto drop-shadow-md"
              style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.10))" }}
            />
          </Link>
        </div>

        {/* Right Menu */}
        <ul className="flex items-center space-x-6">
          <li>
            <Link
              to="/gallery"
              className="text-gray-800 font-medium transition-all tracking-wide relative group"
            >
              <span className="group-hover:text-white group-hover:scale-105 transition-all duration-200 inline-block">
                Our Gallery
              </span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white rounded-full group-hover:w-full transition-all duration-300"></span>
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-gray-800 font-medium transition-all tracking-wide relative group"
            >
              <span className="group-hover:text-white group-hover:scale-105 transition-all duration-200 inline-block">
                Contact
              </span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white rounded-full group-hover:w-full transition-all duration-300"></span>
            </Link>
          </li>
          <li>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-pink-500 text-xl transition-colors"
            >
              <FaInstagram />
            </a>
          </li>
          <li>
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-600 text-xl transition-colors"
            >
              <FaFacebookF />
            </a>
          </li>
          <li>
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-green-500 text-xl transition-colors"
            >
              <FaWhatsapp />
            </a>
          </li>
        </ul>
      </nav>

      {/* Mobile Navbar */}
      <nav
        className="lg:hidden fixed top-2 left-1/2 z-50 -translate-x-1/2 w-[95vw] rounded-md bg-white/30 backdrop-blur-md shadow-lg border border-white/40 px-4 py-3"
        style={{
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.15)",
          border: "1.5px solid rgba(255,255,255,0.25)",
        }}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" onClick={closeMenu}>
            <img
              src="/logo1.png"
              alt="SWARANJALI logo1"
              className="h-12 w-auto drop-shadow-md"
              style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.10))" }}
            />
          </Link>

          {/* Hamburger Menu Button */}
          <button
            onClick={toggleMenu}
            className="text-gray-800 hover:text-white transition-colors duration-200 text-2xl p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="pt-4 pb-2">
            <ul className="space-y-3">
              <li>
                <Link
                  to="/services"
                  onClick={closeMenu}
                  className="block text-gray-800 font-medium hover:text-white transition-colors duration-200 py-2 px-3 rounded-md hover:bg-white/20"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/rooms"
                  onClick={closeMenu}
                  className="block text-gray-800 font-medium hover:text-white transition-colors duration-200 py-2 px-3 rounded-md hover:bg-white/20"
                >
                  Our Rooms
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  onClick={closeMenu}
                  className="block text-gray-800 font-medium hover:text-white transition-colors duration-200 py-2 px-3 rounded-md hover:bg-white/20"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  onClick={closeMenu}
                  className="block text-gray-800 font-medium hover:text-white transition-colors duration-200 py-2 px-3 rounded-md hover:bg-white/20"
                >
                  Our Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={closeMenu}
                  className="block text-gray-800 font-medium hover:text-white transition-colors duration-200 py-2 px-3 rounded-md hover:bg-white/20"
                >
                  Contact
                </Link>
              </li>
            </ul>

            {/* Social Media Icons */}
            <div className="flex items-center justify-center space-x-6 mt-4 pt-3 border-t border-white/20">
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-pink-500 text-xl transition-colors duration-200"
              >
                <FaInstagram />
              </a>
              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-600 text-xl transition-colors duration-200"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-green-500 text-xl transition-colors duration-200"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
