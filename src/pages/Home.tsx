import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import useHomeStore from './../stores/homeStore';

const Home: React.FC = () => {
  const homeStore = useHomeStore();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className='text-blue'>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>

          </IonToolbar>
        </IonHeader>
        <IonContent className='ion-padding'>
          <h1 >{homeStore.count}</h1>
          <IonButton onClick={homeStore.increment}>
            Click me
          </IonButton>
        </IonContent>
        <ExploreContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
