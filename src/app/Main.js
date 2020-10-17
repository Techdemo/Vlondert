import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import * as ROUTES from '../config/routes';
import theme from '../config/theme';
import { AuthContext } from './components/modules/Firebase/authcontext';

import { ApplicationOverlay } from '../app/components/modules';
import OverlayProvider from '../app/components/modules/ApplicationOverlay/context';

import ProtectedRoute from '../config/ProtectedRoute';
import Navigation from './components/modules/Navigation';

import { ApplicationsScreen, LoginScreen, MapScreen, SettingsScreen, AdminScreen, NotificationScreen } from './components/screens';
import { Container } from './styled';
// hier moet nog een complete container komen voor alle components in het scherm

const Main = () => {
  const { user } = React.useContext(AuthContext);
 
  return (
    <ThemeProvider theme={theme}>
      <OverlayProvider>
        <Router>
          <Container>
            <Route exact path={ROUTES.LOGIN} component={LoginScreen} />
            <ProtectedRoute authenticated={user} path={ROUTES.MAP} component={MapScreen} />
            <ProtectedRoute authenticated={user} path={ROUTES.NOTIFICATIONS} component={NotificationScreen} />
            <ProtectedRoute authenticated={user} path={ROUTES.APPLICATIONS} component={ApplicationsScreen} />
            <ProtectedRoute authenticated={user} path={ROUTES.SETTINGS} component={SettingsScreen} />
            <ProtectedRoute authenticated={user} path={ROUTES.ADMIN} component={AdminScreen} />
          </Container>
          <ApplicationOverlay />
          {user ? (
            <Navigation />
          ) : null}
        </Router>
      </OverlayProvider>
    </ThemeProvider>
  )
}

export default Main