import React from "react";
import { NavLink } from "react-router-dom";
import NavbarCSS from "./Navbar.module.css";
import SearchBar from "./SearchBar";

function Navbar() {
  return (
    <>
      <nav className={NavbarCSS.navbar}>
        {/* logo  */}
        <div className={NavbarCSS.navbarItems + " " + NavbarCSS.logo}>
          World
        </div>
        <div className={NavbarCSS.navbarSearch}>
        <SearchBar />
        </div>
      </nav>
      <nav className={NavbarCSS.navbarItems}>
        <ul> 
          <li>
            <NavLink to="/" className={NavbarCSS.linkStyles}>
              News
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={NavbarCSS.linkStyles}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={NavbarCSS.linkStyles}>
              Contact
            </NavLink>
          </li>
        <hr/>
        </ul>
      </nav>
    </>
  );
}
export default Navbar;
