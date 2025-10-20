import { Card } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

const deities = [
  {
    name: "Lord Ganesha",
    title: "Vighnaharta - Remover of Obstacles",
    description:
      "The elephant-headed deity who blesses new beginnings, bestows wisdom, and removes obstacles from your path.",
    mantra: "Om Gam Ganapataye Namaha",
    attributes: ["Wisdom", "Success", "New Beginnings"],
    image: "/assets/hinduism/gods/ganesha.jpg",
  },
  {
    name: "Lord Shiva",
    title: "Mahadev - The Supreme God",
    description:
      "The destroyer of evil and transformer, who represents the ultimate reality and cosmic consciousness.",
    mantra: "Om Namah Shivaya",
    attributes: ["Meditation", "Transformation", "Power"],
    image: "/assets/hinduism/gods/shiva.jpg",
  },
  {
    name: "Goddess Lakshmi",
    title: "Devi of Wealth & Prosperity",
    description:
      "The goddess of fortune, light, wisdom, and prosperity who brings abundance and grace to devotees.",
    mantra: "Om Shreem Mahalakshmiyei Namaha",
    attributes: ["Prosperity", "Grace", "Beauty"],
    image: "/assets/hinduism/gods/lakshmi.jpg",
  },
  {
    name: "Lord Krishna",
    title: "The Supreme Personality",
    description:
      "The divine teacher of the Bhagavad Gita who embodies love, compassion, and divine wisdom.",
    mantra: "Hare Krishna Hare Krishna",
    attributes: ["Love", "Wisdom", "Joy"],
    image: "/assets/hinduism/gods/krishna.jpg",
  },
  {
    name: "Goddess Saraswati",
    title: "Devi of Knowledge & Art",
    description:
      "The goddess of wisdom, learning, and the arts, who illuminates minds with knowledge and creativity.",
    mantra: "Om Aim Saraswatyai Namaha",
    attributes: ["Knowledge", "Art", "Clarity"],
    image: "/assets/hinduism/gods/saraswati.jpg",
  },
  {
    name: "Lord Hanuman",
    title: "Symbol of Strength & Devotion",
    description:
      "The divine devotee of Lord Rama, representing unparalleled strength, humility, and loyalty.",
    mantra: "Om Hanumate Namah",
    attributes: ["Strength", "Devotion", "Courage"],
    image: "/assets/hinduism/gods/hanuman.jpg",
  },
];

export const SpritualGods = () => {
  return (
    <section
      className="py-24"
      style={{
        background: "linear-gradient(135deg, #9f1239 0%, #f97316 50%, #14532d 100%)",
      }}
    >
      <div className="text-center mb-16">
        <Sparkles className="w-12 h-12 text-white mx-auto mb-4 animate-glow-pulse" />
        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">
          Divine Deities
        </h2>
        <p className="text-white/90 text-lg max-w-2xl mx-auto">
          Explore the sacred forms of divine consciousness that inspire, protect, and bless devotees
        </p>
      </div>

      <div className="overflow-hidden relative">
        <div className="flex animate-scroll" style={{ gap: "1.5rem" }}>
          {[...deities, ...deities].map((deity, index) => (
            <Card
              key={index}
              className="flex-shrink-0 w-80 rounded-3xl overflow-hidden border border-white/20 bg-[#ffffff0f] backdrop-blur-md transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_0_35px_rgba(255,255,255,0.3)]"
            >
              <div className="relative h-64 overflow-hidden group rounded-t-3xl">
                <img
                  src={deity.image}
                  alt={deity.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#000000cc] to-transparent"></div>
                <div className="absolute top-3 right-3 text-white/40 text-6xl font-playfair animate-float">
                  ॐ
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="font-playfair text-2xl font-bold text-white mb-1">
                    {deity.name}
                  </h3>
                  <p className="text-[#fde68a] text-sm font-semibold">{deity.title}</p>
                </div>
              </div>

              <div className="p-5">
                <p className="text-white/85 text-sm mb-3 leading-relaxed">
                  {deity.description}
                </p>
                <div className="bg-[#ffffff22] rounded-lg p-3 mb-3">
                  <p className="text-[#fde68a] text-xs uppercase tracking-wider">
                    Mantra
                  </p>
                  <p className="font-playfair text-white font-semibold text-sm">
                    {deity.mantra}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {deity.attributes.map((attr, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-[#ffffff22] text-white text-xs rounded-full"
                    >
                      {attr}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 55s linear infinite;
        }
      `}</style>
    </section>
  );
};
