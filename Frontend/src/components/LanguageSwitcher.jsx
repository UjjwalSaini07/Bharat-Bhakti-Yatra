// Frontend/src/components/LanguageSwitcher.jsx

import React from 'react';
import { useTranslation } from 'react-i18next';

/**
 * Renders two buttons to switch the site language between English (en) and Hindi (hi).
 */
function LanguageSwitcher() {
  // Get the i18n instance to change the language
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    // This instantly updates the UI and saves the preference via LanguageDetector
    i18n.changeLanguage(lng);
  };
  
  // Example translation keys for button text/titles (optional but good practice)
  const isEnglish = i18n.language.startsWith('en');

  return (
    <div style={{ margin: '10px', display: 'flex', gap: '8px' }}>
      <button 
        onClick={() => changeLanguage('en')} 
        disabled={isEnglish}
        title={isEnglish ? t('language_selector') : "Switch to English"}
      >
        English
      </button>
      <button 
        onClick={() => changeLanguage('hi')} 
        disabled={!isEnglish}
        title={!isEnglish ? t('language_selector') : "हिन्दी पर स्विच करें"}
      >
        हिन्दी
      </button>
    </div>
  );
}

export default LanguageSwitcher;