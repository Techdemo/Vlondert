import React from 'react';
import { HeaderContainer, HeaderTitle, ButtonContainer } from './styled'

import { HeaderButton } from './components/index';

const Header = ({ title, buttons }) => {

  return (
    <HeaderContainer>
      <HeaderTitle
        initial={{
          opacity: 0, 
          y: "-10px"
        }}
        animate={{
          opacity: 1,
          y: "0"
        }}
        transition={{ duration: 0.2 }}
      >{title}</HeaderTitle>
      <ButtonContainer>
        {buttons.map((button, index) => (
          <HeaderButton 
            key={index} 
            label={button.label} 
            action={button.action}
            state={button.state}
            />
        ))}
      </ButtonContainer>
    </HeaderContainer>
  )
}

export default Header;