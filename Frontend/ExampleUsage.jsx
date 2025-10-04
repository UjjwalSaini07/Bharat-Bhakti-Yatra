import React from "react";
import { useTranslation } from "react-i18next";

export default function ExampleUsage() {
  const { t, i18n } = useTranslation();

  return (
    <div style={{ padding: 16 }}>
      <h3>{t("appName")}</h3>
      <p>{t("subtitle")}</p>
      <div>
        The current language setting is: <strong>{String(i18n.language || "en").toUpperCase()}</strong>.
      </div>
      <div style={{ marginTop: 12 }}>
        <button onClick={() => i18n.changeLanguage("en")}>{t("join")}</button>
      </div>
    </div>
  );
}
