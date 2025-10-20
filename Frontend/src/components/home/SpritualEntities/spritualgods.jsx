import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const deities = [
  { 
    name: "Lord Ganesha", 
    title: "Vighnaharta - Remover of Obstacles", 
    description: "The elephant-headed deity who blesses new beginnings, bestows wisdom, and removes obstacles from your path.", 
    mantra: "Om Gam Ganapataye Namaha", 
    attributes: ["Wisdom", "Success", "New Beginnings"], 
    image: "/assets/hinduism/gods/ganesha.jpg", 
    history: "Lord Ganesha, son of Shiva and Parvati, is worshipped first before any divine ritual, as he is believed to clear life's path from unseen obstacles. As the divine scribe of the Mahabharata, he represents intellect, wisdom, and the grounding energy that brings clarity and success in new beginnings."
  },
  { 
    name: "Lord Shiva", 
    title: "Mahadev - The Supreme God", 
    description: "The destroyer of evil and transformer, who represents the ultimate reality and cosmic consciousness.", 
    mantra: "Om Namah Shivaya", 
    attributes: ["Meditation", "Transformation", "Power"], 
    image: "/assets/hinduism/gods/shiva.jpg", 
    history: "Lord Shiva, also revered as Adiyogi, is the primordial teacher who gifted the world the science of yoga and meditation. Beyond destruction, he symbolizes inner transformation and spiritual awakening, dissolving ignorance so that truth and enlightenment may emerge."
  },
  { 
    name: "Goddess Lakshmi", 
    title: "Devi of Wealth & Prosperity", 
    description: "The goddess of fortune, light, wisdom, and prosperity who brings abundance and grace to devotees.", 
    mantra: "Om Shreem Mahalakshmiyei Namaha", 
    attributes: ["Prosperity", "Grace", "Beauty"], 
    image: "/assets/hinduism/gods/lakshmi.jpg", 
    history: "Goddess Lakshmi emerged during the Samudra Manthan, radiating divine energy and blessing creation with harmony, beauty, and abundance. She is not just the giver of material wealth, but also of spiritual prosperity, purity of heart, and graceful living."
  },
  { 
    name: "Lord Krishna", 
    title: "The Supreme Personality", 
    description: "The divine teacher of the Bhagavad Gita who embodies love, compassion, and divine wisdom.", 
    mantra: "Hare Krishna Hare Krishna", 
    attributes: ["Love", "Wisdom", "Joy"], 
    image: "/assets/hinduism/gods/krishna.jpg", 
    history: "Lord Krishna, the eighth avatar of Lord Vishnu, is the embodiment of divine love and cosmic guidance. His teachings in the Bhagavad Gita awaken righteousness, devotion, and inner bliss, reminding humanity to live with joy, purpose, and surrender."
  },
  { 
    name: "Goddess Saraswati", 
    title: "Devi of Knowledge & Art", 
    description: "The goddess of wisdom, learning, and the arts, who illuminates minds with knowledge and creativity.", 
    mantra: "Om Aim Saraswatyai Namaha", 
    attributes: ["Knowledge", "Art", "Clarity"], 
    image: "/assets/hinduism/gods/saraswati.jpg", 
    history: "Goddess Saraswati, born from the divine consciousness of Brahma, is the celestial source of all learning, music, art, and poetry. She represents the pure flow of wisdom that dispels darkness and fills the mind with clarity, inspiration, and creativity."
  },
  { 
    name: "Lord Hanuman", 
    title: "Symbol of Strength & Devotion", 
    description: "The divine devotee of Lord Rama, representing unparalleled strength, humility, and loyalty.", 
    mantra: "Om Hanumate Namah", 
    attributes: ["Strength", "Devotion", "Courage"], 
    image: "/assets/hinduism/gods/hanuman.jpg", 
    history: "Lord Hanuman, born to Anjana and blessed by the gods, is revered as the epitome of devotion, courage, and divine strength. His leap across the ocean and unwavering service to Lord Rama symbolize fearless faith, loyalty, and the power of a pure heart."
  }
];

