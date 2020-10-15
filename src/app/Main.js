import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import * as ROUTES from '../config/routes';
import theme from '../config/theme';

import Firebase from './components/modules/Firebase/firebase';
import Navigation from './components/modules/Navigation';

import { ApplicationsScreen, LoginScreen, MapScreen, SettingsScreen, AdminScreen } from './components/screens';
import { Container } from './styled';
// hier moet nog een complete container komen voor alle components in het scherm

const Main = () => {
  // const [auth, isAuth] = useState(false);

  // useEffect(() => {
  //   firebase.auth().onAuthStateChange((authenticated) => {
  //     authenticated 
  //     ? ( isAuth(true))
  //     : ( isAuth(false))
  //   })
  // }, [])

  return (
    <ThemeProvider theme={theme}>
        <Router>
          <Container>
            <Route exact path={ROUTES.LOGIN} component={LoginScreen} />
            <Route path={ROUTES.MAP} component={MapScreen} />
            <Route path={ROUTES.APPLICATIONS} component={ApplicationsScreen} />
            <Route path={ROUTES.SETTINGS} component={SettingsScreen} />
            <Route path={ROUTES.ADMIN} component={AdminScreen} />
          </Container>
          <Navigation />
        </Router>
    </ThemeProvider>
  )
}

export default Main