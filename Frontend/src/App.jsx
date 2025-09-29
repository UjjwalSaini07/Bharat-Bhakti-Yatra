import React from "react";
import "./index.css";
import "./styles/App.scss";
import Navbar from "./components/pages/Navbar"; // 👈 import navbar

const App = () => {
  return (
    <div>
      <Navbar />  {/* 👈 navbar appears at the top */}
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-orange-500 to-green-700">
        <div className="text-center p-12 bg-white rounded-2xl shadow-2xl max-w-2xl">
          <h1 className="text-5xl font-extrabold text-gray-800 mb-6">
            Welcome to <span className="text-orange-500">Bharat Bhakti Yatra</span>
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Uniting India’s diverse communities through devotion, peace, and cultural harmony.
          </p>
          <button className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow hover:bg-orange-600 transition">
            Join the Journey
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
