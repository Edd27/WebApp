import { IonList, IonButton, IonIcon, IonTitle } from '@ionic/react'
import {
  wifi,
  batteryFull,
  shareSocial,
  notifications,
  menu,
  clipboard
} from 'ionicons/icons'
import './Tools.css'
import { Clipboard } from '@capacitor/clipboard'
import { Toast } from '@capacitor/toast'
import { Share } from '@capacitor/share'
import { ActionSheet, ActionSheetButtonStyle } from '@capacitor/action-sheet'
import { Device } from '@capacitor/device'
import { Network } from '@capacitor/network'

interface ToolsProps {}

const Tools: React.FC<ToolsProps> = () => {
  const writeToClipboard = async () => {
    await Clipboard.write({
      string: 'Hello World!'
    })

    await Toast.show({
      text: 'Copied to clipboard'
    })
  }
  const showToast = async () => {
    await Toast.show({
      text: 'This is a toast!'
    })
  }
  const showActions = async () => {
    const result = await ActionSheet.showActions({
      title: 'Photo Options',
      message: 'Select an option to perform',
      options: [
        {
          title: 'Upload'
        },
        {
          title: 'Share'
        },
        {
          title: 'Remove',
          style: ActionSheetButtonStyle.Destructive
        }
      ]
    })

    await Toast.show({
      text: 'Action Sheet result:' + result
    })
  }

  const showShare = async () => {
    const result = await Share.share({
      title: 'See cool stuff',
      text: 'Really awesome thing you need to see right meow',
      url: 'http://ionicframework.com/',
      dialogTitle: 'Share with buddies'
    })
    await Toast.show({
      text: result.toString()
    })
  }

  const logBatteryInfo = async () => {
    const info = await Device.getBatteryInfo()

    await Toast.show({
      text: info.toString()
    })
  }

  Network.addListener('networkStatusChange', status => {
    console.log('Network status changed', status)
  })

  const logCurrentNetworkStatus = async () => {
    const status = await Network.getStatus()
    await Toast.show({
      text: 'Network status:' + status
    })
  }

  return (
    <IonList className='list-tools-container'>
      <IonTitle>Plugins</IonTitle>
      <IonButton className='btn-tools'>
        <IonIcon
          slot='icon-only'
          icon={wifi}
          onClick={() => logCurrentNetworkStatus()}
        ></IonIcon>
      </IonButton>
      <IonButton className='btn-tools'>
        <IonIcon
          slot='icon-only'
          icon={batteryFull}
          onClick={() => logBatteryInfo()}
        ></IonIcon>
      </IonButton>
      <IonButton className='btn-tools'>
        <IonIcon
          slot='icon-only'
          icon={shareSocial}
          onClick={() => showShare()}
        ></IonIcon>
      </IonButton>
      <IonButton className='btn-tools'>
        <IonIcon
          slot='icon-only'
          icon={notifications}
          onClick={() => showToast()}
        ></IonIcon>
      </IonButton>
      <IonButton className='btn-tools'>
        <IonIcon
          slot='icon-only'
          icon={menu}
          onClick={() => showActions()}
        ></IonIcon>
      </IonButton>
      <IonButton className='btn-tools' onClick={() => writeToClipboard()}>
        <IonIcon slot='icon-only' icon={clipboard}></IonIcon>
      </IonButton>
    </IonList>
  )
}

export default Tools
