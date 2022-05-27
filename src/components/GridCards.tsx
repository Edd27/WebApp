import { useState, useEffect } from 'react'

import {
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonImg,
  IonCardContent,
  IonItem,
  IonThumbnail,
  IonLabel,
  IonButton
} from '@ionic/react'

interface GridCardsProps {}

const GridCards: React.FC<GridCardsProps> = () => {
  const [cards, setCards] = useState<any[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch('https://reqres.in/api/users?page=2')
      const data = await result.json()
      setCards(data.data)
    }

    fetchData()
  }, [])

  return (
    <IonGrid>
      <IonRow style={{ textAlign: 'center' }}>
        {cards.map(item => (
          <IonCol key={item.id}>
            <IonCard>
              <IonItem>
                <IonThumbnail slot='start'>
                  <IonImg src={item.avatar} />
                </IonThumbnail>
                <IonLabel>
                  {item.first_name} {item.last_name}
                </IonLabel>
                <IonButton fill='outline' slot='end'>
                  View
                </IonButton>
              </IonItem>
              <IonCardContent>{item.email}</IonCardContent>
            </IonCard>
          </IonCol>
        ))}
      </IonRow>
    </IonGrid>
  )
}

export default GridCards
