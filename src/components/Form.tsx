import {
  IonList,
  IonItem,
  IonInput,
  IonRadioGroup,
  IonLabel,
  IonRadio,
  IonSelect,
  IonSelectOption
} from '@ionic/react'

interface FormProps {}

const Form: React.FC<FormProps> = () => {
  return (
    <IonList>
      <IonItem>
        <IonLabel position='fixed'>Nombre</IonLabel>
        <IonInput></IonInput>
      </IonItem>
      <IonItem>
        <IonLabel position='fixed'>Puesto</IonLabel>
        <IonRadioGroup style={{ width: '100%' }}>
          <IonItem>
            <IonLabel>Docente</IonLabel>
            <IonRadio slot='start' value='docente' />
          </IonItem>
          <IonItem>
            <IonLabel>Alumno</IonLabel>
            <IonRadio slot='start' value='alumno' />
          </IonItem>
        </IonRadioGroup>
      </IonItem>
      <IonItem>
        <IonLabel>Carrera</IonLabel>
        <IonSelect>
          <IonSelectOption value='brown'>
            Ing. Sistemas Computacionales
          </IonSelectOption>
          <IonSelectOption value='blonde'>Ing. Electronica</IonSelectOption>
          <IonSelectOption value='black'>Ing. Ambiental</IonSelectOption>
          <IonSelectOption value='red'>Ing. Automotriz</IonSelectOption>
        </IonSelect>
      </IonItem>
    </IonList>
  )
}

export default Form
