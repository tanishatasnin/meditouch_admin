import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/navbar';

const dashboard = () => {
    return (
        <div>
            <h3>I am admin dashboard page but empty </h3>

            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default dashboard;