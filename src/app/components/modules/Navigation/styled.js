import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  box-shadow: 0 5px 27px 5px rgba(0,0,0,0.50);
  height: 12.5%;
  overflow: hidden;
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: white;
  display: flex;
  align-items: center;
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: row; 
  justify-content: space-around;
  flex: 1;
  height: 100%;
`;

export const NavItem = styled.li`
  flex: 1;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 100%; 
  width: 100%;
  a {
    text-decoration: none; 
    font-family: 'Arial-Regular';
    color: ${props => props.theme.colors.green};
    &.active {
     
    }
  }
`;

export const LinkElem = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 100%; 
`;