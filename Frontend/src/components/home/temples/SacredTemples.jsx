import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { MapPin, Heart, X } from "lucide-react";

const temples = [
  {
    name: "Golden Temple of Divinity",
    location: "Amritsar, Punjab",
    description:
      "A sacred shrine of peace and spiritual harmony, where devotees find solace in divine presence.",
    image: "/assets/hinduism/Temples/temple1.jpg",
    deity: "Universal Divine",
    history:
      "The Golden Temple of Divinity has stood as a symbol of unity and devotion for centuries. Pilgrims from around the globe gather here to experience divine bliss. The temple architecture reflects sacred symmetry and spiritual energy. Legends say the foundation stone was laid by a wandering saint guided by celestial beings. Rituals here begin before sunrise and continue till late night, with hymns echoing through the serene waters surrounding the temple.",
  },
  {
    name: "Sacred Gopuram Temple",
    location: "Tamil Nadu",
    description:
      "Marvel at the intricate architecture and vibrant colors that celebrate centuries of devotion.",
    image: "/assets/hinduism/Temples/temple2.jpg",
    deity: "Lord Vishnu",
    history:
      "Known for its towering entrance, the Sacred Gopuram Temple stands as a tribute to divine artistry. Each carving holds a story from ancient scriptures. Devotees believe that offering prayers at the break of dawn cleanses the soul of worldly attachments. The temple hosts grand festivals where thousands gather to witness the illumination of the gopuram with sacred lamps.",
  },
  {
    name: "Himalayan Spiritual Retreat",
    location: "Uttarakhand",
    description:
      "Nestled in the mountains, this ancient temple offers a journey of self-discovery and peace.",
    image: "/assets/hinduism/Temples/temple3.jpg",
    deity: "Lord Shiva",
    history:
      "Hidden among misty peaks, this retreat has been a sanctuary for sages seeking enlightenment. Ancient manuscripts describe how meditating in this sacred land aligns the spiritual chakras. Snow-clad peaks around the temple echo with chants, and many pilgrims describe a deep sense of calm the moment they step into the sanctum.",
  },
  {
    name: "Temple of Ancient Bells",
    location: "Varanasi, Uttar Pradesh",
    description:
      "Echoing with sacred bells, this temple holds centuries of cultural heritage and devotion.",
    image: "/assets/hinduism/Temples/temple4.jpg",
    deity: "Lord Rama",
    history:
      "Situated in the spiritual capital of India, this temple has bells that have rung every day for over 400 years. The sound is believed to purify the surroundings and elevate consciousness. During evening aarti, thousands gather by the ghats as the temple drums and bells resonate like a heartbeat of devotion.",
  },
  {
    name: "Lotus Sanctum Temple",
    location: "Odisha",
    description:
      "Inspired by the lotus of purity, this temple is a symbol of devotion rising above all.",
    image: "/assets/hinduism/Temples/temple5.jpg",
    deity: "Goddess Lakshmi",
    history:
      "Legend says this temple emerged from a lotus that bloomed in the middle of a sacred lake. Devotees walk through a pathway shaped like unfolding petals symbolizing life's journey toward enlightenment. Ritual dances and chants dedicated to Goddess Lakshmi are a major attraction during full moon nights.",
  },
  {
    name: "Mystic River Temple",
    location: "Kerala",
    description:
      "A serene riverside temple offering spiritual solace and stunning architectural beauty.",
    image: "/assets/hinduism/Temples/temple6.jpg",
    deity: "Lord Ayyappa",
    history:
      "The Mystic River Temple is nestled along the tranquil banks of the backwaters. Known for its mesmerizing sunset rituals and traditional festivals, devotees come here to seek blessings and meditate in harmony with nature. Its pillars and carvings are adorned with intricate depictions of legends that have been passed down for centuries.",
  },
];

export const SacredTemples = () => {
  const [selectedTemple, setSelectedTemple] = useState(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (event.target.classList.contains("overlay-bg")) {
        setSelectedTemple(null);
      }
    };
    window.addEventListener("click", handleOutsideClick);
    return () => window.removeEventListener("click", handleOutsideClick);
  }, []);

  return (
    <section className="py-24 px-4 bg-[#faf5ee]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-4">
            <div className="text-primary text-6xl font-playfair">🕉</div>
          </div>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Sacred Temples Stories
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover the architectural marvels and spiritual sanctuaries that define Hindu devotions and the stories behind them.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {temples.map((temple, index) => (
            <Card
              key={index}
              className="overflow-hidden group cursor-pointer transition-all duration-500 hover:shadow-divine hover:-translate-y-2 bg-card"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={temple.image}
                  alt={temple.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#7e1b15]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-4 right-4 bg-[#ffc105] text-[#7e1b15] px-3 py-1 rounded-full text-sm font-semibold">
                  {temple.deity}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-playfair text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {temple.name}
                </h3>
                <div className="flex items-center gap-2 text-muted-foreground mb-3">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{temple.location}</span>
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">{temple.description}</p>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <button className="flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors">
                    <Heart className="w-4 h-4" />
                    Add to Journey
                  </button>
                  <button
                    className="text-[#7e1b15] hover:text-[#7e1b15]/80 font-semibold transition-colors"
                    onClick={() => setSelectedTemple(temple)}
                  >
                    Learn More →
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {selectedTemple && (
          <div className="overlay-bg fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white max-w-lg w-full max-h-[80vh] overflow-y-auto rounded-lg shadow-lg p-6 relative">
              <button
                className="absolute top-3 right-3 text-[#7e1b15] hover:text-[#7e1b15]/80"
                onClick={() => setSelectedTemple(null)}
              >
                <X className="w-6 h-6" />
              </button>
              <img
                src={selectedTemple.image}
                className="w-full h-56 object-cover rounded-md mb-4"
              />
              <h3 className="font-playfair text-3xl font-bold mb-2 text-[#7e1b15]">{selectedTemple.name}</h3>
              <p className="text-muted-foreground leading-relaxed">{selectedTemple.history}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
