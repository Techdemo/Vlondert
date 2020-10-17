import React from 'react';
import { Container } from './styled';

import { OverlayContext } from './context';

const variants = {
  open: {
    height: "35%"
  }, 
  closed: {
    height: "0"
  }
}

const ApplicationOverlay = () => {
  const { active } = React.useContext(OverlayContext)

  return (
    <Container 
      animate={active ? "open" : "closed"}
      variants={variants}
      transition={{ 
        duration: 0.2 
      }}
    >
      <h1>Dit is de application overlay</h1>
    </Container>
  )
}

export default ApplicationOverlay