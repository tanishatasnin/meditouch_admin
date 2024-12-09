//import { useState } from 'react';
import './Sidebar.css';

import logo from './../../../assets/assets/images/logo.png';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="menu-section"> 
      <ul className="menu">
      
        <Link to="/home" className="menu-item">
          <i className="fa fa-home"></i><span>Home</span>
        </Link>
      
      
        <Link to="/emergency" className="menu-item">
          <i className="fa fa-bell"></i> <span>Emergency</span>
        </Link>

        <Link to="/doctor" className="menu-item">
          <i className="fa fa-user-md"></i> <span>Doctors</span>
        </Link>
    
        <Link to="/pending-orders" className="menu-item">
          <i className="fa fa-list"></i> <span>Pending Orders</span>
        </Link>
      
      
        <Link to="/order-history" className="menu-item">
          <i className="fa fa-history"></i> <span>Order History</span>
        </Link>
     
      
        <Link to="/register_doctor" className="menu-item">
          <i className="fa fa-user-plus"></i> <span>Register Doctor</span>
        </Link>
      
      
        <Link to="/add-emergency-doctor" className="menu-item">
          <i className="fa fa-plus-circle"></i> <span>Add Emergency Doctor</span>
        </Link>
      
      
        <Link to="/emergency-doctors" className="menu-item">
          <i className="fa fa-users"></i> <span>Emergency Doctors</span>
        </Link>
      
      
        <Link to="/register_nurse" className="menu-item">
          <i className="fa fa-user-nurse"></i> <span>Add Nurses</span>
        </Link>
      
        <Link to="/nurses" className="menu-item">
          <i className="fa fa-user"></i> <span>Nurses</span>
        </Link>
      
      
        <Link to="/add-agent" className="menu-item">
          <i className="fa fa-user-tie"></i> <span>Add Agent</span>
        </Link>
      
      
        <Link to="/agents" className="menu-item">
          <i className="fa fa-users"></i> <span>Agents</span>
        </Link>
      
        
      </ul>
      </div>
      <br />
      <div className="logout">
      <button className="logout-button">sign out</button>
      </div>
      <br /><br />
      
    </div>
  );
};

export default Sidebar;


