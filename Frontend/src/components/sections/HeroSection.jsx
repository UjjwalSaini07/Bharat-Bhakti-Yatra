import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0">
        <img 
          src="/assets/image temple bg.jpg" 
          alt="Temple Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/40 via-amber-600/30 to-orange-700/50"></div>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight drop-shadow-lg">
          Join the Digital Yatra
        </h1>
        <p className="text-xl md:text-2xl mb-4 font-light drop-shadow-md">
          Unite in Devotion
        </p>
        <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto drop-shadow-md">
          Embark on a spiritual journey that connects devotees across the digital realm, 
          fostering unity and devotion in our sacred traditions.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-white text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl">
            Explore Yatra
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-orange-600 transition-all transform hover:scale-105">
            Join Community
          </button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;