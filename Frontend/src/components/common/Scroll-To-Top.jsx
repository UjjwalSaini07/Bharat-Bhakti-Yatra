import React, { useState, useEffect } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

function ScrollButtons() {
  const [showTop, setShowTop] = useState(false);
  const [showBottom, setShowBottom] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const innerHeight = window.innerHeight;

      setShowTop(scrollY > 300);

      setShowBottom(scrollY + innerHeight < scrollHeight - 100);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-4 right-4 flex flex-col gap-3 sm:bottom-6 sm:right-6 z-50">
      {/* Scroll to Bottom */}
      {showBottom && (
        <button
          onClick={scrollToBottom}
          className="bg-orange-500 hover:bg-orange-600 text-white p-2.5 sm:p-3 rounded-full shadow-lg transition-all transform hover:scale-110"
          aria-label="Scroll to bottom"
        >
          <FaArrowUp className="text-base sm:text-lg" />
        </button>
      )}

      {/* Scroll to Top */}
      {showTop && (
        <button
          onClick={scrollToTop}
          className="bg-pink-600 hover:bg-pink-700 text-white p-2.5 sm:p-3 rounded-full shadow-lg transition-all transform hover:scale-110"
          aria-label="Back to top"
        >
          <FaArrowUp className="text-base sm:text-lg" />
        </button>
      )}
    </div>
  );
}

export default ScrollButtons;