export const SpritualGods = () => {
  const [selectedDeity, setSelectedDeity] = useState(null);

  return (
    <section className="py-24" style={{ background: "linear-gradient(135deg, #9f1239 0%, #f97316 50%, #14532d 100%)" }}>
      <div className="text-center mb-16">
        <Sparkles className="w-12 h-12 text-white mx-auto mb-4 animate-glow-pulse" />
        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">Divine Deities</h2>
        <p className="text-white/90 text-lg max-w-2xl mx-auto">Explore the sacred forms of divine consciousness that inspire, protect, and bless devotees</p>
      </div>

      <div className="overflow-hidden relative">
        <div className="flex animate-scroll" style={{ gap: "1.5rem" }}>
          {[...deities, ...deities].map((deity, index) => (
            <Card key={index} className="flex-shrink-0 w-80 rounded-3xl overflow-hidden border border-white/30 bg-white/10 backdrop-blur-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-xl hover:shadow-yellow-200/30">
              <div className="relative h-64 overflow-hidden group rounded-t-3xl">
                <img src={deity.image} alt={deity.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute top-3 right-3 text-white/50 text-6xl font-playfair animate-pulse-slow">ॐ</div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="font-playfair text-2xl font-bold text-white mb-1">{deity.name}</h3>
                  <p className="text-yellow-200 text-sm font-semibold">{deity.title}</p>
                </div>
              </div>

              <div className="p-5">
                <p className="text-white/85 text-sm mb-3 leading-relaxed">{deity.description}</p>
                <div className="bg-white/20 rounded-lg p-3 mb-3 border border-white/20">
                  <p className="text-yellow-200 text-xs uppercase tracking-wider">Mantra</p>
                  <p className="font-playfair text-white font-semibold text-sm italic">{deity.mantra}</p>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {deity.attributes.map((attr, idx) => (
                    <span key={idx} className="px-3 py-1 bg-white/20 text-white text-xs rounded-full border border-white/20">{attr}</span>
                  ))}
                </div>
                <div className="flex justify-between gap-2">
                  <Button className="w-1/2 bg-[#e80303d1] text-white hover:bg-rose-600 transition">Daily Prayer</Button>
                  <Button onClick={() => setSelectedDeity(deity)} className="w-1/2 bg-[#ffc105] text-black hover:bg-yellow-400 transition">Learn More</Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {selectedDeity && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 animate-fadeIn" onClick={() => setSelectedDeity(null)}>
          <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl p-6 max-w-md w-full relative shadow-2xl shadow-yellow-300/20 scale-95 animate-zoomIn" onClick={(e) => e.stopPropagation()}>
            <img src={selectedDeity.image} alt={selectedDeity.name} className="w-full h-48 object-cover rounded-xl mb-4 border border-white/20" />
            <h3 className="text-2xl font-bold mb-2 text-white text-center">{selectedDeity.name}</h3>
            <p className="text-white/80 mb-2 text-center">{selectedDeity.history}</p>
            <Button className="mt-4 w-full bg-red-500 text-white hover:bg-red-600 transition" onClick={() => setSelectedDeity(null)}>Close</Button>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-scroll { animation: scroll 45s linear infinite; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .animate-fadeIn { animation: fadeIn 0.3s ease-in-out; }
        @keyframes zoomIn { from { transform: scale(0.9); opacity: 0; } to { transform: scale(1); opacity: 1; } }
        .animate-zoomIn { animation: zoomIn 0.3s ease-in-out; }
        @keyframes pulse-slow { 0%, 100% { opacity: 0.6; } 50% { opacity: 1; } }
        .animate-pulse-slow { animation: pulse-slow 3s infinite; }
      `}</style>
    </section>
  );
};
