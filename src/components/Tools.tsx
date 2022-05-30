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
import { Device } from '@capacitor/device'
import { Network } from '@capacitor/network'
import { ActionSheet } from '@capacitor/action-sheet'

interface ToolsProps {}

const Tools: React.FC<ToolsProps> = () => {
  const handleActionSheet = async () => {
    await ActionSheet.showActions({
      title: 'What would you like to do?',
      message: 'Select an action',
      options: [
        {
          title: 'Option 1'
        },
        {
          title: 'Option 2'
        },
        {
          title: 'Option 3'
        },
        {
          title: 'Option 4'
        }
      ]
    })
  }

  const handleShare = async () => {
    await Share.share({
      title: 'Shared content from Ionic App',
      text: 'WebApp Ionic and Capacitor',
      url: 'https://ionicframework.com',
      dialogTitle: 'Share Ionic Framework'
    })
  }

  const handleClipboard = async () => {
    await Clipboard.write({
      string: 'Hello World!'
    })

    await Toast.show({
      text: 'Copied to clipboard'
    })
  }

  const handleToast = async () => {
    await Toast.show({
      text: 'This is a toast!'
    })
  }

  const handleBatteryInfo = async () => {
    const info = await Device.getBatteryInfo()

    await Toast.show({
      text: `Level: ${info.batteryLevel?.toString()} \nState: ${
        info.isCharging ? 'Charging' : 'No Charging'
      }`
    })
  }

  const handleNetworkInfo = async () => {
    const status = await Network.getStatus()
    const { connected, connectionType } = status
    await Toast.show({
      text: `Status: ${
        connected ? 'Connected' : 'Disconnected'
      } \nType: ${connectionType}`
    })
  }

  return (
    <IonList className='list-tools-container'>
      <IonTitle>Plugins</IonTitle>
      <IonButton className='btn-tools'>
        <IonIcon
          slot='icon-only'
          icon={wifi}
          onClick={handleNetworkInfo}
        ></IonIcon>
      </IonButton>
      <IonButton className='btn-tools'>
        <IonIcon
          slot='icon-only'
          icon={batteryFull}
          onClick={handleBatteryInfo}
        ></IonIcon>
      </IonButton>
      <IonButton className='btn-tools'>
        <IonIcon
          slot='icon-only'
          icon={shareSocial}
          onClick={handleShare}
        ></IonIcon>
      </IonButton>
      <IonButton className='btn-tools'>
        <IonIcon
          slot='icon-only'
          icon={notifications}
          onClick={handleToast}
        ></IonIcon>
      </IonButton>
      <IonButton className='btn-tools'>
        <IonIcon
          slot='icon-only'
          icon={menu}
          onClick={handleActionSheet}
        ></IonIcon>
      </IonButton>
      <IonButton className='btn-tools' onClick={handleClipboard}>
        <IonIcon slot='icon-only' icon={clipboard}></IonIcon>
      </IonButton>
    </IonList>
  )
}

export default Tools
