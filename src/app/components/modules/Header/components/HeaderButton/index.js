import React from 'react';

import { Button } from './styled';

const HeaderButton = ({label, action}) => {
  
  return (
    <Button onClick={action}>{label}</Button>
  )
}

export default HeaderButton;