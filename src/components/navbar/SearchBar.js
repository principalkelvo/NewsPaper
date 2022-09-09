import React from "react";
import SearchBarCSS from "./SearchBar.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function SearchBar({search, onSearchChange}) {
  return (
    <>
      <form className={SearchBarCSS.search} >
        <input
          className={SearchBarCSS.input}
          type="text"
          placeholder="Search..."
          value={search}
          onChange={e => onSearchChange(e.target.value)}
        ></input>
        <button className={SearchBarCSS.searchInput}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </form>
    </>
  );
}
export default SearchBar;