import NavbarCSS from "./Navbar.module.css";
import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
       <div className={NavbarCSS.navbar}>
            {/* logo  */}
            <div className={NavbarCSS.navbarItems + " " + NavbarCSS.logo}>
                World
            </div>
        </div>
        <div className={NavbarCSS.navbarItems}>
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
          </ul>
        </div>
    </>
  );
}
export default Navbar;
