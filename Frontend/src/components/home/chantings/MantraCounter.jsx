import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RotateCcw, Plus, Volume2 } from "lucide-react";

const MANTRAS = [
  { name: "Om Namah Shivaya", target: 108, meaning: "I bow to Lord Shiva", audio: "/audios/Chantings/chanting1.mp3" },
  { name: "Hare Krishna Maha Mantra", target: 108, meaning: "The great mantra of Lord Krishna", audio: "/audios/Chantings/chanting2.mp3" },
  { name: "Om Gam Ganapataye Namaha", target: 108, meaning: "Salutations to Lord Ganesha", audio: "/audios/Chantings/chanting3.mp3" },
  { name: "​Om Namo Bhagavate Vasudevaya", target: 108, meaning: "Salutations to Lord Vishnu", audio: "/audios/Chantings/chanting4.mp3" },
  { name: "Hare Ram Hare Ram", target: 108, meaning: "Salutations to Lord Rama", audio: "/audios/Chantings/chanting5.mp3" },
  { name: "Om Dum Durgayei Namaha", target: 108, meaning: "I bow to Goddess Durga", audio: "/audios/Chantings/chanting6.mp3" },
  { name: "Om Bhur Bhuvah Swaha Tatsavitur Vareniyam Bhargo Devasya Dheemahi Dhiyo Yonaha Prachodyaat..!!", target: 108, meaning: "Prayer to the Divine Light of Savitur", audio: "/audios/Chantings/chanting7.mp3" },
];

const QUOTES = [
  { text: "Mantra chanting creates sacred vibrations that align you with divine energy.", audio: "/audios/quotes/quote1.mp3", },
  { text: "Through repetition, the heart becomes still, and the soul awakens.", audio: "/audios/quotes/quote2.mp3", },
  { text: "Each chant is a step closer to inner peace and divine love.", audio: "/audios/quotes/quote3.mp3", },
  { text: "Mantras purify your mind, filling it with light and clarity.", audio: "/audios/quotes/quote4.mp3", },
  { text: "Chanting connects your breath, sound, and spirit into harmony.", audio: "/audios/quotes/quote5.mp3", },
  { text: "A focused mind becomes a temple; a mantra, the key to open it.", audio: "/audios/quotes/quote6.mp3", },
  { text: "Every repetition removes one layer of illusion and reveals truth.", audio: "/audios/quotes/quote7.mp3", },
  { text: "The vibration of Om echoes through every particle of existence.", audio: "/audios/quotes/quote8.mp3", },
  { text: "Mantra is the sound-body of the Divine — chant to embody it.", audio: "/audios/quotes/quote9.mp3", },
  { text: "Through devotion and rhythm, the Infinite becomes felt within.", audio: "/audios/quotes/quote10.mp3", },
];

const STORAGE_KEY = "mantra-progress";

