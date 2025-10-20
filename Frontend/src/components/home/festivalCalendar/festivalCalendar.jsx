import { Calendar, Sparkles } from "lucide-react";

const festivals = [
  {
    name: "Diwali",
    date: "October 20, 2025",
    significance: "Festival of Lights — Victory of light over darkness.",
    color: "bg-yellow-500",
    image: "/assets/diya-festival.jpg",
  },
  {
    name: "Holi",
    date: "March 14, 2026",
    significance: "Festival of Colors — Celebration of love and new beginnings.",
    color: "bg-pink-500",
  },
  {
    name: "Navratri",
    date: "September 22–30, 2025",
    significance: "Nine Nights — Worship of the Divine Feminine.",
    color: "bg-green-500",
  },
];

export const Festivals = ({ festivalsData = festivals }) => {
  return (
    <section
      className="py-24 px-4 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #9f1239 0%, #f97316 50%, #14532d 100%)",
      }}
    >
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]" />

      <div className="max-w-7xl mx-auto relative z-10 text-center text-amber-50">

        <div className="mb-16 animate-fade-in">
          <div className="flex justify-center mb-4">
            <Calendar className="w-12 h-12 text-amber-300 animate-pulse" />
          </div>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4 drop-shadow-md">
            Festival Calendar
          </h2>
          <p className="text-amber-100/90 text-lg max-w-2xl mx-auto leading-relaxed">
            Celebrate the sacred festivals that bring joy, unity, and spiritual renewal.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {festivalsData.map((festival, index) => (
            <div
              key={index}
              className="group relative border border-white/20 bg-white/10 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 hover:bg-white/15"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {festival.color && (
                <div
                  className={`h-1.5 ${festival.color} rounded-t-2xl group-hover:h-2 transition-all duration-300`}
                />
              )}

              <div className="p-6 text-left">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-playfair text-2xl font-bold text-amber-50 group-hover:text-amber-200 transition-colors duration-300">
                    {festival.name}
                  </h3>
                  <Sparkles className="w-5 h-5 text-amber-300 animate-glow-pulse" />
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <Calendar className="w-4 h-4 text-amber-300" />
                  <span className="text-sm font-semibold text-amber-100">
                    {festival.date}
                  </span>
                </div>

                <p className="text-amber-100/80 leading-relaxed text-sm">
                  {festival.significance}
                </p>

                <button className="mt-4 text-amber-300 hover:text-amber-200 font-semibold text-sm transition-all duration-300">
                  Learn Rituals →
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="font-playfair text-xl text-amber-100 italic drop-shadow-sm">
            "Every festival is a reminder of the divine light within us."
          </p>
        </div>
      </div>
    </section>
  );
};
