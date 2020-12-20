import { notify } from 'react-notify-toast'

const popupStyles  = { background: '#009cc4', text: '#FFFFFF' }

export const popupNotification = message => {
  notify.show(message, 'custom', 3000, popupStyles)
}