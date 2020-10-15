import React from 'react';
import { NavLink } from 'react-router-dom';

import { MapIcon, NotificationIcon, ApplicationIcon } from '../../icons/index';

import { NavList, NavItem, Nav, LinkElem } from './styled';

import * as ROUTES from '../../../../config/routes';

const Navigation = () => {
  return (
    <Nav>
      <NavList>
        <NavItem>
          <LinkElem to={ROUTES.APPLICATIONS}>
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
          <LinkElem to={ROUTES.SETTINGS}>
            <ApplicationIcon />
              Aanvragen
          </LinkElem>
        </NavItem>
      </NavList>
    </Nav>
  )
};

export default Navigation;