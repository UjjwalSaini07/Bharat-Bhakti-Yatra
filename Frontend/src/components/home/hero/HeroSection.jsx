import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/assets/hinduism/home/image_temple_bg.jpg"
          alt="Temple Background"
          className="w-full h-full object-cover scale-110 blur-[3px] opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-orange-600/60 via-orange-700/50 to-orange-900/80"></div>
      </div>

      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto mt-12">
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-72 h-72 bg-amber-300/20 rounded-full blur-[80px]"></div>

        <h1 style ={{fontFamily: 'Playfair Display'}} className="text-5xl md:text-7xl lg:text-7xl font-bold mb-6 drop-shadow-[0_5px_30px_rgba(255,200,150,0.5)] tracking-wide">
          Bharat Bhakti Yatra
        </h1>

        <p className="font-playfair text-2xl md:text-3xl text-amber-200 mb-4 italic">
          आत्मा से आत्मा का मिलन
        </p>

        <p className="text-lg md:text-2xl text-white/90 mb-10 leading-relaxed">
          Embark on a sacred digital pilgrimage. Experience the divine essence of Hindu culture, 
          ancient temples, devotional music, and spiritual wisdom.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="px-8 py-3 rounded-full font-semibold bg-gradient-to-r from-amber-400 to-yellow-500 text-orange-900 shadow-lg hover:shadow-amber-300/40 hover:scale-105 transition-all">
            Begin Your Journey
          </button>
          <button className="px-8 py-3 rounded-full font-semibold border border-white/70 text-white backdrop-blur-md bg-white/10 hover:bg-white/20 hover:scale-105 transition-all shadow-lg">
            Explore Temples
          </button>
        </div>

        <div className="mt-16 pt-10 border-t border-white/20">
          <p className="font-playfair text-lg md:text-xl text-amber-200 italic">
            "सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः"
          </p>
          <p className="text-white/70 mt-2">
            May all be happy, may all be free from disease
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-orange-50/60 to-transparent" />
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>

      <style>{`
        @keyframes pulseSlow {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.05); }
        }
        .animate-pulse-slow {
          animation: pulseSlow 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
