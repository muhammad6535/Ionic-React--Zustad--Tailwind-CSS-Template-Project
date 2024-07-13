import React from 'react';
import { IonButton } from '@ionic/react';

const LanguageButton = ({ languageCode, label, onClick }) => {
  return (
    <IonButton onClick={() => onClick(languageCode)}>
      {label}
    </IonButton>
  );
};

export default LanguageButton;
