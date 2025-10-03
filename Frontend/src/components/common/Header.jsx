import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="w-10 h-10 flex items-center justify-center mr-3">
              <img 
                width="64" 
                height="64" 
                src="https://img.icons8.com/external-icongeek26-linear-colour-icongeek26/64/external-om-india-icongeek26-linear-colour-icongeek26.png" 
                alt="external-om-india-icongeek26-linear-colour-icongeek26"
                className="w-8 h-8 object-contain"
              />
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
              Bharat Bhakti Yatra
            </h1>
          </div>

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
            <button className="bg-gradient-to-r from-orange-500 to-amber-600 text-white px-6 py-2 rounded-full hover:from-orange-600 hover:to-amber-700 transition-all transform hover:scale-105 font-medium">
              Join Now
            </button>
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
              <button className="bg-gradient-to-r from-orange-500 to-amber-600 text-white px-6 py-2 rounded-full hover:from-orange-600 hover:to-amber-700 transition-all font-medium self-start">
                Join Now
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
