import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

function ScrollButton() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };

    // Run after first render to get correct scroll position
    requestAnimationFrame(handleScroll);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    showTop && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-orange-500 hover:bg-orange-600 text-white p-2.5 sm:p-3 rounded-full shadow-lg transition-all transform hover:scale-110 z-50"
        aria-label="Back to top"
      >
        <FaArrowUp className="text-base sm:text-lg" />
      </button>
    )
  );
}

export default ScrollButton;
