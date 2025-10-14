import React from 'react';

const FeatureCards = () => {
  const features = [
    {
      icon: "🌟",
      title: "Unity in Diversity",
      description: "Celebrate the diverse traditions and practices that unite us in our spiritual journey."
    },
    {
      icon: "🏛️", 
      title: "Sacred Sites",
      description: "Discover and explore the most revered temples and sacred places across our heritage."
    },
    {
      icon: "🎨",
      title: "Cultural Harmony", 
      description: "Experience the rich cultural tapestry that weaves together our spiritual traditions."
    },
    {
      icon: "🌱",
      title: "Inner Growth",
      description: "Nurture your spiritual development through guided practices and community wisdom."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Your Spiritual Journey Awaits
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the pillars of devotion that guide us on our path to enlightenment
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="relative bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden group">
              {/* Animated Orange Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400/10 via-amber-500/10 to-orange-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br from-orange-400 to-amber-600 rounded-full opacity-10 group-hover:opacity-20 group-hover:scale-150 transition-all duration-700"></div>
              <div className="absolute -bottom-5 -left-5 w-16 h-16 bg-gradient-to-tr from-orange-500 to-amber-500 rounded-full opacity-10 group-hover:opacity-25 group-hover:scale-125 transition-all duration-500"></div>
              
              <div className="relative z-10">
                <div className="text-4xl mb-4 text-center transform group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center group-hover:text-orange-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;