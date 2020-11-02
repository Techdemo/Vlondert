import React from 'react';
import { 
  Container, 
  Title, 
  SubTitle, 
  Header, 
  IconContainer, 
  ContentContainer, 
  Footer, 
  Text, 
  Button  
} from './styled';
import { PersonGreenIcon, PersonGreyIcon } from '../../../../app/components/icons/index'

import { OverlayContext } from './context';

const variants = {
  open: {
    height: "40%",
  }, 
  closed: {
    height: "0",
  }
}

const ApplicationOverlay = () => {
  const { active, setActive, swipeActive, setSwipeActive } = React.useContext(OverlayContext)

  const openTransition = () => {
    setActive(false)
    setSwipeActive(true)
  }

  return (
    <Container 
      animate={active ? "open" : "closed"}
      variants={variants}
      transition={{ 
        duration: 0.75,
        type: "spring",
        bounce: 0.4,
      }}
    >
      <ContentContainer>
        <Header>
          <Title>Aanvraag</Title>
          <IconContainer>
            <PersonGreenIcon />
            <PersonGreenIcon />
            <PersonGreyIcon />
            <PersonGreyIcon />
            <PersonGreyIcon />
          </IconContainer>
        </Header>
        <SubTitle>Aangemaakt op 09-09-2020</SubTitle>
        <Footer>
          <Text>Wil je deze aanvraag ondersteunen?</Text>
          <Button onClick={openTransition}>Aansluiten</Button>
        </Footer>
      </ContentContainer>
    </Container>
  )
}

export default ApplicationOverlay