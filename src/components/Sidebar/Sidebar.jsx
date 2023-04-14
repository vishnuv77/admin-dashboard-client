import React, { useState } from "react";
import "../Sidebar/Sidebar.css";

const Sidebar = () => {
  const [showUsersSubMenu, setShowUsersSubMenu] = useState(false);
  const [showServicesSubMenu, setShowServicesSubMenu] = useState(false);

  const toggleUsersSubMenu = () => {
    setShowUsersSubMenu(!showUsersSubMenu);
    setShowServicesSubMenu(false);
  };

  const toggleServicesSubMenu = () => {
    setShowServicesSubMenu(!showServicesSubMenu);
    setShowUsersSubMenu(false);
  };

  return (
    <div className="sidebar">
      <ul>
        <li className="sidebar-heading" onClick={toggleUsersSubMenu}>
          Users
        </li>
        <li className="sidebar-heading" onClick={toggleUsersSubMenu}>
          Sub Users
        </li>
        <li className="sidebar-heading" onClick={toggleUsersSubMenu}>
          Menu
        </li>
        <li className="sidebar-heading" onClick={toggleUsersSubMenu}>
          Services
        </li>
        <li className="sidebar-heading" onClick={toggleUsersSubMenu}>
          Contracts
        </li>
        <li className="sidebar-heading" onClick={toggleUsersSubMenu}>
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
