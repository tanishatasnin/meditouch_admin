import React from 'react';
import { useLocation } from 'react-router-dom';
import './Header.css';


function Header() {
  const location = useLocation();

  // Map paths to page titles
  const pageTitles = {
    '/': 'Good Morning!' ,
    '/doctor': 'Doctors',
    '/nurses' : 'Nurses',
    '/register_nurse' : 'Add A Nurse',
    '/register_doctor' : 'Add A Doctor',
    '/orders': 'Order History',
    '/emergency': 'Emergency Request', 
    '/order-history': 'Order History',
    '/pending-orders': 'Pending Orders',
    '/emergency-doctors': 'Emergency Doctors',
    '/add-emergency-doctor' : 'Add Emergency Doctor',
    '/agents': 'Agents' ,
    '/add-agent' : 'Add Agent'

  };

  // Determine the current page title
  const currentTitle = pageTitles[location.pathname] || 'Dashboard';
  

  return (
    <header className="header">
      <h2>{currentTitle} <i className="fa fa-user-md"></i> </h2>
      
      <div className="search-bar-1">
        <input  className ="input1" type="text" placeholder="Search." />
        <button><i className="fa fa-search"></i></button>
      </div>
      <div className="profile">
        <span>Kaium Al Limon 2 </span>
        <img src="profile-placeholder.jpg" alt="Profile" />
      </div>
    </header>
  );
}

export default Header;
