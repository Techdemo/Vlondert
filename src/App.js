import React from 'react';
import CssReset from './config/reset';
import GlobalFonts from './assets/fonts/fonts';

import Main from './app/Main'

const App = () => {
  return (
    <>
      <CssReset />
      <Main />
      <GlobalFonts />
    </>
  )
}

export default App;
