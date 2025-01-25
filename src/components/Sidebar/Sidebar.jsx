import React from "react";
import "../../styles/Sidebar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faUser, faSignOutAlt, faComments, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top-section">
        <ul>
          <li className="with-line">
            <FontAwesomeIcon icon={faTachometerAlt} />
            <span>Dashboard</span>
          </li>
          <li className="with-line">
            <FontAwesomeIcon icon={faUser} />
            <span>Profile</span>
          </li>
          <li className="with-line">
            <FontAwesomeIcon icon={faSignOutAlt} />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom-section">
        <ul>
          <li className="with-line">
            <FontAwesomeIcon icon={faComments} />
            <span>Chat Box</span>
          </li>
          <li className="back-icon">
            <FontAwesomeIcon icon={faChevronLeft} />
            <span>Back</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
