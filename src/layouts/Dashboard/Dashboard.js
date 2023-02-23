import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../../components/NavBar';

const Dashboard = () => {
    return (
        <div>
            <NavBar />
            <div id='content'>
                <Outlet />
            </div>
        </div>
    )
}

export default Dashboard