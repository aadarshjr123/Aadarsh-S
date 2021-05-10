import React, { useState } from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu
} from './NavBarElements';
import '../styles/Navbar.css';
import { ReactComponent as MenuIcon } from '../assets/menu.svg';
import { ReactComponent as CloseMenu } from "../assets/x.svg";
import Social from './social.js';
  
const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <div className="header">
      <div className="logo-nav">
        <ul className={click ? "nav-options active" : "nav-options"}>
          <li className="option" onClick={closeMobileMenu}>
            <a className="links" href="/about">About</a>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <a className="links" href="/projects">Projects</a>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <a className="links" href="/contacts">Contacts</a>
          </li>
          
        </ul>
        
      </div>
      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <CloseMenu className="menu-icon" />
        ) : (
          <MenuIcon className="menu-icon" />
        )}
      </div>
    </div>
  );
};
  
export default Navbar;