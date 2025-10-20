import { Card } from "@/components/ui/card"; 
import { Video, Circle, Users, ExternalLink } from "lucide-react";

const liveTemples = [
  {
    name: "Tirupati Balaji Temple",
    location: "Andhra Pradesh",
    deity: "Lord Venkateswara",
    status: "live",
    viewers: "15.2K"
  },
  {
    name: "Shirdi Sai Baba Temple",
    location: "Maharashtra",
    deity: "Sai Baba",
    status: "live",
    viewers: "12.8K"
  },
  {
    name: "Golden Temple",
    location: "Amritsar",
    deity: "Harmandir Sahib",
    status: "live",
    viewers: "18.5K"
  },
  {
    name: "Kashi Vishwanath Temple",
    location: "Varanasi",
    deity: "Lord Shiva",
    status: "offline",
    viewers: "0"
  },
  {
    name: "Meenakshi Temple",
    location: "Madurai",
    deity: "Goddess Meenakshi",
    status: "live",
    viewers: "9.3K"
  },
  {
    name: "Jagannath Temple",
    location: "Puri",
    deity: "Lord Jagannath",
    status: "offline",
    viewers: "0"
  }
];

export const LiveDarshan = () => {
  return (
    <section className="py-24 px-4 bg-[#faf5ee]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <Video className="w-12 h-12 text-[#1e40af] mx-auto mb-4" />
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#111827] mb-4">
            Live Temple Darshan
          </h2>
          <p className="text-[#6b7280] text-lg max-w-2xl mx-auto">
            Experience divine presence from home with live streaming from sacred temples across India
          </p>
        </div>

        <div className="flex items-center justify-center gap-3 mb-12">
          <div className="flex items-center gap-2 bg-[#fee2e2] px-4 py-2 rounded-full">
            <Circle className="w-3 h-3 text-[#ef4444] fill-[#ef4444] animate-pulse" />
            <span className="text-[#ef4444] font-semibold text-sm">
              {liveTemples.filter(t => t.status === "live").length} Temples Live Now
            </span>
          </div>
        </div>

        <Card className="mb-12 overflow-hidden hover:shadow-lg transition-all">
          <div className="grid lg:grid-cols-2">
            <div className="relative bg-[#fde68a] aspect-video lg:aspect-auto">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <Video className="w-16 h-16 mx-auto mb-4 animate-pulse" />
                  <p className="font-playfair text-2xl font-bold mb-2">Live Aarti in Progress</p>
                  <div className="flex items-center gap-2 justify-center">
                    <Circle className="w-3 h-3 fill-[#ef4444] text-[#ef4444] animate-pulse" />
                    <span className="text-sm">LIVE</span>
                  </div>
                </div>
              </div>
              <div className="absolute top-4 left-4 bg-[#ef4444] text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-2">
                <Circle className="w-2 h-2 fill-white animate-pulse" />
                LIVE
              </div>
              <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm flex items-center gap-2">
                <Users className="w-4 h-4" />
                {liveTemples[0].viewers}
              </div>
            </div>

            <div className="p-8">
              <h3 className="font-playfair text-3xl font-bold text-[#111827] mb-2">
                {liveTemples[0].name}
              </h3>
              <p className="text-[#6b7280] mb-4">{liveTemples[0].location}</p>
              
              <div className="bg-[#f0f9ff] p-4 rounded-lg mb-6">
                <p className="text-sm text-[#6b7280] mb-1">Presiding Deity</p>
                <p className="font-playfair text-xl text-[#1e40af] font-semibold">
                  {liveTemples[0].deity}
                </p>
              </div>

              <p className="text-[#6b7280] mb-6 leading-relaxed">
                Join thousands of devotees in receiving divine blessings through live darshan. 
                Experience the sacred atmosphere and participate in the ongoing aarti ceremony.
              </p>

              <button className="w-full bg-[#1e40af] hover:bg-[#1c3aaa] text-white font-semibold py-4 rounded-lg transition-all hover:scale-105 flex items-center justify-center gap-2">
                <ExternalLink className="w-5 h-5" />
                Watch Full Screen Darshan
              </button>
            </div>
          </div>
        </Card>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {liveTemples.slice(1).map((temple, index) => (
            <Card 
              key={index}
              className="overflow-hidden group hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <div className="relative bg-[#fef3c7] aspect-video flex items-center justify-center">
                <Video className="w-12 h-12 text-[#1e40af]/40" />
                
                {temple.status === "live" ? (
                  <div className="absolute top-3 left-3 bg-[#ef4444] text-white px-2 py-1 rounded text-xs font-semibold flex items-center gap-1">
                    <Circle className="w-2 h-2 fill-white animate-pulse" />
                    LIVE
                  </div>
                ) : (
                  <div className="absolute top-3 left-3 bg-[#d1d5db] text-[#6b7280] px-2 py-1 rounded text-xs font-semibold">
                    Offline
                  </div>
                )}

                {temple.status === "live" && (
                  <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm text-white px-2 py-1 rounded text-xs flex items-center gap-1">
                    <Users className="w-3 h-3" />
                    {temple.viewers}
                  </div>
                )}
              </div>

              <div className="p-5">
                <h4 className="font-playfair text-xl font-bold text-[#111827] mb-2 group-hover:text-[#1e40af] transition-colors">
                  {temple.name}
                </h4>
                <p className="text-sm text-[#6b7280] mb-3">{temple.location}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs text-[#6b7280]">Deity:</span>
                  <span className="text-sm font-semibold text-[#1e40af]">{temple.deity}</span>
                </div>

                <button 
                  className={`w-full font-semibold py-2 rounded-lg transition-all ${
                    temple.status === "live"
                      ? "bg-[#1e40af] hover:bg-[#1c3aaa] text-white hover:scale-105"
                      : "bg-[#d1d5db] text-[#6b7280] cursor-not-allowed"
                  }`}
                  disabled={temple.status === "offline"}
                >
                  {temple.status === "live" ? "Watch Darshan" : "Currently Offline"}
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
