import React from "react";
import { FaBars, FaSearch, FaUserCircle } from "react-icons/fa"; // Import necessary icons from react-icons

function Header() {
  return (
    <header className="header">
      <div className="header__left flex items-center">
        <button className="header__menu-icon">
          <FaBars />
        </button>
        <div className="relative ml-4">
          <input
            type="text"
            placeholder="Search"
            className="header__search pl-10"
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>
      </div>
      <div className="header__right flex items-center">
        <button className="header__refer-earn-button">Refer and Earn</button>
        <div className="header__user flex items-center ml-4">
          <FaUserCircle className="header__user-avatar text-2xl" />
          <span className="header__user-name ml-2">Akash Admin</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
