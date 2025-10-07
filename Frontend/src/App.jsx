import React from "react";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import "./index.css";
import Home from "./pages/Home";
import "./styles/App.scss";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { Routes, Route, Link } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

const App = () => {
    const location = useLocation();
  return (
 feature-signup
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-orange-500 to-green-700 text-center p-6">
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <div className="bg-white rounded-2xl shadow-2xl p-10 max-w-2xl">
              <h1 className="text-5xl font-extrabold text-gray-800 mb-6">
                Welcome to{" "}
                <span className="text-orange-500">Bharat Bhakti Yatra</span>
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                Uniting India’s diverse communities through devotion, peace, and
                cultural harmony.
              </p>
              <div className="flex justify-center gap-4">
                <Link
                  to="/signup"
                  className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow hover:bg-orange-600 transition"
                >
                  Signup
                </Link>
                <Link
                  to="/login"
                  className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow hover:bg-green-700 transition"
                >
                  Login
                </Link>
              </div>
            </div>
          }
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      </AnimatePresence>
    <div className="min-h-screen bg-white">
      <Header />
      <Home />
      <Footer />
 main
    </div>
  );
};

export default App;
