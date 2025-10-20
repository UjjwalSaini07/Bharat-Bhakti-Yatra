import { Card } from "@/components/ui/card";
import { Music, Play, Pause, Heart } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const bhajans = [
  { id: 1, title: "Om Jai Jagdish Hare", artist: "Traditional Aarti", duration: "5:23", category: "Evening Aarti", file: "/audios/bhajans/OM-JAI-JAGDISH-HARE.mp3" },
  { id: 2, title: "Achyutam Keshavam", artist: "Devotional Chant", duration: "4:15", category: "Morning Prayer", file: "/audios/bhajans/Achyutam-Keshavam-Krishna.mp3" },
  { id: 3, title: "Shiva Tandava Stotram", artist: "Sacred Hymn", duration: "6:45", category: "Shiva Bhajan", file: "/audios/bhajans/Shiv-Tandav-Stotram.mp3" },
  { id: 4, title: "Hare Krishna Maha Mantra", artist: "Devotional Meditation", duration: "8:00", category: "Krishna Bhajan", file: "/audios/bhajans/Shreeman-Narayan-Narayan.mp3" },
  { id: 5, title: "Hanuman Chalisa", artist: "Traditional Chant", duration: "7:30", category: "Hanuman Bhajan", file: "/audios/bhajans/Hanuman-Chalisa.mp3" },
  { id: 6, title: "Gayatri Mantra", artist: "Vedic Hymn", duration: "3:45", category: "Universal Prayer", file: "/audios/bhajans/Gayatri-Mantra.mp3" },
];

export const Bhajans = () => {
  const [current, setCurrent] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const audioRef = useRef(null);

  useEffect(() => {
    const stored = localStorage.getItem("favoriteBhajans");
    if (stored) setFavorites(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem("favoriteBhajans", JSON.stringify(favorites));
  }, [favorites]);

  const togglePlay = (index, file) => {
    if (!audioRef.current) return;

    if (current === index) {
      audioRef.current.pause();
      setCurrent(null);
    } else {
      audioRef.current.src = file;
      audioRef.current.play();
      setCurrent(index);
    }
  };

  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter(favId => favId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  const handleExplore = () => {
    window.location.href = "/bhaktigeets";
  };

  return (
    <section
      className="py-24 px-4"
      style={{ background: "linear-gradient(135deg, #9f1239 0%, #f97316 50%, #14532d 100%)" }}
    >
      <div className="max-w-7xl mx-auto text-white">
        <div className="text-center mb-16 animate-fade-in">
          <Music className="w-12 h-12 mx-auto mb-4 animate-float" />
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
            Divine Bhajans
          </h2>
          <p className="text-lg max-w-2xl mx-auto">
            Immerse yourself in devotional music that uplifts the soul and connects with the divine
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {bhajans.map((bhajan, index) => (
            <Card
              key={bhajan.id}
              className="group cursor-pointer overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1"
              style={{ animationDelay: `${index * 80}ms`, background: "rgba(255,255,255,0.05)" }}
            >
              <div className="p-6 flex items-center gap-4">
                <button
                  onClick={() => togglePlay(index, bhajan.file)}
                  className="flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-br from-red-600 via-orange-500 to-green-700 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg"
                >
                  {current === index ? (
                    <Pause className="w-6 h-6 text-white" />
                  ) : (
                    <Play className="w-6 h-6 text-white" />
                  )}
                </button>

                <div className="flex-1 min-w-0">
                  <h3 className="font-playfair text-lg font-bold truncate group-hover:text-yellow-300 transition-colors">
                    {bhajan.title}
                  </h3>
                  <p className="text-sm text-white/70">{bhajan.artist}</p>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="text-xs font-semibold text-yellow-400">{bhajan.category}</span>
                    <span className="text-xs text-white/70">•</span>
                    <span className="text-xs text-white/70">{bhajan.duration}</span>
                  </div>
                </div>

                <button
                  onClick={() => toggleFavorite(bhajan.id)}
                  className="flex-shrink-0 p-2 rounded-full transition-colors"
                >
                  <Heart
                    className={`w-5 h-5 transition-colors ${favorites.includes(bhajan.id) ? "text-yellow-400" : "text-white hover:text-yellow-400"}`}
                  />
                </button>
              </div>

              <div className="h-1 bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={handleExplore}
            className="bg-yellow-400 hover:bg-yellow-300 text-black px-8 py-3 rounded-full font-semibold transition-all hover:shadow-xl hover:scale-105"
          >
            Explore Full Playlist
          </button>
        </div>
      </div>

      <audio ref={audioRef} />
    </section>
  );
};
