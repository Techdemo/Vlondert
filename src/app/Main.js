import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import * as ROUTES from '../config/routes';
import theme from '../config/theme';
import { AuthContext } from './components/modules/Firebase/authcontext';

import ProtectedRoute from '../config/ProtectedRoute';
import Navigation from './components/modules/Navigation';

import { ApplicationsScreen, LoginScreen, MapScreen, SettingsScreen, AdminScreen } from './components/screens';
import { Container } from './styled';
// hier moet nog een complete container komen voor alle components in het scherm

const Main = () => {
  const { user } = React.useContext(AuthContext)

  return (
    <ThemeProvider theme={theme}>
        <Router>
          <Container>
            <Route exact path={ROUTES.LOGIN} component={LoginScreen} />
            <ProtectedRoute authenticated={user} path={ROUTES.MAP} component={MapScreen} />
            <ProtectedRoute authenticated={user} path={ROUTES.APPLICATIONS} component={ApplicationsScreen} />
            <ProtectedRoute authenticated={user} path={ROUTES.SETTINGS} component={SettingsScreen} />
            <ProtectedRoute authenticated={user} path={ROUTES.ADMIN} component={AdminScreen} />
          </Container>
          {user ? (
            <Navigation />
          ) : null}
        </Router>
    </ThemeProvider>
  )
}

export default Main