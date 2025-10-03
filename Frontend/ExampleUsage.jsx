// Frontend/src/ExampleUsage.jsx

import React from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher'; // Import the switcher

/**
 * A simple component to demonstrate i18n functionality.
 * This should replace a section of your existing App.jsx or a page component.
 */
function ExampleUsage() {
  // Use the hook to get the translation function 't'
  const { t } = useTranslation(); 
  
  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      
      {/* 1. Language Switcher (Action) */}
      <LanguageSwitcher />

      {/* 2. Content Translation (Demonstration) */}
      <h2 style={{ color: '#4f46e5' }}>{t('welcome')}</h2>
      
      <p>
        <strong>{t('navigation.home')}:</strong> 
        The current language setting is: <strong>{i18n.language.toUpperCase()}</strong>.
      </p>

      <p>
        <strong>{t('navigation.about')}:</strong> 
        This text automatically changes when you click a button in the switcher above.
      </p>

    </div>
  );
}

export default ExampleUsage;