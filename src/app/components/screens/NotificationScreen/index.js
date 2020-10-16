import React from 'react';
import { Header } from '../../modules/';

import { Container } from './styled';

const testFunction = () => {
  alert("kansloos")
}

const NotificationScreen = () => {
  return (
    <Container>
      <Header 
      title="Notificaties" 
      buttons={[{
        label: "Alle notificaties", 
        action: () => {
         testFunction()
        }
      },
      {
        label: "Ongelezen",
        action: () => {
          testFunction()
        }
      } 
      ]} />
    </Container>
  )
}

export default NotificationScreen;