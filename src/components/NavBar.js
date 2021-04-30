import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu
} from './NavBarElements';
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
        <NavMenu>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          <NavLink to='/Projects' activeStyle>
            Projects
          </NavLink>
          <NavLink to='/Contacts' activeStyle>
            Contacts
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;