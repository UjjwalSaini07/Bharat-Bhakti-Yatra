import React, { useState, useRef, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const { user, isAuthenticated, logout } = useAuthStore();

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/">
            <div className="flex items-center">
              <div className="w-10 h-10 flex items-center justify-center mr-3">
                <img 
                  width="64" 
                  height="64" 
                  src="https://img.icons8.com/external-icongeek26-linear-colour-icongeek26/64/external-om-india-icongeek26-linear-colour-icongeek26.png" 
                  alt="logo"
                  className="w-8 h-8 object-contain"
                />
              </div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                Bharat Bhakti Yatra
              </h1>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">Home</a>
            <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">Pujas</a>
            <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">Chatdhara</a>
            <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">Astrology</a>
            <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">Kundli</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-700 hover:text-orange-500 transition-colors p-2 rounded-full hover:bg-orange-50">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {isAuthenticated ? (
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200 transition"
                >
                  <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold">
                    {user?.name?.charAt(0).toUpperCase() || "U"}
                  </div>
                  <span className="font-medium">{user?.name}</span>
                  <svg className="w-4 h-4 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-100 rounded-xl shadow-lg transform transition-all duration-200 origin-top">
                    <Link to="/profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-t-xl transition">👤 My Profile</Link>
                    <Link to="/terms" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition">Terms & Conditions</Link>
                    <Link to="/privacy" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition">Privacy Policy</Link>
                    <button onClick={logout} className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50 rounded-b-xl transition">Logout</button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex justify-center gap-4">
                <Link
                  to="/signup"
                  className="px-6 py-2 bg-orange-500 text-white font-semibold rounded-lg shadow hover:bg-orange-600 transition"
                >
                  Signup
                </Link>
                <Link
                  to="/login"
                  className="px-6 py-2 bg-green-600 text-white font-semibold rounded-lg shadow hover:bg-green-700 transition"
                >
                  Login
                </Link>
              </div>
            )}
          </div>

          <button 
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">Home</a>
              <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">Pujas</a>
              <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">Chatdhara</a>
              <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">Astrology</a>
              <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">Kundli</a>

              {isAuthenticated ? (
                <>
                  <Link to="/profile" className="text-gray-700 hover:text-orange-500">👤 My Profile</Link>
                  <Link to="/terms" className="text-gray-700 hover:text-orange-500">📄 Terms & Conditions</Link>
                  <Link to="/privacy" className="text-gray-700 hover:text-orange-500">🔐 Privacy Policy</Link>
                  <button onClick={logout} className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition-all font-medium self-start">
                    Logout
                  </button>
                </>
              ) : (
                <Link to="/login" className="bg-gradient-to-r from-orange-500 to-amber-600 text-white px-6 py-2 rounded-full hover:from-orange-600 hover:to-amber-700 transition-all font-medium self-start">
                  Join Now
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