export const MantraCounter = () => {
  const [count, setCount] = useState(0);
  const [selectedMantra, setSelectedMantra] = useState(0);
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (saved) {
      setSelectedMantra(saved.selectedMantra || 0);
      setCount(saved.count || 0);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ selectedMantra, count }));
  }, [selectedMantra, count]);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setQuoteIndex((prev) => (prev + 1) % QUOTES.length);
        setFade(true);
      }, 500);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const currentMantra = MANTRAS[selectedMantra];
  const progress = (count / currentMantra.target) * 100;
  const isComplete = count >= currentMantra.target;

  const handleIncrement = () => !isComplete && setCount(count + 1);
  const handleReset = () => setCount(0);
  const playChant = () => new Audio(currentMantra.audio).play();

  return (
    <section
      className="py-24 px-4 text-white relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #9f1239 0%, #f97316 50%, #14532d 100%)",
      }}
    >
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-24 left-24 text-white/25 text-[180px] font-bold select-none animate-pulse-slow">
          ॐ
        </div>
        <div
          className="absolute bottom-4 right-24 text-white/25 text-[180px] font-bold select-none animate-pulse-slow"
          style={{ animationDelay: "1.5s" }}
        >
          ॐ
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="text-6xl mb-4 animate-glow">📿</div>
          <h2 className="font-playfair text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg text-rose-100">
            Digital Japa Mala
          </h2>
          <p className="text-rose-50/90 text-lg max-w-2xl mx-auto font-medium">
            Chant, focus, and elevate your consciousness with each repetition.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">

          <Card className="bg-white/10 backdrop-blur-xl border border-white/20 p-12 shadow-lg shadow-rose-900/40 rounded-2xl">
            <div className="text-center">
              <div className="mb-8">
                <h3 className="font-playfair text-xl text-rose-100 mb-4">
                  Select Your Mantra
                </h3>
                <div className="flex flex-wrap gap-3 justify-center">
                  {MANTRAS.map((mantra, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setSelectedMantra(idx);
                        setCount(0);
                      }}
                      className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                        selectedMantra === idx
                          ? "bg-gradient-to-r from-rose-400 to-orange-300 text-orange-950 scale-105 shadow-md"
                          : "bg-white/10 text-rose-50 hover:bg-white/20 hover:scale-105"
                      }`}
                    >
                      {mantra.name.split(" ").slice(0, 2).join(" ")}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-playfair text-3xl text-rose-100 mb-2 drop-shadow-lg">
                  {currentMantra.name}
                </h4>
                <p className="text-rose-50/90 text-sm italic">{currentMantra.meaning}</p>
              </div>

              <div className="mb-8">
                <div className="relative w-64 h-64 mx-auto mb-6">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="128"
                      cy="128"
                      r="110"
                      stroke="rgba(255,255,255,0.15)"
                      strokeWidth="12"
                      fill="none"
                    />
                    <circle
                      cx="128"
                      cy="128"
                      r="110"
                      stroke="#fbcfe8"
                      strokeWidth="12"
                      fill="none"
                      strokeDasharray={`${2 * Math.PI * 110}`}
                      strokeDashoffset={`${2 * Math.PI * 110 * (1 - progress / 100)}`}
                      className="transition-all duration-500 drop-shadow-[0_0_14px_#fda4af]"
                      strokeLinecap="round"
                    />
                  </svg>

                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="font-playfair text-7xl font-bold text-rose-50 drop-shadow-lg">
                      {count}
                    </div>
                    <div className="text-rose-100 text-sm">of {currentMantra.target}</div>
                  </div>
                </div>

                {isComplete && (
                  <div className="text-rose-100 font-playfair text-2xl animate-pulse drop-shadow-xl">
                    ✨ One Mala Complete ✨
                  </div>
                )}
              </div>

              <div className="flex gap-4 justify-center flex-wrap">
                <Button
                  size="lg"
                  onClick={handleIncrement}
                  disabled={isComplete}
                  className="bg-gradient-to-r from-rose-400 to-orange-300 text-rose-900 font-semibold px-12 py-6 text-xl shadow-lg hover:scale-105 hover:shadow-rose-300 transition-all disabled:opacity-50"
                >
                  <Plus className="w-6 h-6 mr-2" /> Count
                </Button>
                <Button
                  size="lg"
                  onClick={handleReset}
                  variant="outline"
                  className="bg-gradient-to-r from-rose-400 border-rose-200/60 text-rose-50 hover:bg-rose-100 hover:text-rose-900 font-semibold px-8 py-6 transition-all hover:scale-105"
                >
                  <RotateCcw className="w-5 h-5 mr-2" /> Reset
                </Button>
                <Button
                  size="lg"
                  onClick={playChant}
                  className="bg-white/10 border border-white/20 text-rose-50 hover:bg-rose-100 hover:text-rose-900 transition-all hover:scale-105 px-8 py-6 font-semibold"
                >
                  <Volume2 className="w-6 h-6 mr-2" /> Play Chant
                </Button>
              </div>
            </div>
          </Card>

          <div className="space-y-6">
            <Card className="bg-white/10 backdrop-blur-md border border-white/20 p-8">
                <h3 className="font-playfair text-2xl font-bold text-rose-100 mb-4">
                How to Use
                </h3>
                <ol className="space-y-3 text-rose-50">
                {[
                    "Choose a mantra that resonates with your heart.",
                    "Sit in a quiet space, close your eyes, and take a deep breath.",
                    "Chant slowly, pressing 'Count' after each repetition with devotion.",
                    "Feel the vibration grow within — complete 108 chants with awareness.",
                ].map((step, idx) => (
                    <li key={idx} className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-rose-100 text-rose-900 flex items-center justify-center text-sm font-bold">
                        {idx + 1}
                    </span>
                    <span>{step}</span>
                    </li>
                ))}
                </ol>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border border-white/20 p-8">
                <h3 className="font-playfair text-2xl font-bold text-rose-100 mb-4">
                Benefits of Japa
                </h3>
                <ul className="space-y-2 text-rose-50">
                {[
                    "Deepens meditation and focus on the divine sound.",
                    "Soothes the mind, dissolving anxiety and distraction.",
                    "Awakens inner stillness and spiritual strength.",
                    "Infuses your aura with peace, devotion, and clarity.",
                ].map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                    <span className="text-rose-100">•</span>
                    <span>{benefit}</span>
                    </li>
                ))}
                </ul>
            </Card>

            <Card className="bg-gradient-to-r from-rose-200 to-orange-100 p-6 text-center shadow-md shadow-rose-600/40 transition-all duration-700">
                <button
                  onClick={() => new Audio(QUOTES[quoteIndex].audio).play()}
                  className="mx-auto block hover:scale-110 transition-transform"
                >
                <Volume2 className="w-8 h-8 text-rose-900 mx-auto mb-3" />
                </button>

                <p
                className={`font-playfair text-lg text-rose-900 transition-opacity duration-700 ${
                    fade ? "opacity-100" : "opacity-0"
                }`}
                >
                “{QUOTES[quoteIndex].text}”
                </p>
            </Card>
            </div>
        </div>
      </div>
    </section>
  );
};
