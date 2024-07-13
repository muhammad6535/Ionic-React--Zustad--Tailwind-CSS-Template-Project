// index.tsx
import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import i18n from './i18n'; // Import i18n instance
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container!);

const RootComponent: React.FC = () => {
  useEffect(() => {
    const setDocumentDirection = () => {
      const selectedLanguage = i18n.language; // Get the selected language from i18next

      // Set document direction based on the selected language
      if (selectedLanguage === 'he' || selectedLanguage === 'ar') {
        document.getElementsByTagName('html')[0].setAttribute('dir', 'rtl');
      } else {
        document.getElementsByTagName('html')[0].setAttribute('dir', 'ltr');
      }
    };

    // Initialize i18next and set document direction after initialization
    i18n.init().then(() => {
      setDocumentDirection(); // Set initial document direction

      // Subscribe to language changes and update document direction
      i18n.on('languageChanged', () => {
        setDocumentDirection();
      });
    });
  }, []);

  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

// Render the app inside React's StrictMode
root.render(<RootComponent />);
