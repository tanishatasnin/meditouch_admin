import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/navbar';
import Sidebar from '../Navbar/sidebar';
import Header from '../Header/header';
import Home from '../Home/home'
import './Dashboard.css';


const dashboard = () => {
    return (
        <div >
      <Sidebar />
      
        <Header />
       
       <Home></Home>
          <Outlet />
        
    </div>
    );
};

export default dashboard;