import React from 'react';
import {
  IoSearchOutline,
  IoNotificationsOutline,
  IoMoonOutline,
  IoSunnyOutline,
  IoSettingsOutline,
  IoPersonOutline,
} from 'react-icons/io5';
import '../../assets/styling/global.css';

function Topbar() {
  return (
    <div className="topbar-container">
      <div className="topbar-search">
        <input
          type="search"
          placeholder="Search..."
          className="topbar-search-input"
        />
        <IoSearchOutline className="topbar-icons-1" />
      </div>
      <div className="topbar-icons-container">
        <IoNotificationsOutline className="topbar-icons" />
        <IoMoonOutline className="topbar-icons" />
        <IoSunnyOutline className="topbar-icons" />
        <IoSettingsOutline className="topbar-icons" />
        <IoPersonOutline className="topbar-icons" />
      </div>
    </div>
  );
}

export default Topbar;
