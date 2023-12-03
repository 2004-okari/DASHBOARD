import { Icon } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <>
      <div>
        <p>ADMIN</p>
        <Icon />
      </div>
      <div>
        <img src="path/to/image.jpg" alt="Profile" />
        <p>OKari Nyandika</p>
        <p>VP fancy admin</p>
      </div>
      <div>
        <Link to="/dashboard">Dashboard</Link>
        <p>Data</p>
        <Link to="/">Manage Team</Link>
        <Link to="/contact">Contacts Information</Link>
        <Link to="/invoice">Invoices Balance</Link>
        <Link to="/profile">Profile Form</Link>
        <p>Pages</p>
        <Link to="/calendar">Calender</Link>
        <Link to="/task">Task Bar</Link>
        <Link to="/text">Text Editor</Link>
        <Link to="/faq">FAQ page</Link>
        <p>Charts</p>
        <Link to="/pie">Pie Chart</Link>
        <Link to="/bar">Bar Chart</Link>
        <Link to="/line">Line Chart</Link>
        <Link to="/geography">Geography Chart</Link>
      </div>
    </>
  );
}

export default Sidebar;
