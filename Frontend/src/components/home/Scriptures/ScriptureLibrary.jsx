import { Card } from "@/components/ui/card";
import { BookOpen, Search } from "lucide-react";

const verses = [
  {
    sanskrit: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।",
    translation: "You have the right to perform your duty, but not to the fruits of your actions.",
    source: "Bhagavad Gita 2.47",
    context: "On Karma Yoga"
  },
  {
    sanskrit: "योगस्थः कुरु कर्माणि सङ्गं त्यक्त्वा धनञ्जय।",
    translation: "Perform your duty equipoised, O Arjuna, abandoning attachment to success and failure.",
    source: "Bhagavad Gita 2.48",
    context: "On Equanimity"
  },
  {
    sanskrit: "आत्मा वा अरे द्रष्टव्यः श्रोतव्यो मन्तव्यो निधिध्यासितव्यः।",
    translation: "The Self should be seen, heard, reflected upon, and meditated upon.",
    source: "Brihadaranyaka Upanishad 2.4.5",
    context: "On Self-Realization"
  },
  {
    sanskrit: "सत्यमेव जयते नानृतं सत्येन पन्था विततो देवयानः।",
    translation: "Truth alone triumphs, not falsehood. Through truth the divine path is spread.",
    source: "Mundaka Upanishad 3.1.6",
    context: "On Truth"
  }
];

const scriptures = [
  { name: "Bhagavad Gita", chapters: 18, verses: 700 },
  { name: "Upanishads", chapters: 108, verses: "Many" },
  { name: "Ramayana", chapters: 7, verses: 24000 },
  { name: "Mahabharata", chapters: 18, verses: 100000 }
];

export const ScriptureLibrary = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-muted/30 via-background to-muted/30 relative">
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url(${"/assets/scripture-bg.jpg"})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <BookOpen className="w-12 h-12 text-[#f45c25] mx-auto mb-4" />
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Sacred Scripture Library
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Timeless wisdom from ancient Vedic texts and holy scriptures
          </p>
        </div>

        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <input 
              type="text"
              placeholder="Search verses, chapters, or topics..."
              className="w-full pl-12 pr-4 py-4 rounded-full border-2 border-border focus:border-[#f45c25] focus:outline-none focus:ring-2 focus:ring-[#f45c25]/20 transition-all"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {scriptures.map((scripture, index) => (
            <Card 
              key={index}
              className="p-6 text-center hover:shadow-divine transition-all hover:-translate-y-1"
            >
              <div className="text-3xl mb-2">📖</div>
              <h4 className="font-playfair text-lg font-bold text-foreground mb-1">
                {scripture.name}
              </h4>
              <p className="text-sm text-muted-foreground">
                {scripture.chapters} Chapters
              </p>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {verses.map((verse, index) => (
            <Card 
              key={index}
              className="p-8 hover:shadow-divine transition-all duration-500 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-block px-3 py-1 bg-[#f45c25]/10 text-[#f45c25] rounded-full text-xs font-semibold mb-4">
                {verse.context}
              </div>

              <div className="mb-4 pb-4 border-b border-border">
                <p className="font-playfair text-xl md:text-2xl text-[#f45c25] leading-relaxed">
                  {verse.sanskrit}
                </p>
              </div>

              <p className="text-foreground text-lg mb-4 leading-relaxed italic">
                "{verse.translation}"
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground font-semibold">
                  — {verse.source}
                </p>
                <button className="text-[#f45c25] hover:text-[#f45c25]/80 text-sm font-semibold transition-colors">
                  Read Chapter →
                </button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-[#f45c25] hover:bg-[#f45c25]/90 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all hover:shadow-divine hover:scale-105">
            Explore Full Library
          </button>
        </div>
      </div>
    </section>
  );
};