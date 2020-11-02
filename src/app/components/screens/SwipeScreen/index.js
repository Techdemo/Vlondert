import React from 'react';
import ReactSwipeButton from 'react-swipe-button';
import { Container, Header, Title, Subtitle, ContentContainer, Close, Text, ContentTitle } from './styled';

import { OverlayContext } from '../../modules/ApplicationOverlay/context';

const SwipeScreen = () => {
  const { swipeActive, setSwipeActive, setActive } = React.useContext(OverlayContext)

  const variants = {
    open: {
      height: "100%",
    }, 
    closed: {
      height: "0",
    }
  }

  const headerVariants = {
    open: {
      height: "10%",
    },
    closed: {
      height: "0"
    }
  }

  const onSucces = () => {
    alert("Aansluiting bevestigd!")
    setSwipeActive(false)
  }

  return (
    <Container 
      animate={swipeActive ? "open" : "closed"}
      variants={variants}
      transition={{ 
        duration: 0.75,
        type: "spring",
        bounce: 0.4,
      }}
    >
    <Header
      animate={swipeActive ? "open" : "closed"}
      variants={headerVariants}
      transition={{ 
        duration: 0.75,
        type: "spring",
        bounce: 0.4,
      }}
    >
      <Title>Mathenesserdijk</Title>
      <Subtitle>Aangemaakt op 09-09-2020</Subtitle>
    </Header>
    <ContentContainer>
      <Close onClick={() => {
        setSwipeActive(false)
        setActive(false)
      }}>Close container</Close>
      <ContentTitle>Bij aanvraag aansluiten</ContentTitle>
      <Text>Door je bij de aanvraag aan te sluiten wordt je naam toegevoegd wanneer de aanvraag wordt overhandigd aan de Gemeente Rotterdam</Text>
      <ReactSwipeButton 
        text='Swipe om te bevestigen'
        color='#008833'
        onSuccess={onSucces}
      />
    </ContentContainer>
    </Container>
  )
}

export default SwipeScreen;