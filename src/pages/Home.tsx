import React from 'react';
import useHomeStore from '../stores/homeStore'; // Assuming homeStore is a state management solution
import { useTranslation } from 'react-i18next';
import LanguageButton from '../components/LanguageButton';
import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const Home: React.FC = () => {
  const homeStore = useHomeStore();
  const { t, i18n } = useTranslation(); // Destructure i18next instance

  const changeLanguage = (lang:string) => {
    i18n.changeLanguage(lang); // Change language using i18next instance
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className='text-blue'>{t('welcome')}</IonTitle>
          {/* Language buttons */}
   
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonContent className='ion-padding'>
          <h1>{homeStore.count}</h1>
          <IonButton onClick={homeStore.increment}>
            Click me
          </IonButton>
          <h1>{t('login')}</h1>
          <>
            <LanguageButton
              languageCode="en"
              label="English"
              onClick={changeLanguage}
            />
            <LanguageButton
              languageCode="he"
              label="עברית" // Hebrew
              onClick={changeLanguage}
            />
            <LanguageButton
              languageCode="ar"
              label="عربى" // Arabic
              onClick={changeLanguage}
            />
          </>
        </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default Home;
