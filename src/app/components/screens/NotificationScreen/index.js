import React from 'react';
import { Header } from '../../modules/';

import { Container } from './styled';

const NotificationScreen = () => {
  const [alle, setAlle] = React.useState(true)
  const [ongelezen, setOngelezen] = React.useState(false)

  return (
    <Container>
      <Header 
      title="Notificaties" 
      buttons={[
        {
        label: "Alle notificaties", 
        state: {alle},  
        action: () => {
         setAlle(true)
         setOngelezen(false)
        }
      },
      {
        label: "Ongelezen",
        state: {ongelezen},
        action: () => {
          setAlle(false)
          setOngelezen(true)
        }
      } 
      ]} />
    </Container>
  )
}

export default NotificationScreen;