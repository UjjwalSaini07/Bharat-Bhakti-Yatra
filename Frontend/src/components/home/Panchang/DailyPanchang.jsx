import { Card } from "@/components/ui/card";
import { Calendar, Sun, Moon, Star, Clock } from "lucide-react";

export const DailyPanchang = () => {
  const panchangData = {
    date: "Friday, December 27, 2025",
    tithi: "Shukla Saptami",
    nakshatra: "Pushya",
    yoga: "Shiva",
    karana: "Bava",
    sunrise: "6:42 AM",
    sunset: "5:38 PM",
    moonrise: "11:23 AM",
    moonset: "11:58 PM",
    auspiciousTimes: [
      { name: "Brahma Muhurta", time: "5:10 AM - 5:58 AM" },
      { name: "Abhijit Muhurta", time: "12:05 PM - 12:53 PM" },
      { name: "Vijaya Muhurta", time: "2:29 PM - 3:17 PM" }
    ],
    inauspiciousTimes: [
      { name: "Rahu Kaal", time: "10:30 AM - 12:00 PM" },
      { name: "Gulika Kaal", time: "9:00 AM - 10:30 AM" }
    ]
  };

  return (
    <section className="py-24 px-4 bg-[#faf5ee]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#fff3eb] shadow-sm mb-6">
            <Calendar className="w-10 h-10 text-[#f45c25]" />
          </div>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#2e2a25] mb-3">
            Daily Panchang
          </h2>
          <p className="text-[#6f655d] text-lg max-w-2xl mx-auto">
            Plan your day according to Vedic astrology and auspicious timings
          </p>
        </div>

        <div className="text-center mb-10">
          <h3 className="font-playfair text-2xl font-bold text-[#f45c25] mb-2">
            {panchangData.date}
          </h3>
          <p className="text-[#4b413b] text-base">
            Tithi:{" "}
            <span className="font-semibold text-[#2e2a25]">
              {panchangData.tithi}
            </span>
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <Card className="p-8 bg-[#fffaf6] border border-[#f1e2d6] rounded-2xl shadow-sm hover:shadow-md transition-all">
            <div className="flex items-center gap-3 mb-6">
              <Star className="w-8 h-8 text-[#f45c25]" />
              <h3 className="font-playfair text-2xl font-bold text-[#2e2a25]">
                Panchang Details
              </h3>
            </div>

            <div className="space-y-4">
              {[
                { label: "Nakshatra", value: panchangData.nakshatra },
                { label: "Yoga", value: panchangData.yoga },
                { label: "Karana", value: panchangData.karana }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex justify-between items-center pb-3 border-b border-[#e9ddd0] last:border-none"
                >
                  <span className="text-[#6f655d]">{item.label}</span>
                  <span className="font-semibold text-[#2e2a25]">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-8 bg-[#fffaf6] border border-[#f1e2d6] rounded-2xl shadow-sm hover:shadow-md transition-all">
            <div className="flex items-center gap-3 mb-6">
              <Clock className="w-8 h-8 text-[#f45c25]" />
              <h3 className="font-playfair text-2xl font-bold text-[#2e2a25]">
                Timings
              </h3>
            </div>

            <div className="space-y-4">
              {[
                { icon: <Sun className="w-4 h-4 text-[#f45c25]" />, label: "Sunrise", value: panchangData.sunrise },
                { icon: <Sun className="w-4 h-4 text-[#f45c25]" />, label: "Sunset", value: panchangData.sunset },
                { icon: <Moon className="w-4 h-4 text-[#f57a4e]" />, label: "Moonrise", value: panchangData.moonrise },
                { icon: <Moon className="w-4 h-4 text-[#f57a4e]" />, label: "Moonset", value: panchangData.moonset },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className={`flex justify-between items-center ${idx < 3 ? "pb-3 border-b border-[#e9ddd0]" : ""}`}
                >
                  <div className="flex items-center gap-2">
                    {item.icon}
                    <span className="text-[#6f655d]">{item.label}</span>
                  </div>
                  <span className="font-semibold text-[#2e2a25]">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-8 bg-[#fffaf6] border border-[#f1e2d6] rounded-2xl shadow-sm hover:shadow-md transition-all">
            <div className="flex items-center gap-3 mb-6">
              <Star className="w-8 h-8 text-[#f45c25]" />
              <h3 className="font-playfair text-2xl font-bold text-[#2e2a25]">
                Auspicious Times
              </h3>
            </div>

            <div className="space-y-3 mb-6">
              {panchangData.auspiciousTimes.map((time, idx) => (
                <div
                  key={idx}
                  className="bg-[#fdf3ee] p-3 rounded-lg border border-[#f7e1d2]"
                >
                  <div className="font-semibold text-[#2e2a25] text-sm">
                    {time.name}
                  </div>
                  <div className="text-[#f45c25] text-sm">{time.time}</div>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-[#e9ddd0]">
              <h4 className="font-semibold text-[#b5412b] mb-3 text-sm uppercase tracking-wide">
                Avoid During:
              </h4>
              <div className="space-y-2">
                {panchangData.inauspiciousTimes.map((time, idx) => (
                  <div key={idx} className="flex justify-between text-sm">
                    <span className="text-[#6f655d]">{time.name}</span>
                    <span className="text-[#2e2a25]">{time.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
