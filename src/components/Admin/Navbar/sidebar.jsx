import React, { useState } from 'react';
import './Sidebar.css';


const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <h2>
          Medi<span className="highlight">Touch</span>
        </h2>
      </div>
      <ul className="menu">
        <li className="menu-item">
          <i className="fa fa-home"></i> <span>Home</span>
        </li>
        <li className="menu-item">
          <i className="fa fa-bell"></i> <span>Emergency</span>
        </li>
    
        <li className="menu-item">
          <i className="fa fa-list"></i> <span>Pending Orders</span>
        </li>
        <li className="menu-item">
          <i className="fa fa-history"></i> <span>Order History</span>
        </li>
        <li className="menu-item">
          <i className="fa fa-user-plus"></i> <span>Register Doctor</span>
        </li>
        <li className="menu-item">
          <i className="fa fa-user-md"></i> <span>Doctors</span>
        </li>
        <li className="menu-item">
          <i className="fa fa-plus-circle"></i> <span>Add Emergency Doctor</span>
        </li>
        <li className="menu-item">
          <i className="fa fa-users"></i> <span>Emergency Doctors</span>
        </li>
      </ul>
      <button className="logout-button">sign out</button>
    </div>
  );
};

export default Sidebar;


