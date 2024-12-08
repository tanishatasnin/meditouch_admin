import React from 'react';
import { Outlet } from 'react-router-dom';

const dashboard = () => {
    return (
        <div>
            <h3>I am admin dashboard page but empty </h3>

            <Outlet></Outlet>
        </div>
    );
};

export default dashboard;