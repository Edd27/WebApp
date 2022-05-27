import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonFab,
  IonFabButton,
  IonIcon
} from '@ionic/react'
import { personAdd } from 'ionicons/icons'
import './Home.css'
import GridCards from '../components/GridCards'
import Form from '../components/Form'
import Tools from '../components/Tools'

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Web App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse='condense'>
          <IonToolbar>
            <IonTitle size='large'>Web App</IonTitle>
          </IonToolbar>
        </IonHeader>
        <GridCards />
        <Form />
        <Tools />
        <IonFab vertical='bottom' horizontal='end' slot='fixed'>
          <IonFabButton>
            <IonIcon icon={personAdd} />
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  )
}

export default Home
