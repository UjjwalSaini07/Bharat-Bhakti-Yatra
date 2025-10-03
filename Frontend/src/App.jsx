import React from "react";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import "./index.css";
import "./styles/App.scss";

// Main sections
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

const SacredRitualsSection = () => {
  const rituals = [
    {
      title: "Morning Aarti",
      description: "Start your day with divine blessings",
      image: "/assets/aarti.jpg"
    },
    {
      title: "Evening Prayers", 
      description: "Find peace in sacred evening rituals",
      image: "/assets/prayer.jpg"
    },
    {
      title: "Festival Celebrations",
      description: "Join community celebrations and festivals", 
      image: "/assets/festival.jpg"
    }
  ];

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      {/* Animated Background */}
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
                {/* Orange glow effect */}
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

const SacredVideosSection = () => {
  const videos = [
    {
      title: "Mahaarti Ganga Aarti",
      description: "Experience the divine evening aarti at River Ganga",
      videoId: "NVVJJKOtzAM", // Replace with actual video ID
      thumbnail: "/assets/aarti.jpg"
    },
    {
      title: "Shri Krishna Janmashtami",
      description: "Celebrate the birth of Lord Krishna with devotional songs",
      videoId: "J5Ek8rIErsQ", // Replace with actual video ID
      thumbnail: "/assets/festival.jpg"
    },
    {
      title: "Ganga Dussehra Ghazipur",
      description: "Witness the grand Ganga Dussehra celebrations",
      videoId: "DfEcL29mE0I", // Replace with actual video ID
      thumbnail: "/assets/prayer.jpg"
    }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-50 to-orange-50 overflow-hidden">
      {/* Floating Orange Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-orange-400/30 to-amber-500/30 rounded-full blur-2xl animate-bounce" style={{animationDuration: '3s'}}></div>
        <div className="absolute top-40 right-16 w-24 h-24 bg-gradient-to-tl from-orange-500/25 to-amber-600/25 rounded-full blur-xl animate-bounce" style={{animationDuration: '4s', animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 left-1/3 w-40 h-40 bg-gradient-to-tr from-orange-300/20 to-amber-400/20 rounded-full blur-3xl animate-pulse" style={{animationDuration: '5s'}}></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Sacred Ritual Videos
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Immerse yourself in the divine atmosphere of our sacred ceremonies and festivals
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:shadow-orange-500/25">
                {/* Orange border glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400/0 via-transparent to-amber-600/0 group-hover:from-orange-400/30 group-hover:to-amber-600/30 rounded-xl transition-all duration-500 blur-sm"></div>
                <div className="relative aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.videoId}?rel=0&modestbranding=1`}
                    title={video.title}
                    className="w-full h-full rounded-xl"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-6 bg-white">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {video.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {video.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-orange-500 to-amber-600 text-white px-8 py-3 rounded-full font-semibold hover:from-orange-600 hover:to-amber-700 transition-all transform hover:scale-105 shadow-lg">
            View More Videos
          </button>
        </div>
      </div>
    </section>
  );
};

const CommunitySection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background with temple image */}
      <div className="absolute inset-0">
        <img 
          src="/assets/image temple bg.jpg" 
          alt="Temple Background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/90 to-amber-600/90"></div>
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

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <FeatureCards />
        <SacredRitualsSection />
        <SacredVideosSection />
        <CommunitySection />
      </main>
      <Footer />
    </div>
  );
};

export default App;