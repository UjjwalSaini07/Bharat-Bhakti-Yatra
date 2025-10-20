import { useState, useEffect } from "react";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
    screenCategory: getScreenCategory(window.innerWidth),
  });

  function getScreenCategory(width) {
    if (width < 576) return "mobile"; // Mobile
    if (width < 768) return "small"; // Small screen
    if (width < 992) return "medium"; // Medium screen
    return "large"; // Large screen
  }

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
        screenCategory: getScreenCategory(window.innerWidth),
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};

export default useWindowSize;