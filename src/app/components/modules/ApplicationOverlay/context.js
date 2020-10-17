import React from 'react';

export const OverlayContext = React.createContext(null);

const OverlayProvider = ({ children }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [active, setActive] = React.useState(false);
  
  return <OverlayContext.Provider value={{
    active, 
    setActive
  }}>
    {children}
  </OverlayContext.Provider>
}

export default OverlayProvider