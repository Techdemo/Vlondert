import React from 'react';

import * as ROUTES from '../../../../config/routes';

import { MapIcon, NotificationIcon, ApplicationIcon } from '../../icons/index';
import { NavList, NavItem, Nav, LinkElem } from './styled';

const Navigation = () => {
  return (
    <Nav>
      <NavList>
        <NavItem>
          <LinkElem to={ROUTES.NOTIFICATIONS}>
            <NotificationIcon />
              Notificaties
          </LinkElem>
        </NavItem>
        <NavItem>
          <LinkElem to={ROUTES.MAP}>
            <MapIcon />
              Kaart
          </LinkElem>
        </NavItem>
        <NavItem>
          <LinkElem to={ROUTES.APPLICATIONS}>
            <ApplicationIcon />
              Aanvragen
          </LinkElem>
        </NavItem>
      </NavList>
    </Nav>
  )
};

export default Navigation;