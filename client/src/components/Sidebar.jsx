import React from "react";
import { NavLink } from "react-router-dom"; // Import NavLink from react-router-dom
import {
  FaCog,
  FaSignOutAlt,
  FaBicycle,
  FaUserFriends,
  FaUsers,
  FaDollarSign,
  FaShieldAlt,
  FaHandHoldingUsd,
} from "react-icons/fa"; // Import icons from react-icons

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__logo">ECO RYDS</div>
      <hr />
      <nav className="sidebar__nav">
        <ul className="space-y-2 text-xl">
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `sidebar__nav-link ${
                  isActive ? "active" : ""
                } flex items-center`
              }
            >
              <FaBicycle className="sidebar__nav-icon mr-2" />
              <span>Scooter Management</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/host-details"
              className={({ isActive }) =>
                `sidebar__nav-link ${
                  isActive ? "active" : ""
                } flex items-center`
              }
            >
              <FaUserFriends className="sidebar__nav-icon mr-2" />
              <span>Host Details</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/user-management"
              className={({ isActive }) =>
                `sidebar__nav-link ${
                  isActive ? "active" : ""
                } flex items-center`
              }
            >
              <FaUsers className="sidebar__nav-icon mr-2" />
              <span>User Management</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/rental-management"
              className={({ isActive }) =>
                `sidebar__nav-link ${
                  isActive ? "active" : ""
                } flex items-center`
              }
            >
              <FaHandHoldingUsd className="sidebar__nav-icon mr-2" />
              <span>Rental Management</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/earnings-payments"
              className={({ isActive }) =>
                `sidebar__nav-link ${
                  isActive ? "active" : ""
                } flex items-center`
              }
            >
              <FaDollarSign className="sidebar__nav-icon mr-2" />
              <span>Earnings and Payments</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/insurance-management"
              className={({ isActive }) =>
                `sidebar__nav-link ${
                  isActive ? "active" : ""
                } flex items-center`
              }
            >
              <FaShieldAlt className="sidebar__nav-icon mr-2" />
              <span>Insurance Management</span>
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="sidebar__bottom">
        <hr />
        <button className="sidebar__button p-2 flex items-center">
          <FaCog className="sidebar__button-icon mr-2" />
          <span className="sidebar__button-text">Settings</span>
        </button>
        <button className="sidebar__button p-2 flex items-center">
          <FaSignOutAlt className="sidebar__button-icon mr-2" />
          <span className="sidebar__button-text">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
