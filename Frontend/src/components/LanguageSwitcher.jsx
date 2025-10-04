import React from "react";
import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n, t } = useTranslation();
  const current = i18n.language || (typeof window !== "undefined" && localStorage.getItem("i18nextLng")) || "en";
  const isEnglish = current.startsWith("en");

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    try { localStorage.setItem("i18nextLng", lng); } catch (e) {}
  };

  return (
    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
      <button
        onClick={() => changeLanguage("en")}
        aria-pressed={isEnglish}
        title={isEnglish ? t("language_selector", { defaultValue: "Switch Language" }) : t("language_selector", { defaultValue: "Switch Language" })}
        style={{
          padding: "6px 10px",
          borderRadius: 6,
          border: isEnglish ? "2px solid #111827" : "1px solid #e5e7eb",
          background: isEnglish ? "#e5e7eb" : "transparent",
          cursor: "pointer"
        }}
      >
        EN
      </button>

      <button
        onClick={() => changeLanguage("hi")}
        aria-pressed={!isEnglish}
        title={!isEnglish ? t("language_selector", { defaultValue: "भाषा बदलें" }) : "हिन्दी पर स्विच करें"}
        style={{
          padding: "6px 10px",
          borderRadius: 6,
          border: !isEnglish ? "2px solid #111827" : "1px solid #e5e7eb",
          background: !isEnglish ? "#e5e7eb" : "transparent",
          cursor: "pointer"
        }}
      >
        हिन्दी
      </button>
    </div>
  );
}
