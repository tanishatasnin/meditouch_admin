import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/navbar';
import Sidebar from '../Navbar/sidebar';
import Header from '../Header/header';
import './Dashboard.css';


const dashboard = () => {
    return (
        <div >
      <Sidebar />
      
        <Header />
       
          <Outlet />
        
    </div>
    );
};

export default dashboard;