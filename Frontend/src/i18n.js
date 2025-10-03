import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      // Homepage
      appName: "Bharat Bhakti Yatra",
      welcome_suffix: "Welcome to our spiritual journey",
      subtitle: "Discover the divine culture of India",
      join: "Join the Journey",

      // Success Page
      journey_success_title: "🚀 You Joined the Journey!",
      journey_success_msg: "Thank you for being part of Bharat Bhakti Yatra 🙏",
    },
  },
  hi: {
    translation: {
      // Homepage
      appName: "भारत भक्ति यात्रा",
      welcome_suffix: "हमारी आध्यात्मिक यात्रा में आपका स्वागत है",
      subtitle: "भारत की दिव्य संस्कृति की खोज करें",
      join: "यात्रा में शामिल हों",

      // Success Page
      journey_success_title: "🚀 आपने यात्रा में भाग लिया!",
      journey_success_msg: "भारत भक्ति यात्रा का हिस्सा बनने के लिए धन्यवाद 🙏",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // default language
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
