import React from 'react';
import { useLocation } from 'react-router-dom';
import './Header.css';

function Header2() {
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
        <div> <h2>{currentTitle}</h2></div>
      
    </header>
  );
}

export default Header2;
