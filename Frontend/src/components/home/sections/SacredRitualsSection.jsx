import React from 'react';

const SacredRitualsSection = () => {
  const rituals = [
    {
      title: "Morning Aarti",
      description: "Start your day with divine blessings",
      image: "/assets/hinduism/home/aarti.jpg"
    },
    {
      title: "Evening Prayers", 
      description: "Find peace in sacred evening rituals",
      image: "/assets/hinduism/home/prayer.jpg"
    },
    {
      title: "Festival Celebrations",
      description: "Join community celebrations and festivals", 
      image: "/assets/hinduism/home/festival.jpg"
    }
  ];

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-to-br from-orange-300/20 to-amber-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-tl from-orange-400/15 to-amber-500/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Glimpses of Our Sacred Rituals
          </h2>
          <p className="text-xl text-gray-600">
            Experience the beauty and devotion of our traditional practices
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {rituals.map((ritual, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl mb-4 transform transition-all duration-500 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-amber-600/0 group-hover:from-orange-500/20 group-hover:to-amber-600/20 transition-all duration-500 z-10"></div>
                <img 
                  src={ritual.image} 
                  alt={ritual.title}
                  className={`w-full h-64 transition-transform duration-300 group-hover:scale-110 ${
                    ritual.title === "Evening Prayers" 
                      ? "object-cover object-bottom" 
                      : ritual.title === "Morning Aarti"
                      ? "object-cover object-top"
                      : "object-cover"
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-semibold mb-1">{ritual.title}</h3>
                  <p className="text-sm opacity-90">{ritual.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SacredRitualsSection;