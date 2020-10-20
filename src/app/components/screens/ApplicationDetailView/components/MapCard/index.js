import React from 'react';
import { CardContainer, Container } from './styled';

import MapContainer from './components/index';


const MapCard = () => {
  return (
    <Container
      initial={{
        opacity: 0, 
        y: "-10px"
      }}
      animate={{
        opacity: 1,
        y: "0"
      }}
      transition={{ duration: 0.2 }}
    >
      <CardContainer>
        <MapContainer />
      </CardContainer>
    </Container>
  )  
}

export default MapCard;