import React from "react";
import { NavLink } from "react-router-dom";
import NavbarCSS from "./Navbar.module.css";
import SearchBar from "./SearchBar";

function Navbar({ search, onSearchChange, categories }) {
  console.log("navbar categories", categories);
  const allCategories = categories.map((category) => (
    <li key={category.id}>
      <NavLink
        to={"/categories/" + category.name}
        className={NavbarCSS.linkStyles}
      >
        {category.name}
      </NavLink>
    </li>
  ));
  return (
    <>
      <nav className={NavbarCSS.navbar}>
        {/* logo  */}
        <div className={NavbarCSS.navbarItems + " " + NavbarCSS.logo}>
          World
        </div>
        <div className={NavbarCSS.navbarSearch}>
          <SearchBar search={search} onSearchChange={onSearchChange} />
        </div>
      </nav>
      <nav className={NavbarCSS.navbarItems}>
        <ul>
          {allCategories}
          {/* <li>
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
          </li> */}
          <NavLink to="/addBlogs" className={NavbarCSS.linkStyles}>
            <button>Add New Post</button>
          </NavLink>

          <hr />
        </ul>
      </nav>
    </>
  );
}
export default Navbar;
