// Frontend/src/main.jsx

import { StrictMode, Suspense } from "react"; // 💡 Suspense is imported
import { createRoot } from "react-dom/client";

// 🛠 Polyfill matchMedia (keeping your original fix)
if (typeof window !== "undefined" && !window.matchMedia) {
  window.matchMedia = () => ({
    matches: false,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  });
}

import "./index.css";
import "./i18n"; // initialize i18n configuration
import App from "./App.jsx";

// 🚀 Wrap App with Suspense to wait for translations to load from the network
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* The fallback prop displays a loading message while files are fetched */}
    <Suspense fallback={<div>Loading...</div>}> 
      <App />
    </Suspense>
  </StrictMode>
);