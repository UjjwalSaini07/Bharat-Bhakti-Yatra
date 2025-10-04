// Frontend/src/App.jsx
import React from "react";
import "./index.css";
import "./styles/App.scss";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./components/LanguageSwitcher";

const HomePage = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const lang = i18n.language || localStorage.getItem("i18nextLng") || "en";

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-orange-500 to-green-700">
      <div className="relative text-center p-12 bg-white rounded-2xl shadow-2xl max-w-2xl">
        <div className="absolute top-4 right-4">
          <LanguageSwitcher />
        </div>

        <h1 className="text-5xl font-extrabold text-gray-800 mb-6">
          {lang === "hi" ? (
            <>
              <span className="text-orange-500">{t("appName")}</span> {t("welcome_suffix")}
            </>
          ) : (
            <>
              {t("welcome_prefix")} <span className="text-orange-500">{t("appName")}</span>
            </>
          )}
        </h1>

        <p className="text-lg text-gray-600 mb-6">{t("subtitle")}</p>

        <button
          onClick={() => navigate("/join")}
          className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow hover:bg-orange-600 transition"
        >
          {t("join")}
        </button>
      </div>
    </div>
  );
};

const JoinPage = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-yellow-50">
      <h2 className="text-4xl font-bold mb-4">{t('journey_success_title')}</h2>
      <p className="text-lg text-gray-700">
        {t('journey_success_msg')}
      </p>
    </div>
  );
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/join" element={<JoinPage />} />
    </Routes>
  );
};

export default App;
