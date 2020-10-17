import React from 'react';
import { OverlayContext } from '../components/modules/ApplicationOverlay/context';

function useClickOutside() {
  
  const ref = React.useRef(null);
 
  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      alert("buiten")
    }
  };
 
  React.useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);
 
  return { ref };
}

export default useClickOutside;