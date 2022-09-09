import React from "react";
import { NavLink } from "react-router-dom";
import NavbarCSS from "./Navbar.module.css";
import SearchBar from "./SearchBar";

function Navbar({search, onSearchChange}) {
  return (
    <>
      <nav className={NavbarCSS.navbar}>
        {/* logo  */}
        <div className={NavbarCSS.navbarItems + " " + NavbarCSS.logo}>
          World
        </div>
        <div className={NavbarCSS.navbarSearch}>
        <SearchBar search ={search} onSearchChange={onSearchChange}/>
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
              Sports
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={NavbarCSS.linkStyles}>
              Life
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={NavbarCSS.linkStyles}>
              Travel
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={NavbarCSS.linkStyles}>
              Business
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={NavbarCSS.linkStyles}>
              Entertainment
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={NavbarCSS.linkStyles}>
              Tech
            </NavLink>
          </li>
        <hr/>
        </ul>
      </nav>
    </>
  );
}
export default Navbar;
