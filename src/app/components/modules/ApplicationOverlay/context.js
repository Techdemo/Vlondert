import React from 'react';

export const OverlayContext = React.createContext(null);

const OverlayProvider = ({ children }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [active, setActive] = React.useState(false);
  const [swipeActive, setSwipeActive] = React.useState(false);

  return <OverlayContext.Provider value={{
    active, 
    setActive,
    swipeActive, 
    setSwipeActive
  }}>
    {children}
  </OverlayContext.Provider>
}

export default OverlayProvider