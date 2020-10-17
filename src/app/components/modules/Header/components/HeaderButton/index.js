import React from 'react';

import { Button } from './styled';

const HeaderButton = ({label, action, state}) => {

  const value = Object.values(state)
 
  return (
    <Button 
      onClick={action}
      state={value[0]}
      initial={{
        opacity: 0, 
        y: "-10px"
      }}
      animate={{
        opacity: 1,
        y: "0"
      }}
    >{label}</Button>
  )
}

export default HeaderButton;