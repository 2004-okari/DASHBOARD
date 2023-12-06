import React, { useState } from 'react';
import { Sidebar as SideSec, Menu, MenuItem } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import { IoMenuOutline, IoHomeOutline, IoPeopleOutline, IoAlbumsOutline, IoReceiptOutline, IoPersonOutline, IoCalendarOutline, IoListOutline, IoCreateOutline, IoHelpCircleOutline, IoPieChartOutline, IoBarChartOutline, IoTrendingUpOutline, IoMapOutline } from 'react-icons/io5';
import pic from '../../assets/images/pic-001.png';
import '../../assets/styling/global.css';

function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <SideSec width="240px" collapsed={isCollapsed} backgroundColor="#5672832" transitionDuration={1200} className="section-1">
      <div className="admin-menu">
        {!isCollapsed ? <p>ADMIN</p> : null }
        <Menu>
          <MenuItem>
            <IoMenuOutline className="ham-icon" onClick={() => setIsCollapsed(!isCollapsed)} />
          </MenuItem>
        </Menu>
      </div>
      <div className="profile-section">
        <img className="profile-pic" src={pic} alt="Profile" />
        {!isCollapsed ? (
          <>
            <p className="profile-name">Okari Nyandika</p>
            <p className="profile-role">VP fancy admin</p>
          </>
        ) : null}

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
        <MenuItem icon={<IoHomeOutline />} component={<Link to="/dashboard" />}> Dashboard</MenuItem>
        <p className="nav-item">Data</p>
        <MenuItem icon={<IoPeopleOutline />} component={<Link to="/manage" />}>Manage Team</MenuItem>
        <MenuItem icon={<IoAlbumsOutline />} component={<Link to="/contact" />}>
          Contacts Information
        </MenuItem>
        <MenuItem icon={<IoReceiptOutline />} component={<Link to="/invoice" />}>Invoices Balance</MenuItem>
        <p className="nav-item">Pages</p>
        <MenuItem icon={<IoPersonOutline />} component={<Link to="/profile" />}>Profile Form</MenuItem>
        <MenuItem icon={<IoCalendarOutline />} component={<Link to="/calendar" />}>Calendar</MenuItem>
        <MenuItem icon={<IoListOutline />} component={<Link to="/task" />}>Task Bar</MenuItem>
        <MenuItem icon={<IoCreateOutline />} component={<Link to="/text" />}>Text Editor</MenuItem>
        <MenuItem icon={<IoHelpCircleOutline />} component={<Link to="/faq" />}>FAQ page</MenuItem>
        <p className="nav-item">Charts</p>
        <MenuItem icon={<IoPieChartOutline />} component={<Link to="/pie" />}>Pie Chart</MenuItem>
        <MenuItem icon={<IoBarChartOutline />} component={<Link to="/bar" />}>Bar Chart</MenuItem>
        <MenuItem icon={<IoTrendingUpOutline />} component={<Link to="/line" />}>Line Chart</MenuItem>
        <MenuItem icon={<IoMapOutline />} component={<Link to="/geography" />}>
          Geography Chart
        </MenuItem>
      </Menu>
    </SideSec>
  );
}

export default Sidebar;
