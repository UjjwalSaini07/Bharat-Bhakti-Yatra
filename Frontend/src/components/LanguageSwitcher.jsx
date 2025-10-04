// Frontend/src/components/LanguageSwitcher.jsx
// This component handles the one-click language switching mechanism.

import React from 'react';
import { useTranslation } from 'react-i18next'; // Dependency import is critical

/**
 * Component to allow users to switch between supported languages (English and Hindi).
 */
function LanguageSwitcher() {
  const { t, i18n } = useTranslation(); // Get t and i18n instances

  const changeLanguage = (lng) => {
    // This updates the UI instantly and saves the preference via LanguageDetector
    i18n.changeLanguage(lng);
  };
  
  const isEnglish = i18n.language.startsWith('en');

  return (
    <div style={{ margin: '10px', display: 'flex', gap: '8px' }}>
      <button 
        onClick={() => changeLanguage('en')} 
        disabled={isEnglish}
        title={isEnglish ? t('language_selector', 'Language selector') : "Switch to English"}
      >
        English
      </button>
      <button 
        onClick={() => changeLanguage('hi')} 
        disabled={!isEnglish}
        title={!isEnglish ? t('language_selector', 'Language selector') : "हिन्दी पर स्विच करें"}
      >
        हिन्दी
      </button>
    </div>
  );
}

export default LanguageSwitcher;
