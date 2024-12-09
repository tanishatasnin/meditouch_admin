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
    '/orders': 'Order History',
  };

  // Determine the current page title
  const currentTitle = pageTitles[location.pathname] || 'Dashboard';

  return (
    <header className="header">
      <h2>{currentTitle} <i className="fa fa-user-md"></i> </h2>
      
      <div className="search-bar">
        <input type="text" placeholder="Search" />
        <button><i className="fa fa-search"></i></button>
      </div>
      <div className="profile">
        <span>Kaium Al Limon 2</span>
        <img src="profile-placeholder.jpg" alt="Profile" />
      </div>
    </header>
  );
}

export default Header;
