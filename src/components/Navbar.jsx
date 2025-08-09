import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav
      className="fixed top-1 left-1/2 z-50 -translate-x-1/2 w-[92vw] max-w-6xl rounded-full bg-white/30 backdrop-blur-md shadow-lg border border-white/40 flex items-center justify-between px-6 py-2"
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
        {/* <li>
          <Link
            to="/amenities"
            className="text-gray-800 font-medium hover:text-orange-500 transition-colors tracking-wide"
          >
            Amenities
          </Link>
        </li> */}
      </ul>

      {/* logo1 Centered */}
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
  );
};

export default Navbar;
