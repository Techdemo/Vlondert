import React from 'react';
import firebaseApp from './firebase';

import * as ROUTES from '../../../../config/routes';
export const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    firebaseApp.auth().onAuthStateChanged(setUser);
  }, [])

  const handleLogin = async data => {
    const { email, password } = data;
    
    return firebaseApp
      .auth()
      .signInWithEmailAndPassword(email, password)

  }

  return <AuthContext.Provider value={{
    user, 
    handleLogin
  }}>
    {children}
  </AuthContext.Provider>
}

export default AuthProvider