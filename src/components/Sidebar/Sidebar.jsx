import React from "react";
import "../styles/Sidebar.css";


const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">MEDI-CAPS UNIVERSITY</div>
      <ul>
        <li>Dashboard</li>
        <li>Profile</li>
        <li>Logout</li>
      </ul>
    </div>
  );
};

export default Sidebar;
