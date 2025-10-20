import React from 'react';

const CommunitySection = () => {
  return (
    <section className="relative py-20 overflow-hidden"
      style={{
          background: "linear-gradient(135deg, #9f1239 0%, #f97316 50%, #14532d 100%)",
        }}
    >
      <div className="absolute inset-0">
        <img 
          src="/assets/hinduism/home/image_temple_bg.jpg" 
          alt="Temple Background" 
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        <div className="text-white">
          <h2 className="text-4xl font-bold mb-6">
            Join Our Devotional Community
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Connect with fellow devotees, share your spiritual journey, and grow together in faith and devotion.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="bg-white text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg">
              Join Community
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-orange-600 transition-all transform hover:scale-105">
              Learn More
            </button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="relative bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:border-orange-300/50 transition-all duration-500 group">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400/10 to-amber-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="text-3xl font-bold mb-2 group-hover:text-orange-200 transition-colors duration-300">10,000+</div>
                <div className="opacity-90 group-hover:opacity-100 transition-opacity duration-300">Active Devotees</div>
              </div>
            </div>
            <div className="relative bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:border-orange-300/50 transition-all duration-500 group">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400/10 to-amber-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="text-3xl font-bold mb-2 group-hover:text-orange-200 transition-colors duration-300">500+</div>
                <div className="opacity-90 group-hover:opacity-100 transition-opacity duration-300">Sacred Places</div>
              </div>
            </div>
            <div className="relative bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:border-orange-300/50 transition-all duration-500 group">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400/10 to-amber-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="text-3xl font-bold mb-2 group-hover:text-orange-200 transition-colors duration-300">24/7</div>
                <div className="opacity-90 group-hover:opacity-100 transition-opacity duration-300">Divine Connection</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;