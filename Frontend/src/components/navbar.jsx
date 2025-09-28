import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-orange-500 to-green-700 shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo / Title */}
          <a
            href="#"
            className="flex items-center text-white font-bold text-2xl tracking-wide"
          >
             Bharat Bhakti Yatra
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-white hover:text-yellow-200 transition">
              Features
            </a>
            <a href="#demo" className="text-white hover:text-yellow-200 transition">
              Demo
            </a>
            <a href="#tech" className="text-white hover:text-yellow-200 transition">
              Technologies
            </a>
            <a href="#contact" className="text-white hover:text-yellow-200 transition">
              Contact
            </a>
            <a
              href="https://github.com/UjjwalSaini07/Bharat-Bhakti-Yatra"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-orange-600 px-4 py-2 rounded-lg font-semibold shadow hover:bg-gray-100 transition"
            >
              GitHub
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-r from-orange-500 to-green-700">
          <a
            href="#features"
            className="block px-4 py-2 text-white hover:bg-white hover:text-orange-600 transition"
          >
            Features
          </a>
          <a
            href="#demo"
            className="block px-4 py-2 text-white hover:bg-white hover:text-orange-600 transition"
          >
            Demo
          </a>
          <a
            href="#tech"
            className="block px-4 py-2 text-white hover:bg-white hover:text-orange-600 transition"
          >
            Technologies
          </a>
          <a
            href="#contact"
            className="block px-4 py-2 text-white hover:bg-white hover:text-orange-600 transition"
          >
            Contact
          </a>
          <a
            href="https://github.com/UjjwalSaini07/Bharat-Bhakti-Yatra"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-4 py-2 bg-white text-orange-600 font-semibold"
          >
            GitHub
          </a>
        </div>
      )}
    </nav>
  );
}

