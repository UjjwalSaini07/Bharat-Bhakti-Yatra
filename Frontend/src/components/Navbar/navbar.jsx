import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-orange-500 to-green-700 shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo / Title */}
          <a
            href="/" // Changed from '#' to '/'
            className="flex items-center text-white font-bold text-2xl tracking-wide"
          >
            Bharat Bhakti Yatra
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Hrefs changed to slashes */}
            <a href="/features" className="text-white hover:text-yellow-200 transition">
              Features
            </a>
            <a href="/demo" className="text-white hover:text-yellow-200 transition">
              Demo
            </a>
            <a href="/tech" className="text-white hover:text-yellow-200 transition">
              Technologies
            </a>
            <a href="/contact" className="text-white hover:text-yellow-200 transition">
              Contact
            </a>
            {/* GitHub button removed from desktop menu */}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
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
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div id="mobile-menu" className="md:hidden bg-gradient-to-r from-orange-500 to-green-700">
          {/* Hrefs changed to slashes */}
          <a
            href="/features"
            className="block px-4 py-2 text-white hover:bg-white hover:text-orange-600 transition"
            onClick={() => setIsOpen(false)} // Close menu on click
          >
            Features
          </a>
          <a
            href="/demo"
            className="block px-4 py-2 text-white hover:bg-white hover:text-orange-600 transition"
            onClick={() => setIsOpen(false)}
          >
            Demo
          </a>
          <a
            href="/tech"
            className="block px-4 py-2 text-white hover:bg-white hover:text-orange-600 transition"
            onClick={() => setIsOpen(false)}
          >
            Technologies
          </a>
          <a
            href="/contact"
            className="block px-4 py-2 text-white hover:bg-white hover:text-orange-600 transition"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
          {/* GitHub button removed from mobile menu */}
        </div>
      )}
    </nav>
  );
}