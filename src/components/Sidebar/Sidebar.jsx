import React, { useState } from "react";
import "../Sidebar/Sidebar.css";

const Sidebar = ({ handleVisibility }) => {
  return (
    <div className="sidebar">
      <ul>
        <li
          className="sidebar-heading"
          onClick={() => handleVisibility("users")}
        >
          Users
        </li>
        <li
          className="sidebar-heading"
          onClick={() => handleVisibility("subusers")}
        >
          Sub Users
        </li>
        <li
          className="sidebar-heading"
          onClick={() => handleVisibility("menu")}
        >
          Menu
        </li>
        <li
          className="sidebar-heading"
          onClick={() => handleVisibility("services")}
        >
          Services
        </li>
        <li
          className="sidebar-heading"
          onClick={() => handleVisibility("contracts")}
        >
          Contracts
        </li>
        <li
          className="sidebar-heading"
          onClick={() => handleVisibility("announcement")}
        >
          Announcement
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

/* <div className="sidebar">
      <ul>
        <li className="sidebar-heading" onClick={toggleUsersSubMenu}>
          Users
          {showUsersSubMenu && (
            <ul>
              <li>Subusers</li>
              <li>Assign Tasks</li>
            </ul>
          )}
        </li>
      </ul>
      <ul>
        <li className="sidebar-heading" onClick={toggleServicesSubMenu}>
          Services
          {showServicesSubMenu && (
            <ul>
              <li>Customer Support</li>
              <li>Warranty Approvals</li>
            </ul>
          )}
        </li>
      </ul>
    </div>*/
