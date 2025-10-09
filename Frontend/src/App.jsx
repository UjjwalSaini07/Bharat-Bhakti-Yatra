import React from "react";
import Header from "./components/common/Header";
import "./index.css";
import Home from "./pages/Home";
import "./styles/App.scss";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import { Routes, Route, Link } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      </AnimatePresence>
    </div>
  );
};

export default App;