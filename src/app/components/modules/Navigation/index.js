import React from 'react';

import * as ROUTES from '../../../../config/routes';

import { MapIcon, NotificationIcon, ApplicationIcon } from '../../icons/index';
import { NavList, NavItem, Nav, LinkElem } from './styled';

const Navigation = () => {
  return (
    <Nav>
      <NavList>
        <NavItem>
          <LinkElem 
            to={ROUTES.NOTIFICATIONS}
            activeStyle={{
              borderTop: '3px solid rgb(0, 136, 51, .8)',
            }}
          >
            <NotificationIcon />
              Notificaties
          </LinkElem>
        </NavItem>
        <NavItem>
          <LinkElem 
            to={ROUTES.MAP}
            activeStyle={{
              borderTop: '3px solid rgb(0, 136, 51, .8)',
            }}
          >
            <MapIcon />
              Kaart
          </LinkElem>
        </NavItem>
        <NavItem>
          <LinkElem 
            to={ROUTES.APPLICATIONS}
            activeStyle={{
              borderTop: '3px solid rgb(0, 136, 51, .8)',
            }}
          >
            <ApplicationIcon />
              Aanvragen
          </LinkElem>
        </NavItem>
      </NavList>
    </Nav>
  )
};

export default Navigation;