import React, { useState } from 'react';
import { Sidebar as SideSec, Menu, MenuItem } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import { IoMenuOutline } from 'react-icons/io5';
import pic from '../../assets/images/pic-001.png';
import '../../assets/styling/global.css';

function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <SideSec width="240px" collapsed={isCollapsed} backgroundColor="#5672832" transitionDuration={1200} className="section-1">
      <div className="admin-menu">
        <p>ADMIN</p>
        <IoMenuOutline onClick={() => setIsCollapsed(!isCollapsed)} />
      </div>
      <div className="profile-section">
        <img className="profile-pic" src={pic} alt="Profile" />
        <p className="profile-name">OKari Nyandika</p>
        <p className="profile-role">VP fancy admin</p>
      </div>
      <Menu
        menuItemStyles={{
          button: {
            // the active class will be added automatically by react router
            // so we can use it to style the active menu item
            '&.active': {
              backgroundColor: '#13395e',
              color: '#b6c8d9',
            },
          },
        }}
      >
        <MenuItem icon={<IoMenuOutline />} component={<Link to="/dashboard" />}> Dashboard</MenuItem>
        <p className="nav-item">Data</p>
        <MenuItem icon={<IoMenuOutline />} component={<Link to="/manage" />}>Manage Team</MenuItem>
        <MenuItem icon={<IoMenuOutline />} component={<Link to="/contact" />}>
          Contacts Information
        </MenuItem>
        <MenuItem icon={<IoMenuOutline />} component={<Link to="/invoice" />}>Invoices Balance</MenuItem>
        <p className="nav-item">Pages</p>
        <MenuItem icon={<IoMenuOutline />} component={<Link to="/profile" />}>Profile Form</MenuItem>
        <MenuItem icon={<IoMenuOutline />} component={<Link to="/calendar" />}>Calendar</MenuItem>
        <MenuItem icon={<IoMenuOutline />} component={<Link to="/task" />}>Task Bar</MenuItem>
        <MenuItem icon={<IoMenuOutline />} component={<Link to="/text" />}>Text Editor</MenuItem>
        <MenuItem icon={<IoMenuOutline />} component={<Link to="/faq" />}>FAQ page</MenuItem>
        <p className="nav-item">Charts</p>
        <MenuItem icon={<IoMenuOutline />} component={<Link to="/pie" />}>Pie Chart</MenuItem>
        <MenuItem icon={<IoMenuOutline />} component={<Link to="/bar" />}>Bar Chart</MenuItem>
        <MenuItem icon={<IoMenuOutline />} component={<Link to="/line" />}>Line Chart</MenuItem>
        <MenuItem icon={<IoMenuOutline />} component={<Link to="/geography" />}>
          Geography Chart
        </MenuItem>
      </Menu>
    </SideSec>
  );
}

export default Sidebar;
