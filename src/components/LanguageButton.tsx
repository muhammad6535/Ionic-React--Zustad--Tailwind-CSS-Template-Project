import React from 'react';
import { IonButton } from '@ionic/react';

interface LanguageButtonProps {
  languageCode: string;
  label: string;
  onClick: (languageCode: string) => void;
}

const LanguageButton: React.FC<LanguageButtonProps> = ({ languageCode, label, onClick }) => {
  return (
    <IonButton onClick={() => onClick(languageCode)}>
      {label}
    </IonButton>
  );
};

export default LanguageButton;
