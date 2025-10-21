import React from 'react';

const SacredVideosSection = () => {
  const videos = [
    {
      title: "Mahaarti Ganga Aarti",
      description: "Experience the divine evening aarti at River Ganga",
      videoId: "iplTu8D6JxU",
      thumbnail: "/assets/hinduism/home/aarti.jpg"
    },
    {
      title: "Shri Krishna Janmashtami",
      description: "Celebrate the birth of Lord Krishna with devotional songs",
      videoId: "ZCXCu9_K0lY",
      thumbnail: "/assets/hinduism/home/festival.jpg"
    },
    {
      // Updated title here:
      title: "Ganga Dussehra Haridwar",
      description: "Witness the grand Ganga Dussehra celebrations",
      videoId: "vtifY1PyoWI", // Video ID updated
      thumbnail: "/assets/hinduism/home/prayer.jpg"
    }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-50 to-orange-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-orange-400/30 to-amber-500/30 rounded-full blur-2xl animate-bounce" style={{animationDuration: '3s'}}></div>
        <div className="absolute top-40 right-16 w-24 h-24 bg-gradient-to-tl from-orange-500/25 to-amber-600/25 rounded-full blur-xl animate-bounce" style={{animationDuration: '4s', animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 left-1/3 w-40 h-40 bg-gradient-to-tr from-orange-300/20 to-amber-400/20 rounded-full blur-3xl animate-pulse" style={{animationDuration: '5s'}}></div>
      </div>

      {/* Main content area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Sacred Ritual Videos
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Immerse yourself in the divine atmosphere of our sacred ceremonies and festivals
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <div key={index} className="group">
              {/* Video Card */}
              <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:shadow-orange-500/25">

                {/* Hover gradient effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400/0 via-transparent to-amber-600/0 group-hover:from-orange-400/30 group-hover:to-amber-600/30 rounded-xl transition-all duration-500 blur-sm"></div>

                {/* YouTube Iframe Embed */}
                <div className="relative aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.videoId}?rel=0&modestbranding=1`}
                    title={video.title} // Title used by the iframe
                    className="w-full h-full rounded-xl"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>

                {/* Video Details - Displayed title is updated here */}
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

        {/* "View More" Button */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-orange-500 to-amber-600 text-white px-8 py-3 rounded-full font-semibold hover:from-orange-600 hover:to-amber-700 transition-all transform hover:scale-105 shadow-lg">
            View More Videos
          </button>
        </div>
      </div>
    </section>
  );
};

export default SacredVideosSection;
