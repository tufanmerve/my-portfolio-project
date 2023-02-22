import React from 'react'
import { Outlet } from 'react-router-dom';
import NavBar from '../../components/NavBar';

function DashboardLayout() {
  return (
    <div>
      <NavBar />
      <div id='navbar'>
        <Outlet />
      </div>
    </div>
  )
}

export default DashboardLayout;