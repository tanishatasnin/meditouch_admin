import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/navbar';
import Sidebar from '../Navbar/sidebar';


const dashboard = () => {
    return (
        <div>
            {/* <h3>I am admin dashboard page but empty </h3> */}

            <Sidebar></Sidebar>
            <Outlet></Outlet>
        </div>
    );
};

export default dashboard;