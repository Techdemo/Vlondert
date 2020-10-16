import React from 'react';
import { HeaderContainer, HeaderTitle, ButtonContainer } from './styled'

import { HeaderButton } from './components/index';

const Header = ({title, buttons}) => {

  return (
    <HeaderContainer>
      <HeaderTitle>{title}</HeaderTitle>
      <ButtonContainer>
        {buttons.map((button, index) => (
          <HeaderButton key={index} label={button.label} action={button.action} />
        ))}
      </ButtonContainer>
    </HeaderContainer>
  )
}

export default Header;