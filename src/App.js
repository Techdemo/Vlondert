import React from 'react';
import CssReset from './config/reset';
import GlobalFonts from './assets/fonts/fonts';

import Main from './app/Main'
import AuthProvider from './app/components/modules/Firebase/authcontext';

const App = () => {
  return (
    <>
    <AuthProvider>
      <Main />
    </AuthProvider>
    <GlobalFonts />
    <CssReset />
    </>
  )
}

export default App;
