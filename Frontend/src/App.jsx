import React from "react";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import "./index.css";
import Home from "./pages/Home";
import "./styles/App.scss";

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Home />
      <Footer />
    </div>
  );
};

export default App;