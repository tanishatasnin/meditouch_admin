import React from 'react';
import { useLocation } from 'react-router-dom';
import './Header.css';
import Search from './search';

function Header1() {
  const location = useLocation();

  // Map paths to page titles
  const pageTitles = {
    '/': 'Good Morning!' ,
    '/doctor': 'Doctors',
    '/nurses' : 'Nurses',
    '/register_nurse' : 'Add A Nurse',
    '/register_doctor' : 'Add A Doctor',
    '/orders': 'Order History',
    '/emergency': 'Emergency Request'
  };

  // Determine the current page title
  const currentTitle = pageTitles[location.pathname] || 'Dashboard';
  

  return (
    <header className="header">
        <div> <h2>{currentTitle}<i className="fa fa-user-md"></i> </h2></div>
      <div>
        <Search></Search>
      </div>
      
    </header>
  );
}

export default Header1;
